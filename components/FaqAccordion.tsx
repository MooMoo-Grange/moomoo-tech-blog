"use client"
import { useState } from "react"
import type { FAQ } from "@/lib/types"

export default function FaqAccordion({ faqs, title }: { faqs: FAQ[]; title?: string }) {
  const [openId, setOpenId] = useState<string | null>(null)
  if (faqs.length === 0) return null
  return (
    <div>
      {title && <h2 className="text-xl font-serif font-bold mb-4 text-forest-700">{title}</h2>}
      <div className="space-y-3">
        {faqs.map(faq => (
          <div key={faq.faqId} className="border border-abbey-200 rounded-lg">
            <button
              onClick={() => setOpenId(openId === faq.faqId ? null : faq.faqId)}
              className="w-full text-left px-6 py-4 flex items-center justify-between"
              aria-expanded={openId === faq.faqId}
            >
              <span className="font-medium text-abbey-800 text-sm">{faq.questionKo}</span>
              <svg className={`w-5 h-5 text-abbey-400 shrink-0 ml-2 transition-transform ${openId === faq.faqId ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openId === faq.faqId && (
              <div className="px-6 pb-4">
                <p className="text-abbey-600 text-sm leading-relaxed">{faq.answerKo}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
