import Link from "next/link"
import Breadcrumbs from "@/components/Breadcrumbs"
import { lectureCategories, getLecturesByCategory } from "@/lib/data/torrey-lectures"

export const metadata = {
  title: "대천덕 신부 강의 아카이브",
  description:
    "대천덕(아처 토레) 신부의 강의 영상 아카이브. 성령론, 하나님 나라, 공동체와 사명, 그리스도인의 삶, 가정과 사회, 목회와 치유, 신학과 문화 등 주제별로 정리된 25편의 강의를 만나보세요.",
}

export default function LectureArchivePage() {
  return (
    <>
      <Breadcrumbs items={[
        { label: "홈", path: "/" },
        { label: "설립자", path: "/founders" },
        { label: "대천덕 신부", path: "/founders/torrey" },
        { label: "강의 아카이브" },
      ]} />
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-serif font-bold mb-3">강의 아카이브</h1>
          <p className="text-abbey-500 text-lg mb-2">대천덕 (Archer Torrey) 신부 강의 영상</p>
          <p className="text-abbey-600 text-sm leading-relaxed mb-10 max-w-2xl">
            대천덕 신부가 예수원에서 가르친 25편의 강의를 주제별로 정리하였습니다.
            각 강의를 클릭하면 영상과 함께 상세 설명을 확인할 수 있습니다.
          </p>

          <div className="space-y-10">
            {lectureCategories.map((cat) => {
              const lectures = getLecturesByCategory(cat.key)
              if (lectures.length === 0) return null
              return (
                <article key={cat.key}>
                  <div className="mb-4">
                    <h2 className="text-xl font-serif font-bold">{cat.label}</h2>
                    <p className="text-xs text-abbey-400 mt-1">{cat.labelEn}</p>
                    <p className="text-sm text-abbey-600 mt-2">{cat.description}</p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {lectures.map((lec) => (
                      <Link
                        key={lec.slug}
                        href={`/founders/torrey/lectures/${lec.slug}`}
                        className="group block bg-white rounded-lg p-4 shadow-sm border border-abbey-200 hover:border-forest-300 transition-colors"
                      >
                        <p className="text-xs text-forest-600 font-medium mb-1">
                          {'Lecture'} {lec.number}
                        </p>
                        <h3 className="font-medium text-sm text-abbey-800 group-hover:text-forest-700 transition-colors">
                          {lec.title}
                        </h3>
                      </Link>
                    ))}
                  </div>
                </article>
              )
            })}
          </div>

          {/* Featured: 온전한 복음 대천덕 */}
          <div className="mt-12 pt-10 border-t border-abbey-200">
            <h2 className="text-xl font-serif font-bold mb-4">특별 영상</h2>
            <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-abbey-200">
              <div className="aspect-video max-h-[400px]">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/7-BicUKxqvw"
                  title="온전한 복음 대천덕"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
              <div className="px-4 py-3">
                <p className="text-sm font-medium text-abbey-800">온전한 복음 대천덕</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
