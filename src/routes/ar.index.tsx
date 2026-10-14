import { createFileRoute } from "@tanstack/react-router";
import { ThreeSectionHome } from "@/components/ThreeSectionHome";
export const Route = createFileRoute("/ar/")({ component: ThreeSectionHome, head: () => ({ meta: [
{title: "د. تامر الألفي | الطبيب وتثقيف المريض والتواصل"}, {name: "description", content: "تعرّف على تعليم وخبرة وأبحاث د. تامر الألفي، وافهم مرضك وعمليتك، أو انتقل إلى بيانات التواصل والعناوين بست لغات."}, {property: "og:title", content: "د. تامر الألفي | الطبيب وتثقيف المريض والتواصل"}, {property: "og:description", content: "ثلاثة أقسام: الطبيب والتعليم الطبي، تثقيف المريض، والتواصل والعناوين."}, {property: "og:type", content: "website"}, {name: "twitter:card", content: "summary_large_image"}
] }) });
