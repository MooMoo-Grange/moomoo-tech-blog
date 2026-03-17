import Link from "next/link"
import Breadcrumbs from "@/components/Breadcrumbs"
import { getPersonById } from "@/lib/data"

export const metadata = { title: "설립 이야기" }

export default function FoundationPage() {
  const founder = getPersonById("RAT")

  return (
    <>
      <Breadcrumbs items={[{ label: "홈", path: "/" }, { label: "정체성", path: "/identity" }, { label: "설립 이야기" }]} />
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-serif font-bold mb-8">설립 이야기</h1>
          <div className="space-y-6">
            <p className="text-lg text-abbey-600 leading-relaxed">
              1965년, 무디 바이블스쿨 초대 원장 R.A. Torrey I 의 손자인 R.A. Torrey III(대천덕) 신부는 강원도 덕항산 기슭에
              기도와 노동, 공동체 생활을 중심으로 하는 수도 공동체를 설립하였습니다.
            </p>
            {founder && (
              <div className="bg-abbey-100/50 rounded-lg p-6 border border-abbey-200">
                <h2 className="text-xl font-serif font-bold mb-3">설립자: {founder.nameKo}</h2>
                <p className="text-sm text-abbey-500 mb-3">
                  {founder.nameEn}
                  {founder.birthDate && <> | {founder.birthDate}</>}
                  {founder.deathDate && <> &ndash; {founder.deathDate}</>}
                </p>
                <p className="text-abbey-700 leading-relaxed">{founder.biographySummary}</p>
                <Link href="/founders/torrey" className="inline-block mt-4 text-forest-700 hover:text-forest-800 text-sm font-medium">
                  대천덕 신부 더 알아보기 &rarr;
                </Link>
              </div>
            )}
            <h2 className="text-xl font-serif font-bold mt-8">설립 배경</h2>
            <p className="text-abbey-700 leading-relaxed">
              대천덕 신부는 중국에서 선교사의 자녀로 태어났습니다. 1957년 한국에 와서 성미가엘 신학대학원(지금의 성공회대학교) 원장으로 재직하다 1964년 원장직을 사임하고, 초대교회와 같은 공동체를 꿈꾸며 덕항산 기슭에 예수원 공동체의 터전을 마련하였습니다.
            </p>
            <h2 className="text-xl font-serif font-bold mt-8">이름의 의미</h2>
            <p className="text-abbey-700 leading-relaxed">
              &lsquo;예수원(Jesus Abbey)&rsquo;은 예수 그리스도를 중심으로 한 수도원적 공동체라는 뜻입니다.
              서양의 수도원(Abbey) 전통과 한국적 영성이 만나는 곳, 동서양이 그리스도 안에서 하나 되는 곳입니다.
            </p>
            <h2 className="text-xl font-serif font-bold mt-8">연대기</h2>
            {founder?.chronology && (
              <div className="space-y-3">
                {founder.chronology.map((event, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <span className="text-forest-700 font-bold text-sm whitespace-nowrap min-w-[60px]">{event.period}</span>
                    <span className="text-abbey-700 text-sm">{event.description}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
