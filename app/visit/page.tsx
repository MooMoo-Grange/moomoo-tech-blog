import Link from "next/link"
import Breadcrumbs from "@/components/Breadcrumbs"

export const metadata = { title: "방문 안내" }

export default function VisitPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "홈", path: "/" }, { label: "방문 안내" }]} />
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-serif font-bold mb-6">방문 안내</h1>
          <p className="text-lg text-abbey-600 leading-relaxed max-w-3xl mb-12">
            예수원을 방문하고 싶으시다면, 아래의 안내를 참고해 주세요.
            방문 전 반드시 사무부(033-552-0633)에 연락하셔야 합니다.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/visit/about" className="group block bg-white rounded-lg p-8 shadow-sm border border-abbey-200 hover:border-forest-300 transition-colors">
              <h2 className="text-xl font-serif font-bold mb-3 group-hover:text-forest-700">예수원은 어떤 곳인가</h2>
              <p className="text-abbey-600 text-sm leading-relaxed">예수원에 처음 오시는 분들을 위한 소개입니다.</p>
            </Link>
            <Link href="/visit/how" className="group block bg-white rounded-lg p-8 shadow-sm border border-abbey-200 hover:border-forest-300 transition-colors">
              <h2 className="text-xl font-serif font-bold mb-3 group-hover:text-forest-700">방문 안내</h2>
              <p className="text-abbey-600 text-sm leading-relaxed">방문 예약, 준비물, 일정에 대한 안내입니다.</p>
            </Link>
            <Link href="/visit/transport" className="group block bg-white rounded-lg p-8 shadow-sm border border-abbey-200 hover:border-forest-300 transition-colors">
              <h2 className="text-xl font-serif font-bold mb-3 group-hover:text-forest-700">교통편</h2>
              <p className="text-abbey-600 text-sm leading-relaxed">서울 및 각 지역에서 예수원으로 오는 방법을 안내합니다.</p>
            </Link>
            <Link href="/visit/onsite" className="group block bg-white rounded-lg p-8 shadow-sm border border-abbey-200 hover:border-forest-300 transition-colors">
              <h2 className="text-xl font-serif font-bold mb-3 group-hover:text-forest-700">현장 생활 안내</h2>
              <p className="text-abbey-600 text-sm leading-relaxed">예수원에서의 하루 일과와 방문자 생활 규칙을 안내합니다.</p>
            </Link>
            <Link href="/visit/faq" className="group block bg-white rounded-lg p-8 shadow-sm border border-abbey-200 hover:border-forest-300 transition-colors">
              <h2 className="text-xl font-serif font-bold mb-3 group-hover:text-forest-700">자주 묻는 질문</h2>
              <p className="text-abbey-600 text-sm leading-relaxed">방문 전 자주 묻는 질문과 답변을 확인해 보세요.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
