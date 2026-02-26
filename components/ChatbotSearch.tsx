"use client"
import { useState } from "react"

interface FaqResult { id: string; category: string; question: string; answer: string }

export default function ChatbotSearch() {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<FaqResult[]>([])
  const [fallback, setFallback] = useState("")
  const [show, setShow] = useState(false)
  const [loading, setLoading] = useState(false)

  async function doSearch() {
    if (!query.trim()) return
    setLoading(true); setShow(true); setFallback("")
    try {
      const res = await fetch(`/api/chatbot/faq?q=${encodeURIComponent(query)}`)
      const data = await res.json()
      setResults(data.results || [])
      if (!data.results?.length) setFallback(data.fallback || "관련 답변을 찾지 못했습니다. 전화(033-552-0633)로 문의해 주세요.")
    } catch { setResults([]); setFallback("검색 중 오류가 발생했습니다.") }
    setLoading(false)
  }

  return (
    <div className="bg-forest-50 rounded-lg p-6 border border-forest-200 mb-12">
      <h2 className="font-serif font-bold mb-3">질문하기</h2>
      <div className="flex gap-2">
        <input value={query} onChange={e => setQuery(e.target.value)} onKeyDown={e => e.key === "Enter" && doSearch()}
          type="text" placeholder="궁금한 점을 입력하세요 (예: 방문 준비물)"
          className="flex-1 border border-abbey-300 rounded px-4 py-2 text-sm focus:outline-none focus:border-forest-500" />
        <button onClick={doSearch} className="bg-forest-700 text-white px-4 py-2 rounded text-sm font-medium hover:bg-forest-800 transition-colors">검색</button>
      </div>
      {show && (
        <div className="mt-4">
          {loading && <p className="text-sm text-abbey-500">검색 중...</p>}
          {!loading && results.length > 0 && (
            <div className="space-y-3">
              {results.map(r => (
                <div key={r.id} className="bg-white rounded p-4 border border-abbey-200">
                  <p className="font-medium text-sm text-abbey-800 mb-1">{r.question}</p>
                  <p className="text-sm text-abbey-600">{r.answer}</p>
                </div>
              ))}
            </div>
          )}
          {!loading && fallback && <p className="text-sm text-abbey-600">{fallback}</p>}
        </div>
      )}
    </div>
  )
}
