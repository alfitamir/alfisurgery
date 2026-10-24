import { createFileRoute } from "@tanstack/react-router";
import { Library } from "lucide-react";
import { useSiteLanguage } from "@/components/SiteLanguageProvider";
import { booksCopy } from "@/data/books-copy";
import { books } from "@/data/books";
import { BookCard } from "@/components/BooksShowcase";

export const Route = createFileRoute("/books/")({
  head: () => ({
    meta: [
      { title: "Books by Dr. Tamer Elalfy | Alfi Surgery" },
      { name: "description", content: "Open-access clinical handbooks by consultant general surgeon Dr. Tamer Elalfy, free to read online for doctors and nurses." },
      { property: "og:title", content: "Books by Dr. Tamer Elalfy | Alfi Surgery" },
      { property: "og:description", content: "Open-access clinical handbooks for doctors and nurses, free to read online." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "https://alfisurgery.com/books" }],
  }),
  component: BooksPage,
});

function BooksPage() {
  const { language } = useSiteLanguage();
  const c = booksCopy[language];
  return <main data-no-translate lang={language} className="mx-auto max-w-5xl px-5 py-10 md:px-8 md:py-14">
    <h1 className="flex items-center gap-2 text-3xl font-bold text-home-doctor md:text-4xl"><Library className="size-7 shrink-0 text-gold" />{c.title}</h1>
    <p className="mt-4 text-base leading-loose text-muted-foreground">{c.intro}</p>
    <div className="mt-8 grid gap-5">{books.map((book) => <BookCard key={book.id} book={book} />)}</div>
  </main>;
}
