import Link from "next/link"
import { notFound } from "next/navigation"
import Breadcrumbs from "@/components/Breadcrumbs"
import { getAllBooks, getBookById, getPersonById, getLecturesForBook } from "@/lib/data"

export function generateStaticParams() {
  return getAllBooks().map(b => ({ id: b.objectId }))
}

export function generateMetadata({ params }: { params: { id: string } }) {
  const book = getBookById(params.id)
  return { title: book?.titleKo ?? "서적" }
}

export default function BookDetailPage({ params }: { params: { id: string } }) {
  const book = getBookById(params.id)
  if (!book) notFound()

  const authors = book.authorIds.map(id => getPersonById(id)).filter(Boolean)
  const relatedLectures = getLecturesForBook(book.objectId)

  return (
    <>
      <Breadcrumbs items={[
        { label: "홈", path: "/" },
        { label: "설립자와 유산", path: "/founders" },
        { label: "서적 아카이브", path: "/founders/archive/books" },
        { label: book.titleKo },
      ]} />
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-serif font-bold mb-2">{book.titleKo}</h1>
          {book.titleEn && <p className="text-lg text-abbey-500 mb-6">{book.titleEn}</p>}

          <div className="bg-abbey-50 rounded-lg p-6 border border-abbey-200 mb-8">
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              {authors.length > 0 && (
                <div>
                  <dt className="font-medium text-abbey-600">저자</dt>
                  <dd className="text-abbey-800">{authors.map(a => a?.nameKo).join(", ")}</dd>
                </div>
              )}
              <div>
                <dt className="font-medium text-abbey-600">출판사</dt>
                <dd className="text-abbey-800">{book.publisher}</dd>
              </div>
              {book.publicationYear && (
                <div>
                  <dt className="font-medium text-abbey-600">출판 연도</dt>
                  <dd className="text-abbey-800">{book.publicationYear}년</dd>
                </div>
              )}
              {book.pageCount && (
                <div>
                  <dt className="font-medium text-abbey-600">쪽수</dt>
                  <dd className="text-abbey-800">{book.pageCount}쪽</dd>
                </div>
              )}
              {book.isbn && (
                <div>
                  <dt className="font-medium text-abbey-600">ISBN</dt>
                  <dd className="text-abbey-800">{book.isbn}</dd>
                </div>
              )}
              {book.priceKrw && (
                <div>
                  <dt className="font-medium text-abbey-600">가격</dt>
                  <dd className="text-abbey-800">{book.priceKrw.toLocaleString()}원</dd>
                </div>
              )}
              <div>
                <dt className="font-medium text-abbey-600">구매 가능 여부</dt>
                <dd className="text-abbey-800">{book.inPrint ? "구매 가능" : "품절"}</dd>
              </div>
              <div>
                <dt className="font-medium text-abbey-600">언어</dt>
                <dd className="text-abbey-800">{book.language === "ko" ? "한국어" : book.language}</dd>
              </div>
            </dl>
          </div>

          {book.descriptionKo && (
            <div className="mb-8">
              <h2 className="text-xl font-serif font-bold mb-3">소개</h2>
              <p className="text-abbey-700 leading-relaxed">{book.descriptionKo}</p>
            </div>
          )}

          {book.theologicalTopics.length > 0 && (
            <div className="mb-8">
              <h2 className="text-xl font-serif font-bold mb-3">주제</h2>
              <div className="flex flex-wrap gap-2">
                {book.theologicalTopics.map(t => (
                  <Link key={t} href={`/founders/archive/books?topic=${t}`}
                    className="text-sm bg-forest-50 text-forest-700 px-3 py-1 rounded hover:bg-forest-100">
                    {t}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {relatedLectures.length > 0 && (
            <div className="mb-8">
              <h2 className="text-xl font-serif font-bold mb-3">관련 강의</h2>
              <div className="space-y-3">
                {relatedLectures.map(lec => (
                  <Link key={lec.objectId} href={`/founders/archive/lectures/${lec.objectId}`}
                    className="block bg-white rounded-lg p-4 border border-abbey-200 hover:border-forest-300 transition-colors">
                    <p className="font-medium">{lec.titleKo}</p>
                    {lec.titleEn && <p className="text-sm text-abbey-500">{lec.titleEn}</p>}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {book.inPrint && (
            <div className="bg-forest-50 rounded-lg p-6 border border-forest-200 mb-8">
              <h2 className="text-lg font-serif font-bold mb-2 text-forest-800">구매 안내</h2>
              <p className="text-sm text-forest-700">
                이 책은 예수원 사무부(033-552-0633)를 통해 구매하실 수 있습니다.
              </p>
            </div>
          )}

          <div className="mt-10">
            <Link href="/founders/archive/books" className="text-sm text-forest-700 hover:text-forest-900 font-medium">
              &larr; 서적 목록으로 돌아가기
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
