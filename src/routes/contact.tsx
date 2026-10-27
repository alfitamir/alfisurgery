import { createFileRoute } from "@tanstack/react-router";
import { OrganizedPage } from "@/components/OrganizedPage";
export const Route = createFileRoute("/contact")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Contact Dr. Tamer Elalfy | Alfi Surgery" },
      { name: "description", content: "Clinic contact details and professional profiles." },
      { property: "og:title", content: "Contact Dr. Tamer Elalfy | Alfi Surgery" },
      { property: "og:description", content: "Clinic contact details and professional profiles." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
});
function Page() {
  return <OrganizedPage group="contact" />;
}
