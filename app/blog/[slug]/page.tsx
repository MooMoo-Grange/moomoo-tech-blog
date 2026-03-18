import { notFound } from "next/navigation"
import Link from "next/link"
import { getPostBySlug, getAllPosts, getAllPostsUnfiltered } from "@/lib/notion"
import Breadcrumbs from "@/components/Breadcrumbs"
import NotionRenderer from "@/components/blog/NotionRenderer"

export const revalidate = 10 // 10초 ISR — 노션 수정 후 최대 10초 내 반영

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) return { title: "글을 찾을 수 없습니다" }
  return {
    title: post.title,
    description: post.summary || `예수원 이야기 — ${post.title}`,
    openGraph: {
      title: post.title,
      description: post.summary,
      images: post.coverImage ? [{ url: post.coverImage }] : [],
    },
  }
}

export async function generateStaticParams() {
  let posts = await getAllPosts()
  if (posts.length === 0) {
    posts = await getAllPostsUnfiltered()
  }
  return posts.map((post) => ({ slug: post.slug }))
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) notFound()

  const formattedDate = new Date(post.publishedDate).toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "홈", path: "/" },
          { label: "예수원 이야기", path: "/blog" },
          { label: post.title },
        ]}
      />

      <article className="py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <header className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-sm font-medium text-forest-600 bg-forest-50 px-3 py-1 rounded">
                {post.category}
              </span>
              <span className="text-sm text-abbey-400">{formattedDate}</span>
              {post.author && (
                <>
                  <span className="text-abbey-300">·</span>
                  <span className="text-sm text-abbey-500">{post.author}</span>
                </>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-abbey-900 leading-tight mb-4">
              {post.title}
            </h1>

            {post.summary && (
              <p className="text-lg text-abbey-500 leading-relaxed italic">
                {post.summary}
              </p>
            )}

            {/* Tags */}
            {post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-abbey-500 bg-abbey-100 px-2 py-1 rounded"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          {/* Cover Image */}
          {post.coverImage && (
            <figure className="mb-10 -mx-4 sm:mx-0">
              <img
                src={post.coverImage}
                alt={post.title}
                className="w-full rounded-lg shadow-md"
              />
            </figure>
          )}

          {/* Content */}
          <div className="text-base leading-[1.85] text-abbey-700">
            <NotionRenderer blocks={post.blocks} />
          </div>

          {/* Separator */}
          <hr className="my-12 border-abbey-200" />

          {/* Back Link */}
          <div className="flex justify-between items-center">
            <Link
              href="/blog"
              className="text-forest-600 hover:text-forest-800 text-sm font-medium flex items-center gap-1"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              목록으로 돌아가기
            </Link>
          </div>
        </div>
      </article>
    </>
  )
}
