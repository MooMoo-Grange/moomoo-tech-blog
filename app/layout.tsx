import type { Metadata } from "next"
import Script from "next/script"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: {
    default: "예수원 Jesus Abbey | 삼수령무무목장 · 무무곳간 · 네번째강 프로젝트",
    template: "%s | 예수원 Jesus Abbey",
  },
  description:
    "예수원(Jesus Abbey) — 강원도 태백 덕항산 기슭의 수도 공동체. 삼수령무무목장(Samsuryeong MooMoo Ranch)에서 생태순환농업과 퍼머컬쳐를 실천하며, 무무곳간(MooMoo Gotgan)을 통해 창조질서회복의 가치를 나눕니다. 삼수령센터(Three Seas Center)와 네번째강 프로젝트(Fourth River Project)를 통한 북한선교 사역.",
  keywords: [
    "예수원", "Jesus Abbey",
    "삼수령무무목장", "Samsuryeong MooMoo Ranch",
    "무무곳간", "MooMoo Gotgan", "Mumu Gotgan",
    "삼수령센터", "Samsuryeong Center", "Three Seas Center",
    "북한선교", "North Korea Mission",
    "퍼머컬쳐", "Permaculture",
    "생태순환농업", "Ecological Circular Agriculture",
    "창조질서회복", "Restoration of Creation Order",
    "네번째강", "Fourth River Project",
    "태백", "수도공동체", "기도", "대천덕", "토레 신부",
  ],
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: "예수원 Jesus Abbey",
    title: "예수원 Jesus Abbey | 삼수령무무목장 · 무무곳간",
    description:
      "강원도 태백 덕항산 기슭의 수도 공동체. 기도와 노동, 생태순환농업, 창조질서회복을 통해 하나님 나라를 살아갑니다. 무무곳간에서 삼수령무무목장의 건강한 유제품을 만나보세요.",
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
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&family=Noto+Serif+KR:wght@400;700&display=swap"
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
              subOrganization: [
                {
                  "@type": "Organization",
                  name: "삼수령무무목장 Samsuryeong MooMoo Ranch",
                  description:
                    "해발 1,000m 고지대에서 Jersey 소를 키우며 생태순환농업과 퍼머컬쳐를 실천하는 예수원의 목장. 창조질서회복의 가치를 농업으로 구현합니다.",
                  brand: {
                    "@type": "Brand",
                    name: "무무곳간 MooMoo Gotgan",
                    description:
                      "삼수령무무목장에서 생산한 프리미엄 A2 유제품을 직접 판매하는 브랜드. 생태순환농업과 창조질서회복의 가치를 담은 지속 가능한 먹거리.",
                    url: "https://smartstore.naver.com/moomooranch",
                  },
                },
                {
                  "@type": "Organization",
                  name: "네번째강 프로젝트 The Fourth River Project",
                  description:
                    "한국 교회의 화합과 치유를 위해 일꾼을 준비하고, 삼수령센터(Three Seas Center)에서 북한선교를 위한 훈련과 기도의 공동체를 세워가는 프로젝트.",
                },
              ],
            }),
          }}
        />
        <Script
          src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          strategy="afterInteractive"
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
