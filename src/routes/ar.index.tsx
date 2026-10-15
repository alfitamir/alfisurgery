import { createFileRoute } from "@tanstack/react-router";
import { ThreeSectionHome } from "@/components/ThreeSectionHome";
export const Route = createFileRoute("/ar/")({ component: ThreeSectionHome, head: () => ({ meta: [
{title: "افهم مرضك وعمليتك | جراحة د. تامر الألفي"}, {name: "description", content: "أدلة جراحية مبسّطة بسبع لغات لفهم عمليتك والاستعداد لها والتعافي بعدها ومعرفة علامات الخطر، مع التعرف على خبرة د. تامر الألفي."}, {property: "og:title", content: "افهم مرضك وعمليتك | جراحة د. تامر الألفي"}, {property: "og:description", content: "مسار واضح لأدلة العمليات والتحضير والتعافي وعلامات الخطر، ومعلومات عن د. تامر الألفي بسبع لغات."}, {property: "og:type", content: "website"}, {name: "twitter:card", content: "summary_large_image"}
, {property: "og:url", content: "https://alfisurgery.com/ar"}], links: [{rel: "canonical", href: "https://alfisurgery.com/ar"}] }) });
