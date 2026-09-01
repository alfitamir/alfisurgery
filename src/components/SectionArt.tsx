import artExperience from "@/assets/sections/experience.jpg";
import artExpertise from "@/assets/sections/expertise.jpg";
import artServices from "@/assets/sections/services.jpg";
import artBeyond from "@/assets/sections/beyond.jpg";
import artVideos from "@/assets/sections/videos.jpg";
import artWeb from "@/assets/sections/web.jpg";
import artOrcid from "@/assets/sections/orcid.jpg";
import artResearch from "@/assets/sections/research.jpg";
import artTeaching from "@/assets/sections/teaching.jpg";
import artEducation from "@/assets/sections/education.jpg";
import artPresentations from "@/assets/sections/presentations.jpg";
import artUpdates from "@/assets/sections/updates.jpg";
import artContact from "@/assets/sections/contact.jpg";

export const sectionArt = {
  experience: artExperience,
  expertise: artExpertise,
  services: artServices,
  beyond: artBeyond,
  videos: artVideos,
  web: artWeb,
  orcid: artOrcid,
  research: artResearch,
  teaching: artTeaching,
  education: artEducation,
  presentations: artPresentations,
  updates: artUpdates,
  contact: artContact,
} as const;

export type SectionArtKey = keyof typeof sectionArt;

export function SectionArt({
  name,
  alt,
  side = "right",
}: {
  name: SectionArtKey;
  alt: string;
  side?: "right" | "left";
}) {
  return (
    <img
      src={sectionArt[name]}
      alt={alt}
      loading="lazy"
      width={768}
      height={512}
      aria-hidden="true"
      className={`pointer-events-none hidden lg:block absolute top-10 ${
        side === "right" ? "right-6" : "left-6"
      } w-44 h-28 rounded-xl object-cover border border-border/60 shadow-[var(--shadow-soft)] opacity-95`}
    />
  );
}
