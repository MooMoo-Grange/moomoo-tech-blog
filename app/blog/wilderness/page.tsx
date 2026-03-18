import type { Metadata } from "next"
import Link from "next/link"
import { getWildernessEntriesByChapter, CHAPTER_ORDER } from "@/lib/notion-wilderness"
import Breadcrumbs from "@/components/Breadcrumbs"

export const revalidate = 10

export const metadata: Metadata = {
  title: "광야의 식탁 | 예수원",
  description: "대천덕·현재인 부부가 예수원을 세우기까지 — At the Table in the Wilderness",
}

const CHAPTER_COLORS: Record<string, string> = {
  "Home: 서론": "border-stone-400",
  "Timeline: 연표": "border-gray-400",
  "Founding: 설립 비전": "border-amber-500",
  "Community: 공동체 생활": "border-blue-500",
  "Trials: 시련과 시험": "border-red-400",
  "Architecture: 건축": "border-orange-400",
  "Grange: 삼수령 목장": "border-green-500",
  "Theology: 신학": "border-purple-500",
  "Legacy: 유산": "border-pink-400",
}

const CHAPTER_EN: Record<string, string> = {
  "Home: 서론": "Introduction",
  "Timeline: 연표": "Timeline",
  "Founding: 설립 비전": "Founding Vision",
  "Community: 공동체 생활": "Community Life",
  "Trials: 시련과 시험": "Trials",
  "Architecture: 건축": "Architecture",
  "Grange: 삼수령 목장": "The Grange",
  "Theology: 신학": "Theology",
  "Legacy: 유산": "Legacy",
}

function chapterShortName(full: string) {
  return full.replace(/^[^:]+:\s*/, "")
}

export default async function WildernessPage() {
  const byChapter = await getWildernessEntriesByChapter()
  const availableChapters = CHAPTER_ORDER.filter((c) => byChapter[c]?.length > 0)

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "홈", path: "/" },
          { label: "예수원 이야기", path: "/blog" },
          { label: "광야의 식탁" },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-abbey-900 to-abbey-800 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sacred-gold/70 font-sans text-xs tracking-widest uppercase mb-4">
            At the Table in the Wilderness
          </p>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-6">
            광야의 식탁
          </h1>
          <p className="text-abbey-300 text-lg leading-relaxed max-w-2xl font-serif">
            대천덕(Archer Torrey) 신부님과 현재인(Jane Grey Torrey) 사모님이
            강원도 산골에 예수원을 세우기까지의 여정.
            60년의 이야기가 이 책 한 권에 담겨 있습니다.
          </p>
        </div>
      </section>

      {/* 챕터 목차 */}
      <section className="py-12 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-sm font-sans font-semibold text-abbey-500 uppercase tracking-wider mb-6">
            목차 — Contents
          </h2>

          {availableChapters.length > 0 ? (
            <div className="space-y-3">
              {availableChapters.map((chapter, idx) => {
                const entries = byChapter[chapter]
                const colorClass = CHAPTER_COLORS[chapter] ?? "border-stone-300"
                const enName = CHAPTER_EN[chapter] ?? ""
                const shortName = chapterShortName(chapter)

                return (
                  <Link
                    key={chapter}
                    href={`/blog/wilderness/${encodeURIComponent(chapter)}`}
                    className={`group flex items-center gap-4 bg-white rounded-xl border-l-4 ${colorClass} border border-stone-200 hover:shadow-md transition-all duration-200 px-5 py-4`}
                  >
                    <span className="text-2xl font-serif font-bold text-stone-300 w-8 flex-shrink-0">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <div className="flex-1">
                      <p className="text-xs text-abbey-400 font-sans mb-0.5">{enName}</p>
                      <h3 className="text-base font-serif font-semibold text-abbey-900 group-hover:text-abbey-700">
                        {shortName}
                      </h3>
                    </div>
                    <div className="flex items-center gap-2 text-right">
                      <span className="text-xs text-abbey-400 font-sans">
                        {entries.length}개
                      </span>
                      <svg
                        className="w-4 h-4 text-abbey-300 group-hover:text-abbey-500 transition-colors"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </Link>
                )
              })}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-abbey-500 text-lg">아직 공개된 챕터가 없습니다.</p>
              <p className="text-abbey-400 text-sm mt-2">
                준비 중입니다. 곧 공개됩니다.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
