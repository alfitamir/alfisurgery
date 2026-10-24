import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { BookOpenText, ExternalLink, Globe2, Stethoscope, Unlock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSiteLanguage } from "@/components/SiteLanguageProvider";
import { booksCopy } from "@/data/books-copy";
import { bookCounts, findBook, readingMinutes, type BookPart } from "@/data/books";
import { BookCover } from "@/components/BooksShowcase";

export const Route = createFileRoute("/books/$bookId/")({
  loader: ({ params }) => {
    const book = findBook(params.bookId);
    if (!book) throw notFound();
    return { bookId: book.id };
  },
  head: ({ params }) => {
    const book = findBook(params.bookId);
    if (!book) return { meta: [{ title: "Book not found | Alfi Surgery" }, { name: "robots", content: "noindex" }] };
    const title = `${book.title}: ${book.subtitle} | Dr. Tamer Elalfy`;
    const description = `${book.edition}. Free open-access handbook by ${book.author} for emergency physicians, GPs, medical specialists and nurses.`;
    return {
      meta: [
        { title }, { name: "description", content: description },
        { property: "og:title", content: title }, { property: "og:description", content: description },
        { property: "og:type", content: "book" }, { name: "twitter:card", content: "summary" },
      ],
      links: [{ rel: "canonical", href: `https://alfisurgery.com/books/${book.id}` }],
    };
  },
  component: BookPage,
});

function BookPage() {
  const { bookId } = Route.useLoaderData();
  const book = findBook(bookId)!;
  const { language } = useSiteLanguage();
  const c = booksCopy[language];
  const counts = bookCounts(book);
  const parts: { part: BookPart; label: string }[] = [
    { part: "front", label: c.front },
    { part: "chapter", label: c.chapters },
    { part: "back", label: c.back },
  ];
  return <main data-no-translate lang={language} className="mx-auto max-w-5xl px-5 py-10 md:px-8 md:py-14">
    <nav className="text-sm"><Link to="/books" search={{ lang: language }} className="text-primary underline-offset-4 hover:underline">{c.allBooks}</Link></nav>
    <header className="mt-6 grid gap-8 md:grid-cols-[220px_minmax(0,1fr)] md:items-start">
      <div className="mx-auto w-48 md:w-full"><BookCover book={book} large /></div>
      <div className="min-w-0">
        <h1 lang="en" dir="ltr" className="text-start text-3xl font-bold leading-tight text-home-doctor md:text-4xl">{book.title}</h1>
        <p lang="en" dir="ltr" className="mt-2 text-start text-lg text-muted-foreground">{book.subtitle}</p>
        <p lang="en" dir="ltr" className="mt-3 text-start text-sm font-semibold">{book.author} · {book.edition}</p>
        <ul className="mt-4 flex flex-wrap gap-2 text-xs">
          <li className="flex items-center gap-1 rounded-full bg-home-doctor-surface px-2.5 py-1 text-home-doctor"><Stethoscope className="size-3.5" />{c.audience}</li>
          <li className="flex items-center gap-1 rounded-full bg-secondary px-2.5 py-1"><Globe2 className="size-3.5" />{c.originalLanguage}</li>
          <li className="flex items-center gap-1 rounded-full bg-secondary px-2.5 py-1"><Unlock className="size-3.5" />{c.openAccess}</li>
        </ul>
        <p className="mt-4 text-sm leading-loose text-muted-foreground">{c.descriptions[book.id]}</p>
        <p className="mt-3 rounded-md border border-border bg-secondary/60 p-3 text-sm leading-relaxed">{c.notice}</p>
        <dl className="mt-4 grid gap-1 text-sm text-muted-foreground">
          <div className="flex flex-wrap gap-2"><dt className="font-semibold text-foreground">DOI</dt><dd dir="ltr"><a href={`https://doi.org/${book.doi}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-primary underline-offset-4 hover:underline">{book.doi}<ExternalLink className="size-3" /></a></dd></div>
          <div className="flex flex-wrap gap-2"><dt className="font-semibold text-foreground">{c.licence}</dt><dd dir="ltr"><a href={book.licence.url} target="_blank" rel="noopener noreferrer" className="text-primary underline-offset-4 hover:underline">{book.licence.name}</a></dd></div>
        </dl>
        <Button asChild size="lg" className="mt-6"><Link to="/books/$bookId/$chapterId" params={{ bookId: book.id, chapterId: book.startChapter }} search={{ lang: language }}><BookOpenText />{c.read}</Link></Button>
      </div>
    </header>

    <section aria-labelledby="book-contents" className="mt-12">
      <h2 id="book-contents" className="text-2xl font-bold">{c.contents}</h2>
      <p className="mt-1 text-sm text-muted-foreground">{c.counts(counts.chapters, counts.appendices)}</p>
      {parts.map(({ part, label }) => <div key={part} className="mt-6">
        <h3 className="text-sm font-semibold text-home-doctor">{label}</h3>
        <ol className="mt-2 divide-y divide-border rounded-md border border-border bg-card">
          {book.chapters.filter((ch) => ch.part === part).map((ch) => <li key={ch.id}>
            <Link to="/books/$bookId/$chapterId" params={{ bookId: book.id, chapterId: ch.id }} search={{ lang: language }} className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 px-4 py-3 hover:bg-secondary">
              <span lang="en" dir="ltr" className="min-w-0 flex-1 text-start text-sm font-medium">{ch.title}</span>
              <span className="shrink-0 text-xs text-muted-foreground">{c.minutes(readingMinutes(ch.words))}</span>
            </Link>
          </li>)}
        </ol>
      </div>)}
    </section>
  </main>;
}
