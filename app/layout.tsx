import type { Metadata } from "next"
import Script from "next/script"
import "./globals.css"
import TimeThemeProvider from "@/components/layout/TimeThemeProvider"
import Navigation from "@/components/layout/Navigation"
import SiteFooter from "@/components/layout/SiteFooter"

export const metadata: Metadata = {
  title: {
    default: "예수원 Jesus Abbey — 덕항산 기슭의 수도 공동체",
    template: "%s | 예수원 Jesus Abbey",
  },
  description:
    "강원도 태백 덕항산 기슭에서 기도와 노동, 공동체의 삶을 통해 하나님 나라를 살아가는 수도 공동체. 1965년 무디 바이블스쿨 초대 원장 R.A. Torrey I 의 손자 R.A. Torrey III(대천덕) 신부가 세운 예수원의 60년 이야기.",
  keywords: [
    "예수원", "Jesus Abbey",
    "수도 공동체", "기도", "노동",
    "대천덕", "Archer Torrey",
    "덕항산", "태백",
    "삼수령무무목장", "무무곳간",
    "네번째강", "Fourth River Project",
  ],
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: "예수원 Jesus Abbey",
    title: "예수원 Jesus Abbey — 덕항산 기슭의 수도 공동체",
    description:
      "기도로 시작하고 기도로 마치는 하루. 1965년부터 이어온 기도와 노동, 공동체의 리듬.",
  },
  alternates: {
    canonical: "https://jesusabbey.org",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Noto+Sans+KR:wght@300;400;500;700&family=Noto+Serif+KR:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-white text-abbey-800 antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "예수원 Jesus Abbey",
              alternateName: ["Jesus Abbey", "예수원"],
              url: "https://jesusabbey.org",
              description:
                "강원도 태백 덕항산 기슭의 수도 공동체. 기도, 노동, 공동체의 삶을 통해 하나님 나라를 살아갑니다.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "외나무골길 97",
                addressLocality: "태백시",
                addressRegion: "강원특별자치도",
                postalCode: "26000",
                addressCountry: "KR",
              },
              telephone: "+82-33-552-0633",
            }),
          }}
        />
        <Script
          src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          strategy="afterInteractive"
        />
        <TimeThemeProvider>
          <Navigation />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </TimeThemeProvider>
      </body>
    </html>
  )
}
