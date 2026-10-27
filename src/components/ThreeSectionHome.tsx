import { Link } from "@tanstack/react-router";
import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  ClipboardCheck,
  GraduationCap,
  HeartPulse,
  Megaphone,
  Microscope,
  Newspaper,
  Play,
  Search,
  ShieldAlert,
  ShieldCheck,
  Stethoscope,
  UserRound,
  Contact,
} from "lucide-react";
import { useSiteLanguage } from "@/components/SiteLanguageProvider";
import { navigationCopy } from "@/data/site-navigation";
import { sectionCopy } from "@/data/section-copy";
import { homeCopy } from "@/data/home-copy";
import { preventionCopy } from "@/data/prevention";
import { postsCommentsCopy } from "@/data/posts-comments-copy";
import { showsVideos, translatedText } from "@/lib/site-language";
import heroPortrait from "@/assets/dr-elalfy-hero.webp";
import { HomeSectionMenus, homeMenuLabels } from "@/components/HomeSectionMenus";
import { PatientComments } from "@/components/PatientComments";
import { DailyArticle } from "@/components/DailyArticle";
import { BooksShowcase } from "@/components/BooksShowcase";
import { contactLinks } from "@/components/SiteNavigation";

type Destination =
  | "/patients"
  | "/ar/patients"
  | "/prevention"
  | "/articles"
  | "/videos"
  | "/profile"
  | "/research"
  | "/publications"
  | "/teaching"
  | "/updates"
  | "/posts"
  | "/contact";
type Tile = { label: string; to: Destination; hash?: string; icon: LucideIcon; tone?: "warning" };

function TileLink({
  tile,
  language,
  accent,
}: {
  tile: Tile;
  language: string;
  accent: "doctor" | "patient";
}) {
  const iconTone =
    tile.tone === "warning"
      ? "bg-destructive/10 text-destructive"
      : accent === "doctor"
        ? "bg-home-doctor-surface text-home-doctor"
        : "bg-home-patient-surface text-home-patient";
  return (
    <Link
      to={tile.to}
      hash={tile.hash}
      search={{ lang: language } as never}
      className="home-tile flex min-h-16 items-center gap-3 rounded-md border border-border bg-card p-3"
    >
      <span className={`grid size-10 shrink-0 place-items-center rounded-full ${iconTone}`}>
        <tile.icon className="size-5" />
      </span>
      <span className="min-w-0 text-sm font-semibold leading-snug">{tile.label}</span>
    </Link>
  );
}

export function ThreeSectionHome() {
  const { language, dictionary } = useSiteLanguage();
  const t = navigationCopy[language];
  const s = sectionCopy[language];
  const h = homeCopy[language];
  const l = homeMenuLabels[language];
  const pc = postsCommentsCopy[language];
  const patients = language === "ar" ? "/ar/patients" : "/patients";

  const doctorTiles: Tile[] = [
    { label: t.profile, to: "/profile", icon: UserRound },
    { label: t.research, to: "/research", icon: Microscope },
    { label: l[6], to: "/publications", icon: BookOpen },
    { label: t.teaching, to: "/teaching", icon: GraduationCap },
    { label: t.updates, to: "/updates", icon: Megaphone },
    { label: pc.postsTitle, to: "/posts", icon: Newspaper },
  ];
  const patientTiles: Tile[] = [
    { label: t.prepare, to: patients, hash: "prepare", icon: ClipboardCheck },
    { label: t.recover, to: patients, hash: "recovery", icon: HeartPulse },
    { label: h.urgent, to: patients, hash: "urgent", icon: ShieldAlert, tone: "warning" },
    { label: preventionCopy[language].title, to: "/prevention", icon: ShieldCheck },
    { label: t.articles, to: "/articles", icon: BookOpen },
    ...(showsVideos(language) ? [{ label: t.videos, to: "/videos" as const, icon: Play }] : []),
  ];
  const label = (text: string) => (language === "ta" ? translatedText(text, dictionary) : text);

  return (
    <main data-no-translate lang={language} className="home-refresh">
      <DailyArticle />

      <div className="mx-auto grid max-w-6xl gap-6 px-5 py-8 md:grid-cols-2 md:px-8 md:py-10">
        <section
          aria-labelledby="home-doctor"
          className="home-enter min-w-0 rounded-md border border-border border-t-4 border-t-gold bg-card p-5 md:p-6"
        >
          <h2
            id="home-doctor"
            className="flex items-center gap-2 text-2xl font-bold text-home-doctor md:text-3xl"
          >
            <Stethoscope className="size-6 shrink-0 text-gold" />
            {s.doctor}
          </h2>
          <div className="mt-5 grid grid-cols-[96px_minmax(0,1fr)] items-center gap-4 sm:grid-cols-[120px_minmax(0,1fr)]">
            <img
              src={heroPortrait}
              alt={t.name}
              width={120}
              height={140}
              fetchPriority="high"
              className="aspect-[6/7] w-full rounded-md object-cover object-[70%_top]"
            />
            <div className="min-w-0">
              <p className="text-lg font-bold leading-snug">{t.name}</p>
              <p className="mt-1 text-sm font-medium text-home-doctor">{t.role}</p>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{t.location}</p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-loose text-muted-foreground">{s.doctorText}</p>
          <nav aria-label={s.doctor} className="mt-5 grid gap-3 sm:grid-cols-2">
            {doctorTiles.map((tile) => (
              <TileLink key={tile.to} tile={tile} language={language} accent="doctor" />
            ))}
          </nav>
        </section>

        <section
          aria-labelledby="home-patient"
          className="home-enter min-w-0 rounded-md border border-border border-t-4 border-t-home-patient bg-card p-5 md:p-6"
        >
          <h1
            id="home-patient"
            className="flex items-center gap-2 text-2xl font-bold leading-snug text-home-patient md:text-3xl"
          >
            <HeartPulse className="size-6 shrink-0" />
            {h.title}
          </h1>
          <p className="mt-4 text-sm leading-loose text-muted-foreground">{h.intro}</p>
          <Link
            to={patients}
            hash="operations"
            search={{ lang: language } as never}
            className="home-tile mt-5 flex items-center gap-4 rounded-md bg-home-patient p-4 text-primary-foreground"
          >
            <span className="grid size-12 shrink-0 place-items-center rounded-full bg-primary-foreground/15">
              <Search className="size-6" />
            </span>
            <span className="min-w-0 text-base font-bold leading-snug">{t.operations}</span>
          </Link>
          <nav aria-label={h.title} className="mt-3 grid gap-3 sm:grid-cols-2">
            {patientTiles.map((tile) => (
              <TileLink
                key={`${tile.to}-${tile.hash ?? ""}`}
                tile={tile}
                language={language}
                accent="patient"
              />
            ))}
          </nav>
          <p className="mt-4 text-xs leading-relaxed text-muted-foreground">{t.warning}</p>
        </section>
      </div>

      <BooksShowcase />

      <PatientComments />

      <section aria-labelledby="home-contact" className="border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-5 py-8 md:px-8 md:py-10">
          <h2 id="home-contact" className="flex items-center gap-2 text-2xl font-bold md:text-3xl">
            <Contact className="size-6 shrink-0 text-primary" />
            {s.contact}
          </h2>
          <p className="mt-3 text-sm leading-loose text-muted-foreground">{s.contactText}</p>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {contactLinks.map((link) => (
              <li key={link.href} className="min-w-0">
                <a
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="home-tile flex min-h-14 items-center gap-3 rounded-md border border-border bg-card p-3 text-sm"
                >
                  <link.icon className="size-5 shrink-0 text-primary" />
                  <span dir="ltr" className="min-w-0 break-words">
                    {label(link.label)}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
