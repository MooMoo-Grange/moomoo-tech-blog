import Breadcrumbs from "@/components/Breadcrumbs"
import { getProgramByType } from "@/lib/data"

export const metadata = { title: "성령세미나" }

export default function SeminarPage() {
  const seminar = getProgramByType("seminar")

  return (
    <>
      <Breadcrumbs items={[{ label: "홈", path: "/" }, { label: "양성과 교육", path: "/formation" }, { label: "성령세미나" }]} />
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-serif font-bold mb-6">성령세미나</h1>
          <p className="text-lg text-abbey-600 leading-relaxed mb-10">
            성령의 인격과 사역에 대한 성경적 이해를 돕고, 성령 체험의 시간을 갖는 집중 세미나입니다.
          </p>

          {seminar && (
            <div className="bg-forest-50 rounded-lg p-8 border border-forest-200 mb-10">
              <h2 className="text-xl font-serif font-bold mb-4 text-forest-800">{seminar.nameKo}</h2>
              <dl className="space-y-4 text-sm">
                <div>
                  <dt className="font-medium text-forest-700">기간</dt>
                  <dd className="text-forest-900 mt-1">{seminar.durationDescription}</dd>
                </div>
                <div>
                  <dt className="font-medium text-forest-700">교육 목표</dt>
                  <dd className="text-forest-900 mt-1 leading-relaxed">{seminar.educationGoal}</dd>
                </div>
                <div>
                  <dt className="font-medium text-forest-700">비용</dt>
                  <dd className="text-forest-900 mt-1">{seminar.costDescription}</dd>
                </div>
                <div>
                  <dt className="font-medium text-forest-700">등록</dt>
                  <dd className="text-forest-900 mt-1">{seminar.restrictions}</dd>
                </div>
                <div>
                  <dt className="font-medium text-forest-700">필요 서류</dt>
                  <dd className="text-forest-900 mt-1">
                    <ul className="list-disc list-inside">
                      {seminar.requiredDocuments.map((doc, i) => (
                        <li key={i}>{doc}</li>
                      ))}
                    </ul>
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-forest-700">문의</dt>
                  <dd className="text-forest-900 mt-1">{seminar.contactInfo}</dd>
                </div>
              </dl>
            </div>
          )}

          <h2 className="text-xl font-serif font-bold mb-4">세미나 주요 내용</h2>
          <div className="space-y-6 mb-10">
            <div className="bg-white rounded-lg p-6 border border-abbey-200">
              <h3 className="font-bold mb-2">성령세례</h3>
              <p className="text-sm text-abbey-700 leading-relaxed">
                성령세례의 성경적 근거와 의미를 학습하고, 성령 충만의 체험을 추구합니다.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-abbey-200">
              <h3 className="font-bold mb-2">성령의 은사</h3>
              <p className="text-sm text-abbey-700 leading-relaxed">
                성령의 은사에 대한 성경적 이해와 은사의 올바른 사용법을 배웁니다.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-abbey-200">
              <h3 className="font-bold mb-2">치유와 회복</h3>
              <p className="text-sm text-abbey-700 leading-relaxed">
                속사람 치유, 회개와 고백, 용서를 통한 영적 회복의 과정을 경험합니다.
              </p>
            </div>
          </div>

          <div className="bg-abbey-100/50 rounded-lg p-6 border border-abbey-200">
            <h3 className="font-bold mb-2">참가 안내</h3>
            <p className="text-sm text-abbey-700 leading-relaxed">
              성령세미나 일정은 공지사항을 통해 안내됩니다. 참가를 원하시는 분은
              사무부(033-552-0633)에 연락하여 등록해 주시기 바랍니다.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
