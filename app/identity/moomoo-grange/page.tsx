import Breadcrumbs from "@/components/Breadcrumbs"

export const metadata = {
  title: "삼수령무무목장 · 무무곳간 — MooMoo Ranch & MooMoo Gotgan",
  description:
    "삼수령무무목장(Samsuryeong MooMoo Ranch) — 예수원의 생태순환농업 프로젝트입니다. 퍼머컬처와 생태신학의 가치를 실천하며, 무무곳간(MooMoo Gotgan)을 통해 프리미엄 A2 유제품을 제공합니다.",
  keywords: [
    "삼수령무무목장", "무무곳간", "예수원", "저지소", "Jersey",
    "A2우유", "생태순환농업", "퍼머컬처", "생태신학", "태백 목장",
  ],
  alternates: { canonical: "https://jesusabbey.org/identity/moomoo-grange" },
  openGraph: {
    title: "삼수령무무목장 · 무무곳간 — MooMoo Ranch & Gotgan",
    description: "해발 1,000m 고지대에서 저지(Jersey) 소를 사육하며 생태순환농업과 생태신학을 실천하는 예수원의 목장입니다.",
    url: "https://jesusabbey.org/identity/moomoo-grange",
    siteName: "예수원 Jesus Abbey",
    images: [{
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E1%84%89%E1%85%A1%E1%86%B7%E1%84%89%E1%85%AE%E1%84%85%E1%85%A7%E1%86%BC%E1%84%86%E1%85%AE%E1%84%86%E1%85%AE%E1%84%86%E1%85%A9%E1%86%A8%E1%84%8C%E1%85%A1%E1%86%BC%201975-AohqSCL4ef6FWCOSXEJl0uZYdTTiX4.jpg",
      width: 1200, height: 630, alt: "삼수령무무목장 1975년 전경",
    }],
    locale: "ko_KR", type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "삼수령무무목장 · 무무곳간 — MooMoo Ranch & Gotgan",
    description: "해발 1,000m 고지대에서 저지(Jersey) 소를 사육하며 생태순환농업과 생태신학을 실천하는 예수원의 목장입니다.",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E1%84%89%E1%85%A1%E1%86%B7%E1%84%89%E1%85%AE%E1%84%85%E1%85%A7%E1%86%BC%E1%84%86%E1%85%AE%E1%84%86%E1%85%AE%E1%84%86%E1%85%A9%E1%86%A8%E1%84%8C%E1%85%A1%E1%86%BC%201975-AohqSCL4ef6FWCOSXEJl0uZYdTTiX4.jpg"],
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://jesusabbey.org/identity/moomoo-grange#ranch",
      name: "삼수령무무목장 Samsuryeong MooMoo Ranch",
      description: "해발 1,000m 고지대에서 저지(Jersey) 소를 사육하며 생태순환농업과 퍼머컬처를 실천하는 예수원의 목장입니다.",
      url: "https://jesusabbey.org/identity/moomoo-grange",
      telephone: "+82-33-552-6502",
      address: { "@type": "PostalAddress", addressLocality: "태백시", addressRegion: "강원특별자치도", addressCountry: "KR" },
      parentOrganization: { "@type": "Organization", name: "예수원 Jesus Abbey" },
    },
    {
      "@type": "Store",
      "@id": "https://smartstore.naver.com/moomooranch",
      name: "무무곳간 MooMoo Gotgan",
      description: "삼수령무무목장에서 생산한 프리미엄 A2 유제품을 판매하는 직판 브랜드입니다.",
      url: "https://smartstore.naver.com/moomooranch",
    },
  ],
}

const mm = {
  ivory: "#F5F0E8",
  milk: "#FAF7F2",
  gold: "#C4A46C",
  goldLight: "#D4B882",
  brown: "#5C4033",
  brownLight: "#7A5C4E",
  sage: "#7A8B6F",
  sageLight: "#9AAB8F",
  ink: "#2C1810",
  mist: "#E8E2D8",
} as const

function ChapterLabel({ number, label }: { number: string; label: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
      <span style={{ display: "block", width: "2.5rem", height: "1px", background: mm.gold, flexShrink: 0 }} />
      <span style={{
        fontFamily: "'Cormorant Garamond', Georgia, serif",
        fontStyle: "italic", fontSize: "0.7rem", letterSpacing: "0.3em",
        color: mm.gold, textTransform: "uppercase" as const,
      }}>{number} · {label}</span>
    </div>
  )
}

function Divider() {
  return (
    <div style={{
      width: "100%", height: "1px",
      background: `linear-gradient(to right, transparent, ${mm.mist} 20%, ${mm.mist} 80%, transparent)`,
      margin: "4rem 0",
    }} />
  )
}

export default function MooMooGrangePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&display=swap');
        .mm-btn-primary:hover { background: #2C1810 !important; }
        .mm-btn-kakao:hover   { background: #F0D800 !important; }
        .mm-img { transition: opacity 0.3s; }
        .mm-img:hover { opacity: 0.88; }
        table.mm-table tbody tr:hover td { background: rgba(196,164,108,0.06) !important; }
        @keyframes mmFadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .mm-hero-title { animation: mmFadeUp 0.9s ease both; animation-delay: 0.1s; }
        .mm-hero-sub   { animation: mmFadeUp 0.9s ease both; animation-delay: 0.3s; }
        .mm-hero-tags  { animation: mmFadeUp 0.9s ease both; animation-delay: 0.5s; }
      `}</style>

      <Breadcrumbs items={[
        { label: "홈", path: "/" },
        { label: "정체성", path: "/identity" },
        { label: "무무목장 프로젝트" },
      ]} />

      <div style={{ background: mm.ivory }}>

        {/* ══════════════════════════════════════════
            HERO
        ═════════════════════════════════════════════ */}
        <div style={{ background: mm.brown, position: "relative", overflow: "hidden", padding: "5.5rem 0 0" }}>
          <div style={{
            position: "absolute", inset: 0, pointerEvents: "none",
            background: `radial-gradient(ellipse 70% 60% at 50% 30%, rgba(196,164,108,0.1) 0%, transparent 70%)`,
          }} />

          <div style={{ maxWidth: "840px", margin: "0 auto", padding: "0 2rem", textAlign: "center", position: "relative" }}>
            <div className="mm-hero-title">
              <span style={{
                display: "block",
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontStyle: "italic", fontWeight: 300,
                fontSize: "clamp(3.5rem, 9vw, 6.5rem)",
                letterSpacing: "0.06em", color: mm.gold,
                lineHeight: 1, marginBottom: "0.4rem",
              }}>無無</span>
              <span style={{
                display: "block",
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontStyle: "italic", fontWeight: 300,
                fontSize: "clamp(0.85rem, 1.8vw, 1.05rem)",
                letterSpacing: "0.35em", color: mm.goldLight,
                textTransform: "uppercase" as const, marginBottom: "2rem",
              }}>MooMoo Ranch</span>
            </div>

            <div className="mm-hero-sub">
              <h1 style={{
                fontFamily: "var(--font-noto-serif-kr), 'Noto Serif KR', Georgia, serif",
                fontSize: "clamp(1.35rem, 3.2vw, 2rem)",
                fontWeight: 400, color: mm.ivory,
                letterSpacing: "0.03em", marginBottom: "0.85rem", lineHeight: 1.4,
              }}>삼수령 무무목장 프로젝트</h1>
              <p style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontStyle: "italic",
                fontSize: "clamp(0.95rem, 2vw, 1.2rem)",
                color: mm.goldLight, letterSpacing: "0.1em", marginBottom: "2.75rem",
              }}>비움이 채움이 되는 곳</p>
            </div>

            <div className="mm-hero-tags" style={{ display: "flex", justifyContent: "center", gap: "2.5rem", marginBottom: "4rem", flexWrap: "wrap" as const }}>
              {([
                { ko: "기도", la: "Ora", c: mm.gold },
                { ko: "독서", la: "Lege", c: mm.brownLight },
                { ko: "노동", la: "Labora", c: mm.sage },
              ] as const).map(({ ko, la, c }) => (
                <div key={la} style={{ textAlign: "center" }}>
                  <span style={{ display: "block", fontFamily: "'Cormorant Garamond', Georgia, serif", fontStyle: "italic", fontSize: "1.1rem", fontWeight: 600, color: c, letterSpacing: "0.1em" }}>{la}</span>
                  <span style={{ display: "block", fontFamily: "var(--font-noto-sans-kr), sans-serif", fontWeight: 400, fontSize: "0.72rem", letterSpacing: "0.18em", color: "rgba(245,240,232,0.75)", marginTop: "0.25rem" }}>{ko}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hero image strip */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
            {[
              {
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E1%84%89%E1%85%A1%E1%86%B7%E1%84%89%E1%85%AE%E1%84%85%E1%85%A7%E1%86%BC%E1%84%86%E1%85%AE%E1%84%86%E1%85%AE%E1%84%86%E1%85%A9%E1%86%A8%E1%84%8C%E1%85%A1%E1%86%BC%201975-AohqSCL4ef6FWCOSXEJl0uZYdTTiX4.jpg",
                alt: "삼수령무무목장 1975년 전경", cap: "삼수령무무목장, 1975년",
              },
              {
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E1%84%8B%E1%85%A8%E1%84%89%E1%85%AE%E1%84%8B%E1%85%AF%E1%86%AB%20%E1%84%87%E1%85%A9%E1%86%AB%E1%84%80%E1%85%AA%E1%86%AB%20%E1%84%80%E1%85%A5%E1%86%AB%E1%84%86%E1%85%AE%E1%86%AF-wRMF9jSGrO8KoZEYSEKVYl4KCdfgXs.jpg",
                alt: "예수원 본관 건물", cap: "예수원 본관 건물",
              },
            ].map(({ src, alt, cap }) => (
              <div key={cap} style={{ position: "relative", aspectRatio: "4/3", overflow: "hidden" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src} alt={alt} className="mm-img"
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", filter: "brightness(0.82) sepia(0.12)" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(44,24,16,0.65) 0%, transparent 55%)" }} />
                <p style={{
                  position: "absolute", bottom: "1.1rem", left: "1.4rem",
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontStyle: "italic", fontSize: "0.78rem",
                  color: "rgba(245,240,232,0.85)", letterSpacing: "0.06em",
                }}>{cap}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ══════════════════════════════════════════
            BODY
        ═════════════════════════════════════════════ */}
        <div style={{ maxWidth: "760px", margin: "0 auto", padding: "5rem 2rem" }}>

          {/* 01 프로젝트 정의 */}
          <section>
            <ChapterLabel number="01" label="프로젝트 정의" />
            <h2 style={{ fontFamily: "var(--font-noto-serif-kr), Georgia, serif", fontSize: "clamp(1.35rem, 2.8vw, 1.8rem)", fontWeight: 400, color: mm.ink, letterSpacing: "0.02em", marginBottom: "2rem", lineHeight: 1.45 }}>
              고지대 농촌 자립 모델을 검증하는<br />핵심 실험 플랫폼
            </h2>
            <div style={{ borderLeft: `2px solid ${mm.gold}`, paddingLeft: "1.75rem" }}>
              {["삼수령 무무목장은 단순한 원유 생산 시설을 넘어, 고지대 농촌 자립 모델을 검증하기 위한 핵심 실험 플랫폼 역할을 수행합니다.",
                "본 프로젝트의 목표는 해발 800~1,200m의 한반도 고지대 환경에서 재생농업 기반의 소규모 낙농 모델이 경제적·생태적으로 자립할 수 있는지 실증하는 것입니다.",
                "강원도 태백 해발 1,000m 지역은 북한 고지대와 가장 유사한 남한 내 환경입니다. 이곳에서 검증을 마친 시스템은 향후 최소한의 수정만으로 북한 지역에 신속하게 이전 및 적용할 수 있도록 설계되었습니다.",
              ].map((t, i) => (
                <p key={i} style={{ fontFamily: "var(--font-noto-sans-kr), sans-serif", fontWeight: 300, fontSize: "1rem", color: mm.brownLight, lineHeight: 1.9, marginBottom: i < 2 ? "1.25rem" : 0 }}>{t}</p>
              ))}
            </div>
          </section>

          <Divider />

          {/* 02 역사적 기반 */}
          <section>
            <ChapterLabel number="02" label="역사적 기반" />
            <h2 style={{ fontFamily: "var(--font-noto-serif-kr), Georgia, serif", fontSize: "clamp(1.35rem, 2.8vw, 1.8rem)", fontWeight: 400, color: mm.ink, letterSpacing: "0.02em", marginBottom: "2rem", lineHeight: 1.45 }}>
              1965년에 시작된 예수원의 낙농 전통
            </h2>
            <p style={{ fontFamily: "var(--font-noto-sans-kr), sans-serif", fontWeight: 300, fontSize: "1rem", color: mm.brownLight, lineHeight: 1.9, marginBottom: "2rem" }}>
              무무목장은 1965년에 시작된 예수원의 낙농 전통을 계승합니다. 초기 예수원은 덕항산 기슭에서 낙농업을 시작했으나 공간 확장의 필요성을 느꼈습니다. 이에 1975년, 약 10km 떨어진 해발 1,000m 매봉산 자락에 부지를 확보하여 고지대 낙농 실험을 본격화했습니다. 당시 목장의 공식 명칭은 &ldquo;Jesus Abbey The Watershed Grange&rdquo;였습니다.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", background: mm.mist, borderRadius: "2px", overflow: "hidden", marginBottom: "2.25rem" }}>
              {["기도와 노동의 유기적 통합", "공동체 기반의 자립 경제 구축", "고지대 최적화 소규모 낙농 모델"].map((text) => (
                <div key={text} style={{ background: mm.milk, padding: "1.5rem 1.25rem", textAlign: "center" }}>
                  <span style={{ display: "block", color: mm.gold, marginBottom: "0.5rem", fontSize: "0.65rem" }}>◇</span>
                  <p style={{ fontFamily: "var(--font-noto-sans-kr), sans-serif", fontWeight: 300, fontSize: "0.82rem", color: mm.brown, lineHeight: 1.65, letterSpacing: "0.01em" }}>{text}</p>
                </div>
              ))}
            </div>

            <p style={{ fontFamily: "var(--font-noto-sans-kr), sans-serif", fontWeight: 300, fontSize: "1rem", color: mm.brownLight, lineHeight: 1.9, marginBottom: "2.25rem" }}>
              특히 1975년부터 1982년까지의 형성기가 중요합니다. 당시 &lsquo;헤이퍼 인터내셔널(Heifer International)&rsquo; 소속으로 20여 년간 한국 축산 발전을 이끈 Paul A. Kingsbury(한국명: 김승배) 선교사가 대천덕 신부의 목장 설립을 적극적으로 지원했습니다. 따라서 삼수령 무무목장은 예수원의 수도회적 유산과 더불어 한국 낙농업 발전의 역사적 발자취를 고스란히 보존하고 있습니다.
            </p>

            {/* Historical Photo Grid */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridTemplateRows: "auto auto", gap: "4px" }}>
              {([
                { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Archer%20and%20Paul%20Kingsbury%20-n9WA6HDEyDMBtUdIUQ5BuFESl1ZC7y.jpg", alt: "대천덕 신부와 Kingsbury 선교사", cap: "대천덕 신부와 Kingsbury 선교사", col: "1", row: "1", aspect: "3/4" },
                { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Paul%20Kingsbury-yZtqRcGl7NSTgnaKL7EiFbT6r9APq4.jpg", alt: "Kingsbury 선교사 건축 현장", cap: "Kingsbury 선교사, 건축 현장에서", col: "2", row: "1", aspect: "3/4" },
                { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jeremiah%20with%20cattle-gdG27aQ9d4kcvARorCJaIbTSmhOZ8d.jpg", alt: "예레미야와 소 떼", cap: "예레미야와 소 떼", col: "3", row: "1", aspect: "3/4" },
                { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Paul%20Kingsbury%20at%20Grange%20with%20sheep-J6SaZkLaEii9h8UQVBZ03i3HX1Rpto.jpg", alt: "Kingsbury 선교사와 삼수령 목장 양 떼", cap: "Kingsbury 선교사와 삼수령 목장의 양 떼", col: "1 / 3", row: "2", aspect: "16/9" },
                { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jesus%20Abbey_%20%2835%29.JPG-7lwGbV3SAQPVkE0GINiaknikkox2lT.jpeg", alt: "겨울 눈 덮인 예수원", cap: "예수원의 겨울 풍경", col: "3", row: "2", aspect: "4/5" },
              ] as const).map(({ src, alt, cap, col, row, aspect }) => (
                <div key={cap} style={{ gridColumn: col, gridRow: row, position: "relative", aspectRatio: aspect, overflow: "hidden", borderRadius: "2px" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={src} alt={alt} className="mm-img"
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", filter: "sepia(0.15) brightness(0.88)" }} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(44,24,16,0.65) 0%, transparent 55%)" }} />
                  <p style={{ position: "absolute", bottom: "0.7rem", left: "0.7rem", right: "0.7rem", fontFamily: "'Cormorant Garamond', Georgia, serif", fontStyle: "italic", fontSize: "0.7rem", color: "rgba(245,240,232,0.88)", letterSpacing: "0.04em" }}>{cap}</p>
                </div>
              ))}
            </div>
          </section>

          <Divider />

          {/* 03 리더십 */}
          <section>
            <ChapterLabel number="03" label="리더십 구조" />
            <h2 style={{ fontFamily: "var(--font-noto-serif-kr), Georgia, serif", fontSize: "clamp(1.35rem, 2.8vw, 1.8rem)", fontWeight: 400, color: mm.ink, letterSpacing: "0.02em", marginBottom: "1.25rem", lineHeight: 1.45 }}>3개국 협력 구조</h2>
            <p style={{ fontFamily: "var(--font-noto-sans-kr), sans-serif", fontWeight: 300, fontSize: "1rem", color: mm.brownLight, lineHeight: 1.9, marginBottom: "2rem" }}>
              무무목장은 남한, 북한, 미국 출신 전문가로 구성된 3개국 협력 구조로 운영됩니다. 이는 향후 북한 환경에 모델을 적용하기 위해 필수적인 전략 자산입니다.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))", gap: "1px", background: mm.mist, borderRadius: "2px", overflow: "hidden" }}>
              {([
                {
                  name: "히스기야 (서수철)", origin: "남한", c: mm.sage,
                  photo: "data:image/webp;base64,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14TYpzpoTayBmaNLhNiGNrshj8Zvjcfj2d+mBoqYTxtKWos6i5U9epuSsg611o+ZM+JOhqGBIP011enJ+Gxro+Rux5O4EdYbJ6xY/vDqf3Zxt3O0AABYTVAgMwUAADw/eHBhY2tldCBiZWdpbj0n77u/JyBpZD0nVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkJz8+Cjx4OnhtcG1ldGEgeG1sbnM6eD0nYWRvYmU6bnM6bWV0YS8nPgo8cmRmOlJERiB4bWxuczpyZGY9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMnPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6QXR0cmliPSdodHRwOi8vbnMuYXR0cmlidXRpb24uY29tL2Fkcy8xLjAvJz4KICA8QXR0cmliOkFkcz4KICAgPHJkZjpTZXE+CiAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9J1Jlc291cmNlJz4KICAgICA8QXR0cmliOkNyZWF0ZWQ+MjAyNi0wMy0wNjwvQXR0cmliOkNyZWF0ZWQ+CiAgICAgPEF0dHJpYjpEYXRhPnsmcXVvdDtkb2MmcXVvdDs6JnF1b3Q7REFHVERwOUNvT0EmcXVvdDssJnF1b3Q7dXNlciZxdW90OzomcXVvdDtVQUZBcU5lRlUwYyZxdW90OywmcXVvdDticmFuZCZxdW90OzomcXVvdDtGb3Jlc3QgQnV6eiZxdW90O308L0F0dHJpYjpEYXRhPgogICAgIDxBdHRyaWI6RXh0SWQ+ZDFmMzY1YWQtZDI4NS00NDM5LWEyNzItM2U1MGIyN2RlYTlhPC9BdHRyaWI6RXh0SWQ+CiAgICAgPEF0dHJpYjpGYklkPjUyNTI2NTkxNDE3OTU4MDwvQXR0cmliOkZiSWQ+CiAgICAgPEF0dHJpYjpUb3VjaFR5cGU+MjwvQXR0cmliOlRvdWNoVHlwZT4KICAgIDwvcmRmOmxpPgogICA8L3JkZjpTZXE+CiAgPC9BdHRyaWI6QWRzPgogPC9yZGY6RGVzY3JpcHRpb24+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczpkYz0naHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8nPgogIDxkYzp0aXRsZT4KICAgPHJkZjpBbHQ+CiAgICA8cmRmOmxpIHhtbDpsYW5nPSd4LWRlZmF1bHQnPlByb2ZpbGUgcGljIC0gMTwvcmRmOmxpPgogICA8L3JkZjpBbHQ+CiAgPC9kYzp0aXRsZT4KIDwvcmRmOkRlc2NyaXB0aW9uPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6cGRmPSdodHRwOi8vbnMuYWRvYmUuY29tL3BkZi8xLjMvJz4KICA8cGRmOkF1dGhvcj5Kb3NlcGggUGFyazwvcGRmOkF1dGhvcj4KIDwvcmRmOkRlc2NyaXB0aW9uPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6eG1wPSdodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvJz4KICA8eG1wOkNyZWF0b3JUb29sPkNhbnZhIChSZW5kZXJlcikgZG9jPURBR1REcDlDb09BIHVzZXI9VUFGQXFOZUZVMGMgYnJhbmQ9Rm9yZXN0IEJ1eno8L3htcDpDcmVhdG9yVG9vbD4KIDwvcmRmOkRlc2NyaXB0aW9uPgo8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSdyJz8+AA==",
                  desc: "현장 운영 및 지역 기반 관리를 담당합니다. 예수원 공동체 소속의 목장 책임자로서 해발 1,000m 고지대 목초지와 저지(Jersey) 소 떼의 사계절 관리를 총괄합니다.",
                },
                {
                  name: "박요셉 (Joseph Park)", origin: "북한 (함경북도 출신)", c: mm.gold,
                  photo: "data:image/webp;base64,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Ong9J2Fkb2JlOm5zOm1ldGEvJz4KPHJkZjpSREYgeG1sbnM6cmRmPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjJz4KCiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0nJwogIHhtbG5zOkF0dHJpYj0naHR0cDovL25zLmF0dHJpYnV0aW9uLmNvbS9hZHMvMS4wLyc+CiAgPEF0dHJpYjpBZHM+CiAgIDxyZGY6U2VxPgogICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSdSZXNvdXJjZSc+CiAgICAgPEF0dHJpYjpDcmVhdGVkPjIwMjYtMDMtMDY8L0F0dHJpYjpDcmVhdGVkPgogICAgIDxBdHRyaWI6RGF0YT57JnF1b3Q7ZG9jJnF1b3Q7OiZxdW90O0RBR1REcDlDb09BJnF1b3Q7LCZxdW90O3VzZXImcXVvdDs6JnF1b3Q7VUFGQXFOZUZVMGMmcXVvdDssJnF1b3Q7YnJhbmQmcXVvdDs6JnF1b3Q7Rm9yZXN0IEJ1enomcXVvdDt9PC9BdHRyaWI6RGF0YT4KICAgICA8QXR0cmliOkV4dElkPjNmNGUyOWU3LWNmNWItNGNiOC1iMjFjLWQ1NzdiZTg0OTQ5MjwvQXR0cmliOkV4dElkPgogICAgIDxBdHRyaWI6RmJJZD41MjUyNjU5MTQxNzk1ODA8L0F0dHJpYjpGYklkPgogICAgIDxBdHRyaWI6VG91Y2hUeXBlPjI8L0F0dHJpYjpUb3VjaFR5cGU+CiAgICA8L3JkZjpsaT4KICAgPC9yZGY6U2VxPgogIDwvQXR0cmliOkFkcz4KIDwvcmRmOkRlc2NyaXB0aW9uPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6ZGM9J2h0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvJz4KICA8ZGM6dGl0bGU+CiAgIDxyZGY6QWx0PgogICAgPHJkZjpsaSB4bWw6bGFuZz0neC1kZWZhdWx0Jz5Qcm9maWxlIHBpYyAtIDI8L3JkZjpsaT4KICAgPC9yZGY6QWx0PgogIDwvZGM6dGl0bGU+CiA8L3JkZjpEZXNjcmlwdGlvbj4KCiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0nJwogIHhtbG5zOnBkZj0naHR0cDovL25zLmFkb2JlLmNvbS9wZGYvMS4zLyc+CiAgPHBkZjpBdXRob3I+Sm9zZXBoIFBhcms8L3BkZjpBdXRob3I+CiA8L3JkZjpEZXNjcmlwdGlvbj4KCiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0nJwogIHhtbG5zOnhtcD0naHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyc+CiAgPHhtcDpDcmVhdG9yVG9vbD5DYW52YSAoUmVuZGVyZXIpIGRvYz1EQUdURHA5Q29PQSB1c2VyPVVBRkFxTmVGVTBjIGJyYW5kPUZvcmVzdCBCdXp6PC94bXA6Q3JlYXRvclRvb2w+CiA8L3JkZjpEZXNjcmlwdGlvbj4KPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KPD94cGFja2V0IGVuZD0ncic/PgA=",
                  desc: "북한 환경 분석 및 현지 적용 모델 설계를 담당합니다. 건국대학교 수의과대학을 졸업하고 사회적 기업 (주)요벨을 설립·운영했으며, 삼수령무무목장에서 융복합산업 기반 농촌 복원 모델을 개척하고 있습니다.",
                },
                {
                  name: "바니 스미스 박사", origin: "미국", c: mm.brownLight,
                  photo: "data:image/webp;base64,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dHRyaWI9J2h0dHA6Ly9ucy5hdHRyaWJ1dGlvbi5jb20vYWRzLzEuMC8nPgogIDxBdHRyaWI6QWRzPgogICA8cmRmOlNlcT4KICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0nUmVzb3VyY2UnPgogICAgIDxBdHRyaWI6Q3JlYXRlZD4yMDI2LTAzLTA2PC9BdHRyaWI6Q3JlYXRlZD4KICAgICA8QXR0cmliOkRhdGE+eyZxdW90O2RvYyZxdW90OzomcXVvdDtEQUdURHA5Q29PQSZxdW90OywmcXVvdDt1c2VyJnF1b3Q7OiZxdW90O1VBRkFxTmVGVTBjJnF1b3Q7LCZxdW90O2JyYW5kJnF1b3Q7OiZxdW90O0ZvcmVzdCBCdXp6JnF1b3Q7fTwvQXR0cmliOkRhdGE+CiAgICAgPEF0dHJpYjpFeHRJZD42ZmI5MDIxZi00YmUwLTQ3M2QtYjYyNC0zMzMyYmY2MDBjODA8L0F0dHJpYjpFeHRJZD4KICAgICA8QXR0cmliOkZiSWQ+NTI1MjY1OTE0MTc5NTgwPC9BdHRyaWI6RmJJZD4KICAgICA8QXR0cmliOlRvdWNoVHlwZT4yPC9BdHRyaWI6VG91Y2hUeXBlPgogICAgPC9yZGY6bGk+CiAgIDwvcmRmOlNlcT4KICA8L0F0dHJpYjpBZHM+CiA8L3JkZjpEZXNjcmlwdGlvbj4KCiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0nJwogIHhtbG5zOmRjPSdodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyc+CiAgPGRjOnRpdGxlPgogICA8cmRmOkFsdD4KICAgIDxyZGY6bGkgeG1sOmxhbmc9J3gtZGVmYXVsdCc+UHJvZmlsZSBwaWMgLSAzPC9yZGY6bGk+CiAgIDwvcmRmOkFsdD4KICA8L2RjOnRpdGxlPgogPC9yZGY6RGVzY3JpcHRpb24+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczpwZGY9J2h0dHA6Ly9ucy5hZG9iZS5jb20vcGRmLzEuMy8nPgogIDxwZGY6QXV0aG9yPkpvc2VwaCBQYXJrPC9wZGY6QXV0aG9yPgogPC9yZGY6RGVzY3JpcHRpb24+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczp4bXA9J2h0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8nPgogIDx4bXA6Q3JlYXRvclRvb2w+Q2FudmEgKFJlbmRlcmVyKSBkb2M9REFHVERwOUNvT0EgdXNlcj1VQUZBcU5lRlUwYyBicmFuZD1Gb3Jlc3QgQnV6ejwveG1wOkNyZWF0b3JUb29sPgogPC9yZGY6RGVzY3JpcHRpb24+CjwvcmRmOlJERj4KPC94OnhtcG1ldGE+Cjw/eHBhY2tldCBlbmQ9J3InPz4A",
                  desc: "국제 개발 및 특수 환경 대응 전략을 자문합니다. 미국 수의사 자격을 보유하고 있으며, 1997년부터 2019년까지 북한 현지에서 선교사이자 농업 실무자로 활동한 경험을 바탕으로 기술적 통찰을 제공합니다.",
                },
              ] as const).map(({ name, origin, c, photo, desc }) => (
                <div key={name} style={{ background: mm.milk, padding: "2rem 1.75rem", display: "flex", flexDirection: "column" as const, alignItems: "center", textAlign: "center" as const }}>
                  <div style={{
                    width: "90px", height: "90px",
                    borderRadius: "50%",
                    overflow: "hidden",
                    border: `3px solid ${c}`,
                    marginBottom: "1.25rem",
                    flexShrink: 0,
                    background: mm.mist,
                  }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={photo}
                      alt={name}
                      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", filter: "sepia(0.06) brightness(0.97)" }}
                    />
                  </div>
                  <h3 style={{ fontFamily: "var(--font-noto-serif-kr), Georgia, serif", fontWeight: 400, fontSize: "1rem", color: mm.ink, marginBottom: "0.3rem" }}>{name}</h3>
                  <span style={{ display: "inline-block", fontFamily: "'Cormorant Garamond', Georgia, serif", fontStyle: "italic", fontSize: "0.75rem", color: c, letterSpacing: "0.08em", marginBottom: "1rem" }}>{origin}</span>
                  <p style={{ fontFamily: "var(--font-noto-sans-kr), sans-serif", fontWeight: 300, fontSize: "0.84rem", color: mm.brownLight, lineHeight: 1.85, textAlign: "left" as const }}>{desc}</p>
                </div>
              ))}
            </div>
            <p style={{ fontFamily: "var(--font-noto-sans-kr), sans-serif", fontWeight: 300, fontSize: "0.85rem", color: mm.sage, lineHeight: 1.8, marginTop: "1.5rem", paddingLeft: "1rem", borderLeft: `1px solid ${mm.sageLight}` }}>
              이러한 인력 구성은 북한이 인도적 지원을 받아들일 때 즉각적으로 투입할 수 있는 실무 역량을 보장합니다.
            </p>
          </section>

          <Divider />

          {/* 04 설계 원칙 */}
          <section>
            <ChapterLabel number="04" label="설계 원칙" />
            <h2 style={{ fontFamily: "var(--font-noto-serif-kr), Georgia, serif", fontSize: "clamp(1.35rem, 2.8vw, 1.8rem)", fontWeight: 400, color: mm.ink, letterSpacing: "0.02em", marginBottom: "1.25rem", lineHeight: 1.45 }}>두 선진 모델의 통합</h2>
            <p style={{ fontFamily: "var(--font-noto-sans-kr), sans-serif", fontWeight: 300, fontSize: "1rem", color: mm.brownLight, lineHeight: 1.9, marginBottom: "2rem" }}>
              무무목장은 다음 두 가지 선진 모델의 장점을 통합하여 고지대에 특화된 소규모 프리미엄 낙농 시스템을 구축했습니다.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: mm.mist, borderRadius: "2px", overflow: "hidden" }}>
              {([
                { title: "폴리페이스(Polyface) 농장 모델", items: ["관리형 방목", "다종 순환 시스템", "토양 생물학 중심 설계", "직거래 기반 유통 체계", "산업형 공급망 의존도 최소화"], accent: mm.sage },
                { title: "스위스 고지대 낙농 모델", items: ["고지대 기후 적응형 생산 방식", "소규모 고부가가치 창출 전략", "현장 가공 중심의 운영 구조", "관광·체험 연계형 통합 모델", "산지 생태계 보전 우선"], accent: mm.gold },
              ] as const).map(({ title, items, accent }) => (
                <div key={title} style={{ background: mm.milk, padding: "2rem 1.75rem" }}>
                  <h3 style={{ fontFamily: "var(--font-noto-serif-kr), Georgia, serif", fontWeight: 400, fontSize: "0.95rem", color: mm.ink, marginBottom: "1.25rem", lineHeight: 1.5 }}>{title}</h3>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {items.map(item => (
                      <li key={item} style={{ display: "flex", gap: "0.7rem", alignItems: "flex-start", marginBottom: "0.55rem" }}>
                        <span style={{ color: accent, fontSize: "0.55rem", marginTop: "0.5rem", flexShrink: 0 }}>◆</span>
                        <span style={{ fontFamily: "var(--font-noto-sans-kr), sans-serif", fontWeight: 300, fontSize: "0.84rem", color: mm.brownLight, lineHeight: 1.6 }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <Divider />

          {/* 05 가치사슬 */}
          <section>
            <ChapterLabel number="05" label="통합 가치사슬" />
            <h2 style={{ fontFamily: "var(--font-noto-serif-kr), Georgia, serif", fontSize: "clamp(1.35rem, 2.8vw, 1.8rem)", fontWeight: 400, color: mm.ink, letterSpacing: "0.02em", marginBottom: "1.25rem", lineHeight: 1.45 }}>6단계 통합 가치사슬</h2>
            <p style={{ fontFamily: "var(--font-noto-sans-kr), sans-serif", fontWeight: 300, fontSize: "1rem", color: mm.brownLight, lineHeight: 1.9, marginBottom: "2.25rem" }}>
              단순 원유 생산을 넘어 6단계의 가치사슬을 내부에 통합했습니다. 이를 통해 외부 의존도를 낮추고 수익 구조를 다각화하여, 고지대 환경에서도 지속 가능한 자립형 비즈니스 모델을 확보합니다.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", background: mm.mist, borderRadius: "2px", overflow: "hidden" }}>
              {([
                { n: "01", title: "생산", desc: "저지(Jersey) A2 낙농 및 목초 관리", c: mm.sage },
                { n: "02", title: "가공", desc: "요거트, 치즈, 버터, 젤라또 제조", c: mm.gold },
                { n: "03", title: "식음", desc: "자체 카페 및 레스토랑 운영", c: mm.brownLight },
                { n: "04", title: "관광", desc: "생태 체험 및 치유 프로그램 제공", c: mm.sage },
                { n: "05", title: "교육", desc: "농업 훈련 및 견습 과정 운영", c: mm.gold },
                { n: "06", title: "직판", desc: "정기 구독, B2B 납품, 라이브 커머스", c: mm.brownLight },
              ] as const).map(({ n, title, desc, c }) => (
                <div key={n} style={{ background: mm.milk, padding: "1.65rem 1.5rem" }}>
                  <span style={{ display: "block", fontFamily: "'Cormorant Garamond', Georgia, serif", fontStyle: "italic", fontSize: "1.4rem", color: c, opacity: 0.45, lineHeight: 1, marginBottom: "0.5rem" }}>{n}</span>
                  <h3 style={{ fontFamily: "var(--font-noto-serif-kr), Georgia, serif", fontWeight: 400, fontSize: "1.05rem", color: mm.ink, marginBottom: "0.45rem" }}>{title}</h3>
                  <p style={{ fontFamily: "var(--font-noto-sans-kr), sans-serif", fontWeight: 300, fontSize: "0.81rem", color: mm.brownLight, lineHeight: 1.7 }}>{desc}</p>
                </div>
              ))}
            </div>
          </section>

          <Divider />

          {/* 06 Jersey */}
          <section>
            <ChapterLabel number="06" label="저지 품종 선택" />
            <h2 style={{ fontFamily: "var(--font-noto-serif-kr), Georgia, serif", fontSize: "clamp(1.35rem, 2.8vw, 1.8rem)", fontWeight: 400, color: mm.ink, letterSpacing: "0.02em", marginBottom: "1.25rem", lineHeight: 1.45 }}>저지(Jersey) 품종 선택의 전략성</h2>
            <div style={{ display: "flex", gap: "2rem", marginBottom: "2.25rem", flexWrap: "wrap" as const }}>
              <p style={{ fontFamily: "var(--font-noto-sans-kr), sans-serif", fontWeight: 300, fontSize: "1rem", color: mm.brownLight, lineHeight: 1.9, flex: 1, minWidth: "240px" }}>
                저지(Jersey) 품종의 도입은 고지대 환경의 적합성과 운영 효율성을 극대화하기 위한 전략적 선택입니다. 사료 수급이 제한적인 고지대의 장기 운영 조건에서 저지 품종은 탁월한 경제성과 안정적인 생산성을 보장합니다.
              </p>
              <div style={{ position: "relative", width: "150px", aspectRatio: "3/4", borderRadius: "2px", overflow: "hidden", flexShrink: 0 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E1%84%8B%E1%85%A8%E1%84%89%E1%85%AE%E1%84%8B%E1%85%AF%E1%86%AB%E1%84%8B%E1%85%A6%E1%84%89%E1%85%A5%20%E1%84%89%E1%85%A9%E1%84%85%E1%85%B3%E1%86%AF%20%E1%84%8F%E1%85%B5%E1%84%8B%E1%85%AE%E1%86%AF%E1%84%84%E1%85%A2%20%E1%84%89%E1%85%A1%E1%84%8B%E1%85%AD%E1%84%92%E1%85%A2%E1%86%BB%E1%84%83%E1%85%A5%E1%86%AB%20%E1%84%89%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%AF%E1%84%85%E1%85%A9-vwvXqSw78a4lfrswJY2bM7NY69pwqn.jpg"
                  alt="초기 석조 사일로"
                  style={{ width: "100%", height: "100%", objectFit: "cover", filter: "sepia(0.15) brightness(0.9)" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(44,24,16,0.6) 0%, transparent 50%)" }} />
                <p style={{ position: "absolute", bottom: "0.6rem", left: "0.6rem", fontFamily: "'Cormorant Garamond', Georgia, serif", fontStyle: "italic", fontSize: "0.65rem", color: mm.ivory, opacity: 0.9 }}>초기 석조 사일로</p>
              </div>
            </div>
            <div style={{ overflowX: "auto", borderRadius: "2px", border: `1px solid ${mm.mist}` }}>
              <table className="mm-table" style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.84rem" }}>
                <thead>
                  <tr style={{ background: mm.brown }}>
                    <th style={{ padding: "0.85rem 1.2rem", textAlign: "left", fontFamily: "var(--font-noto-sans-kr), sans-serif", fontWeight: 300, fontSize: "0.72rem", letterSpacing: "0.12em", color: "rgba(245,240,232,0.6)" }}>비교 항목</th>
                    <th style={{ padding: "0.85rem 1.2rem", textAlign: "left", fontFamily: "'Cormorant Garamond', Georgia, serif", fontStyle: "italic", fontWeight: 400, fontSize: "0.92rem", color: mm.gold, letterSpacing: "0.06em" }}>저지 (Jersey)</th>
                    <th style={{ padding: "0.85rem 1.2rem", textAlign: "left", fontFamily: "'Cormorant Garamond', Georgia, serif", fontStyle: "italic", fontWeight: 400, fontSize: "0.92rem", color: "rgba(245,240,232,0.35)", letterSpacing: "0.06em" }}>홀스타인 (Holstein)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["평균 체중", "400~450kg", "600~700kg"],
                    ["유지방 함량", "4.8~5.2%", "3.5~3.7%"],
                    ["사료 효율성", "우수", "보통"],
                    ["A2 유전형 비율", "거의 100%", "혼합형 (A1/A2)"],
                    ["내한성 및 환경 적응력", "우수", "보통"],
                    ["분만 난이도", "낮음", "상대적으로 높음"],
                    ["경제 수명 (산유 기간)", "12~15년", "5~7년"],
                  ].map(([param, jersey, holstein], i) => (
                    <tr key={param} style={{ borderBottom: `1px solid ${mm.mist}`, background: i % 2 === 0 ? mm.milk : mm.ivory }}>
                      <td style={{ padding: "0.75rem 1.2rem", fontFamily: "var(--font-noto-sans-kr), sans-serif", fontWeight: 300, fontSize: "0.82rem", color: mm.brown }}>{param}</td>
                      <td style={{ padding: "0.75rem 1.2rem", fontFamily: "var(--font-noto-sans-kr), sans-serif", fontWeight: 400, fontSize: "0.84rem", color: mm.sage }}>{jersey}</td>
                      <td style={{ padding: "0.75rem 1.2rem", fontFamily: "var(--font-noto-sans-kr), sans-serif", fontWeight: 300, fontSize: "0.82rem", color: mm.brownLight, opacity: 0.7 }}>{holstein}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <Divider />

          {/* 07 북한 */}
          <section>
            <ChapterLabel number="07" label="북한 환경 적용 모델" />
            <h2 style={{ fontFamily: "var(--font-noto-serif-kr), Georgia, serif", fontSize: "clamp(1.35rem, 2.8vw, 1.8rem)", fontWeight: 400, color: mm.ink, letterSpacing: "0.02em", marginBottom: "1.25rem", lineHeight: 1.45 }}>태백 삼수령에서 북한 고지대로</h2>
            <p style={{ fontFamily: "var(--font-noto-sans-kr), sans-serif", fontWeight: 300, fontSize: "1rem", color: mm.brownLight, lineHeight: 1.9, marginBottom: "1.75rem" }}>
              강원도 태백은 남한 내에서 북한 고지대와 가장 유사한 기후와 지형 조건을 갖추고 있습니다. 따라서 삼수령에서 검증된 낙농 시스템은 향후 북한 고지대 지역에 원활하게 적용될 수 있습니다.
            </p>
            <div style={{ overflowX: "auto", borderRadius: "2px", border: `1px solid ${mm.mist}`, marginBottom: "1.75rem" }}>
              <table className="mm-table" style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.84rem" }}>
                <thead>
                  <tr style={{ background: mm.brown }}>
                    <th style={{ padding: "0.85rem 1.2rem", textAlign: "left", fontFamily: "var(--font-noto-sans-kr), sans-serif", fontWeight: 300, fontSize: "0.72rem", letterSpacing: "0.12em", color: "rgba(245,240,232,0.6)" }}>환경 변수</th>
                    <th style={{ padding: "0.85rem 1.2rem", textAlign: "left", fontFamily: "'Cormorant Garamond', Georgia, serif", fontStyle: "italic", fontWeight: 400, fontSize: "0.92rem", color: mm.gold, letterSpacing: "0.06em" }}>태백 삼수령</th>
                    <th style={{ padding: "0.85rem 1.2rem", textAlign: "left", fontFamily: "'Cormorant Garamond', Georgia, serif", fontStyle: "italic", fontWeight: 400, fontSize: "0.92rem", color: "rgba(245,240,232,0.35)", letterSpacing: "0.06em" }}>북한 고지대 평균</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["해발 고도", "해발 1,000m", "800~1,200m"],
                    ["겨울철 결빙 기간", "5~6개월", "5~7개월"],
                    ["1월 평균 기온", "-8°C ~ -12°C", "-10°C ~ -20°C"],
                    ["경작 가능 토지 면적", "매우 제한적", "매우 제한적"],
                    ["사료 공급 방식", "자체 생산 및 일부 외부 조달", "전량 자체 조달 필수"],
                    ["물류 인프라", "산간 원격지, 접근성 제한", "극도로 제약됨"],
                  ].map(([param, taebaek, dprk], i) => (
                    <tr key={param} style={{ borderBottom: `1px solid ${mm.mist}`, background: i % 2 === 0 ? mm.milk : mm.ivory }}>
                      <td style={{ padding: "0.75rem 1.2rem", fontFamily: "var(--font-noto-sans-kr), sans-serif", fontWeight: 300, fontSize: "0.82rem", color: mm.brown }}>{param}</td>
                      <td style={{ padding: "0.75rem 1.2rem", fontFamily: "var(--font-noto-sans-kr), sans-serif", fontWeight: 300, fontSize: "0.82rem", color: mm.brownLight }}>{taebaek}</td>
                      <td style={{ padding: "0.75rem 1.2rem", fontFamily: "var(--font-noto-sans-kr), sans-serif", fontWeight: 300, fontSize: "0.82rem", color: mm.brownLight, opacity: 0.65 }}>{dprk}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: mm.mist, borderRadius: "2px", overflow: "hidden", marginBottom: "1.5rem" }}>
              <div style={{ background: mm.milk, padding: "1.75rem" }}>
                <h3 style={{ fontFamily: "var(--font-noto-serif-kr), Georgia, serif", fontWeight: 400, fontSize: "0.95rem", color: mm.ink, marginBottom: "1rem" }}>북한 고지대의 주요 제약</h3>
                {["5~7개월 이상 지속되는 혹한기", "제한된 경작지 및 식량 자원", "취약한 물류 및 유통망", "외부 농업 투입재 확보의 어려움"].map(item => (
                  <div key={item} style={{ display: "flex", gap: "0.7rem", marginBottom: "0.5rem" }}>
                    <span style={{ color: mm.mist, fontSize: "0.55rem", marginTop: "0.5rem" }}>◆</span>
                    <span style={{ fontFamily: "var(--font-noto-sans-kr), sans-serif", fontWeight: 300, fontSize: "0.83rem", color: mm.brownLight, lineHeight: 1.6 }}>{item}</span>
                  </div>
                ))}
              </div>
              <div style={{ background: mm.brown, padding: "1.75rem" }}>
                <h3 style={{ fontFamily: "var(--font-noto-serif-kr), Georgia, serif", fontWeight: 400, fontSize: "0.95rem", color: mm.gold, marginBottom: "1rem" }}>무무목장 모델의 현지 적합성</h3>
                {["고가 자동화 장비 의존도 배제", "통신 인프라 불필요", "현지 사료 자급자족 시스템 구축", "자연 교배 중심의 안정적 번식 구조", "도제식 현장 교육을 통한 기술 전수 용이"].map(item => (
                  <div key={item} style={{ display: "flex", gap: "0.7rem", marginBottom: "0.5rem" }}>
                    <span style={{ color: mm.gold, fontSize: "0.55rem", marginTop: "0.5rem" }}>◆</span>
                    <span style={{ fontFamily: "var(--font-noto-sans-kr), sans-serif", fontWeight: 300, fontSize: "0.83rem", color: "rgba(245,240,232,0.75)", lineHeight: 1.6 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: mm.milk, border: `1px solid ${mm.mist}`, borderRadius: "2px", padding: "1.5rem 1.75rem" }}>
              <p style={{ fontFamily: "var(--font-noto-sans-kr), sans-serif", fontWeight: 300, fontSize: "0.88rem", color: mm.brownLight, lineHeight: 1.9 }}>
                헤이퍼 인터내셔널(Heifer International)의 &ldquo;선물 전달(Passing on the Gift)&rdquo; 원칙을 차용하여 암송아지 자가 증식 구조를 설계했습니다. 초기 5두에서 시작하여 2년 후 10두, 4년 후 20두로 점진적이고 안정적인 확장이 가능합니다.
              </p>
            </div>
          </section>

          <Divider />

          {/* 08 생태신학 */}
          <section>
            <ChapterLabel number="08" label="생태신학" />
            <h2 style={{ fontFamily: "var(--font-noto-serif-kr), Georgia, serif", fontSize: "clamp(1.35rem, 2.8vw, 1.8rem)", fontWeight: 400, color: mm.ink, letterSpacing: "0.02em", marginBottom: "2rem", lineHeight: 1.45 }}>창조질서 회복의 운영 원칙</h2>
            <div style={{ position: "relative", aspectRatio: "16/9", borderRadius: "2px", overflow: "hidden", marginBottom: "2.25rem" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E1%84%8B%E1%85%A8%E1%84%89%E1%85%AE%E1%84%8B%E1%85%AF%E1%86%AB%20%E1%84%89%E1%85%A9%E1%84%80%E1%85%B5%E1%84%83%E1%85%A9%E1%84%89%E1%85%B5%E1%86%AF%E1%84%8B%E1%85%A6%E1%84%89%E1%85%A5%20%E1%84%80%E1%85%B5%E1%84%83%E1%85%A9%E1%84%92%E1%85%A1%E1%84%80%E1%85%A9%20%E1%84%8B%E1%85%B5%E1%86%BB%E1%84%82%E1%85%B3%E1%86%AB%20%E1%84%86%E1%85%AE%E1%84%86%E1%85%AE%E1%84%86%E1%85%A9%E1%86%A8%E1%84%8C%E1%85%A1%E1%86%BC%20%E1%84%8B%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%83%E1%85%B3%E1%86%AF-97xMXrY9FD5ahbUmY0bReONDeVJMEt.jpg"
                alt="예수원 소기도실에서 기도하고 있는 무무목장 아이들"
                style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.84) sepia(0.1)" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(44,24,16,0.65) 0%, transparent 55%)" }} />
              <p style={{ position: "absolute", bottom: "1.2rem", left: "1.4rem", fontFamily: "'Cormorant Garamond', Georgia, serif", fontStyle: "italic", fontSize: "0.82rem", color: mm.ivory, opacity: 0.9, letterSpacing: "0.05em" }}>예수원 소기도실에서 기도하고 있는 무무목장 아이들</p>
            </div>
            <p style={{ fontFamily: "var(--font-noto-sans-kr), sans-serif", fontWeight: 300, fontSize: "1rem", color: mm.brownLight, lineHeight: 1.9, marginBottom: "1.75rem" }}>
              무무목장은 단순한 생산성 향상 외에도 생태계 보전과 창조질서 회복을 위한 다음의 운영 원칙을 철저히 준수합니다.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: mm.mist, borderRadius: "2px", overflow: "hidden", marginBottom: "1.5rem" }}>
              {["토양 생태계 보전 우선", "가축의 본성 및 생명권 존중", "자연과 계절의 순환 리듬 준수", "환경을 훼손하는 과잉 생산 배제"].map(p => (
                <div key={p} style={{ background: mm.milk, padding: "1.2rem 1.5rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <span style={{ color: mm.sage, fontSize: "0.55rem", flexShrink: 0 }}>◆</span>
                  <span style={{ fontFamily: "var(--font-noto-sans-kr), sans-serif", fontWeight: 300, fontSize: "0.88rem", color: mm.brown, lineHeight: 1.5 }}>{p}</span>
                </div>
              ))}
            </div>
            <p style={{ fontFamily: "var(--font-noto-sans-kr), sans-serif", fontWeight: 300, fontSize: "0.85rem", color: mm.sage, lineHeight: 1.8, paddingLeft: "1rem", borderLeft: `1px solid ${mm.sageLight}` }}>
              이러한 철학은 단기적 이익을 넘어 장기적인 생태적, 경제적 지속 가능성을 확보하는 핵심 기준입니다.
            </p>
          </section>

          <Divider />

          {/* 09 전략적 기대 효과 */}
          <section>
            <ChapterLabel number="09" label="전략적 기대 효과" />
            <h2 style={{ fontFamily: "var(--font-noto-serif-kr), Georgia, serif", fontSize: "clamp(1.35rem, 2.8vw, 1.8rem)", fontWeight: 400, color: mm.ink, letterSpacing: "0.02em", marginBottom: "1.25rem", lineHeight: 1.45 }}>소규모이지만 명확한 전략적 의미</h2>
            <p style={{ fontFamily: "var(--font-noto-sans-kr), sans-serif", fontWeight: 300, fontSize: "1rem", color: mm.brownLight, lineHeight: 1.9, marginBottom: "1.75rem" }}>
              삼수령 무무목장은 소규모로 운영되지만, 그 전략적 목적과 기대 효과는 명확합니다.
            </p>
            <div style={{ background: mm.brown, borderRadius: "2px", padding: "2.25rem 2rem", marginBottom: "2rem" }}>
              {["고지대 농촌 자립 모델의 실증 및 최적화", "북한이 인도적 지원을 받아들일 때 즉시 복제 가능한 축산 인프라 매뉴얼 확보", "생산(재생농업)·가공·관광·교육이 결합된 통합 비즈니스 모델 검증"].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "1.25rem", alignItems: "flex-start", marginBottom: i < 2 ? "1.5rem" : 0 }}>
                  <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontStyle: "italic", fontSize: "0.85rem", color: mm.gold, flexShrink: 0, marginTop: "0.15rem" }}>0{i + 1}</span>
                  <span style={{ fontFamily: "var(--font-noto-sans-kr), sans-serif", fontWeight: 300, fontSize: "0.9rem", color: "rgba(245,240,232,0.82)", lineHeight: 1.8 }}>{item}</span>
                </div>
              ))}
            </div>
            <p style={{ fontFamily: "var(--font-noto-serif-kr), Georgia, serif", fontSize: "1rem", fontWeight: 400, color: mm.brown, lineHeight: 1.85, letterSpacing: "0.02em" }}>
              본 프로젝트는 단순한 농장 운영을 넘어, 한반도 고지대 농촌 생태계 회복과 경제적 자립을 위한 핵심 테스트베드(Testbed) 역할을 수행할 것입니다.
            </p>
          </section>

          <Divider />

          {/* 무무곳간 */}
          <section>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <span style={{ display: "block", fontFamily: "'Cormorant Garamond', Georgia, serif", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(2.5rem, 6vw, 4rem)", color: mm.brown, letterSpacing: "0.05em", lineHeight: 1, marginBottom: "0.4rem" }}>無無곳간</span>
              <span style={{ display: "block", fontFamily: "'Cormorant Garamond', Georgia, serif", fontStyle: "italic", fontSize: "0.82rem", color: mm.gold, letterSpacing: "0.28em", textTransform: "uppercase" as const, marginBottom: "2.25rem" }}>MooMoo Gotgan</span>
              <p style={{ fontFamily: "var(--font-noto-sans-kr), sans-serif", fontWeight: 300, fontSize: "0.95rem", color: mm.brownLight, lineHeight: 1.9, maxWidth: "540px", margin: "0 auto 1.25rem" }}>
                무무곳간은 삼수령무무목장에서 생산한 프리미엄 A2 유제품을 소비자에게 직접 제공하는 브랜드입니다. 단순한 유통 채널을 넘어, 창조질서 회복의 가치와 생태순환농업의 결실을 전달하는 플랫폼 역할을 수행합니다.
              </p>
              <p style={{ fontFamily: "var(--font-noto-sans-kr), sans-serif", fontWeight: 300, fontSize: "0.95rem", color: mm.brownLight, lineHeight: 1.9, maxWidth: "540px", margin: "0 auto 2.75rem" }}>
                퍼머컬처 원리로 사육한 저지(Jersey) 소의 원유를 활용하여 최고 품질의 요거트, 치즈, 버터 등을 생산합니다. &ldquo;소를 소답게 키운다&rdquo;는 예수원 공동체의 목축 철학을 실현하며, 소비자는 건강한 유제품을 소비함으로써 북한 고지대 농촌 복원 모델 구축이라는 사회적 가치 실현에 동참할 수 있습니다.
              </p>
              <div style={{ display: "flex", justifyContent: "center", gap: "0.85rem", flexWrap: "wrap" as const }}>
                <a href="https://smartstore.naver.com/moomooranch" target="_blank" rel="noopener noreferrer" className="mm-btn-primary"
                  style={{ display: "inline-flex", alignItems: "center", gap: "0.55rem", padding: "0.85rem 2rem", background: mm.brown, color: mm.ivory, fontFamily: "var(--font-noto-sans-kr), sans-serif", fontWeight: 300, fontSize: "0.84rem", letterSpacing: "0.12em", textDecoration: "none", borderRadius: "1px", border: `1px solid ${mm.brown}` }}>
                  <span>무무곳간 방문하기</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
                <a href="https://pf.kakao.com/_xkSdxbn" target="_blank" rel="noopener noreferrer" className="mm-btn-kakao"
                  style={{ display: "inline-flex", alignItems: "center", gap: "0.55rem", padding: "0.85rem 2rem", background: "#FEE500", color: "#191919", fontFamily: "var(--font-noto-sans-kr), sans-serif", fontWeight: 300, fontSize: "0.84rem", letterSpacing: "0.12em", textDecoration: "none", borderRadius: "1px", border: "1px solid #FEE500" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 3C6.477 3 2 6.463 2 10.691c0 2.722 1.804 5.108 4.521 6.46-.177.663-.641 2.407-.734 2.78-.112.45.166.444.348.323.143-.095 2.275-1.547 3.193-2.17.872.13 1.768.198 2.672.198 5.523 0 10-3.463 10-7.691C22 6.463 17.523 3 12 3z" />
                  </svg>
                  <span>카카오 채널</span>
                </a>
              </div>
            </div>
          </section>

          {/* Footer location tag */}
          <div style={{ textAlign: "center", padding: "2.25rem", border: `1px solid ${mm.mist}`, borderRadius: "2px", background: mm.milk }}>
            <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontStyle: "italic", fontSize: "1rem", color: mm.brownLight, letterSpacing: "0.08em", marginBottom: "0.3rem" }}>삼수령 무무목장</p>
            <p style={{ fontFamily: "var(--font-noto-sans-kr), sans-serif", fontWeight: 200, fontSize: "0.75rem", letterSpacing: "0.22em", color: mm.gold, textTransform: "uppercase" as const }}>강원특별자치도 태백시 · 해발 1,000m</p>
          </div>

        </div>
      </div>
    </>
  )
}
