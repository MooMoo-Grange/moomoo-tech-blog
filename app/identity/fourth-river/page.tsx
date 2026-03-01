import Link from "next/link"
import Breadcrumbs from "@/components/Breadcrumbs"

export const metadata = {
  title: "네번째강 프로젝트 — The Fourth River Project | 북한선교 · 삼수령센터",
  description:
    "예수원의 북한선교(North Korea Mission) 사역. 삼수령센터(Three Seas Center)에서 한국 교회의 화합과 치유를 위한 일꾼을 준비하는 네번째강 프로젝트(Fourth River Project).",
  openGraph: {
    title: "네번째강 프로젝트 — Fourth River Project",
    description:
      "예수원의 북한선교 사역. 삼수령센터에서 한국 교회의 화합과 치유를 위해 일꾼을 준비합니다.",
  },
}

export default function FourthRiverPage() {
  return (
    <>
      <Breadcrumbs items={[
        { label: "홈", path: "/" },
        { label: "정체성", path: "/identity" },
        { label: "네번째강 프로젝트" },
      ]} />
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-serif font-bold mb-3">네번째강 프로젝트</h1>
          <p className="text-lg text-abbey-500 mb-2">The Fourth River Project</p>
          <p className="text-sm text-abbey-400 mb-10">예수원의 북한 선교 사역</p>

          {/* 사명 */}
          <div className="bg-forest-50 rounded-lg p-8 border border-forest-200 mb-10">
            <h2 className="text-xl font-serif font-bold text-forest-800 mb-4">사명</h2>
            <p className="text-forest-700 leading-relaxed">
              네번째강 프로젝트의 사명은 한국 교회와 민족의 분열을 치유하는 데 힘쓰는 것입니다.
              가르침과 화해의 부름을 통해, 각 삶의 자리에서 우리 주님을 증거하고
              예수 그리스도의 기초 위에 새로운 한국을 세우기 위한 섬김의 일꾼을 준비합니다.
            </p>
          </div>

          {/* 필요성 · 비전 · 궁극적 목표 */}
          <div className="space-y-10">
            <div>
              <h2 className="text-xl font-serif font-bold mb-4">왜 필요한가</h2>
              <p className="text-abbey-700 leading-relaxed">
                가까운 미래에 북한이 더 크게 개방될 것을 예비하며, 북한에 들어가는 이들이
                북한의 문화, 사회, 심리, 역사, 언어에 대한 깊은 이해를 갖추는 것은 필수적입니다.
                이러한 이해 없이 북한에서 예수 그리스도의 사랑을 나누려는 시도는
                선보다 해를 끼칠 수 있습니다. 또한 남한 교회가 마음과 뜻을 하나로 모아
                이 필요에 다가가는 것이 반드시 필요합니다. 각 교단과 단체가 서로 경쟁하며
                협력 없이 제각기 활동하는 분열된 교회가 북한에 들어간다면,
                남한의 분열을 북한에 그대로 가져가게 될 것입니다.
              </p>
            </div>

            {/* 비전 */}
            <div>
              <h2 className="text-xl font-serif font-bold mb-4">비전</h2>
              <p className="text-abbey-700 leading-relaxed">
                네번째강 프로젝트의 비전은, 다양한 삶의 영역에서 온 남녀 팀이
                북한에 들어가 살면서 예수 그리스도의 사랑을 전하고, 화해를 추구하며,
                예수 그리스도의 교회를 세우고, 성경적 원리의 가치에 대한 깊은 이해를 바탕으로
                한국 사회의 재건을 돕도록 준비되는 것입니다.
              </p>
            </div>

            {/* 궁극적 목표 */}
            <div>
              <h2 className="text-xl font-serif font-bold mb-4">궁극적 목표</h2>
              <ul className="space-y-3 text-abbey-700">
                <li className="flex gap-3 items-start">
                  <span className="text-forest-600 shrink-0 mt-1">&#x2022;</span>
                  <span>성경적 원리 위에 세워진 새로운 한국</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-forest-600 shrink-0 mt-1">&#x2022;</span>
                  <span>성경적 세계관에 기초하고 이를 표현하는 문화를 가진 새로운 사회</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-forest-600 shrink-0 mt-1">&#x2022;</span>
                  <span>하나 된 한민족이 세계에서 가장 위험한 곳까지 복음을 전하는 것</span>
                </li>
              </ul>
            </div>

            {/* Divider */}
            <div className="border-t border-abbey-200" />

            {/* 삼수령 센터 */}
            <div>
              <h2 className="text-xl font-serif font-bold mb-2">삼수령 센터</h2>
              <p className="text-sm text-abbey-500 mb-4">The Three Seas Center, 강원도 태백시</p>
              <p className="text-abbey-700 leading-relaxed mb-6">
                삼수령 센터의 목적은 전략적 위치에 자리잡아, 그리스도의 몸된 교회가
                학습, 훈련, 노동, 기도, 그리고 공동체 생활을 통해
                남한과 북한, 나아가 땅 끝까지 하나님을 섬기도록 준비시키는 장소를 제공하는 것입니다.
              </p>

              <h3 className="font-bold text-abbey-800 mb-3">구체적으로 삼수령 센터는 다음을 위한 곳입니다:</h3>
              <ul className="space-y-3 text-abbey-700 text-sm">
                <li className="flex gap-3 items-start">
                  <span className="text-forest-600 shrink-0 mt-0.5">&#x2022;</span>
                  <span>예수 그리스도의 교회에 일치를 호소하고, 지도자들이 자신의 교회와 교단을 통해 이 일치를 향해 일할 수 있도록 준비시키는 곳</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-forest-600 shrink-0 mt-0.5">&#x2022;</span>
                  <span>분단된 조국을 유산으로 물려받은 한국의 젊은이들, 곧 &ldquo;통일 세대&rdquo;를 캠프, 세미나 등 다양한 프로그램을 통해 세우는 곳</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-forest-600 shrink-0 mt-0.5">&#x2022;</span>
                  <span>북한이 개방됨에 따라 들어가 살며 일할 수 있도록, 세계 각국의 일꾼들에게 언어, 문화 등의 훈련을 제공하는 곳</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-forest-600 shrink-0 mt-0.5">&#x2022;</span>
                  <span>남북한 개인들 사이의 관계 치유를 위한 안전하고 따뜻한 환경을 제공하는 곳</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-forest-600 shrink-0 mt-0.5">&#x2022;</span>
                  <span>유사한 사역에 참여하고 있는 단체, 기관, 교회들과 네트워크를 형성하고 서로 협력하도록 돕는 곳</span>
                </li>
              </ul>
            </div>

            {/* 삼수령의 의미 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 border border-abbey-200">
                <h3 className="font-serif font-bold mb-3">상징적 의미</h3>
                <ul className="space-y-3 text-sm text-abbey-700">
                  <li className="flex gap-3 items-start">
                    <span className="text-forest-600 shrink-0 mt-0.5">&#x2022;</span>
                    <span>남한의 세 주요 강(한강, 낙동강, 오십천)이 발원하는 삼수령의 꼭대기에 위치하여, 생명의 강이 솟아나는 우리의 근원이신 그리스도처럼 &ldquo;원천&rdquo;의 의미를 지닙니다.</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-forest-600 shrink-0 mt-0.5">&#x2022;</span>
                    <span>한반도를 종단하는 백두대간 위에 자리하여, 생명의 강이 북한을 향해 흐르는 것과 하나님의 백성이 복음을 가지고 북으로 가라는 부름을 상징합니다. 이것이 바로 &ldquo;네번째강&rdquo;입니다.</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 border border-abbey-200">
                <h3 className="font-serif font-bold mb-3">전략적 의미</h3>
                <ul className="space-y-3 text-sm text-abbey-700">
                  <li className="flex gap-3 items-start">
                    <span className="text-forest-600 shrink-0 mt-0.5">&#x2022;</span>
                    <span>중보기도, 공동체 생활, 노동의 가치에 있어 60년의 경험을 가진 예수원 인근에 위치합니다. 예수원 공동체는 삼수령 센터에 인력과 프로그램을 제공합니다.</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-forest-600 shrink-0 mt-0.5">&#x2022;</span>
                    <span>도시 중심지에서 떨어져 있어, 도시의 소음과 압박에서 벗어나 기도하고, 사색하며, 공부하고, 다른 이들과 함께 깊이 일할 수 있는 환경을 제공합니다.</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-forest-600 shrink-0 mt-0.5">&#x2022;</span>
                    <span>산의 장엄한 풍경과 자연환경이 사람의 비전을 넓히고 가능성에 대한 설렘을 불러일으킵니다.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-abbey-200" />

            {/* 디렉터 */}
            <div>
              <h2 className="text-xl font-serif font-bold mb-4">디렉터 &mdash; 벤 토레이(Ben Torrey)</h2>
              <p className="text-abbey-700 leading-relaxed mb-6">
                벤 토레이는 한국에서 자랐으며, 부모인 제인 토레이와 아처 토레이와 함께
                강원도 태백산맥 깊은 곳에 예수원을 개척하는 데 동참했습니다.
                그는 Syro-Chaldean Church of North America에서 안수를 받았습니다.
              </p>
              <div className="bg-white rounded-lg p-6 border border-abbey-200">
                <h3 className="font-bold text-sm text-abbey-600 mb-3">주요 경력</h3>
                <div className="space-y-2">
                  {[
                    ["1965-1969", "예수원 설립에 참여"],
                    ["1975", "사라 로렌스 대학(Sarah Lawrence College) 졸업"],
                    ["1978-1979", "아내 리즈(Liz)와 함께 예수원에서 생활하며 공동체 사역에 참여"],
                    ["1979-2001", "IT 시스템 설계 및 개발, 지식 경영 분야 종사"],
                    ["1996-2003", "미국 코네티컷주 킹스 스쿨(The King's School) 디렉터; 1998년부터 이사회 의장"],
                    ["2002-2003", "킹스 스쿨(Bolton, CT) 행정 책임자"],
                    ["2003", "삼수령 센터 디렉터로 임명, 네번째강 프로젝트 시작"],
                  ].map(([period, desc]) => (
                    <div key={period} className="flex gap-4 items-start text-sm">
                      <span className="text-forest-700 font-bold whitespace-nowrap min-w-[100px]">{period}</span>
                      <span className="text-abbey-700">{desc}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-abbey-600 mt-4">
                  벤과 아내 리즈는 예수원 공동체 일원이며 삼수령 센터에서 생활하고 있습니다.
                  미국에도 사무실과 거처를 두고 있습니다.
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-abbey-200" />

            {/* 영상 */}
            <div>
              <h2 className="text-xl font-serif font-bold mb-6">영상</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="aspect-video rounded-lg overflow-hidden border border-abbey-200">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/XuJwiGGu9bU?si=dP_K42tiPgk_4tZ8"
                    title="네번째강 프로젝트"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
                <div className="aspect-video rounded-lg overflow-hidden border border-abbey-200">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/29oITQ2z7SQ?si=6FYHUSgTs_-hiC6h"
                    title="네번째강 프로젝트"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
                <div className="aspect-video rounded-lg overflow-hidden border border-abbey-200 md:col-span-2 md:max-w-[calc(50%-0.75rem)]">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/TRG10xLMUe8?si=67reLXbh-DkcJsWS"
                    title="네번째강 프로젝트"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-abbey-200" />

            {/* 연락처 */}
            <div>
              <h2 className="text-xl font-serif font-bold mb-4">연락처</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6 border border-abbey-200">
                  <h3 className="font-bold mb-3">삼수령 센터</h3>
                  <ul className="text-sm text-abbey-700 space-y-2">
                    <li>강원도 태백시 백두대간로 439</li>
                    <li>우편번호 26024</li>
                    <li>전화: 033-552-1203</li>
                    <li>휴대전화: 010-4578-7824</li>
                  </ul>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 border border-abbey-200 mt-6">
                <h3 className="font-bold mb-3">미국 사무실</h3>
                <ul className="text-sm text-abbey-700 space-y-2">
                  <li>PO Box 744, Vernon, CT 06066</li>
                  <li>전화: 1-860-263-9204</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
