import Breadcrumbs from "@/components/Breadcrumbs"

export const metadata = { title: "식사와 공동체" }

export default function MealsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "홈", path: "/" }, { label: "일과와 리듬", path: "/rhythm" }, { label: "식사와 공동체" }]} />
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-serif font-bold mb-6">식사와 공동체</h1>
          <p className="text-lg text-abbey-600 leading-relaxed mb-12">
            함께 먹는 것은 초대교회의 핵심 실천이었습니다. 예수원에서의 식사는 교제이며 나눔이며 감사입니다.
          </p>
          <div className="space-y-8">
            <div className="bg-white rounded-lg p-8 shadow-sm border border-abbey-200">
              <h2 className="text-xl font-serif font-bold mb-4">식사 시간</h2>
              <div className="space-y-3">
                <div className="flex items-center gap-4 py-2 border-b border-abbey-100">
                  <span className="text-forest-700 font-bold w-24 text-sm">아침 07:00</span>
                  <span className="text-abbey-700">간소한 아침 식사</span>
                </div>
                <div className="flex items-center gap-4 py-2 border-b border-abbey-100">
                  <span className="text-forest-700 font-bold w-24 text-sm">점심 12:00</span>
                  <span className="text-abbey-700">하루 중 주된 식사</span>
                </div>
                <div className="flex items-center gap-4 py-2">
                  <span className="text-forest-700 font-bold w-24 text-sm">저녁 17:30</span>
                  <span className="text-abbey-700">가벼운 저녁 식사</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-sm border border-abbey-200">
              <h2 className="text-xl font-serif font-bold mb-4">식사 문화</h2>
              <p className="text-abbey-700 leading-relaxed mb-4">
                식사는 공동 식당에서 함께합니다. 식전 감사 기도를 드리고, 때로 성경 봉독이나 침묵 가운데 식사합니다.
                음식은 공동체가 직접 농사지은 채소와 곡물을 중심으로 소박하게 준비됩니다.
              </p>
              <p className="text-abbey-700 leading-relaxed">
                식사 준비와 정리는 공동체 구성원이 함께 나눕니다.
                방문자도 식사 준비와 뒷정리에 참여하시기 바랍니다.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
