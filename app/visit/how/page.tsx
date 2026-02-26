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
            <div>
              <h2 className="text-xl font-serif font-bold mb-4">1. 사전 연락</h2>
              <div className="bg-forest-50 rounded-lg p-6 border border-forest-200">
                <p className="text-forest-800 leading-relaxed mb-3">
                  방문을 원하시는 분은 반드시 사전에 사무부에 연락하셔야 합니다.
                  예약 없이 방문하시면 숙소와 식사가 준비되지 않을 수 있습니다.
                </p>
                <p className="text-sm font-medium text-forest-700">
                  📞 전화: 033-552-0633
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-serif font-bold mb-4">2. 방문 기간</h2>
              <p className="text-abbey-700 leading-relaxed">
                일반 방문은 2박 3일 이상을 권장합니다. 짧은 방문으로는 공동체의 생활 리듬을
                충분히 경험하기 어렵습니다. 장기 체류를 원하시는 분은 사무부와 상의해 주세요.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-serif font-bold mb-4">3. 준비물</h2>
              <ul className="space-y-2 text-abbey-700">
                <li className="flex gap-3">
                  <span className="text-forest-600">✓</span>
                  <span>성경, 필기도구</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-forest-600">✓</span>
                  <span>편한 옷 (노동 참여를 위한 작업복)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-forest-600">✓</span>
                  <span>개인 세면도구</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-forest-600">✓</span>
                  <span>계절에 맞는 따뜻한 옷 (산간 지역)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-forest-600">✓</span>
                  <span>실내화</span>
                </li>
              </ul>
              <p className="text-sm text-abbey-500 mt-3">※ 침구는 제공됩니다.</p>
            </div>

            <div>
              <h2 className="text-xl font-serif font-bold mb-4">4. 방문자 일과</h2>
              <div className="bg-white rounded-lg border border-abbey-200 overflow-hidden">
                <table className="w-full text-sm">
                  <tbody className="divide-y divide-abbey-200">
                    {[
                      ["05:30", "기상"],
                      ["06:00", "조도 (아침 예배)"],
                      ["07:10", "아침 식사"],
                      ["08:00~12:00", "노동"],
                      ["12:00", "대도 (낮 예배)"],
                      ["12:40", "점심 식사"],
                      ["13:00~14:00", "소침묵 / 휴식"],
                      ["14:00~17:30", "노동 / 개인 시간"],
                      ["18:00", "저녁 식사"],
                      ["19:30", "만도 (저녁 예배)"],
                      ["21:00", "소침묵 시작"],
                      ["22:00", "대침묵 시작"],
                    ].map(([time, activity]) => (
                      <tr key={time}>
                        <td className="px-6 py-2 font-medium text-forest-700 whitespace-nowrap w-36">{time}</td>
                        <td className="px-6 py-2 text-abbey-700">{activity}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-serif font-bold mb-4">5. 비용</h2>
              <p className="text-abbey-700 leading-relaxed">
                예수원은 별도의 숙박비나 식비를 정해두지 않습니다.
                하나님의 공급하심을 신뢰하며 운영되고 있으므로,
                방문자 여러분의 자유 헌금으로 운영됩니다.
              </p>
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
