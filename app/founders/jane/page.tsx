import Link from "next/link"
import Breadcrumbs from "@/components/Breadcrumbs"
import { getPersonById } from "@/lib/data"

export const metadata = { title: "제인 토레 사모" }

export default function JanePage() {
  const person = getPersonById("HJI")
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

            {/* Book Introduction Card */}
            <div className="bg-amber-50/60 rounded-lg p-8 shadow-sm border border-amber-200/80">
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <div className="shrink-0 w-20 h-28 bg-amber-100 border border-amber-300/60 rounded flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-amber-700/60" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h2 className="text-lg font-serif font-bold text-abbey-800 mb-1">A Table in the Wilderness</h2>
                  <p className="text-sm text-amber-800/70 italic mb-3">by Jane Grey Torrey (2005)</p>
                  <p className="text-abbey-700 text-sm leading-relaxed mb-4">
                    현재인 사모가 기록한 예수원 40년의 역사. 1964년 강원도 산중에 세워진 기도와 노동의 공동체가 하나님의 인도하심 가운데 걸어온 여정을 생생하게 담고 있습니다. 설립 비전, 공동체 생활, 시련과 시험, 삼수령 목장, 신학적 기초, 그리고 유산에 이르기까지 예수원의 이야기를 만나보세요.
                  </p>
                  <Link
                    href="/founders/jane/book"
                    className="inline-flex items-center gap-2 text-sm font-medium text-forest-700 hover:text-forest-900 transition-colors"
                  >
                    <span>책 내용 보기</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </div>
              </div>
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
          </div>
        </div>
      </section>
    </>
  )
}
