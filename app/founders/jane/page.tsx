import Link from "next/link"
import Breadcrumbs from "@/components/Breadcrumbs"
import { getPersonById } from "@/lib/data"

export const metadata = { title: "제인 토레 사모" }

export default function JanePage() {
  const person = getPersonById("jane")
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
            {person.roles && <> | {person.roles.join(", ")}</>}
          </p>
          <div className="space-y-8">
            <div className="bg-white rounded-lg p-8 shadow-sm border border-abbey-200">
              <p className="text-abbey-700 leading-relaxed">{person.biographySummary}</p>
            </div>
            {person.biographyDetail && (
              <div className="prose max-w-none">
                <p className="text-abbey-700 leading-relaxed">{person.biographyDetail}</p>
              </div>
            )}
            {person.chronology && person.chronology.length > 0 && (
              <div>
                <h2 className="text-xl font-serif font-bold mb-4">연대기</h2>
                <div className="space-y-3">
                  {person.chronology.map((event, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <span className="text-forest-700 font-bold text-sm whitespace-nowrap min-w-[60px]">{event.year}</span>
                      <span className="text-abbey-700 text-sm">{event.event}</span>
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
