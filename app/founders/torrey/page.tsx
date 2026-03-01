import Link from "next/link"
import Breadcrumbs from "@/components/Breadcrumbs"
import { getPersonById, getAllBooks } from "@/lib/data"
import { lectureCategories, getLecturesByCategory } from "@/lib/data/torrey-lectures"

export const metadata = { title: "대천덕 (아처 토레) 신부" }

export default function TorreyPage() {
  const person = getPersonById("RAT")
  const books = getAllBooks().filter(b => b.authorIds?.includes("RAT")).slice(0, 5)

  if (!person) return <div className="py-16 text-center text-abbey-500">정보를 찾을 수 없습니다.</div>

  return (
    <>
      <Breadcrumbs items={[{ label: "홈", path: "/" }, { label: "설립자", path: "/founders" }, { label: person.nameKo }]} />
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-8 mb-8">
            <div className="relative w-full sm:w-56 aspect-[3/4] rounded-lg overflow-hidden shrink-0 shadow-md">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E1%84%83%E1%85%A2%E1%84%8E%E1%85%A5%E1%86%AB%E1%84%83%E1%85%A5%E1%86%A8%20%E1%84%89%E1%85%B5%E1%86%AB%E1%84%87%E1%85%AE%E1%84%82%E1%85%B5%E1%86%B7%20%E1%84%80%E1%85%B5%E1%84%83%E1%85%A9%E1%84%89%E1%85%A1%E1%84%8C%E1%85%B5%E1%86%AB.png-NsvieAl7Oe3aoU4gEbkVgq8J8o8WZW.jpeg"
                alt="기도하는 대천덕 신부"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-serif font-bold mb-2">{person.nameKo}</h1>
              <p className="text-abbey-500 text-lg mb-2">{person.nameEn}</p>
              <p className="text-abbey-500 text-sm mb-6">
                {person.birthDate && <>{person.birthDate}</>}
                {person.deathDate && <> &ndash; {person.deathDate}</>}
                {person.role && <> | {person.role}</>}
              </p>
              <p className="text-abbey-700 leading-relaxed">{person.biographySummary}</p>
            </div>
          </div>
          <div className="space-y-8">
            {person.chronology && person.chronology.length > 0 && (
              <div>
                <h2 className="text-xl font-serif font-bold mb-4">연대기</h2>
                <div className="space-y-3">
                  {person.chronology.map((event, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <span className="text-forest-700 font-bold text-sm whitespace-nowrap min-w-[60px]">{event.period}</span>
                      <span className="text-abbey-700 text-sm">{event.description}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {/* Lecture Archive Index */}
            <div>
              <div className="flex items-baseline justify-between mb-6">
                <h2 className="text-xl font-serif font-bold">강의 아카이브</h2>
                <Link href="/founders/torrey/lectures" className="text-sm text-forest-700 hover:text-forest-900 font-medium">
                  전체 보기 &rarr;
                </Link>
              </div>
              <div className="space-y-6">
                {lectureCategories.map((cat) => {
                  const lectures = getLecturesByCategory(cat.key)
                  if (lectures.length === 0) return null
                  return (
                    <div key={cat.key} className="bg-white rounded-lg p-5 shadow-sm border border-abbey-200">
                      <h3 className="font-serif font-bold text-abbey-800 mb-1">{cat.label}</h3>
                      <p className="text-xs text-abbey-400 mb-3">{cat.labelEn} &middot; {lectures.length}편</p>
                      <div className="flex flex-wrap gap-2">
                        {lectures.map((lec) => (
                          <Link
                            key={lec.slug}
                            href={`/founders/torrey/lectures/${lec.slug}`}
                            className="text-xs bg-abbey-50 text-abbey-700 hover:bg-forest-50 hover:text-forest-700 border border-abbey-200 hover:border-forest-300 rounded-full px-3 py-1.5 transition-colors"
                          >
                            {lec.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {books.length > 0 && (
              <div>
                <h2 className="text-xl font-serif font-bold mb-4">저작</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {books.map(book => (
                    <Link key={book.objectId} href={`/founders/archive/books/${book.objectId}`}
                      className="block bg-white rounded-lg p-4 shadow-sm border border-abbey-200 hover:border-forest-300 transition-colors">
                      <h3 className="font-medium text-sm">{book.titleKo}</h3>
                      <p className="text-abbey-500 text-xs mt-1">
                        {book.publisher && <>{book.publisher}</>}
                        {book.publicationYear && <> &middot; {book.publicationYear}</>}
                      </p>
                    </Link>
                  ))}
                </div>
                <Link href="/founders/archive/books" className="inline-block mt-4 text-forest-700 text-sm font-medium hover:text-forest-800">
                  전체 저작 보기 &rarr;
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
