"use client"

import { useTimeTheme } from "@/components/layout/TimeThemeProvider"

const VIDEO_ID = "29oITQ2z7SQ"
const POSTER_URL = `https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`

export default function TimeHero() {
  const { theme } = useTimeTheme()

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden theme-transition">
      {/* 배경 이미지 — YouTube 포스터 */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-forest-900 via-forest-800 to-abbey-900" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={POSTER_URL}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          loading="eager"
        />
      </div>

      {/* 시간대별 오버레이 */}
      <div className={`absolute inset-0 bg-gradient-to-b ${theme.overlayClass}`} />

      {/* 콘텐츠 */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-3xl mx-auto">
        {/* 십자가 아이콘 */}
        <div className="mb-8 opacity-60">
          <svg
            viewBox="0 0 24 32"
            className="w-6 h-8 mx-auto text-sacred-gold"
            fill="currentColor"
          >
            <rect x="10" y="0" width="4" height="32" />
            <rect x="2" y="8" width="20" height="4" />
          </svg>
        </div>

        {/* 시간대 메시지 */}
        <p className="text-sacred-candle/80 font-sans text-sm tracking-widest uppercase mb-6">
          지금 예수원에서는
        </p>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight mb-6">
          {theme.heroMessage}
        </h1>

        {/* 성경 구절 */}
        <div className="mt-8 space-y-2">
          <p className="font-serif italic text-white/70 text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
            &ldquo;{theme.verse}&rdquo;
          </p>
          <p className="text-sacred-gold/70 text-sm font-sans">
            {theme.verseRef}
          </p>
        </div>

        {/* 스크롤 힌트 */}
        <div className="mt-16 animate-bounce">
          <svg
            className="w-5 h-5 mx-auto text-white/40"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7" />
          </svg>
        </div>
      </div>
    </section>
  )
}
