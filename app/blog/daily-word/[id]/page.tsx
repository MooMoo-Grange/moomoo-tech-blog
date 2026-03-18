import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { getAllDailyWords, getDailyWordById } from "@/lib/notion-daily-word"
import NotionRenderer from "@/components/blog/NotionRenderer"
import Breadcrumbs from "@/components/Breadcrumbs"

export const revalidate = 10

interface Props {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  const words = await getAllDailyWords()
  return words.map((w) => ({ id: w.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const word = await getDailyWordById(id)
  if (!word) return {}
  return {
    title: `${word.title} | 오늘의 묵상 — 예수원`,
    description: word.scripture || word.meditation.slice(0, 120),
  }
}

export default async function DailyWordDetailPage({ params }: Props) {
  const { id } = await params
  const word = await getDailyWordById(id)

  if (!word || word.status !== "Published") notFound()

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
          { label: "예수원 이야기", path: "/blog" },
          { label: "오늘의 묵상", path: "/blog/daily-word" },
          { label: word.title },
        ]}
      />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        {/* 날짜 + 시즌 */}
        <div className="flex items-center gap-3 mb-6">
          {formattedDate && (
            <time className="text-sm text-abbey-500 font-sans">{formattedDate}</time>
          )}
          {word.season && (
            <span className="text-xs px-2.5 py-1 rounded-full bg-abbey-100 text-abbey-600 font-sans">
              {word.season}
            </span>
          )}
        </div>

        {/* 제목 */}
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-abbey-900 mb-6">
          {word.title}
        </h1>

        {/* 성경구절 */}
        {word.scripture && (
          <blockquote className="border-l-4 border-sacred-gold pl-5 py-1 mb-8">
            <p className="text-lg font-serif italic text-abbey-700 leading-relaxed">
              "{word.scripture}"
            </p>
          </blockquote>
        )}

        {/* 묵상 본문 — Notion 블록 렌더링 */}
        {word.blocks.length > 0 ? (
          <div className="prose prose-stone prose-lg max-w-none mb-10">
            <NotionRenderer blocks={word.blocks} />
          </div>
        ) : word.meditation ? (
          <div className="prose prose-stone prose-lg max-w-none mb-10 whitespace-pre-line">
            {word.meditation}
          </div>
        ) : null}

        {/* 기도문 */}
        {word.prayer && (
          <div className="bg-abbey-50 rounded-xl p-6 mb-10">
            <h2 className="text-sm font-sans font-semibold text-abbey-500 uppercase tracking-wider mb-3">
              오늘의 기도
            </h2>
            <p className="font-serif text-abbey-800 leading-loose whitespace-pre-line">
              {word.prayer}
            </p>
          </div>
        )}

        {/* 작성자 */}
        <div className="border-t border-stone-200 pt-6 flex items-center justify-between">
          <span className="text-sm text-abbey-500 font-sans">{word.author}</span>
          <Link
            href="/blog/daily-word"
            className="text-sm text-abbey-600 hover:text-abbey-800 font-sans transition-colors"
          >
            ← 목록으로
          </Link>
        </div>
      </article>
    </>
  )
}
