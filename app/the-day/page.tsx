import type { Metadata } from "next"
import TheDayTimeline from "@/components/day/TheDayTimeline"

export const metadata: Metadata = {
  title: "예수원의 하루",
  description: "기도로 시작하고 기도로 마치는 예수원의 하루. 새벽 기도에서 저녁 고요까지, 60년간 변하지 않은 리듬을 따라가 봅니다.",
}

export default function TheDayPage() {
  return (
    <>
      {/* Hero — 기도처 사진 */}
      <section className="relative pt-32 pb-20 text-white overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/hero-prayer.jpg"
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-abbey-900/70 via-abbey-900/50 to-abbey-900/80" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-sacred-gold/70 font-sans text-sm tracking-widest uppercase mb-4">
            The Day
          </p>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-6">
            예수원의 하루
          </h1>
          <p className="text-abbey-300 text-body font-serif leading-relaxed max-w-reading mx-auto">
            기도로 시작하고 기도로 마치는 하루.
            <br />
            이 리듬은 60년 전이나 오늘이나 같습니다.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <TheDayTimeline />
    </>
  )
}
