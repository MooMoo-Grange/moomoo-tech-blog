import { notFound } from "next/navigation"
import Link from "next/link"
import Breadcrumbs from "@/components/Breadcrumbs"
import {
  getLectureByIdFromNotion,
  getAllLecturesFromNotion,
  extractYoutubeId,
} from "@/lib/notion"
import NotionRenderer from "@/components/blog/NotionRenderer"
import type { Metadata } from "next"

export const revalidate = 3600

interface Props {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const lecture = await getLectureByIdFromNotion(id)
  if (!lecture) return { title: "강의를 찾을 수 없습니다" }
  return {
    title: `${lecture.title} — 대천덕 신부 강의`,
    description: lecture.summary,
  }
}

export async function generateStaticParams() {
  const lectures = await getAllLecturesFromNotion()
  return lectures.map((l) => ({ id: l.id }))
}

export default async function LectureDetailPage({ params }: Props) {
  const { id } = await params
  const lecture = await getLectureByIdFromNotion(id)
  if (!lecture) notFound()

  const youtubeId = extractYoutubeId(lecture.audioUrl)

  // 같은 주제의 다른 강의들
  const allLectures = await getAllLecturesFromNotion()
  const sameTopic = allLectures.filter(
    (l) => l.topic === lecture.topic && l.id !== lecture.id
  )

  // 전체 리스트에서 이전/다음
  const idx = allLectures.findIndex((l) => l.id === lecture.id)
  const prev = idx > 0 ? allLectures[idx - 1] : null
  const next = idx < allLectures.length - 1 ? allLectures[idx + 1] : null

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
              {lecture.topic && (
                <Link
                  href="/founders/torrey/lectures"
                  className="inline-block text-xs font-medium text-forest-600 bg-forest-50 border border-forest-200 rounded-full px-3 py-1 mb-4 hover:bg-forest-100 transition-colors"
                >
                  {lecture.topic}
                </Link>
              )}
              <h1 className="text-3xl font-serif font-bold mb-2">{lecture.title}</h1>
              <p className="text-abbey-500 text-sm">{lecture.speaker}</p>
              {lecture.language && (
                <p className="text-abbey-400 text-xs mt-1">언어: {lecture.language}</p>
              )}
            </div>

            {/* Video */}
            {youtubeId && (
              <div className="aspect-video rounded-lg overflow-hidden border border-abbey-200 shadow-sm mb-8">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${youtubeId}`}
                  title={lecture.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            )}

            {/* Summary */}
            {lecture.summary && (
              <div className="bg-white rounded-lg p-6 sm:p-8 shadow-sm border border-abbey-200 mb-8">
                <h2 className="text-lg font-serif font-bold mb-3">강의 소개</h2>
                <p className="text-abbey-700 leading-relaxed">{lecture.summary}</p>
              </div>
            )}

            {/* Notion 블록 콘텐츠 (추가 내용이 있을 경우) */}
            {lecture.blocks.length > 0 && (
              <div className="text-base leading-[1.85] text-abbey-700 mb-8">
                <NotionRenderer blocks={lecture.blocks} />
              </div>
            )}

            {/* Prev / Next Navigation */}
            <div className="flex items-stretch gap-4 mb-10">
              {prev ? (
                <Link
                  href={`/founders/torrey/lectures/${prev.id}`}
                  className="flex-1 bg-white rounded-lg p-4 shadow-sm border border-abbey-200 hover:border-forest-300 transition-colors"
                >
                  <p className="text-xs text-abbey-400 mb-1">{"< "}이전 강의</p>
                  <p className="text-sm font-medium text-abbey-800">{prev.title}</p>
                </Link>
              ) : (
                <div className="flex-1" />
              )}
              {next ? (
                <Link
                  href={`/founders/torrey/lectures/${next.id}`}
                  className="flex-1 bg-white rounded-lg p-4 shadow-sm border border-abbey-200 hover:border-forest-300 transition-colors text-right"
                >
                  <p className="text-xs text-abbey-400 mb-1">{"다음 강의 >"}</p>
                  <p className="text-sm font-medium text-abbey-800">{next.title}</p>
                </Link>
              ) : (
                <div className="flex-1" />
              )}
            </div>

            {/* Related Lectures */}
            {sameTopic.length > 0 && (
              <div className="border-t border-abbey-200 pt-8">
                <h2 className="text-lg font-serif font-bold mb-4">
                  같은 주제의 강의 — {lecture.topic}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {sameTopic.map((rel) => (
                    <Link
                      key={rel.id}
                      href={`/founders/torrey/lectures/${rel.id}`}
                      className="group block bg-white rounded-lg p-4 shadow-sm border border-abbey-200 hover:border-forest-300 transition-colors"
                    >
                      <p className="text-xs text-forest-600 font-medium mb-1">
                        {rel.speaker}
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
