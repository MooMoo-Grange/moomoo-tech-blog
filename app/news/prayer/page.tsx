import Breadcrumbs from "@/components/Breadcrumbs"

export const metadata = { title: "기도제목" }

export default function PrayerPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "홈", path: "/" }, { label: "소식과 공동체", path: "/news" }, { label: "기도제목" }]} />
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-serif font-bold mb-6">기도제목</h1>
          <p className="text-lg text-abbey-600 leading-relaxed mb-10">
            예수원 공동체와 함께 기도해 주세요. 여러분의 기도가 큰 힘이 됩니다.
          </p>

          <div className="space-y-6 mb-12">
            <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-l-forest-400 border border-abbey-200">
              <h2 className="font-serif font-bold mb-2">공동체를 위한 기도</h2>
              <p className="text-sm text-abbey-700 leading-relaxed">
                예수원 공동체 구성원들의 건강과 영적 성장, 서로 간의 사랑과 화합을 위해 기도해 주세요.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-l-forest-400 border border-abbey-200">
              <h2 className="font-serif font-bold mb-2">방문자를 위한 기도</h2>
              <p className="text-sm text-abbey-700 leading-relaxed">
                예수원을 찾는 모든 방문자들이 하나님의 평안과 치유를 경험할 수 있도록 기도해 주세요.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-l-forest-400 border border-abbey-200">
              <h2 className="font-serif font-bold mb-2">지원생·수련생을 위한 기도</h2>
              <p className="text-sm text-abbey-700 leading-relaxed">
                훈련 과정 중에 있는 지원생과 수련생들의 영적 분별과 성장을 위해 기도해 주세요.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-l-forest-400 border border-abbey-200">
              <h2 className="font-serif font-bold mb-2">사역을 위한 기도</h2>
              <p className="text-sm text-abbey-700 leading-relaxed">
                예수원의 7대 사역(예배, 훈련, 은퇴선교사 섬김, 보급, 지원, 출판, 기도)이
                하나님의 뜻 안에서 열매 맺을 수 있도록 기도해 주세요.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-l-forest-400 border border-abbey-200">
              <h2 className="font-serif font-bold mb-2">재정을 위한 기도</h2>
              <p className="text-sm text-abbey-700 leading-relaxed">
                예수원은 하나님의 공급하심을 신뢰하며 운영됩니다.
                필요한 물자와 재정이 채워질 수 있도록 기도해 주세요.
              </p>
            </div>
          </div>

          <div className="bg-forest-50 rounded-lg p-8 border border-forest-200">
            <h2 className="text-lg font-serif font-bold mb-3 text-forest-800">기도 요청</h2>
            <p className="text-sm text-forest-700 leading-relaxed mb-3">
              기도 요청이 있으시면 예수원 사무부로 연락해 주세요.
              공동체가 함께 중보기도합니다.
            </p>
            <p className="text-sm font-medium text-forest-800">
              📞 033-552-0633
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
