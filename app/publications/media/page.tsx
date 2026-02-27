import Link from "next/link"
import Breadcrumbs from "@/components/Breadcrumbs"

export const metadata = { title: "영상/음성 자료" }

export default function MediaPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "홈", path: "/" }, { label: "출판과 보급", path: "/publications" }, { label: "영상/음성 자료" }]} />
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-serif font-bold mb-6">영상/음성 자료</h1>
          <p className="text-lg text-abbey-600 leading-relaxed mb-10">
            대천덕 신부의 강의 녹음과 예수원 관련 영상 자료를 안내합니다.
          </p>

          <div className="space-y-12">
            {/* Broadcast & Documentary */}
            <div>
              <h2 className="text-xl font-serif font-bold mb-6">방송 및 다큐멘터리</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-abbey-200">
                  <div className="aspect-video">
                    <iframe className="w-full h-full" src="https://www.youtube.com/embed/QPjtzEm0y1w" title="[11시에만납시다] 산골짜기에서 온 편지의 대천덕 성공회신부 | 19890221 KBS방송" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
                  </div>
                  <div className="px-4 py-3">
                    <p className="text-sm font-medium text-abbey-800">[11시에만납시다] 산골짜기에서 온 편지의 대천덕 성공회신부</p>
                    <p className="text-xs text-abbey-500 mt-1">KBS방송 1989.02.21</p>
                  </div>
                </div>
                <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-abbey-200">
                  <div className="aspect-video">
                    <iframe className="w-full h-full" src="https://www.youtube.com/embed/AVPUKUFrwEM" title="차인태의 출발 새아침 (예수원 분수령목장)" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
                  </div>
                  <div className="px-4 py-3">
                    <p className="text-sm font-medium text-abbey-800">차인태의 출발 새아침 (예수원 분수령목장 / 예수원편)</p>
                    <p className="text-xs text-abbey-500 mt-1">1988.02.27</p>
                  </div>
                </div>
                <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-abbey-200">
                  <div className="aspect-video">
                    <iframe className="w-full h-full" src="https://www.youtube.com/embed/7-BicUKxqvw" title="온전한 복음 대천덕" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
                  </div>
                  <div className="px-4 py-3">
                    <p className="text-sm font-medium text-abbey-800">온전한 복음 대천덕</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Landscape Videos */}
            <div>
              <h2 className="text-xl font-serif font-bold mb-6">삼수령 풍경 영상</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-abbey-200">
                  <div className="aspect-video">
                    <iframe className="w-full h-full" src="https://www.youtube.com/embed/M4IKy3mzCN4" title="구름 위의 마을, 해발 1000미터에서의 삶의 풍경" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
                  </div>
                  <div className="px-4 py-3">
                    <p className="text-sm font-medium text-abbey-800">구름 위의 마을, 해발 1000미터에서의 삶의 풍경</p>
                  </div>
                </div>
                <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-abbey-200">
                  <div className="aspect-video">
                    <iframe className="w-full h-full" src="https://www.youtube.com/embed/iwKztF5XIYY" title="해발 1,305m 산 정상 겨울 캠핑" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
                  </div>
                  <div className="px-4 py-3">
                    <p className="text-sm font-medium text-abbey-800">{'-20\u00B0C '}폭설 겨울 왕국 해발 1,305m 산 정상 캠핑</p>
                  </div>
                </div>
                <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-abbey-200">
                  <div className="aspect-video">
                    <iframe className="w-full h-full" src="https://www.youtube.com/embed/ngrWE76rwKM" title="체감온도 -26도의 얼음산 캠핑" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
                  </div>
                  <div className="px-4 py-3">
                    <p className="text-sm font-medium text-abbey-800">{'체감온도 -26\u00B0 '}얼음산에서 보낸 마지막 캠핑영상</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Lecture Videos */}
            <div>
              <h2 className="text-xl font-serif font-bold mb-4">대천덕 신부 강의 영상</h2>
              <p className="text-abbey-600 text-sm mb-6">
                대천덕 신부의 전체 강의 영상은 설립자 페이지에서 확인하실 수 있습니다.
              </p>
              <Link href="/founders/torrey" className="inline-flex items-center gap-2 text-sm text-forest-700 hover:text-forest-900 font-medium">
                대천덕 신부 페이지에서 전체 강의 보기 &rarr;
              </Link>
            </div>

            {/* Other */}
            <div className="bg-white rounded-lg p-8 shadow-sm border border-abbey-200">
              <h2 className="text-xl font-serif font-bold mb-4">기타 자료</h2>
              <p className="text-abbey-700 leading-relaxed">
                기타 자료에 대한 문의는 예수원 사무부(033-552-0633)로 연락해 주시기 바랍니다.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
