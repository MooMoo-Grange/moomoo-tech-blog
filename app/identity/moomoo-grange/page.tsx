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
  ivory:      "#F5F0E8",
  milk:       "#FAF7F2",
  gold:       "#C4A46C",
  goldLight:  "#D4B882",
  brown:      "#5C4033",
  brownLight: "#7A5C4E",
  sage:       "#7A8B6F",
  sageLight:  "#9AAB8F",
  ink:        "#2C1810",
  mist:       "#E8E2D8",
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
                { ko: "기도", la: "Ora",    c: mm.gold },
                { ko: "독서", la: "Lege",   c: mm.brownLight },
                { ko: "노동", la: "Labora", c: mm.sage },
              ] as const).map(({ ko, la, c }) => (
                <div key={la} style={{ textAlign: "center" }}>
                  <span style={{ display: "block", fontFamily: "'Cormorant Garamond', Georgia, serif", fontStyle: "italic", fontSize: "1rem", color: c, letterSpacing: "0.1em" }}>{la}</span>
                  <span style={{ display: "block", fontFamily: "var(--font-noto-sans-kr), sans-serif", fontWeight: 200, fontSize: "0.62rem", letterSpacing: "0.18em", color: "rgba(245,240,232,0.35)", marginTop: "0.2rem" }}>{ko}</span>
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
                { name: "히스기야 (서수철)", origin: "남한", c: mm.sage, desc: "현장 운영 및 지역 기반 관리를 담당합니다. 예수원 공동체 소속의 목장 책임자로서 해발 1,000m 고지대 목초지와 저지(Jersey) 소 떼의 사계절 관리를 총괄합니다." },
                { name: "박요셉 (Joseph Park)", origin: "북한 (함경북도 출신)", c: mm.gold, desc: "북한 환경 분석 및 현지 적용 모델 설계를 담당합니다. 건국대학교 수의과대학을 졸업하고 사회적 기업 (주)요벨을 설립·운영했으며, 삼수령무무목장에서 융복합산업 기반 농촌 복원 모델을 개척하고 있습니다." },
                { name: "바니 스미스 박사", origin: "미국", c: mm.brownLight, desc: "국제 개발 및 특수 환경 대응 전략을 자문합니다. 미국 수의사 자격을 보유하고 있으며, 1997년부터 2019년까지 북한 현지에서 선교사이자 농업 실무자로 활동한 경험을 바탕으로 기술적 통찰을 제공합니다." },
              ] as const).map(({ name, origin, c, desc }) => (
                <div key={name} style={{ background: mm.milk, padding: "2rem 1.75rem" }}>
                  <h3 style={{ fontFamily: "var(--font-noto-serif-kr), Georgia, serif", fontWeight: 400, fontSize: "1rem", color: mm.ink, marginBottom: "0.3rem" }}>{name}</h3>
                  <span style={{ display: "inline-block", fontFamily: "'Cormorant Garamond', Georgia, serif", fontStyle: "italic", fontSize: "0.75rem", color: c, letterSpacing: "0.08em", marginBottom: "1rem" }}>{origin}</span>
                  <p style={{ fontFamily: "var(--font-noto-sans-kr), sans-serif", fontWeight: 300, fontSize: "0.84rem", color: mm.brownLight, lineHeight: 1.85 }}>{desc}</p>
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
                    <path d="M12 3C6.477 3 2 6.463 2 10.691c0 2.722 1.804 5.108 4.521 6.46-.177.663-.641 2.407-.734 2.78-.112.45.166.444.348.323.143-.095 2.275-1.547 3.193-2.17.872.13 1.768.198 2.672.198 5.523 0 10-3.463 10-7.691C22 6.463 17.523 3 12 3z"/>
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
