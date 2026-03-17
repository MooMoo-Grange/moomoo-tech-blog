// lib/time-theme.ts — 시간 감응형 테마 시스템
// 한국 시간(KST, UTC+9) 기준으로 예수원의 하루 리듬에 맞춰 UI 톤이 변화합니다.

export type TimeOfDay =
  | "dawn" // 05:00-06:59 — 새벽 기도 (조도)
  | "morning" // 07:00-11:59 — 노동
  | "noon" // 12:00-12:59 — 정오 기도 (대도)
  | "afternoon" // 13:00-17:59 — 독서와 침묵
  | "evening" // 18:00-19:29 — 저녁 식사
  | "vespers" // 19:30-21:59 — 저녁 기도 (만도)
  | "night" // 22:00-04:59 — 고요

export interface TimeTheme {
  period: TimeOfDay
  labelKo: string
  labelEn: string
  verse: string
  verseRef: string
  heroMessage: string
  bgClass: string
  textClass: string
  accentClass: string
  overlayClass: string
}

const themes: Record<TimeOfDay, TimeTheme> = {
  dawn: {
    period: "dawn",
    labelKo: "새벽 기도가 시작되었습니다",
    labelEn: "Morning prayer has begun",
    verse: "밤에 여호와의 성전에 서 있는 여호와의 모든 종들아 여호와를 송축하라",
    verseRef: "시편 134:1",
    heroMessage: "새벽이 오기 전, 기도가 시작됩니다",
    bgClass: "bg-sacred-navy",
    textClass: "text-sacred-candle",
    accentClass: "text-sacred-gold",
    overlayClass: "from-[#1a1a3e]/80 via-[#1a1a3e]/50 to-[#1a1a3e]/70",
  },
  morning: {
    period: "morning",
    labelKo: "손으로 기도하는 시간입니다",
    labelEn: "Hands at prayer through labor",
    verse: "여호와 하나님이 그 사람을 이끌어 에덴동산에 두어 그것을 경작하며 지키게 하시고",
    verseRef: "창세기 2:15",
    heroMessage: "손으로 기도하는 시간",
    bgClass: "bg-abbey-50",
    textClass: "text-abbey-800",
    accentClass: "text-forest-700",
    overlayClass: "from-black/40 via-black/20 to-black/50",
  },
  noon: {
    period: "noon",
    labelKo: "잠시 멈추고, 하나님 앞에 섭니다",
    labelEn: "We pause and stand before God",
    verse: "여호와를 기다리는 자는 새 힘을 얻으리니",
    verseRef: "이사야 40:31",
    heroMessage: "잠시 멈추고, 하나님 앞에 섭니다",
    bgClass: "bg-white",
    textClass: "text-abbey-800",
    accentClass: "text-sacred-gold",
    overlayClass: "from-black/30 via-transparent to-black/40",
  },
  afternoon: {
    period: "afternoon",
    labelKo: "읽고, 걷고, 침묵합니다",
    labelEn: "We read, walk, and keep silence",
    verse: "네 말씀은 내 발에 등이요 내 길에 빛이니이다",
    verseRef: "시편 119:105",
    heroMessage: "읽고, 걷고, 침묵합니다",
    bgClass: "bg-abbey-50",
    textClass: "text-abbey-800",
    accentClass: "text-forest-600",
    overlayClass: "from-black/40 via-black/20 to-black/50",
  },
  evening: {
    period: "evening",
    labelKo: "감사의 식탁에 함께 앉습니다",
    labelEn: "We gather at the table of gratitude",
    verse: "광야에 식탁을 차리실 수 있는가",
    verseRef: "시편 78:19",
    heroMessage: "감사의 식탁에 함께 앉습니다",
    bgClass: "bg-[#2a1f14]",
    textClass: "text-abbey-100",
    accentClass: "text-sacred-amber",
    overlayClass: "from-[#2a1f14]/70 via-[#2a1f14]/40 to-[#2a1f14]/70",
  },
  vespers: {
    period: "vespers",
    labelKo: "저녁 기도가 시작되었습니다",
    labelEn: "Evening prayer has begun",
    verse: "나의 기도가 주의 앞에 분향함과 같이 되며 나의 손 드는 것이 저녁 제사같이 되게 하소서",
    verseRef: "시편 141:2",
    heroMessage: "저녁 기도가 시작되었습니다",
    bgClass: "bg-[#1a1008]",
    textClass: "text-abbey-100",
    accentClass: "text-sacred-gold",
    overlayClass: "from-[#1a1008]/80 via-[#1a1008]/50 to-[#1a1008]/80",
  },
  night: {
    period: "night",
    labelKo: "고요 속에 하나님이 계십니다",
    labelEn: "God abides in the silence",
    verse: "가만히 있어 내가 하나님 됨을 알지어다",
    verseRef: "시편 46:10",
    heroMessage: "고요 속에 하나님이 계십니다",
    bgClass: "bg-[#0d0d1a]",
    textClass: "text-[#a0a0b0]",
    accentClass: "text-sacred-gold",
    overlayClass: "from-[#0d0d1a]/80 via-[#0d0d1a]/50 to-[#0d0d1a]/80",
  },
}

/** KST 기준 현재 시간대 반환 */
export function getTimeOfDay(date?: Date): TimeOfDay {
  const now = date ?? new Date()
  // KST = UTC + 9
  const kstHour = (now.getUTCHours() + 9) % 24
  const kstMinute = now.getUTCMinutes()

  if (kstHour >= 5 && kstHour < 7) return "dawn"
  if (kstHour >= 7 && kstHour < 12) return "morning"
  if (kstHour === 12) return "noon"
  if (kstHour >= 13 && kstHour < 18) return "afternoon"
  if (kstHour === 18 || (kstHour === 19 && kstMinute < 30)) return "evening"
  if ((kstHour === 19 && kstMinute >= 30) || (kstHour >= 20 && kstHour < 22))
    return "vespers"
  return "night" // 22:00-04:59
}

/** 시간대에 해당하는 테마 반환 */
export function getTimeTheme(period?: TimeOfDay): TimeTheme {
  const p = period ?? getTimeOfDay()
  return themes[p]
}

/** 기본 테마 (SSR fallback — 낮 시간) */
export function getDefaultTheme(): TimeTheme {
  return themes.morning
}

/** 시간대가 어두운 모드인지 여부 */
export function isDarkPeriod(period: TimeOfDay): boolean {
  return ["dawn", "vespers", "night"].includes(period)
}

/** 모든 테마 목록 (The Day 페이지 등에서 활용) */
export function getAllTimeThemes(): TimeTheme[] {
  return [
    themes.dawn,
    themes.morning,
    themes.noon,
    themes.afternoon,
    themes.evening,
    themes.vespers,
    themes.night,
  ]
}
