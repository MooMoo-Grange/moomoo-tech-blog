import type { Metadata } from "next"
import { getAllLectures, getLectureTopics, getLectureEras } from "@/lib/notion-lectures"
import LectureCard from "@/components/blog/LectureCard"
import Breadcrumbs from "@/components/Breadcrumbs"

export const revalidate = 10

export const metadata: Metadata = {
  title: "강의 아카이브 | 예수원",
  description: "대천덕 신부님과 예수원의 강의 아카이브. 성령론, 하나님 나라, 공동체와 사명에 관한 말씀들.",
}

export default async function LecturesPage() {
  const [lectures, topics, eras] = await Promise.all([
    getAllLectures(),
    getLectureTopics(),
    getLectureEras(),
  ])

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "홈", path: "/" },
          { label: "예수원 이야기", path: "/blog" },
          { label: "강의 아카이브" },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-abbey-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sacred-gold/80 font-sans text-xs tracking-widest uppercase mb-3">
            Audio Library
          </p>
          <h1 className="text-4xl font-serif font-bold text-abbey-900 mb-4">
            강의 아카이브
          </h1>
          <p className="text-lg text-abbey-600 leading-relaxed max-w-2xl">
            대천덕(Archer Torrey) 신부님과 예수원이 남긴 강의와 가르침의 기록.
            1965년부터 오늘까지 이어지는 말씀의 유산입니다.
          </p>
          <p className="mt-2 text-sm text-abbey-400 font-sans">
            총 {lectures.length}편
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {lectures.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-2">
              {lectures.map((lecture) => (
                <LectureCard key={lecture.id} lecture={lecture} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-abbey-500 text-lg">아직 게시된 강의가 없습니다.</p>
              <p className="text-abbey-400 text-sm mt-2">
                곧 아카이브가 공개될 예정입니다.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
