import { Client } from "@notionhq/client"
import type {
  PageObjectResponse,
  RichTextItemResponse,
} from "@notionhq/client/build/src/api-endpoints"

const notion = new Client({ auth: process.env.NOTION_API_KEY })
const dataSourceId = process.env.NOTION_DATA_SOURCE_ID_WILDERNESS!

// ── Types ───────────────────────────────────────────────
export interface WildernessEntry {
  id: string
  title: string
  chapter: string         // 챕터 (9개 섹션)
  contentType: string     // 콘텐츠유형: 본문/인용구/타임라인/성경구절/사진설명
  originalText: string    // 원문(영문)
  translatedText: string  // 번역(한글)
  speaker: string         // 화자 (인용구용)
  year: string            // 연도 (타임라인용)
  order: number           // 순서
  status: string
}

// 챕터 순서 정의
export const CHAPTER_ORDER = [
  "Home: 서론",
  "Timeline: 연표",
  "Founding: 설립 비전",
  "Community: 공동체 생활",
  "Trials: 시련과 시험",
  "Architecture: 건축",
  "Grange: 삼수령 목장",
  "Theology: 신학",
  "Legacy: 유산",
]

// ── Helpers ─────────────────────────────────────────────
function extractRichText(rt: RichTextItemResponse[]): string {
  return rt.map((t) => t.plain_text).join("")
}

function extractEntry(page: PageObjectResponse): WildernessEntry {
  const props = page.properties

  const titleProp = props["제목"]
  const title =
    titleProp?.type === "title" ? extractRichText(titleProp.title) : "제목 없음"

  const chapterProp = props["챕터"]
  const chapter =
    chapterProp?.type === "select" ? chapterProp.select?.name ?? "" : ""

  const typeProp = props["콘텐츠유형"]
  const contentType =
    typeProp?.type === "select" ? typeProp.select?.name ?? "본문" : "본문"

  const origProp = props["원문(영문)"]
  const originalText =
    origProp?.type === "rich_text" ? extractRichText(origProp.rich_text) : ""

  const transProp = props["번역(한글)"]
  const translatedText =
    transProp?.type === "rich_text" ? extractRichText(transProp.rich_text) : ""

  const speakerProp = props["화자"]
  const speaker =
    speakerProp?.type === "rich_text" ? extractRichText(speakerProp.rich_text) : ""

  const yearProp = props["연도"]
  const year =
    yearProp?.type === "rich_text" ? extractRichText(yearProp.rich_text) : ""

  const orderProp = props["순서"]
  const order = orderProp?.type === "number" ? orderProp.number ?? 0 : 0

  const statusProp = props["Status"]
  let status = "Draft"
  if (statusProp?.type === "select") {
    const name = statusProp.select?.name ?? ""
    status = ["Published", "Review"].includes(name) ? "Published" : "Draft"
  }

  return {
    id: page.id,
    title,
    chapter,
    contentType,
    originalText,
    translatedText,
    speaker,
    year,
    order,
    status,
  }
}

// ── Public API ──────────────────────────────────────────

/** Published 엔트리 전체 조회 (챕터 + 순서 정렬) */
export async function getAllWildernessEntries(): Promise<WildernessEntry[]> {
  try {
    const allPages: PageObjectResponse[] = []
    let cursor: string | undefined

    do {
      const response = await notion.dataSources.query({
        data_source_id: dataSourceId,
        start_cursor: cursor,
        page_size: 100,
        sorts: [{ property: "순서", direction: "ascending" }],
      })

      const pages = response.results.filter(
        (r: unknown): r is PageObjectResponse =>
          typeof r === "object" && r !== null && "properties" in r
      )
      allPages.push(...pages)
      cursor = response.has_more ? (response.next_cursor ?? undefined) : undefined
    } while (cursor)

    return allPages
      .map(extractEntry)
      .filter((e) => e.status === "Published")
      .sort((a, b) => {
        // 챕터 순서 우선, 동일 챕터면 순서(order) 기준
        const ai = CHAPTER_ORDER.indexOf(a.chapter)
        const bi = CHAPTER_ORDER.indexOf(b.chapter)
        if (ai !== bi) return ai - bi
        return a.order - b.order
      })
  } catch (err) {
    console.error("Failed to fetch wilderness entries:", err)
    return []
  }
}

/** 챕터별 그룹핑 */
export async function getWildernessEntriesByChapter(): Promise<
  Record<string, WildernessEntry[]>
> {
  const all = await getAllWildernessEntries()
  const grouped: Record<string, WildernessEntry[]> = {}

  for (const chapter of CHAPTER_ORDER) {
    const entries = all.filter((e) => e.chapter === chapter)
    if (entries.length > 0) grouped[chapter] = entries
  }

  return grouped
}
