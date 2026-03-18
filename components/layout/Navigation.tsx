"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTimeTheme } from "./TimeThemeProvider"
import LanguageSwitcher from "@/components/LanguageSwitcher"

const navLinks = [
  { key: "the-day", label: "예수원의 하루", path: "/the-day" },
  { key: "story", label: "이야기", path: "/story" },
  { key: "daily-word", label: "오늘의 묵상", path: "/daily-word" },
  { key: "voice", label: "소리", path: "/founders/archive/lectures" },
  { key: "grange", label: "무무목장", path: "/identity/moomoo-grange" },
]

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const { isDark } = useTimeTheme()
  const isHome = pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // 홈에서는 투명 → 스크롤 시 불투명, 서브페이지에서는 항상 불투명
  const navBg = isHome && !scrolled && !mobileOpen
    ? "nav-transparent"
    : "nav-scrolled"

  const textColor = isHome && !scrolled && !mobileOpen
    ? "text-white"
    : "text-abbey-800"

  const logoColor = isHome && !scrolled && !mobileOpen
    ? "text-white"
    : "text-abbey-900"

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 shrink-0">
            {/* 십자가 SVG */}
            <svg
              viewBox="0 0 24 32"
              className={`w-5 h-7 ${logoColor} transition-colors`}
              fill="currentColor"
              aria-hidden="true"
            >
              <rect x="10" y="0" width="4" height="32" />
              <rect x="2" y="8" width="20" height="4" />
            </svg>
            <span className={`text-lg font-serif font-bold ${logoColor} transition-colors`}>
              예수원
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8" aria-label="주 메뉴">
            {navLinks.map((item) => (
              <Link
                key={item.key}
                href={item.path}
                className={`text-sm font-sans tracking-wide transition-colors ${
                  pathname.startsWith(item.path)
                    ? isHome && !scrolled
                      ? "text-white font-medium"
                      : "text-forest-700 font-medium"
                    : `${textColor} hover:text-forest-600`
                }`}
              >
                {item.label}
              </Link>
            ))}
            <LanguageSwitcher />
            <Link
              href="/join"
              className={`text-sm font-sans font-medium px-5 py-2 rounded-full transition-all ${
                isHome && !scrolled
                  ? "bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm"
                  : "bg-forest-700 text-white hover:bg-forest-800"
              }`}
            >
              함께하기
            </Link>
          </nav>

          {/* Mobile: Language + Toggle */}
          <div className="lg:hidden flex items-center gap-1">
            <LanguageSwitcher />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`p-2 ${textColor} transition-colors`}
              aria-label={mobileOpen ? "메뉴 닫기" : "메뉴 열기"}
            >
              {mobileOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8h16M4 16h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="lg:hidden bg-white border-t border-abbey-200" aria-label="모바일 메뉴">
          <div className="max-w-6xl mx-auto px-4 py-6 space-y-1">
            {navLinks.map((item) => (
              <Link
                key={item.key}
                href={item.path}
                onClick={() => setMobileOpen(false)}
                className="block py-3 text-abbey-800 font-serif text-lg hover:text-forest-700 transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <hr className="my-4" />
            <Link
              href="/join"
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-forest-700 font-serif text-lg font-medium"
            >
              함께하기 →
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
