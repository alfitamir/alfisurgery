import { createFileRoute } from "@tanstack/react-router";
import { PatientEducationSite } from "@/components/PatientEducationSite";
export const Route = createFileRoute("/ar/")({ component: () => <PatientEducationSite lang="ar" />, head: () => ({ meta: [
{title: "تثقيف المريض | د. تامر الألفي"}, {name: "description", content: "اختر دليل عمليتك وتعرّف على الاستعداد للجراحة والتعافي وعلامات التحذير مع د. تامر الألفي."}, {property: "og:title", content: "تثقيف المريض | د. تامر الألفي"}, {property: "og:description", content: "أدلة العمليات والتحضير والتعافي الآمن للمرضى وذويهم بست لغات."}, {property: "og:type", content: "website"}, {name: "twitter:card", content: "summary_large_image"}
] }) });
