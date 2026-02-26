import Link from "next/link"
import Breadcrumbs from "@/components/Breadcrumbs"

export const metadata = { title: "일과와 리듬" }

export default function RhythmPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "홈", path: "/" }, { label: "일과와 리듬" }]} />
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-serif font-bold mb-6">일과와 리듬</h1>
          <p className="text-lg text-abbey-600 leading-relaxed max-w-3xl mb-12">
            예수원의 하루는 기도와 노동, 침묵과 교제의 리듬으로 이루어져 있습니다.
            베네딕트의 &lsquo;기도하고 일하라(Ora et Labora)&rsquo; 정신을 따라 하루 전체가 하나님께 드리는 예배입니다.
          </p>
          <div className="bg-white rounded-lg p-8 shadow-sm border border-abbey-200 mb-12">
            <h2 className="text-xl font-serif font-bold mb-6">하루 일과</h2>
            <div className="space-y-4">
              {[
                { time: "05:30", label: "기상" },
                { time: "06:00", label: "조도 (아침기도)" },
                { time: "07:00", label: "아침 식사" },
                { time: "08:00", label: "노동" },
                { time: "12:00", label: "대도 (낮기도) · 점심 식사" },
                { time: "13:30", label: "노동 / 개인 시간" },
                { time: "17:30", label: "저녁 식사" },
                { time: "19:00", label: "만도 (저녁기도)" },
                { time: "21:00", label: "침묵 시간 · 취침" },
              ].map((item, i, arr) => (
                <div key={item.time} className={`flex items-center gap-4 py-2 ${i < arr.length - 1 ? "border-b border-abbey-100" : ""}`}>
                  <span className="text-forest-700 font-bold w-20 text-sm">{item.time}</span>
                  <span className="text-abbey-800">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { href: "/rhythm/worship", title: "예배", desc: "조도, 대도, 만도, 주일예배" },
              { href: "/rhythm/labor", title: "노동", desc: "농사, 건축, 청소, 요리" },
              { href: "/rhythm/silence", title: "침묵", desc: "묵상과 경청의 시간" },
              { href: "/rhythm/meals", title: "식사와 공동체", desc: "함께 먹는 교제의 시간" },
              { href: "/rhythm/angelus", title: "삼종", desc: "삼종 기도(Angelus)" },
            ].map(link => (
              <Link key={link.href} href={link.href} className="group block bg-white rounded-lg p-6 shadow-sm border border-abbey-200 hover:border-forest-300 transition-colors">
                <h3 className="font-serif font-bold text-lg mb-2 group-hover:text-forest-700">{link.title}</h3>
                <p className="text-sm text-abbey-600">{link.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
