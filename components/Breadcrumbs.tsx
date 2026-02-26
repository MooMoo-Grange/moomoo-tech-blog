import Link from "next/link"

export interface BreadcrumbItem { label: string; path?: string }

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  if (!items.length) return null
  return (
    <nav className="bg-abbey-100/50 border-b border-abbey-200" aria-label="경로">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center space-x-2 py-3 text-sm text-abbey-500">
          {items.map((bc, i) => (
            <li key={i} className="flex items-center">
              {i > 0 && <span className="mx-1">/</span>}
              {bc.path ? (
                <Link href={bc.path} className="hover:text-forest-700 transition-colors">{bc.label}</Link>
              ) : (
                <span className="text-abbey-700 font-medium">{bc.label}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  )
}
