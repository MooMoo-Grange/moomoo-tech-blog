import Link from "next/link"
import Breadcrumbs from "@/components/Breadcrumbs"

export const metadata = { title: "세 가지 실험" }

export default function ExperimentsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "홈", path: "/" }, { label: "정체성", path: "/identity" }, { label: "세 가지 실험" }]} />
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-serif font-bold mb-6">세 가지 실험</h1>
          <p className="text-lg text-abbey-600 leading-relaxed mb-12">
            예수원은 세 가지 실험을 통해 하나님 나라를 이 땅에서 살아가고자 합니다.
          </p>
          <div className="space-y-12">
            <div className="bg-white rounded-lg p-8 shadow-sm border border-abbey-200">
              <h2 className="text-2xl font-serif font-bold text-forest-700 mb-4">1. 기도 생활</h2>
              <p className="text-abbey-700 leading-relaxed mb-4">
                예수원의 하루는 기도로 시작하고 기도로 마칩니다. 조도(아침기도), 대도(낮기도), 만도(저녁기도)의 정시기도를 통해
                하루 전체를 하나님께 드리는 예배로 삼습니다.
              </p>
              <p className="text-abbey-700 leading-relaxed">
                이 기도의 리듬은 초대교회 이래 수도원 전통에 뿌리를 두고 있으며, 시편, 성경 봉독, 침묵 기도, 중보기도가 포함됩니다.
              </p>
              <Link href="/rhythm/worship" className="inline-block mt-4 text-forest-700 text-sm font-medium hover:text-forest-800">예배 시간표 보기 &rarr;</Link>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-sm border border-abbey-200">
              <h2 className="text-2xl font-serif font-bold text-forest-700 mb-4">2. 공동체 생활</h2>
              <p className="text-abbey-700 leading-relaxed mb-4">
                예수원 공동체는 함께 먹고, 함께 일하고, 함께 기도합니다. 사도행전 2장의 초대교회 모습을 닮아가며,
                그리스도 안에서 한 가족이 되는 삶을 살아갑니다.
              </p>
              <p className="text-abbey-700 leading-relaxed">
                한국인과 외국인, 성직자와 평신도, 젊은이와 어른이 함께 어우러져 다양성 안의 일치를 경험합니다.
              </p>
              <Link href="/rhythm/meals" className="inline-block mt-4 text-forest-700 text-sm font-medium hover:text-forest-800">식사와 공동체 보기 &rarr;</Link>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-sm border border-abbey-200">
              <h2 className="text-2xl font-serif font-bold text-forest-700 mb-4">3. 노동</h2>
              <p className="text-abbey-700 leading-relaxed mb-4">
                베네딕트 규칙의 &lsquo;기도하고 일하라(Ora et Labora)&rsquo; 정신을 따라, 노동을 기도의 연장으로 봅니다.
                농사, 건축, 청소, 요리 등 모든 노동이 하나님을 섬기는 행위입니다.
              </p>
              <Link href="/rhythm/labor" className="inline-block mt-4 text-forest-700 text-sm font-medium hover:text-forest-800">노동에 대해 더 보기 &rarr;</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
