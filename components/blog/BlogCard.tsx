import Link from "next/link"
import type { BlogPost } from "@/lib/notion"

export default function BlogCard({ post }: { post: BlogPost }) {
  const formattedDate = new Date(post.publishedDate).toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block bg-white rounded-lg overflow-hidden shadow-sm border border-abbey-200 hover:border-forest-300 hover:shadow-md transition-all duration-200"
    >
      {/* Cover Image */}
      {post.coverImage ? (
        <div className="aspect-[16/9] overflow-hidden bg-abbey-100">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </div>
      ) : (
        <div className="aspect-[16/9] bg-gradient-to-br from-forest-100 to-abbey-100 flex items-center justify-center">
          <span className="text-5xl opacity-30">✝</span>
        </div>
      )}

      {/* Content */}
      <div className="p-5">
        {/* Category & Date */}
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-medium text-forest-600 bg-forest-50 px-2 py-0.5 rounded">
            {post.category}
          </span>
          <span className="text-xs text-abbey-400">{formattedDate}</span>
        </div>

        {/* Title */}
        <h2 className="text-lg font-serif font-bold text-abbey-900 group-hover:text-forest-700 transition-colors line-clamp-2 mb-2">
          {post.title}
        </h2>

        {/* Summary */}
        {post.summary && (
          <p className="text-sm text-abbey-600 leading-relaxed line-clamp-3">
            {post.summary}
          </p>
        )}

        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-3">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-xs text-abbey-500 bg-abbey-50 px-2 py-0.5 rounded"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  )
}
