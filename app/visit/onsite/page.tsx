import Breadcrumbs from "@/components/Breadcrumbs"

export const metadata = { title: "현장 생활 안내" }

export default function OnsitePage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "홈", path: "/" }, { label: "방문 안내", path: "/visit" }, { label: "현장 생활 안내" }]} />
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-serif font-bold mb-6">현장 생활 안내</h1>
          <p className="text-lg text-abbey-600 leading-relaxed mb-10">
            예수원에서의 생활은 수도 공동체의 리듬을 따릅니다. 방문자도 이 리듬에 함께 참여합니다.
          </p>

          <div className="space-y-10">
            <div>
              <h2 className="text-xl font-serif font-bold mb-4">예배 참여</h2>
              <p className="text-abbey-700 leading-relaxed mb-3">
                방문자는 조도(아침), 대도(낮), 만도(저녁) 등 공동체의 모든 예배에 참석합니다.
                주일에는 감사성찬례가 있습니다. 예배는 성공회 전통을 따르지만,
                모든 교파의 그리스도인을 환영합니다.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-serif font-bold mb-4">노동 참여</h2>
              <p className="text-abbey-700 leading-relaxed mb-3">
                오전과 오후에 공동체의 노동에 참여합니다. 농사, 정원 가꾸기, 청소, 주방 일 등
                계절과 필요에 따라 다양한 일이 배정됩니다. 노동은 기도의 연장이며,
                공동체를 섬기는 방법입니다.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-serif font-bold mb-4">식사</h2>
              <div className="bg-white rounded-lg p-6 border border-abbey-200">
                <ul className="space-y-2 text-sm text-abbey-700">
                  <li><strong>아침 07:10</strong> — 감사 기도 후 함께 식사</li>
                  <li><strong>점심 12:40</strong> — 낮 예배 후 함께 식사</li>
                  <li><strong>저녁 18:00</strong> — 감사 기도 후 함께 식사</li>
                </ul>
                <p className="text-sm text-abbey-600 mt-3">
                  모든 식사는 공동 식사입니다. 금식은 할 수 없습니다.
                  식사 중에는 낭독이 있을 수 있으며, 침묵 중 식사하는 날도 있습니다.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-serif font-bold mb-4">침묵</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-abbey-50 rounded-lg p-6 border border-abbey-200">
                  <h3 className="font-bold mb-2">소침묵 (Lesser Silence)</h3>
                  <p className="text-sm text-abbey-700">오후 1시~2시, 밤 9시~10시</p>
                  <p className="text-sm text-abbey-600 mt-1">불필요한 대화를 삼가는 시간</p>
                </div>
                <div className="bg-abbey-50 rounded-lg p-6 border border-abbey-200">
                  <h3 className="font-bold mb-2">대침묵 (Greater Silence)</h3>
                  <p className="text-sm text-abbey-700">밤 10시 ~ 다음날 아침 예배 후</p>
                  <p className="text-sm text-abbey-600 mt-1">완전한 침묵을 지키는 시간</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-serif font-bold mb-4">생활 규칙</h2>
              <div className="bg-forest-50 rounded-lg p-6 border border-forest-200">
                <ul className="space-y-2 text-sm text-forest-800">
                  <li>• 모든 예배에 참석해 주세요.</li>
                  <li>• 침묵 시간을 지켜 주세요.</li>
                  <li>• 배정된 노동에 참여해 주세요.</li>
                  <li>• 핸드폰 사용을 최소화해 주세요.</li>
                  <li>• 음주와 흡연은 삼가 주세요.</li>
                  <li>• 이성 간 방문은 제한됩니다.</li>
                  <li>• 숙소와 공용 공간을 깨끗이 사용해 주세요.</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-serif font-bold mb-4">시설 안내</h2>
              <p className="text-abbey-700 leading-relaxed">
                예수원에는 예배당, 식당, 방문자 숙소, 도서관, 작업장 등이 있습니다.
                숙소에는 침구가 제공되며, 샤워 시설을 이용하실 수 있습니다.
                세탁 시설도 제공됩니다.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
