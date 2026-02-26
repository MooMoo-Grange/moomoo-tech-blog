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
          50: "#faf8f5", 100: "#f0ebe3", 200: "#e0d5c5", 300: "#cbb89f",
          400: "#b69a7a", 500: "#a58260", 600: "#8a6a4e", 700: "#6e5340",
          800: "#5a4536", 900: "#4a3a2f", 950: "#2d2219",
        },
        forest: {
          50: "#f3f6f3", 100: "#e4eae3", 200: "#c9d6c8", 300: "#a3b9a1",
          400: "#789876", 500: "#577c55", 600: "#456343", 700: "#384f37",
          800: "#2f402e", 900: "#283527", 950: "#141c14",
        },
      },
      fontFamily: {
        serif: ["var(--font-noto-serif-kr)", "Georgia", "serif"],
        sans: ["var(--font-noto-sans-kr)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
}
export default config
