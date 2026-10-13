import { createFileRoute } from "@tanstack/react-router";
import { SiteHome } from "@/components/SiteHome";
import portrait from "@/assets/dr-elalfy-main.jpg.asset.json";
export const Route = createFileRoute("/")({ component: SiteHome, head: () => ({ meta: [
{title: "Dr. Tamer Elalfy | Surgical care, research & patient education"}, {name: "description", content: "Explore Dr. Tamer Elalfy’s experience, surgical research and patient guides."}, {property: "og:title", content: "Dr. Tamer Elalfy | Surgical care, research & patient education"}, {property: "og:description", content: "Explore Dr. Tamer Elalfy’s experience, surgical research and patient guides."}, {property: "og:type", content: "website"}, {name: "twitter:card", content: "summary_large_image"}, {property: "og:image", content: portrait.url}, {name: "twitter:image", content: portrait.url}
] }) });
