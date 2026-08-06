import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, ExternalLink, RotateCcw, ArrowLeft } from "lucide-react";
import { publications } from "@/data/publications";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const Route = createFileRoute("/publications")({
  component: PublicationsSearchPage,
  head: () => ({
    meta: [
      { title: "Search Publications — Dr. Tamer Elalfy" },
      {
        name: "description",
        content:
          "Search Dr. Tamer Elalfy's peer-reviewed surgical publications by keyword, author, journal and year, with substring, exact-word or phrase matching.",
      },
      { property: "og:title", content: "Search Publications — Dr. Tamer Elalfy" },
      {
        property: "og:description",
        content:
          "Interactive search across peer-reviewed publications in general and laparoscopic surgery.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/publications" }],
  }),
});

type KeywordMatch = "substring" | "exact" | "phrase";

const escapeRegex = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const years = Array.from(new Set(publications.map((p) => p.year))).sort((a, b) => b - a);
const journals = Array.from(new Set(publications.map((p) => p.journal))).sort();

function PublicationsSearchPage() {
  const [query, setQuery] = useState("");
  const [author, setAuthor] = useState("");
  const [journal, setJournal] = useState("all");
  const [keywords, setKeywords] = useState("");
  const [keywordMatch, setKeywordMatch] = useState<KeywordMatch>("substring");
  const [yearFrom, setYearFrom] = useState("all");
  const [yearTo, setYearTo] = useState("all");
  const [sort, setSort] = useState<"relevance" | "newest" | "oldest">("relevance");

  const results = useMemo(() => {
    const lc = (s: string) => s.toLowerCase();
    const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
    const kws = keywords
      .split(",")
      .map((k) => k.trim().toLowerCase())
      .filter(Boolean);
    const authorQ = author.trim().toLowerCase();
    const from = yearFrom === "all" ? undefined : Number(yearFrom);
    const to = yearTo === "all" ? undefined : Number(yearTo);

    const matchKeyword = (hay: string, kw: string) => {
      if (keywordMatch === "substring") return hay.includes(kw);
      const parts = kw.split(/\s+/).map(escapeRegex);
      return new RegExp(`(?:^|\\W)${parts.join("\\s+")}(?=$|\\W)`, "i").test(hay);
    };

    const scored = publications
      .filter((p) => {
        if (from && p.year < from) return false;
        if (to && p.year > to) return false;
        if (authorQ && !lc(p.authors).includes(authorQ)) return false;
        if (journal !== "all" && p.journal !== journal) return false;
        const hay = lc(`${p.title} ${p.abstract} ${p.authors} ${p.journal}`);
        if (kws.length && !kws.every((k) => matchKeyword(hay, k))) return false;
        return true;
      })
      .map((p) => {
        const hay = lc(`${p.title} ${p.abstract} ${p.authors} ${p.journal}`);
        const score = terms.length
          ? terms.reduce((s, t) => s + (hay.includes(t) ? 1 : 0), 0)
          : 1;
        return { p, score };
      })
      .filter((r) => r.score > 0);

    scored.sort((a, b) => {
      if (sort === "newest") return b.p.year - a.p.year;
      if (sort === "oldest") return a.p.year - b.p.year;
      return b.score - a.score || b.p.year - a.p.year;
    });

    return scored.map((r) => r.p);
  }, [query, author, journal, keywords, keywordMatch, yearFrom, yearTo, sort]);

  const reset = () => {
    setQuery("");
    setAuthor("");
    setJournal("all");
    setKeywords("");
    setKeywordMatch("substring");
    setYearFrom("all");
    setYearTo("all");
    setSort("relevance");
  };

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-5xl px-4 py-12">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" /> Back to home
        </Link>

        <header className="mt-6">
          <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Search publications
          </h1>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            Filter Dr. Tamer Elalfy's peer-reviewed work by free text, author, journal,
            keywords and year range — with control over how keywords are matched.
          </p>
        </header>

        <section className="mt-8 rounded-xl border bg-card p-5 shadow-sm">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="md:col-span-2">
              <Label htmlFor="query">Free text</Label>
              <div className="relative mt-1.5">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="query"
                  className="pl-9"
                  placeholder="e.g. laparoscopic hernia recurrence"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>
            </div>

            <div>
              <Label htmlFor="author">Author</Label>
              <Input
                id="author"
                className="mt-1.5"
                placeholder="e.g. Elalfy"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </div>

            <div>
              <Label htmlFor="journal">Journal</Label>
              <Select value={journal} onValueChange={setJournal}>
                <SelectTrigger id="journal" className="mt-1.5">
                  <SelectValue placeholder="All journals" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All journals</SelectItem>
                  {journals.map((j) => (
                    <SelectItem key={j} value={j}>
                      {j}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="keywords">Keywords (comma separated, all must match)</Label>
              <Input
                id="keywords"
                className="mt-1.5"
                placeholder="e.g. mesh, prolapse"
                value={keywords}
                onChange={(e) => setKeywords(e.target.value)}
              />
            </div>

            <div>
              <Label htmlFor="keywordMatch">Keyword match mode</Label>
              <Select
                value={keywordMatch}
                onValueChange={(v) => setKeywordMatch(v as KeywordMatch)}
              >
                <SelectTrigger id="keywordMatch" className="mt-1.5">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="substring">Substring (loosest)</SelectItem>
                  <SelectItem value="exact">Exact whole word</SelectItem>
                  <SelectItem value="phrase">Exact phrase</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="yearFrom">Year from</Label>
                <Select value={yearFrom} onValueChange={setYearFrom}>
                  <SelectTrigger id="yearFrom" className="mt-1.5">
                    <SelectValue placeholder="Any" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Any</SelectItem>
                    {years.map((y) => (
                      <SelectItem key={y} value={String(y)}>
                        {y}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="yearTo">Year to</Label>
                <Select value={yearTo} onValueChange={setYearTo}>
                  <SelectTrigger id="yearTo" className="mt-1.5">
                    <SelectValue placeholder="Any" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Any</SelectItem>
                    {years.map((y) => (
                      <SelectItem key={y} value={String(y)}>
                        {y}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label htmlFor="sort">Sort by</Label>
              <Select value={sort} onValueChange={(v) => setSort(v as typeof sort)}>
                <SelectTrigger id="sort" className="mt-1.5">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevance">Relevance</SelectItem>
                  <SelectItem value="newest">Newest first</SelectItem>
                  <SelectItem value="oldest">Oldest first</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="mt-5 flex items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              <span className="font-medium text-foreground">{results.length}</span> of{" "}
              {publications.length} publications match
            </p>
            <Button variant="outline" size="sm" onClick={reset}>
              <RotateCcw className="mr-2 h-4 w-4" /> Reset filters
            </Button>
          </div>
        </section>

        <section className="mt-8 space-y-4">
          {results.length === 0 ? (
            <div className="rounded-xl border border-dashed p-10 text-center text-muted-foreground">
              No publications matched these filters. Try a looser keyword match mode or
              widen the year range.
            </div>
          ) : (
            results.map((p) => (
              <article key={p.id} className="rounded-xl border bg-card p-5 shadow-sm">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="secondary">{p.year}</Badge>
                  <span className="text-sm text-muted-foreground">{p.journal}</span>
                </div>
                <h2 className="mt-2 text-lg font-semibold leading-snug">
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {p.title}
                  </a>
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">{p.authors}</p>
                <p className="mt-3 text-sm leading-relaxed">{p.abstract}</p>
                <div className="mt-4 flex flex-wrap items-center gap-4 text-sm">
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-medium text-primary hover:underline"
                  >
                    View article <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                  {p.doi && (
                    <a
                      href={`https://doi.org/${p.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:underline"
                    >
                      DOI: {p.doi}
                    </a>
                  )}
                </div>
              </article>
            ))
          )}
        </section>
      </div>
    </main>
  );
}
