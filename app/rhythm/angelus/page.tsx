import Breadcrumbs from "@/components/Breadcrumbs"

export const metadata = { title: "삼종 기도" }

export default function AngelusPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "홈", path: "/" }, { label: "일과와 리듬", path: "/rhythm" }, { label: "삼종" }]} />
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-serif font-bold mb-6">삼종 기도 (Angelus)</h1>
          <p className="text-lg text-abbey-600 leading-relaxed mb-12">
            삼종 기도는 하루 세 번(아침, 낮, 저녁) 종소리와 함께 잠시 멈추어 기도하는 전통입니다.
          </p>
          <div className="space-y-8">
            <div className="bg-white rounded-lg p-8 shadow-sm border border-abbey-200">
              <h2 className="text-xl font-serif font-bold mb-4">삼종의 의미</h2>
              <p className="text-abbey-700 leading-relaxed">
                삼종 기도는 하나님의 말씀이 사람이 되신 성육신(Incarnation)의 신비를 묵상하는 기도입니다.
                종이 울리면 하던 일을 멈추고 잠시 하나님을 생각하며 기도합니다.
                이 전통은 중세 수도원에서 시작되어 오늘까지 이어지고 있습니다.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-sm border border-abbey-200">
              <h2 className="text-xl font-serif font-bold mb-4">삼종 시간</h2>
              <div className="space-y-3">
                <div className="flex items-center gap-4 py-2 border-b border-abbey-100">
                  <span className="text-forest-700 font-bold w-24 text-sm">아침 06:00</span>
                  <span className="text-abbey-700">조도와 함께</span>
                </div>
                <div className="flex items-center gap-4 py-2 border-b border-abbey-100">
                  <span className="text-forest-700 font-bold w-24 text-sm">낮 12:00</span>
                  <span className="text-abbey-700">대도와 함께</span>
                </div>
                <div className="flex items-center gap-4 py-2">
                  <span className="text-forest-700 font-bold w-24 text-sm">저녁 19:00</span>
                  <span className="text-abbey-700">만도와 함께</span>
                </div>
              </div>
            </div>
            <div className="bg-abbey-100/50 rounded-lg p-6 border border-abbey-200">
              <p className="text-sm text-abbey-600 italic leading-relaxed">
                종소리가 울리면, 노동을 하고 있더라도 잠시 멈추어 기도합니다.
                이 작은 멈춤이 하루를 하나님의 임재 안에 거하게 합니다.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
