import Breadcrumbs from "@/components/Breadcrumbs"

export const metadata = { title: "노동" }

export default function LaborPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "홈", path: "/" }, { label: "일과와 리듬", path: "/rhythm" }, { label: "노동" }]} />
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-serif font-bold mb-6">노동</h1>
          <p className="text-lg text-abbey-600 leading-relaxed mb-12">
            &lsquo;기도하고 일하라(Ora et Labora)&rsquo; — 노동은 기도의 연장이며, 하나님을 섬기는 거룩한 행위입니다.
          </p>
          <div className="space-y-8">
            <div className="bg-white rounded-lg p-8 shadow-sm border border-abbey-200">
              <h2 className="text-xl font-serif font-bold mb-4">노동의 의미</h2>
              <p className="text-abbey-700 leading-relaxed">
                예수원에서의 노동은 단순한 생산 활동이 아닙니다. 이는 창조 질서에 참여하는 행위이며,
                하나님이 주신 땅을 가꾸고 돌보는 청지기직입니다. 모든 구성원은 자신의 능력에 따라 공동체의 필요에 봉사합니다.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-sm border border-abbey-200">
              <h2 className="text-xl font-serif font-bold mb-4">노동 영역</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                {[
                  { title: "농사", desc: "밭 가꾸기, 과수원, 비닐하우스" },
                  { title: "건축 · 시설 관리", desc: "건물 유지보수, 난방, 전기" },
                  { title: "주방 · 식사 준비", desc: "매일의 식사 준비와 정리" },
                  { title: "청소 · 정돈", desc: "공동 공간과 개인 공간 관리" },
                  { title: "사무 · 행정", desc: "방문자 안내, 서신, 회계" },
                  { title: "출판 · 미디어", desc: "서적 편집, 녹음, 자료 관리" },
                ].map(item => (
                  <div key={item.title} className="flex items-start gap-3">
                    <span className="text-forest-600 mt-1">&#9670;</span>
                    <div>
                      <h3 className="font-medium text-sm">{item.title}</h3>
                      <p className="text-xs text-abbey-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-abbey-100/50 rounded-lg p-6 border border-abbey-200">
              <p className="text-sm text-abbey-600 italic">
                &ldquo;방문자도 공동체의 노동에 함께 참여하시기 바랍니다.
                함께 일하는 가운데 하나님과의 만남이 일어납니다.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
