"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { Globe } from "lucide-react"

/* ──────────────────────────────────────────
   Languages
   ────────────────────────────────────────── */
const LANGUAGES = [
  { code: "ko", label: "한국어", short: "KO", flag: "🇰🇷" },
  { code: "en", label: "English", short: "EN", flag: "🇺🇸" },
  { code: "ja", label: "日本語", short: "JA", flag: "🇯🇵" },
  { code: "zh-CN", label: "中文", short: "ZH", flag: "🇨🇳" },
  { code: "es", label: "Español", short: "ES", flag: "🇪🇸" },
]

/* ──────────────────────────────────────────
   Term fixes per language
   Google Translate often renders proper nouns
   incorrectly. We correct these after translation
   in real-time using MutationObserver.

   고유명사 교정 목록:
   - "예수원"  → "Jesus Abbey"
   - "무무목장" → "MooMoo Grange"
   ────────────────────────────────────────── */
const TERM_FIXES: Record<string, Array<[RegExp, string]>> = {
  en: [
    // 예수원 corrections
    [/\bYesuwon\b/gi, "Jesus Abbey"],
    [/\bJesuwon\b/gi, "Jesus Abbey"],
    [/\bJesus-?won\b/gi, "Jesus Abbey"],
    [/\bYesu ?won\b/gi, "Jesus Abbey"],
    [/\bJe ?su ?won\b/gi, "Jesus Abbey"],
    [/\bYe ?suwon\b/gi, "Jesus Abbey"],
    [/\bJesus Garden\b/gi, "Jesus Abbey"],
    // 무무목장 corrections (Google may render as "MooMoo Ranch", "MooMoo Farm", "Mumu Ranch", etc.)
    [/\bMu ?[Mm]u Ranch\b/gi, "MooMoo Grange"],
    [/\bMu ?[Mm]u Farm\b/gi, "MooMoo Grange"],
    [/\bMoo ?[Mm]oo Ranch\b/gi, "MooMoo Grange"],
    [/\bMoo ?[Mm]oo Farm\b/gi, "MooMoo Grange"],
    [/\bMooMoo Pasture\b/gi, "MooMoo Grange"],
    [/\bMumu (Ranch|Farm|Pasture|Grange)\b/gi, "MooMoo Grange"],
    // 대천덕 corrections
    [/\bDaecheon ?dok\b/gi, "Archer Torrey (Daecheondŏk)"],
    [/\bDae ?cheon ?deok\b/gi, "Archer Torrey (Daecheondŏk)"],
  ],
  ja: [
    // 예수원 corrections
    [/イェスウォン/g, "ジーザス・アビー"],
    [/イエスウォン/g, "ジーザス・アビー"],
    [/イエス・ウォン/g, "ジーザス・アビー"],
    [/イエス園/g, "ジーザス・アビー"],
    [/ジーザスガーデン/g, "ジーザス・アビー"],
    [/イエス修道院/g, "ジーザス・アビー"],
    // 무무목장 corrections (Google may render as "ムームー牧場" or "ムムー牧場")
    [/ム[ーー]?ム[ーー]?牧場/g, "ムームー・グランジ"],
    [/モーモー牧場/g, "ムームー・グランジ"],
  ],
  "zh-CN": [
    // 예수원 corrections
    [/耶斯恩/g, "耶稣修道院"],
    [/叶苏旺/g, "耶稣修道院"],
    [/耶苏园/g, "耶稣修道院"],
    [/耶稣园/g, "耶稣修道院"],
    [/耶?苏旺/g, "耶稣修道院"],
    [/耶稣?旺/g, "耶稣修道院"],
    // 무무목장 corrections (Google may render as "哞哞牧场" or "牟牟牧场")
    [/哞哞牧场/g, "MooMoo农庄"],
    [/牟牟牧场/g, "MooMoo农庄"],
    [/母母牧场/g, "MooMoo农庄"],
    [/慕慕牧场/g, "MooMoo农庄"],
  ],
  es: [
    // 예수원 corrections
    [/\bYesuwon\b/gi, "Jesus Abbey"],
    [/\bJesuwon\b/gi, "Jesus Abbey"],
    [/\bJardín de Jesús\b/gi, "Jesus Abbey"],
    [/\bJesus-?won\b/gi, "Jesus Abbey"],
    // 무무목장 corrections
    [/\bRancho? Mumu\b/gi, "MooMoo Grange"],
    [/\bRancho? MooMoo\b/gi, "MooMoo Grange"],
    [/\bGranja Mumu\b/gi, "MooMoo Grange"],
    [/\bGranja MooMoo\b/gi, "MooMoo Grange"],
    [/\bMumu (Rancho?|Granja)\b/gi, "MooMoo Grange"],
  ],
}

/* ──────────────────────────────────────────
   Fix text nodes recursively
   ────────────────────────────────────────── */
function fixTextNode(node: Text, lang: string) {
  const fixes = TERM_FIXES[lang]
  if (!fixes) return
  let text = node.textContent ?? ""
  let changed = false
  for (const [pattern, replacement] of fixes) {
    const next = text.replace(pattern, replacement)
    if (next !== text) { text = next; changed = true }
  }
  if (changed) node.textContent = text
}

function walkAndFix(root: Node, lang: string) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT)
  let node: Text | null
  while ((node = walker.nextNode() as Text | null)) {
    fixTextNode(node, lang)
  }
}

/* ──────────────────────────────────────────
   Google Translate type declarations
   ────────────────────────────────────────── */
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

/* ──────────────────────────────────────────
   Component
   ────────────────────────────────────────── */
export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false)
  const [current, setCurrent] = useState("ko")
  const [ready, setReady] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const observerRef = useRef<MutationObserver | null>(null)

  /* Start MutationObserver to fix terms after translation */
  const startObserver = useCallback((lang: string) => {
    observerRef.current?.disconnect()
    if (lang === "ko") return
    observerRef.current = new MutationObserver((mutations) => {
      for (const m of mutations) {
        if (m.type === "characterData" && m.target.nodeType === Node.TEXT_NODE) {
          fixTextNode(m.target as Text, lang)
        } else if (m.type === "childList") {
          m.addedNodes.forEach((node) => walkAndFix(node, lang))
        }
      }
    })
    observerRef.current.observe(document.body, {
      subtree: true,
      childList: true,
      characterData: true,
    })
    // Fix existing content immediately
    walkAndFix(document.body, lang)
  }, [])

  /* Initialize Google Translate */
  useEffect(() => {
    window.googleTranslateElementInit = () => {
      if (window.google?.translate) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "ko",
            includedLanguages: "ko,en,ja,zh-CN,es",
            autoDisplay: false,
          },
          "google_translate_element"
        )
        setReady(true)
      }
    }
    if (window.google?.translate) {
      window.googleTranslateElementInit()
    }
    return () => { observerRef.current?.disconnect() }
  }, [])

  /* Close dropdown on outside click */
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  /* Switch language */
  function selectLanguage(langCode: string) {
    setCurrent(langCode)
    setOpen(false)

    if (langCode === "ko") {
      // Restore Korean: reload without translation cookie
      observerRef.current?.disconnect()
      const cookiesToClear = ["googtrans"]
      cookiesToClear.forEach((c) => {
        document.cookie = `${c}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`
        document.cookie = `${c}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=.${location.hostname}`
      })
      window.location.reload()
      return
    }

    // Trigger Google Translate combo select
    const selectEl = document.querySelector<HTMLSelectElement>(".goog-te-combo")
    if (selectEl) {
      selectEl.value = langCode
      selectEl.dispatchEvent(new Event("change"))
      // Start observer after a short delay (translation takes a moment)
      setTimeout(() => startObserver(langCode), 800)
      setTimeout(() => startObserver(langCode), 2500)
    } else {
      // Fallback: set cookie and reload
      document.cookie = `googtrans=/ko/${langCode}; path=/`
      document.cookie = `googtrans=/ko/${langCode}; path=/; domain=.${location.hostname}`
      window.location.reload()
    }
  }

  const cur = LANGUAGES.find((l) => l.code === current) ?? LANGUAGES[0]

  return (
    <div ref={ref} className="relative">
      {/* Hidden Google Translate mount point */}
      <div id="google_translate_element" className="hidden" aria-hidden="true" />

      {/* Trigger button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-2.5 py-2 text-sm text-abbey-600 hover:text-forest-700 transition-colors rounded-md hover:bg-abbey-50 min-w-[44px] min-h-[44px] justify-center"
        aria-label="언어 선택 / Language"
        aria-expanded={open}
        aria-haspopup="listbox"
        title="언어 선택"
      >
        <Globe className="w-4 h-4 flex-shrink-0" />
        <span className="text-xs font-medium tracking-wide">{cur.short}</span>
      </button>

      {/* Dropdown */}
      {open && (
        <div
          className="absolute right-0 top-full mt-1.5 bg-white border border-abbey-200 rounded-xl shadow-lg overflow-hidden z-[9999] min-w-[160px]"
          role="listbox"
          aria-label="언어 선택"
        >
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              role="option"
              aria-selected={current === lang.code}
              onClick={() => selectLanguage(lang.code)}
              className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors min-h-[44px] ${
                current === lang.code
                  ? "bg-forest-50 text-forest-700 font-medium"
                  : "text-abbey-700 hover:bg-abbey-50"
              }`}
            >
              <span className="text-base leading-none">{lang.flag}</span>
              <span>{lang.label}</span>
              {current === lang.code && (
                <span className="ml-auto text-forest-600 text-xs">✓</span>
              )}
            </button>
          ))}
          {!ready && (
            <div className="px-4 py-2 text-xs text-abbey-400 border-t border-abbey-100 text-center">
              로딩 중…
            </div>
          )}
        </div>
      )}
    </div>
  )
}
