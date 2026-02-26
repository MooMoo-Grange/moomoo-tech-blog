import Link from "next/link"
import Breadcrumbs from "@/components/Breadcrumbs"

export const metadata = { title: "정체성" }

export default function IdentityPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "홈", path: "/" }, { label: "정체성" }]} />
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-serif font-bold mb-6">정체성</h1>
          <p className="text-lg text-abbey-600 leading-relaxed max-w-3xl mb-12">
            예수원은 1965년 대천덕(Reuben Archer Torrey III) 신부에 의해 설립된 성공회 수도 공동체입니다.
            기도, 노동, 공동체 생활이라는 세 가지 실험을 중심으로 하나님 나라를 살아가고 있습니다.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link href="/identity/foundation" className="group block bg-white rounded-lg p-8 shadow-sm border border-abbey-200 hover:border-forest-300 transition-colors">
              <h2 className="text-xl font-serif font-bold mb-3 group-hover:text-forest-700">설립 이야기</h2>
              <p className="text-abbey-600 text-sm leading-relaxed">1965년, 대천덕 신부가 어떻게 덕항산 기슭에 예수원을 세우게 되었는지 그 이야기를 소개합니다.</p>
            </Link>
            <Link href="/identity/experiments" className="group block bg-white rounded-lg p-8 shadow-sm border border-abbey-200 hover:border-forest-300 transition-colors">
              <h2 className="text-xl font-serif font-bold mb-3 group-hover:text-forest-700">세 가지 실험</h2>
              <p className="text-abbey-600 text-sm leading-relaxed">기도 생활, 공동체 생활, 노동 — 예수원의 삶을 이루는 핵심 원리입니다.</p>
            </Link>
            <Link href="/identity/ministries" className="group block bg-white rounded-lg p-8 shadow-sm border border-abbey-200 hover:border-forest-300 transition-colors">
              <h2 className="text-xl font-serif font-bold mb-3 group-hover:text-forest-700">7대 사역</h2>
              <p className="text-abbey-600 text-sm leading-relaxed">예배, 훈련, 은퇴선교사 섬김, 보급, 지원, 출판, 기도 — 예수원의 7대 사역 영역을 소개합니다.</p>
            </Link>
            <Link href="/identity/dna" className="group block bg-white rounded-lg p-8 shadow-sm border border-abbey-200 hover:border-forest-300 transition-colors">
              <h2 className="text-xl font-serif font-bold mb-3 group-hover:text-forest-700">영적 DNA</h2>
              <p className="text-abbey-600 text-sm leading-relaxed">예수원이 지켜온 영적 유산과 핵심 가치, 신학적 토대를 살펴봅니다.</p>
            </Link>
            <Link href="/identity/fourth-river" className="group block bg-white rounded-lg p-8 shadow-sm border border-abbey-200 hover:border-forest-300 transition-colors md:col-span-2">
              <h2 className="text-xl font-serif font-bold mb-3 group-hover:text-forest-700">제4의 강 프로젝트 (The Fourth River Project)</h2>
              <p className="text-abbey-600 text-sm leading-relaxed">예수원의 북한 선교 사역. 한국 교회의 화합과 치유를 위해 일꾼을 준비하고, 삼수령 센터(Three Seas Center)에서 훈련과 기도의 공동체를 세워가는 프로젝트입니다.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
