"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import type { Lecture } from "@/lib/notion-lectures"

interface Props {
  lectures: Lecture[]
  topics: string[]
  eras: string[]
}

export default function LectureFilter({ lectures, topics, eras }: Props) {
  const [topic, setTopic] = useState("")
  const [era, setEra] = useState("")
  const [query, setQuery] = useState("")

  const filtered = useMemo(() => {
    return lectures
      .filter((l) => !topic || l.topic === topic)
      .filter((l) => !era || l.era === era)
      .filter((l) => {
        if (!query) return true
        const q = query.toLowerCase()
        return (
          l.title.toLowerCase().includes(q) ||
          l.summary.toLowerCase().includes(q) ||
          l.speaker.toLowerCase().includes(q)
        )
      })
  }, [lectures, topic, era, query])

  return (
    <>
      {/* Filters */}
      <div className="bg-abbey-50 rounded-lg p-6 border border-abbey-200 mb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-abbey-700 mb-1">주제</label>
            <select
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="w-full border border-abbey-300 rounded px-3 py-2 text-sm bg-white"
            >
              <option value="">전체</option>
              {topics.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-abbey-700 mb-1">시대</label>
            <select
              value={era}
              onChange={(e) => setEra(e.target.value)}
              className="w-full border border-abbey-300 rounded px-3 py-2 text-sm bg-white"
            >
              <option value="">전체</option>
              {eras.map((e) => (
                <option key={e} value={e}>{e}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-abbey-700 mb-1">검색</label>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="제목 또는 내용 검색"
              className="w-full border border-abbey-300 rounded px-3 py-2 text-sm"
            />
          </div>
        </div>
      </div>

      {/* Results */}
      <p className="text-sm text-abbey-500 mb-4">총 {filtered.length}건의 강의</p>
      <div className="space-y-4">
        {filtered.map((lec) => (
          <Link
            key={lec.id}
            href={`/founders/torrey/lectures/${lec.id}`}
            className="block bg-white rounded-lg p-6 border border-abbey-200 hover:border-forest-300 transition-colors"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div>
                <h2 className="font-serif font-bold text-lg">{lec.title}</h2>
                <p className="text-sm text-abbey-500">{lec.speaker}</p>
              </div>
              <div className="flex gap-2">
                {lec.era && (
                  <span className="text-xs bg-abbey-100 text-abbey-600 px-2 py-1 rounded whitespace-nowrap">
                    {lec.era}
                  </span>
                )}
                {lec.language && (
                  <span className="text-xs bg-forest-50 text-forest-600 px-2 py-1 rounded whitespace-nowrap">
                    {lec.language}
                  </span>
                )}
              </div>
            </div>
            {lec.summary && (
              <p className="text-sm text-abbey-600 mt-2 leading-relaxed">{lec.summary}</p>
            )}
            {lec.topic && (
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="text-xs bg-forest-50 text-forest-700 px-2 py-0.5 rounded">
                  {lec.topic}
                </span>
              </div>
            )}
          </Link>
        ))}
        {filtered.length === 0 && (
          <p className="text-center text-abbey-500 py-12">검색 조건에 맞는 강의가 없습니다.</p>
        )}
      </div>
    </>
  )
}
