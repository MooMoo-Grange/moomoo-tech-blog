import type { BlockObjectResponse, RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints"
import React from "react"

function renderRichText(richTexts: RichTextItemResponse[]) {
  return richTexts.map((text, i) => {
    const { annotations, plain_text, href } = text
    let element: React.ReactNode = plain_text

    if (annotations.bold) element = <strong key={i}>{element}</strong>
    if (annotations.italic) element = <em key={i}>{element}</em>
    if (annotations.strikethrough) element = <s key={i}>{element}</s>
    if (annotations.underline) element = <u key={i}>{element}</u>
    if (annotations.code)
      element = (
        <code key={i} className="bg-abbey-100 px-1.5 py-0.5 rounded text-sm font-mono">
          {element}
        </code>
      )
    if (href)
      element = (
        <a
          key={i}
          href={href}
          className="text-forest-600 underline hover:text-forest-800"
          target="_blank"
          rel="noopener noreferrer"
        >
          {element}
        </a>
      )

    return <React.Fragment key={i}>{element}</React.Fragment>
  })
}

function renderBlock(block: BlockObjectResponse): React.ReactNode {
  const { type, id } = block
  const value = (block as any)[type]

  switch (type) {
    case "paragraph":
      if (!value.rich_text?.length) return <div key={id} className="h-4" />
      return (
        <p key={id} className="mb-4 leading-relaxed text-abbey-700">
          {renderRichText(value.rich_text)}
        </p>
      )

    case "heading_1":
      return (
        <h1 key={id} className="text-3xl font-serif font-bold mt-10 mb-4 text-abbey-900">
          {renderRichText(value.rich_text)}
        </h1>
      )

    case "heading_2":
      return (
        <h2 key={id} className="text-2xl font-serif font-bold mt-8 mb-3 text-abbey-900">
          {renderRichText(value.rich_text)}
        </h2>
      )

    case "heading_3":
      return (
        <h3 key={id} className="text-xl font-serif font-bold mt-6 mb-2 text-abbey-800">
          {renderRichText(value.rich_text)}
        </h3>
      )

    case "bulleted_list_item":
      return (
        <li key={id} className="ml-6 list-disc mb-1 text-abbey-700">
          {renderRichText(value.rich_text)}
          {value.children && (
            <ul className="mt-1">
              {value.children.map((child: BlockObjectResponse) =>
                renderBlock(child)
              )}
            </ul>
          )}
        </li>
      )

    case "numbered_list_item":
      return (
        <li key={id} className="ml-6 list-decimal mb-1 text-abbey-700">
          {renderRichText(value.rich_text)}
          {value.children && (
            <ol className="mt-1">
              {value.children.map((child: BlockObjectResponse) =>
                renderBlock(child)
              )}
            </ol>
          )}
        </li>
      )

    case "quote":
      return (
        <blockquote
          key={id}
          className="border-l-4 border-forest-400 pl-4 py-2 my-6 italic text-abbey-600 bg-abbey-50 rounded-r"
        >
          {renderRichText(value.rich_text)}
        </blockquote>
      )

    case "callout":
      return (
        <div
          key={id}
          className="bg-abbey-50 border border-abbey-200 rounded-lg p-4 my-4 flex gap-3"
        >
          {value.icon?.emoji && <span className="text-xl">{value.icon.emoji}</span>}
          <div className="text-abbey-700">{renderRichText(value.rich_text)}</div>
        </div>
      )

    case "divider":
      return <hr key={id} className="my-8 border-abbey-200" />

    case "image": {
      const src =
        value.type === "external" ? value.external.url : value.file?.url
      const caption = value.caption?.length
        ? renderRichText(value.caption)
        : null
      return (
        <figure key={id} className="my-8">
          {src && (
            <img
              src={src}
              alt={value.caption?.[0]?.plain_text || ""}
              className="w-full rounded-lg shadow-sm"
              loading="lazy"
            />
          )}
          {caption && (
            <figcaption className="text-center text-sm text-abbey-500 mt-2 italic">
              {caption}
            </figcaption>
          )}
        </figure>
      )
    }

    case "code":
      return (
        <pre
          key={id}
          className="bg-abbey-900 text-abbey-100 rounded-lg p-4 overflow-x-auto my-4 text-sm"
        >
          <code>{value.rich_text?.[0]?.plain_text}</code>
        </pre>
      )

    case "toggle":
      return (
        <details key={id} className="my-4 bg-abbey-50 rounded-lg p-4">
          <summary className="cursor-pointer font-medium text-abbey-800">
            {renderRichText(value.rich_text)}
          </summary>
          <div className="mt-2">
            {value.children?.map((child: BlockObjectResponse) =>
              renderBlock(child)
            )}
          </div>
        </details>
      )

    case "bookmark":
      return (
        <a
          key={id}
          href={value.url}
          className="block my-4 p-4 border border-abbey-200 rounded-lg hover:border-forest-300 transition-colors text-forest-600 hover:text-forest-800"
          target="_blank"
          rel="noopener noreferrer"
        >
          {value.url}
        </a>
      )

    case "table_of_contents":
      return null

    default:
      return null
  }
}

export default function NotionRenderer({ blocks }: { blocks: BlockObjectResponse[] }) {
  // Group list items
  const rendered: React.ReactNode[] = []
  let currentList: { type: "ul" | "ol"; items: React.ReactNode[] } | null = null

  blocks.forEach((block, i) => {
    if (block.type === "bulleted_list_item") {
      if (!currentList || currentList.type !== "ul") {
        if (currentList) {
          const Tag = currentList.type === "ul" ? "ul" : "ol"
          rendered.push(<Tag key={`list-${i}`} className="mb-4">{currentList.items}</Tag>)
        }
        currentList = { type: "ul", items: [] }
      }
      currentList.items.push(renderBlock(block))
    } else if (block.type === "numbered_list_item") {
      if (!currentList || currentList.type !== "ol") {
        if (currentList) {
          const Tag = currentList.type === "ul" ? "ul" : "ol"
          rendered.push(<Tag key={`list-${i}`} className="mb-4">{currentList.items}</Tag>)
        }
        currentList = { type: "ol", items: [] }
      }
      currentList.items.push(renderBlock(block))
    } else {
      if (currentList) {
        const Tag = currentList.type === "ul" ? "ul" : "ol"
        rendered.push(<Tag key={`list-${i}`} className="mb-4">{currentList.items}</Tag>)
        currentList = null
      }
      rendered.push(renderBlock(block))
    }
  })

  // Flush remaining list
  const remainingList = currentList as { type: "ul" | "ol"; items: React.ReactNode[] } | null
  if (remainingList) {
    const Tag = remainingList.type === "ul" ? "ul" : "ol"
    rendered.push(<Tag key="list-end" className="mb-4">{remainingList.items}</Tag>)
  }

  return <div className="prose-abbey">{rendered}</div>
}
