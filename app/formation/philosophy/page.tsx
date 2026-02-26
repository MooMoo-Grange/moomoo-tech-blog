import Breadcrumbs from "@/components/Breadcrumbs"

export const metadata = { title: "교육 철학" }

export default function PhilosophyPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "홈", path: "/" }, { label: "양성과 교육", path: "/formation" }, { label: "교육 철학" }]} />
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-serif font-bold mb-6">교육 철학</h1>
          <p className="text-lg text-abbey-600 leading-relaxed mb-12">
            예수원의 교육은 단순한 지식 전달이 아닌, 삶의 변화를 통한 전인적 영적 형성을 지향합니다.
          </p>

          <div className="space-y-10">
            <div>
              <h2 className="text-xl font-serif font-bold mb-4">형성(Formation)의 원리</h2>
              <p className="text-abbey-700 leading-relaxed mb-4">
                예수원은 &lsquo;교육(Education)&rsquo;보다 &lsquo;형성(Formation)&rsquo;이라는 개념을 더 중요하게 여깁니다.
                교육이 외부에서 안으로 지식을 넣는 것이라면, 형성은 안에서 밖으로 그리스도의 성품이
                드러나도록 하는 과정입니다.
              </p>
              <p className="text-abbey-700 leading-relaxed">
                이는 수도원적 전통에 깊이 뿌리를 두고 있으며, 기도와 노동과 공동체 생활이라는
                세 가지 기둥을 통해 이루어집니다.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-serif font-bold mb-4">세 가지 교육 축</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-6 shadow-sm border border-abbey-200">
                  <div className="text-3xl mb-3">📖</div>
                  <h3 className="font-bold mb-2 text-forest-700">머리 (Head)</h3>
                  <p className="text-sm text-abbey-600 leading-relaxed">
                    성경 연구, 신학 강의, 토론을 통해 올바른 신학적 기초를 세웁니다.
                    대천덕 신부의 강의와 저술이 핵심 교재입니다.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm border border-abbey-200">
                  <div className="text-3xl mb-3">❤️</div>
                  <h3 className="font-bold mb-2 text-forest-700">가슴 (Heart)</h3>
                  <p className="text-sm text-abbey-600 leading-relaxed">
                    기도, 예배, 묵상, 영적 지도를 통해 하나님과의 관계를 깊이합니다.
                    성령 체험과 내면 치유가 중요한 부분입니다.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm border border-abbey-200">
                  <div className="text-3xl mb-3">✋</div>
                  <h3 className="font-bold mb-2 text-forest-700">손 (Hands)</h3>
                  <p className="text-sm text-abbey-600 leading-relaxed">
                    노동, 섬김, 공동체 생활을 통해 배운 것을 삶에서 실천합니다.
                    일하는 것이 곧 기도가 되는 삶을 훈련합니다.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-serif font-bold mb-4">교육의 특징</h2>
              <div className="space-y-4">
                <div className="bg-abbey-50 rounded-lg p-6 border border-abbey-200">
                  <h3 className="font-bold mb-2">공동체 안에서의 배움</h3>
                  <p className="text-sm text-abbey-700 leading-relaxed">
                    교실에서만 배우는 것이 아니라, 함께 먹고, 기도하고, 일하는 일상 전체가 배움의 현장입니다.
                    공동체 생활 자체가 가장 깊은 교육입니다.
                  </p>
                </div>
                <div className="bg-abbey-50 rounded-lg p-6 border border-abbey-200">
                  <h3 className="font-bold mb-2">동서양 영성의 통합</h3>
                  <p className="text-sm text-abbey-700 leading-relaxed">
                    서양 수도원 전통의 규칙적 생활과 동양의 묵상적 영성을 조화롭게 통합합니다.
                    관상과 활동, 침묵과 교제가 균형을 이룹니다.
                  </p>
                </div>
                <div className="bg-abbey-50 rounded-lg p-6 border border-abbey-200">
                  <h3 className="font-bold mb-2">성령 중심의 교육</h3>
                  <p className="text-sm text-abbey-700 leading-relaxed">
                    모든 교육의 중심에 성령이 계십니다. 인간의 노력만이 아니라 성령의 역사를 통해
                    진정한 변화가 일어남을 믿고 그 역사에 순종합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
