import Link from "next/link"
import Breadcrumbs from "@/components/Breadcrumbs"
import FundingDashboard from "@/components/funding/FundingDashboard"

export const metadata = {
  title: "Jersey Funding — 선물을 전달하라",
  description:
    "삼수령 무무목장의 저지 젖소 펀딩 프로젝트. 북한 고지대 농촌 복원 모델을 함께 만들어 가는 'Passing on the Gift' 크라우드펀딩.",
}

const BANK = {
  account: "351-1297-6263-23",
  bank: "농협",
  holder: "삼수령목장",
}

const TIERS = [
  {
    id: "cow",
    amount: "600만원",
    amountKRW: 6000000,
    title: "저지 소 1두 후원",
    desc: "저지 젖소 한 마리가 입식됩니다. 2년 후 새끼 소를 낳으면, 그 새끼가 북한으로 가는 선물이 됩니다.",
    icon: "🐄",
  },
  {
    id: "feed",
    amount: "60만원/월",
    amountKRW: 600000,
    title: "1개월 사료비 후원",
    desc: "고지대 혹한기 5개월, 소들의 겨울을 책임집니다. 정기 후원으로 연결하실 수 있습니다.",
    icon: "🌾",
  },
  {
    id: "yogurt",
    amount: "100만원/년",
    amountKRW: 1000000,
    title: "A2 목초 요거트 정기구독",
    desc: "1년간 매월 무무목장의 A2 저지 목초 요거트를 받으시며 프로젝트 후원자가 됩니다. 무무곳간 스마트스토어에서 구독 가능합니다.",
    icon: "🥛",
    storeLink: "https://smartstore.naver.com/moomooranch",
  },
]

export default function JerseyFundingPage() {
  return (
    <>
      <Breadcrumbs items={[
        { label: "홈", path: "/" },
        { label: "무무목장", path: "/identity/moomoo-grange" },
        { label: "Jersey Funding" },
      ]} />

      {/* ── HERO ── */}
      <section className="relative pt-32 pb-20 bg-abbey-900 text-white overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-b from-abbey-900/80 via-abbey-900/60 to-abbey-900/90" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-sacred-gold/70 font-sans text-sm tracking-widest uppercase mb-4">
            Passing on the Gift
          </p>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-6">
            Jersey Funding
          </h1>
          <p className="font-serif text-xl text-abbey-300 leading-relaxed">
            저지 소 한 마리가 북한 고지대 한 마을의 삶을 바꿉니다.
            <br />
            선물을 함께 전달해 주세요.
          </p>
        </div>
      </section>

      {/* ── 모금 현황 대시보드 ── */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-serif text-xl font-bold text-abbey-700 mb-8 text-center tracking-wide uppercase text-sm">
            현재 모금 현황
          </h2>
          <FundingDashboard
            raised={33000000}
            goal={200000000}
            donors={[
              {
                name: "텍사스 교회",
                amount: 23000000,
                displayAmount: "$17,000",
                label: "Passing on the Gift",
              },
              {
                name: "윤희진 회장님",
                amount: 10000000,
                label: "후원",
              },
            ]}
          />
        </div>
      </section>

      {/* ── 프로젝트 소개 ── */}
      <section className="py-20 bg-abbey-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="font-serif text-abbey-600 leading-relaxed text-lg mb-6">
            헤이퍼 인터내셔널(Heifer International)의 &ldquo;Passing on the Gift&rdquo; 원칙 — 받은 선물을 다음 사람에게 전달하라.
            삼수령 무무목장은 해발 1,000m 태백에서 이 원칙을 검증하고, 그 날이 오면 북한 고지대에 전달합니다.
          </p>
          <p className="font-serif text-abbey-600 leading-relaxed text-lg">
            초기 5두에서 시작하여 2년 후 10두, 4년 후 20두. 암송아지 자가 증식으로 복제됩니다.
            여러분의 후원이 그 첫 번째 고리입니다.
          </p>
        </div>
      </section>

      {/* ── 참여 방법 ── */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-abbey-900 mb-12 text-center">
            참여 방법을 선택해 주세요
          </h2>

          <div className="space-y-6">
            {TIERS.map((tier) => (
              <div key={tier.id} className="bg-white rounded-xl border border-abbey-100 p-8 shadow-sm">
                <div className="flex items-start gap-5">
                  <span className="text-4xl">{tier.icon}</span>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                      <h3 className="font-serif text-xl font-bold text-abbey-900">{tier.title}</h3>
                      <span className="text-2xl font-serif font-bold text-forest-700">{tier.amount}</span>
                    </div>
                    <p className="text-abbey-600 leading-relaxed mb-6">{tier.desc}</p>

                    {tier.storeLink ? (
                      <div className="flex flex-col sm:flex-row gap-3">
                        <a
                          href={tier.storeLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 bg-forest-700 text-white px-6 py-3 rounded-full font-sans text-sm font-medium hover:bg-forest-800 transition-colors"
                        >
                          무무곳간에서 구독하기 →
                        </a>
                        <a
                          href="https://pf.kakao.com/_xkSdxbn"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 bg-[#FEE500] text-[#191919] px-6 py-3 rounded-full font-sans text-sm font-medium hover:bg-[#F0D800] transition-colors"
                        >
                          카카오로 문의하기
                        </a>
                      </div>
                    ) : (
                      <div className="bg-abbey-50 rounded-lg p-5 border border-abbey-100">
                        <p className="text-sm text-abbey-500 mb-3">아래 계좌로 이체 후 카카오 채널로 알려주세요.</p>
                        <div className="font-mono text-abbey-900 font-bold text-lg tracking-wider mb-1">
                          {BANK.account} ({BANK.bank})
                        </div>
                        <div className="text-sm text-abbey-500">예금주: {BANK.holder}</div>
                        <div className="mt-4 flex flex-col sm:flex-row gap-3">
                          <a
                            href="https://pf.kakao.com/_xkSdxbn"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 bg-[#FEE500] text-[#191919] px-6 py-3 rounded-full font-sans text-sm font-medium hover:bg-[#F0D800] transition-colors"
                          >
                            입금 후 카카오로 알리기
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 계좌 정보 (공통) ── */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="bg-abbey-50 rounded-2xl p-8 sm:p-10 text-center border border-abbey-100">
            <h3 className="font-serif text-xl font-bold text-abbey-900 mb-2">후원 계좌</h3>
            <p className="text-abbey-500 text-sm mb-6">계좌이체로 직접 후원하실 수 있습니다</p>
            <div className="inline-block bg-white rounded-xl px-10 py-6 shadow-sm border border-abbey-100">
              <p className="font-mono text-3xl font-bold text-abbey-900 tracking-wider mb-1">
                {BANK.account}
              </p>
              <p className="text-abbey-500 text-sm">{BANK.bank} · 예금주: {BANK.holder}</p>
            </div>
            <p className="text-abbey-400 text-xs mt-6">
              입금 후 카카오 채널(@무무목장)로 성함과 후원 항목을 알려주시면 감사 연락을 드립니다.
            </p>
            <div className="mt-6">
              <a
                href="https://pf.kakao.com/_xkSdxbn"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#FEE500] text-[#191919] px-8 py-3 rounded-full font-sans text-sm font-medium hover:bg-[#F0D800] transition-colors"
              >
                카카오 채널 바로가기
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 무무곳간 ── */}
      <section className="py-16 bg-abbey-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h3 className="font-serif text-xl font-bold text-abbey-900 mb-3">무무곳간 스마트스토어</h3>
          <p className="text-abbey-600 text-sm leading-relaxed mb-6">
            A2 저지 목초 요거트 정기구독, 유제품 구매로도 프로젝트를 응원하실 수 있습니다.
          </p>
          <a
            href="https://smartstore.naver.com/moomooranch"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-forest-700 text-white px-8 py-3 rounded-full font-sans text-sm font-medium hover:bg-forest-800 transition-colors"
          >
            무무곳간 방문하기 →
          </a>
        </div>
      </section>

      {/* ── 돌아가기 ── */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <Link
            href="/identity/moomoo-grange"
            className="text-forest-700 font-sans text-sm hover:text-forest-900 transition-colors"
          >
            ← 무무목장 프로젝트로 돌아가기
          </Link>
        </div>
      </section>
    </>
  )
}
