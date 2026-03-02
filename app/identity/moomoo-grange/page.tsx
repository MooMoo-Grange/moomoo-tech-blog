import Breadcrumbs from "@/components/Breadcrumbs"

export const metadata = {
  title: "삼수령무무목장 · 무무곳간 — MooMoo Ranch & MooMoo Gotgan",
  description:
    "삼수령무무목장(Samsuryeong MooMoo Ranch) — 예수원의 생태순환농업 프로젝트입니다. 퍼머컬처와 생태신학의 가치를 실천하며, 무무곳간(MooMoo Gotgan)을 통해 프리미엄 A2 유제품을 제공합니다.",
  keywords: [
    "삼수령무무목장",
    "무무곳간",
    "예수원",
    "저지소",
    "Jersey",
    "A2우유",
    "생태순환농업",
    "퍼머컬처",
    "생태신학",
    "태백 목장",
  ],
  alternates: {
    canonical: "https://jesusabbey.org/identity/moomoo-grange",
  },
  openGraph: {
    title: "삼수령무무목장 · 무무곳간 — MooMoo Ranch & Gotgan",
    description:
      "해발 1,000m 고지대에서 저지(Jersey) 소를 사육하며 생태순환농업과 생태신학을 실천하는 예수원의 목장입니다. 무무곳간에서 건강한 유제품을 만나보실 수 있습니다.",
    url: "https://jesusabbey.org/identity/moomoo-grange",
    siteName: "예수원 Jesus Abbey",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E1%84%89%E1%85%A1%E1%86%B7%E1%84%89%E1%85%AE%E1%84%85%E1%85%A7%E1%86%BC%E1%84%86%E1%85%AE%E1%84%86%E1%85%AE%E1%84%86%E1%85%A9%E1%86%A8%E1%84%8C%E1%85%A1%E1%86%BC%201975-AohqSCL4ef6FWCOSXEJl0uZYdTTiX4.jpg",
        width: 1200,
        height: 630,
        alt: "삼수령무무목장 1975년 전경",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "삼수령무무목장 · 무무곳간 — MooMoo Ranch & Gotgan",
    description:
      "해발 1,000m 고지대에서 저지(Jersey) 소를 사육하며 생태순환농업과 생태신학을 실천하는 예수원의 목장입니다.",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E1%84%89%E1%85%A1%E1%86%B7%E1%84%89%E1%85%AE%E1%84%85%E1%85%A7%E1%86%BC%E1%84%86%E1%85%AE%E1%84%86%E1%85%AE%E1%84%86%E1%85%A9%E1%86%A8%E1%84%8C%E1%85%A1%E1%86%BC%201975-AohqSCL4ef6FWCOSXEJl0uZYdTTiX4.jpg",
    ],
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://jesusabbey.org/identity/moomoo-grange#ranch",
      name: "삼수령무무목장 Samsuryeong MooMoo Ranch",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E1%84%89%E1%85%A1%E1%86%B7%E1%84%89%E1%85%AE%E1%84%85%E1%85%A7%E1%86%BC%E1%84%86%E1%85%AE%E1%84%86%E1%85%AE%E1%84%86%E1%85%A9%E1%86%A8%E1%84%8C%E1%85%A1%E1%86%BC%201975-AohqSCL4ef6FWCOSXEJl0uZYdTTiX4.jpg",
      description:
        "해발 1,000m 고지대에서 저지(Jersey) 소를 사육하며 생태순환농업(Ecological Circular Agriculture)과 퍼머컬처(Permaculture)를 실천하는 예수원의 목장입니다. 생태신학의 가치를 농업 현장에 구현합니다.",
      url: "https://jesusabbey.org/identity/moomoo-grange",
      telephone: "+82-33-552-6502", // 예수원 또는 목장의 실제 대표 번호로 수정 권장
      address: {
        "@type": "PostalAddress",
        addressLocality: "태백시",
        addressRegion: "강원특별자치도",
        addressCountry: "KR",
      },
      parentOrganization: {
        "@type": "Organization",
        name: "예수원 Jesus Abbey",
      },
    },
    {
      "@type": "Store",
      "@id": "https://smartstore.naver.com/moomooranch",
      name: "무무곳간 MooMoo Gotgan",
      alternateName: ["Mumu Gotgan", "무무곳간", "MooMoo Gotgan"],
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E1%84%89%E1%85%A1%E1%86%B7%E1%84%89%E1%85%AE%E1%84%85%E1%85%A7%E1%86%BC%E1%84%86%E1%85%AE%E1%84%86%E1%85%AE%E1%84%86%E1%85%A9%E1%86%A8%E1%84%8C%E1%85%A1%E1%86%BC%201975-AohqSCL4ef6FWCOSXEJl0uZYdTTiX4.jpg",
      description:
        "삼수령무무목장에서 생산한 프리미엄 A2 유제품을 판매하는 직판 브랜드입니다. 생태순환농업과 생태신학의 가치를 담은 지속 가능한 먹거리를 제공합니다.",
      url: "https://smartstore.naver.com/moomooranch",
      telephone: "+82-10-0000-0000", // 스마트스토어 고객센터 번호로 수정 권장
      priceRange: "$$",
      brand: {
        "@type": "Brand",
        name: "무무곳간 MooMoo Gotgan",
      },
      isRelatedTo: {
        "@type": "LocalBusiness",
        "@id": "https://jesusabbey.org/identity/moomoo-grange#ranch",
      },
    },
  ],
}

export default function MooMooGrangePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Breadcrumbs items={[
        { label: "홈", path: "/" },
        { label: "정체성", path: "/identity" },
        { label: "무무목장 프로젝트" },
      ]} />
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-serif font-bold mb-3">삼수령 무무목장 프로젝트</h1>
          <p className="text-lg text-abbey-500 mb-2">Samsuryeong MooMoo Ranch</p>
          <p className="text-sm text-abbey-400 mb-10">고지대 농촌 복원을 위한 전략적 테스트베드</p>

          {/* Hero Photo Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E1%84%89%E1%85%A1%E1%86%B7%E1%84%89%E1%85%AE%E1%84%85%E1%85%A7%E1%86%BC%E1%84%86%E1%85%AE%E1%84%86%E1%85%AE%E1%84%86%E1%85%A9%E1%86%A8%E1%84%8C%E1%85%A1%E1%86%BC%201975-AohqSCL4ef6FWCOSXEJl0uZYdTTiX4.jpg"
                alt="삼수령무무목장 1975년 전경 - 매봉산 자락 해발 1,000m 고지대에 자리잡은 초기 목장 건물"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <p className="text-white text-sm font-medium">삼수령무무목장, 1975년</p>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E1%84%8B%E1%85%A8%E1%84%89%E1%85%AE%E1%84%8B%E1%85%AF%E1%86%AB%20%E1%84%87%E1%85%A9%E1%86%AB%E1%84%80%E1%85%AA%E1%86%AB%20%E1%84%80%E1%85%A5%E1%86%AB%E1%84%86%E1%85%AE%E1%86%AF-wRMF9jSGrO8KoZEYSEKVYl4KCdfgXs.jpg"
                alt="예수원 본관 건물 - 돌로 지어진 전통적인 석조 건물"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <p className="text-white text-sm font-medium">예수원 본관 건물</p>
              </div>
            </div>
          </div>

          {/* 1. 프로젝트 정의 */}
          <div className="bg-forest-50 rounded-lg p-8 border border-forest-200 mb-10">
            <h2 className="text-xl font-serif font-bold text-forest-800 mb-4">1. 프로젝트 정의</h2>
            <p className="text-forest-700 leading-relaxed mb-4">
              삼수령 무무목장은 단순한 원유 생산 시설을 넘어, 고지대 농촌 자립 모델을 검증하기 위한 핵심 실험 플랫폼 역할을 수행합니다.
            </p>
            <p className="text-forest-700 leading-relaxed mb-4">
              본 프로젝트의 목표는 해발 800~1,200m의 한반도 고지대 환경에서 재생농업 기반의 소규모 낙농 모델이 경제적·생태적으로 자립할 수 있는지 실증하는 것입니다.
            </p>
            <p className="text-forest-700 leading-relaxed">
              강원도 태백 해발 1,000m 지역은 북한 고지대와 가장 유사한 남한 내 환경입니다. 이곳에서 검증을 마친 시스템은 향후 최소한의 수정만으로 북한 지역에 신속하게 이전 및 적용할 수 있도록 설계되었습니다.
            </p>
          </div>

          <div className="space-y-10">

            {/* 2. 역사적 기반 */}
            <div>
              <h2 className="text-xl font-serif font-bold mb-4">2. 역사적 기반</h2>
              <p className="text-abbey-700 leading-relaxed mb-4">
                무무목장은 1965년에 시작된 예수원의 낙농 전통을 계승합니다. 초기 예수원은 덕항산 기슭에서 낙농업을 시작했으나 공간 확장의 필요성을 느꼈습니다. 이에 1975년, 약 10km 떨어진 해발 1,000m 매봉산 자락에 부지를 확보하여 고지대 낙농 실험을 본격화했습니다. 당시 목장의 공식 명칭은 &ldquo;Jesus Abbey The Watershed Grange&rdquo;였습니다.
              </p>
              <p className="text-abbey-700 leading-relaxed mb-4">
                초기 설계의 핵심 철학은 다음과 같습니다.
              </p>
              <ul className="space-y-2 text-abbey-700 mb-4">
                <li className="flex gap-3 items-start">
                  <span className="text-forest-600 shrink-0 mt-0.5">&#x2022;</span>
                  <span>기도와 노동의 유기적 통합</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-forest-600 shrink-0 mt-0.5">&#x2022;</span>
                  <span>공동체 기반의 자립 경제 구축</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-forest-600 shrink-0 mt-0.5">&#x2022;</span>
                  <span>고지대 환경에 최적화된 소규모 낙농 모델 개발</span>
                </li>
              </ul>
              <p className="text-abbey-700 leading-relaxed mb-6">
                이는 단순한 상업적 확장이 아닌, 지속 가능한 운영 구조를 확립하기 위한 선구적인 실험이었습니다.
              </p>
              <p className="text-abbey-700 leading-relaxed">
                특히 1975년부터 1982년까지의 형성기가 중요합니다. 당시 '헤이퍼 인터내셔널(Heifer International)' 소속으로 20여 년간 한국 축산 발전을 이끈 Paul A. Kingsbury(한국명: 김승배) 선교사가 대천덕 신부의 목장 설립을 적극적으로 지원했습니다. 따라서 삼수령 무무목장은 예수원의 수도회적 유산과 더불어 한국 낙농업 발전의 역사적 발자취를 고스란히 보존하고 있습니다.
              </p>

              {/* Historical Photo Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-8">
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Archer%20and%20Paul%20Kingsbury%20-n9WA6HDEyDMBtUdIUQ5BuFESl1ZC7y.jpg"
                    alt="대천덕 신부와 Paul A. Kingsbury(한국명: 김승배) 선교사가 건축 현장에서 대화하는 모습"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                    <p className="text-white text-xs">대천덕 신부와 Paul A. Kingsbury(한국명: 김승배) 선교사</p>
                  </div>
                </div>
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Paul%20Kingsbury-yZtqRcGl7NSTgnaKL7EiFbT6r9APq4.jpg"
                    alt="Paul A. Kingsbury(한국명: 김승배) 선교사가 목재를 나르며 건축 작업을 하는 모습"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                    <p className="text-white text-xs">Paul A. Kingsbury(한국명: 김승배) 선교사, 건축 현장에서</p>
                  </div>
                </div>
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jeremiah%20with%20cattle-gdG27aQ9d4kcvARorCJaIbTSmhOZ8d.jpg"
                    alt="예수원 초기 목장에서 소를 돌보는 예레미야의 모습"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                    <p className="text-white text-xs">예레미야와 소 떼</p>
                  </div>
                </div>
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden col-span-2">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Paul%20Kingsbury%20at%20Grange%20with%20sheep-J6SaZkLaEii9h8UQVBZ03i3HX1Rpto.jpg"
                    alt="Paul A. Kingsbury(한국명: 김승배) 선교사와 삼수령 목장의 양 떼"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                    <p className="text-white text-xs">Paul A. Kingsbury(한국명: 김승배) 선교사와 삼수령 목장의 양 떼</p>
                  </div>
                </div>
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jesus%20Abbey_%20%2835%29.JPG-7lwGbV3SAQPVkE0GINiaknikkox2lT.jpeg"
                    alt="겨울 눈 덮인 예수원 석조 건물 풍경"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                    <p className="text-white text-xs">예수원의 겨울 풍경</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-abbey-200" />

            {/* 3. 리더십 구조 */}
            <div>
              <h2 className="text-xl font-serif font-bold mb-4">3. 리더십 구조</h2>
              <p className="text-abbey-700 leading-relaxed mb-4">
                무무목장은 남한, 북한, 미국 출신 전문가로 구성된 3개국 협력 구조로 운영됩니다. 이는 향후 북한 환경에 모델을 적용하기 위해 필수적인 전략 자산입니다.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                <div className="bg-white rounded-lg p-6 border border-abbey-200">
                  <h3 className="font-serif font-bold mb-1">히스기야 (서수철)</h3>
                  <p className="text-xs text-forest-600 mb-3">남한</p>
                  <p className="text-sm text-abbey-700 leading-relaxed">
                    현장 운영 및 지역 기반 관리를 담당합니다. 예수원 공동체 소속의 목장 책임자로서 해발 1,000m 고지대 목초지와 저지(Jersey) 소 떼의 사계절 관리를 총괄합니다.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 border border-abbey-200">
                  <h3 className="font-serif font-bold mb-1">박요셉 (Joseph Park)</h3>
                  <p className="text-xs text-forest-600 mb-3">북한 (함경북도 출신)</p>
                  <p className="text-sm text-abbey-700 leading-relaxed">
                    북한 환경 분석 및 현지 적용 모델 설계를 담당합니다. 건국대학교 수의과대학을 졸업하고 탈북민의 자립을 돕는 사회적 기업 (주)요벨을 설립·운영했으며, 현재 삼수령무무목장에서 융복합산업(축산+관광)기반의 농촌 복원 모델을 통해 창조질서 회복의 새로운 길을 개척하고 있습니다.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 border border-abbey-200">
                  <h3 className="font-serif font-bold mb-1">바니 스미스 박사 (Dr. Barney Smith)</h3>
                  <p className="text-xs text-forest-600 mb-3">미국</p>
                  <p className="text-sm text-abbey-700 leading-relaxed">
                    국제 개발 및 특수 환경 대응 전략을 자문합니다. 미국 수의사 자격을 보유하고 있으며, 1997년부터 2019년까지 북한 현지에서 선교사이자 농업 실무자로 활동한 경험을 바탕으로 기술적 통찰을 제공합니다.
                  </p>
                </div>
              </div>
              <p className="text-sm text-abbey-600">
                이러한 인력 구성은 북한이 해외 인도적 지원이나 대한민국의 인도적 지원을 받아들일 때 즉각적으로 투입할 수 있는 실무 역량을 보장합니다.
              </p>
            </div>

            <div className="border-t border-abbey-200" />

            {/* 4. 설계 원칙 */}
            <div>
              <h2 className="text-xl font-serif font-bold mb-4">4. 설계 원칙</h2>
              <p className="text-abbey-700 leading-relaxed mb-6">
                무무목장은 다음 두 가지 선진 모델의 장점을 통합하여 고지대에 특화된 소규모 프리미엄 낙농 시스템을 구축했습니다.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6 border border-abbey-200">
                  <h3 className="font-serif font-bold mb-3">1) 폴리페이스(Polyface) 농장 모델 적용</h3>
                  <ul className="space-y-2 text-sm text-abbey-700">
                    {[
                      "관리형 방목",
                      "다종 순환 시스템",
                      "토양 생물학 중심 설계",
                      "직거래 기반 유통 체계",
                      "산업형 공급망 의존도 최소화",
                    ].map((item) => (
                      <li key={item} className="flex gap-3 items-start">
                        <span className="text-forest-600 shrink-0 mt-0.5">&#x2022;</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-6 border border-abbey-200">
                  <h3 className="font-serif font-bold mb-3">2) 스위스 고지대 낙농 모델 적용</h3>
                  <ul className="space-y-2 text-sm text-abbey-700">
                    {[
                      "고지대 기후 적응형 생산 방식",
                      "소규모 고부가가치 창출 전략",
                      "현장 가공 중심의 운영 구조",
                      "관광·체험 연계형 통합 모델",
                      "산지 생태계 보전 우선",
                    ].map((item) => (
                      <li key={item} className="flex gap-3 items-start">
                        <span className="text-forest-600 shrink-0 mt-0.5">&#x2022;</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-t border-abbey-200" />

            {/* 5. 6단계 통합 가치사슬 */}
            <div>
              <h2 className="text-xl font-serif font-bold mb-4">5. 6단계 통합 가치사슬</h2>
              <p className="text-abbey-700 leading-relaxed mb-6">
                단순 원유 생산을 넘어 6단계의 가치사슬을 내부에 통합했습니다. 이를 통해 외부 의존도를 낮추고 수익 구조를 다각화하여, 고지대 환경에서도 지속 가능한 자립형 비즈니스 모델을 확보합니다.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { stage: "1", title: "생산", desc: "저지(Jersey) A2 낙농 및 목초 관리" },
                  { stage: "2", title: "가공", desc: "요거트, 치즈, 버터, 젤라또 제조" },
                  { stage: "3", title: "식음", desc: "자체 카페 및 레스토랑 운영" },
                  { stage: "4", title: "관광", desc: "생태 체험 및 치유 프로그램 제공" },
                  { stage: "5", title: "교육", desc: "농업 훈련 및 견습 과정 운영" },
                  { stage: "6", title: "직판", desc: "정기 구독, B2B 납품, 라이브 커머스" },
                ].map(({ stage, title, desc }) => (
                  <div key={stage} className="bg-white rounded-lg p-5 border border-abbey-200">
                    <span className="text-xs font-bold text-forest-600">{stage}단계</span>
                    <h3 className="font-serif font-bold mt-1 mb-2">{title}</h3>
                    <p className="text-sm text-abbey-600">{desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-abbey-200" />

            {/* 6. Jersey 품종 선택의 전략성 */}
            <div>
              <h2 className="text-xl font-serif font-bold mb-4">6. 저지(Jersey) 품종 선택의 전략성</h2>
              <div className="flex flex-col md:flex-row gap-6 mb-6">
                <div className="md:flex-1">
                  <p className="text-abbey-700 leading-relaxed">
                    저지(Jersey) 품종의 도입은 고지대 환경의 적합성과 운영 효율성을 극대화하기 위한 전략적 선택입니다. 사료 수급이 제한적인 고지대의 장기 운영 조건에서 저지 품종은 탁월한 경제성과 안정적인 생산성을 보장합니다.
                  </p>
                </div>
                <div className="relative w-full md:w-48 aspect-[3/4] rounded-lg overflow-hidden shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E1%84%8B%E1%85%A8%E1%84%89%E1%85%AE%E1%84%8B%E1%85%AF%E1%86%AB%E1%84%8B%E1%85%A6%E1%84%89%E1%85%A5%20%E1%84%89%E1%85%A9%E1%84%85%E1%85%B3%E1%86%AF%20%E1%84%8F%E1%85%B5%E1%84%8B%E1%85%AE%E1%86%AF%E1%84%84%E1%85%A2%20%E1%84%89%E1%85%A1%E1%84%8B%E1%85%AD%E1%84%92%E1%85%A2%E1%86%BB%E1%84%83%E1%85%A5%E1%86%AB%20%E1%84%89%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%AF%E1%84%85%E1%85%A9-vwvXqSw78a4lfrswJY2bM7NY69pwqn.jpg"
                    alt="예수원에서 소를 키울 때 사용했던 석조 사일로"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                    <p className="text-white text-xs">초기 석조 사일로</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg border border-abbey-200 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-abbey-100">
                    <tr>
                      <th className="px-4 py-3 text-left font-medium text-abbey-600">비교 항목</th>
                      <th className="px-4 py-3 text-left font-medium text-abbey-600">저지 (Jersey)</th>
                      <th className="px-4 py-3 text-left font-medium text-abbey-600">홀스타인 (Holstein)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-abbey-200">
                    {[
                      ["평균 체중", "400~450kg", "600~700kg"],
                      ["유지방 함량", "4.8~5.2%", "3.5~3.7%"],
                      ["사료 효율성", "우수", "보통"],
                      ["A2 유전형 비율", "거의 100%", "혼합형 (A1/A2)"],
                      ["내한성 및 환경 적응력", "우수", "보통"],
                      ["분만 난이도", "낮음", "상대적으로 높음"],
                      ["경제 수명 (산유 기간)", "12~15년", "5~7년"],
                    ].map(([param, jersey, holstein]) => (
                      <tr key={param}>
                        <td className="px-4 py-2 font-medium text-abbey-700">{param}</td>
                        <td className="px-4 py-2 text-forest-700 font-medium">{jersey}</td>
                        <td className="px-4 py-2 text-abbey-500">{holstein}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="border-t border-abbey-200" />

            {/* 7. 북한 적용 가능성 */}
            <div>
              <h2 className="text-xl font-serif font-bold mb-4">7. 북한 환경 적용 모델</h2>
              <p className="text-abbey-700 leading-relaxed mb-6">
                강원도 태백은 남한 내에서 북한 고지대와 가장 유사한 기후와 지형 조건을 갖추고 있습니다. 따라서 삼수령에서 검증된 낙농 시스템은 향후 북한 고지대 지역에 원활하게 적용될 수 있습니다.
              </p>
              <div className="bg-white rounded-lg border border-abbey-200 overflow-x-auto mb-8">
                <table className="w-full text-sm">
                  <thead className="bg-abbey-100">
                    <tr>
                      <th className="px-4 py-3 text-left font-medium text-abbey-600">환경 변수</th>
                      <th className="px-4 py-3 text-left font-medium text-abbey-600">태백 삼수령 일대</th>
                      <th className="px-4 py-3 text-left font-medium text-abbey-600">북한 고지대 평균</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-abbey-200">
                    {[
                      ["해발 고도", "해발 1,000m", "800~1,200m"],
                      ["겨울철 결빙 기간", "5~6개월", "5~7개월"],
                      ["1월 평균 기온", "-8°C ~ -12°C", "-10°C ~ -20°C"],
                      ["경작 가능 토지 면적", "매우 제한적", "매우 제한적"],
                      ["사료 공급 방식", "자체 생산 및 일부 외부 조달", "전량 자체 조달 필수"],
                      ["물류 인프라", "산간 원격지, 접근성 제한", "극도로 제약됨"],
                    ].map(([param, taebaek, dprk]) => (
                      <tr key={param}>
                        <td className="px-4 py-2 font-medium text-abbey-700">{param}</td>
                        <td className="px-4 py-2 text-abbey-600">{taebaek}</td>
                        <td className="px-4 py-2 text-abbey-600">{dprk}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white rounded-lg p-6 border border-abbey-200">
                  <h3 className="font-serif font-bold mb-3">북한 고지대 환경의 주요 제약</h3>
                  <ul className="space-y-2 text-sm text-abbey-700">
                    {[
                      "5~7개월 이상 지속되는 혹한기",
                      "제한된 경작지 및 식량 자원",
                      "취약한 물류 및 유통망",
                      "외부 농업 투입재(비료, 사료 등) 확보의 어려움",
                    ].map((item) => (
                      <li key={item} className="flex gap-3 items-start">
                        <span className="text-abbey-400 shrink-0 mt-0.5">&#x2022;</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-forest-50 rounded-lg p-6 border border-forest-200">
                  <h3 className="font-serif font-bold text-forest-800 mb-3">무무목장 모델의 현지 적합성</h3>
                  <ul className="space-y-2 text-sm text-forest-700">
                    {[
                      "고가 자동화 장비 의존도 배제",
                      "통신 인프라(인터넷 등) 불필요",
                      "현지 사료 자급자족 시스템 구축",
                      "자연 교배 중심의 안정적인 번식 구조",
                      "도제식 현장 교육을 통한 기술 전수 용이성",
                    ].map((item) => (
                      <li key={item} className="flex gap-3 items-start">
                        <span className="shrink-0 mt-0.5">&#x2022;</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="bg-abbey-100/50 rounded-lg p-6 border border-abbey-200">
                <p className="text-sm text-abbey-700 leading-relaxed">
                  헤이퍼 인터내셔널(Heifer International)의 &ldquo;선물 전달(Passing on the Gift)&rdquo; 원칙을 차용하여 암송아지 자가 증식 구조를 설계했습니다. 초기 5두에서 시작하여 2년 후 10두, 4년 후 20두로 점진적이고 안정적인 확장이 가능합니다.
                </p>
              </div>
            </div>

            <div className="border-t border-abbey-200" />

            {/* 8. 생태신학 */}
            <div>
              <h2 className="text-xl font-serif font-bold mb-4">8. 생태신학</h2>
              <div className="relative aspect-[16/9] rounded-lg overflow-hidden mb-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E1%84%8B%E1%85%A8%E1%84%89%E1%85%AE%E1%84%8B%E1%85%AF%E1%86%AB%20%E1%84%89%E1%85%A9%E1%84%80%E1%85%B5%E1%84%83%E1%85%A9%E1%84%89%E1%85%B5%E1%86%AF%E1%84%8B%E1%85%A6%E1%84%89%E1%85%A5%20%E1%84%80%E1%85%B5%E1%84%83%E1%85%A9%E1%84%92%E1%85%A1%E1%84%80%E1%85%A9%20%E1%84%8B%E1%85%B5%E1%86%BB%E1%84%82%E1%85%B3%E1%86%AB%20%E1%84%86%E1%85%AE%E1%84%86%E1%85%AE%E1%84%86%E1%85%A9%E1%86%A8%E1%84%8C%E1%85%A1%E1%86%BC%20%E1%84%8B%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%83%E1%85%B3%E1%86%AF-97xMXrY9FD5ahbUmY0bReONDeVJMEt.jpg"
                  alt="예수원 소기도실에서 기���하고 있는 무무목장 아이들"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <p className="text-white text-sm">예수원 소기도실에서 기도하고 있는 무무목장 아이들</p>
                </div>
              </div>
              <p className="text-abbey-700 leading-relaxed mb-4">
                무무목장은 단순한 생산성 향상 외에도 생태계 보전과 창조질서 회복을 위한 다음의 운영 원칙을 철저히 준수합니다.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                {[
                  "토양 생태계 보전 우선",
                  "가축의 본성 및 생명권 존중",
                  "자연과 계절의 순환 리듬 준수",
                  "환경을 훼손하는 과잉 생산 배제",
                ].map((principle) => (
                  <div key={principle} className="bg-white rounded-lg p-4 border border-abbey-200 flex items-center gap-3">
                    <span className="text-forest-600">&#x2022;</span>
                    <span className="text-sm text-abbey-700 font-medium">{principle}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-abbey-600">
                이러한 철학은 단기적 이익을 넘어 장기적인 생태적, 경제적 지속 가능성을 확보하는 핵심 기준입니다.
              </p>
            </div>

            <div className="border-t border-abbey-200" />

            {/* 9. 전략적 의미 */}
            <div>
              <h2 className="text-xl font-serif font-bold mb-4">9. 전략적 기대 효과</h2>
              <p className="text-abbey-700 leading-relaxed mb-6">
                삼수령 무무목장은 소규모로 운영되지만, 그 전략적 목적과 기대 효과는 명확합니다.
              </p>
              <div className="bg-forest-50 rounded-lg p-6 border border-forest-200 mb-6">
                <ul className="space-y-3 text-forest-700">
                  <li className="flex gap-3 items-start">
                    <span className="text-forest-600 shrink-0 mt-0.5 font-bold">&#x2022;</span>
                    <span>고지대 농촌 자립 모델의 실증 및 최적화</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-forest-600 shrink-0 mt-0.5 font-bold">&#x2022;</span>
                    <span>북한이 해외 인도적 지원이나 대한민국의 인도적 지원을 받아들일 때 즉시 복제 가능한 축산 인프라 매뉴얼 확보</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-forest-600 shrink-0 mt-0.5 font-bold">&#x2022;</span>
                    <span>생산(재생농업)·가공·관광·교육이 결합된 통합 비즈니스 모델 검증</span>
                  </li>
                </ul>
              </div>
              <p className="text-abbey-700 leading-relaxed font-medium">
                본 프로젝트는 단순한 농장 운영을 넘어, 한반도 고지대 농촌 생태계 회복과 경제적 자립을 위한 핵심 테스트베드(Testbed) 역할을 수행할 것입니다.
              </p>
            </div>

            <div className="border-t border-abbey-200" />

            {/* 무무곳간 — 브랜드 섹션 */}
            <div>
              <h2 className="text-xl font-serif font-bold mb-4">무무곳간 (MooMoo Gotgan)</h2>
              <p className="text-abbey-700 leading-relaxed mb-4">
                무무곳간은 삼수령무무목장에서 생산한 프리미엄 A2 유제품을 소비자에게 직접 제공하는 브랜드입니다. 단순한 유통 채널을 넘어, 창조질서 회복의 가치와 생태순환농업의 결실을 전달하는 플랫폼 역할을 수행합니다.
              </p>
              <p className="text-abbey-700 leading-relaxed mb-6">
                퍼머컬처 원리로 사육한 저지(Jersey) 소의 원유를 활용하여 최고 품질의 요거트, 치즈, 버터 등을 생산합니다. 이를 통해 &ldquo;소를 소답게 키운다&rdquo;는 예수원 공동체의 목축 철학을 실현하며, 소비자는 건강한 유제품을 소비함으로써 북한 고지대 농촌 복원 모델 구축이라는 사회적 가치 실현에 동참할 수 있습니다.
              </p>
              <div className="bg-forest-50 rounded-lg p-6 border border-forest-200 flex flex-col sm:flex-row items-center gap-4">
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="font-serif font-bold text-forest-800 mb-1">무무곳간 스토어</h3>
                  <p className="text-sm text-forest-600">삼수령무무목장의 신선한 유제품을 네이버 스마트스토어에서 직접 만나보실 수 있습니다.</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                  <a
                    href="https://smartstore.naver.com/moomooranch"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-forest-700 text-white text-sm font-medium rounded-lg hover:bg-forest-800 transition-colors min-h-[44px]"
                  >
                    <span>무무곳간 방문하기</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </a>
                  <a
                    href="https://pf.kakao.com/_xkSdxbn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#FEE500] text-[#191919] text-sm font-medium rounded-lg hover:bg-[#FDD835] transition-colors min-h-[44px]"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 3C6.477 3 2 6.463 2 10.691c0 2.722 1.804 5.108 4.521 6.46-.177.663-.641 2.407-.734 2.78-.112.45.166.444.348.323.143-.095 2.275-1.547 3.193-2.17.872.13 1.768.198 2.672.198 5.523 0 10-3.463 10-7.691C22 6.463 17.523 3 12 3z"/>
                    </svg>
                    <span>카카오 채널</span>
                  </a>
                </div>
              </div>
            </div>

            {/* 위치 정보 */}
            <div className="bg-abbey-100/50 rounded-lg p-6 border border-abbey-200 text-center">
              <p className="text-sm font-medium text-abbey-700">삼수령 무무목장</p>
              <p className="text-sm text-abbey-500 mt-1">강원특별자치도 태백시 &mdash; 해발 1,000m</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
