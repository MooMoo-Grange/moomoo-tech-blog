import Link from "next/link"
import Breadcrumbs from "@/components/Breadcrumbs"
import { getAllPersons, getAllBooks } from "@/lib/data"

export const metadata = { title: "설립자" }

export default function FoundersPage() {
  const persons = getAllPersons()
  const recentBooks = getAllBooks().slice(0, 3)

  return (
    <>
      <Breadcrumbs items={[{ label: "홈", path: "/" }, { label: "설립자" }]} />
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-serif font-bold mb-6">설립자</h1>
          <p className="text-lg text-abbey-600 leading-relaxed max-w-3xl mb-12">
            예수원의 설립자들과 그들의 가르침, 기도, 저작을 소개합니다.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {persons.map(p => (
              <Link key={p.personId} href={`/founders/${p.personId}`}
                className="group block bg-white rounded-lg p-8 shadow-sm border border-abbey-200 hover:border-forest-300 transition-colors">
                <h2 className="text-xl font-serif font-bold mb-2 group-hover:text-forest-700">{p.nameKo}</h2>
                <p className="text-abbey-500 text-sm mb-3">{p.nameEn}</p>
                <p className="text-abbey-600 text-sm leading-relaxed">{p.biographySummary}</p>
              </Link>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/founders/prayers" className="group block bg-white rounded-lg p-6 shadow-sm border border-abbey-200 hover:border-forest-300 transition-colors">
              <h3 className="font-serif font-bold text-lg mb-2 group-hover:text-forest-700">기도문</h3>
              <p className="text-sm text-abbey-600">예수원 공동체의 기도문</p>
            </Link>
            <Link href="/founders/thought-map" className="group block bg-white rounded-lg p-6 shadow-sm border border-abbey-200 hover:border-forest-300 transition-colors">
              <h3 className="font-serif font-bold text-lg mb-2 group-hover:text-forest-700">신학 사상 지도</h3>
              <p className="text-sm text-abbey-600">주제별 가르침 탐색</p>
            </Link>
            <Link href="/founders/archive/lectures" className="group block bg-white rounded-lg p-6 shadow-sm border border-abbey-200 hover:border-forest-300 transition-colors">
              <h3 className="font-serif font-bold text-lg mb-2 group-hover:text-forest-700">강의 아카이브</h3>
              <p className="text-sm text-abbey-600">60년간의 강의 기록</p>
            </Link>
            <Link href="/founders/archive/books" className="group block bg-white rounded-lg p-6 shadow-sm border border-abbey-200 hover:border-forest-300 transition-colors">
              <h3 className="font-serif font-bold text-lg mb-2 group-hover:text-forest-700">저작 아카이브</h3>
              <p className="text-sm text-abbey-600">서적과 출판물</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
