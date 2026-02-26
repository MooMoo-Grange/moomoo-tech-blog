import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-abbey-900 text-abbey-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-serif text-lg mb-3">예수원 Jesus Abbey</h3>
            <p className="text-sm leading-relaxed">강원도 태백시 삼수동 삼수령<br />태백산 기슭의 수도 공동체</p>
            <p className="text-sm mt-2">Tel: 033-552-0633</p>
          </div>
          <div>
            <h4 className="text-white text-sm font-medium mb-3">바로가기</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/visit/about" className="hover:text-white transition-colors">예수원은 어떤 곳인가</Link></li>
              <li><Link href="/visit/how" className="hover:text-white transition-colors">방문 안내</Link></li>
              <li><Link href="/rhythm/worship" className="hover:text-white transition-colors">예배 안내</Link></li>
              <li><Link href="/news/contact" className="hover:text-white transition-colors">연락처</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-sm font-medium mb-3">문의</h4>
            <p className="text-sm leading-relaxed">방문, 프로그램, 기도 요청 등<br />모든 문의는 사무부로 연락해 주세요.</p>
            <p className="text-sm mt-2 font-medium text-white">033-552-0633</p>
          </div>
        </div>
        <div className="border-t border-abbey-700 mt-8 pt-6 text-center text-xs text-abbey-500">
          <p>&ldquo;기초가 있는 성을 바라보았으니, 그 건축자와 만드신 이는 하나님이시라&rdquo; (히브리서 11:10)</p>
        </div>
      </div>
    </footer>
  )
}
