"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import Breadcrumbs from "@/components/Breadcrumbs"
import { filterLectures, getAllTopics, getAllMinistryDomains, getPersonById } from "@/lib/data"

const eras = [
  { value: "ERA1", label: "1기 (1965~1979)" },
  { value: "ERA2", label: "2기 (1980~2002)" },
  { value: "ERA3", label: "3기 (2003~현재)" },
]

export default function LecturesPage() {
  const [topic, setTopic] = useState("")
  const [era, setEra] = useState("")
  const [ministry, setMinistry] = useState("")
  const [query, setQuery] = useState("")

  const topics = useMemo(() => getAllTopics(), [])
  const ministryDomains = useMemo(() => getAllMinistryDomains(), [])

  const lectures = useMemo(
    () => filterLectures(topic || undefined, era || undefined, ministry || undefined, query || undefined),
    [topic, era, ministry, query]
  )

  return (
    <>
      <Breadcrumbs items={[
        { label: "홈", path: "/" },
        { label: "설립자와 유산", path: "/founders" },
        { label: "강의 아카이브" },
      ]} />
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-serif font-bold mb-6">강의 아카이브</h1>
          <p className="text-lg text-abbey-600 leading-relaxed max-w-3xl mb-10">
            대천덕 신부의 강의 기록을 주제별, 시대별, 사역별로 탐색합니다.
          </p>

          {/* Filters */}
          <div className="bg-abbey-50 rounded-lg p-6 border border-abbey-200 mb-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-abbey-700 mb-1">주제</label>
                <select value={topic} onChange={e => setTopic(e.target.value)}
                  className="w-full border border-abbey-300 rounded px-3 py-2 text-sm bg-white">
                  <option value="">전체</option>
                  {topics.map(t => (
                    <option key={t.topicId} value={t.topicId}>{t.topicNameKo}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-abbey-700 mb-1">시대</label>
                <select value={era} onChange={e => setEra(e.target.value)}
                  className="w-full border border-abbey-300 rounded px-3 py-2 text-sm bg-white">
                  <option value="">전체</option>
                  {eras.map(e => (
                    <option key={e.value} value={e.value}>{e.label}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-abbey-700 mb-1">사역</label>
                <select value={ministry} onChange={e => setMinistry(e.target.value)}
                  className="w-full border border-abbey-300 rounded px-3 py-2 text-sm bg-white">
                  <option value="">전체</option>
                  {ministryDomains.map(m => (
                    <option key={m.code} value={m.code}>{m.nameKo}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-abbey-700 mb-1">검색</label>
                <input type="text" value={query} onChange={e => setQuery(e.target.value)}
                  placeholder="제목 또는 내용 검색"
                  className="w-full border border-abbey-300 rounded px-3 py-2 text-sm" />
              </div>
            </div>
          </div>

          {/* Results */}
          <p className="text-sm text-abbey-500 mb-4">총 {lectures.length}건의 강의</p>
          <div className="space-y-4">
            {lectures.map(lec => {
              const speaker = getPersonById(lec.speakerId)
              return (
                <Link key={lec.objectId} href={`/founders/archive/lectures/${lec.objectId}`}
                  className="block bg-white rounded-lg p-6 border border-abbey-200 hover:border-forest-300 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <h2 className="font-serif font-bold text-lg">{lec.titleKo}</h2>
                      {lec.titleEn && <p className="text-sm text-abbey-500">{lec.titleEn}</p>}
                    </div>
                    <span className="text-xs bg-abbey-100 text-abbey-600 px-2 py-1 rounded whitespace-nowrap">
                      {eras.find(e => e.value === lec.era)?.label ?? lec.era}
                    </span>
                  </div>
                  {lec.summaryKo && (
                    <p className="text-sm text-abbey-600 mt-2 leading-relaxed">{lec.summaryKo}</p>
                  )}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {speaker && <span className="text-xs text-abbey-500">{speaker.nameKo}</span>}
                    {lec.theologicalTopics.map(t => (
                      <span key={t} className="text-xs bg-forest-50 text-forest-700 px-2 py-0.5 rounded">{t}</span>
                    ))}
                  </div>
                </Link>
              )
            })}
            {lectures.length === 0 && (
              <p className="text-center text-abbey-500 py-12">검색 조건에 맞는 강의가 없습니다.</p>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
