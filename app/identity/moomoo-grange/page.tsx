import Link from "next/link"
import Breadcrumbs from "@/components/Breadcrumbs"
import FundingDashboard from "@/components/funding/FundingDashboard"

export const metadata = {
  title: "Passing on the Gift — 삼수령 무무목장",
  description:
    "삼수령무무목장(Samsuryeong MooMoo Ranch) — 예수원의 생태순환농업 프로젝트. 해발 1,000m 고지대에서 검증된 낙농 모델을 북한에 전달하기 위한 Passing on the Gift 프로젝트.",
  keywords: [
    "삼수령무무목장", "무무곳간", "예수원", "저지소", "Jersey",
    "A2우유", "생태순환농업", "Passing on the Gift", "북한", "태백 목장",
  ],
  alternates: { canonical: "https://jesusabbey.org/identity/moomoo-grange" },
  openGraph: {
    title: "Passing on the Gift — 삼수령 무무목장",
    description: "해발 1,000m 고지대에서 검증된 저지 낙농 모델을 북한 고지대에 전달하기 위한 프로젝트.",
    url: "https://jesusabbey.org/identity/moomoo-grange",
    siteName: "예수원 Jesus Abbey",
    images: [{
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E1%84%89%E1%85%A1%E1%86%B7%E1%84%89%E1%85%AE%E1%84%85%E1%85%A7%E1%86%BC%E1%84%86%E1%85%AE%E1%84%86%E1%85%AE%E1%84%86%E1%85%A9%E1%86%A8%E1%84%8C%E1%85%A1%E1%86%BC%201975-AohqSCL4ef6FWCOSXEJl0uZYdTTiX4.jpg",
      width: 1200, height: 630, alt: "삼수령무무목장 1975년 전경",
    }],
    locale: "ko_KR", type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Passing on the Gift — 삼수령 무무목장",
    description: "해발 1,000m 고지대에서 검증된 저지 낙농 모델을 북한 고지대에 전달하기 위한 프로젝트.",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E1%84%89%E1%85%A1%E1%86%B7%E1%84%89%E1%85%AE%E1%84%85%E1%85%A7%E1%86%BC%E1%84%86%E1%85%AE%E1%84%86%E1%85%AE%E1%84%86%E1%85%A9%E1%86%A8%E1%84%8C%E1%85%A1%E1%86%BC%201975-AohqSCL4ef6FWCOSXEJl0uZYdTTiX4.jpg"],
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://jesusabbey.org/identity/moomoo-grange#ranch",
      name: "삼수령무무목장 Samsuryeong MooMoo Ranch",
      description: "해발 1,000m 고지대에서 저지(Jersey) 소를 사육하며 생태순환농업을 실천하는 예수원의 목장입니다.",
      url: "https://jesusabbey.org/identity/moomoo-grange",
      telephone: "+82-33-552-6502",
      address: { "@type": "PostalAddress", addressLocality: "태백시", addressRegion: "강원특별자치도", addressCountry: "KR" },
      parentOrganization: { "@type": "Organization", name: "예수원 Jesus Abbey" },
    },
    {
      "@type": "Store",
      "@id": "https://smartstore.naver.com/moomooranch",
      name: "무무곳간 MooMoo Gotgan",
      description: "삼수령무무목장에서 생산한 프리미엄 A2 유제품을 판매하는 직판 브랜드입니다.",
      url: "https://smartstore.naver.com/moomooranch",
    },
  ],
}

/* ──────────────────────────────────────────
   Page
   ────────────────────────────────────────── */
export default function MooMooGrangePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Breadcrumbs items={[
        { label: "홈", path: "/" },
        { label: "정체성", path: "/identity" },
        { label: "Passing on the Gift" },
      ]} />

      {/* ═══════════════════════════════════════
          HERO
      ════════════════════════════════════════ */}
      <section className="relative pt-32 pb-20 bg-abbey-900 text-white overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E1%84%89%E1%85%A1%E1%86%B7%E1%84%89%E1%85%AE%E1%84%85%E1%85%A7%E1%86%BC%E1%84%86%E1%85%AE%E1%84%86%E1%85%AE%E1%84%86%E1%85%A9%E1%86%A8%E1%84%8C%E1%85%A1%E1%86%BC%201975-AohqSCL4ef6FWCOSXEJl0uZYdTTiX4.jpg"
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-abbey-900/60 via-abbey-900/40 to-abbey-900/80" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-sacred-gold/70 font-sans text-sm tracking-widest uppercase mb-4">
            Passing on the Gift
          </p>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-8">
            삼수령 무무목장
          </h1>
          <p className="font-serif text-xl text-abbey-300 leading-relaxed max-w-reading mx-auto">
            해발 1,000m에서 검증된 낙농 모델을
            <br />
            북한 고지대에 전달하기 위한 프로젝트.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          PHOTO STRIP
      ════════════════════════════════════════ */}
      <section className="grid grid-cols-2">
        {[
          {
            src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E1%84%89%E1%85%A1%E1%86%B7%E1%84%89%E1%85%AE%E1%84%85%E1%85%A7%E1%86%BC%E1%84%86%E1%85%AE%E1%84%86%E1%85%AE%E1%84%86%E1%85%A9%E1%86%A8%E1%84%8C%E1%85%A1%E1%86%BC%201975-AohqSCL4ef6FWCOSXEJl0uZYdTTiX4.jpg",
            alt: "삼수령무무목장 1975년 전경",
            cap: "삼수령무무목장, 1975",
          },
          {
            src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E1%84%8B%E1%85%A8%E1%84%89%E1%85%AE%E1%84%8B%E1%85%AF%E1%86%AB%20%E1%84%87%E1%85%A9%E1%86%AB%E1%84%80%E1%85%AA%E1%86%AB%20%E1%84%80%E1%85%A5%E1%86%AB%E1%84%86%E1%85%AE%E1%86%AF-wRMF9jSGrO8KoZEYSEKVYl4KCdfgXs.jpg",
            alt: "예수원 본관 건물",
            cap: "예수원 본관 건물",
          },
        ].map(({ src, alt, cap }) => (
          <div key={cap} className="relative aspect-[4/3] overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt={alt}
              className="w-full h-full object-cover brightness-[0.82] sepia-[0.12]" />
            <div className="absolute inset-0 bg-gradient-to-t from-abbey-900/60 to-transparent" />
            <p className="absolute bottom-3 left-4 font-serif italic text-xs text-white/80 tracking-wide">
              {cap}
            </p>
          </div>
        ))}
      </section>

      {/* ═══════════════════════════════════════
          CH 1 — 비전: "선물을 전달하라"
      ════════════════════════════════════════ */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex items-start gap-6 sm:gap-10">
            <span className="text-6xl sm:text-7xl font-serif font-bold text-abbey-200 shrink-0">1</span>
            <div className="space-y-4 pt-2">
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-abbey-900">
                  선물을 전달하라
                </h2>
                <p className="text-sm font-sans text-abbey-500 mt-1">Passing on the Gift</p>
              </div>
              <p className="font-serif text-abbey-600 leading-relaxed">
                헤이퍼 인터내셔널(Heifer International)은 &ldquo;받은 선물을 다음 사람에게 전달하라&rdquo;는 원칙으로 전 세계 빈곤 지역에 가축을 보급해왔습니다.
              </p>
              <p className="font-serif text-abbey-600 leading-relaxed">
                1965년, 시애틀 교회가 예수원에 보낸 젖소 두 마리도 같은 정신이었습니다. 60년이 지난 지금, 무무목장은 그 선물을 북한 고지대에 전달하기 위한 실험을 합니다.
              </p>
              <p className="font-serif text-abbey-600 leading-relaxed">
                해발 1,000m 태백 삼수령 — 남한에서 북한 고지대와 가장 유사한 환경. 이곳에서 검증된 소규모 낙농 모델은, 그 날이 오면 최소한의 수정만으로 북한에 이식할 수 있도록 설계되었습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CH 2 — 역사: 1965년부터
      ════════════════════════════════════════ */}
      <section className="py-20 sm:py-28 bg-abbey-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row lg:gap-12 items-start gap-8">
            {/* Historical Photo Grid */}
            <div className="w-full lg:w-2/5 shrink-0 grid grid-cols-2 gap-1 rounded-lg overflow-hidden">
              {[
                {
                  src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Archer%20and%20Paul%20Kingsbury%20-n9WA6HDEyDMBtUdIUQ5BuFESl1ZC7y.jpg",
                  alt: "대천덕 신부와 Kingsbury 선교사",
                },
                {
                  src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Paul%20Kingsbury-yZtqRcGl7NSTgnaKL7EiFbT6r9APq4.jpg",
                  alt: "Kingsbury 선교사 건축 현장",
                },
                {
                  src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jeremiah%20with%20cattle-gdG27aQ9d4kcvARorCJaIbTSmhOZ8d.jpg",
                  alt: "예레미야와 소 떼",
                },
                {
                  src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Paul%20Kingsbury%20at%20Grange%20with%20sheep-J6SaZkLaEii9h8UQVBZ03i3HX1Rpto.jpg",
                  alt: "Kingsbury 선교사와 삼수령 목장의 양 떼",
                },
              ].map(({ src, alt }) => (
                <div key={alt} className="relative aspect-square overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={src} alt={alt}
                    className="w-full h-full object-cover brightness-[0.88] sepia-[0.15]" />
                </div>
              ))}
            </div>

            <div className="flex items-start gap-6 sm:gap-10 flex-1">
              <span className="text-6xl sm:text-7xl font-serif font-bold text-abbey-200 shrink-0">2</span>
              <div className="space-y-4 pt-2">
                <div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-abbey-900">
                    60년의 뿌리
                  </h2>
                  <p className="text-sm font-sans text-abbey-500 mt-1">The Watershed Grange, 1965&ndash;현재</p>
                </div>
                <p className="font-serif text-abbey-600 leading-relaxed">
                  1965년 덕항산 기슭에서 시작된 예수원의 낙농. 1975년 해발 1,000m 매봉산 자락으로 확장하며 &ldquo;Jesus Abbey The Watershed Grange&rdquo;로 불렸습니다.
                </p>
                <p className="font-serif text-abbey-600 leading-relaxed">
                  헤이퍼 인터내셔널 소속 Paul A. Kingsbury(김승배) 선교사가 대천덕 신부의 목장 설립을 지원했습니다. 삼수령 무무목장은 예수원의 수도회적 유산과 한국 낙농업 역사를 함께 품고 있습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CH 3 — 리더십
      ════════════════════════════════════════ */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex items-start gap-6 sm:gap-10 mb-12">
            <span className="text-6xl sm:text-7xl font-serif font-bold text-abbey-200 shrink-0">3</span>
            <div className="space-y-4 pt-2">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-abbey-900">
                함께 이끄는 사람들
              </h2>
              <p className="font-serif text-abbey-600 leading-relaxed">
                한국, 북한, 미국 — 서로 다른 삶의 궤적이 만나 하나의 비전을 이끕니다.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-8">
            {([
              {
                name: "히스기야",
                origin: "현장 운영",
                photo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3.png-AvG53E1ea7IAcBwPlC0H0SAk65cQQ0.jpeg",
                desc: "예수원 공동체 소속 목장 책임자. 해발 1,000m 고지대에서 저지 소의 사계절을 총괄합니다.",
              },
              {
                name: "박요셉",
                origin: "모델 설계",
                photo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1.png-ahO39itOmMwjoH6DSeGYaEP9QFz9CS.jpeg",
                desc: "건국대 수의과대학 졸업. 북한 환경에 적용 가능한 융복합 농촌 복원 모델을 설계합니다.",
              },
              {
                name: "바니 스미스 선교사",
                origin: "국제 자문",
                photo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.png-5BJVRE5dFO0v4QVxBdrc5v1xRFgFdg.jpeg",
                desc: "미국 수의사. 1997~2019년 북한 현지에서 농업 선교사로 활동한 경험을 바탕으로 자문합니다.",
              },
            ] as const).map(({ name, origin, photo, desc }) => (
              <div key={name} className="text-center">
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-abbey-200 mb-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={photo} alt={name}
                    className="w-full h-full object-cover" />
                </div>
                <h3 className="font-serif font-bold text-abbey-900">{name}</h3>
                <p className="text-xs text-forest-700 tracking-wide mb-2">{origin}</p>
                <p className="text-sm text-abbey-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CH 4 — 왜 저지인가
      ════════════════════════════════════════ */}
      <section className="py-20 sm:py-28 bg-abbey-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row lg:gap-12 items-start gap-8">
            <div className="w-full lg:w-1/3 shrink-0">
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E1%84%8B%E1%85%A8%E1%84%89%E1%85%AE%E1%84%8B%E1%85%AF%E1%86%AB%E1%84%8B%E1%85%A6%E1%84%89%E1%85%A5%20%E1%84%89%E1%85%A9%E1%84%85%E1%85%B3%E1%86%AF%20%E1%84%8F%E1%85%B5%E1%84%8B%E1%85%AE%E1%86%AF%E1%84%84%E1%85%A2%20%E1%84%89%E1%85%A1%E1%84%8B%E1%85%AD%E1%84%92%E1%85%A2%E1%86%BB%E1%84%83%E1%85%A5%E1%86%AB%20%E1%84%89%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%AF%E1%84%85%E1%85%A9-vwvXqSw78a4lfrswJY2bM7NY69pwqn.jpg"
                  alt="초기 석조 사일로"
                  className="w-full h-full object-cover brightness-[0.9] sepia-[0.15]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-abbey-900/50 to-transparent" />
                <p className="absolute bottom-3 left-4 font-serif italic text-xs text-white/80">
                  초기 석조 사일로
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6 sm:gap-10 flex-1">
              <span className="text-6xl sm:text-7xl font-serif font-bold text-abbey-200 shrink-0">4</span>
              <div className="space-y-4 pt-2">
                <div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-abbey-900">
                    왜 저지(Jersey)인가
                  </h2>
                  <p className="text-sm font-sans text-abbey-500 mt-1">고지대를 위한 전략적 선택</p>
                </div>
                <p className="font-serif text-abbey-600 leading-relaxed">
                  작은 체구(400~450kg), 높은 유지방(5%), 거의 100% A2 유전형, 12~15년의 긴 경제 수명. 사료가 부족한 고지대에서 저지는 홀스타인보다 훨씬 효율적입니다.
                </p>
                <p className="font-serif text-abbey-600 leading-relaxed">
                  낮은 분만 난이도와 뛰어난 내한성. 북한 고지대의 5~7개월 혹한기를 견딜 수 있는 품종입니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CH 5 — 생태신학
      ════════════════════════════════════════ */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row lg:gap-12 items-start gap-8">
            <div className="flex items-start gap-6 sm:gap-10 flex-1">
              <span className="text-6xl sm:text-7xl font-serif font-bold text-abbey-200 shrink-0">5</span>
              <div className="space-y-4 pt-2">
                <div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-abbey-900">
                    창조질서의 회복
                  </h2>
                  <p className="text-sm font-sans text-abbey-500 mt-1">생태신학의 실천</p>
                </div>
                <p className="font-serif text-abbey-600 leading-relaxed">
                  &ldquo;소를 소답게 키운다.&rdquo; 무무목장의 철학입니다. 토양 생태계를 보전하고, 가축의 본성을 존중하며, 자연의 계절 리듬을 따릅니다.
                </p>
                <p className="font-serif text-abbey-600 leading-relaxed">
                  과잉 생산을 배제하고, 기도와 노동이 하나 되는 예수원의 전통을 잇습니다. 단기적 이익이 아닌 창조질서 안에서의 지속 가능성을 추구합니다.
                </p>
              </div>
            </div>

            <div className="w-full lg:w-2/5 shrink-0">
              <div className="relative aspect-[16/10] rounded-lg overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E1%84%8B%E1%85%A8%E1%84%89%E1%85%AE%E1%84%8B%E1%85%AF%E1%86%AB%20%E1%84%89%E1%85%A9%E1%84%80%E1%85%B5%E1%84%83%E1%85%A9%E1%84%89%E1%85%B5%E1%86%AF%E1%84%8B%E1%85%A6%E1%84%89%E1%85%A5%20%E1%84%80%E1%85%B5%E1%84%83%E1%85%A9%E1%84%92%E1%85%A1%E1%84%80%E1%85%A9%20%E1%84%8B%E1%85%B5%E1%86%BB%E1%84%82%E1%85%B3%E1%86%AB%20%E1%84%86%E1%85%AE%E1%84%86%E1%85%AE%E1%84%86%E1%85%A9%E1%86%A8%E1%84%8C%E1%85%A1%E1%86%BC%20%E1%84%8B%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%83%E1%85%B3%E1%86%AF-97xMXrY9FD5ahbUmY0bReONDeVJMEt.jpg"
                  alt="예수원 소기도실에서 기도하는 무무목장 아이들"
                  className="w-full h-full object-cover brightness-[0.84]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-abbey-900/50 to-transparent" />
                <p className="absolute bottom-3 left-4 font-serif italic text-xs text-white/80">
                  예수원 소기도실에서 기도하는 아이들
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CH 6 — 북한을 향해
      ════════════════════════════════════════ */}
      <section className="py-20 sm:py-28 bg-abbey-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex items-start gap-6 sm:gap-10 mb-12">
            <span className="text-6xl sm:text-7xl font-serif font-bold text-abbey-700 shrink-0">6</span>
            <div className="space-y-4 pt-2">
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                  태백에서 북한으로
                </h2>
                <p className="text-sm font-sans text-abbey-400 mt-1">Passing on the Gift to North Korea</p>
              </div>
              <p className="font-serif text-abbey-300 leading-relaxed">
                강원도 태백은 남한에서 북한 고지대와 가장 유사한 기후와 지형을 갖추고 있습니다. 해발 1,000m, 겨울 5~6개월 결빙, 제한적 경작지 — 삼수령에서 검증된 모든 것은 북한을 위한 것입니다.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            <div className="bg-abbey-800/50 rounded-lg p-6">
              <h3 className="font-serif font-bold text-white mb-4">북한 고지대의 현실</h3>
              <div className="space-y-3">
                {["5~7개월 이상의 혹한기", "극도로 제한된 경작지", "취약한 물류 및 유통망", "외부 농업 투입재 확보 불가"].map(item => (
                  <p key={item} className="text-sm text-abbey-300 leading-relaxed">
                    &mdash; {item}
                  </p>
                ))}
              </div>
            </div>
            <div className="bg-forest-900/30 rounded-lg p-6">
              <h3 className="font-serif font-bold text-white mb-4">무무목장 모델의 해법</h3>
              <div className="space-y-3">
                {["고가 자동화 장비 불필요", "통신 인프라 의존도 제로", "현지 사료 자급 시스템", "자연 교배 중심 번식", "도제식 기술 전수"].map(item => (
                  <p key={item} className="text-sm text-abbey-300 leading-relaxed">
                    &mdash; {item}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 bg-abbey-800/30 rounded-lg p-6 border border-abbey-700">
            <p className="font-serif text-abbey-300 leading-relaxed text-center">
              암송아지 자가 증식: 초기 <span className="text-white font-bold">5두</span> &rarr;
              2년 후 <span className="text-white font-bold">10두</span> &rarr;
              4년 후 <span className="text-white font-bold">20두</span>.
              <br />
              <span className="text-sacred-gold/80 text-sm mt-2 block">
                &ldquo;Passing on the Gift&rdquo; — 헤이퍼 인터내셔널의 원칙입니다.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          WINTER PHOTO
      ════════════════════════════════════════ */}
      <section className="relative aspect-[21/9] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jesus%20Abbey_%20%2835%29.JPG-7lwGbV3SAQPVkE0GINiaknikkox2lT.jpeg"
          alt="겨울 눈 덮인 예수원"
          className="w-full h-full object-cover brightness-[0.8]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-abbey-900/40 to-transparent" />
      </section>

      {/* ═══════════════════════════════════════
          JERSEY FUNDING — 크라우드펀딩 대시보드
      ════════════════════════════════════════ */}
      <section className="py-20 sm:py-28 bg-abbey-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-forest-700 font-sans text-sm tracking-widest uppercase mb-4">
            Jersey Funding
          </p>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-abbey-900 mb-4">
            함께 만드는 선물
          </h3>
          <p className="text-abbey-600 leading-relaxed mb-10 max-w-reading mx-auto">
            저지 소 한 마리가 북한 고지대 한 마을의 삶을 바꿀 수 있습니다.
            무무목장의 검증된 모델을 확장하기 위한 크라우드펀딩에 함께해 주세요.
          </p>

          {/* Funding Dashboard — animated client component */}
          <div className="bg-white rounded-xl shadow-sm border border-abbey-100 p-8 sm:p-10 text-left">
            <FundingDashboard
              raised={33000000}
              goal={200000000}
              donors={[
                { name: "텍사스 교회", amount: 23000000, displayAmount: "$17,000", label: "Passing on the Gift" },
                { name: "윤희진 회장님", amount: 10000000, label: "후원" },
              ]}
            />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          무무곳간 — CTA
      ════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h3 className="font-serif text-2xl font-bold text-abbey-900 mb-4">
            무무곳간
          </h3>
          <p className="text-abbey-600 leading-relaxed mb-8 max-w-reading mx-auto">
            삼수령무무목장에서 생산한 프리미엄 A2 유제품. 건강한 소비가 북한 고지대 농촌 복원 모델 구축에 동참하는 길입니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://smartstore.naver.com/moomooranch"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-forest-700 text-white px-8 py-3 rounded-full font-sans text-sm font-medium hover:bg-forest-800 transition-colors"
            >
              무무곳간 방문하기 &rarr;
            </a>
            <a
              href="https://pf.kakao.com/_xkSdxbn"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#FEE500] text-[#191919] px-8 py-3 rounded-full font-sans text-sm font-medium hover:bg-[#F0D800] transition-colors"
            >
              카카오 채널 &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          Footer Location
      ════════════════════════════════════════ */}
      <section className="py-12 bg-abbey-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="font-serif italic text-abbey-600 tracking-wide mb-1">삼수령 무무목장</p>
          <p className="text-xs text-abbey-400 tracking-widest uppercase">
            강원특별자치도 태백시 매봉산길 61 &middot; 해발 1,000m
          </p>
        </div>
      </section>
    </>
  )
}
