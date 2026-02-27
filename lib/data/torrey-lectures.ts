export interface TorreyLecture {
  slug: string
  number: number
  title: string
  youtubeId: string
  category: string
  description: string
}

export interface LectureCategory {
  key: string
  label: string
  labelEn: string
  description: string
}

export const lectureCategories: LectureCategory[] = [
  {
    key: "holy-spirit",
    label: "성령론",
    labelEn: "Holy Spirit",
    description: "성령의 본질, 성령세례, 그리고 성령의 역사에 대한 강의",
  },
  {
    key: "kingdom-of-god",
    label: "하나님 나라",
    labelEn: "Kingdom of God",
    description: "하나님 나라의 의, 믿음, 그리고 부활의 소망에 대한 강의",
  },
  {
    key: "community",
    label: "공동체와 사명",
    labelEn: "Community & Mission",
    description: "예수원 사명, 선교정신, 그리고 교회의 가치정신에 대한 강의",
  },
  {
    key: "christian-life",
    label: "그리스도인의 삶",
    labelEn: "Christian Life",
    description: "사랑, 용서, 새출발과 성장, 회개와 고백에 대한 강의",
  },
  {
    key: "family-society",
    label: "가정과 사회",
    labelEn: "Family & Society",
    description: "남과여, 가족, 노동, 토지와 인권, 사회문제에 대한 강의",
  },
  {
    key: "pastoral-healing",
    label: "목회와 치유",
    labelEn: "Pastoral Care & Healing",
    description: "상담문제, 속사람 치유, 영적전쟁에 대한 강의",
  },
  {
    key: "theology-culture",
    label: "신학과 문화",
    labelEn: "Theology & Culture",
    description: "신학의 5차원, 동양문화의 뿌리와 기독교, 공동체와 말에 대한 강의",
  },
]

export const torreyLectures: TorreyLecture[] = [
  // 성령론
  {
    slug: "holy-spirit-pneumatology",
    number: 3,
    title: "강의 3: 성령론",
    youtubeId: "ZK_ObDvBrGQ",
    category: "holy-spirit",
    description:
      "대천덕 신부가 성령의 인격과 사역에 대해 가르치는 강의. 성령의 본질, 삼위일체 안에서 성령의 역할, 그리고 신자의 삶 속에서 성령의 역사에 대해 다룹니다.",
  },
  {
    slug: "holy-spirit-wisdom-women",
    number: 5,
    title: "강의 5: 성령의 지혜와 여성론",
    youtubeId: "oXslk6c2D08",
    category: "holy-spirit",
    description:
      "성령이 주시는 지혜와 여성의 역할에 대한 신학적 성찰. 성경 속 여성의 위치와 성령의 지혜가 어떻게 연결되는지를 살펴봅니다.",
  },
  {
    slug: "holy-spirit-baptism",
    number: 13,
    title: "강의 13: 성령세례",
    youtubeId: "2IMqyOsf4GI",
    category: "holy-spirit",
    description:
      "성령세례의 성경적 근거와 실제적 의미를 다루는 강의. 성령세례의 본질, 조건, 그리고 결과에 대해 가르칩니다.",
  },
  // 하나님 나라
  {
    slug: "kingdom-righteousness",
    number: 9,
    title: "강의 9: 하나님나라의 의",
    youtubeId: "DndhmS_0VJ8",
    category: "kingdom-of-god",
    description:
      "하나님 나라에서의 의(義)의 의미를 탐구합니다. 세상의 의와 하나님 나라의 의가 어떻게 다른지, 그리스도인이 추구해야 할 의의 본질을 살펴봅니다.",
  },
  {
    slug: "faith",
    number: 10,
    title: "강의 10: 믿음",
    youtubeId: "zBTtmgpTLGI",
    category: "kingdom-of-god",
    description:
      "믿음의 본질과 실제에 대한 강의. 성경적 믿음이란 무엇이며, 일상 속에서 어떻게 믿음으로 살아갈 수 있는지를 다룹니다.",
  },
  {
    slug: "resurrection",
    number: 16,
    title: "강의 16: 부활",
    youtubeId: "Ae9HJZONFjc",
    category: "kingdom-of-god",
    description:
      "부활의 신학적 의미와 그리스도인의 소망에 대한 강의. 예수 그리스도의 부활이 우리 삶에 주는 변혁적 의미를 탐구합니다.",
  },
  // 공동체와 사명
  {
    slug: "mission-spirit",
    number: 2,
    title: "강의 2: 선교정신",
    youtubeId: "Wu7orc6Q82s",
    category: "community",
    description:
      "그리스도인의 선교 정신과 사명에 대한 강의. 선교의 성경적 근거와 공동체를 통한 선교의 실천을 다룹니다.",
  },
  {
    slug: "jesus-abbey-mission",
    number: 7,
    title: "강의 7: 예수원 사명",
    youtubeId: "dtCkx4v142I",
    category: "community",
    description:
      "예수원 공동체의 설립 목적과 사명에 대한 강의. 기도와 노동, 공동체의 삶을 통해 하나님 나라를 살아가는 예수원의 비전을 설명합니다.",
  },
  {
    slug: "church-values",
    number: 19,
    title: "강의 19: 교회의 가치정신",
    youtubeId: "DIOIf77w9Gg",
    category: "community",
    description:
      "교회가 지켜야 할 핵심 가치와 정신에 대한 강의. 초대교회의 가치가 오늘날 교회에 어떤 의미를 갖는지 살펴봅니다.",
  },
  // 그리스도인의 삶
  {
    slug: "confession-repentance",
    number: 6,
    title: "강의 6: 회계와 고백",
    youtubeId: "PMesAviud44",
    category: "christian-life",
    description:
      "회개와 고백의 영적 의미와 실천에 대한 강의. 진정한 회개란 무엇이며, 고백이 영적 성장에 어떤 역할을 하는지 다룹니다.",
  },
  {
    slug: "love",
    number: 15,
    title: "강의 15: 사랑",
    youtubeId: "hCX_CxXGOkY",
    category: "christian-life",
    description:
      "그리스도인의 사랑에 대한 강의. 하나님의 사랑의 본질, 아가페 사랑의 의미, 그리고 공동체 안에서의 사랑의 실천을 다룹니다.",
  },
  {
    slug: "new-start-growth",
    number: 17,
    title: "강의 17: 새출발과 성장",
    youtubeId: "aF_dOmZv91w",
    category: "christian-life",
    description:
      "영적 새출발과 성장에 대한 강의. 넘어진 후 다시 일어서는 은혜, 그리고 지속적인 영적 성장의 원리를 가르칩니다.",
  },
  {
    slug: "forgiveness",
    number: 18,
    title: "강의 18: 용서",
    youtubeId: "AfKfYczGJYQ",
    category: "christian-life",
    description:
      "용서의 성경적 원리와 실천에 대한 강의. 예수원 공동체가 실천해온 적극적 용서의 신학을 바탕으로, 용서가 치유와 회복으로 이어지는 과정을 설명합니다.",
  },
  // 가정과 사회
  {
    slug: "marriage-men-women",
    number: 4,
    title: "강의 4: 남과여 결혼",
    youtubeId: "vrXnhYWe46Y",
    category: "family-society",
    description:
      "남성과 여성, 결혼에 대한 성경적 가르침. 하나님이 설계하신 남녀 관계와 결혼의 의미를 탐구합니다.",
  },
  {
    slug: "christian-labor",
    number: 11,
    title: "강의 11: 기독교인과 노동",
    youtubeId: "--9HF1n2snw",
    category: "family-society",
    description:
      "그리스도인에게 노동이 갖는 의미에 대한 강의. 노동을 예배의 연장으로 이해하는 예수원의 신학적 관점을 다룹니다.",
  },
  {
    slug: "land-human-rights",
    number: 12,
    title: "강의 12: 토지와 인권",
    youtubeId: "BYdbNhorJO0",
    category: "family-society",
    description:
      "토지 문제와 인권에 대한 성경적 관점. 성경이 가르치는 토지의 의미와 사회 정의에 대해 살펴봅니다.",
  },
  {
    slug: "family-image-of-god",
    number: 14,
    title: "강의 14: 가족을 통한 하나님의 형상",
    youtubeId: "7P5O5ozV92o",
    category: "family-society",
    description:
      "가족 안에서 드러나는 하나님의 형상에 대한 강의. 가정이 어떻게 하나님의 사랑과 관계를 반영하는지 가르칩니다.",
  },
  {
    slug: "social-issues",
    number: 21,
    title: "강의 21: 사회문제",
    youtubeId: "TcJxRjPCSuQ",
    category: "family-society",
    description:
      "그리스도인이 사회문제에 어떻게 접근해야 하는지에 대한 강의. 성경적 세계관으로 사회 현안을 바라보는 관점을 제시합니다.",
  },
  // 목회와 치유
  {
    slug: "counseling",
    number: 1,
    title: "강의 1: 상담문제",
    youtubeId: "pyC_JvFhXTc",
    category: "pastoral-healing",
    description:
      "목회 상담의 기본 원리와 실제에 대한 강의. 성경적 상담의 토대와 방법론을 다루며, 공동체 안에서의 상담 사역을 설명합니다.",
  },
  {
    slug: "spiritual-warfare",
    number: 8,
    title: "강의 8: 영적전쟁",
    youtubeId: "WN76aWywosU",
    category: "pastoral-healing",
    description:
      "영적 전쟁의 실체와 그리스도인의 대응에 대한 강의. 사탄의 전략, 영적 무장, 그리고 승리의 원리를 성경적으로 가르칩니다.",
  },
  {
    slug: "inner-healing-1",
    number: 23,
    title: "강의 23: 속사람 치유 1",
    youtubeId: "meLrwhJrW4w",
    category: "pastoral-healing",
    description:
      "속사람 치유의 첫 번째 강의. 내면의 상처가 어떻게 형성되며, 성령의 역사를 통해 어떻게 치유될 수 있는지를 다룹니다.",
  },
  {
    slug: "inner-healing-2",
    number: 24,
    title: "강의 24: 속사람 치유 2",
    youtubeId: "Mk35HcJNHE0",
    category: "pastoral-healing",
    description:
      "속사람 치유의 두 번째 강의. 치유의 실제적 과정과 사례를 통해 내면 치유의 원리를 심화합니다.",
  },
  // 신학과 문화
  {
    slug: "eastern-culture-christianity",
    number: 20,
    title: "강의 20: 동양문화의 뿌리와 기독교분위기",
    youtubeId: "wE2GVelIVZg",
    category: "theology-culture",
    description:
      "동양 문화의 뿌리와 기독교 사이의 관계를 탐구하는 강의. 동양적 사유와 기독교 신학이 어떻게 만나고 대화할 수 있는지 살펴봅니다.",
  },
  {
    slug: "five-dimensions-theology",
    number: 22,
    title: "강의 22: 신학의 5차원",
    youtubeId: "WkNXjGQh2X8",
    category: "theology-culture",
    description:
      "신학을 5가지 차원으로 이해하는 대천덕 신부의 독창적 관점. 신학적 사유의 깊이를 확장하는 새로운 프레임워크를 제시합니다.",
  },
  {
    slug: "community-and-words",
    number: 25,
    title: "강의 25: 공동체와 말",
    youtubeId: "PA0460Nt8b8",
    category: "theology-culture",
    description:
      "공동체 안에서 말(언어)의 역할에 대한 강의. 말이 공동체를 세우기도, 허물기도 하는 현실 속에서 성경적 언어 사용의 원리를 가르칩니다.",
  },
]

export function getLectureBySlug(slug: string): TorreyLecture | undefined {
  return torreyLectures.find((l) => l.slug === slug)
}

export function getLecturesByCategory(category: string): TorreyLecture[] {
  return torreyLectures.filter((l) => l.category === category).sort((a, b) => a.number - b.number)
}

export function getAllLectureSlugs(): string[] {
  return torreyLectures.map((l) => l.slug)
}
