import Link from "next/link"
import Breadcrumbs from "@/components/Breadcrumbs"
import { getPersonById, getLecturesBySpeaker, getAllBooks } from "@/lib/data"

export const metadata = { title: "대천덕 (아처 토레) 신부" }

export default function TorreyPage() {
  const person = getPersonById("RAT")
  const lectures = getLecturesBySpeaker("RAT").slice(0, 5)
  const books = getAllBooks().filter(b => b.authorIds?.includes("RAT")).slice(0, 5)

  if (!person) return <div className="py-16 text-center text-abbey-500">정보를 찾을 수 없습니다.</div>

  return (
    <>
      <Breadcrumbs items={[{ label: "홈", path: "/" }, { label: "설립자", path: "/founders" }, { label: person.nameKo }]} />
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-serif font-bold mb-2">{person.nameKo}</h1>
          <p className="text-abbey-500 text-lg mb-2">{person.nameEn}</p>
          <p className="text-abbey-500 text-sm mb-8">
            {person.birthDate && <>{person.birthDate}</>}
            {person.deathDate && <> &ndash; {person.deathDate}</>}
            {person.role && <> | {person.role}</>}
          </p>
          <div className="space-y-8">
            <div className="bg-white rounded-lg p-8 shadow-sm border border-abbey-200">
              <p className="text-abbey-700 leading-relaxed">{person.biographySummary}</p>
            </div>
            {person.chronology && person.chronology.length > 0 && (
              <div>
                <h2 className="text-xl font-serif font-bold mb-4">연대기</h2>
                <div className="space-y-3">
                  {person.chronology.map((event, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <span className="text-forest-700 font-bold text-sm whitespace-nowrap min-w-[60px]">{event.period}</span>
                      <span className="text-abbey-700 text-sm">{event.description}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {lectures.length > 0 && (
              <div>
                <h2 className="text-xl font-serif font-bold mb-4">주요 강의</h2>
                <div className="space-y-3">
                  {lectures.map(lec => (
                    <Link key={lec.objectId} href={`/founders/archive/lectures/${lec.objectId}`}
                      className="block bg-white rounded-lg p-4 shadow-sm border border-abbey-200 hover:border-forest-300 transition-colors">
                      <h3 className="font-medium text-sm">{lec.titleKo}</h3>
                      <p className="text-abbey-500 text-xs mt-1">{lec.recordingDate}</p>
                    </Link>
                  ))}
                </div>
                <Link href="/founders/archive/lectures" className="inline-block mt-4 text-forest-700 text-sm font-medium hover:text-forest-800">
                  전체 강의 보기 &rarr;
                </Link>
              </div>
            )}
            {/* Lecture Videos */}
            <div>
              <h2 className="text-xl font-serif font-bold mb-6">강의 영상</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { id: "pyC_JvFhXTc", title: "강의 1: 상담문제" },
                  { id: "Wu7orc6Q82s", title: "강의 2: 선교정신" },
                  { id: "ZK_ObDvBrGQ", title: "강의 3: 성령론" },
                  { id: "vrXnhYWe46Y", title: "강의 4: 남과여 결혼" },
                  { id: "oXslk6c2D08", title: "강의 5: 성령의 지혜와 여성론" },
                  { id: "PMesAviud44", title: "강의 6: 회계와 고백" },
                  { id: "dtCkx4v142I", title: "강의 7: 예수원 사명" },
                  { id: "WN76aWywosU", title: "강의 8: 영적전쟁" },
                  { id: "DndhmS_0VJ8", title: "강의 9: 하나님나라의 의" },
                  { id: "zBTtmgpTLGI", title: "강의 10: 믿음" },
                  { id: "--9HF1n2snw", title: "강의 11: 기독교인과 노동" },
                  { id: "BYdbNhorJO0", title: "강의 12: 토지와 인권" },
                  { id: "2IMqyOsf4GI", title: "강의 13: 성령세례" },
                  { id: "7P5O5ozV92o", title: "강의 14: 가족을 통한 하나님의 형상" },
                  { id: "hCX_CxXGOkY", title: "강의 15: 사랑" },
                  { id: "Ae9HJZONFjc", title: "강의 16: 부활" },
                  { id: "aF_dOmZv91w", title: "강의 17: 새출발과 성장" },
                  { id: "AfKfYczGJYQ", title: "강의 18: 용서" },
                  { id: "DIOIf77w9Gg", title: "강의 19: 교회의 가치정신" },
                  { id: "wE2GVelIVZg", title: "강의 20: 동양문화의 뿌리와 기독교분위기" },
                  { id: "TcJxRjPCSuQ", title: "강의 21: 사회문제" },
                  { id: "WkNXjGQh2X8", title: "강의 22: 신학의 5차원" },
                  { id: "meLrwhJrW4w", title: "강의 23: 속사람 치유1" },
                  { id: "Mk35HcJNHE0", title: "강의 24: 속사람 치유2" },
                  { id: "PA0460Nt8b8", title: "강의 25: 공동체와 말" },
                ].map((v) => (
                  <div key={v.id} className="bg-white rounded-lg overflow-hidden shadow-sm border border-abbey-200">
                    <div className="aspect-video">
                      <iframe
                        className="w-full h-full"
                        src={`https://www.youtube.com/embed/${v.id}`}
                        title={v.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      />
                    </div>
                    <div className="px-4 py-3">
                      <p className="text-sm font-medium text-abbey-800">{v.title}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 bg-white rounded-lg overflow-hidden shadow-sm border border-abbey-200">
                <div className="aspect-video sm:aspect-[21/9] max-h-[360px]">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/7-BicUKxqvw"
                    title="온전한 복음 대천덕"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
                <div className="px-4 py-3">
                  <p className="text-sm font-medium text-abbey-800">온전한 복음 대천덕</p>
                </div>
              </div>
            </div>

            {books.length > 0 && (
              <div>
                <h2 className="text-xl font-serif font-bold mb-4">저작</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {books.map(book => (
                    <Link key={book.objectId} href={`/founders/archive/books/${book.objectId}`}
                      className="block bg-white rounded-lg p-4 shadow-sm border border-abbey-200 hover:border-forest-300 transition-colors">
                      <h3 className="font-medium text-sm">{book.titleKo}</h3>
                      <p className="text-abbey-500 text-xs mt-1">
                        {book.publisher && <>{book.publisher}</>}
                        {book.publicationYear && <> &middot; {book.publicationYear}</>}
                      </p>
                    </Link>
                  ))}
                </div>
                <Link href="/founders/archive/books" className="inline-block mt-4 text-forest-700 text-sm font-medium hover:text-forest-800">
                  전체 저작 보기 &rarr;
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
