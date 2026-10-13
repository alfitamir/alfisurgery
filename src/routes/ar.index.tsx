import { createFileRoute } from "@tanstack/react-router";
import { SiteHome } from "@/components/SiteHome";
import portrait from "@/assets/dr-elalfy-main.jpg.asset.json";
export const Route = createFileRoute("/ar/")({ component: SiteHome, head: () => ({ meta: [
{title: "د. تامر الألفي | الجراحة والأبحاث وتثقيف المريض"}, {name: "description", content: "تعرّف على د. تامر الألفي وأبحاثه وابحث عن أدلة العمليات والمقالات والفيديوهات."}, {property: "og:title", content: "د. تامر الألفي | الجراحة والأبحاث وتثقيف المريض"}, {property: "og:description", content: "تعرّف على د. تامر الألفي وأبحاثه وابحث عن أدلة العمليات والمقالات والفيديوهات."}, {property: "og:type", content: "website"}, {name: "twitter:card", content: "summary_large_image"}, {property: "og:image", content: portrait.url}, {name: "twitter:image", content: portrait.url}
] }) });
