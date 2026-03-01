"use client"

import { useState, useCallback } from "react"
import Link from "next/link"

const VIDEO_ID = "29oITQ2z7SQ"
const EMBED_SRC = `https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${VIDEO_ID}&controls=0&showinfo=0&modestbranding=1&playsinline=1&rel=0&disablekb=1&iv_load_policy=3&fs=0&cc_load_policy=0&origin=${typeof window !== "undefined" ? window.location.origin : ""}`
const POSTER_URL = `https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`

export default function HeroVideo() {
  const [loaded, setLoaded] = useState(false)

  const handleLoad = useCallback(() => {
    setLoaded(true)
  }, [])

  return (
    <section className="relative overflow-hidden bg-forest-900 text-white min-h-[520px] lg:min-h-[600px] flex items-center">
      {/* Static fallback / poster — always rendered, fades out when video loads */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${loaded ? "opacity-0" : "opacity-100"}`}
        aria-hidden="true"
      >
        {/* Gradient placeholder shown instantly */}
        <div className="absolute inset-0 bg-gradient-to-br from-forest-900 via-forest-800 to-forest-700" />
        {/* Poster thumbnail loaded in background */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={POSTER_URL}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          loading="eager"
        />
      </div>

      {/* YouTube iframe — hidden from reduced-motion users */}
      <div
        className="absolute inset-0 motion-reduce:hidden pointer-events-none"
        aria-hidden="true"
      >
        {/*
          Scale the iframe larger than its container so YouTube's
          16:9 video fills any aspect ratio without black bars (cover effect).
          The wrapper clips overflow.
        */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.78vh] min-w-full min-h-full aspect-video">
          <iframe
            src={EMBED_SRC}
            title="Jesus Abbey background video"
            className={`w-full h-full border-0 transition-opacity duration-1000 ${loaded ? "opacity-100" : "opacity-0"}`}
            allow="autoplay; encrypted-media"
            referrerPolicy="strict-origin-when-cross-origin"
            onLoad={handleLoad}
            tabIndex={-1}
          />
        </div>
      </div>

      {/* Reduced-motion fallback */}
      <div
        className="absolute inset-0 hidden motion-reduce:block"
        aria-hidden="true"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={POSTER_URL}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
      </div>

      {/* Dark overlay for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />

      {/* Content overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24 lg:py-32 w-full">
        <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-4 text-white drop-shadow-lg">
          예수원
        </h1>
        <p className="text-xl lg:text-2xl font-serif text-white/90 mb-2 drop-shadow-md">
          Jesus Abbey
        </p>
        <p className="text-lg text-white/80 max-w-2xl mx-auto mt-6 drop-shadow-sm">
          덕항산 기슭에서 기도와 노동, 공동체의 삶을 통해
          <br />
          하나님 나라를 살아가는 수도 공동체
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/visit/about"
            className="inline-block bg-white text-forest-800 px-8 py-3 rounded-lg font-medium hover:bg-forest-50 transition-colors shadow-lg"
          >
            예수원 알아보기
          </Link>
          <Link
            href="/visit/how"
            className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors shadow-lg"
          >
            방문 안내
          </Link>
        </div>
      </div>
    </section>
  )
}
