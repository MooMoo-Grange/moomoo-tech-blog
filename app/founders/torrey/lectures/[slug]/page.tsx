import { notFound } from "next/navigation"
import Link from "next/link"
import Breadcrumbs from "@/components/Breadcrumbs"
import {
  getLectureBySlug,
  getLecturesByCategory,
  lectureCategories,
  torreyLectures,
} from "@/lib/data/torrey-lectures"
import type { Metadata } from "next"

export function generateStaticParams() {
  return torreyLectures.map((l) => ({ slug: l.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const lecture = getLectureBySlug(params.slug)
  if (!lecture) return { title: "강의를 찾을 수 없습니다" }
  return {
    title: `${lecture.title} — 대천덕 신부 강의`,
    description: lecture.description,
  }
}

export default function LectureDetailPage({ params }: { params: { slug: string } }) {
  const lecture = getLectureBySlug(params.slug)
  if (!lecture) notFound()

  const category = lectureCategories.find((c) => c.key === lecture.category)
  const relatedLectures = getLecturesByCategory(lecture.category).filter(
    (l) => l.slug !== lecture.slug
  )

  // Find prev/next in full lecture list sorted by number
  const sorted = [...torreyLectures].sort((a, b) => a.number - b.number)
  const idx = sorted.findIndex((l) => l.slug === lecture.slug)
  const prev = idx > 0 ? sorted[idx - 1] : null
  const next = idx < sorted.length - 1 ? sorted[idx + 1] : null

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "홈", path: "/" },
          { label: "설립자", path: "/founders" },
          { label: "대천덕 신부", path: "/founders/torrey" },
          { label: "강의 아카이브", path: "/founders/torrey/lectures" },
          { label: lecture.title },
        ]}
      />
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article>
            {/* Header */}
            <div className="mb-8">
              {category && (
                <Link
                  href="/founders/torrey/lectures"
                  className="inline-block text-xs font-medium text-forest-600 bg-forest-50 border border-forest-200 rounded-full px-3 py-1 mb-4 hover:bg-forest-100 transition-colors"
                >
                  {category.label}
                </Link>
              )}
              <h1 className="text-3xl font-serif font-bold mb-2">{lecture.title}</h1>
              <p className="text-abbey-500 text-sm">대천덕 (Archer Torrey) 신부</p>
            </div>

            {/* Video */}
            <div className="aspect-video rounded-lg overflow-hidden border border-abbey-200 shadow-sm mb-8">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${lecture.youtubeId}`}
                title={lecture.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>

            {/* Description */}
            <div className="bg-white rounded-lg p-6 sm:p-8 shadow-sm border border-abbey-200 mb-8">
              <h2 className="text-lg font-serif font-bold mb-3">강의 소개</h2>
              <p className="text-abbey-700 leading-relaxed">{lecture.description}</p>
            </div>

            {/* Prev / Next Navigation */}
            <div className="flex items-stretch gap-4 mb-10">
              {prev ? (
                <Link
                  href={`/founders/torrey/lectures/${prev.slug}`}
                  className="flex-1 bg-white rounded-lg p-4 shadow-sm border border-abbey-200 hover:border-forest-300 transition-colors"
                >
                  <p className="text-xs text-abbey-400 mb-1">{'< '}이전 강의</p>
                  <p className="text-sm font-medium text-abbey-800">{prev.title}</p>
                </Link>
              ) : (
                <div className="flex-1" />
              )}
              {next ? (
                <Link
                  href={`/founders/torrey/lectures/${next.slug}`}
                  className="flex-1 bg-white rounded-lg p-4 shadow-sm border border-abbey-200 hover:border-forest-300 transition-colors text-right"
                >
                  <p className="text-xs text-abbey-400 mb-1">{'다음 강의 >'}</p>
                  <p className="text-sm font-medium text-abbey-800">{next.title}</p>
                </Link>
              ) : (
                <div className="flex-1" />
              )}
            </div>

            {/* Related Lectures */}
            {relatedLectures.length > 0 && (
              <div className="border-t border-abbey-200 pt-8">
                <h2 className="text-lg font-serif font-bold mb-4">
                  같은 주제의 강의 — {category?.label}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {relatedLectures.map((rel) => (
                    <Link
                      key={rel.slug}
                      href={`/founders/torrey/lectures/${rel.slug}`}
                      className="group block bg-white rounded-lg p-4 shadow-sm border border-abbey-200 hover:border-forest-300 transition-colors"
                    >
                      <p className="text-xs text-forest-600 font-medium mb-1">
                        {'Lecture'} {rel.number}
                      </p>
                      <h3 className="font-medium text-sm text-abbey-800 group-hover:text-forest-700 transition-colors">
                        {rel.title}
                      </h3>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </article>

          {/* Back Link */}
          <div className="mt-10 pt-6 border-t border-abbey-200">
            <Link
              href="/founders/torrey/lectures"
              className="text-sm text-forest-700 hover:text-forest-900 font-medium"
            >
              &larr; 전체 강의 아카이브로 돌아가기
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
