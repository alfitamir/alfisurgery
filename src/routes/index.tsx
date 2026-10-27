import { createFileRoute } from "@tanstack/react-router";
import { ThreeSectionHome } from "@/components/ThreeSectionHome";
export const Route = createFileRoute("/")({
  component: ThreeSectionHome,
  head: () => ({
    meta: [
      { title: "Understand your operation | Alfi Surgery — Dr. Tamer Elalfy" },
      {
        name: "description",
        content:
          "Surgical patient guides in seven languages: understand your operation, prepare for surgery, learn about recovery and recognize warning signs with Dr. Tamer Elalfy.",
      },
      {
        property: "og:title",
        content: "Understand your operation | Alfi Surgery — Dr. Tamer Elalfy",
      },
      {
        property: "og:description",
        content:
          "Clear surgical guides, preparation, recovery and warning signs in seven languages, plus Dr. Tamer Elalfy's professional profile.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://alfisurgery.com/" },
    ],
    links: [{ rel: "canonical", href: "https://alfisurgery.com/" }],
  }),
});
