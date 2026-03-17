import Link from "next/link"

export default function SiteFooter() {
  return (
    <footer className="bg-abbey-900 text-abbey-300 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* 상단 — 성경 구절 */}
        <div className="text-center mb-12">
          <p className="font-serif text-abbey-400 italic text-lg leading-relaxed max-w-reading mx-auto">
            &ldquo;For he was looking forward to the city with foundations,
            <br className="hidden sm:inline" />
            whose architect and builder is God.&rdquo;
          </p>
          <p className="text-abbey-500 text-sm mt-2 font-sans">Hebrews 11:10</p>
        </div>

        <hr className="border-abbey-700 mb-12 max-w-full" />

        {/* 중간 — 정보 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-sm">
          <div>
            <h3 className="text-white font-serif text-base mb-3">예수원 Jesus Abbey</h3>
            <p className="leading-relaxed text-abbey-400">
              (우)26000 강원특별자치도 태백시 외나무골길 97
              <br />
              덕항산 기슭의 수도 공동체
            </p>
          </div>
          <div>
            <h4 className="text-white font-sans text-sm font-medium mb-3">손님부</h4>
            <p className="leading-relaxed text-abbey-400">
              TEL: 033-552-0662
              <br />
              <a href="mailto:guestjabbey@hanmail.net" className="hover:text-sacred-candle transition-colors">
                guestjabbey@hanmail.net
              </a>
            </p>
          </div>
          <div>
            <h4 className="text-white font-sans text-sm font-medium mb-3">사무부</h4>
            <p className="leading-relaxed text-abbey-400">
              TEL: 033-552-0633
              <br />
              <a href="mailto:jabbey65@hanmail.net" className="hover:text-sacred-candle transition-colors">
                jabbey65@hanmail.net
              </a>
            </p>
          </div>
          <div>
            <h4 className="text-white font-sans text-sm font-medium mb-3">무무목장 MooMoo Grange</h4>
            <p className="leading-relaxed text-abbey-400">
              TEL: 033-553-3395
              <br />
              FAX: 033-553-1405
              <br />
              <a href="mailto:jp@moomooranch.net" className="hover:text-sacred-candle transition-colors">
                jp@moomooranch.net
              </a>
            </p>
          </div>
        </div>

        {/* 하단 — 네비게이션 + 카피라이트 */}
        <div className="border-t border-abbey-700 mt-12 pt-8">
          <nav className="flex flex-wrap justify-center gap-6 text-xs text-abbey-500 mb-6">
            <Link href="/the-day" className="hover:text-abbey-300 transition-colors">예수원의 하루</Link>
            <Link href="/story" className="hover:text-abbey-300 transition-colors">이야기</Link>
            <Link href="/founders/archive/lectures" className="hover:text-abbey-300 transition-colors">소리</Link>
            <Link href="/identity/moomoo-grange" className="hover:text-abbey-300 transition-colors">무무목장</Link>
            <Link href="/join" className="hover:text-abbey-300 transition-colors">함께하기</Link>
            <Link href="/blog" className="hover:text-abbey-300 transition-colors">블로그</Link>
          </nav>
          <p className="text-center text-xs text-abbey-600">
            &copy; 2026 Jesus Abbey. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
