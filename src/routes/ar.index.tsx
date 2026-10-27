import { createFileRoute } from "@tanstack/react-router";
import { ThreeSectionHome } from "@/components/ThreeSectionHome";
export const Route = createFileRoute("/ar/")({
  component: ThreeSectionHome,
  head: () => ({
    meta: [
      { title: "افهم مرضك وعمليتك | جراحة د. تامر الألفي" },
      {
        name: "description",
        content:
          "أدلة جراحية مبسّطة بسبع لغات لفهم عمليتك والاستعداد لها والتعافي بعدها ومعرفة علامات الخطر، مع التعرف على خبرة د. تامر الألفي.",
      },
      { property: "og:title", content: "افهم مرضك وعمليتك | جراحة د. تامر الألفي" },
      {
        property: "og:description",
        content:
          "مسار واضح لأدلة العمليات والتحضير والتعافي وعلامات الخطر، ومعلومات عن د. تامر الألفي بسبع لغات.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://alfisurgery.com/ar" },
      { property: "og:locale", content: "ar_SA" },
    ],
    links: [
      { rel: "canonical", href: "https://alfisurgery.com/ar" },
      { rel: "alternate", hrefLang: "ar", href: "https://alfisurgery.com/ar" },
      { rel: "alternate", hrefLang: "en", href: "https://alfisurgery.com/" },
      { rel: "alternate", hrefLang: "x-default", href: "https://alfisurgery.com/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Physician",
          name: "د. تامر الألفي",
          alternateName: "Dr. Tamer Elalfy",
          medicalSpecialty: "Surgical",
          url: "https://alfisurgery.com/ar",
          telephone: "+966138011910",
          availableLanguage: ["ar", "en"],
          areaServed: [
            { "@type": "Country", name: "Saudi Arabia" },
            { "@type": "Country", name: "Egypt" },
          ],
          address: {
            "@type": "PostalAddress",
            streetAddress: "4th St, Al Khobar Al Janubiyah",
            addressLocality: "Al Khobar",
            postalCode: "34621",
            addressCountry: "SA",
          },
          hospitalAffiliation: {
            "@type": "Hospital",
            name: "Mohammad Dossary Hospital",
            url: "https://mdh.com.sa/",
          },
          sameAs: [
            "https://www.linkedin.com/in/alfitamir/",
            "https://orcid.org/0000-0003-3769-2445",
            "https://www.youtube.com/@alfy_surgery",
          ],
        }),
      },
    ],
  }),
});
