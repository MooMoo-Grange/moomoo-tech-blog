import Link from "next/link"
import Breadcrumbs from "@/components/Breadcrumbs"
import { getAllBooks, getPersonById } from "@/lib/data"

export const metadata = { title: "서적 목록" }

export default function CatalogPage() {
  const books = getAllBooks()
  const inPrintBooks = books.filter(b => b.inPrint)
  const outOfPrintBooks = books.filter(b => !b.inPrint)

  return (
    <>
      <Breadcrumbs items={[{ label: "홈", path: "/" }, { label: "출판과 보급", path: "/publications" }, { label: "서적 목록" }]} />
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-serif font-bold mb-6">서적 목록</h1>
          <p className="text-lg text-abbey-600 leading-relaxed mb-10">
            대천덕 신부의 저서와 예수원 관련 서적입니다. 구매는 예수원 사무부(033-552-0633)를 통해 가능합니다.
          </p>

          <h2 className="text-xl font-serif font-bold mb-4">구매 가능 도서</h2>
          <div className="space-y-4 mb-12">
            {inPrintBooks.map(book => {
              const authors = book.authorIds.map(id => getPersonById(id)).filter(Boolean)
              return (
                <Link key={book.objectId} href={`/founders/archive/books/${book.objectId}`}
                  className="block bg-white rounded-lg p-6 border border-abbey-200 hover:border-forest-300 transition-colors">
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <h3 className="font-serif font-bold">{book.titleKo}</h3>
                      {book.titleEn && <p className="text-sm text-abbey-500">{book.titleEn}</p>}
                      <p className="text-xs text-abbey-500 mt-1">
                        {authors.map(a => a?.nameKo).join(", ")} · {book.publisher}
                        {book.publicationYear && ` · ${book.publicationYear}년`}
                      </p>
                    </div>
                    {book.priceKrw && (
                      <span className="text-sm font-medium text-forest-700 whitespace-nowrap">
                        {book.priceKrw.toLocaleString()}원
                      </span>
                    )}
                  </div>
                </Link>
              )
            })}
          </div>

          {outOfPrintBooks.length > 0 && (
            <>
              <h2 className="text-xl font-serif font-bold mb-4">품절 도서</h2>
              <div className="space-y-3 mb-10">
                {outOfPrintBooks.map(book => {
                  const authors = book.authorIds.map(id => getPersonById(id)).filter(Boolean)
                  return (
                    <div key={book.objectId} className="bg-abbey-50 rounded-lg p-4 border border-abbey-200">
                      <h3 className="font-serif font-bold text-abbey-600">{book.titleKo}</h3>
                      <p className="text-xs text-abbey-500 mt-1">
                        {authors.map(a => a?.nameKo).join(", ")} · {book.publisher}
                        {book.publicationYear && ` · ${book.publicationYear}년`}
                      </p>
                      <span className="text-xs text-abbey-400 mt-1 inline-block">품절</span>
                    </div>
                  )
                })}
              </div>
            </>
          )}

          <div className="bg-forest-50 rounded-lg p-6 border border-forest-200">
            <h3 className="font-bold text-forest-800 mb-2">구매 안내</h3>
            <p className="text-sm text-forest-700 leading-relaxed">
              서적 구매를 원하시는 분은 예수원 사무부(033-552-0633)로 연락해 주시기 바랍니다.
              일부 서적은 온라인 서점에서도 구매 가능합니다.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
