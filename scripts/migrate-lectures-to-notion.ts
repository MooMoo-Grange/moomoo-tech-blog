/**
 * 강의 데이터 → Notion DB 마이그레이션 스크립트
 *
 * 실행 전 환경변수 설정 필요:
 *   NOTION_API_KEY, NOTION_LECTURE_DB_ID
 *
 * 실행:
 *   npx tsx scripts/migrate-lectures-to-notion.ts
 *
 * 데이터 소스:
 *   - lib/data/torrey-lectures.ts  (25건, YouTube ID 포함)
 *   - lib/data/lectures.json       (25건, 메타데이터 풍부)
 *
 * 전략:
 *   두 데이터를 강의 번호(number/objectId 끝 숫자) 기준으로 매핑하여
 *   Notion DB에 통합된 레코드를 생성한다.
 */

import { Client } from "@notionhq/client"
import { torreyLectures, lectureCategories } from "../lib/data/torrey-lectures"
import lecturesJson from "../lib/data/lectures.json"

const notion = new Client({ auth: process.env.NOTION_API_KEY })
const databaseId = process.env.NOTION_LECTURE_DB_ID!

if (!process.env.NOTION_API_KEY || !databaseId) {
  console.error("❌ NOTION_API_KEY와 NOTION_LECTURE_DB_ID 환경변수가 필요합니다.")
  process.exit(1)
}

// torrey-lectures.ts의 category key → Notion DB의 주제 select 값 매핑
const categoryToTopic: Record<string, string> = {
  "holy-spirit": "성령론",
  "kingdom-of-god": "하나님 나라",
  "community": "공동체와 사명",
  "christian-life": "그리스도인의 삶",
  "family-society": "가정과 사회",
  "pastoral-healing": "목회와 치유",
  "theology-culture": "신학과 문화",
}

// lectures.json의 theologicalTopics → Notion DB 주제 매핑 (첫 번째 토픽 사용)
const topicMapping: Record<string, string> = {
  "치유": "목회와 치유",
  "선교론": "공동체와 사명",
  "성령론": "성령론",
  "가정": "가정과 사회",
  "공동체론": "공동체와 사명",
  "성경론": "하나님 나라",
  "기도론": "목회와 치유",
  "경제정의": "가정과 사회",
  "교회론": "공동체와 사명",
  "문화신학": "신학과 문화",
}

interface MergedLecture {
  title: string
  topic: string
  era: string
  speaker: string
  language: string
  audioUrl: string
  summary: string
}

function buildMergedLectures(): MergedLecture[] {
  const results: MergedLecture[] = []

  for (const torrey of torreyLectures) {
    // lectures.json에서 같은 번호의 강의 찾기
    const jsonLec = (lecturesJson as any[]).find((l) => {
      const num = parseInt(l.objectId.replace("JA-LEC-ERA2-", ""), 10)
      return num === torrey.number
    })

    const topic = categoryToTopic[torrey.category] || "기타"

    results.push({
      title: torrey.title.replace(/^강의\s*\d+:\s*/, ""), // "강의 3: 성령론" → "성령론"
      topic,
      era: "ERA2: 성장(1980-2002)",
      speaker: "대천덕 신부",
      language: "한영",
      audioUrl: `https://www.youtube.com/watch?v=${torrey.youtubeId}`,
      summary: torrey.description || jsonLec?.summaryKo || "",
    })
  }

  return results
}

async function migrate() {
  const lectures = buildMergedLectures()

  console.log(`📚 ${lectures.length}건의 강의를 Notion DB에 업로드합니다...`)
  console.log(`   DB: ${databaseId}\n`)

  let success = 0
  let failed = 0

  for (const lec of lectures) {
    try {
      await notion.pages.create({
        parent: { database_id: databaseId },
        properties: {
          "제목": {
            title: [{ text: { content: lec.title } }],
          },
          "주제": {
            select: { name: lec.topic },
          },
          "시대": {
            select: { name: lec.era },
          },
          "강사": {
            rich_text: [{ text: { content: lec.speaker } }],
          },
          "언어": {
            select: { name: lec.language },
          },
          "오디오URL": {
            url: lec.audioUrl,
          },
          "요약": {
            rich_text: [{ text: { content: lec.summary.substring(0, 2000) } }],
          },
          "Status": {
            select: { name: "Published" },
          },
        },
      })

      success++
      console.log(`  ✅ [${success}/${lectures.length}] ${lec.title}`)

      // Rate limiting 방지
      await new Promise((r) => setTimeout(r, 350))
    } catch (error: any) {
      failed++
      console.error(`  ❌ ${lec.title}: ${error.message}`)
    }
  }

  console.log(`\n🏁 완료: ${success}건 성공, ${failed}건 실패`)
}

migrate().catch(console.error)
