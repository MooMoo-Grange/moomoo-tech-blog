"use client"

import { useState } from "react"
import type { BlogPost } from "@/lib/notion"
import BlogCard from "./BlogCard"

interface Props {
  posts: BlogPost[]
  categories: string[]
}

export default function CategoryFilter({ posts, categories }: Props) {
  const [selected, setSelected] = useState<string>("전체")

  const filtered =
    selected === "전체" ? posts : posts.filter((p) => p.category === selected)

  return (
    <>
      {/* Category Pills */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setSelected("전체")}
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
            selected === "전체"
              ? "bg-forest-600 text-white"
              : "bg-abbey-100 text-abbey-600 hover:bg-abbey-200"
          }`}
        >
          전체
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelected(cat)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
              selected === cat
                ? "bg-forest-600 text-white"
                : "bg-abbey-100 text-abbey-600 hover:bg-abbey-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Post Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-abbey-500 text-lg">아직 게시된 글이 없습니다.</p>
          <p className="text-abbey-400 text-sm mt-2">
            곧 예수원의 이야기가 이곳에 채워질 것입니다.
          </p>
        </div>
      )}
    </>
  )
}
