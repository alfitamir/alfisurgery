import { createFileRoute } from "@tanstack/react-router";
import { PatientEducationSite } from "@/components/PatientEducationSite";

export const Route = createFileRoute("/ar/patients")({
  component: ArabicPatientsPage,
  head: () => ({
    meta: [
      { title: "افهم عمليتك | دليل المريض الجراحي" },
      { name: "description", content: "دليل مصور ثنائي اللغة للمرضى: اختر عمليتك، استعد بأمان، تعافَ بثقة، وتعرّف على علامات التحذير." },
      { property: "og:title", content: "افهم عمليتك | دليل المريض الجراحي" },
      { property: "og:description", content: "رحلة مصورة وهادئة من الاستعداد للعملية حتى التعافي مع أدلة خاصة بكل عملية." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { httpEquiv: "content-language", content: "ar" },
    ],
    links: [
      { rel: "canonical", href: "/ar/patients" },
      { rel: "alternate", hrefLang: "en", href: "/patients" },
    ],
  }),
});

function ArabicPatientsPage() {
  return <PatientEducationSite lang="ar" />;
}