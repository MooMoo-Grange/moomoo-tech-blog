"use client"

import Link from "next/link"
import { useEffect, useRef } from "react"

const dayMoments = [
  { time: "05:00", label: "새벽", desc: "종소리가 어둠을 깨운다" },
  { time: "06:00", label: "조도", desc: "아침 기도가 시작된다" },
  { time: "08:00", label: "노동", desc: "손으로 기도하는 시간" },
  { time: "12:00", label: "대도", desc: "삽을 내려놓고 기도처로 간다" },
  { time: "14:00", label: "독서", desc: "읽고, 묵상하고, 침묵한다" },
  { time: "19:30", label: "만도", desc: "하루를 봉헌합니다" },
]

export default function DayPreview() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.15 }
    )

    const items = sectionRef.current?.querySelectorAll(".fade-in-section")
    items?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-section bg-abbey-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* 섹션 제목 */}
        <div className="text-center mb-16 fade-in-section">
          <p className="text-abbey-500 font-sans text-sm tracking-widest uppercase mb-4">
            The Day
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-abbey-900">
            예수원의 하루
          </h2>
          <p className="mt-4 text-abbey-600 text-body-sm max-w-reading mx-auto">
            기도로 시작하고 기도로 마치는 하루.
            <br />
            60년간 변하지 않은 리듬입니다.
          </p>
        </div>

        {/* 타임라인 */}
        <div className="relative">
          {/* 세로선 */}
          <div className="absolute left-8 sm:left-12 top-0 bottom-0 w-px bg-abbey-200" />

          <div className="space-y-12">
            {dayMoments.map((moment, i) => (
              <div
                key={moment.time}
                className="fade-in-section relative flex items-start gap-6 sm:gap-8"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* 시간 */}
                <div className="shrink-0 w-16 sm:w-24 text-right">
                  <span className="text-sm font-sans text-abbey-500">
                    {moment.time}
                  </span>
                </div>

                {/* 점 */}
                <div className="shrink-0 relative">
                  <div className="w-2.5 h-2.5 rounded-full bg-sacred-gold ring-4 ring-abbey-50" />
                </div>

                {/* 내용 */}
                <div className="pb-2">
                  <h3 className="font-serif text-lg font-bold text-abbey-800">
                    {moment.label}
                  </h3>
                  <p className="text-abbey-600 text-body-sm mt-1">
                    {moment.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 더 보기 */}
        <div className="text-center mt-16 fade-in-section">
          <Link
            href="/the-day"
            className="inline-block font-sans text-sm text-forest-700 hover:text-forest-900 transition-colors"
          >
            하루 전체 보기 →
          </Link>
        </div>
      </div>
    </section>
  )
}
