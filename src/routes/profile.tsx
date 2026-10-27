import { createFileRoute } from "@tanstack/react-router";
import { OrganizedPage } from "@/components/OrganizedPage";
export const Route = createFileRoute("/profile")({
  component: Page,
  head: () => ({
    meta: [
      { title: "About Dr. Tamer Elalfy | Alfi Surgery" },
      {
        name: "description",
        content: "Professional profile, surgical expertise, career and services.",
      },
      { property: "og:title", content: "About Dr. Tamer Elalfy | Alfi Surgery" },
      {
        property: "og:description",
        content: "Professional profile, surgical expertise, career and services.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
});
function Page() {
  return <OrganizedPage group="profile" />;
}
