import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-abbey-900 text-abbey-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-serif text-lg mb-3">예수원 Jesus Abbey</h3>
            <p className="text-sm leading-relaxed">(우)26000 강원도 태백시 외나무골길 97</p>
          </div>
          <div>
            <h4 className="text-white text-sm font-medium mb-3">예약안내/손님부</h4>
            <p className="text-sm leading-relaxed">
              TEL : 033)552-0662<br />
              <a href="mailto:guestjabbey@hanmail.net" className="hover:text-white transition-colors">guestjabbey@hanmail.net</a>
            </p>
          </div>
          <div>
            <h4 className="text-white text-sm font-medium mb-3">사무부</h4>
            <p className="text-sm leading-relaxed">
              TEL : 033)552-0633<br />
              <a href="mailto:jabbey65@hanmail.net" className="hover:text-white transition-colors">jabbey65@hanmail.net</a>
            </p>
          </div>
        </div>
        <div className="border-t border-abbey-700 mt-8 pt-6 text-center text-xs text-abbey-500">
          <p className="italic mb-1">&ldquo;For he was looking forward to the city with foundations, whose architect and builder is God.&rdquo; (Hebrews 11:10)</p>
          <p>Copyright 2026 Jesus Abbey All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
