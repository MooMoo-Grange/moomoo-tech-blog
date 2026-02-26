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

          <div className="space-y-8">
            <div className="bg-white rounded-lg p-8 shadow-sm border border-abbey-200">
              <h2 className="text-xl font-serif font-bold mb-4">🎙️ 강의 녹음</h2>
              <p className="text-abbey-700 leading-relaxed mb-4">
                대천덕 신부의 강의 녹음 자료가 보존되어 있습니다.
                성령론, 공동체론, 치유, 기도 등 다양한 주제의 강의를
                강의 아카이브에서 확인하실 수 있습니다.
              </p>
              <Link href="/founders/archive/lectures" className="text-sm text-forest-700 hover:text-forest-900 font-medium">
                강의 아카이브 바로가기 &rarr;
              </Link>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm border border-abbey-200">
              <h2 className="text-xl font-serif font-bold mb-4">📹 영상 자료</h2>
              <p className="text-abbey-700 leading-relaxed mb-4">
                예수원의 생활, 예배, 세미나 등을 담은 영상 자료를 준비 중입니다.
                추후 업데이트될 예정이니 관심을 가져주세요.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm border border-abbey-200">
              <h2 className="text-xl font-serif font-bold mb-4">📻 기타 자료</h2>
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
