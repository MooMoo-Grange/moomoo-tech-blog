import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { getAllLectures, getLectureById } from "@/lib/notion-lectures"
import NotionRenderer from "@/components/blog/NotionRenderer"
import Breadcrumbs from "@/components/Breadcrumbs"

export const revalidate = 10

interface Props {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  const lectures = await getAllLectures()
  return lectures.map((l) => ({ id: l.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const lecture = await getLectureById(id)
  if (!lecture) return {}
  return {
    title: `${lecture.title} | 강의 아카이브 — 예수원`,
    description: lecture.summary || `${lecture.speaker}의 강의`,
  }
}

const ERA_LABELS: Record<string, string> = {
  "ERA1: 초기(1965-1980)": "1기 초기 (1965–1980)",
  "ERA2: 성장(1980-2002)": "2기 성장 (1980–2002)",
  "ERA3: 계승(2002-)": "3기 계승 (2002–)",
}

export default async function LectureDetailPage({ params }: Props) {
  const { id } = await params
  const lecture = await getLectureById(id)

  if (!lecture || lecture.status !== "Published") notFound()

  const eraLabel = ERA_LABELS[lecture.era] ?? lecture.era
  const formattedDate = lecture.date
    ? new Date(lecture.date).toLocaleDateString("ko-KR", {
        year: "numeric",
        month: "long",
      })
    : ""

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "홈", path: "/" },
          { label: "예수원 이야기", path: "/blog" },
          { label: "강의 아카이브", path: "/blog/lectures" },
          { label: lecture.title },
        ]}
      />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        {/* 메타 태그 */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          {lecture.topic && (
            <span className="text-xs px-2.5 py-1 rounded-full bg-abbey-100 text-abbey-600 font-sans">
              {lecture.topic}
            </span>
          )}
          {eraLabel && (
            <span className="text-xs px-2.5 py-1 rounded-full bg-stone-100 text-stone-600 font-sans">
              {eraLabel}
            </span>
          )}
          {lecture.language && lecture.language !== "한국어" && (
            <span className="text-xs px-2.5 py-1 rounded-full bg-sky-100 text-sky-700 font-sans">
              {lecture.language}
            </span>
          )}
        </div>

        {/* 제목 */}
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-abbey-900 mb-4">
          {lecture.title}
        </h1>

        {/* 강사 + 날짜 */}
        <div className="flex items-center gap-3 text-sm text-abbey-500 font-sans mb-8 pb-6 border-b border-stone-200">
          <span className="font-medium text-abbey-700">{lecture.speaker}</span>
          {formattedDate && (
            <>
              <span>·</span>
              <span>{formattedDate}</span>
            </>
          )}
        </div>

        {/* 오디오 플레이어 */}
        {lecture.audioUrl && (
          <div className="mb-8 bg-abbey-50 rounded-xl p-5">
            <h2 className="text-xs font-sans font-semibold text-abbey-500 uppercase tracking-wider mb-3">
              강의 듣기
            </h2>
            <audio
              controls
              className="w-full"
              src={lecture.audioUrl}
              preload="metadata"
            >
              <a
                href={lecture.audioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-abbey-600 underline text-sm"
              >
                오디오 파일 다운로드
              </a>
            </audio>
          </div>
        )}

        {/* 요약 */}
        {lecture.summary && (
          <p className="text-lg text-abbey-600 leading-relaxed mb-8 font-serif">
            {lecture.summary}
          </p>
        )}

        {/* 강의 내용 — Notion 블록 */}
        {lecture.blocks.length > 0 && (
          <div className="prose prose-stone prose-lg max-w-none mb-10">
            <NotionRenderer blocks={lecture.blocks} />
          </div>
        )}

        {/* 하단 */}
        <div className="border-t border-stone-200 pt-6 flex items-center justify-between">
          <span className="text-sm text-abbey-500 font-sans">{lecture.speaker}</span>
          <Link
            href="/blog/lectures"
            className="text-sm text-abbey-600 hover:text-abbey-800 font-sans transition-colors"
          >
            ← 목록으로
          </Link>
        </div>
      </article>
    </>
  )
}
