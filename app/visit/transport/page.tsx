import Breadcrumbs from "@/components/Breadcrumbs"

export const metadata = { title: "교통편" }

export default function TransportPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "홈", path: "/" }, { label: "방문 안내", path: "/visit" }, { label: "교통편" }]} />
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-serif font-bold mb-6">교통편</h1>
          <p className="text-lg text-abbey-600 leading-relaxed mb-10">
            예수원은 강원도 태백시 삼수동, 태백산 삼수령에 위치해 있습니다.
          </p>

          <div className="space-y-10">
            <div>
              <h2 className="text-xl font-serif font-bold mb-4">🚆 대중교통</h2>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-6 border border-abbey-200">
                  <h3 className="font-bold mb-2">서울 → 태백</h3>
                  <ul className="text-sm text-abbey-700 space-y-2">
                    <li>• 청량리역에서 태백행 무궁화호 이용 (약 3시간 30분)</li>
                    <li>• 동서울터미널에서 태백행 시외버스 이용 (약 3시간)</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-6 border border-abbey-200">
                  <h3 className="font-bold mb-2">태백 → 예수원</h3>
                  <ul className="text-sm text-abbey-700 space-y-2">
                    <li>• 태백시내에서 삼수동 방면 시내버스 이용</li>
                    <li>• 택시 이용 가능 (약 20분)</li>
                    <li>• 사전 연락 시 픽업 가능 여부 확인</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-serif font-bold mb-4">🚗 자가용</h2>
              <div className="bg-white rounded-lg p-6 border border-abbey-200">
                <ul className="text-sm text-abbey-700 space-y-2">
                  <li>• 영동고속도로 → 중앙고속도로 → 38번 국도 → 태백 → 삼수령</li>
                  <li>• 서울에서 약 3~4시간 소요</li>
                  <li>• 네비게이션: &ldquo;강원도 태백시 삼수동&rdquo; 검색</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-serif font-bold mb-4">📍 주소</h2>
              <div className="bg-forest-50 rounded-lg p-6 border border-forest-200">
                <p className="text-forest-800 font-medium mb-2">예수원 (Jesus Abbey)</p>
                <p className="text-sm text-forest-700">강원도 태백시 삼수동</p>
                <p className="text-sm text-forest-700 mt-2">☎ 033-552-0633</p>
              </div>
            </div>

            <div className="bg-abbey-100/50 rounded-lg p-6 border border-abbey-200">
              <h3 className="font-bold mb-2">참고 사항</h3>
              <ul className="text-sm text-abbey-700 space-y-1">
                <li>• 산간 지역이므로 겨울에는 눈이 많이 올 수 있습니다.</li>
                <li>• 도착 시간을 사전에 알려주시면 안내를 도와드립니다.</li>
                <li>• 방문 전 반드시 사무부에 연락해 주세요.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
