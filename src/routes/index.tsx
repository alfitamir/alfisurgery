import { createFileRoute } from "@tanstack/react-router";
import { ThreeSectionHome } from "@/components/ThreeSectionHome";
export const Route = createFileRoute("/")({ component: ThreeSectionHome, head: () => ({ meta: [
{title: "Dr. Tamer Elalfy | Doctor, patient education & contact"}, {name: "description", content: "Explore Dr. Tamer Elalfy's education, experience and publications, patient disease and operation guides, or clinic contact details in seven languages."}, {property: "og:title", content: "Dr. Tamer Elalfy | Doctor, patient education & contact"}, {property: "og:description", content: "Three sections: meet the doctor and medical teaching, understand your disease and operation, and contact the clinic."}, {property: "og:type", content: "website"}, {name: "twitter:card", content: "summary_large_image"}
, {property: "og:url", content: "https://alfisurgery.com/"}], links: [{rel: "canonical", href: "https://alfisurgery.com/"}] }) });
