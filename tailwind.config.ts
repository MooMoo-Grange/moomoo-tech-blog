import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        abbey: {
          50: "#faf8f5", 100: "#f0ebe4", 200: "#e0d5c8", 300: "#cbb89f",
          400: "#b69a7a", 500: "#8b7355", 600: "#8a6a4e", 700: "#6e5340",
          800: "#4a3728", 900: "#2d1f14", 950: "#1a1008",
        },
        forest: {
          50: "#f3f6f3", 100: "#e4eae3", 200: "#c9d6c8", 300: "#a3b9a1",
          400: "#789876", 500: "#577c55", 600: "#2d5016", 700: "#1a3a0a",
          800: "#2f402e", 900: "#283527", 950: "#141c14",
        },
        sacred: {
          gold: "#c4a35a",
          amber: "#b8860b",
          navy: "#1a1a3e",
          candle: "#ffe4b5",
        },
      },
      fontFamily: {
        serif: ['"Noto Serif KR"', '"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['"Noto Sans KR"', "system-ui", "sans-serif"],
      },
      fontSize: {
        "body": ["1.125rem", { lineHeight: "2" }],
        "body-sm": ["1rem", { lineHeight: "1.8" }],
      },
      maxWidth: {
        "reading": "38em",
      },
      spacing: {
        "section": "6rem",
        "paragraph": "2rem",
      },
    },
  },
  plugins: [],
}
export default config
