import Breadcrumbs from "@/components/Breadcrumbs"

export const metadata = { title: "연락처" }

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "홈", path: "/" }, { label: "소식과 공동체", path: "/news" }, { label: "연락처" }]} />
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-serif font-bold mb-6">연락처</h1>
          <p className="text-lg text-abbey-600 leading-relaxed mb-10">
            예수원에 연락하는 방법을 안내합니다.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-lg p-8 shadow-sm border border-abbey-200">
              <h2 className="text-xl font-serif font-bold mb-4">📞 전화</h2>
              <p className="text-2xl font-bold text-forest-700 mb-2">033-552-0633</p>
              <p className="text-sm text-abbey-600">
                사무부 운영 시간에 연락해 주세요.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-sm border border-abbey-200">
              <h2 className="text-xl font-serif font-bold mb-4">📍 주소</h2>
              <p className="text-abbey-700 font-medium mb-2">예수원 (Jesus Abbey)</p>
              <p className="text-sm text-abbey-600">강원도 태백시 삼수동</p>
            </div>
          </div>

          <div className="bg-abbey-50 rounded-lg p-8 border border-abbey-200 mb-10">
            <h2 className="text-xl font-serif font-bold mb-4">문의 안내</h2>
            <div className="space-y-4 text-sm text-abbey-700">
              <div>
                <h3 className="font-bold mb-1">방문 예약</h3>
                <p>방문 일정, 인원, 목적을 알려주시면 안내해 드립니다.</p>
              </div>
              <div>
                <h3 className="font-bold mb-1">프로그램 문의</h3>
                <p>지원 과정, 수련 과정, 성령세미나에 대한 문의를 받습니다.</p>
              </div>
              <div>
                <h3 className="font-bold mb-1">서적 구매</h3>
                <p>예수원 출판 서적의 구매 문의를 받습니다.</p>
              </div>
              <div>
                <h3 className="font-bold mb-1">기도 요청</h3>
                <p>기도 요청이 있으시면 연락해 주세요. 공동체가 함께 중보기도합니다.</p>
              </div>
              <div>
                <h3 className="font-bold mb-1">헌금 안내</h3>
                <p>예수원을 후원하고 싶으신 분은 전화로 문의해 주세요.</p>
              </div>
            </div>
          </div>

          <div className="bg-forest-50 rounded-lg p-6 border border-forest-200">
            <h3 className="font-bold text-forest-800 mb-2">참고 사항</h3>
            <p className="text-sm text-forest-700 leading-relaxed">
              예수원은 수도 공동체로서 예배와 노동 시간에는 전화 응대가 어려울 수 있습니다.
              사무부 운영 시간에 연락해 주시기 바랍니다.
              급한 용건이 아닌 경우 오전 중에 전화해 주시면 감사하겠습니다.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
