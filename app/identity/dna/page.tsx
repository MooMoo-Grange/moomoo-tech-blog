import Link from "next/link"
import Breadcrumbs from "@/components/Breadcrumbs"

export const metadata = { title: "영적 DNA" }

export default function DnaPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "홈", path: "/" }, { label: "정체성", path: "/identity" }, { label: "영적 DNA" }]} />
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-serif font-bold mb-6">영적 DNA</h1>
          <p className="text-lg text-abbey-600 leading-relaxed mb-12">
            예수원의 영적 유산은 여러 세대에 걸쳐 전해져 온 핵심 가치와 신학적 토대 위에 세워져 있습니다.
          </p>
          <div className="space-y-8">
            <div className="bg-white rounded-lg p-8 shadow-sm border border-abbey-200">
              <h2 className="text-xl font-serif font-bold mb-4">성령 중심의 삶</h2>
              <p className="text-abbey-700 leading-relaxed">
                예수원은 성령의 인도하심을 삶의 모든 영역에서 구합니다. 성령세미나를 통해 성령의 은사와 열매를 가르치며,
                매일의 예배와 기도에서 성령의 임재를 경험합니다.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-sm border border-abbey-200">
              <h2 className="text-xl font-serif font-bold mb-4">말씀과 성례전</h2>
              <p className="text-abbey-700 leading-relaxed">
                성경은 예수원 생활의 기초입니다. 매일의 성경 봉독과 묵상, 주일 성찬식을 통해
                말씀과 성례전 안에서 하나님을 만납니다.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-sm border border-abbey-200">
              <h2 className="text-xl font-serif font-bold mb-4">동서양 영성의 만남</h2>
              <p className="text-abbey-700 leading-relaxed">
                서양 수도원 전통과 동양의 경건 문화가 만나는 독특한 영성을 추구합니다.
                성공회의 예전적 전통 위에 한국적 영성의 깊이를 더합니다.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-sm border border-abbey-200">
              <h2 className="text-xl font-serif font-bold mb-4">겸손과 순종</h2>
              <p className="text-abbey-700 leading-relaxed">
                공동체 생활의 핵심은 자기를 내려놓는 겸손과 하나님께 대한 순종입니다.
                이는 매일의 노동과 기도, 서로를 섬기는 삶 속에서 구체적으로 실천됩니다.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-sm border border-abbey-200">
              <h2 className="text-xl font-serif font-bold mb-4">치유와 화해</h2>
              <p className="text-abbey-700 leading-relaxed">
                예수원은 상처 입은 영혼의 치유와 깨어진 관계의 화해를 사역의 중요한 부분으로 여깁니다.
                기도와 상담, 공동체 생활을 통해 전인적 치유를 경험하게 합니다.
              </p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <Link href="/founders/thought-map" className="text-forest-700 hover:text-forest-800 text-sm font-medium">신학 사상 지도 보기 &rarr;</Link>
          </div>
        </div>
      </section>
    </>
  )
}
