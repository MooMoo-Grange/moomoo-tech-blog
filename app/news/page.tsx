import Link from "next/link"
import Breadcrumbs from "@/components/Breadcrumbs"

export const metadata = { title: "소식과 공동체" }

export default function NewsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "홈", path: "/" }, { label: "소식과 공동체" }]} />
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-serif font-bold mb-6">소식과 공동체</h1>
          <p className="text-lg text-abbey-600 leading-relaxed max-w-3xl mb-12">
            예수원의 소식과 기도제목, 연락처를 안내합니다.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/news/announcements" className="group block bg-white rounded-lg p-8 shadow-sm border border-abbey-200 hover:border-forest-300 transition-colors">
              <div className="text-3xl mb-4">📢</div>
              <h2 className="text-xl font-serif font-bold mb-3 group-hover:text-forest-700">공지사항</h2>
              <p className="text-abbey-600 text-sm leading-relaxed">예수원의 주요 소식과 공지사항을 전합니다.</p>
            </Link>
            <Link href="/news/prayer" className="group block bg-white rounded-lg p-8 shadow-sm border border-abbey-200 hover:border-forest-300 transition-colors">
              <div className="text-3xl mb-4">🙏</div>
              <h2 className="text-xl font-serif font-bold mb-3 group-hover:text-forest-700">기도제목</h2>
              <p className="text-abbey-600 text-sm leading-relaxed">예수원과 함께 기도해 주세요.</p>
            </Link>
            <Link href="/news/contact" className="group block bg-white rounded-lg p-8 shadow-sm border border-abbey-200 hover:border-forest-300 transition-colors">
              <div className="text-3xl mb-4">📞</div>
              <h2 className="text-xl font-serif font-bold mb-3 group-hover:text-forest-700">연락처</h2>
              <p className="text-abbey-600 text-sm leading-relaxed">예수원에 연락하는 방법을 안내합니다.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
