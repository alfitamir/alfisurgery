import { createFileRoute } from "@tanstack/react-router";
import { OrganizedPage } from "@/components/OrganizedPage";
export const Route = createFileRoute("/videos")({ component: Page, head: () => ({ meta: [{title: "Educational videos | Alfi Surgery"},{name:"description",content:"Browse Dr. Tamer Elalfy’s surgical videos by obesity, laparoscopy and colorectal topics."},{property:"og:title",content:"Educational videos | Alfi Surgery"},{property:"og:description",content:"Browse Dr. Tamer Elalfy’s surgical videos by obesity, laparoscopy and colorectal topics."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"}] }) });
function Page() { return <OrganizedPage group="videos" />; }
