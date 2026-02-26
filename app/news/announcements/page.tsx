import Breadcrumbs from "@/components/Breadcrumbs"

export const metadata = { title: "공지사항" }

export default function AnnouncementsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "홈", path: "/" }, { label: "소식과 공동체", path: "/news" }, { label: "공지사항" }]} />
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-serif font-bold mb-6">공지사항</h1>
          <p className="text-lg text-abbey-600 leading-relaxed mb-10">
            예수원의 주요 소식과 공지사항을 전합니다.
          </p>

          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-abbey-200">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs bg-forest-100 text-forest-700 px-2 py-1 rounded">공지</span>
                <span className="text-xs text-abbey-500">2026.01.01</span>
              </div>
              <h2 className="text-lg font-serif font-bold mb-2">예수원 홈페이지가 새롭게 단장되었습니다</h2>
              <p className="text-sm text-abbey-600 leading-relaxed">
                예수원을 더 잘 알리고, 방문을 준비하시는 분들에게 유용한 정보를 제공하기 위해
                홈페이지를 새롭게 만들었습니다. 많은 이용 바랍니다.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-abbey-200">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs bg-forest-100 text-forest-700 px-2 py-1 rounded">안내</span>
                <span className="text-xs text-abbey-500">2026.01.01</span>
              </div>
              <h2 className="text-lg font-serif font-bold mb-2">방문 예약 안내</h2>
              <p className="text-sm text-abbey-600 leading-relaxed">
                예수원 방문을 원하시는 분은 사무부(033-552-0633)에 전화로 예약해 주시기 바랍니다.
                방문 일정, 인원, 목적을 알려주시면 안내해 드리겠습니다.
              </p>
            </div>
          </div>

          <div className="mt-10 text-center text-sm text-abbey-500">
            <p>더 많은 소식은 추후 업데이트됩니다.</p>
          </div>
        </div>
      </section>
    </>
  )
}
