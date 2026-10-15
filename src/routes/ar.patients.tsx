import { createFileRoute } from "@tanstack/react-router";
import { PatientEducationSite } from "@/components/PatientEducationSite";

export const Route = createFileRoute("/ar/patients")({
  component: ArabicPatientsPage,
  head: () => ({
    meta: [
      { title: "أدلة العمليات الجراحية: المرارة والفتق والبواسير والناسور | د. تامر الألفي" },
      { name: "description", content: "أدلة مبسطة لعملية المرارة، الفتق، البواسير، الناسور الشرجي والعصعصي، الغدة الدرقية وغيرها: الاستعداد، التعافي، وعلامات التحذير." },
      { property: "og:title", content: "أدلة العمليات الجراحية | د. تامر الألفي" },
      { property: "og:description", content: "رحلة واضحة من الاستعداد للعملية حتى التعافي مع دليل خاص لكل عملية." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://alfisurgery.com/ar/patients" },
      { property: "og:locale", content: "ar_SA" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      { rel: "canonical", href: "https://alfisurgery.com/ar/patients" },
      { rel: "alternate", hrefLang: "ar", href: "https://alfisurgery.com/ar/patients" },
      { rel: "alternate", hrefLang: "en", href: "https://alfisurgery.com/patients" },
    ],
  }),
});

function ArabicPatientsPage() {
  return <PatientEducationSite lang="ar" />;
}