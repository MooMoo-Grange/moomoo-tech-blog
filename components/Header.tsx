"use client"
import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { navItems } from "@/lib/data"
import LanguageSwitcher from "@/components/LanguageSwitcher"

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="bg-white border-b border-abbey-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-3 shrink-0">
            <span className="text-xl font-serif font-bold text-forest-700">예수원</span>
            <span className="text-sm text-abbey-500 hidden sm:inline">Jesus Abbey</span>
          </Link>
          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="주 메뉴">
            {navItems.map(item => (
              <div key={item.key} className="relative group">
                <Link href={item.path}
                  className={`px-3 py-5 text-sm font-medium transition-colors inline-block ${pathname.startsWith(item.path) ? "text-forest-700 border-b-2 border-forest-600" : "text-abbey-700 hover:text-forest-700"}`}>
                  {item.labelKo}
                </Link>
                {item.children && (
                  <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-lg border border-abbey-200 rounded-b-lg min-w-[200px] z-50">
                    {item.children.map(child => (
                      <Link key={child.key} href={child.path} className="block px-4 py-2.5 text-sm text-abbey-700 hover:bg-abbey-50 hover:text-forest-700 transition-colors">
                        {child.labelKo}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
          <div className="flex items-center gap-1">
            <LanguageSwitcher />
            <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2 text-abbey-600 hover:text-forest-700" aria-label="메뉴 열기">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="lg:hidden bg-white border-t border-abbey-200" aria-label="모바일 메뉴">
          <div className="px-4 py-3 space-y-1">
            {navItems.map(item => (
              <div key={item.key}>
                <Link href={item.path} onClick={() => setMobileOpen(false)} className="block py-2 text-abbey-700 font-medium hover:text-forest-700">{item.labelKo}</Link>
                {item.children && (
                  <div className="pl-4 space-y-1">
                    {item.children.map(child => (
                      <Link key={child.key} href={child.path} onClick={() => setMobileOpen(false)} className="block py-1.5 text-sm text-abbey-500 hover:text-forest-700">{child.labelKo}</Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
