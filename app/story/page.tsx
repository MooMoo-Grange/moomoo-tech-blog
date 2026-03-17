import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "예수원의 이야기 — 60년의 서사",
  description: "1965년, 한 사람이 산에 올랐습니다. 대천덕 신부가 덕항산 기슭에 세운 예수원의 60년 이야기.",
}

const chapters = [
  {
    num: 1,
    title: "부름",
    period: "1955–1965",
    narrative: `대천덕, R.A. Torrey III.의 손자.
편안한 신학교 원장직을 내려놓고
아무것도 없는 두메산골을 택한 이유.
"하나님이 부르시면 갈 뿐이다."`,
  },
  {
    num: 2,
    title: "광야",
    period: "1965–1970",
    narrative: `강원도 산골에서의 첫 겨울.
시애틀 교회가 보내준 젖소 두 마리.
아무것도 없는 곳에서 기도하고, 땅을 일구고, 함께 살았습니다.
The Watershed Grange의 시작.`,
  },
  {
    num: 3,
    title: "공동체",
    period: "1970–1990",
    narrative: `기도와 노동으로 세워진 공동체.
돌을 하나씩 날라 짓기 시작한 성당.
침묵과 나눔의 규칙이 만들어지고,
하루의 리듬이 자리 잡았습니다.`,
  },
  {
    num: 4,
    title: "유산",
    period: "1990–2013",
    narrative: `대천덕 신부의 마지막 강의들.
50년간 녹음된 테이프 수천 개.
현재인 사모의 기도 —
"다음 세대에게 전할 것은 지식이 아니라 리듬이다."`,
  },
  {
    num: 5,
    title: "계속되는 이야기",
    period: "2023–현재",
    narrative: `삼수령 무무목장의 새로운 시작.
A2 저지 젖소와 함께하는 오늘.
변하지 않는 것이 있고, 새로워지는 것이 있습니다.
변하지 않는 것이 더 많습니다.`,
  },
]

export default function StoryPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-abbey-900 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-sacred-gold/70 font-sans text-sm tracking-widest uppercase mb-4">
            The Story
          </p>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-8">
            예수원의 이야기
          </h1>
          <p className="font-serif text-xl text-abbey-300 leading-relaxed max-w-reading mx-auto">
            1965년, 한 사람이 산에 올랐습니다.
            <br />
            60년이 지난 오늘, 그 산에는 여전히 종소리가 울립니다.
          </p>
        </div>
      </section>

      {/* Chapters */}
      <section className="bg-white">
        {chapters.map((ch, i) => (
          <div
            key={ch.num}
            className={`py-20 sm:py-28 ${i % 2 === 1 ? "bg-abbey-50" : "bg-white"}`}
          >
            <div className="max-w-3xl mx-auto px-4 sm:px-6">
              <div className="flex items-start gap-6 sm:gap-10">
                {/* Chapter Number */}
                <div className="shrink-0">
                  <span className="text-6xl sm:text-7xl font-serif font-bold text-abbey-200">
                    {ch.num}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-4 pt-2">
                  <div>
                    <h2 className="font-serif text-2xl sm:text-3xl font-bold text-abbey-900">
                      {ch.title}
                    </h2>
                    <p className="text-sm font-sans text-abbey-500 mt-1">
                      {ch.period}
                    </p>
                  </div>
                  <div className="space-y-3 mt-4">
                    {ch.narrative.split("\n").map((line, j) => (
                      <p key={j} className="font-serif text-body text-abbey-600 leading-relaxed">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Blog Link */}
      <section className="py-20 bg-abbey-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h3 className="font-serif text-2xl font-bold text-abbey-900 mb-4">
            계속 쓰여지는 이야기
          </h3>
          <p className="text-abbey-600 text-body-sm mb-8 max-w-reading mx-auto">
            예수원의 이야기는 끝나지 않았습니다.
            공동체의 일상, 목장의 사계절, 그리고 이곳에서 만난 하나님의 이야기가
            블로그에서 계속됩니다.
          </p>
          <Link
            href="/blog"
            className="inline-block bg-forest-700 text-white px-8 py-3 rounded-full font-sans text-sm font-medium hover:bg-forest-800 transition-colors"
          >
            예수원 이야기 블로그 →
          </Link>
        </div>
      </section>

      {/* Founders Link */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h3 className="font-serif text-2xl font-bold text-abbey-900 mb-4">
            사람들
          </h3>
          <p className="text-abbey-600 text-body-sm mb-8 max-w-reading mx-auto">
            대천덕 신부와 현재인 사모, 그리고 이 공동체를 세우고 이어온 사람들의 이야기.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/founders/torrey"
              className="text-forest-700 font-sans text-sm hover:text-forest-900 transition-colors"
            >
              대천덕 신부 →
            </Link>
            <Link
              href="/founders/jane"
              className="text-forest-700 font-sans text-sm hover:text-forest-900 transition-colors"
            >
              현재인 사모 →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
