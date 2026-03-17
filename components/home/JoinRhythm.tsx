"use client"

import Link from "next/link"
import { useEffect, useRef } from "react"

const paths = [
  {
    key: "visit",
    title: "방문하기",
    desc: "예수원의 하루를 직접 살아보세요. 기도와 노동, 침묵의 리듬에 함께하는 시간입니다.",
    href: "/join",
    linkText: "방문 안내 →",
  },
  {
    key: "pray",
    title: "기도로 함께하기",
    desc: "예수원에 오지 않아도 함께 기도할 수 있습니다. 기도 요청을 보내거나 후원으로 동참해 주세요.",
    href: "/news/prayer",
    linkText: "기도 요청 →",
  },
  {
    key: "stay",
    title: "더 깊이 머물기",
    desc: "더 오래, 더 깊이 공동체의 삶에 참여하고 싶다면 수련 과정을 살펴보세요.",
    href: "/formation/applicant",
    linkText: "수련 안내 →",
  },
]

export default function JoinRhythm() {
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
    <section ref={sectionRef} className="py-section bg-abbey-900 text-abbey-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 fade-in-section">
          <p className="text-sacred-gold/70 font-sans text-sm tracking-widest uppercase mb-4">
            Join the Rhythm
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
            이 리듬에 함께하기
          </h2>
          <p className="mt-4 text-abbey-400 text-body-sm max-w-reading mx-auto">
            예수원의 리듬에 참여하는 방법은 여러 가지입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {paths.map((path, i) => (
            <div
              key={path.key}
              className="fade-in-section"
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <h3 className="font-serif text-xl font-bold text-white mb-3">
                {path.title}
              </h3>
              <p className="text-abbey-400 text-body-sm leading-relaxed mb-4">
                {path.desc}
              </p>
              <Link
                href={path.href}
                className="text-sacred-gold hover:text-sacred-candle text-sm font-sans transition-colors"
              >
                {path.linkText}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
