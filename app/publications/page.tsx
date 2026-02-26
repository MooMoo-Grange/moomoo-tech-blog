import Link from "next/link"
import Breadcrumbs from "@/components/Breadcrumbs"

export const metadata = { title: "출판과 보급" }

export default function PublicationsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "홈", path: "/" }, { label: "출판과 보급" }]} />
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-serif font-bold mb-6">출판과 보급</h1>
          <p className="text-lg text-abbey-600 leading-relaxed max-w-3xl mb-12">
            예수원에서 출판하거나 관련된 서적, 찬양집, 영상/음성 자료들을 안내합니다.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link href="/publications/catalog" className="group block bg-white rounded-lg p-8 shadow-sm border border-abbey-200 hover:border-forest-300 transition-colors">
              <h2 className="text-xl font-serif font-bold mb-3 group-hover:text-forest-700">서적 목록</h2>
              <p className="text-abbey-600 text-sm leading-relaxed">대천덕 신부의 저서와 예수원 관련 서적을 소개합니다.</p>
            </Link>
            <Link href="/publications/hymnals" className="group block bg-white rounded-lg p-8 shadow-sm border border-abbey-200 hover:border-forest-300 transition-colors">
              <h2 className="text-xl font-serif font-bold mb-3 group-hover:text-forest-700">찬양집</h2>
              <p className="text-abbey-600 text-sm leading-relaxed">예수원 공동체 예배에서 사용하는 찬양곡 모음집을 소개합니다.</p>
            </Link>
            <Link href="/publications/media" className="group block bg-white rounded-lg p-8 shadow-sm border border-abbey-200 hover:border-forest-300 transition-colors">
              <h2 className="text-xl font-serif font-bold mb-3 group-hover:text-forest-700">영상/음성 자료</h2>
              <p className="text-abbey-600 text-sm leading-relaxed">강의 녹음, 영상 자료 등을 안내합니다.</p>
            </Link>
            <Link href="/publications/gifts" className="group block bg-white rounded-lg p-8 shadow-sm border border-abbey-200 hover:border-forest-300 transition-colors">
              <h2 className="text-xl font-serif font-bold mb-3 group-hover:text-forest-700">기념품·안내자료</h2>
              <p className="text-abbey-600 text-sm leading-relaxed">예수원 방문 기념품과 안내 자료를 소개합니다.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
