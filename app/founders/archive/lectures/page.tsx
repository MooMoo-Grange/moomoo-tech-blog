import Link from "next/link"
import Breadcrumbs from "@/components/Breadcrumbs"
import { getAllLecturesFromNotion, getAllLecturesUnfiltered } from "@/lib/notion"
import LectureFilter from "@/components/lectures/LectureFilter"

export const revalidate = 3600

export const metadata = {
  title: "강의 아카이브",
  description: "대천덕 신부의 강의 기록을 주제별, 시대별로 탐색합니다.",
}

export default async function LecturesPage() {
  let lectures = await getAllLecturesFromNotion()
  if (lectures.length === 0) {
    lectures = await getAllLecturesUnfiltered()
  }

  // 주제 목록과 시대 목록 추출
  const topics = Array.from(new Set(lectures.map((l) => l.topic).filter(Boolean))).sort()
  const eras = Array.from(new Set(lectures.map((l) => l.era).filter(Boolean))).sort()

  return (
    <>
      <Breadcrumbs items={[
        { label: "홈", path: "/" },
        { label: "설립자와 유산", path: "/founders" },
        { label: "강의 아카이브" },
      ]} />
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-serif font-bold mb-6">강의 아카이브</h1>
          <p className="text-lg text-abbey-600 leading-relaxed max-w-3xl mb-10">
            대천덕 신부의 강의 기록을 주제별, 시대별로 탐색합니다.
          </p>

          <LectureFilter
            lectures={lectures}
            topics={topics}
            eras={eras}
          />
        </div>
      </section>
    </>
  )
}
