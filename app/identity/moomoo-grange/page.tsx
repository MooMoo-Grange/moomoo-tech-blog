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
          <h1 className="text-3xl font-serif font-bold mb-3">무무목장 프로젝트</h1>
          <p className="text-lg text-abbey-500 mb-2">Samsuryeong MooMoo Ranch</p>
          <p className="text-sm text-abbey-400 italic mb-10">Opus Dei Agriculturae &mdash; 농업 안에서의 하나님의 일</p>

          {/* 개요 */}
          <div className="bg-forest-50 rounded-lg p-8 border border-forest-200 mb-10">
            <h2 className="text-xl font-serif font-bold text-forest-800 mb-4">개요</h2>
            <p className="text-forest-700 leading-relaxed mb-4">
              삼수령 무무목장은 단순한 낙농 목장이 아닙니다. 한반도 농촌 회복을 위한 살아 있는 원형(Prototype)이자,
              재생농업과 공동체 치유, 창조 청지기 정신을 하나의 자립형 플랫폼으로 엮어내는
              촉매적 선교 인프라(Catalytic Mission Infrastructure)입니다.
              이 모델은 언젠가 북한의 가장 고립된 고지대 마을에 복제될 수 있도록 설계되었습니다.
            </p>
            <p className="text-forest-700 leading-relaxed">
              강원도 태백시 해발 1,000m에 위치한 이 목장은 예수원의 50년 유산을 계승하며,
              고지대 환경에 최적화된 저지(Jersey) 품종을 중심으로 프리미엄 A2 소규모 낙농을 운영합니다.
              동시에 생산, 가공, 식음, 관광목장, 교육, 직판이라는 농촌의 완결형 가치사슬을 통합하고 있습니다.
            </p>
          </div>

          <div className="space-y-10">

            {/* 50년 예수원의 유산 */}
            <div>
              <h2 className="text-xl font-serif font-bold mb-4">50년 예수원의 유산</h2>
              <p className="text-abbey-700 leading-relaxed mb-4">
                삼수령 무무목장의 이야기는 사업 계획서가 아니라 기도에서 시작되었습니다.
                예수원 설립자인 대천덕(Archer Torrey III) 신부는 기도와 노동이 분리될 수 없는
                자립형 고지대 공동체를 꿈꾸었고, 그 비전 위에 목장이 세워졌습니다.
              </p>
              <p className="text-abbey-700 leading-relaxed mb-4">
                1965년 덕항산 기슭에서 예수원은 낙농업과 함께 시작되었습니다.
                그러나 공간이 협소하여 약 10년 후인 1975년, 예수원에서 약 10km 떨어진
                해발 1,000m 매봉산 자락에 새로운 목장 부지를 발견하게 됩니다.
                이곳에 세워진 예수원 부속 목장의 첫 이름은 &ldquo;Jesus Abbey The Watershed Grange&rdquo;였습니다.
                대천덕 신부는 베네딕트 수도회의 <em>기도하고 일하라(ora et labora)</em> 정신에 기초한
                낙농 기반 수도 공동체를 이 고지대에서 본격적으로 시작했습니다.
                그 목적은 상업적인 것이 아니었습니다. 그것은 언약적인 것이었습니다.
                경배당에서의 예배가 목초지와 축사, 소떼에 대한 청지기 직분으로
                자연스럽게 이어지는 삶을 구현하는 것이었습니다.
              </p>
              <p className="text-abbey-700 leading-relaxed">
                결정적인 형성기인 1975년부터 1982년까지, 폴 킹스버리(Paul A. Kingsbury)는
                Heifer International을 통해 한국에서 20여 년간 선구적인 축산 개발 사역을 마친 후,
                한국에서의 마지막 6년을 대천덕 신부의 목장 설립을 돕는 데 헌신했습니다.
                삼수령 무무목장은 예수원의 베네딕트 수도회적 유산뿐 아니라,
                한국 낙농 발전의 숨은 아버지 중 한 분의 살아 있는 발자취를 함께 간직하고 있습니다.
              </p>
            </div>

            <div className="border-t border-abbey-200" />

            {/* 리더십 */}
            <div>
              <h2 className="text-xl font-serif font-bold mb-4">3개국 리더십 팀</h2>
              <p className="text-abbey-700 leading-relaxed mb-6">
                현재 무무목장은 한반도 역사에 가장 깊이 얽혀 있는 세 나라 &mdash; 남한, 북한, 미국 &mdash; 을
                대표하는 고유한 3개국 리더십 팀이 이끌고 있습니다.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-6 border border-abbey-200">
                  <h3 className="font-serif font-bold mb-1">헤세키아 (서수철)</h3>
                  <p className="text-xs text-forest-600 mb-3">남한</p>
                  <p className="text-sm text-abbey-700 leading-relaxed">
                    예수원 공동체 안에서 목장 책임자로 사역하고 있습니다.
                    초창기 선교사 설립자들의 운영 유산을 이어받아,
                    해발 1,000m 고지대 목초지와 저지 소떼를 사계절 돌보고 있습니다.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 border border-abbey-200">
                  <h3 className="font-serif font-bold mb-1">요셉 박 (Joseph Park)</h3>
                  <p className="text-xs text-forest-600 mb-3">북한 (함경북도 무산군 출신)</p>
                  <p className="text-sm text-abbey-700 leading-relaxed">
                    북한 출생. 건국대학교에서 수의학을 전공하고 탈북민을 위한 사회적 기업을 설립했습니다.
                    2023년 예수원 목장에 합류하여 북한을 위한 축산 기반 농촌 복원 모델을 구축하고 있습니다.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 border border-abbey-200">
                  <h3 className="font-serif font-bold mb-1">바니 스미스 박사 (Dr. Barney Smith)</h3>
                  <p className="text-xs text-forest-600 mb-3">미국</p>
                  <p className="text-sm text-abbey-700 leading-relaxed">
                    미국인 수의사로, 1997년부터 2019년까지 선교사이자 농업 실무자로서 북한 내부에서 활동했습니다.
                    장기간의 현지 경험과 수의학 전문성을 겸비한 그의 현장 대응 역량은 다른 어디에서도 재현할 수 없는 것입니다.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-abbey-200" />

            {/* 폴리페이스 + 스위스 모델 */}
            <div>
              <h2 className="text-xl font-serif font-bold mb-4">폴리페이스 + 스위스 모델</h2>
              <p className="text-abbey-700 leading-relaxed mb-6">
                이 프로젝트는 세계에서 가장 검증된 두 소규모 농업 패러다임에서 전략적 설계를 차용합니다.
                조엘 살라틴(Joel Salatin)의 폴리페이스 농장(재생적·분산형 농업)과
                스위스 고지대 낙농 모델(장인적·마을 기반·관광 통합형)입니다.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6 border border-abbey-200">
                  <h3 className="font-serif font-bold mb-3">폴리페이스 원칙</h3>
                  <ul className="space-y-2 text-sm text-abbey-700">
                    {[
                      ["재생농업", "관리형 방목을 통한 토양 건강 증진"],
                      ["다종 순환 방목", "소, 가금류, 돼지를 공생적 순서로 순환"],
                      ["토양 우선 철학", "토양 생물학을 모든 생산의 기초로"],
                      ["소비자 직거래", "농장 직판을 통한 중간 유통 제거"],
                      ["분산형 자립", "산업형 공급망으로부터의 독립"],
                    ].map(([title, desc]) => (
                      <li key={title} className="flex gap-3 items-start">
                        <span className="text-forest-600 shrink-0 mt-0.5">&#x2022;</span>
                        <span><strong>{title}:</strong> {desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-6 border border-abbey-200">
                  <h3 className="font-serif font-bold mb-3">스위스 고지대 낙농 원칙</h3>
                  <ul className="space-y-2 text-sm text-abbey-700">
                    {[
                      ["고지대 최적화", "고도와 기후에 적응한 낙농 생산"],
                      ["소규모·고부가가치", "양보다 질; 프리미엄 A2 원유"],
                      ["부가가치 가공", "치즈, 요거트, 버터를 현장에서 생산"],
                      ["농촌 관광 통합", "목장 방문을 경제적 동력으로"],
                      ["생태적 청지기 정신", "지속 가능한 산지 목초지 관리"],
                    ].map(([title, desc]) => (
                      <li key={title} className="flex gap-3 items-start">
                        <span className="text-forest-600 shrink-0 mt-0.5">&#x2022;</span>
                        <span><strong>{title}:</strong> {desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-t border-abbey-200" />

            {/* 태백 = 북한 고지대 프로토타입 */}
            <div>
              <h2 className="text-xl font-serif font-bold mb-4">태백 — 북한 고지대의 프로토타입</h2>
              <p className="text-abbey-700 leading-relaxed mb-6">
                태백은 전략적으로 남한 어디에서도 찾기 어려운, 북한 고지대 조건에 가장 가까운 실질적 유사 환경입니다.
                삼수령에서 검증된 모든 시스템은 최소한의 적응만으로 북한 고지대 조건에 직접 이전할 수 있습니다.
              </p>
              <div className="bg-white rounded-lg border border-abbey-200 overflow-x-auto">
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
                      ["1월 평균 기온", "-8\u00B0C ~ -12\u00B0C", "-10\u00B0C ~ -20\u00B0C"],
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
            </div>

            <div className="border-t border-abbey-200" />

            {/* 6단계 통합 가치사슬 */}
            <div>
              <h2 className="text-xl font-serif font-bold mb-4">6단계 통합 가치사슬</h2>
              <p className="text-abbey-700 leading-relaxed mb-6">
                무무목장은 단일 제품 낙농 업체가 아닙니다. 하나의 고지대 공동체가
                영양 자급, 경제적 자립, 교육 역량, 문화 재생을 동시에 달성할 수 있음을 보여주는
                통합 농촌 복원 청사진(Integrated Rural Restoration Blueprint)이자 완결형 순환 경제 생태계입니다.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { stage: "1", title: "생산", desc: "저지 A2 낙농, 목초지 관리" },
                  { stage: "2", title: "가공", desc: "요거트, 치즈, 버터, 젤라또 현장 생산" },
                  { stage: "3", title: "식음", desc: "목장 카페, 레스토랑, 시음실" },
                  { stage: "4", title: "관광목장", desc: "목장 투어, 치유 프로그램, 리트릿" },
                  { stage: "5", title: "교육", desc: "PBL 교육, 농업 견습 프로그램" },
                  { stage: "6", title: "직판", desc: "구독형 판매, 라이브 커머스, B2B" },
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

            {/* 저지 유전학 */}
            <div>
              <h2 className="text-xl font-serif font-bold mb-4">저지(Jersey) 유전학과 고지대 적합성</h2>
              <p className="text-abbey-700 leading-relaxed mb-6">
                저지 품종의 선택은 전략적입니다. 세계 젖소 품종 가운데 저지는
                고지대 적응력, 사료 효율성, 부가가치 밀도에서 가장 뛰어난 품종으로,
                삼수령 운영은 물론 향후 북한 배치를 위한 최적의 유전학 플랫폼입니다.
              </p>
              <div className="bg-forest-50 rounded-lg p-6 border border-forest-200">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  {[
                    ["체구", "400~450kg (홀스타인 600~700kg 대비)"],
                    ["사료 효율", "사료 1kg당 유고형분 생산량 최고"],
                    ["유지방", "4.8~5.2% (홀스타인 3.5~3.7% 대비)"],
                    ["A2 β-카제인", "~100% A2/A2 유전형"],
                    ["내한성", "우수"],
                    ["분만 용이성", "매우 높음, 수의학적 의존도 낮음"],
                    ["기질", "온순, 소규모 농가 관리에 적합"],
                    ["산유 수명", "12~15년 이상"],
                  ].map(([trait, value]) => (
                    <div key={trait} className="flex gap-3">
                      <span className="font-bold text-forest-700 shrink-0 min-w-[120px]">{trait}</span>
                      <span className="text-forest-600">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="border-t border-abbey-200" />

            {/* 창조 청지기 신학 */}
            <div>
              <h2 className="text-xl font-serif font-bold mb-4">창조 청지기 신학</h2>
              <blockquote className="border-l-4 border-forest-300 pl-6 mb-6 italic text-abbey-600">
                <p className="mb-2">&ldquo;Et vidit Deus quod esset bonum.&rdquo;</p>
                <p>&ldquo;하나님이 보시기에 좋았더라.&rdquo; &mdash; 창세기 1:25</p>
              </blockquote>
              <p className="text-abbey-700 leading-relaxed mb-4">
                무무목장의 모든 운영 철학은 재생농업을 제자도의 실천으로 해석하는
                창조 청지기 신학 위에 세워져 있습니다. 창세기 2장 15절의 히브리어 <em>샤마르(shamar)</em>는
                일반적으로 &ldquo;지키다&rdquo;로 번역되지만, 원래 의미는 보호하고, 지키고, 적극적으로 보존하는 것입니다.
                인간의 소명은 동산을 섬기는 것이지, 동산에서 착취하는 것이 아닙니다.
              </p>
              <div className="bg-abbey-100/50 rounded-lg p-6 border border-abbey-200">
                <p className="text-sm text-abbey-700 leading-relaxed italic">
                  소를 소답게 키운다 &mdash; 이것은 단순한 슬로건이 아닙니다. 신학적 헌신입니다.
                  개방된 목초지에서 소를 키우고, 자연적 행동을 허용하며, 계절의 리듬을 존중하고,
                  동물의 창조된 본성을 존중하는 것은 <em>하나님의 형상(imago Dei)</em>의 표현입니다.
                </p>
              </div>
            </div>

            <div className="border-t border-abbey-200" />

            {/* 북한 복제 준비 */}
            <div>
              <h2 className="text-xl font-serif font-bold mb-4">북한 복제 준비</h2>
              <p className="text-abbey-700 leading-relaxed mb-4">
                무무목장의 육종 프로그램은 Heifer International이 시작한
                &ldquo;선물 전달하기(Passing on the Gift)&rdquo; 원칙을 중심으로 설계되었습니다.
                암송아지를 받은 각 가정은 첫 번째 암송아지를 다른 가정에 전달할 것을 약속합니다.
                고지대 마을에 배치된 저지 암소 5두는 2년 안에 10두가 되고, 4년이면 20두가 됩니다.
              </p>
              <p className="text-abbey-700 leading-relaxed mb-6">
                정치적 조건이 변할 때, 국제 사회는 시급한 질문에 직면하게 됩니다.
                북한 고지대 마을에 신속하게 배치할 수 있는 농촌 개발 모델은 무엇인가?
                그것은 소규모이고, 자기 복제가 가능하며, 고지대에 적응하고, 공동체 중심이며,
                즉각적으로 생산 가능한 모델이어야 합니다.
              </p>
              <div className="bg-forest-50 rounded-lg p-6 border border-forest-200">
                <p className="text-forest-800 font-bold mb-3">이 모델이 북한 조건에 적합한 이유:</p>
                <ul className="space-y-2 text-sm text-forest-700">
                  <li className="flex gap-3 items-start">
                    <span className="shrink-0 mt-0.5">&#x2022;</span>
                    <span>정치적으로 민감한 기술이나 이념을 포함하지 않음</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="shrink-0 mt-0.5">&#x2022;</span>
                    <span>수입 기술, 인터넷 연결, 외국인 관리가 필요 없음</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="shrink-0 mt-0.5">&#x2022;</span>
                    <span>모든 투입재를 현지에서 조달: 목초 기반 사료, 자연 교배, 중력식 급수</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="shrink-0 mt-0.5">&#x2022;</span>
                    <span>가공 기술은 산업화 이전 방식을 활용</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="shrink-0 mt-0.5">&#x2022;</span>
                    <span>지식 전수는 도제식 교육과 실습 훈련을 통해 이루어짐</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-abbey-200" />

            {/* 결론 */}
            <div>
              <h2 className="text-xl font-serif font-bold mb-4">한반도 회복을 위한 생명의 씨앗</h2>
              <blockquote className="border-l-4 border-forest-300 pl-6 mb-6 italic text-abbey-600">
                <p className="mb-2">&ldquo;Nisi granum frumenti cadens in terram mortuum fuerit, ipsum solum manet.&rdquo;</p>
                <p>&ldquo;한 알의 밀이 땅에 떨어져 죽지 아니하면 한 알 그대로 있고.&rdquo; &mdash; 요한복음 12:24</p>
              </blockquote>
              <p className="text-abbey-700 leading-relaxed mb-4">
                삼수령 무무목장은 씨앗입니다. 작습니다. 고지대에, 혹독한 환경에,
                세상이 거의 잊은 곳에 심겨졌습니다. 그러나 이 안에는 훨씬 더 큰 것의 완전한 유전 정보가 담겨 있습니다.
                바로 한반도 농촌 회복 모델입니다.
              </p>
              <p className="text-abbey-700 leading-relaxed mb-4">
                이 씨앗에는 50년간의 선교적 기도와 노동이 담겨 있습니다.
                폴리페이스 농장의 재생적 지혜와 스위스 고지대 낙농의 산악 회복력이 담겨 있습니다.
                창세기의 창조 신학, 베네딕트 수도회의 공동체 윤리,
                그리고 Heifer International의 &ldquo;선물 전달하기&rdquo;의 증식 논리가 담겨 있습니다.
              </p>
              <p className="text-abbey-700 leading-relaxed">
                그리고 북한의 광산 마을에서 태어나, 국경과 세월을 넘어
                또 하나의 광산 마을인 태백, 한국 산꼭대기에 미국 선교사들이 세운 목장에 도착한 한 사람의 간증이 담겨 있습니다.
                그는 지금 어린 시절 고향 마을과 같은 해발에서 저지 소를 돌보며,
                그 선물을 되돌려줄 수 있는 날을 믿음으로 준비하고 있습니다.
              </p>
            </div>

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
                <a
                  href="https://smartstore.naver.com/moomooranch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-forest-700 text-white text-sm font-medium rounded-lg hover:bg-forest-800 transition-colors shrink-0 min-h-[44px]"
                >
                  <span>무무곳간 방문하기</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
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
