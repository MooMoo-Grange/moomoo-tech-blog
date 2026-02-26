import Breadcrumbs from "@/components/Breadcrumbs"

export const metadata = { title: "기념품·안내자료" }

export default function GiftsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "홈", path: "/" }, { label: "출판과 보급", path: "/publications" }, { label: "기념품·안내자료" }]} />
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-serif font-bold mb-6">기념품·안내자료</h1>
          <p className="text-lg text-abbey-600 leading-relaxed mb-10">
            예수원 방문의 기억을 간직할 수 있는 기념품과 안내 자료를 소개합니다.
          </p>

          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-abbey-200">
              <h2 className="text-lg font-serif font-bold mb-3">안내 팸플릿</h2>
              <p className="text-sm text-abbey-700 leading-relaxed">
                예수원의 역사, 생활, 프로그램 등을 소개하는 안내 팸플릿입니다.
                한국어와 영어 버전이 준비되어 있습니다.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-abbey-200">
              <h2 className="text-lg font-serif font-bold mb-3">엽서</h2>
              <p className="text-sm text-abbey-700 leading-relaxed">
                예수원과 태백산의 아름다운 풍경을 담은 엽서입니다.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-abbey-200">
              <h2 className="text-lg font-serif font-bold mb-3">예수원 달력</h2>
              <p className="text-sm text-abbey-700 leading-relaxed">
                예수원의 사계절 풍경과 말씀을 담은 달력입니다 (매년 한정 제작).
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-abbey-200">
              <h2 className="text-lg font-serif font-bold mb-3">수공예품</h2>
              <p className="text-sm text-abbey-700 leading-relaxed">
                공동체 구성원이 정성껏 만든 수공예품입니다. 목공예, 수제 비누 등이 있습니다.
              </p>
            </div>
          </div>

          <div className="mt-10 bg-abbey-100/50 rounded-lg p-6 border border-abbey-200">
            <h3 className="font-bold mb-2">구매 안내</h3>
            <p className="text-sm text-abbey-700">
              기념품과 안내자료는 예수원 현장에서 구매하실 수 있습니다.
              문의: 033-552-0633
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
