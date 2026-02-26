import Breadcrumbs from "@/components/Breadcrumbs"
import { getAllBooks } from "@/lib/data"

export const metadata = { title: "찬양집" }

export default function HymnalsPage() {
  const hymnalBooks = getAllBooks().filter(b =>
    b.titleKo.includes("찬양") || b.ministryDomains.includes("WOR")
  )

  return (
    <>
      <Breadcrumbs items={[{ label: "홈", path: "/" }, { label: "출판과 보급", path: "/publications" }, { label: "찬양집" }]} />
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-serif font-bold mb-6">찬양집</h1>
          <p className="text-lg text-abbey-600 leading-relaxed mb-10">
            예수원 공동체 예배에서 사용하는 찬양곡 모음집과 관련 자료를 소개합니다.
          </p>

          <div className="bg-white rounded-lg p-8 shadow-sm border border-abbey-200 mb-8">
            <h2 className="text-xl font-serif font-bold mb-4">예수원 찬양집</h2>
            <p className="text-abbey-700 leading-relaxed mb-4">
              예수원 공동체가 예배와 기도 시간에 함께 부르는 찬양곡들을 모은 찬양집입니다.
              한국어와 영어 찬양이 함께 수록되어 있으며, 예수원의 예배 전통을 담고 있습니다.
            </p>
            <p className="text-sm text-abbey-600">
              구매를 원하시는 분은 예수원 사무부(033-552-0633)로 연락해 주세요.
            </p>
          </div>

          <h2 className="text-xl font-serif font-bold mb-4">예배와 찬양 전통</h2>
          <div className="space-y-6 text-abbey-700 leading-relaxed">
            <p>
              예수원의 찬양은 성공회 전통의 전례적 찬양과 자유로운 찬양이 조화를 이룹니다.
              시편 송가, 전통 성가, 코러스 등 다양한 형태의 찬양이 예배에서 사용됩니다.
            </p>
            <p>
              공동체는 한국어와 영어로 함께 찬양하며, 이를 통해 동서양이
              그리스도 안에서 하나 되는 예수원의 정신을 표현합니다.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
