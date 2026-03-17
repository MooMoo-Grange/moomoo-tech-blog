"use client"

import { useState, useEffect, useRef } from "react"
import { Globe } from "lucide-react"

const languages = [
  { code: "ko", label: "한국어" },
  { code: "en", label: "English" },
  { code: "zh-CN", label: "中文" },
  { code: "ja", label: "日本語" },
]

declare global {
  interface Window {
    googleTranslateElementInit?: () => void
    google?: {
      translate: {
        TranslateElement: new (
          options: { pageLanguage: string; includedLanguages: string; autoDisplay: boolean },
          id: string
        ) => void
      }
    }
  }
}

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false)
  const [current, setCurrent] = useState("ko")
  const [ready, setReady] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Initialize Google Translate once the script loads
    window.googleTranslateElementInit = () => {
      if (window.google?.translate) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "ko",
            includedLanguages: "ko,en,zh-CN,ja",
            autoDisplay: false,
          },
          "google_translate_element"
        )
        setReady(true)
      }
    }

    // Check if already loaded
    if (window.google?.translate) {
      window.googleTranslateElementInit()
    }
  }, [])

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  function selectLanguage(langCode: string) {
    setCurrent(langCode)
    setOpen(false)

    // Trigger Google Translate by manipulating the hidden select element
    const selectEl = document.querySelector<HTMLSelectElement>(
      ".goog-te-combo"
    )
    if (selectEl) {
      selectEl.value = langCode
      selectEl.dispatchEvent(new Event("change"))
    }
  }

  const currentLabel = languages.find((l) => l.code === current)?.label ?? "한국어"

  return (
    <div ref={ref} className="relative">
      {/* Hidden Google Translate container */}
      <div id="google_translate_element" className="hidden" />

      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-2.5 py-2 text-sm text-abbey-600 hover:text-forest-700 transition-colors rounded-md hover:bg-abbey-50 min-w-[44px] min-h-[44px] justify-center"
        aria-label="언어 선택"
        aria-expanded={open}
        aria-haspopup="listbox"
      >
        <Globe className="w-5 h-5" />
        <span className="hidden sm:inline text-xs font-medium">{currentLabel}</span>
      </button>

      {open && (
        <div
          className="absolute right-0 top-full mt-1 bg-white border border-abbey-200 rounded-lg shadow-lg min-w-[140px] z-50 overflow-hidden"
          role="listbox"
          aria-label="언어 목록"
        >
          {languages.map((lang) => (
            <button
              key={lang.code}
              role="option"
              aria-selected={current === lang.code}
              onClick={() => selectLanguage(lang.code)}
              className={`w-full text-left px-4 py-2.5 text-sm transition-colors min-h-[44px] ${
                current === lang.code
                  ? "bg-forest-50 text-forest-700 font-medium"
                  : "text-abbey-700 hover:bg-abbey-50 hover:text-forest-700"
              }`}
            >
              {lang.label}
            </button>
          ))}
          {!ready && (
            <div className="px-4 py-2 text-xs text-abbey-400 border-t border-abbey-100">
              번역 로딩 중...
            </div>
          )}
        </div>
      )}
    </div>
  )
}
