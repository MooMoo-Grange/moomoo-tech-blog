"use client"

import Link from "next/link"
import { useEffect, useRef } from "react"

export default function StoryPreview() {
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
      { threshold: 0.2 }
    )

    const items = sectionRef.current?.querySelectorAll(".fade-in-section")
    items?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-section bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 fade-in-section">
          <p className="text-abbey-500 font-sans text-sm tracking-widest uppercase mb-4">
            The Story
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-abbey-900">
            60년의 이야기
          </h2>
        </div>

        {/* 서사 블록 */}
        <div className="prose-abbey space-y-12">
          <div className="fade-in-section">
            <p className="font-serif text-xl sm:text-2xl text-abbey-800 leading-relaxed">
              1965년, 한 사람이 산에 올랐습니다.
            </p>
          </div>

          <div className="fade-in-section" style={{ transitionDelay: "200ms" }}>
            <p className="font-serif text-body text-abbey-600 leading-relaxed">
              대천덕 신부는 성미가엘 신학대학원(지금의 성공회대학교) 원장직을 내려놓고 아무것도 없는 강원도 산골을 택했습니다.
              그곳에서 기도하고, 땅을 일구고, 함께 살았습니다.
            </p>
          </div>

          <div className="fade-in-section" style={{ transitionDelay: "400ms" }}>
            <p className="font-serif text-xl sm:text-2xl text-abbey-800 leading-relaxed">
              60년이 지난 오늘,
              <br />
              그 산에는 여전히 종소리가 울립니다.
            </p>
          </div>

          <div className="fade-in-section" style={{ transitionDelay: "600ms" }}>
            <p className="font-serif text-body text-abbey-600 leading-relaxed">
              덕항산 기슭에서 시작된 작은 공동체는
              기도와 노동의 리듬 안에서 60년을 이어왔습니다.
              변한 것도 있고, 변하지 않은 것도 있습니다.
              변하지 않은 것이 더 많습니다.
            </p>
          </div>
        </div>

        {/* 더 보기 */}
        <div className="text-center mt-16 fade-in-section">
          <Link
            href="/story"
            className="inline-block font-sans text-sm text-forest-700 hover:text-forest-900 transition-colors"
          >
            이야기 전체 보기 →
          </Link>
        </div>
      </div>
    </section>
  )
}
