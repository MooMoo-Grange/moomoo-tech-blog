import Breadcrumbs from "@/components/Breadcrumbs"
import FaqAccordion from "@/components/FaqAccordion"
import ChatbotSearch from "@/components/ChatbotSearch"
import { getAllFaqs } from "@/lib/data"

export const metadata = { title: "자주 묻는 질문" }

export default function FaqPage() {
  const faqs = getAllFaqs()

  const categories = [
    { key: "visit", label: "방문" },
    { key: "worship", label: "예배" },
    { key: "program", label: "프로그램" },
    { key: "publication", label: "출판" },
    { key: "contact", label: "연락처" },
    { key: "general", label: "일반" },
  ]

  return (
    <>
      <Breadcrumbs items={[{ label: "홈", path: "/" }, { label: "방문 안내", path: "/visit" }, { label: "자주 묻는 질문" }]} />
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-serif font-bold mb-6">자주 묻는 질문</h1>
          <p className="text-lg text-abbey-600 leading-relaxed mb-10">
            예수원 방문에 대해 자주 묻는 질문과 답변을 모았습니다.
          </p>

          {/* Chatbot Search */}
          <div className="mb-12">
            <ChatbotSearch />
          </div>

          {/* FAQ by Category */}
          <div className="space-y-10">
            {categories.map(cat => {
              const catFaqs = faqs.filter(f => f.category === cat.key)
              if (catFaqs.length === 0) return null
              return (
                <div key={cat.key}>
                  <h2 className="text-xl font-serif font-bold mb-4">{cat.label}</h2>
                  <div className="space-y-2">
                    {catFaqs.map(faq => (
                      <FaqAccordion key={faq.faqId} question={faq.questionKo} answer={faq.answerKo} />
                    ))}
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-12 bg-abbey-100/50 rounded-lg p-6 border border-abbey-200 text-center">
            <p className="text-abbey-700 mb-2">더 궁금한 것이 있으신가요?</p>
            <p className="text-sm text-abbey-600">
              예수원 사무부(📞 033-552-0633)로 연락해 주세요.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
