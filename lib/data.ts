import type { Person, Lecture, Book, FAQ, WorshipService, Program, TheologicalTopic, MinistryDomain, NavigationItem } from "./types"

import personsData from "./data/persons.json"
import lecturesData from "./data/lectures.json"
import booksData from "./data/books.json"
import faqsData from "./data/faqs.json"
import worshipData from "./data/worship-services.json"
import programsData from "./data/programs.json"
import topicsData from "./data/theological-topics.json"
import ministriesData from "./data/ministry-domains.json"

const persons = personsData as Person[]
const lectures = lecturesData as Lecture[]
const books = booksData as Book[]
const faqs = faqsData as FAQ[]
const worshipServices = worshipData as WorshipService[]
const programs = programsData as Program[]
const topics = topicsData as TheologicalTopic[]
const ministryDomains = ministriesData as MinistryDomain[]

// ── Persons ─────────────────────────────────────────────
export function getAllPersons(): Person[] { return persons }
export function getPersonById(id: string): Person | undefined {
  return persons.find(p => p.personId === id)
}

// ── Lectures ────────────────────────────────────────────
export function getAllLectures(): Lecture[] { return lectures }
export function getLectureById(id: string): Lecture | undefined {
  return lectures.find(l => l.objectId === id)
}
export function filterLectures(topic?: string, era?: string, ministry?: string, q?: string): Lecture[] {
  return lectures
    .filter(l => !topic || l.theologicalTopics.includes(topic))
    .filter(l => !era || l.era === era)
    .filter(l => !ministry || l.ministryDomains.includes(ministry))
    .filter(l => {
      if (!q) return true
      const ql = q.toLowerCase()
      return l.titleKo.includes(q) ||
        (l.titleEn?.toLowerCase().includes(ql) ?? false) ||
        (l.summaryKo?.includes(q) ?? false)
    })
}

// ── Books ───────────────────────────────────────────────
export function getAllBooks(): Book[] { return books }
export function getBookById(id: string): Book | undefined {
  return books.find(b => b.objectId === id)
}
export function filterBooks(topic?: string, era?: string, ministry?: string, q?: string): Book[] {
  return books
    .filter(b => !topic || b.theologicalTopics.includes(topic))
    .filter(b => !era || b.era === era)
    .filter(b => !ministry || b.ministryDomains.includes(ministry))
    .filter(b => {
      if (!q) return true
      const ql = q.toLowerCase()
      return b.titleKo.includes(q) ||
        (b.titleEn?.toLowerCase().includes(ql) ?? false) ||
        (b.descriptionKo?.includes(q) ?? false)
    })
}

// ── FAQs ────────────────────────────────────────────────
export function getAllFaqs(): FAQ[] { return faqs }
export function getFaqsByCategory(category: string): FAQ[] {
  return faqs.filter(f => f.category === category).sort((a, b) => a.priority - b.priority)
}
export function getChatbotFaqs(): FAQ[] {
  return faqs.filter(f => f.chatbotEnabled).sort((a, b) => a.priority - b.priority)
}
export function searchFaqs(query?: string): FAQ[] {
  if (!query?.trim()) return getChatbotFaqs()
  const q = query.toLowerCase()
  return faqs
    .filter(f => f.chatbotEnabled)
    .filter(f => f.questionKo.toLowerCase().includes(q) || f.answerKo.toLowerCase().includes(q))
    .sort((a, b) => a.priority - b.priority)
}

// ── Worship ─────────────────────────────────────────────
export function getAllWorshipServices(): WorshipService[] { return worshipServices }

// ── Programs ────────────────────────────────────────────
export function getAllPrograms(): Program[] { return programs }
export function getProgramById(id: string): Program | undefined {
  return programs.find(p => p.programId === id)
}
export function getProgramByType(type: string): Program | undefined {
  return programs.find(p => p.programType === type)
}

// ── Topics ──────────────────────────────────────────────
export function getAllTopics(): TheologicalTopic[] { return topics }

// ── Ministry Domains ────────────────────────────────────
export function getAllMinistryDomains(): MinistryDomain[] { return ministryDomains }
export function getMinistryByCode(code: string): MinistryDomain | undefined {
  return ministryDomains.find(m => m.code === code)
}

// ── Cross-link helpers ──────────────────────────────────
export function getLecturesForBook(bookId: string): Lecture[] {
  return lectures.filter(l => l.relatedBookIds?.includes(bookId))
}
export function getBooksForLecture(lectureId: string): Book[] {
  return books.filter(b => b.relatedLectureIds?.includes(lectureId))
}
export function getLecturesByTopic(topic: string): Lecture[] {
  return lectures.filter(l => l.theologicalTopics.includes(topic))
}
export function getBooksByTopic(topic: string): Book[] {
  return books.filter(b => b.theologicalTopics.includes(topic))
}
export function getLecturesBySpeaker(speakerId: string): Lecture[] {
  return lectures.filter(l => l.speakerId === speakerId)
}

// ── Navigation ──────────────────────────────────────────
export const navItems: NavigationItem[] = [
  { key: "identity", labelKo: "예수원 소개", labelEn: "About", path: "/identity", children: [
    { key: "foundation", labelKo: "설립 이야기", labelEn: "Foundation", path: "/identity/foundation" },
    { key: "experiments", labelKo: "세 가지 실험", labelEn: "Three Experiments", path: "/identity/experiments" },
    { key: "ministries", labelKo: "사역 영역", labelEn: "Ministries", path: "/identity/ministries" },
    { key: "dna", labelKo: "영적 DNA", labelEn: "Spiritual DNA", path: "/identity/dna" },
    { key: "fourth-river", labelKo: "네번째강 프로젝트", labelEn: "Fourth River Project", path: "/identity/fourth-river" },
    { key: "moomoo-grange", labelKo: "무무목장 프로젝트", labelEn: "MooMoo Grange", path: "/identity/moomoo-grange" },
  ]},
  { key: "rhythm", labelKo: "공동체 생활", labelEn: "Community Life", path: "/rhythm", children: [
    { key: "worship", labelKo: "예배", labelEn: "Worship", path: "/rhythm/worship" },
    { key: "labor", labelKo: "노동", labelEn: "Labor", path: "/rhythm/labor" },
    { key: "silence", labelKo: "큰 침묵", labelEn: "Great Silence", path: "/rhythm/silence" },
    { key: "meals", labelKo: "식사", labelEn: "Meals", path: "/rhythm/meals" },
    { key: "angelus", labelKo: "삼종기도", labelEn: "Angelus", path: "/rhythm/angelus" },
  ]},
  { key: "founders", labelKo: "설립자와 유산", labelEn: "Founders", path: "/founders", children: [
    { key: "torrey", labelKo: "대천덕 신부", labelEn: "Archer Torrey", path: "/founders/torrey" },
    { key: "jane", labelKo: "현재인 사모", labelEn: "Jane Torrey", path: "/founders/jane" },
    { key: "lectures", labelKo: "강의 아카이브", labelEn: "Lectures", path: "/founders/archive/lectures" },
    { key: "books", labelKo: "서적 아카이브", labelEn: "Books", path: "/founders/archive/books" },
    { key: "prayers", labelKo: "기도문", labelEn: "Prayers", path: "/founders/prayers" },
    { key: "thought-map", labelKo: "사상 지도", labelEn: "Thought Map", path: "/founders/thought-map" },
  ]},
  { key: "formation", labelKo: "양성과 교육", labelEn: "Formation", path: "/formation", children: [
    { key: "applicant", labelKo: "지원 과정", labelEn: "Applicant", path: "/formation/applicant" },
    { key: "trainee", labelKo: "수련 과정", labelEn: "Trainee", path: "/formation/trainee" },
    { key: "seminar", labelKo: "성령세미나", labelEn: "Seminar", path: "/formation/seminar" },
    { key: "philosophy", labelKo: "교육 철학", labelEn: "Philosophy", path: "/formation/philosophy" },
  ]},
  { key: "visit", labelKo: "방문 안내", labelEn: "Visit", path: "/visit", children: [
    { key: "about", labelKo: "예수원은 어떤 곳인가", labelEn: "About", path: "/visit/about" },
    { key: "how", labelKo: "방문 안내", labelEn: "How to Visit", path: "/visit/how" },
    { key: "transport", labelKo: "교통편", labelEn: "Transport", path: "/visit/transport" },
    { key: "onsite", labelKo: "현장 생활 안내", labelEn: "On-site", path: "/visit/onsite" },
    { key: "faq", labelKo: "자주 묻는 질문", labelEn: "FAQ", path: "/visit/faq" },
  ]},
  { key: "publications", labelKo: "출판과 보급", labelEn: "Publications", path: "/publications", children: [
    { key: "catalog", labelKo: "서적 목록", labelEn: "Catalog", path: "/publications/catalog" },
    { key: "hymnals", labelKo: "찬양집", labelEn: "Hymnals", path: "/publications/hymnals" },
    { key: "media", labelKo: "영상/음성 자료", labelEn: "Media", path: "/publications/media" },
    { key: "gifts", labelKo: "기념품·안내자료", labelEn: "Gifts", path: "/publications/gifts" },
  ]},
  { key: "news", labelKo: "소식과 공동체", labelEn: "News", path: "/news", children: [
    { key: "announcements", labelKo: "공지사항", labelEn: "Announcements", path: "/news/announcements" },
    { key: "prayer", labelKo: "기도제목", labelEn: "Prayer", path: "/news/prayer" },
    { key: "contact", labelKo: "연락처", labelEn: "Contact", path: "/news/contact" },
  ]},
]
