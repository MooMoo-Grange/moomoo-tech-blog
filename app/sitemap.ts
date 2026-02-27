import type { MetadataRoute } from "next"

const BASE = "https://jesusabbey.org"

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "/",
    "/identity",
    "/identity/foundation",
    "/identity/experiments",
    "/identity/ministries",
    "/identity/dna",
    "/identity/fourth-river",
    "/identity/moomoo-grange",
    "/founders",
    "/founders/torrey",
    "/founders/jane",
    "/founders/jane/book",
    "/founders/prayers",
    "/founders/thought-map",
    "/founders/archive/books",
    "/founders/archive/lectures",
    "/rhythm",
    "/rhythm/worship",
    "/rhythm/angelus",
    "/rhythm/silence",
    "/rhythm/meals",
    "/rhythm/labor",
    "/formation",
    "/formation/philosophy",
    "/formation/seminar",
    "/formation/trainee",
    "/formation/applicant",
    "/visit",
    "/visit/about",
    "/visit/how",
    "/visit/faq",
    "/visit/transport",
    "/visit/onsite",
    "/publications",
    "/publications/catalog",
    "/publications/hymnals",
    "/publications/media",
    "/publications/gifts",
    "/news",
    "/news/announcements",
    "/news/prayer",
    "/news/contact",
  ]

  return routes.map((route) => ({
    url: `${BASE}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route.split("/").length <= 2 ? 0.8 : 0.6,
  }))
}
