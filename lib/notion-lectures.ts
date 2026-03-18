import { Client } from "@notionhq/client"
import type {
  BlockObjectResponse,
  PageObjectResponse,
  RichTextItemResponse,
} from "@notionhq/client/build/src/api-endpoints"

const notion = new Client({ auth: process.env.NOTION_API_KEY })
const dataSourceId = process.env.NOTION_DATA_SOURCE_ID_LECTURES!

// ── Types ───────────────────────────────────────────────
export interface Lecture {
  id: string
  title: string
  speaker: string         // 강사
  summary: string         // 요약
  audioUrl: string | null // 오디오URL
  topic: string           // 주제
  era: string             // 시대
  language: string        // 언어
  date: string            // 날짜
  status: string
}

export interface LectureWithContent extends Lecture {
  blocks: BlockObjectResponse[]
}

// ── Helpers ─────────────────────────────────────────────
function extractRichText(rt: RichTextItemResponse[]): string {
  return rt.map((t) => t.plain_text).join("")
}

function extractLecture(page: PageObjectResponse): Lecture {
  const props = page.properties

  const titleProp = props["제목"]
  const title =
    titleProp?.type === "title" ? extractRichText(titleProp.title) : "제목 없음"

  const speakerProp = props["강사"]
  const speaker =
    speakerProp?.type === "rich_text"
      ? extractRichText(speakerProp.rich_text) || "대천덕 신부"
      : "대천덕 신부"

  const summaryProp = props["요약"]
  const summary =
    summaryProp?.type === "rich_text" ? extractRichText(summaryProp.rich_text) : ""

  const audioProp = props["오디오URL"]
  const audioUrl = audioProp?.type === "url" ? audioProp.url ?? null : null

  const topicProp = props["주제"]
  const topic =
    topicProp?.type === "select" ? topicProp.select?.name ?? "기타" : "기타"

  const eraProp = props["시대"]
  const era = eraProp?.type === "select" ? eraProp.select?.name ?? "" : ""

  const langProp = props["언어"]
  const language =
    langProp?.type === "select" ? langProp.select?.name ?? "한국어" : "한국어"

  const dateProp = props["날짜"]
  const date =
    dateProp?.type === "date"
      ? dateProp.date?.start ?? ""
      : ""

  const statusProp = props["Status"]
  let status = "Draft"
  if (statusProp?.type === "select") {
    const name = statusProp.select?.name ?? ""
    status = name === "Published" ? "Published" : "Draft"
  }

  return { id: page.id, title, speaker, summary, audioUrl, topic, era, language, date, status }
}

// ── Public API ──────────────────────────────────────────

/** Published 강의 전체 조회 (날짜 내림차순) */
export async function getAllLectures(): Promise<Lecture[]> {
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
      .map(extractLecture)
      .filter((l) => l.status === "Published")
  } catch (err) {
    console.error("Failed to fetch lectures:", err)
    return []
  }
}

/** id로 단일 강의 + 블록 내용 조회 */
export async function getLectureById(
  id: string
): Promise<LectureWithContent | null> {
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

    const lecture = extractLecture(page)
    if (lecture.status !== "Published") return null

    const blocks = await getBlocks(page.id)
    return { ...lecture, blocks }
  } catch (err) {
    console.error("Failed to fetch lecture by id:", err)
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

/** 주제 목록 추출 */
export async function getLectureTopics(): Promise<string[]> {
  const all = await getAllLectures()
  const topics = new Set(all.map((l) => l.topic).filter(Boolean))
  return Array.from(topics).sort()
}

/** 시대 목록 추출 */
export async function getLectureEras(): Promise<string[]> {
  const all = await getAllLectures()
  const eras = new Set(all.map((l) => l.era).filter(Boolean))
  return Array.from(eras).sort()
}
