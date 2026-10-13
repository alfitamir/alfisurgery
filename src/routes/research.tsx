import { createFileRoute } from "@tanstack/react-router";
import { OrganizedPage } from "@/components/OrganizedPage";
export const Route = createFileRoute("/research")({ component: Page, head: () => ({ meta: [{title: "Research & publications | Alfi Surgery"},{name:"description",content:"Researcher identity and selected peer-reviewed surgical work."},{property:"og:title",content:"Research & publications | Alfi Surgery"},{property:"og:description",content:"Researcher identity and selected peer-reviewed surgical work."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"}] }) });
function Page() { return <OrganizedPage group="research" />; }
