import { NextResponse } from "next/server"

const intents = [
  { code: "VISIT_RESERVATION", labelKo: "방문 예약", labelEn: "Visit Reservation" },
  { code: "VISIT_TRANSPORT", labelKo: "교통편 안내", labelEn: "Transport" },
  { code: "VISIT_PREPARE", labelKo: "준비물 안내", labelEn: "What to Prepare" },
  { code: "WORSHIP_SCHEDULE", labelKo: "예배 시간", labelEn: "Worship Schedule" },
  { code: "WORSHIP_SILENCE", labelKo: "침묵 시간", labelEn: "Silence Rule" },
  { code: "MEAL_INFO", labelKo: "식사 안내", labelEn: "Meal Information" },
  { code: "PROGRAM_APPLICATION", labelKo: "지원 과정", labelEn: "Application Program" },
  { code: "PROGRAM_TRAINING", labelKo: "수련 과정", labelEn: "Training Program" },
  { code: "PROGRAM_SEMINAR", labelKo: "성령세미나", labelEn: "Holy Spirit Seminar" },
  { code: "PUBLICATION_BOOKS", labelKo: "서적 구매", labelEn: "Book Purchase" },
  { code: "FOUNDER_INFO", labelKo: "설립자 정보", labelEn: "Founder Information" },
  { code: "PRAYER_REQUEST", labelKo: "기도 요청", labelEn: "Prayer Request" },
  { code: "CONTACT_INFO", labelKo: "연락처", labelEn: "Contact Information" },
]

export async function GET() {
  return NextResponse.json({ intents })
}
