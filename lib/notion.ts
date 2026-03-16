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
