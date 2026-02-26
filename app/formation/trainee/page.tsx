import Breadcrumbs from "@/components/Breadcrumbs"
import { getProgramByType } from "@/lib/data"

export const metadata = { title: "수련 과정" }

export default function TraineePage() {
  const trainee1y = getProgramByType("trainee_1y")
  const trainee2y = getProgramByType("trainee_2y")

  return (
    <>
      <Breadcrumbs items={[{ label: "홈", path: "/" }, { label: "양성과 교육", path: "/formation" }, { label: "수련 과정" }]} />
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-serif font-bold mb-6">수련 과정</h1>
          <p className="text-lg text-abbey-600 leading-relaxed mb-10">
            3개월 지원 과정을 마친 후, 더 깊은 영적 형성과 신학 훈련을 위한 수련 과정입니다.
          </p>

          <div className="space-y-8">
            {trainee1y && (
              <div className="bg-white rounded-lg p-8 shadow-sm border border-abbey-200">
                <h2 className="text-xl font-serif font-bold mb-4">{trainee1y.nameKo}</h2>
                <dl className="space-y-3 text-sm">
                  <div>
                    <dt className="font-medium text-abbey-600">기간</dt>
                    <dd className="text-abbey-800 mt-1">{trainee1y.durationDescription}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-abbey-600">교육 목표</dt>
                    <dd className="text-abbey-800 mt-1 leading-relaxed">{trainee1y.educationGoal}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-abbey-600">입과 조건</dt>
                    <dd className="text-abbey-800 mt-1">{trainee1y.restrictions}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-abbey-600">비용</dt>
                    <dd className="text-abbey-800 mt-1">{trainee1y.costDescription}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-abbey-600">필요 서류</dt>
                    <dd className="text-abbey-800 mt-1">
                      <ul className="list-disc list-inside">
                        {trainee1y.requiredDocuments.map((doc, i) => (
                          <li key={i}>{doc}</li>
                        ))}
                      </ul>
                    </dd>
                  </div>
                </dl>
              </div>
            )}

            {trainee2y && (
              <div className="bg-white rounded-lg p-8 shadow-sm border border-abbey-200">
                <h2 className="text-xl font-serif font-bold mb-4">{trainee2y.nameKo}</h2>
                <dl className="space-y-3 text-sm">
                  <div>
                    <dt className="font-medium text-abbey-600">기간</dt>
                    <dd className="text-abbey-800 mt-1">{trainee2y.durationDescription}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-abbey-600">교육 목표</dt>
                    <dd className="text-abbey-800 mt-1 leading-relaxed">{trainee2y.educationGoal}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-abbey-600">입과 조건</dt>
                    <dd className="text-abbey-800 mt-1">{trainee2y.restrictions}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-abbey-600">비용</dt>
                    <dd className="text-abbey-800 mt-1">{trainee2y.costDescription}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-abbey-600">필요 서류</dt>
                    <dd className="text-abbey-800 mt-1">
                      <ul className="list-disc list-inside">
                        {trainee2y.requiredDocuments.map((doc, i) => (
                          <li key={i}>{doc}</li>
                        ))}
                      </ul>
                    </dd>
                  </div>
                </dl>
              </div>
            )}
          </div>

          <div className="mt-10">
            <h2 className="text-xl font-serif font-bold mb-4">수련 과정의 특징</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-abbey-50 rounded-lg p-6 border border-abbey-200">
                <h3 className="font-bold mb-2 text-forest-700">신학 훈련</h3>
                <p className="text-sm text-abbey-600 leading-relaxed">
                  성경 연구, 교회 역사, 영성 신학 등 체계적인 신학 교육을 받습니다.
                </p>
              </div>
              <div className="bg-abbey-50 rounded-lg p-6 border border-abbey-200">
                <h3 className="font-bold mb-2 text-forest-700">영적 형성</h3>
                <p className="text-sm text-abbey-600 leading-relaxed">
                  기도, 묵상, 영적 지도를 통해 내면의 성장을 추구합니다.
                </p>
              </div>
              <div className="bg-abbey-50 rounded-lg p-6 border border-abbey-200">
                <h3 className="font-bold mb-2 text-forest-700">실천적 사역</h3>
                <p className="text-sm text-abbey-600 leading-relaxed">
                  공동체 안에서의 섬김과 리더십을 통해 사역 역량을 키웁니다.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 bg-abbey-100/50 rounded-lg p-6 border border-abbey-200">
            <h3 className="font-bold mb-2">문의</h3>
            <p className="text-sm text-abbey-700">
              수련 과정에 대한 문의는 예수원 사무부(033-552-0633)로 연락해 주시기 바랍니다.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
