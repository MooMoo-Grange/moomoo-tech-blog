import { getAllPosts, getCategories } from "@/lib/notion"
import { getLatestDailyWord } from "@/lib/notion-daily-word"
import { getAllLectures } from "@/lib/notion-lectures"
import Breadcrumbs from "@/components/Breadcrumbs"
import CategoryFilter from "@/components/blog/CategoryFilter"
import DailyWordCard from "@/components/blog/DailyWordCard"
import LectureCard from "@/components/blog/LectureCard"
import Link from "next/link"

export const revalidate = 10

export const metadata = {
  title: "예수원 이야기",
  description: "예수원 공동체의 이야기, 설립자의 유산, 그리고 삼수령에서 이어지는 삶의 기록들",
}

export default async function BlogPage() {
  const [posts, categories, latestWord, recentLectures] = await Promise.all([
    getAllPosts(),
    getCategories(),
    getLatestDailyWord(),
    getAllLectures().then((l) => l.slice(0, 4)),
  ])

  return (
    <>
      <Breadcrumbs items={[{ label: "홈", path: "/" }, { label: "예수원 이야기" }]} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-abbey-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-serif font-bold text-abbey-900 mb-4">
            예수원 이야기
          </h1>
          <p className="text-lg text-abbey-600 leading-relaxed max-w-3xl">
            광야의 식탁 위에 차려진 이야기들 — 대천덕 신부님과 현재인 사모님이 세운 예수원,
            그리고 삼수령 무무목장에서 이어가는 신앙과 삶의 기록입니다.
          </p>
        </div>
      </section>

      {/* 섹션 카드 네비게이션 */}
      <section className="bg-white border-b border-stone-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <Link
              href="/blog/daily-word"
              className="group flex flex-col items-center gap-2 bg-abbey-50 hover:bg-abbey-100 rounded-xl px-4 py-5 transition-colors text-center"
            >
              <span className="text-2xl">🕊</span>
              <span className="text-sm font-serif font-semibold text-abbey-800 group-hover:text-abbey-600">
                오늘의 묵상
              </span>
              <span className="text-xs text-abbey-400 font-sans">Daily Word</span>
            </Link>
            <Link
              href="#stories"
              className="group flex flex-col items-center gap-2 bg-abbey-50 hover:bg-abbey-100 rounded-xl px-4 py-5 transition-colors text-center"
            >
              <span className="text-2xl">📖</span>
              <span className="text-sm font-serif font-semibold text-abbey-800 group-hover:text-abbey-600">
                예수원 이야기
              </span>
              <span className="text-xs text-abbey-400 font-sans">Stories</span>
            </Link>
            <Link
              href="/blog/lectures"
              className="group flex flex-col items-center gap-2 bg-abbey-50 hover:bg-abbey-100 rounded-xl px-4 py-5 transition-colors text-center"
            >
              <span className="text-2xl">🎙</span>
              <span className="text-sm font-serif font-semibold text-abbey-800 group-hover:text-abbey-600">
                강의 아카이브
              </span>
              <span className="text-xs text-abbey-400 font-sans">Audio Library</span>
            </Link>
            <Link
              href="/blog/wilderness"
              className="group flex flex-col items-center gap-2 bg-abbey-50 hover:bg-abbey-100 rounded-xl px-4 py-5 transition-colors text-center"
            >
              <span className="text-2xl">🌿</span>
              <span className="text-sm font-serif font-semibold text-abbey-800 group-hover:text-abbey-600">
                광야의 식탁
              </span>
              <span className="text-xs text-abbey-400 font-sans">At the Table</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 오늘의 묵상 최신 1개 미리보기 */}
      {latestWord && (
        <section className="py-10 bg-abbey-50/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-lg font-serif font-bold text-abbey-900">오늘의 묵상</h2>
              <Link
                href="/blog/daily-word"
                className="text-sm text-abbey-500 hover:text-abbey-800 font-sans transition-colors"
              >
                전체 보기 →
              </Link>
            </div>
            <div className="max-w-sm">
              <DailyWordCard word={latestWord} />
            </div>
          </div>
        </section>
      )}

      {/* 예수원 이야기 블로그 */}
      <section id="stories" className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-serif font-bold text-abbey-900 mb-6">예수원 이야기</h2>
          {posts.length > 0 ? (
            <CategoryFilter posts={posts} categories={categories} />
          ) : (
            <div className="text-center py-12">
              <p className="text-abbey-500">아직 게시된 이야기가 없습니다.</p>
            </div>
          )}
        </div>
      </section>

      {/* 강의 아카이브 최근 4개 */}
      {recentLectures.length > 0 && (
        <section className="py-12 bg-stone-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-lg font-serif font-bold text-abbey-900">강의 아카이브</h2>
              <Link
                href="/blog/lectures"
                className="text-sm text-abbey-500 hover:text-abbey-800 font-sans transition-colors"
              >
                전체 보기 →
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {recentLectures.map((lecture) => (
                <LectureCard key={lecture.id} lecture={lecture} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
