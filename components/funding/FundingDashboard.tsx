"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"

interface Donor {
  name: string
  amount: number        // KRW 환산값 (프로그레스 바 계산용)
  displayAmount?: string // 화면 표시용 (예: "$17,000")
  label: string
}

interface Props {
  raised: number
  goal: number
  donors: Donor[]
}

function formatKRW(n: number) {
  if (n >= 100000000) return `${(n / 100000000).toFixed(0)}억원`
  if (n >= 10000000) return `${(n / 10000000).toFixed(0)}천만원`
  if (n >= 10000) return `${Math.round(n / 10000).toLocaleString()}만원`
  return `${n.toLocaleString()}원`
}

function useCountUp(target: number, duration = 1800, start = false) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!start) return
    let startTime: number | null = null
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(target * eased))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [target, duration, start])
  return value
}

export default function FundingDashboard({ raised, goal, donors }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [barWidth, setBarWidth] = useState(0)
  const pct = Math.min(100, Math.round((raised / goal) * 100))
  const animatedRaised = useCountUp(raised, 1800, visible)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          // slight delay before bar animates
          setTimeout(() => setBarWidth(pct), 100)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [pct])

  return (
    <div ref={ref} className="w-full">
      {/* Amount */}
      <div className="flex justify-between items-end mb-3">
        <div>
          <span className="text-4xl sm:text-5xl font-serif font-bold text-forest-700 tabular-nums">
            {formatKRW(animatedRaised)}
          </span>
          <span className="block text-xs text-abbey-400 mt-1">현재 모금액</span>
        </div>
        <div className="text-right">
          <span className="text-lg font-serif font-bold text-abbey-400">목표 {formatKRW(goal)}</span>
          <span className="block text-xs text-abbey-400 mt-1">{pct}% 달성</span>
        </div>
      </div>

      {/* Bar */}
      <div className="w-full h-4 bg-abbey-100 rounded-full overflow-hidden relative">
        <div
          className="h-full rounded-full relative overflow-hidden"
          style={{
            width: `${barWidth}%`,
            background: "linear-gradient(90deg, #3d6b47 0%, #5a9467 60%, #7ab882 100%)",
            transition: "width 1.6s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          {/* shimmer */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)",
              animation: visible ? "shimmer 2.2s ease 0.4s infinite" : "none",
            }}
          />
        </div>
      </div>

      {/* Donor chips */}
      <div className="flex flex-wrap gap-2 mt-4">
        {donors.map((d) => (
          <div
            key={d.name}
            className="flex items-center gap-2 bg-abbey-50 border border-abbey-100 rounded-full px-4 py-1.5"
          >
            <span className="w-2 h-2 rounded-full bg-forest-600 flex-shrink-0" />
            <span className="text-xs text-abbey-600 font-medium">{d.name}</span>
            <span className="text-xs text-forest-700 font-bold">
              {d.displayAmount ?? formatKRW(d.amount)}
            </span>
            <span className="text-xs text-abbey-400">{d.label}</span>
          </div>
        ))}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-abbey-100">
        <div className="text-center">
          <span className="block text-2xl font-serif font-bold text-abbey-900">5</span>
          <span className="text-xs text-abbey-400">현재 저지 소</span>
        </div>
        <div className="text-center">
          <span className="block text-2xl font-serif font-bold text-abbey-900">5</span>
          <span className="text-xs text-abbey-400">1차 목표 (두)</span>
        </div>
        <div className="text-center">
          <span className="block text-2xl font-serif font-bold text-abbey-900">20</span>
          <span className="text-xs text-abbey-400">4년 후 목표</span>
        </div>
      </div>

      {/* Tier cards */}
      <div className="mt-8 grid sm:grid-cols-3 gap-3 text-center text-sm">
        {[
          { amount: "600만원", label: "저지 소 1두 후원" },
          { amount: "60만원/월", label: "1개월 사료비 후원" },
          { amount: "100만원/년", label: "A2 목초 요거트 정기구독" },
        ].map((t) => (
          <Link
            key={t.label}
            href="/funding/jersey"
            className="bg-abbey-50 rounded-lg p-4 hover:bg-abbey-100 hover:shadow-sm transition-all block group"
          >
            <span className="block font-serif font-bold text-forest-700 group-hover:text-forest-800">
              {t.amount}
            </span>
            <span className="text-abbey-500 text-xs">{t.label}</span>
          </Link>
        ))}
      </div>

      <div className="mt-6 text-center">
        <Link
          href="/funding/jersey"
          className="inline-block bg-forest-700 text-white px-8 py-3 rounded-full font-sans text-sm font-medium hover:bg-forest-800 transition-colors"
        >
          후원 참여하기 →
        </Link>
      </div>

      <style>{`
        @keyframes shimmer {
          0%   { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
      `}</style>
    </div>
  )
}
