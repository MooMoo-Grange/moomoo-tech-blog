import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import {
  getAllWildernessEntries,
  getWildernessEntriesByChapter,
  CHAPTER_ORDER,
  type WildernessEntry,
} from "@/lib/notion-wilderness"
import Breadcrumbs from "@/components/Breadcrumbs"

export const revalidate = 10

interface Props {
  params: Promise<{ chapter: string }>
}

export async function generateStaticParams() {
  const byChapter = await getWildernessEntriesByChapter()
  return Object.keys(byChapter).map((chapter) => ({
    chapter: encodeURIComponent(chapter),
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { chapter } = await params
  const decoded = decodeURIComponent(chapter)
  return {
    title: `${decoded.replace(/^[^:]+:\s*/, "")} | 광야의 식탁 — 예수원`,
    description: "At the Table in the Wilderness",
  }
}

function ContentTypeIcon({ type }: { type: string }) {
  switch (type) {
    case "인용구":
      return <span className="text-blue-400 text-lg">"</span>
    case "타임라인":
      return <span className="text-green-400 text-sm">📅</span>
    case "성경구절":
      return <span className="text-purple-400 text-sm">✝</span>
    case "사진설명":
      return <span className="text-orange-400 text-sm">📷</span>
    default:
      return null
  }
}

function EntryBlock({ entry }: { entry: WildernessEntry }) {
  switch (entry.contentType) {
    case "인용구":
      return (
        <div className="border-l-4 border-blue-200 pl-5 py-2 my-6">
          {entry.originalText && (
            <p className="text-abbey-600 italic font-serif text-base leading-relaxed mb-2">
              "{entry.originalText}"
            </p>
          )}
          {entry.translatedText && (
            <p className="text-abbey-700 font-serif text-base leading-relaxed mb-3">
              "{entry.translatedText}"
            </p>
          )}
          {entry.speaker && (
            <p className="text-sm text-abbey-400 font-sans">— {entry.speaker}</p>
          )}
        </div>
      )
    case "타임라인":
      return (
        <div className="flex gap-4 my-4 bg-stone-50 rounded-lg p-4">
          {entry.year && (
            <span className="text-sacred-gold font-serif font-bold text-lg flex-shrink-0 w-16">
              {entry.year}
            </span>
          )}
          <div>
            <p className="font-serif font-semibold text-abbey-800 mb-1">{entry.title}</p>
            {entry.translatedText && (
              <p className="text-abbey-600 text-sm leading-relaxed">{entry.translatedText}</p>
            )}
          </div>
        </div>
      )
    case "성경구절":
      return (
        <blockquote className="border-l-4 border-sacred-gold pl-5 py-1 my-6">
          {entry.originalText && (
            <p className="text-abbey-600 italic font-serif text-sm leading-relaxed mb-1">
              {entry.originalText}
            </p>
          )}
          {entry.translatedText && (
            <p className="text-abbey-700 font-serif leading-relaxed">{entry.translatedText}</p>
          )}
          <footer className="mt-2 text-sm text-abbey-400 font-sans">— {entry.title}</footer>
        </blockquote>
      )
    case "사진설명":
      return (
        <div className="my-6 text-center">
          <p className="text-sm text-abbey-500 italic font-sans">{entry.title}</p>
          {entry.translatedText && (
            <p className="text-sm text-abbey-400 mt-1">{entry.translatedText}</p>
          )}
        </div>
      )
    default:
      return (
        <div className="my-6">
          {entry.title && entry.title !== "제목 없음" && (
            <h3 className="text-lg font-serif font-semibold text-abbey-800 mb-3">{entry.title}</h3>
          )}
          {entry.translatedText && (
            <p className="text-abbey-700 font-serif leading-relaxed whitespace-pre-line">
              {entry.translatedText}
            </p>
          )}
          {entry.originalText && (
            <p className="text-abbey-500 text-sm font-serif italic leading-relaxed mt-3 whitespace-pre-line">
              {entry.originalText}
            </p>
          )}
        </div>
      )
  }
}

export default async function WildernessChapterPage({ params }: Props) {
  const { chapter } = await params
  const decoded = decodeURIComponent(chapter)

  if (!CHAPTER_ORDER.includes(decoded)) notFound()

  const byChapter = await getWildernessEntriesByChapter()
  const entries = byChapter[decoded]

  if (!entries || entries.length === 0) notFound()

  const shortName = decoded.replace(/^[^:]+:\s*/, "")
  const chapterIndex = CHAPTER_ORDER.indexOf(decoded)
  const prevChapter = CHAPTER_ORDER[chapterIndex - 1]
  const nextChapter = CHAPTER_ORDER[chapterIndex + 1]

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "홈", path: "/" },
          { label: "예수원 이야기", path: "/blog" },
          { label: "광야의 식탁", path: "/blog/wilderness" },
          { label: shortName },
        ]}
      />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        {/* 챕터 헤더 */}
        <div className="mb-10">
          <p className="text-xs text-abbey-400 font-sans uppercase tracking-widest mb-2">
            Chapter {String(chapterIndex + 1).padStart(2, "0")}
          </p>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-abbey-900">
            {shortName}
          </h1>
        </div>

        {/* 엔트리 목록 */}
        <div className="divide-y divide-stone-100">
          {entries.map((entry) => (
            <div key={entry.id} className="py-2">
              <EntryBlock entry={entry} />
            </div>
          ))}
        </div>

        {/* 이전/다음 챕터 */}
        <div className="mt-16 flex items-center justify-between border-t border-stone-200 pt-6">
          {prevChapter ? (
            <Link
              href={`/blog/wilderness/${encodeURIComponent(prevChapter)}`}
              className="text-sm text-abbey-500 hover:text-abbey-800 font-sans transition-colors"
            >
              ← {prevChapter.replace(/^[^:]+:\s*/, "")}
            </Link>
          ) : (
            <Link
              href="/blog/wilderness"
              className="text-sm text-abbey-500 hover:text-abbey-800 font-sans transition-colors"
            >
              ← 목차로
            </Link>
          )}

          {nextChapter ? (
            <Link
              href={`/blog/wilderness/${encodeURIComponent(nextChapter)}`}
              className="text-sm text-abbey-500 hover:text-abbey-800 font-sans transition-colors"
            >
              {nextChapter.replace(/^[^:]+:\s*/, "")} →
            </Link>
          ) : (
            <span />
          )}
        </div>
      </article>
    </>
  )
}
