import Link from "next/link"
import { notFound } from "next/navigation"
import Breadcrumbs from "@/components/Breadcrumbs"
import {
  getAllLecturesFromNotion,
  getLectureByIdFromNotion,
  extractYoutubeId,
} from "@/lib/notion"
import NotionRenderer from "@/components/blog/NotionRenderer"

export const revalidate = 3600

interface Props {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  const lectures = await getAllLecturesFromNotion()
  return lectures.map((l) => ({ id: l.id }))
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params
  const lecture = await getLectureByIdFromNotion(id)
  return { title: lecture?.title ?? "강의" }
}

export default async function LectureDetailPage({ params }: Props) {
  const { id } = await params
  const lecture = await getLectureByIdFromNotion(id)
  if (!lecture) notFound()

  const youtubeId = extractYoutubeId(lecture.audioUrl)

  return (
    <>
      <Breadcrumbs items={[
        { label: "홈", path: "/" },
        { label: "설립자와 유산", path: "/founders" },
        { label: "강의 아카이브", path: "/founders/archive/lectures" },
        { label: lecture.title },
      ]} />
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-serif font-bold mb-2">{lecture.title}</h1>

          <div className="bg-abbey-50 rounded-lg p-6 border border-abbey-200 mb-8">
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div>
                <dt className="font-medium text-abbey-600">강사</dt>
                <dd className="text-abbey-800">{lecture.speaker}</dd>
              </div>
              {lecture.date && (
                <div>
                  <dt className="font-medium text-abbey-600">날짜</dt>
                  <dd className="text-abbey-800">{lecture.date}</dd>
                </div>
              )}
              {lecture.era && (
                <div>
                  <dt className="font-medium text-abbey-600">시대</dt>
                  <dd className="text-abbey-800">{lecture.era}</dd>
                </div>
              )}
              {lecture.language && (
                <div>
                  <dt className="font-medium text-abbey-600">언어</dt>
                  <dd className="text-abbey-800">{lecture.language}</dd>
                </div>
              )}
              {lecture.topic && (
                <div>
                  <dt className="font-medium text-abbey-600">주제</dt>
                  <dd className="text-abbey-800">{lecture.topic}</dd>
                </div>
              )}
            </dl>
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

          {lecture.summary && (
            <div className="mb-8">
              <h2 className="text-xl font-serif font-bold mb-3">강의 요약</h2>
              <p className="text-abbey-700 leading-relaxed">{lecture.summary}</p>
            </div>
          )}

          {/* Notion 블록 콘텐츠 */}
          {lecture.blocks.length > 0 && (
            <div className="text-base leading-[1.85] text-abbey-700 mb-8">
              <NotionRenderer blocks={lecture.blocks} />
            </div>
          )}

          <div className="mt-10">
            <Link href="/founders/archive/lectures" className="text-sm text-forest-700 hover:text-forest-900 font-medium">
              &larr; 강의 목록으로 돌아가기
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
