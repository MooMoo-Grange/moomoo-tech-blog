import Link from "next/link"
import type { DailyWord } from "@/lib/notion-daily-word"

const SEASON_COLORS: Record<string, string> = {
  대림절: "bg-purple-100 text-purple-800",
  성탄절: "bg-red-100 text-red-800",
  주현절: "bg-blue-100 text-blue-800",
  사순절: "bg-amber-100 text-amber-800",
  부활절: "bg-green-100 text-green-800",
  성령강림절: "bg-orange-100 text-orange-800",
  연중시기: "bg-stone-100 text-stone-700",
}

interface DailyWordCardProps {
  word: DailyWord
}

export default function DailyWordCard({ word }: DailyWordCardProps) {
  const seasonClass =
    SEASON_COLORS[word.season] ?? "bg-stone-100 text-stone-700"

  const formattedDate = word.date
    ? new Date(word.date).toLocaleDateString("ko-KR", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : ""

  // 묵상본문 미리보기 (100자)
  const preview =
    word.meditation.length > 100
      ? word.meditation.slice(0, 100) + "…"
      : word.meditation

  return (
    <Link
      href={`/blog/daily-word/${word.id}`}
      className="group block bg-white rounded-xl border border-stone-200 hover:border-abbey-300 hover:shadow-md transition-all duration-200 overflow-hidden"
    >
      {/* 상단 색 바 — 시즌 컬러 */}
      <div
        className={`h-1 w-full ${
          word.season === "대림절"
            ? "bg-purple-400"
            : word.season === "성탄절"
            ? "bg-red-400"
            : word.season === "주현절"
            ? "bg-blue-400"
            : word.season === "사순절"
            ? "bg-amber-400"
            : word.season === "부활절"
            ? "bg-green-400"
            : word.season === "성령강림절"
            ? "bg-orange-400"
            : "bg-stone-300"
        }`}
      />

      <div className="p-5">
        {/* 날짜 + 시즌 */}
        <div className="flex items-center justify-between mb-3">
          <time className="text-xs text-abbey-500 font-sans">{formattedDate}</time>
          {word.season && (
            <span
              className={`text-xs px-2 py-0.5 rounded-full font-sans font-medium ${seasonClass}`}
            >
              {word.season}
            </span>
          )}
        </div>

        {/* 성경구절 */}
        {word.scripture && (
          <p className="text-xs text-abbey-500 font-serif italic mb-2 line-clamp-2">
            "{word.scripture}"
          </p>
        )}

        {/* 제목 */}
        <h3 className="text-base font-serif font-bold text-abbey-900 group-hover:text-abbey-700 mb-2 line-clamp-2">
          {word.title}
        </h3>

        {/* 묵상 미리보기 */}
        {preview && (
          <p className="text-sm text-abbey-600 line-clamp-3 leading-relaxed">
            {preview}
          </p>
        )}

        {/* 작성자 */}
        <p className="mt-3 text-xs text-abbey-400 font-sans">{word.author}</p>
      </div>
    </Link>
  )
}
