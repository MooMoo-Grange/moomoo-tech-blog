import Link from "next/link"
import Breadcrumbs from "@/components/Breadcrumbs"

export const metadata = { title: "방문 안내" }

export default function HowToVisitPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "홈", path: "/" }, { label: "방문 안내", path: "/visit" }, { label: "방문 안내" }]} />
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-serif font-bold mb-6">방문 안내</h1>
          <p className="text-lg text-abbey-600 leading-relaxed mb-10">
            예수원 방문을 위한 절차와 준비사항을 안내합니다.
          </p>

          <div className="space-y-10">
            {/* 1) 일시방문 안내 */}
            <div>
              <h2 className="text-xl font-serif font-bold mb-4">1) 일시방문 안내</h2>
              <div className="bg-white rounded-lg p-6 border border-abbey-200 space-y-3">
                <ul className="text-sm text-abbey-700 space-y-2">
                  <li className="flex gap-3"><span className="text-forest-600 shrink-0">◈</span><span>주말에는 손님이 원내에 계실 수 없습니다.</span></li>
                  <li className="flex gap-3"><span className="text-forest-600 shrink-0">◈</span><span>핸드폰 전원은 꺼주시고, 건물 외부만 10~20분 정도 둘러보시고 가시면 됩니다.</span></li>
                  <li className="flex gap-3"><span className="text-forest-600 shrink-0">◈</span><span>화장실은 옆 제일 큰 건물(나사렛) 1층에 있습니다.</span></li>
                </ul>
              </div>
            </div>

            {/* 2) 방문자 생활안내 */}
            <div>
              <h2 className="text-xl font-serif font-bold mb-4">2) 방문자 생활안내</h2>
              <div className="space-y-6">

                {/* 도착 및 출발 */}
                <div className="bg-forest-50 rounded-lg p-6 border border-forest-200">
                  <h3 className="font-bold text-forest-800 mb-3">◈ 도착 및 출발</h3>
                  <p className="text-sm text-forest-700 leading-relaxed mb-3">매주 월요일과 수요일 두 차례 방문객을 받고 있습니다.</p>
                  <ul className="text-sm text-forest-700 space-y-2">
                    <li>• 월요일에 오시는 분은 수요일까지 2박 3일</li>
                    <li>• 수요일에 오시는 분은 금요일까지 2박 3일</li>
                    <li>• 도착일 (들어오는 시간): 오후 2시 ~ 4시 사이에 도착</li>
                    <li>• 출발일 (나가는 시간): 오전 8시 ~ 11시 사이에 하산</li>
                  </ul>
                  <p className="text-sm text-forest-600 mt-2 ml-4">* 태백행 8시 50분 버스 / 11시 05분 버스 이용</p>
                  <p className="text-sm text-forest-600 ml-4">* 태백시외버스터미널까지 30분 소요됩니다.</p>
                </div>

                {/* 준비물 */}
                <div className="bg-white rounded-lg p-6 border border-abbey-200">
                  <h3 className="font-bold mb-3">◈ 준비물</h3>
                  <p className="text-sm text-abbey-700 leading-relaxed">
                    성경, 세면도구, 여름(긴팔옷), 겨울(방한복) 별도 준비, 운동화(구두/샌들 불편), 소형 랜턴, 개인 물병이나 물컵
                  </p>
                </div>

                {/* 금지 및 제한사항 */}
                <div className="bg-white rounded-lg p-6 border border-abbey-200">
                  <h3 className="font-bold mb-3">◈ 금지 및 제한사항</h3>
                  <ul className="text-sm text-abbey-700 space-y-2">
                    <li className="flex gap-3">
                      <span className="text-abbey-500 shrink-0">-</span>
                      <span><strong>복장제한:</strong> 맨발, 반바지(팔부 이상 가능), 스키니진, 레깅스, 짧은치마, 민소매 등 노출 및 밀착이 심한 옷, 운동복(취침 시 가능), 양말 항시 착용</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-abbey-500 shrink-0">-</span>
                      <span>음주 및 흡연</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-abbey-500 shrink-0">-</span>
                      <span>차량키, 휴대폰, 아이패드, 노트북, 카메라 등 비롯한 전자기기 사용불가 (손님부에서 보관, 하산 직전 다시 찾아감)</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-abbey-500 shrink-0">-</span>
                      <span>외부와의 연락은 본원에 올라오시기 전에 해주세요. 본원은 전화신호가 약하여 전화 사용이 어렵습니다.</span>
                    </li>
                  </ul>
                </div>

                {/* 숙식비 */}
                <div className="bg-white rounded-lg p-6 border border-abbey-200">
                  <h3 className="font-bold mb-3">◈ 숙식비</h3>
                  <p className="text-sm text-abbey-700 leading-relaxed">
                    숙식비 받지 않음 (자원하는 경우 헌금 가능)
                  </p>
                </div>

                {/* 짐 안내 */}
                <div className="bg-abbey-100/50 rounded-lg p-6 border border-abbey-200">
                  <h3 className="font-bold mb-3">◈ 짐 안내</h3>
                  <p className="text-sm text-abbey-700 leading-relaxed">
                    원내 도로가 비포장이니 캐리어보다는 백팩 사용을 권하며 마을에서 경사지를 15분여 걸어오셔야 하기에 소량의 짐을 가져오시길 권장합니다. (캐리어는 가져오지 마세요.)
                  </p>
                </div>

              </div>
            </div>
          </div>

          <div className="mt-10 flex gap-4">
            <Link href="/visit/transport" className="inline-block bg-forest-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-forest-800 transition-colors text-sm">
              교통편 안내
            </Link>
            <Link href="/visit/onsite" className="inline-block border border-forest-700 text-forest-700 px-6 py-3 rounded-lg font-medium hover:bg-forest-50 transition-colors text-sm">
              현장 생활 안내
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
