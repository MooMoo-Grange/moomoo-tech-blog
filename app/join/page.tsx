import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "함께하기 — 이 리듬에 참여하기",
  description: "예수원의 리듬에 함께하는 방법. 방문, 기도, 수련 — 당신에게 맞는 방식으로 참여하세요.",
}

export default function JoinPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-abbey-900 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-sacred-gold/70 font-sans text-sm tracking-widest uppercase mb-4">
            Join the Rhythm
          </p>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-8">
            이 리듬에 함께하기
          </h1>
          <p className="font-serif text-xl text-abbey-300 leading-relaxed max-w-reading mx-auto">
            예수원은 관광지가 아닙니다.
            <br />
            이곳은 기도와 노동의 리듬에 함께하는 곳입니다.
          </p>
        </div>
      </section>

      {/* 방문하기 */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="mb-8">
            <p className="text-sacred-gold font-sans text-sm tracking-widest uppercase mb-2">Come</p>
            <h2 className="font-serif text-3xl font-bold text-abbey-900">방문하기</h2>
          </div>
          <div className="space-y-6">
            <p className="font-serif text-body text-abbey-600 leading-relaxed">
              예수원의 하루를 직접 살아보세요. 방문자는 공동체와 함께 기도하고,
              함께 일하고, 함께 식사합니다. 숙소를 예약하는 것이 아니라,
              공동체의 일과에 참여하는 것입니다.
            </p>

            <div className="bg-abbey-50 rounded-lg p-6 sm:p-8 space-y-4">
              <h3 className="font-serif text-lg font-bold text-abbey-800">준비할 것들</h3>
              <div className="space-y-3 text-body-sm text-abbey-600">
                <p>
                  <strong className="text-abbey-800">마음의 준비</strong> — 예수원은 조용한 곳입니다.
                  휴대전화를 내려놓고, 침묵에 익숙해지세요.
                </p>
                <p>
                  <strong className="text-abbey-800">실제 준비물</strong> — 편한 옷, 작업복, 세면도구, 성경.
                  겨울에는 방한용품이 필요합니다. 해발 800m의 산입니다.
                </p>
                <p>
                  <strong className="text-abbey-800">기간</strong> — 최소 2박 3일을 권합니다.
                  하루의 리듬을 온전히 경험하려면 시간이 필요합니다.
                </p>
              </div>
            </div>

            <div className="bg-abbey-50 rounded-lg p-6 sm:p-8 space-y-4">
              <h3 className="font-serif text-lg font-bold text-abbey-800">교통 안내</h3>
              <div className="space-y-3 text-body-sm text-abbey-600">
                <p>
                  <strong className="text-abbey-800">주소</strong> — 강원특별자치도 태백시 외나무골길 97
                </p>
                <p>
                  <strong className="text-abbey-800">대중교통</strong> — 서울 → 태백 시외버스(약 3시간 30분).
                  태백 버스터미널에서 택시로 약 20분.
                </p>
                <p>
                  <strong className="text-abbey-800">자가용</strong> — 서울에서 약 3시간 30분~4시간.
                  네비게이션에 &ldquo;예수원&rdquo; 검색.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <p className="text-body-sm text-abbey-600 mb-4">
                방문 신청은 전화 또는 이메일로 해 주세요.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:033-552-0662"
                  className="inline-block bg-forest-700 text-white px-6 py-3 rounded-full font-sans text-sm font-medium hover:bg-forest-800 transition-colors text-center"
                >
                  전화하기: 033-552-0662
                </a>
                <a
                  href="mailto:guestjabbey@hanmail.net"
                  className="inline-block border border-forest-700 text-forest-700 px-6 py-3 rounded-full font-sans text-sm font-medium hover:bg-forest-50 transition-colors text-center"
                >
                  이메일 보내기
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="max-w-3xl mx-auto" />

      {/* 기도로 함께하기 */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="mb-8">
            <p className="text-sacred-gold font-sans text-sm tracking-widest uppercase mb-2">Pray</p>
            <h2 className="font-serif text-3xl font-bold text-abbey-900">기도로 함께하기</h2>
          </div>
          <div className="space-y-6">
            <p className="font-serif text-body text-abbey-600 leading-relaxed">
              예수원에 오지 않아도 함께 기도할 수 있습니다.
              매일 기도 시간에 같은 마음으로 기도해 주세요.
              기도 요청이 있으시면 보내주세요.
            </p>
            <div className="bg-abbey-50 rounded-lg p-6 sm:p-8">
              <h3 className="font-serif text-lg font-bold text-abbey-800 mb-3">기도 시간</h3>
              <div className="space-y-2 text-body-sm text-abbey-600">
                <p>조도 (아침 기도): 06:00</p>
                <p>대도 (정오 기도): 12:00</p>
                <p>만도 (저녁 기도): 19:30</p>
              </div>
            </div>
            <Link
              href="/news/prayer"
              className="inline-block text-forest-700 font-sans text-sm hover:text-forest-900 transition-colors"
            >
              기도 요청 보내기 →
            </Link>
          </div>
        </div>
      </section>

      <hr className="max-w-3xl mx-auto" />

      {/* 수련 지원 */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="mb-8">
            <p className="text-sacred-gold font-sans text-sm tracking-widest uppercase mb-2">Stay</p>
            <h2 className="font-serif text-3xl font-bold text-abbey-900">더 깊이 머물기</h2>
          </div>
          <div className="space-y-6">
            <p className="font-serif text-body text-abbey-600 leading-relaxed">
              더 오래, 더 깊이 공동체의 삶에 참여하고 싶다면
              수련 과정을 살펴보세요. 6개월 이상의 장기 수련을 통해
              기도와 노동의 리듬을 삶의 리듬으로 만들어갑니다.
            </p>
            <Link
              href="/formation/applicant"
              className="inline-block text-forest-700 font-sans text-sm hover:text-forest-900 transition-colors"
            >
              수련 지원 안내 →
            </Link>
          </div>
        </div>
      </section>

      {/* 연락처 */}
      <section className="py-16 bg-abbey-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h3 className="font-serif text-xl font-bold text-abbey-900 mb-4">
            연락하기
          </h3>
          <div className="text-body-sm text-abbey-600 space-y-1">
            <p>손님부: 033-552-0662 / guestjabbey@hanmail.net</p>
            <p>사무부: 033-552-0633 / jabbey65@hanmail.net</p>
            <p className="pt-2 text-abbey-500">
              강원특별자치도 태백시 외나무골길 97
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
