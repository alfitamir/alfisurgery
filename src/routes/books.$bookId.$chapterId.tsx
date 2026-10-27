import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, ListOrdered, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSiteLanguage } from "@/components/SiteLanguageProvider";
import { booksCopy } from "@/data/books-copy";
import { findBook, readingMinutes } from "@/data/books";
import { chapterHeadings, loadBookChapter } from "@/lib/book-content";
import { BookMarkdown } from "@/components/BookMarkdown";

export const Route = createFileRoute("/books/$bookId/$chapterId")({
  loader: async ({ params }) => {
    const book = findBook(params.bookId);
    const index = book ? book.chapters.findIndex((c) => c.id === params.chapterId) : -1;
    if (!book || index < 0) throw notFound();
    const markdown = await loadBookChapter(book.id, book.chapters[index].file);
    if (!markdown) throw notFound();
    return { bookId: book.id, index, markdown };
  },
  head: ({ params }) => {
    const book = findBook(params.bookId);
    const chapter = book?.chapters.find((c) => c.id === params.chapterId);
    if (!book || !chapter)
      return {
        meta: [
          { title: "Chapter not found | Alfi Surgery" },
          { name: "robots", content: "noindex" },
        ],
      };
    const title = `${chapter.title} | ${book.title} — Dr. Tamer Elalfy`;
    const description = `${chapter.title}. From “${book.title}: ${book.subtitle}”, by ${book.author}. ${book.summary}`;
    return {
      meta: [
        { title },
        { name: "description", content: description.slice(0, 300) },
        { property: "og:title", content: title },
        { property: "og:description", content: description.slice(0, 300) },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary" },
      ],
      links: [{ rel: "canonical", href: `https://alfisurgery.com/books/${book.id}/${chapter.id}` }],
    };
  },
  component: ChapterPage,
});

function ChapterPage() {
  const { bookId, index, markdown } = Route.useLoaderData();
  const book = findBook(bookId)!;
  const chapter = book.chapters[index];
  const previous = book.chapters[index - 1];
  const next = book.chapters[index + 1];
  const { language } = useSiteLanguage();
  const c = booksCopy[language];
  const headings = chapterHeadings(markdown);

  return (
    <main className="mx-auto max-w-4xl px-5 py-8 md:px-8 md:py-12">
      <div
        data-no-translate
        lang={language}
        className="guide-actions flex flex-wrap items-center justify-between gap-3 text-sm"
      >
        <nav className="flex min-w-0 flex-wrap items-center gap-2">
          <Link
            to="/books"
            search={{ lang: language }}
            className="text-primary underline-offset-4 hover:underline"
          >
            {c.allBooks}
          </Link>
          <span className="text-muted-foreground">/</span>
          <Link
            to="/books/$bookId"
            params={{ bookId: book.id }}
            search={{ lang: language }}
            lang="en"
            className="text-primary underline-offset-4 hover:underline"
          >
            {book.title}
          </Link>
        </nav>
        <Button variant="outline" size="sm" onClick={() => window.print()}>
          <Printer />
          {c.print}
        </Button>
      </div>
      {language !== "en" && (
        <p
          data-no-translate
          lang={language}
          className="guide-actions mt-4 rounded-md border border-border bg-secondary/60 p-3 text-sm leading-relaxed"
        >
          {c.notice}
        </p>
      )}

      <article data-no-translate lang="en-GB" dir="ltr" className="mt-6 text-start">
        <p className="text-xs font-semibold uppercase tracking-wider text-gold-foreground">
          {book.title} · {book.coverLabel}
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight text-home-doctor md:text-4xl">
          {chapter.title}
        </h1>
        <p className="mt-2 text-xs text-muted-foreground">
          {book.author} ·{" "}
          <span lang={language} dir="auto">
            {c.minutes(readingMinutes(chapter.words))}
          </span>
        </p>

        {headings.length > 2 && (
          <details className="guide-actions mt-6 rounded-md border border-border bg-card p-4">
            <summary className="cursor-pointer text-sm font-semibold" lang={language}>
              {c.inThisChapter}
            </summary>
            <ol className="mt-3 grid gap-1.5 text-sm">
              {headings.map((h) => (
                <li key={h.id}>
                  <a href={`#${h.id}`} className="text-primary underline-offset-4 hover:underline">
                    {h.text}
                  </a>
                </li>
              ))}
            </ol>
          </details>
        )}

        <div className="mt-8">
          <BookMarkdown markdown={markdown} />
        </div>
      </article>

      <nav
        data-no-translate
        lang={language}
        className="guide-actions mt-12 grid gap-3 border-t border-border pt-6 sm:grid-cols-[1fr_auto_1fr] sm:items-center"
      >
        <div>
          {previous && (
            <Link
              to="/books/$bookId/$chapterId"
              params={{ bookId: book.id, chapterId: previous.id }}
              search={{ lang: language }}
              className="flex flex-col gap-1 rounded-md border border-border p-3 hover:bg-secondary"
            >
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <ChevronLeft className="size-3.5 rtl:rotate-180" />
                {c.previous}
              </span>
              <span lang="en" dir="ltr" className="text-start text-sm font-medium">
                {previous.title}
              </span>
            </Link>
          )}
        </div>
        <Button asChild variant="ghost">
          <Link to="/books/$bookId" params={{ bookId: book.id }} search={{ lang: language }}>
            <ListOrdered />
            {c.contents}
          </Link>
        </Button>
        <div>
          {next && (
            <Link
              to="/books/$bookId/$chapterId"
              params={{ bookId: book.id, chapterId: next.id }}
              search={{ lang: language }}
              className="flex flex-col gap-1 rounded-md border border-border p-3 text-end hover:bg-secondary"
            >
              <span className="flex items-center justify-end gap-1 text-xs text-muted-foreground">
                {c.next}
                <ChevronRight className="size-3.5 rtl:rotate-180" />
              </span>
              <span lang="en" dir="ltr" className="text-end text-sm font-medium">
                {next.title}
              </span>
            </Link>
          )}
        </div>
      </nav>
    </main>
  );
}
