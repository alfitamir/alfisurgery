import { createFileRoute, Navigate } from "@tanstack/react-router";
import { OrganizedPage } from "@/components/OrganizedPage";
import { useSiteLanguage } from "@/components/SiteLanguageProvider";
import { showsVideos } from "@/lib/site-language";
export const Route = createFileRoute("/videos")({ component: Page, head: () => ({ meta: [{title: "Educational videos | Alfi Surgery"},{name:"description",content:"Browse Dr. Tamer Elalfy’s surgical videos by obesity, laparoscopy and colorectal topics."},{property:"og:title",content:"Educational videos | Alfi Surgery"},{property:"og:description",content:"Browse Dr. Tamer Elalfy’s surgical videos by obesity, laparoscopy and colorectal topics."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"}] }) });
function Page() {
  const { language } = useSiteLanguage();
  // The video library is Arabic only, so editions without their own videos go home instead.
  if (!showsVideos(language)) return <Navigate to="/" replace />;
  return <OrganizedPage group="videos" />;
}
