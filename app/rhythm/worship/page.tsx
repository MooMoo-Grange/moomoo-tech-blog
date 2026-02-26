import Breadcrumbs from "@/components/Breadcrumbs"
import { getAllWorshipServices } from "@/lib/data"

export const metadata = { title: "예배" }

export default function WorshipPage() {
  const worshipServices = getAllWorshipServices()

  return (
    <>
      <Breadcrumbs items={[{ label: "홈", path: "/" }, { label: "일과와 리듬", path: "/rhythm" }, { label: "예배" }]} />
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-serif font-bold mb-6">예배</h1>
          <p className="text-lg text-abbey-600 leading-relaxed mb-12">
            예수원의 예배는 초대교회와 수도원 전통에 뿌리를 둔 정시기도(Daily Office)를 중심으로 합니다.
          </p>
          <div className="space-y-6">
            {worshipServices.map(ws => (
              <div key={ws.serviceId} className="bg-white rounded-lg p-6 shadow-sm border border-abbey-200">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                  <h2 className="text-xl font-serif font-bold">{ws.nameKo}</h2>
                  <span className="text-forest-700 font-medium text-sm mt-1 sm:mt-0">
                    {ws.timeKo}
                  </span>
                </div>
                {ws.nameEn && <p className="text-abbey-500 text-sm mb-2">{ws.nameEn}</p>}
                <p className="text-abbey-700 leading-relaxed">{ws.descriptionKo}</p>
                {ws.mandatoryForVisitors && (
                  <div className="mt-3">
                    <span className="inline-block text-xs bg-forest-100 text-forest-700 px-3 py-1 rounded-full font-medium">방문자 필참</span>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-12 bg-abbey-100/50 rounded-lg p-6 border border-abbey-200">
            <h3 className="font-serif font-bold mb-3">예배 참여 안내</h3>
            <ul className="space-y-2 text-sm text-abbey-700">
              <li>&bull; 방문자는 공동체의 예배에 함께 참여하시기 바랍니다.</li>
              <li>&bull; 예배 시간 5분 전까지 예배당에 입장해 주세요.</li>
              <li>&bull; 예배 중에는 휴대전화를 꺼 주세요.</li>
              <li>&bull; 성찬식은 세례 받은 그리스도인에게 열려 있습니다.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
