import { Client } from "@notionhq/client"
import type {
  PageObjectResponse,
  RichTextItemResponse,
} from "@notionhq/client/build/src/api-endpoints"

const notion = new Client({ auth: process.env.NOTION_API_KEY })
const dataSourceId = process.env.NOTION_DATA_SOURCE_ID_FUNDING!

// ── Types ──────────────────────────────────────────────

export interface FundingDonor {
  id: string
  name: string
  amount: number        // KRW 금액 (프로그레스 바 계산용)
  displayAmount?: string // 화면 표시용 금액 (예: "$17,000")
  label: string         // 후원 성격 (예: "Passing on the Gift")
  status: string
}

export interface FundingStats {
  raised: number        // Active 후원자 금액 합계
  goal: number          // 목표 금액 (고정: 2억원)
  donors: FundingDonor[]
}

// ── Helpers ────────────────────────────────────────────

function extractRichText(rt: RichTextItemResponse[]): string {
  return rt.map((t) => t.plain_text).join("")
}

function extractDonor(page: PageObjectResponse): FundingDonor {
  const props = page.properties

  const nameProp = props["후원자명"]
  const name =
    nameProp?.type === "title" ? extractRichText(nameProp.title) : "후원자"

  const amountProp = props["금액"]
  const amount =
    amountProp?.type === "number" ? (amountProp.number ?? 0) : 0

  const displayAmountProp = props["표시금액"]
  const displayAmountRaw =
    displayAmountProp?.type === "rich_text"
      ? extractRichText(displayAmountProp.rich_text).trim()
      : ""
  const displayAmount = displayAmountRaw || undefined

  const labelProp = props["레이블"]
  const label =
    labelProp?.type === "rich_text"
      ? extractRichText(labelProp.rich_text) || "후원"
      : "후원"

  const statusProp = props["Status"]
  const status =
    statusProp?.type === "select"
      ? (statusProp.select?.name ?? "Hidden")
      : "Hidden"

  return { id: page.id, name, amount, displayAmount, label, status }
}

// ── Public API ─────────────────────────────────────────

/** Active 후원자 전체 조회 (금액 내림차순) */
export async function getFundingDonors(): Promise<FundingDonor[]> {
  try {
    const allPages: PageObjectResponse[] = []
    let cursor: string | undefined

    do {
      const response = await notion.dataSources.query({
        data_source_id: dataSourceId,
        start_cursor: cursor,
        page_size: 100,
        sorts: [{ property: "금액", direction: "descending" }],
      })

      const pages = response.results.filter(
        (r: unknown): r is PageObjectResponse =>
          typeof r === "object" && r !== null && "properties" in r
      )
      allPages.push(...pages)
      cursor = response.has_more ? (response.next_cursor ?? undefined) : undefined
    } while (cursor)

    return allPages
      .map(extractDonor)
      .filter((d) => d.status === "Active")
  } catch (err) {
    console.error("Failed to fetch funding donors:", err)
    return []
  }
}

/** 펀딩 대시보드용 통합 데이터: raised(합계), goal, donors */
export async function getFundingStats(): Promise<FundingStats> {
  const donors = await getFundingDonors()
  const raised = donors.reduce((sum, d) => sum + d.amount, 0)
  return {
    raised,
    goal: 200_000_000, // 2억원 목표
    donors,
  }
}
