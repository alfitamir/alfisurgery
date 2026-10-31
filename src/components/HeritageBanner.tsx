import { useSiteLanguage } from "@/components/SiteLanguageProvider";
import { heritageCopy } from "@/data/heritage-copy";
import khobar from "@/assets/heritage-khobar.webp";
import egypt from "@/assets/heritage-egypt.webp";

/** "Two nations, one standard" banner showing the doctor's Saudi and Egyptian practice. */
export function HeritageBanner() {
  const { language } = useSiteLanguage();
  const c = heritageCopy[language];
  const places = [
    { src: khobar, title: c.saudiTitle, text: c.saudiText, alt: c.saudiAlt, bar: "bg-gold" },
    { src: egypt, title: c.egyptTitle, text: c.egyptText, alt: c.egyptAlt, bar: "bg-care-recovery" },
  ];
  return (
    <section aria-labelledby="home-heritage" className="mx-auto max-w-6xl px-5 pb-8 md:px-8">
      <div className="rounded-md bg-care-surgery p-5 text-primary-foreground md:p-7">
        <h2 id="home-heritage" className="text-xl font-bold leading-snug text-gold md:text-2xl">
          {c.title}
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-loose text-primary-foreground/85">{c.intro}</p>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {places.map((p) => (
            <figure key={p.title} className="relative overflow-hidden rounded-md">
              <img
                src={p.src}
                alt={p.alt}
                width={960}
                height={576}
                loading="lazy"
                className="aspect-[5/3] w-full object-cover"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-care-surgery via-care-surgery/80 to-transparent p-4 pt-12">
                <span className={`mb-2 block h-1 w-10 rounded-full ${p.bar}`} />
                <span className="block text-base font-bold">{p.title}</span>
                <span className="mt-1 block text-sm text-primary-foreground/85">{p.text}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Small key explaining the four semantic care colours used across the homepage. */
export function CareColorLegend() {
  const { language } = useSiteLanguage();
  const c = heritageCopy[language];
  const items = [
    { label: c.surgery, dot: "bg-care-surgery" },
    { label: c.recovery, dot: "bg-care-recovery" },
    { label: c.disease, dot: "bg-care-disease" },
    { label: c.alert, dot: "bg-care-alert" },
  ];
  return (
    <div aria-label={c.legendTitle} className="mx-auto max-w-6xl px-5 pt-6 md:px-8">
      <ul className="flex flex-wrap gap-2 text-xs font-medium">
        {items.map((i) => (
          <li
            key={i.label}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5"
          >
            <span aria-hidden className={`size-2.5 rounded-full ${i.dot}`} />
            {i.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
