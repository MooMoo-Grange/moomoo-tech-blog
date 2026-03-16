import { getAllPosts, getAllPostsUnfiltered, getCategories } from "@/lib/notion"
import Breadcrumbs from "@/components/Breadcrumbs"
import CategoryFilter from "@/components/blog/CategoryFilter"

export const revalidate = 3600 // 1시간 ISR

export const metadata = {
  title: "예수원 이야기",
  description: "예수원 공동체의 이야기, 설립자의 유산, 그리고 삼수령에서 이어지는 삶의 기록들",
}

export default async function BlogPage() {
  // Published 필터된 포스트 시도, 없으면 전체 조회
  let posts = await getAllPosts()
  if (posts.length === 0) {
    posts = await getAllPostsUnfiltered()
  }
  const categories = await getCategories()

  return (
    <>
      <Breadcrumbs items={[{ label: "홈", path: "/" }, { label: "예수원 이야기" }]} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-abbey-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-serif font-bold text-abbey-900 mb-4">
            예수원 이야기
          </h1>
          <p className="text-lg text-abbey-600 leading-relaxed max-w-3xl">
            광야의 식탁 위에 차려진 이야기들 — 대천덕 신부님과 현재인 사모님이 세운 예수원,
            그리고 삼수령 무무목장에서 이어가는 신앙과 삶의 기록입니다.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CategoryFilter posts={posts} categories={categories} />
        </div>
      </section>
    </>
  )
}
