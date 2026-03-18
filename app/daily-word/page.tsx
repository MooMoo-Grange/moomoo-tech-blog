import Link from "next/link"
import Breadcrumbs from "@/components/Breadcrumbs"
import { getAllDailyWords, getLatestDailyWord } from "@/lib/notion-daily-word"

export const revalidate = 3600

export const metadata = {
  title: "오늘의 묵상",
  description: "예수원 공동체의 매일 묵상. 말씀과 기도로 하루를 여는 거룩한 독서(Lectio Divina)의 전통.",
}

export default async function DailyWordPage() {
  const todayWord = await getLatestDailyWord()
  const allWords = await getAllDailyWords()

  return (
    <>
      <Breadcrumbs items={[{ label: "홈", path: "/" }, { label: "오늘의 묵상" }]} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-abbey-50 to-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sacred-gold/70 font-sans text-sm tracking-widest uppercase mb-4">
            Daily Word
          </p>
          <h1 className="text-4xl font-serif font-bold text-abbey-900 mb-4">
            오늘의 묵상
          </h1>
          <p className="text-lg text-abbey-600 leading-relaxed">
            읽는다. 반복한다. 묵상한다. 기도한다. <br />
            네 단계가 하나의 호흡이 될 때까지.
          </p>
        </div>
      </section>

      {/* Today's Word */}
      {todayWord && (
        <section className="py-12">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <article className="bg-white rounded-xl shadow-md border border-abbey-200 overflow-hidden">
              <div className="bg-forest-50 px-6 py-4 border-b border-forest-100">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-forest-700">
                    {todayWord.date
                      ? new Date(todayWord.date).toLocaleDateString("ko-KR", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                          weekday: "long",
                        })
                      : "오늘"}
                  </p>
                  {todayWord.season && (
                    <span className="text-xs bg-forest-100 text-forest-600 px-2 py-1 rounded">
                      {todayWord.season}
                    </span>
                  )}
                </div>
              </div>
              <div className="p-6 sm:p-8">
                <h2 className="text-2xl font-serif font-bold text-abbey-900 mb-4">
                  {todayWord.title}
                </h2>
                {todayWord.scripture && (
                  <p className="text-forest-700 font-medium text-sm mb-6 bg-forest-50 px-4 py-2 rounded">
                    {todayWord.scripture}
                  </p>
                )}
                {todayWord.meditation && (
                  <div className="text-abbey-700 leading-relaxed whitespace-pre-line mb-6">
                    {todayWord.meditation}
                  </div>
                )}
                {todayWord.prayer && (
                  <div className="border-t border-abbey-200 pt-6 mt-6">
                    <p className="text-sm font-medium text-abbey-500 mb-2">기도</p>
                    <p className="text-abbey-600 italic leading-relaxed whitespace-pre-line">
                      {todayWord.prayer}
                    </p>
                  </div>
                )}
                {todayWord.author && (
                  <p className="text-sm text-abbey-400 mt-6 text-right">— {todayWord.author}</p>
                )}
              </div>
            </article>
          </div>
        </section>
      )}

      {/* Archive List */}
      <section className="py-12 bg-abbey-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-serif font-bold text-abbey-900 mb-6">묵상 아카이브</h2>
          {allWords.length === 0 ? (
            <p className="text-abbey-500 text-center py-12">
              아직 게시된 묵상이 없습니다. 곧 올라올 예정입니다.
            </p>
          ) : (
            <div className="space-y-3">
              {allWords.map((word) => (
                <Link
                  key={word.id}
                  href={`/daily-word/${word.id}`}
                  className="block bg-white rounded-lg p-5 border border-abbey-200 hover:border-forest-300 transition-colors"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif font-bold text-abbey-800 mb-1 truncate">
                        {word.title}
                      </h3>
                      {word.scripture && (
                        <p className="text-sm text-forest-600">{word.scripture}</p>
                      )}
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="text-xs text-abbey-400">
                        {word.date
                          ? new Date(word.date).toLocaleDateString("ko-KR", {
                              month: "short",
                              day: "numeric",
                            })
                          : ""}
                      </p>
                      {word.season && (
                        <p className="text-xs text-abbey-300 mt-1">{word.season}</p>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
