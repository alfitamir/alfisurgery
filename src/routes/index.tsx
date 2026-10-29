import { createFileRoute } from "@tanstack/react-router";
import { ThreeSectionHome } from "@/components/ThreeSectionHome";
export const Route = createFileRoute("/")({
  component: ThreeSectionHome,
  head: () => ({
    meta: [
      { title: "Understand your operation | Alfi Surgery — Dr. Tamer Elalfy" },
      {
        name: "description",
        content:
          "Surgical patient guides in seven languages: understand your operation, prepare for surgery, learn about recovery and recognize warning signs with Dr. Tamer Elalfy.",
      },
      {
        property: "og:title",
        content: "Understand your operation | Alfi Surgery — Dr. Tamer Elalfy",
      },
      {
        property: "og:description",
        content:
          "Clear surgical guides, preparation, recovery and warning signs in seven languages, plus Dr. Tamer Elalfy's professional profile.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://alfisurgery.com/" },
    ],
    links: [
      { rel: "canonical", href: "https://alfisurgery.com/" },
      { rel: "alternate", hrefLang: "en", href: "https://alfisurgery.com/" },
      { rel: "alternate", hrefLang: "ar", href: "https://alfisurgery.com/ar" },
      { rel: "alternate", hrefLang: "x-default", href: "https://alfisurgery.com/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Physician",
          name: "Dr. Tamer Elalfy",
          alternateName: "د. تامر الألفي",
          description: "Consultant of general and laparoscopic surgery in Al Khobar, Saudi Arabia.",
          medicalSpecialty: "Surgical",
          url: "https://alfisurgery.com/",
          telephone: "+966138011910",
          availableLanguage: ["en", "ar"],
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
