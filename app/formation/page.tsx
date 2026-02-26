import Link from "next/link"
import Breadcrumbs from "@/components/Breadcrumbs"

export const metadata = { title: "양성과 교육" }

export default function FormationPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "홈", path: "/" }, { label: "양성과 교육" }]} />
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-serif font-bold mb-6">양성과 교육</h1>
          <p className="text-lg text-abbey-600 leading-relaxed max-w-3xl mb-12">
            예수원은 기도, 노동, 공동체 생활을 통한 전인적 영적 형성(Formation)을 추구합니다.
            지원 과정, 수련 과정, 성령세미나 등 다양한 교육 프로그램을 운영하고 있습니다.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link href="/formation/applicant" className="group block bg-white rounded-lg p-8 shadow-sm border border-abbey-200 hover:border-forest-300 transition-colors">
              <h2 className="text-xl font-serif font-bold mb-3 group-hover:text-forest-700">지원 과정</h2>
              <p className="text-abbey-600 text-sm leading-relaxed">3개월간 예수원 공동체 생활의 기본을 경험하고 소명을 분별하는 과정입니다.</p>
            </Link>
            <Link href="/formation/trainee" className="group block bg-white rounded-lg p-8 shadow-sm border border-abbey-200 hover:border-forest-300 transition-colors">
              <h2 className="text-xl font-serif font-bold mb-3 group-hover:text-forest-700">수련 과정</h2>
              <p className="text-abbey-600 text-sm leading-relaxed">1~2년간 신학적 기초, 영적 형성, 공동체 생활을 심화하는 과정입니다.</p>
            </Link>
            <Link href="/formation/seminar" className="group block bg-white rounded-lg p-8 shadow-sm border border-abbey-200 hover:border-forest-300 transition-colors">
              <h2 className="text-xl font-serif font-bold mb-3 group-hover:text-forest-700">성령세미나</h2>
              <p className="text-abbey-600 text-sm leading-relaxed">3~5일간 성령의 인격과 사역에 대한 집중 교육과 체험의 시간입니다.</p>
            </Link>
            <Link href="/formation/philosophy" className="group block bg-white rounded-lg p-8 shadow-sm border border-abbey-200 hover:border-forest-300 transition-colors">
              <h2 className="text-xl font-serif font-bold mb-3 group-hover:text-forest-700">교육 철학</h2>
              <p className="text-abbey-600 text-sm leading-relaxed">예수원의 교육이 지향하는 영적 형성의 원리와 방법론을 소개합니다.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
