import Link from "next/link"
import { notFound } from "next/navigation"
import Breadcrumbs from "@/components/Breadcrumbs"
import { getAllLectures, getLectureById, getPersonById, getBooksForLecture } from "@/lib/data"

export function generateStaticParams() {
  return getAllLectures().map(l => ({ slug: l.objectId }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const lecture = getLectureById(params.slug)
  return { title: lecture?.titleKo ?? "강의" }
}

export default function LectureDetailPage({ params }: { params: { slug: string } }) {
  const lecture = getLectureById(params.slug)
  if (!lecture) notFound()

  const speaker = getPersonById(lecture.speakerId)
  const relatedBooks = getBooksForLecture(lecture.objectId)

  return (
    <>
      <Breadcrumbs items={[
        { label: "홈", path: "/" },
        { label: "설립자와 유산", path: "/founders" },
        { label: "강의 아카이브", path: "/founders/archive/lectures" },
        { label: lecture.titleKo },
      ]} />
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-serif font-bold mb-2">{lecture.titleKo}</h1>
          {lecture.titleEn && <p className="text-lg text-abbey-500 mb-6">{lecture.titleEn}</p>}

          <div className="bg-abbey-50 rounded-lg p-6 border border-abbey-200 mb-8">
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              {speaker && (
                <div>
                  <dt className="font-medium text-abbey-600">강사</dt>
                  <dd className="text-abbey-800">
                    <Link href={`/founders/${lecture.speakerId === "RAT" ? "torrey" : "jane"}`} className="text-forest-700 hover:text-forest-900">
                      {speaker.nameKo}
                    </Link>
                  </dd>
                </div>
              )}
              {lecture.recordingDate && (
                <div>
                  <dt className="font-medium text-abbey-600">날짜</dt>
                  <dd className="text-abbey-800">{lecture.recordingDate}</dd>
                </div>
              )}
              {lecture.durationMinutes && (
                <div>
                  <dt className="font-medium text-abbey-600">시간</dt>
                  <dd className="text-abbey-800">{lecture.durationMinutes}분</dd>
                </div>
              )}
              <div>
                <dt className="font-medium text-abbey-600">시대</dt>
                <dd className="text-abbey-800">{lecture.era}</dd>
              </div>
              <div>
                <dt className="font-medium text-abbey-600">언어</dt>
                <dd className="text-abbey-800">{lecture.language === "ko+en" ? "한국어 + 영어" : lecture.language}</dd>
              </div>
              <div>
                <dt className="font-medium text-abbey-600">원고</dt>
                <dd className="text-abbey-800">{lecture.transcriptStatus === "full" ? "전문 공개" : lecture.transcriptStatus === "partial" ? "부분 공개" : "미공개"}</dd>
              </div>
            </dl>
          </div>

          {lecture.summaryKo && (
            <div className="mb-8">
              <h2 className="text-xl font-serif font-bold mb-3">강의 요약</h2>
              <p className="text-abbey-700 leading-relaxed">{lecture.summaryKo}</p>
            </div>
          )}

          {lecture.theologicalTopics.length > 0 && (
            <div className="mb-8">
              <h2 className="text-xl font-serif font-bold mb-3">주제</h2>
              <div className="flex flex-wrap gap-2">
                {lecture.theologicalTopics.map(t => (
                  <Link key={t} href={`/founders/archive/lectures?topic=${t}`}
                    className="text-sm bg-forest-50 text-forest-700 px-3 py-1 rounded hover:bg-forest-100">
                    {t}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {relatedBooks.length > 0 && (
            <div className="mb-8">
              <h2 className="text-xl font-serif font-bold mb-3">관련 서적</h2>
              <div className="space-y-3">
                {relatedBooks.map(book => (
                  <Link key={book.objectId} href={`/founders/archive/books/${book.objectId}`}
                    className="block bg-white rounded-lg p-4 border border-abbey-200 hover:border-forest-300 transition-colors">
                    <p className="font-medium">{book.titleKo}</p>
                    {book.titleEn && <p className="text-sm text-abbey-500">{book.titleEn}</p>}
                  </Link>
                ))}
              </div>
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
