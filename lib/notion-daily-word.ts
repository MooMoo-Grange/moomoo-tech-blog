import { Client } from "@notionhq/client"
import type {
  BlockObjectResponse,
  PageObjectResponse,
  RichTextItemResponse,
} from "@notionhq/client/build/src/api-endpoints"

const notion = new Client({ auth: process.env.NOTION_API_KEY })
const dataSourceId = process.env.NOTION_DATA_SOURCE_ID_DAILY_WORD!

// ── Types ───────────────────────────────────────────────
export interface DailyWord {
  id: string
  title: string
  scripture: string       // 성경구절
  meditation: string      // 묵상본문
  prayer: string          // 기도문
  season: string          // 시즌 (교회력)
  author: string          // 작성자
  date: string            // 날짜
  status: string
}

export interface DailyWordWithContent extends DailyWord {
  blocks: BlockObjectResponse[]
}

// ── Helpers ─────────────────────────────────────────────
function extractRichText(rt: RichTextItemResponse[]): string {
  return rt.map((t) => t.plain_text).join("")
}

function extractDailyWord(page: PageObjectResponse): DailyWord {
  const props = page.properties

  const titleProp = props["제목"]
  const title =
    titleProp?.type === "title" ? extractRichText(titleProp.title) : "제목 없음"

  const scriptProp = props["성경구절"]
  const scripture =
    scriptProp?.type === "rich_text" ? extractRichText(scriptProp.rich_text) : ""

  const meditationProp = props["묵상본문"]
  const meditation =
    meditationProp?.type === "rich_text"
      ? extractRichText(meditationProp.rich_text)
      : ""

  const prayerProp = props["기도문"]
  const prayer =
    prayerProp?.type === "rich_text" ? extractRichText(prayerProp.rich_text) : ""

  const seasonProp = props["시즌"]
  const season =
    seasonProp?.type === "select" ? seasonProp.select?.name ?? "" : ""

  const authorProp = props["작성자"]
  const author =
    authorProp?.type === "rich_text"
      ? extractRichText(authorProp.rich_text) || "예수원"
      : "예수원"

  const dateProp = props["날짜"]
  const date =
    dateProp?.type === "date"
      ? dateProp.date?.start ?? new Date().toISOString().split("T")[0]
      : new Date().toISOString().split("T")[0]

  const statusProp = props["Status"]
  let status = "Draft"
  if (statusProp?.type === "select") {
    const name = statusProp.select?.name ?? ""
    status = name === "Published" ? "Published" : "Draft"
  }

  return { id: page.id, title, scripture, meditation, prayer, season, author, date, status }
}

// ── Public API ──────────────────────────────────────────

/** Published 상태 묵상 전체 조회 (날짜 내림차순) */
export async function getAllDailyWords(): Promise<DailyWord[]> {
  try {
    const allPages: PageObjectResponse[] = []
    let cursor: string | undefined

    do {
      const response = await notion.dataSources.query({
        data_source_id: dataSourceId,
        start_cursor: cursor,
        page_size: 100,
        sorts: [{ property: "날짜", direction: "descending" }],
      })

      const pages = response.results.filter(
        (r: unknown): r is PageObjectResponse =>
          typeof r === "object" && r !== null && "properties" in r
      )
      allPages.push(...pages)
      cursor = response.has_more ? (response.next_cursor ?? undefined) : undefined
    } while (cursor)

    return allPages
      .map(extractDailyWord)
      .filter((p) => p.status === "Published")
  } catch (err) {
    console.error("Failed to fetch daily words:", err)
    return []
  }
}

/** 오늘 날짜 기준 가장 최근 묵상 1개 */
export async function getLatestDailyWord(): Promise<DailyWord | null> {
  const all = await getAllDailyWords()
  return all.length > 0 ? all[0] : null
}

/** id로 단일 묵상 + 블록 내용 조회 */
export async function getDailyWordById(
  id: string
): Promise<DailyWordWithContent | null> {
  try {
    const allPages: PageObjectResponse[] = []
    let cursor: string | undefined

    do {
      const response = await notion.dataSources.query({
        data_source_id: dataSourceId,
        start_cursor: cursor,
        page_size: 100,
      })
      const pages = response.results.filter(
        (r: unknown): r is PageObjectResponse =>
          typeof r === "object" && r !== null && "properties" in r
      )
      allPages.push(...pages)
      cursor = response.has_more ? (response.next_cursor ?? undefined) : undefined
    } while (cursor)

    const page = allPages.find((p) => p.id === id)
    if (!page) return null

    const word = extractDailyWord(page)
    const blocks = await getBlocks(page.id)
    return { ...word, blocks }
  } catch (err) {
    console.error("Failed to fetch daily word by id:", err)
    return null
  }
}

async function getBlocks(blockId: string): Promise<BlockObjectResponse[]> {
  const blocks: BlockObjectResponse[] = []
  let cursor: string | undefined

  do {
    const response = await notion.blocks.children.list({
      block_id: blockId,
      start_cursor: cursor,
      page_size: 100,
    })
    const results = response.results.filter(
      (b): b is BlockObjectResponse => "type" in b
    )
    for (const block of results) {
      blocks.push(block)
      if (block.has_children && block.type !== "child_page") {
        const children = await getBlocks(block.id)
        ;(block as any)[block.type].children = children
      }
    }
    cursor = response.has_more ? response.next_cursor ?? undefined : undefined
  } while (cursor)

  return blocks
}

/** 교회력 시즌 목록 */
export async function getDailyWordSeasons(): Promise<string[]> {
  const all = await getAllDailyWords()
  const seasons = new Set(all.map((w) => w.season).filter(Boolean))
  return Array.from(seasons)
}
