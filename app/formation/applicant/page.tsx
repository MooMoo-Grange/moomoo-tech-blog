import Breadcrumbs from "@/components/Breadcrumbs"
import { getProgramByType } from "@/lib/data"

export const metadata = { title: "지원 과정" }

export default function ApplicantPage() {
  const program = getProgramByType("applicant_3m")

  return (
    <>
      <Breadcrumbs items={[{ label: "홈", path: "/" }, { label: "양성과 교육", path: "/formation" }, { label: "지원 과정" }]} />
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-serif font-bold mb-6">지원 과정</h1>
          <p className="text-lg text-abbey-600 leading-relaxed mb-10">
            예수원 공동체 생활의 첫걸음, 3개월 지원 과정을 안내합니다.
          </p>

          {program && (
            <>
              <div className="bg-forest-50 rounded-lg p-8 border border-forest-200 mb-10">
                <h2 className="text-xl font-serif font-bold mb-4 text-forest-800">{program.nameKo}</h2>
                <dl className="space-y-4 text-sm">
                  <div>
                    <dt className="font-medium text-forest-700">기간</dt>
                    <dd className="text-forest-900 mt-1">{program.durationDescription}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-forest-700">교육 목표</dt>
                    <dd className="text-forest-900 mt-1 leading-relaxed">{program.educationGoal}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-forest-700">비용</dt>
                    <dd className="text-forest-900 mt-1">{program.costDescription}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-forest-700">제한 사항</dt>
                    <dd className="text-forest-900 mt-1">{program.restrictions}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-forest-700">문의</dt>
                    <dd className="text-forest-900 mt-1">{program.contactInfo}</dd>
                  </div>
                </dl>
              </div>

              <h2 className="text-xl font-serif font-bold mb-4">필요 서류</h2>
              <ul className="list-disc list-inside space-y-2 text-abbey-700 mb-10">
                {program.requiredDocuments.map((doc, i) => (
                  <li key={i}>{doc}</li>
                ))}
              </ul>
            </>
          )}

          <h2 className="text-xl font-serif font-bold mb-4">지원 과정의 하루</h2>
          <div className="space-y-4 text-abbey-700 leading-relaxed">
            <p>
              지원자는 공동체 구성원과 함께 일과를 보냅니다.
              새벽 기도로 하루를 시작하고, 오전에는 노동에 참여하며,
              오후에는 신학 수업이나 개인 기도 시간을 가집니다.
            </p>
            <p>
              공동 식사, 저녁 예배, 큰 침묵 등 수도원적 생활 리듬을 경험하며,
              자신의 소명을 분별하는 소중한 시간을 보내게 됩니다.
            </p>
          </div>

          <div className="mt-10 bg-abbey-100/50 rounded-lg p-6 border border-abbey-200">
            <h3 className="font-bold mb-2">지원 문의</h3>
            <p className="text-sm text-abbey-700">
              지원 과정에 대한 문의는 예수원 사무부(033-552-0633)로 연락해 주시기 바랍니다.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
