import { notFound } from "next/navigation"
import Link from "next/link"
import Breadcrumbs from "@/components/Breadcrumbs"
import { getDailyWordById, getAllDailyWords } from "@/lib/notion-daily-word"
import NotionRenderer from "@/components/blog/NotionRenderer"
import type { Metadata } from "next"

export const revalidate = 3600

interface Props {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const word = await getDailyWordById(id)
  if (!word) return { title: "묵상을 찾을 수 없습니다" }
  return {
    title: `${word.title} — 오늘의 묵상`,
    description: word.scripture
      ? `${word.scripture} — ${word.title}`
      : word.title,
  }
}

export async function generateStaticParams() {
  const words = await getAllDailyWords()
  return words.map((w) => ({ id: w.id }))
}

export default async function DailyWordDetailPage({ params }: Props) {
  const { id } = await params
  const word = await getDailyWordById(id)
  if (!word) notFound()

  const formattedDate = word.date
    ? new Date(word.date).toLocaleDateString("ko-KR", {
        year: "numeric",
        month: "long",
        day: "numeric",
        weekday: "long",
      })
    : ""

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "홈", path: "/" },
          { label: "오늘의 묵상", path: "/daily-word" },
          { label: word.title },
        ]}
      />
      <article className="py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <header className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              {word.season && (
                <span className="text-sm font-medium text-forest-600 bg-forest-50 px-3 py-1 rounded">
                  {word.season}
                </span>
              )}
              {formattedDate && (
                <span className="text-sm text-abbey-400">{formattedDate}</span>
              )}
            </div>
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-abbey-900 leading-tight mb-4">
              {word.title}
            </h1>
            {word.scripture && (
              <p className="text-lg text-forest-700 font-medium bg-forest-50 px-4 py-3 rounded-lg">
                {word.scripture}
              </p>
            )}
          </header>

          {/* Body */}
          {word.meditation && (
            <div className="text-base leading-[1.85] text-abbey-700 whitespace-pre-line mb-8">
              {word.meditation}
            </div>
          )}

          {/* Notion 블록 콘텐츠 */}
          {word.blocks.length > 0 && (
            <div className="text-base leading-[1.85] text-abbey-700 mb-8">
              <NotionRenderer blocks={word.blocks} />
            </div>
          )}

          {/* Prayer */}
          {word.prayer && (
            <div className="bg-abbey-50 rounded-lg p-6 sm:p-8 border border-abbey-200 mb-8">
              <h2 className="text-lg font-serif font-bold text-abbey-800 mb-3">기도</h2>
              <p className="text-abbey-600 italic leading-relaxed whitespace-pre-line">
                {word.prayer}
              </p>
            </div>
          )}

          {/* Author */}
          {word.author && (
            <p className="text-sm text-abbey-400 text-right mb-8">— {word.author}</p>
          )}

          <hr className="my-12 border-abbey-200" />

          {/* Back Link */}
          <div className="flex justify-between items-center">
            <Link
              href="/daily-word"
              className="text-forest-600 hover:text-forest-800 text-sm font-medium flex items-center gap-1"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              묵상 목록으로 돌아가기
            </Link>
          </div>
        </div>
      </article>
    </>
  )
}
