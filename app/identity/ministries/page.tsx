import Breadcrumbs from "@/components/Breadcrumbs"
import { getAllMinistryDomains } from "@/lib/data"

export const metadata = { title: "7대 사역" }

export default function MinistriesPage() {
  const ministries = getAllMinistryDomains()

  return (
    <>
      <Breadcrumbs items={[{ label: "홈", path: "/" }, { label: "정체성", path: "/identity" }, { label: "7대 사역" }]} />
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-serif font-bold mb-6">7대 사역</h1>
          <p className="text-lg text-abbey-600 leading-relaxed max-w-3xl mb-12">
            예수원은 7개의 사역 영역을 통해 하나님 나라의 다양한 면을 섬기고 있습니다.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ministries.map(m => (
              <div key={m.code} className="bg-white rounded-lg p-6 shadow-sm border border-abbey-200">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-block bg-forest-100 text-forest-700 text-xs font-bold px-2 py-1 rounded">{m.code}</span>
                  <h2 className="font-serif font-bold text-lg">{m.nameKo}</h2>
                </div>
                <p className="text-abbey-500 text-sm mb-3">{m.nameEn}</p>
                {m.subCategories && (
                  <ul className="space-y-1">
                    {m.subCategories.map((sub, i) => (
                      <li key={i} className="text-sm text-abbey-600 flex items-start">
                        <span className="text-forest-500 mr-2">&bull;</span>
                        <span>{sub}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
