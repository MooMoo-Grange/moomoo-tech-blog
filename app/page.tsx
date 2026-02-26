import Link from "next/link"
import { getAllWorshipServices, getAllFaqs } from "@/lib/data"

export default function HomePage() {
  const services = getAllWorshipServices()
  const faqs = getAllFaqs().slice(0, 3)

  return (
    <>
      {/* Hero */}
      <section className="relative bg-forest-800 text-white py-24 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-forest-900/90 to-forest-700/80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-4">예수원</h1>
          <p className="text-xl lg:text-2xl font-serif text-forest-200 mb-2">Jesus Abbey</p>
          <p className="text-lg text-forest-300 max-w-2xl mx-auto mt-6">
            태백산 기슭에서 기도와 노동, 공동체의 삶을 통해<br />
            하나님 나라를 살아가는 수도 공동체
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/visit/about" className="inline-block bg-white text-forest-800 px-8 py-3 rounded-lg font-medium hover:bg-forest-50 transition-colors">
              예수원 알아보기
            </Link>
            <Link href="/visit/how" className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors">
              방문 안내
            </Link>
          </div>
        </div>
      </section>

      {/* Three Experiments */}
      <section className="py-16 bg-abbey-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-serif font-bold text-center mb-3">세 가지 실험</h2>
          <p className="text-center text-abbey-600 mb-10">예수원 공동체가 추구하는 삶의 방식</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-sm border border-abbey-200 text-center">
              <div className="text-4xl mb-4">🙏</div>
              <h3 className="font-serif font-bold text-lg mb-2 text-forest-700">기도 생활</h3>
              <p className="text-sm text-abbey-600 leading-relaxed">
                하루 네 번의 기도와 예배를 통해 하나님과의 관계를 최우선으로 삼습니다.
                삼종 기도, 새벽 기도, 주일 예배가 공동체의 중심입니다.
              </p>
              <Link href="/rhythm/worship" className="inline-block mt-4 text-sm text-forest-700 font-medium hover:text-forest-900">
                자세히 보기 &rarr;
              </Link>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-sm border border-abbey-200 text-center">
              <div className="text-4xl mb-4">🌾</div>
              <h3 className="font-serif font-bold text-lg mb-2 text-forest-700">노동 생활</h3>
              <p className="text-sm text-abbey-600 leading-relaxed">
                농사, 목공, 요리 등 손으로 하는 노동을 통해 기도의 삶을 실천합니다.
                &ldquo;일하는 것이 곧 기도&rdquo;라는 정신을 따릅니다.
              </p>
              <Link href="/rhythm/labor" className="inline-block mt-4 text-sm text-forest-700 font-medium hover:text-forest-900">
                자세히 보기 &rarr;
              </Link>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-sm border border-abbey-200 text-center">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="font-serif font-bold text-lg mb-2 text-forest-700">공동체 생활</h3>
              <p className="text-sm text-abbey-600 leading-relaxed">
                함께 먹고, 함께 기도하고, 함께 일하며 그리스도의 몸을 이루어갑니다.
                서로를 섬기는 삶이 공동체의 기초입니다.
              </p>
              <Link href="/identity/experiments" className="inline-block mt-4 text-sm text-forest-700 font-medium hover:text-forest-900">
                자세히 보기 &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Worship Schedule */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-serif font-bold text-center mb-3">예배 및 기도 시간</h2>
          <p className="text-center text-abbey-600 mb-10">예수원의 하루는 기도로 시작하고 기도로 마칩니다</p>
          <div className="max-w-3xl mx-auto">
            <div className="bg-forest-50 rounded-lg border border-forest-200 overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-forest-100 text-forest-800">
                    <th className="text-left px-6 py-3 font-medium">예배/기도</th>
                    <th className="text-left px-6 py-3 font-medium">시간</th>
                    <th className="text-left px-6 py-3 font-medium hidden sm:table-cell">비고</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-forest-200">
                  {services.map(svc => (
                    <tr key={svc.serviceId} className="hover:bg-forest-50/50">
                      <td className="px-6 py-3 font-medium text-abbey-800">{svc.nameKo}</td>
                      <td className="px-6 py-3 text-abbey-600">{svc.timeKo}</td>
                      <td className="px-6 py-3 text-abbey-500 hidden sm:table-cell">{svc.descriptionKo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="text-center mt-6">
              <Link href="/rhythm/worship" className="text-sm text-forest-700 font-medium hover:text-forest-900">
                전체 예배 안내 보기 &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-16 bg-abbey-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-serif font-bold text-center mb-3">자주 묻는 질문</h2>
          <p className="text-center text-abbey-600 mb-10">방문 전 확인해 주세요</p>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map(faq => (
              <div key={faq.faqId} className="bg-white rounded-lg p-6 border border-abbey-200">
                <p className="font-medium text-abbey-800 mb-2">{faq.questionKo}</p>
                <p className="text-sm text-abbey-600">{faq.answerKo}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/visit/faq" className="text-sm text-forest-700 font-medium hover:text-forest-900">
              모든 질문 보기 &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-serif font-bold text-center mb-10">바로가기</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { href: "/founders/torrey", icon: "✝️", label: "아처 토레 신부" },
              { href: "/founders/archive/lectures", icon: "🎙️", label: "강의 아카이브" },
              { href: "/formation/applicant", icon: "📝", label: "수련 지원 안내" },
              { href: "/news/contact", icon: "📞", label: "연락처 안내" },
            ].map(link => (
              <Link key={link.href} href={link.href}
                className="flex flex-col items-center p-6 bg-abbey-50 rounded-lg border border-abbey-200 hover:border-forest-300 hover:bg-forest-50 transition-colors text-center">
                <span className="text-3xl mb-3">{link.icon}</span>
                <span className="text-sm font-medium text-abbey-700">{link.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
