"use client"

import { useEffect, useRef } from "react"

interface TimeBlock {
  time: string
  title: string
  titleEn: string
  narrative: string
  bgClass: string
  textClass: string
}

const timeline: TimeBlock[] = [
  {
    time: "05:00",
    title: "새벽",
    titleEn: "Before Dawn",
    narrative:
      "종소리가 어둠을 깨운다.\n기도처로 향하는 발소리만이\n고요를 채운다.",
    bgClass: "bg-[#1a1a3e]",
    textClass: "text-sacred-candle",
  },
  {
    time: "06:00",
    title: "조도 — 아침 기도",
    titleEn: "Lauds — Morning Prayer",
    narrative:
      "아직 어두운 기도처에 촛불이 하나 켜진다.\n시편을 읽고, 찬송을 부르고, 침묵 속에 기도한다.\n하루가 하나님의 이름 안에서 시작된다.",
    bgClass: "bg-sacred-navy",
    textClass: "text-sacred-candle",
  },
  {
    time: "07:00",
    title: "아침 식사",
    titleEn: "Breakfast",
    narrative:
      "감사 기도 후 첫 숟가락.\n말이 없어도 함께라는 것을 안다.",
    bgClass: "bg-abbey-50",
    textClass: "text-abbey-800",
  },
  {
    time: "08:00",
    title: "노동",
    titleEn: "Labor — Ora et Labora",
    narrative:
      "밭을 일구고, 건초를 나르고, 나무를 자른다.\n얼어붙은 물통을 깨고 젖소에게 물을 준다.\n흙 묻은 손이 기도하는 손과 같은 손이다.",
    bgClass: "bg-forest-50",
    textClass: "text-abbey-800",
  },
  {
    time: "12:00",
    title: "대도 — 정오 기도",
    titleEn: "Sext — Midday Prayer",
    narrative:
      "삽을 내려놓고 기도처로 간다.\n흙 묻은 손으로 성경을 펼친다.\n잠시 멈추고, 하나님 앞에 선다.",
    bgClass: "bg-white",
    textClass: "text-abbey-800",
  },
  {
    time: "12:40",
    title: "점심 식사",
    titleEn: "Lunch",
    narrative:
      "함께 앉은 식탁.\n광야의 식탁 위에 차려진 은혜.",
    bgClass: "bg-abbey-50",
    textClass: "text-abbey-800",
  },
  {
    time: "14:00",
    title: "독서와 침묵",
    titleEn: "Lectio Divina",
    narrative:
      "읽는다. 반복한다. 묵상한다. 기도한다.\n네 단계가 하나의 호흡이 될 때까지.\n거룩한 독서는 기술이 아니라 만남이다.",
    bgClass: "bg-abbey-100",
    textClass: "text-abbey-800",
  },
  {
    time: "17:00",
    title: "자유 시간",
    titleEn: "Free Time",
    narrative:
      "덕항산 숲길을 걷는다.\n아무 말 하지 않아도 되는 시간.\n바람과 새소리가 충분하다.",
    bgClass: "bg-forest-50",
    textClass: "text-abbey-800",
  },
  {
    time: "18:00",
    title: "저녁 식사",
    titleEn: "Dinner",
    narrative:
      "하루의 노동을 마치고 식탁에 모인다.\n감사의 기도. 함께 나누는 빵.",
    bgClass: "bg-[#2a1f14]",
    textClass: "text-abbey-100",
  },
  {
    time: "19:30",
    title: "만도 — 저녁 기도",
    titleEn: "Compline — Evening Prayer",
    narrative:
      "하루를 봉헌합니다.\n내일은 또 종소리로 시작될 것입니다.\n나의 기도가 주의 앞에 분향함과 같이 되게 하소서.",
    bgClass: "bg-[#1a1008]",
    textClass: "text-sacred-candle",
  },
  {
    time: "22:00",
    title: "고요",
    titleEn: "The Great Silence",
    narrative:
      "침묵 속에 하나님이 계십니다.\n가만히 있어 내가 하나님 됨을 알지어다.",
    bgClass: "bg-[#0d0d1a]",
    textClass: "text-[#a0a0b0]",
  },
]

export default function TheDayTimeline() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.2 }
    )

    const items = containerRef.current?.querySelectorAll(".fade-in-section")
    items?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={containerRef}>
      {timeline.map((block, i) => (
        <section
          key={block.time}
          className={`${block.bgClass} ${block.textClass} theme-transition`}
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
            <div className="fade-in-section flex flex-col sm:flex-row gap-6 sm:gap-12 items-start">
              {/* 시간 */}
              <div className="shrink-0 sm:w-24 sm:text-right">
                <span className="text-sm font-sans opacity-60 tracking-wide">
                  {block.time}
                </span>
              </div>

              {/* 내용 */}
              <div className="space-y-4">
                <h2 className="font-serif text-2xl sm:text-3xl font-bold">
                  {block.title}
                </h2>
                <p className="text-xs font-sans opacity-40 tracking-widest uppercase">
                  {block.titleEn}
                </p>
                <div className="mt-6 space-y-4">
                  {block.narrative.split("\n").map((line, j) => (
                    <p key={j} className="font-serif text-body leading-relaxed opacity-80">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  )
}
