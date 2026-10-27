import { createFileRoute } from "@tanstack/react-router";
import { OrganizedPage } from "@/components/OrganizedPage";
export const Route = createFileRoute("/teaching")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Medical teaching | Alfi Surgery" },
      {
        name: "description",
        content: "Surgical illustrations, printable teaching material and downloadable lectures.",
      },
      { property: "og:title", content: "Medical teaching | Alfi Surgery" },
      {
        property: "og:description",
        content: "Surgical illustrations, printable teaching material and downloadable lectures.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
});
function Page() {
  return <OrganizedPage group="teaching" />;
}
