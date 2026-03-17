import Link from "next/link"
import Breadcrumbs from "@/components/Breadcrumbs"

export const metadata = { title: "예수원은 어떤 곳인가" }

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "홈", path: "/" }, { label: "방문 안내", path: "/visit" }, { label: "예수원은 어떤 곳인가" }]} />
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-serif font-bold mb-6">예수원은 어떤 곳인가</h1>
          <p className="text-lg text-abbey-600 leading-relaxed mb-10">
            예수원에 처음 오시는 분들이 궁금해하시는 것들을 모았습니다.
          </p>

          <div className="space-y-8 text-abbey-700 leading-relaxed">
            <div>
              <h2 className="text-xl font-serif font-bold mb-4">수도 공동체입니다</h2>
              <p className="mb-4">
                예수원은 관광지나 수련원이 아닌, 기도와 노동과 공동체 생활을 중심으로 하는 수도 공동체입니다.
                1965년 무디 바이블스쿨 초대 원장 R.A. Torrey I 의 손자 R.A. Torrey III(대천덕) 신부에 의해 강원도 태백산 삼수령에 설립되었습니다.
              </p>
              <p>
                성공회 전통의 수도원적 삶을 살아가면서도, 교파를 초월하여 모든 그리스도인에게
                열린 공동체입니다.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-serif font-bold mb-4">세 가지 실험</h2>
              <p className="mb-4">
                예수원은 세 가지 &lsquo;실험&rsquo;을 중심으로 세워졌습니다:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-forest-50 rounded-lg p-4 border border-forest-200">
                  <h3 className="font-bold text-forest-800 mb-1">기도 생활</h3>
                  <p className="text-sm">하루 네 번의 기도와 예배</p>
                </div>
                <div className="bg-forest-50 rounded-lg p-4 border border-forest-200">
                  <h3 className="font-bold text-forest-800 mb-1">공동체 생활</h3>
                  <p className="text-sm">함께 먹고 기도하고 일하는 삶</p>
                </div>
                <div className="bg-forest-50 rounded-lg p-4 border border-forest-200">
                  <h3 className="font-bold text-forest-800 mb-1">노동 생활</h3>
                  <p className="text-sm">손으로 하는 일을 통한 기도</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-serif font-bold mb-4">방문자로서</h2>
              <p className="mb-4">
                예수원에 오시는 방문자는 공동체의 생활 리듬에 함께 참여하게 됩니다.
                예배, 식사, 노동 등 공동체의 일과를 함께하며 수도원적 삶을 체험합니다.
              </p>
              <p>
                조용히 기도하고 싶은 분, 영적 쉼이 필요한 분, 공동체 생활을 경험하고 싶은 분들을
                환영합니다. 단, 방문 전 반드시 사무부에 연락하셔야 합니다.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-serif font-bold mb-4">알아두실 것</h2>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2"><span className="text-forest-600 font-bold">•</span> 예수원은 관광지가 아닙니다. 공동체 생활에 참여할 준비가 되어야 합니다.</li>
                <li className="flex gap-2"><span className="text-forest-600 font-bold">•</span> 모든 예배에 참석하고, 노동 시간에 함께 일합니다.</li>
                <li className="flex gap-2"><span className="text-forest-600 font-bold">•</span> 침묵 시간이 있습니다 (소침묵, 대침묵).</li>
                <li className="flex gap-2"><span className="text-forest-600 font-bold">•</span> 공동 식사에 참여하며, 금식은 할 수 없습니다.</li>
                <li className="flex gap-2"><span className="text-forest-600 font-bold">•</span> 핸드폰 사용이 제한될 수 있습니다.</li>
              </ul>
            </div>
          </div>

          <div className="mt-10 flex gap-4">
            <Link href="/visit/how" className="inline-block bg-forest-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-forest-800 transition-colors text-sm">
              방문 안내 보기
            </Link>
            <Link href="/visit/faq" className="inline-block border border-forest-700 text-forest-700 px-6 py-3 rounded-lg font-medium hover:bg-forest-50 transition-colors text-sm">
              자주 묻는 질문
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
