import { createFileRoute } from "@tanstack/react-router";
import { PatientEducationSite } from "@/components/PatientEducationSite";

export const Route = createFileRoute("/patients")({
  component: PatientsPage,
  head: () => ({
    meta: [
      { title: "Understand Your Operation | Patient Guide" },
      {
        name: "description",
        content:
          "Illustrated, bilingual guidance for surgical patients: choose your operation, prepare safely, recover confidently, and know urgent warning signs.",
      },
      { property: "og:title", content: "Understand Your Operation | Patient Guide" },
      {
        property: "og:description",
        content:
          "A calm, illustrated journey through surgery preparation, recovery, and operation-specific patient guides.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      { rel: "canonical", href: "/patients" },
      { rel: "alternate", hrefLang: "ar", href: "/ar/patients" },
    ],
  }),
});

function PatientsPage() {
  return <PatientEducationSite lang="en" />;
}
