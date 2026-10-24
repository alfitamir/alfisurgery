import { Link } from "@tanstack/react-router";
import { BookOpenText, Globe2, Library, ListOrdered, Stethoscope, Unlock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSiteLanguage } from "@/components/SiteLanguageProvider";
import { booksCopy } from "@/data/books-copy";
import { books, bookCounts, type Book } from "@/data/books";

/** Typeset cover drawn from the book's own details (no generated text in images). */
export function BookCover({ book, className = "", large = false }: { book: Book; className?: string; large?: boolean }) {
  return <div lang="en" dir="ltr" className={`book-cover relative flex aspect-[3/4] flex-col justify-between overflow-hidden rounded-md p-4 text-start ${className}`}>
    <span className="book-cover-spine" aria-hidden />
    <div>
      <p className="text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-gold">Version 2.0 · {book.year}</p>
      <p className={`mt-2 font-serif font-bold leading-tight ${large ? "text-2xl" : "text-base"}`}>{book.title}</p>
      <span className="mt-2 block h-0.5 w-10 bg-gold" aria-hidden />
      <p className={`mt-2 leading-snug opacity-85 ${large ? "text-xs" : "text-[0.6rem]"}`}>{book.subtitle}</p>
    </div>
    <p className={`font-semibold leading-snug ${large ? "text-xs" : "text-[0.6rem]"}`}>{book.author}</p>
  </div>;
}

export function BookCard({ book }: { book: Book }) {
  const { language } = useSiteLanguage();
  const c = booksCopy[language];
  const counts = bookCounts(book);
  return <article className="home-tile grid min-w-0 gap-5 rounded-md border border-border bg-card p-4 sm:grid-cols-[150px_minmax(0,1fr)] md:p-5">
    <Link to="/books/$bookId" params={{ bookId: book.id }} search={{ lang: language }} className="mx-auto block w-36 sm:w-full" aria-label={book.title}><BookCover book={book} /></Link>
    <div className="min-w-0">
      <h3 lang="en" dir="ltr" className="text-start text-xl font-bold leading-snug text-home-doctor">{book.title}</h3>
      <p lang="en" dir="ltr" className="mt-1 text-start text-sm text-muted-foreground">{book.subtitle}</p>
      <ul className="mt-3 flex flex-wrap gap-2 text-xs">
        <li className="flex items-center gap-1 rounded-full bg-home-doctor-surface px-2.5 py-1 text-home-doctor"><Stethoscope className="size-3.5" />{c.audience}</li>
        <li className="flex items-center gap-1 rounded-full bg-secondary px-2.5 py-1"><Globe2 className="size-3.5" />{c.originalLanguage}</li>
        <li className="flex items-center gap-1 rounded-full bg-secondary px-2.5 py-1"><Unlock className="size-3.5" />{c.openAccess}</li>
      </ul>
      <p className="mt-3 text-sm leading-loose text-muted-foreground">{c.descriptions[book.id]}</p>
      <p className="mt-2 text-xs text-muted-foreground">{c.counts(counts.chapters, counts.appendices)}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        <Button asChild><Link to="/books/$bookId/$chapterId" params={{ bookId: book.id, chapterId: book.startChapter }} search={{ lang: language }}><BookOpenText />{c.read}</Link></Button>
        <Button asChild variant="outline"><Link to="/books/$bookId" params={{ bookId: book.id }} search={{ lang: language }}><ListOrdered />{c.contents}</Link></Button>
      </div>
    </div>
  </article>;
}

export function BooksShowcase() {
  const { language } = useSiteLanguage();
  const c = booksCopy[language];
  return <section aria-labelledby="home-books" className="mx-auto max-w-6xl px-5 pb-8 md:px-8 md:pb-10">
    <div className="rounded-md border border-border border-t-4 border-t-gold bg-card p-5 md:p-6">
      <h2 id="home-books" className="flex items-center gap-2 text-2xl font-bold text-home-doctor md:text-3xl"><Library className="size-6 shrink-0 text-gold" />{c.title}</h2>
      <p className="mt-3 text-sm leading-loose text-muted-foreground">{c.intro}</p>
      <div className="mt-5 grid gap-4">{books.map((book) => <BookCard key={book.id} book={book} />)}</div>
    </div>
  </section>;
}
