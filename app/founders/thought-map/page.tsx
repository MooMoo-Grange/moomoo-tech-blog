import Link from "next/link"
import Breadcrumbs from "@/components/Breadcrumbs"
import { getAllTopics, getLecturesByTopic, getBooksByTopic } from "@/lib/data"

export const metadata = { title: "사상 지도" }

export default function ThoughtMapPage() {
  const topics = getAllTopics()

  return (
    <>
      <Breadcrumbs items={[{ label: "홈", path: "/" }, { label: "설립자와 유산", path: "/founders" }, { label: "사상 지도" }]} />
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-serif font-bold mb-6">사상 지도</h1>
          <p className="text-lg text-abbey-600 leading-relaxed max-w-3xl mb-12">
            대천덕 신부의 신학 사상과 예수원 공동체의 영적 유산을 주제별로 탐색합니다.
            각 주제를 클릭하면 관련 강의와 서적을 확인할 수 있습니다.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {topics.map(topic => {
              const lectureCount = getLecturesByTopic(topic.topicId).length
              const bookCount = getBooksByTopic(topic.topicId).length
              return (
                <div key={topic.topicId} className="bg-white rounded-lg p-6 shadow-sm border border-abbey-200">
                  <h2 className="text-xl font-serif font-bold mb-1">{topic.topicNameKo}</h2>
                  <p className="text-sm text-abbey-500 mb-3">{topic.topicNameEn}</p>
                  <p className="text-abbey-700 text-sm leading-relaxed mb-4">{topic.description}</p>
                  {topic.subTopics.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {topic.subTopics.map(sub => (
                        <span key={sub} className="text-xs bg-forest-50 text-forest-700 px-2 py-1 rounded">{sub}</span>
                      ))}
                    </div>
                  )}
                  <div className="flex gap-4 text-sm">
                    {lectureCount > 0 && (
                      <Link href={`/founders/archive/lectures?topic=${topic.topicId}`} className="text-forest-700 hover:text-forest-900 font-medium">
                        강의 {lectureCount}건 &rarr;
                      </Link>
                    )}
                    {bookCount > 0 && (
                      <Link href={`/founders/archive/books?topic=${topic.topicId}`} className="text-forest-700 hover:text-forest-900 font-medium">
                        서적 {bookCount}건 &rarr;
                      </Link>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
