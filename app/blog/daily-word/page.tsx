import type { Metadata } from "next"
import { getAllDailyWords, getDailyWordSeasons } from "@/lib/notion-daily-word"
import DailyWordCard from "@/components/blog/DailyWordCard"
import Breadcrumbs from "@/components/Breadcrumbs"

export const revalidate = 10

export const metadata: Metadata = {
  title: "오늘의 묵상 | 예수원",
  description: "삼수령 예수원의 매일 묵상. 성경 말씀과 함께하는 하루의 시작.",
}

export default async function DailyWordPage() {
  const [words, seasons] = await Promise.all([
    getAllDailyWords(),
    getDailyWordSeasons(),
  ])

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "홈", path: "/" },
          { label: "예수원 이야기", path: "/blog" },
          { label: "오늘의 묵상" },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-abbey-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sacred-gold/80 font-sans text-xs tracking-widest uppercase mb-3">
            Daily Word
          </p>
          <h1 className="text-4xl font-serif font-bold text-abbey-900 mb-4">
            오늘의 묵상
          </h1>
          <p className="text-lg text-abbey-600 leading-relaxed max-w-2xl">
            매일 아침, 성경 말씀과 묵상으로 하루를 시작합니다.
            삼수령 광야에서 들려오는 조용한 목소리.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {words.length > 0 ? (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {words.map((word) => (
                <DailyWordCard key={word.id} word={word} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-abbey-500 text-lg">아직 게시된 묵상이 없습니다.</p>
              <p className="text-abbey-400 text-sm mt-2">
                곧 새로운 묵상이 올라올 예정입니다.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
