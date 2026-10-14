import { createFileRoute } from "@tanstack/react-router";
import { PatientEducationSite } from "@/components/PatientEducationSite";
export const Route = createFileRoute("/")({ component: () => <PatientEducationSite lang="en" />, head: () => ({ meta: [
{title: "Patient education | Dr. Tamer Elalfy"}, {name: "description", content: "Find your operation guide, prepare for surgery and learn about recovery in six languages with Dr. Tamer Elalfy."}, {property: "og:title", content: "Patient education | Dr. Tamer Elalfy"}, {property: "og:description", content: "Operation guides, preparation, recovery and warning signs for patients and families."}, {property: "og:type", content: "website"}, {name: "twitter:card", content: "summary_large_image"}
] }) });
