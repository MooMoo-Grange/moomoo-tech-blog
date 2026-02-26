import Breadcrumbs from "@/components/Breadcrumbs"

export const metadata = { title: "침묵" }

export default function SilencePage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "홈", path: "/" }, { label: "일과와 리듬", path: "/rhythm" }, { label: "침묵" }]} />
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-serif font-bold mb-6">침묵</h1>
          <p className="text-lg text-abbey-600 leading-relaxed mb-12">
            침묵은 하나님의 음성을 듣는 시간입니다. 예수원의 하루에는 의도적인 침묵의 시간이 있습니다.
          </p>
          <div className="space-y-8">
            <div className="bg-white rounded-lg p-8 shadow-sm border border-abbey-200">
              <h2 className="text-xl font-serif font-bold mb-4">침묵의 시간</h2>
              <p className="text-abbey-700 leading-relaxed mb-4">
                저녁 만도(저녁기도) 이후부터 다음 날 아침 조도(아침기도) 전까지는 &lsquo;큰 침묵(The Great Silence)&rsquo; 시간입니다.
                이 시간에는 불필요한 대화를 삼가고, 하나님 앞에서 고요함을 유지합니다.
              </p>
              <p className="text-abbey-700 leading-relaxed">
                또한 식사 시간에도 부분적인 침묵이 지켜지며, 때로 성경 봉독이나 영적 독서가 함께합니다.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-sm border border-abbey-200">
              <h2 className="text-xl font-serif font-bold mb-4">침묵의 의미</h2>
              <p className="text-abbey-700 leading-relaxed">
                침묵은 소극적인 행위가 아닙니다. 하나님 앞에서 자신을 비우고, 말씀에 귀 기울이며,
                성령의 인도를 구하는 적극적인 영적 훈련입니다. 일상의 소음에서 벗어나
                하나님과의 깊은 만남을 경험하는 시간입니다.
              </p>
            </div>
            <div className="bg-abbey-100/50 rounded-lg p-6 border border-abbey-200">
              <h3 className="font-serif font-bold mb-3">방문자 안내</h3>
              <ul className="space-y-2 text-sm text-abbey-700">
                <li>&bull; 큰 침묵 시간(만도 후 ~ 조도 전)에는 대화를 삼가 주세요.</li>
                <li>&bull; 예배 시간 전후로 조용히 마음을 준비하는 시간을 가져 주세요.</li>
                <li>&bull; 침묵이 불편하시더라도 며칠 지나면 깊은 평안을 경험하게 됩니다.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
