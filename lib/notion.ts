import { Client } from "@notionhq/client"
import type {
  BlockObjectResponse,
  PageObjectResponse,
  RichTextItemResponse,
} from "@notionhq/client/build/src/api-endpoints"

// ── Notion Client ───────────────────────────────────────
const notion = new Client({ auth: process.env.NOTION_API_KEY })
const databaseId = process.env.NOTION_DATABASE_ID!
const dataSourceId = process.env.NOTION_DATA_SOURCE_ID || databaseId

// 강의 아카이브 (Audio Library)
const lectureDbId = process.env.NOTION_LECTURE_DB_ID!
const lectureDataSourceId = process.env.NOTION_LECTURE_DATA_SOURCE_ID || lectureDbId

// 오늘의 묵상 (Daily Word)
const dailyWordDbId = process.env.NOTION_DAILY_WORD_DB_ID!
const dailyWordDataSourceId = process.env.NOTION_DAILY_WORD_DATA_SOURCE_ID || dailyWordDbId

// ── Types ───────────────────────────────────────────────
export interface BlogPost {
  id: string
  slug: string
  title: string
  summary: string
  category: string
  coverImage: string | null
  publishedDate: string
  author: string
  status: string
  tags: string[]
}

export interface BlogPostWithContent extends BlogPost {
  blocks: BlockObjectResponse[]
}

// ── Helpers ─────────────────────────────────────────────
function extractRichText(richText: RichTextItemResponse[]): string {
  return richText.map((t) => t.plain_text).join("")
}

function extractPageProperties(page: PageObjectResponse): BlogPost {
  const props = page.properties

  // Title
  const titleProp = props["이름"] || props["Name"] || props["제목"] || props["Title"]
  const title =
    titleProp?.type === "title" ? extractRichText(titleProp.title) : "제목 없음"

  // Slug
  const slugProp = props["Slug"] || props["slug"]
  const slug =
    slugProp?.type === "rich_text"
      ? extractRichText(slugProp.rich_text)
      : title
          .toLowerCase()
          .replace(/[^a-z0-9가-힣]+/g, "-")
          .replace(/^-|-$/g, "")

  // Summary
  const summaryProp = props["Summary"] || props["요약"] || props["설명"]
  const summary =
    summaryProp?.type === "rich_text"
      ? extractRichText(summaryProp.rich_text)
      : ""

  // Category
  const catProp = props["Category"] || props["카테고리"] || props["분류"]
  const category =
    catProp?.type === "select" ? catProp.select?.name ?? "일반" : "일반"

  // Published Date
  const dateProp = props["Date"] || props["날짜"] || props["Published"]
  const publishedDate =
    dateProp?.type === "date"
      ? dateProp.date?.start ?? new Date().toISOString().split("T")[0]
      : new Date().toISOString().split("T")[0]

  // Author
  const authorProp = props["Author"] || props["작성자"]
  const author =
    authorProp?.type === "rich_text"
      ? extractRichText(authorProp.rich_text) || "예수원"
      : "예수원"

  // Status — 명시적으로 Published인 글만 공개, 기본값은 Draft
  const statusProp = props["Status"] || props["상태"]
  let status = "Draft"
  if (statusProp?.type === "status") {
    status = statusProp.status?.name ?? "Draft"
  } else if (statusProp?.type === "select") {
    status = statusProp.select?.name ?? "Draft"
  }

  // Tags
  const tagsProp = props["Tags"] || props["태그"]
  const tags =
    tagsProp?.type === "multi_select"
      ? tagsProp.multi_select.map((t) => t.name)
      : []

  // Cover
  let coverImage: string | null = null
  if (page.cover) {
    if (page.cover.type === "external") {
      coverImage = page.cover.external.url
    } else if (page.cover.type === "file") {
      coverImage = page.cover.file.url
    }
  }

  return {
    id: page.id,
    slug: slug || page.id,
    title,
    summary,
    category,
    coverImage,
    publishedDate,
    author,
    status,
    tags,
  }
}

// ── Public API ──────────────────────────────────────────

/** 모든 게시글 조회 (Published 상태) */
export async function getAllPosts(): Promise<BlogPost[]> {
  try {
    const response = await (notion as any).dataSources.query({
      data_source_id: dataSourceId,
      sorts: [{ property: "Date", direction: "descending" }],
    })

    const pages = response.results.filter(
      (r: any): r is PageObjectResponse => "properties" in r
    )

    return pages
      .map(extractPageProperties)
      .filter((p: BlogPost) => p.status === "Published")
  } catch (error) {
    console.error("Failed to fetch posts from Notion:", error)
    return []
  }
}

/** 모든 게시글 조회 (상태 무관 — fallback) */
export async function getAllPostsUnfiltered(): Promise<BlogPost[]> {
  try {
    const response = await (notion as any).dataSources.query({
      data_source_id: dataSourceId,
      sorts: [{ property: "Date", direction: "descending" }],
    })

    const pages = response.results.filter(
      (r: any): r is PageObjectResponse => "properties" in r
    )

    return pages.map(extractPageProperties)
  } catch (error) {
    console.error("Failed to fetch posts from Notion:", error)
    return []
  }
}

/** slug으로 단일 게시글 + 블록 조회 */
export async function getPostBySlug(
  slug: string
): Promise<BlogPostWithContent | null> {
  try {
    // 먼저 모든 포스트를 가져와서 slug 매칭
    const allPosts = await getAllPostsUnfiltered()
    const post = allPosts.find((p) => p.slug === slug)
    if (!post) return null

    // 블록 컨텐츠 가져오기
    const blocks = await getBlocks(post.id)

    return { ...post, blocks }
  } catch (error) {
    console.error("Failed to fetch post by slug:", error)
    return null
  }
}

/** 페이지 블록 가져오기 (재귀적) */
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

    // 재귀적으로 children 가져오기
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

/** 카테고리 목록 추출 */
export async function getCategories(): Promise<string[]> {
  const posts = await getAllPosts()
  const cats = new Set(posts.map((p) => p.category))
  return Array.from(cats).sort()
}

// ═══════════════════════════════════════════════════════════
// 강의 아카이브 (Audio Library)
// ═══════════════════════════════════════════════════════════

export interface NotionLecture {
  id: string
  title: string
  topic: string       // 주제 (select)
  era: string         // 시대 (select)
  speaker: string     // 강사
  date: string        // 날짜
  language: string    // 언어 (select)
  audioUrl: string    // 오디오URL (YouTube 등)
  summary: string     // 요약
  status: string      // Status (select)
}

function extractLectureProperties(page: PageObjectResponse): NotionLecture {
  const props = page.properties

  const titleProp = props["제목"]
  const title =
    titleProp?.type === "title" ? extractRichText(titleProp.title) : "제목 없음"

  const topicProp = props["주제"]
  const topic =
    topicProp?.type === "select" ? topicProp.select?.name ?? "" : ""

  const eraProp = props["시대"]
  const era =
    eraProp?.type === "select" ? eraProp.select?.name ?? "" : ""

  const speakerProp = props["강사"]
  const speaker =
    speakerProp?.type === "rich_text"
      ? extractRichText(speakerProp.rich_text) || "대천덕 신부"
      : "대천덕 신부"

  const dateProp = props["날짜"]
  const date =
    dateProp?.type === "date"
      ? dateProp.date?.start ?? ""
      : ""

  const langProp = props["언어"]
  const language =
    langProp?.type === "select" ? langProp.select?.name ?? "한영" : "한영"

  const audioProp = props["오디오URL"]
  const audioUrl =
    audioProp?.type === "url" ? audioProp.url ?? "" : ""

  const summaryProp = props["요약"]
  const summary =
    summaryProp?.type === "rich_text"
      ? extractRichText(summaryProp.rich_text)
      : ""

  const statusProp = props["Status"]
  let status = "Draft"
  if (statusProp?.type === "status") {
    status = statusProp.status?.name ?? "Draft"
  } else if (statusProp?.type === "select") {
    status = statusProp.select?.name ?? "Draft"
  }

  return { id: page.id, title, topic, era, speaker, date, language, audioUrl, summary, status }
}

/** 모든 강의 조회 (Published 상태) */
export async function getAllLecturesFromNotion(): Promise<NotionLecture[]> {
  try {
    const response = await (notion as any).dataSources.query({
      data_source_id: lectureDataSourceId,
      sorts: [{ property: "날짜", direction: "ascending" }],
    })

    const pages = response.results.filter(
      (r: any): r is PageObjectResponse => "properties" in r
    )

    return pages
      .map(extractLectureProperties)
      .filter((l: NotionLecture) => l.status === "Published")
  } catch (error) {
    console.error("Failed to fetch lectures from Notion:", error)
    return []
  }
}

/** 모든 강의 조회 (상태 무관 — fallback) */
export async function getAllLecturesUnfiltered(): Promise<NotionLecture[]> {
  try {
    const response = await (notion as any).dataSources.query({
      data_source_id: lectureDataSourceId,
      sorts: [{ property: "날짜", direction: "ascending" }],
    })

    const pages = response.results.filter(
      (r: any): r is PageObjectResponse => "properties" in r
    )

    return pages.map(extractLectureProperties)
  } catch (error) {
    console.error("Failed to fetch lectures from Notion:", error)
    return []
  }
}

/** ID로 단일 강의 + 블록 조회 */
export async function getLectureByIdFromNotion(
  lectureId: string
): Promise<(NotionLecture & { blocks: BlockObjectResponse[] }) | null> {
  try {
    const page = await notion.pages.retrieve({ page_id: lectureId }) as PageObjectResponse
    const lecture = extractLectureProperties(page)
    const blocks = await getBlocks(lectureId)
    return { ...lecture, blocks }
  } catch (error) {
    console.error("Failed to fetch lecture by id:", error)
    return null
  }
}

/** 강의 주제 목록 추출 */
export async function getLectureTopics(): Promise<string[]> {
  const lectures = await getAllLecturesFromNotion()
  const topics = new Set(lectures.map((l) => l.topic).filter(Boolean))
  return Array.from(topics).sort()
}

/** YouTube ID 추출 헬퍼 */
export function extractYoutubeId(url: string): string | null {
  if (!url) return null
  // https://www.youtube.com/watch?v=XXX or https://youtu.be/XXX or just the ID
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|^)([a-zA-Z0-9_-]{11})/)
  return match ? match[1] : null
}

// ═══════════════════════════════════════════════════════════
// 오늘의 묵상 (Daily Word)
// ═══════════════════════════════════════════════════════════

export interface DailyWord {
  id: string
  title: string
  date: string            // 날짜
  bibleVerse: string      // 성경구절
  body: string            // 묵상본문
  prayer: string          // 기도문
  author: string          // 작성자
  season: string          // 시즌 (교회력)
  status: string          // Status
}

function extractDailyWordProperties(page: PageObjectResponse): DailyWord {
  const props = page.properties

  const titleProp = props["제목"]
  const title =
    titleProp?.type === "title" ? extractRichText(titleProp.title) : "제목 없음"

  const dateProp = props["날짜"]
  const date =
    dateProp?.type === "date"
      ? dateProp.date?.start ?? ""
      : ""

  const verseProp = props["성경구절"]
  const bibleVerse =
    verseProp?.type === "rich_text"
      ? extractRichText(verseProp.rich_text)
      : ""

  const bodyProp = props["묵상본문"]
  const body =
    bodyProp?.type === "rich_text"
      ? extractRichText(bodyProp.rich_text)
      : ""

  const prayerProp = props["기도문"]
  const prayer =
    prayerProp?.type === "rich_text"
      ? extractRichText(prayerProp.rich_text)
      : ""

  const authorProp = props["작성자"]
  const author =
    authorProp?.type === "rich_text"
      ? extractRichText(authorProp.rich_text) || "예수원"
      : "예수원"

  const seasonProp = props["시즌"]
  const season =
    seasonProp?.type === "select" ? seasonProp.select?.name ?? "" : ""

  const statusProp = props["Status"]
  let status = "Draft"
  if (statusProp?.type === "status") {
    status = statusProp.status?.name ?? "Draft"
  } else if (statusProp?.type === "select") {
    status = statusProp.select?.name ?? "Draft"
  }

  return { id: page.id, title, date, bibleVerse, body, prayer, author, season, status }
}

/** 오늘의 묵상 전체 조회 (Published 상태, 최신순) */
export async function getAllDailyWords(): Promise<DailyWord[]> {
  try {
    const response = await (notion as any).dataSources.query({
      data_source_id: dailyWordDataSourceId,
      sorts: [{ property: "날짜", direction: "descending" }],
    })

    const pages = response.results.filter(
      (r: any): r is PageObjectResponse => "properties" in r
    )

    return pages
      .map(extractDailyWordProperties)
      .filter((d: DailyWord) => d.status === "Published")
  } catch (error) {
    console.error("Failed to fetch daily words from Notion:", error)
    return []
  }
}

/** 오늘의 묵상 — 오늘 날짜 기준 조회 */
export async function getTodayWord(): Promise<DailyWord | null> {
  const allWords = await getAllDailyWords()
  const today = new Date().toISOString().split("T")[0]
  return allWords.find((d) => d.date === today) ?? allWords[0] ?? null
}

/** ID로 단일 묵상 + 블록 조회 */
export async function getDailyWordById(
  wordId: string
): Promise<(DailyWord & { blocks: BlockObjectResponse[] }) | null> {
  try {
    const page = await notion.pages.retrieve({ page_id: wordId }) as PageObjectResponse
    const word = extractDailyWordProperties(page)
    const blocks = await getBlocks(wordId)
    return { ...word, blocks }
  } catch (error) {
    console.error("Failed to fetch daily word by id:", error)
    return null
  }
}
