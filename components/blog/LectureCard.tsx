import Link from "next/link"
import type { Lecture } from "@/lib/notion-lectures"

const ERA_LABELS: Record<string, string> = {
  "ERA1: 초기(1965-1980)": "1기",
  "ERA2: 성장(1980-2002)": "2기",
  "ERA3: 계승(2002-)": "3기",
}

const TOPIC_COLORS: Record<string, string> = {
  성령론: "bg-blue-100 text-blue-800",
  "하나님 나라": "bg-green-100 text-green-800",
  "공동체와 사명": "bg-orange-100 text-orange-800",
  "그리스도인의 삶": "bg-purple-100 text-purple-800",
  "가정과 사회": "bg-yellow-100 text-yellow-800",
  "목회와 치유": "bg-pink-100 text-pink-800",
  "신학과 문화": "bg-amber-100 text-amber-800",
  기타: "bg-stone-100 text-stone-700",
}

interface LectureCardProps {
  lecture: Lecture
}

export default function LectureCard({ lecture }: LectureCardProps) {
  const topicClass = TOPIC_COLORS[lecture.topic] ?? "bg-stone-100 text-stone-700"
  const eraLabel = ERA_LABELS[lecture.era] ?? lecture.era

  return (
    <Link
      href={`/blog/lectures/${lecture.id}`}
      className="group flex gap-4 bg-white rounded-xl border border-stone-200 hover:border-abbey-300 hover:shadow-md transition-all duration-200 p-4"
    >
      {/* 오디오 아이콘 */}
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-abbey-100 group-hover:bg-abbey-200 flex items-center justify-center transition-colors">
        {lecture.audioUrl ? (
          <svg
            className="w-5 h-5 text-abbey-600"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        ) : (
          <svg
            className="w-4 h-4 text-abbey-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        )}
      </div>

      {/* 내용 */}
      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-center gap-1.5 mb-1.5">
          {lecture.topic && (
            <span
              className={`text-xs px-2 py-0.5 rounded-full font-sans font-medium ${topicClass}`}
            >
              {lecture.topic}
            </span>
          )}
          {eraLabel && (
            <span className="text-xs px-2 py-0.5 rounded-full bg-stone-100 text-stone-600 font-sans">
              {eraLabel}
            </span>
          )}
          {lecture.language && lecture.language !== "한국어" && (
            <span className="text-xs px-2 py-0.5 rounded-full bg-sky-100 text-sky-700 font-sans">
              {lecture.language}
            </span>
          )}
        </div>

        <h3 className="text-sm font-serif font-semibold text-abbey-900 group-hover:text-abbey-700 line-clamp-2 mb-1">
          {lecture.title}
        </h3>

        {lecture.summary && (
          <p className="text-xs text-abbey-500 line-clamp-2 leading-relaxed">
            {lecture.summary}
          </p>
        )}

        <div className="mt-2 flex items-center gap-2 text-xs text-abbey-400 font-sans">
          <span>{lecture.speaker}</span>
          {lecture.date && (
            <>
              <span>·</span>
              <span>
                {new Date(lecture.date).toLocaleDateString("ko-KR", {
                  year: "numeric",
                  month: "short",
                })}
              </span>
            </>
          )}
        </div>
      </div>
    </Link>
  )
}
