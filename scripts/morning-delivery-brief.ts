#!/usr/bin/env tsx
/**
 * 무무 아침 배송 브리프 — morning-delivery-brief.ts
 *
 * Notion 무무_구독자DB를 조회하여 오늘 배송 대상 고객 리스트를 정리하고
 * Slack #morning-brief 채널에 발송합니다.
 *
 * 실행:  npx tsx scripts/morning-delivery-brief.ts
 * 크론:  0 7 * * * cd /app && npx tsx scripts/morning-delivery-brief.ts
 *
 * 필수 환경 변수:
 *   NOTION_API_KEY          — Notion Internal Integration Token
 *   NOTION_SUBSCRIBER_DB_ID — 무무_구독자DB ID (기본값 하드코딩)
 *   SLACK_WEBHOOK_URL       — Slack Incoming Webhook URL
 */

import { Client } from "@notionhq/client"
import type {
  PageObjectResponse,
  RichTextItemResponse,
} from "@notionhq/client/build/src/api-endpoints"

// ── 환경 변수 ──────────────────────────────────────────────────────────────

const NOTION_API_KEY    = process.env.NOTION_API_KEY!
const SUBSCRIBER_DB_ID  =
  process.env.NOTION_SUBSCRIBER_DB_ID ?? "dfe5da8e-d56d-401c-a420-86b0c2cfa76d"
const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL!

// ── 세트별 우유 / 요거트 기본 수량 ────────────────────────────────────────
// 기타 세트는 메모에서 자동 파싱하므로 여기서 제외

const SET_QTY: Record<string, { milk: number; yogurt: number }> = {
  "우유세트":       { milk: 2, yogurt: 0 },
  "요거트세트":     { milk: 0, yogurt: 2 },
  "반반세트":       { milk: 1, yogurt: 1 },
  "더블세트":       { milk: 2, yogurt: 2 },
  "요거트3개":      { milk: 0, yogurt: 3 },
  "요거트 4개":     { milk: 0, yogurt: 4 },
  "우유2 요거트1":  { milk: 2, yogurt: 1 },
}

// ── 배송주기 → 최소 경과 일수 ─────────────────────────────────────────────

const CYCLE_DAYS: Record<string, number> = {
  "매주":  7,
  "격주":  14,
  "월1회": 30,
}

// ── 타입 ──────────────────────────────────────────────────────────────────

interface Subscriber {
  id: string
  이름: string
  세트: string
  메모: string
  배송상태: string
  배송주기: string
  최근배송일: string | null
  종료일: string | null
  주소: string
  활성: boolean
}

interface DeliveryItem extends Subscriber {
  milk: number
  yogurt: number
  setLabel: string
  overdue: boolean
}

// ── 헬퍼 ──────────────────────────────────────────────────────────────────

function richText(rt: RichTextItemResponse[]): string {
  return rt.map((t) => t.plain_text).join("")
}

function parseSubscriber(page: PageObjectResponse): Subscriber {
  const p = page.properties
  return {
    id:        page.id,
    이름:       p["이름"]?.type === "title"      ? richText(p["이름"].title)              : "",
    세트:       p["세트"]?.type === "select"      ? (p["세트"].select?.name ?? "")         : "",
    메모:       p["메모"]?.type === "rich_text"   ? richText(p["메모"].rich_text)          : "",
    배송상태:   p["배송상태"]?.type === "select"  ? (p["배송상태"].select?.name ?? "")     : "",
    배송주기:   p["배송주기"]?.type === "select"  ? (p["배송주기"].select?.name ?? "")     : "",
    최근배송일: p["최근배송일"]?.type === "date"  ? (p["최근배송일"].date?.start ?? null)  : null,
    종료일:     p["종료일"]?.type === "date"      ? (p["종료일"].date?.start ?? null)      : null,
    주소:       p["주소"]?.type === "rich_text"   ? richText(p["주소"].rich_text)          : "",
    활성:       p["활성"]?.type === "checkbox"    ? p["활성"].checkbox                     : false,
  }
}

/**
 * '기타' 세트: 메모에서 "우유 N개", "요거트 N개" 패턴 파싱
 * 예) "우유 4개, 요거트 2개" → { milk: 4, yogurt: 2 }
 */
function parseCustomQty(memo: string): { milk: number; yogurt: number } {
  const milkMatch   = memo.match(/우유\s*(\d+)\s*개/)
  const yogurtMatch = memo.match(/요거트\s*(\d+)\s*개/)
  return {
    milk:   milkMatch   ? parseInt(milkMatch[1],   10) : 0,
    yogurt: yogurtMatch ? parseInt(yogurtMatch[1], 10) : 0,
  }
}

function resolveQty(sub: Subscriber): { milk: number; yogurt: number; label: string } {
  if (sub.세트 === "기타") {
    const q = parseCustomQty(sub.메모)
    const detail = q.milk || q.yogurt
      ? `우유 ${q.milk}개·요거트 ${q.yogurt}개`
      : "메모 확인 필요"
    return { ...q, label: `기타 (${detail})` }
  }
  const q = SET_QTY[sub.세트] ?? { milk: 0, yogurt: 0 }
  const detail = `우유 ${q.milk}개·요거트 ${q.yogurt}개`
  return { ...q, label: sub.세트 ? `${sub.세트} (${detail})` : "세트 미지정" }
}

/** 만료 여부: 종료일이 오늘 날짜(자정)보다 이전이면 만료 */
function isExpired(sub: Subscriber, today: Date): boolean {
  if (!sub.종료일) return false
  return new Date(sub.종료일) < today
}

/**
 * 오늘 배송 필요 여부 판단
 * 1) 배송상태 === '집하완료' → 이미 발송 중, 포함
 * 2) (오늘 - 최근배송일) >= 배송주기 일수 → 주기 도달, 포함
 * 3) 최근배송일이 없으면 최초 배송 대상으로 포함
 */
function needsDeliveryToday(sub: Subscriber, today: Date): boolean {
  if (sub.배송상태 === "집하완료") return true

  const cycleDays = CYCLE_DAYS[sub.배송주기]
  if (!cycleDays) return false

  if (!sub.최근배송일) return true // 배송 이력 없음 → 즉시 포함

  const lastDate = new Date(sub.최근배송일)
  const elapsed  = Math.floor((today.getTime() - lastDate.getTime()) / 86_400_000)
  return elapsed >= cycleDays
}

// ── Notion 전체 구독자 조회 ───────────────────────────────────────────────

async function fetchSubscribers(): Promise<Subscriber[]> {
  const notion = new Client({ auth: NOTION_API_KEY })
  const all: Subscriber[] = []
  let cursor: string | undefined

  do {
    const res = await notion.databases.query({
      database_id: SUBSCRIBER_DB_ID,
      start_cursor: cursor,
      page_size: 100,
    })
    for (const r of res.results) {
      if ("properties" in r) {
        all.push(parseSubscriber(r as PageObjectResponse))
      }
    }
    cursor = res.has_more ? (res.next_cursor ?? undefined) : undefined
  } while (cursor)

  return all
}

// ── Slack 발송 ────────────────────────────────────────────────────────────

async function sendSlack(text: string): Promise<void> {
  const res = await fetch(SLACK_WEBHOOK_URL, {
    method:  "POST",
    headers: { "Content-Type": "application/json" },
    body:    JSON.stringify({ text }),
  })
  if (!res.ok) {
    throw new Error(`Slack 발송 실패: ${res.status} ${await res.text()}`)
  }
}

// ── 메시지 포맷 ──────────────────────────────────────────────────────────

function formatMessage(list: DeliveryItem[], today: Date): string {
  const ymd = today.toLocaleDateString("ko-KR", {
    year: "numeric", month: "long", day: "numeric", weekday: "short",
  })
  const totalMilk   = list.reduce((s, c) => s + c.milk,   0)
  const totalYogurt = list.reduce((s, c) => s + c.yogurt, 0)

  const lines: string[] = [
    `🥛 *무무 오늘의 배송 리스트 — ${ymd}*`,
    "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
    `총 *${list.length}명* | 🥛 우유 *${totalMilk}개* · 🍶 요거트 *${totalYogurt}개*`,
    "",
  ]

  list.forEach((sub, i) => {
    const overdueNote = sub.overdue ? "  ⚠️ _주기 초과_" : ""
    const statusBadge = sub.배송상태 === "집하완료" ? "🚚 집하완료" : "📦 배송 예정"
    lines.push(`*${i + 1}. ${sub.이름}*  ${statusBadge}${overdueNote}`)
    lines.push(`   • 세트: ${sub.setLabel}`)
    lines.push(`   • 주소: ${sub.주소 || "주소 미등록"}`)
    lines.push("")
  })

  lines.push("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━")
  lines.push(`🥛 우유 합계: *${totalMilk}개*   🍶 요거트 합계: *${totalYogurt}개*`)

  return lines.join("\n")
}

// ── 메인 ──────────────────────────────────────────────────────────────────

async function main(): Promise<void> {
  if (!NOTION_API_KEY)    throw new Error("NOTION_API_KEY 환경 변수가 필요합니다.")
  if (!SLACK_WEBHOOK_URL) throw new Error("SLACK_WEBHOOK_URL 환경 변수가 필요합니다.")

  const today = new Date()
  today.setHours(0, 0, 0, 0)

  console.log(`📅 조회일: ${today.toISOString().slice(0, 10)}`)

  const subscribers = await fetchSubscribers()
  console.log(`📋 전체 구독자: ${subscribers.length}명`)

  const valid = subscribers.filter((s) => s.활성 && !isExpired(s, today))
  console.log(`✅ 활성+유효 구독자: ${valid.length}명`)

  const deliveryList: DeliveryItem[] = valid
    .filter((s) => needsDeliveryToday(s, today))
    .map((s) => {
      const { milk, yogurt, label } = resolveQty(s)
      const overdue =
        s.배송상태 !== "집하완료" &&
        !!s.최근배송일 &&
        Math.floor((today.getTime() - new Date(s.최근배송일).getTime()) / 86_400_000) >
          (CYCLE_DAYS[s.배송주기] ?? 0)
      return { ...s, milk, yogurt, setLabel: label, overdue }
    })

  console.log(`🚚 오늘 배송 대상: ${deliveryList.length}명`)

  if (deliveryList.length === 0) {
    const ymd = today.toLocaleDateString("ko-KR", {
      year: "numeric", month: "long", day: "numeric", weekday: "short",
    })
    await sendSlack(`🥛 *무무 배송 브리프 — ${ymd}*\n오늘 배송 대상 고객이 없습니다.`)
    console.log("✅ '배송 없음' 메시지 Slack 발송 완료")
    return
  }

  const message = formatMessage(deliveryList, today)
  console.log("\n── 발송 메시지 미리보기 ──")
  console.log(message)
  console.log("─────────────────────────\n")

  await sendSlack(message)
  console.log("✅ Slack #morning-brief 발송 완료")
}

main().catch((err) => {
  console.error("❌ 오류:", err)
  process.exit(1)
})
