import { NextRequest, NextResponse } from "next/server"
import { searchFaqs } from "@/lib/data"

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const q = searchParams.get("q") ?? undefined

  const results = searchFaqs(q)
  return NextResponse.json({
    query: q ?? null,
    count: results.length,
    results: results.map(f => ({
      faqId: f.faqId,
      category: f.category,
      question: f.questionKo,
      answer: f.answerKo,
    })),
  })
}
