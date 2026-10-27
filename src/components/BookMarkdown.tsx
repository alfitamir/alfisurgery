import type { ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { headingSlug } from "@/lib/book-content";

function plainText(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(plainText).join("");
  if (node && typeof node === "object" && "props" in node)
    return plainText((node as { props: { children?: ReactNode } }).props.children);
  return "";
}

/** Renders the doctor's own bundled book markdown (trusted source; only <br> and <small> tags are used). */
export function BookMarkdown({ markdown }: { markdown: string }) {
  return (
    <div className="book-reading">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          h2: ({ children }) => <h2 id={headingSlug(plainText(children))}>{children}</h2>,
          table: ({ children }) => (
            <div className="book-table">
              <table>{children}</table>
            </div>
          ),
          a: ({ href, children }) => (
            <a
              href={href}
              target={href?.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
            >
              {children}
            </a>
          ),
        }}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
}
