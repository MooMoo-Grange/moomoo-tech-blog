import Breadcrumbs from "@/components/Breadcrumbs"

export const metadata = {
  title: "삼수령무무목장 · 무무곳간 — MooMoo Ranch & MooMoo Gotgan",
  description:
    "삼수령무무목장(Samsuryeong MooMoo Ranch) — 예수원의 생태순환농업 프로젝트. 퍼머컬쳐와 창조질서회복의 가치를 실천하며, 무무곳간(MooMoo Gotgan)을 통해 프리미엄 A2 유제품을 제공합니다.",
  openGraph: {
    title: "삼수령무무목장 · 무무곳간 — MooMoo Ranch & Gotgan",
    description:
      "해발 1,000m 고지대에서 Jersey 소를 키우며 생태순환농업과 창조질서회복을 실천하는 예수원의 목장. 무무곳간에서 건강한 유제품을 만나보세요.",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://jesusabbey.org/identity/moomoo-grange#ranch",
      name: "삼수령무무목장 Samsuryeong MooMoo Ranch",
      description:
        "해발 1,000m 고지대에서 Jersey 소를 키우며 생태순환농업(Ecological Circular Agriculture)과 퍼머컬쳐(Permaculture)를 실천하는 예수원의 목장. 창조질서회복(Restoration of Creation Order)의 가치를 농업으로 구현합니다.",
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
      description:
        "삼수령무무목장에서 생산한 프리미엄 A2 유제품 직판 브랜드. 생태순환농업과 창조질서회복의 가치를 담은 지속 가능한 먹거리를 제공합니다.",
      url: "https://smartstore.naver.com/moomooranch",
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
          <p className="text-sm text-abbey-400 mb-10">고지대 농촌 복원을 위한 전략적 프로토타입</p>

          {/* 1. 프로젝트 정의 */}
          <div className="bg-forest-50 rounded-lg p-8 border border-forest-200 mb-10">
            <h2 className="text-xl font-serif font-bold text-forest-800 mb-4">1. 프로젝트 정의</h2>
            <p className="text-forest-700 leading-relaxed mb-4">
              삼수령 무무목장은 단순한 낙농장이 아닙니다.
              이곳은 고지대 농촌 자립 모델을 검증하기 위한 실험 플랫폼입니다.
            </p>
            <p className="text-forest-700 leading-relaxed mb-4">
              목표는 명확합니다. 해발 800~1,200m의 한반도 고지대 조건에서
              재생농업 기반 소규모 낙농 모델이 경제적·생태적으로 자립 가능한지 검증하는 것입니다.
            </p>
            <p className="text-forest-700 leading-relaxed">
              태백 해발 1,000m는 북한 고지대와 가장 유사한 남한의 환경입니다.
              이곳에서 검증된 시스템은 향후 최소 수정만으로
              북한 지역에 이전할 수 있도록 설계되었습니다.
            </p>
          </div>

          <div className="space-y-10">

            {/* 2. 역사적 기반 */}
            <div>
              <h2 className="text-xl font-serif font-bold mb-4">2. 역사적 기반</h2>
              <p className="text-abbey-700 leading-relaxed mb-4">
                무무목장은 1965년 시작된 예수원 낙농 전통을 계승합니다.
                예수원은 덕항산 기슭에서 낙농업과 함께 시작되었으나 공간이 협소하여,
                10년 후인 1975년 예수원에서 약 10km 떨어진
                해발 1,000m 매봉산 자락에 부지를 확보하며 고지대 낙농 실험이 본격화되었습니다.
                당시 첫 목장 이름은 &ldquo;Jesus Abbey The Watershed Grange&rdquo;였습니다.
              </p>
              <p className="text-abbey-700 leading-relaxed mb-4">
                초기 설계는 다음 철학 위에 세워졌습니다:
              </p>
              <ul className="space-y-2 text-abbey-700 mb-4">
                <li className="flex gap-3 items-start">
                  <span className="text-forest-600 shrink-0 mt-0.5">&#x2022;</span>
                  <span>기도와 노동의 통합</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-forest-600 shrink-0 mt-0.5">&#x2022;</span>
                  <span>공동체 기반 자립 경제</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-forest-600 shrink-0 mt-0.5">&#x2022;</span>
                  <span>고지대 환경에 적합한 소규모 낙농</span>
                </li>
              </ul>
              <p className="text-abbey-700 leading-relaxed mb-6">
                이는 상업적 확장이 아닌, 지속 가능한 구조 실험이었습니다.
              </p>
              <p className="text-abbey-700 leading-relaxed">
                결정적인 형성기인 1975년부터 1982년까지,
                폴 킹스버리(Paul A. Kingsbury)는 Heifer International을 통해
                한국에서 20여 년간 선구적인 축산 개발 사역을 마친 후,
                한국에서의 마지막 6년을 대천덕 신부의 목장 설립을 돕는 데 헌신했습니다.
                삼수령 무무목장은 예수원의 수도회적 유산뿐 아니라,
                한국 낙농 발전의 숨은 아버지 중 한 분의 살아 있는 발자취를 함께 간직하고 있습니다.
              </p>
            </div>

            <div className="border-t border-abbey-200" />

            {/* 3. 리더십 구조 */}
            <div>
              <h2 className="text-xl font-serif font-bold mb-4">3. 리더십 구조</h2>
              <p className="text-abbey-700 leading-relaxed mb-4">
                무무목장은 남한·북한·미국 출신 인력으로 구성된 3개국 협력 구조를 가지고 있습니다.
                이 구조는 단순한 상징이 아니라 전략적 자산입니다.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                <div className="bg-white rounded-lg p-6 border border-abbey-200">
                  <h3 className="font-serif font-bold mb-1">헤세키아 (서수철)</h3>
                  <p className="text-xs text-forest-600 mb-3">남한</p>
                  <p className="text-sm text-abbey-700 leading-relaxed">
                    현장 운영 및 지역 기반 관리. 예수원 공동체 안에서 목장 책임자로서
                    해발 1,000m 고지대 목초지와 저지 소떼를 사계절 돌보고 있습니다.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 border border-abbey-200">
                  <h3 className="font-serif font-bold mb-1">요셉 박 (Joseph Park)</h3>
                  <p className="text-xs text-forest-600 mb-3">북한 (함경북도 무산군 출신)</p>
                  <p className="text-sm text-abbey-700 leading-relaxed">
                    북한 환경 이해 및 현지 적용 모델 설계. 건국대학교 수의학 전공.
                    탈북민을 위한 사회적 기업을 설립한 후,
                    2023년 목장에 합류하여 축산 기반 농촌 복원 모델을 구축하고 있습니다.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 border border-abbey-200">
                  <h3 className="font-serif font-bold mb-1">바니 스미스 박사 (Dr. Barney Smith)</h3>
                  <p className="text-xs text-forest-600 mb-3">미국</p>
                  <p className="text-sm text-abbey-700 leading-relaxed">
                    국제 개발 경험 및 고위험 환경 대응 역량. 미국인 수의사로,
                    1997년부터 2019년까지 북한 내부에서 선교사이자 농업 실무자로 활동했습니다.
                  </p>
                </div>
              </div>
              <p className="text-sm text-abbey-600">
                이 조합은 향후 북한 전환기 상황에서 즉시 작동 가능한 준비 인력을 의미합니다.
              </p>
            </div>

            <div className="border-t border-abbey-200" />

            {/* 4. 설계 원칙 */}
            <div>
              <h2 className="text-xl font-serif font-bold mb-4">4. 설계 원칙</h2>
              <p className="text-abbey-700 leading-relaxed mb-6">
                두 모델을 통합하여, 고지대 특화 소규모 프리미엄 낙농 시스템을 설계했습니다.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6 border border-abbey-200">
                  <h3 className="font-serif font-bold mb-3">4.1 폴리페이스 농장 모델 차용</h3>
                  <ul className="space-y-2 text-sm text-abbey-700">
                    {[
                      "관리형 방목",
                      "다종 순환 시스템",
                      "토양 생물학 중심 설계",
                      "직거래 기반 유통",
                      "산업형 공급망 의존 최소화",
                    ].map((item) => (
                      <li key={item} className="flex gap-3 items-start">
                        <span className="text-forest-600 shrink-0 mt-0.5">&#x2022;</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-6 border border-abbey-200">
                  <h3 className="font-serif font-bold mb-3">4.2 스위스 고지대 낙농 모델 차용</h3>
                  <ul className="space-y-2 text-sm text-abbey-700">
                    {[
                      "고지대 기후 적응형 생산",
                      "소규모 고부가가치 전략",
                      "현장 가공 중심 구조",
                      "관광·체험 통합 모델",
                      "산지 생태 보전",
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
                무무목장은 원유 생산에 머물지 않습니다.
                가치사슬을 내부에 통합하여 외부 의존도를 낮추고 수익 구조를 다각화합니다.
                이 구조는 단일 상품 리스크를 분산시키고, 고지대에서도 지속 가능한 수익 모델을 구축합니다.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { stage: "1", title: "생산", desc: "Jersey A2 낙농, 목초 관리" },
                  { stage: "2", title: "가공", desc: "요거트, 치즈, 버터, 젤라또" },
                  { stage: "3", title: "식음", desc: "카페 및 레스토랑" },
                  { stage: "4", title: "관광", desc: "체험, 치유 프로그램" },
                  { stage: "5", title: "교육", desc: "농업 훈련, 견습 과정" },
                  { stage: "6", title: "직판", desc: "구독, B2B, 라이브 커머스" },
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
              <h2 className="text-xl font-serif font-bold mb-4">6. Jersey 품종 선택의 전략성</h2>
              <p className="text-abbey-700 leading-relaxed mb-6">
                저지(Jersey) 품종 선택은 감성적 결정이 아닙니다.
                운영 효율과 고지대 적합성을 고려한 전략적 판단입니다.
                고지대, 제한적 사료, 장기 운영 조건에서 저지는 가장 안정적인 선택입니다.
              </p>
              <div className="bg-white rounded-lg border border-abbey-200 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-abbey-100">
                    <tr>
                      <th className="px-4 py-3 text-left font-medium text-abbey-600">항목</th>
                      <th className="px-4 py-3 text-left font-medium text-abbey-600">Jersey</th>
                      <th className="px-4 py-3 text-left font-medium text-abbey-600">Holstein</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-abbey-200">
                    {[
                      ["체중", "400~450kg", "600~700kg"],
                      ["유지방", "4.8~5.2%", "3.5~3.7%"],
                      ["사료 효율", "높음", "보통"],
                      ["A2 유전형", "거의 100%", "혼합"],
                      ["내한성", "우수", "보통"],
                      ["분만 난이도", "낮음", "상대적으로 높음"],
                      ["산유 수명", "12~15년", "5~7년"],
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
              <h2 className="text-xl font-serif font-bold mb-4">7. 북한 적용 가능성</h2>
              <p className="text-abbey-700 leading-relaxed mb-6">
                태백은 남한에서 북한 고지대 조건에 가장 가까운 실질적 유사 환경입니다.
                삼수령에서 검증된 시스템은 최소한의 적응만으로 북한 고지대에 직접 이전할 수 있습니다.
              </p>
              <div className="bg-white rounded-lg border border-abbey-200 overflow-x-auto mb-8">
                <table className="w-full text-sm">
                  <thead className="bg-abbey-100">
                    <tr>
                      <th className="px-4 py-3 text-left font-medium text-abbey-600">항목</th>
                      <th className="px-4 py-3 text-left font-medium text-abbey-600">태백 (삼수령)</th>
                      <th className="px-4 py-3 text-left font-medium text-abbey-600">북한 고지대</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-abbey-200">
                    {[
                      ["해발 고도", "해발 1,000m", "800~1,200m 일반적"],
                      ["겨울 기간", "영하 5~6개월", "영하 5~7개월"],
                      ["1월 평균 기온", "-8°C ~ -12°C", "-10°C ~ -20°C"],
                      ["경작 가능 토지", "매우 제한적", "매우 제한적"],
                      ["사료 공급", "자체 생산 + 제한적 외부 조달", "거의 전량 자체 조달"],
                      ["물류 체계", "원격지, 제한적 물류", "극도로 제약됨"],
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
                  <h3 className="font-serif font-bold mb-3">북한 고지대 환경 특성</h3>
                  <ul className="space-y-2 text-sm text-abbey-700">
                    {[
                      "5~7개월 장기 혹한",
                      "제한된 경작지",
                      "취약한 물류",
                      "외부 투입재 접근성 낮음",
                    ].map((item) => (
                      <li key={item} className="flex gap-3 items-start">
                        <span className="text-abbey-400 shrink-0 mt-0.5">&#x2022;</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-forest-50 rounded-lg p-6 border border-forest-200">
                  <h3 className="font-serif font-bold text-forest-800 mb-3">무무목장 모델의 적합성</h3>
                  <ul className="space-y-2 text-sm text-forest-700">
                    {[
                      "고가 장비 의존 없음",
                      "인터넷 기반 기술 불필요",
                      "현지 사료 자급 가능",
                      "자연 교배 중심 번식 구조",
                      "도제식 교육 전수 가능",
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
                  Heifer International의 &ldquo;Passing on the Gift&rdquo; 원칙을 적용하여
                  암송아지 전달 방식의 자가 증식 구조를 설계했습니다.
                  5두 → 2년 후 10두 → 4년 후 20두. 소규모 단위에서 점진적 확장이 가능합니다.
                </p>
              </div>
            </div>

            <div className="border-t border-abbey-200" />

            {/* 8. 창조 청지기 철학 */}
            <div>
              <h2 className="text-xl font-serif font-bold mb-4">8. 창조 청지기 철학</h2>
              <p className="text-abbey-700 leading-relaxed mb-4">
                무무목장은 생산성만을 목표로 하지 않습니다.
                운영 철학은 다음 원칙을 따릅니다:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                {[
                  "토양을 우선한다",
                  "동물의 본성을 존중한다",
                  "계절의 리듬을 따른다",
                  "과잉 생산을 추구하지 않는다",
                ].map((principle) => (
                  <div key={principle} className="bg-white rounded-lg p-4 border border-abbey-200 flex items-center gap-3">
                    <span className="text-forest-600">&#x2022;</span>
                    <span className="text-sm text-abbey-700 font-medium">{principle}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-abbey-600">
                이는 종교적 수사가 아니라, 장기 지속 가능성을 위한 운영 기준입니다.
              </p>
            </div>

            <div className="border-t border-abbey-200" />

            {/* 9. 결론 */}
            <div>
              <h2 className="text-xl font-serif font-bold mb-4">9. 전략적 의미</h2>
              <p className="text-abbey-700 leading-relaxed mb-6">
                삼수령 무무목장은 규모가 작은 농장입니다. 그러나 설계 목적은 분명합니다.
              </p>
              <div className="bg-forest-50 rounded-lg p-6 border border-forest-200 mb-6">
                <ul className="space-y-3 text-forest-700">
                  <li className="flex gap-3 items-start">
                    <span className="text-forest-600 shrink-0 mt-0.5 font-bold">&#x2022;</span>
                    <span>고지대 농촌 자립 모델의 실증 플랫폼</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-forest-600 shrink-0 mt-0.5 font-bold">&#x2022;</span>
                    <span>북한 전환기 대비 복제 가능한 축산 기반 시스템</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-forest-600 shrink-0 mt-0.5 font-bold">&#x2022;</span>
                    <span>재생농업 + 가공 + 관광 + 교육 통합 구조의 검증</span>
                  </li>
                </ul>
              </div>
              <p className="text-abbey-700 leading-relaxed font-medium">
                이 프로젝트는 하나의 농장이 아니라,
                한반도 고지대 농촌 회복을 위한 테스트베드입니다.
              </p>
            </div>

            <div className="border-t border-abbey-200" />

            {/* 무무곳간 — 브랜드 섹션 */}
            <div>
              <h2 className="text-xl font-serif font-bold mb-4">무무곳간 (MooMoo Gotgan)</h2>
              <p className="text-abbey-700 leading-relaxed mb-4">
                무무곳간은 삼수령무무목장에서 생산한 프리미엄 A2 유제품을 직접 소비자에게 전하는 브랜드입니다.
                단순한 온라인 상점이 아니라, 창조질서회복(Restoration of Creation Order)의 가치를 담은
                생태순환농업(Ecological Circular Agriculture)의 결실을 나누는 곳입니다.
              </p>
              <p className="text-abbey-700 leading-relaxed mb-6">
                퍼머컬쳐(Permaculture) 원리에 따라 키운 Jersey 소의 우유로 만든 요거트, 치즈, 버터 등
                건강한 유제품을 통해, 예수원 공동체가 지켜온 &ldquo;소를 소답게 키운다&rdquo;는
                창조 신학적 목축 철학을 일상에서 경험할 수 있습니다.
                무무곳간의 모든 제품은 북한 고지대 농촌 복원 모델 개발이라는 더 큰 사명과 연결되어 있습니다.
              </p>
              <div className="bg-forest-50 rounded-lg p-6 border border-forest-200 flex flex-col sm:flex-row items-center gap-4">
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="font-serif font-bold text-forest-800 mb-1">무무곳간 스토어</h3>
                  <p className="text-sm text-forest-600">삼수령무무목장의 신선한 유제품을 네이버 스마트스토어에서 만나보세요.</p>
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
