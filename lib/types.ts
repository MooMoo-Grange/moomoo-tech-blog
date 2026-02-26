export interface Chronology {
  period: string
  label: string
  description: string
}

export interface Person {
  personId: string
  nameKo: string
  nameEn: string
  role: string
  birthDate: string | null
  deathDate: string | null
  biographySummary: string
  chronology: Chronology[]
  photoRefs: string[]
}

export interface Lecture {
  objectId: string
  titleKo: string
  titleEn?: string | null
  speakerId: string
  recordingDate?: string | null
  datePrecision?: string
  durationMinutes?: number | null
  language?: string
  theologicalTopics: string[]
  ministryDomains: string[]
  summaryKo?: string | null
  transcriptStatus?: string
  canonicalUrl?: string | null
  era: string
  relatedBookIds: string[]
  audiences: string[]
}

export interface Book {
  objectId: string
  titleKo: string
  titleEn?: string | null
  authorIds: string[]
  publisher: string
  publicationYear: number | null
  isbn?: string | null
  edition?: string | null
  pageCount: number | null
  priceKrw: number | null
  inPrint: boolean
  producedBy: string
  theologicalTopics: string[]
  ministryDomains: string[]
  descriptionKo?: string | null
  era: string
  relatedLectureIds: string[]
  audiences: string[]
  language: string
}

export interface FAQ {
  faqId: string
  category: string
  questionKo: string
  answerKo: string
  sourceReference: string
  priority: number
  chatbotEnabled: boolean
  lastUpdated: string
}

export interface WorshipService {
  serviceId: string
  serviceType: string
  nameKo: string
  nameEn: string
  daysOfWeek: string[]
  startTime: string
  endTime: string
  description: string
  mandatoryForVisitors: boolean
}

export interface Program {
  programId: string
  programType: string
  nameKo: string
  nameEn: string
  durationDescription: string
  educationGoal: string
  requiredDocuments: string[]
  costDescription: string
  restrictions: string
  contactInfo: string
  active: boolean
}

export interface TheologicalTopic {
  topicId: string
  topicNameKo: string
  topicNameEn: string
  description: string
  status: string
  subTopics: string[]
}

export interface MinistryDomain {
  code: string
  nameKo: string
  nameEn: string
  subCategories: string[]
}

export interface NavigationItem {
  key: string
  labelKo: string
  labelEn: string
  path: string
  children?: NavigationItem[]
}
