import { createFileRoute } from "@tanstack/react-router";
import { OrganizedPage } from "@/components/OrganizedPage";
export const Route = createFileRoute("/updates")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Surgical updates | Alfi Surgery" },
      {
        name: "description",
        content: "Evidence updates for doctors and practical guidance for patients.",
      },
      { property: "og:title", content: "Surgical updates | Alfi Surgery" },
      {
        property: "og:description",
        content: "Evidence updates for doctors and practical guidance for patients.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
});
function Page() {
  return <OrganizedPage group="updates" />;
}
