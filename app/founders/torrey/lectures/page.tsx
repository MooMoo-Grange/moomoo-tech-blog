import Link from "next/link"
import Breadcrumbs from "@/components/Breadcrumbs"
import { getAllLecturesFromNotion, extractYoutubeId } from "@/lib/notion"
import type { NotionLecture } from "@/lib/notion"

export const revalidate = 3600 // 1시간 ISR

export const metadata = {
  title: "대천덕 신부 강의 아카이브",
  description:
    "대천덕(아처 토레) 신부의 강의 영상 아카이브. 성령론, 하나님 나라, 공동체와 사명, 그리스도인의 삶, 가정과 사회, 목회와 치유, 신학과 문화 등 주제별로 정리된 강의를 만나보세요.",
}

// 주제별 메타정보 (표시 순서 및 영문명)
const topicMeta: Record<string, { labelEn: string; description: string }> = {
  "성령론": { labelEn: "Holy Spirit", description: "성령의 본질, 성령세례, 그리고 성령의 역사에 대한 강의" },
  "하나님 나라": { labelEn: "Kingdom of God", description: "하나님 나라의 의, 믿음, 그리고 부활의 소망에 대한 강의" },
  "공동체와 사명": { labelEn: "Community & Mission", description: "예수원 사명, 선교정신, 그리고 교회의 가치정신에 대한 강의" },
  "그리스도인의 삶": { labelEn: "Christian Life", description: "사랑, 용서, 새출발과 성장, 회개와 고백에 대한 강의" },
  "가정과 사회": { labelEn: "Family & Society", description: "남과여, 가족, 노동, 토지와 인권, 사회문제에 대한 강의" },
  "목회와 치유": { labelEn: "Pastoral Care & Healing", description: "상담문제, 속사람 치유, 영적전쟁에 대한 강의" },
  "신학과 문화": { labelEn: "Theology & Culture", description: "신학의 5차원, 동양문화의 뿌리와 기독교, 공동체와 말에 대한 강의" },
}

// 주제 표시 순서
const topicOrder = ["성령론", "하나님 나라", "공동체와 사명", "그리스도인의 삶", "가정과 사회", "목회와 치유", "신학과 문화"]

export default async function LectureArchivePage() {
  const lectures = await getAllLecturesFromNotion()

  // 주제별 그룹핑
  const byTopic = new Map<string, NotionLecture[]>()
  for (const lec of lectures) {
    const topic = lec.topic || "기타"
    if (!byTopic.has(topic)) byTopic.set(topic, [])
    byTopic.get(topic)!.push(lec)
  }

  // 정렬된 주제 목록 (정의된 순서 우선, 나머지는 뒤로)
  const sortedTopics = Array.from(byTopic.keys()).sort((a, b) => {
    const ia = topicOrder.indexOf(a)
    const ib = topicOrder.indexOf(b)
    return (ia === -1 ? 999 : ia) - (ib === -1 ? 999 : ib)
  })

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
            대천덕 신부가 예수원에서 가르친 강의를 주제별로 정리하였습니다.
            각 강의를 클릭하면 영상과 함께 상세 설명을 확인할 수 있습니다.
          </p>

          {lectures.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-abbey-500 text-lg">아직 게시된 강의가 없습니다.</p>
              <p className="text-abbey-400 text-sm mt-2">곧 강의가 올라올 예정입니다.</p>
            </div>
          ) : (
            <div className="space-y-10">
              {sortedTopics.map((topic) => {
                const topicLectures = byTopic.get(topic)!
                const meta = topicMeta[topic]
                return (
                  <article key={topic}>
                    <div className="mb-4">
                      <h2 className="text-xl font-serif font-bold">{topic}</h2>
                      {meta && <p className="text-xs text-abbey-400 mt-1">{meta.labelEn}</p>}
                      {meta && <p className="text-sm text-abbey-600 mt-2">{meta.description}</p>}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {topicLectures.map((lec) => (
                        <Link
                          key={lec.id}
                          href={`/founders/torrey/lectures/${lec.id}`}
                          className="group block bg-white rounded-lg p-4 shadow-sm border border-abbey-200 hover:border-forest-300 transition-colors"
                        >
                          <p className="text-xs text-forest-600 font-medium mb-1">
                            {lec.speaker}
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
          )}

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
