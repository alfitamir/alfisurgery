import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Stethoscope, Activity, GraduationCap, ShieldCheck, Users, Microscope, HeartPulse, ClipboardList, Mail, MapPin, Award, ArrowRight, Phone, Download, Globe, Youtube, Facebook, MessageCircle, Linkedin, ExternalLink, BookOpen, Building2, CalendarCheck, Presentation, Eye, FileText, ChevronDown, ChevronUp } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";

import { patientEducation, educationCategories, educationCategoryImages, formatSize } from "@/data/patient-education";
import { SectionArt } from "@/components/SectionArt";
import { Button } from "@/components/ui/button";
import { EducationSummaryDialog } from "@/components/EducationSummaryDialog";
import { surgeryUpdates } from "@/data/surgery-updates";
import portraitAsset from "@/assets/dr-elalfy-main.jpg.asset.json";
const portrait = portraitAsset.url;
import analConditionsPpt from "@/assets/anal-conditions-ppt.asset.json";
import sleevePpt from "@/assets/sleeve-190825155836.pptx.asset.json";
import puhPpt from "@/assets/puh-140513144027-phpapp01.pptx.asset.json";
import cbdPpt from "@/assets/managementofcbdstonesastudy-140511193239-phpapp02.ppt.asset.json";
import herniaPpt from "@/assets/herniaabdwalllecture-100618085852-phpapp02.pptx.asset.json";
import neckIntroPpt from "@/assets/neckintro-140406192526-phpapp01.ppt.asset.json";
import thyroidPpt from "@/assets/thyroid-presentation1aim-net-100618084512-phpapp02.ppt.asset.json";
import burn1Ppt from "@/assets/newmicrosoftofficepowerpointpresentation-100618082020-phpapp01.pptx.asset.json";
import burn2Ppt from "@/assets/tamer-100618082530-phpapp01.pptx.asset.json";
import parathyroidIllustration from "@/assets/parathyroid-exploration-illustration.asset.json";
import sboIllustration from "@/assets/sbo-decision-clock-illustration.asset.json";
import cbdStoneIllustration from "@/assets/retained-cbd-stone-illustration.asset.json";
import subtotalCholeIllustration from "@/assets/subtotal-cholecystectomy-illustration.asset.json";
import diverticulitisAlgorithmIllustration from "@/assets/perforated-diverticulitis-algorithm.asset.json";
import thyroidIllustration from "@/assets/thyroid-rfa-vs-lobectomy-illustration.asset.json";
import pilonidalIllustration from "@/assets/pilonidal-treatment-shift-illustration.asset.json";
import consentIllustration from "@/assets/cognitive-framing-consent-illustration.asset.json";
import ramadanIllustration from "@/assets/ramadan-diverticulitis-illustration.asset.json";

const expertise = [
  { icon: Activity, title: "Advanced Laparoscopic Surgery", desc: "Minimally invasive techniques across complex abdominal procedures." },
  { icon: HeartPulse, title: "Bariatric Surgery", desc: "Patient selection, perioperative management & complication prevention." },
  { icon: Microscope, title: "Colorectal & Anal Surgery", desc: "Comprehensive elective and emergency colorectal care." },
  { icon: Stethoscope, title: "Thyroid & Neck Surgery", desc: "Precision endocrine and head & neck surgical procedures." },
  { icon: ClipboardList, title: "Upper GI Surgery", desc: "Esophageal, gastric, and hepatobiliary surgical management." },
  { icon: ShieldCheck, title: "Acute Care & Trauma", desc: "High-pressure emergency surgical decision-making." },
];

const ResearchGateIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-label="ResearchGate logo">
    <path d="M15.92 23.14c-.66 0-1.19-.52-1.19-1.19V14.9c0-.67.53-1.2 1.2-1.2h.3c1.14 0 1.75-.28 2.28-1.05.38-.55.52-1.26.52-2.17 0-.93-.18-1.6-.62-2.12-.5-.6-1.18-.85-2.2-.85h-.28c-.66 0-1.2-.53-1.2-1.2V0H23v.03c-1.1.07-1.75.63-1.9 1.8-.08.64-.1 1.5-.1 2.86v3.3c0 1.6-.24 2.8-.75 3.75-.9 1.7-2.45 2.4-4.33 2.4zM6.8 0C2.91 0 0 2.78 0 6.7c0 3.6 2.7 6.33 6.25 6.33 1.2 0 2.2-.18 3.06-.55.3-.13.47-.42.47-.76V.84c0-.46-.37-.84-.84-.84H6.8zm-.5 10.2c-2.03 0-3.55-1.55-3.55-3.65 0-2.25 1.48-3.8 3.55-3.8 2.06 0 3.55 1.55 3.55 3.8 0 2.1-1.52 3.65-3.55 3.65z"/>
  </svg>
);

const services = [
  "Safe, evidence-based surgical care",
  "Advanced laparoscopic, anal, thyroid, and bariatric procedures",
  "Senior-level surgical consultation and second opinions",
  "Bariatric patient evaluation and perioperative planning",
  "Surgical education, CME lectures, and mentorship",
  "Operating room leadership and performance optimization",
  "Patient education programs that improve outcomes",
];

const timeline = [
  { years: "2018 — Present", role: "Consultant & Head of General Surgery", place: "Mohamed Dossary Hospital, Al Khobar, KSA" },
  { years: "2014 — 2018", role: "General Surgery Consultant", place: "Zagazig University Hospital, Egypt" },
  { years: "2009 — 2014", role: "General Surgery Specialist", place: "Zagazig University Hospital, Egypt" },
  { years: "2005 — 2009", role: "General Surgery Resident", place: "Zagazig University Hospital, Egypt" },
];

const education = [
  { year: "2014", title: "MD in General Surgery", place: "Zagazig University", grade: "Very Good" },
  { year: "2009", title: "Master Degree in General Surgery", place: "Zagazig University", grade: "Very Good" },
  { year: "2004", title: "Bachelor of Medicine & Surgery (MBBCh)", place: "Zagazig University", grade: "Excellent" },
];

const skillGroups = [
  { title: "Leadership & Management", icon: Users, items: ["Head of Surgery & OR Management", "OR Workflow Optimization", "Multidisciplinary Team Leadership", "Clinical Governance & Quality Improvement", "Patient Safety & Surgical Audits"] },
  { title: "Teaching & Education", icon: GraduationCap, items: ["CME Lecture Delivery", "Surgical Teaching & Mentorship", "Training Junior Surgeons", "OR & Ward Nursing Education", "Structured Patient Education", "M&M Meetings"] },
  { title: "Professional Core", icon: Award, items: ["Clinical Judgment & Ethics", "High-Pressure Decision Making", "Patient & Family Communication", "Team Building", "Healthcare Systems Improvement"] },
];

const illustrationCollections = [
  {
    title: "For doctors",
    subtitle: "Operative strategy, algorithms, and postgraduate teaching visuals.",
    pdf: "/downloads/illustrations-for-doctors.pdf",
    pdfMeta: "PDF · 10.3 MB · 5 illustrations",
    items: [
      {
        title: "Parathyroid exploration principles",
        desc: "A surgical teaching visual contrasting imaging limitations with anatomy-led decision-making.",
        image: parathyroidIllustration.url,
        alt: "Educational illustration on parathyroid exploration and endocrine surgical anatomy",
      },
      {
        title: "24-hour SBO decision clock",
        desc: "A concise algorithm for resuscitation, Gastrografin challenge, and timing of operative escalation.",
        image: sboIllustration.url,
        alt: "Educational illustration showing a 24-hour small bowel obstruction decision algorithm",
      },
      {
        title: "Retained CBD stone framework",
        desc: "A medico-surgical explainer connecting risk stratification with postoperative rescue strategy.",
        image: cbdStoneIllustration.url,
        alt: "Educational illustration about retained common bile duct stones after cholecystectomy",
      },
      {
        title: "Subtotal cholecystectomy bailout options",
        desc: "A side-by-side comparison of fenestrating and reconstituting approaches for the difficult gallbladder.",
        image: subtotalCholeIllustration.url,
        alt: "Educational illustration comparing subtotal cholecystectomy bailout options",
      },
      {
        title: "Perforated diverticulitis algorithm",
        desc: "A physiology-first pathway for Hartmann's procedure, protected anastomosis, and restorative strategy.",
        image: diverticulitisAlgorithmIllustration.url,
        alt: "Educational illustration showing an algorithm for management of perforated diverticulitis",
      },
    ],
  },
  {
    title: "For patients",
    subtitle: "Clinic-friendly visuals that simplify options, recovery, and shared decision-making.",
    pdf: "/downloads/illustrations-for-patients.pdf",
    pdfMeta: "PDF · 7.7 MB · 4 illustrations",
    items: [
      {
        title: "Thyroid nodule treatment choices",
        desc: "A patient explainer comparing radiofrequency ablation with lobectomy and when each path fits.",
        image: thyroidIllustration.url,
        alt: "Educational illustration comparing thyroid radiofrequency ablation and lobectomy",
      },
      {
        title: "Pilonidal disease treatment shift",
        desc: "A visual comparison between minimally invasive care and flap surgery for complex disease.",
        image: pilonidalIllustration.url,
        alt: "Educational illustration comparing minimally invasive pilonidal treatment and flap surgery",
      },
      {
        title: "How framing changes consent",
        desc: "A communication-focused visual showing how wording affects understanding and shared decisions.",
        image: consentIllustration.url,
        alt: "Educational illustration about framing effect in surgical consent",
      },
      {
        title: "Surgical care during Ramadan",
        desc: "A practical visual story explaining emergency presentation, laparoscopy, discharge, and staged recovery.",
        image: ramadanIllustration.url,
        alt: "Educational illustration about surgical management and recovery during Ramadan",
      },
    ],
  },
];


export function EnglishSiteSections({ group }: { group: "profile" | "research" | "teaching" | "updates" | "contact" }) {
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({});
  const toggleGroup = (title: string) => setOpenGroups((prev) => ({ ...prev, [title]: !prev[title] }));
  return <div className="organized-content">
{group === "profile" && <>
      <section id="about" className="scroll-mt-32 mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="eyebrow">About</div>
        <h2 className="mt-3 font-serif text-4xl md:text-5xl max-w-2xl">A surgeon's perspective.</h2>
        <div className="mt-10 grid md:grid-cols-12 gap-10 md:gap-12 items-start">
          <div className="md:col-span-4">
            <div className="relative">
              <img src={portrait} alt="Dr. Tamer Rushdy Elalfy" className="relative w-full rounded-2xl object-cover shadow-[var(--shadow-elegant)] aspect-[4/5]" />
            </div>
          </div>
          <div className="md:col-span-8 space-y-5 text-lg text-muted-foreground leading-relaxed">

            <p>
              I am a Consultant General & Laparoscopic Surgeon with broad experience across elective and emergency surgery, and a strong record in surgical leadership, education, and operating room management.
            </p>
            <p>
              Currently, I serve as <span className="text-foreground font-medium">Consultant & Head of the General Surgery and Operating Room Department</span> at Mohamed Dossary Hospital in Al Khobar, Saudi Arabia — leading surgical teams, optimizing OR workflows, and upholding the highest standards of patient safety and clinical governance.
            </p>
            <p>
              Classified and registered with the Saudi Commission for Health Specialties as a General Surgery Consultant since 2019. My interests span minimally invasive and bariatric surgery, surgical education and mentorship, and quality improvement initiatives.
            </p>
            <a href="/Dr_Tamer_Elalfy_CV.pdf" download className="inline-flex items-center gap-2 mt-4 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground hover:border-accent hover:text-accent transition">
              <Download className="h-4 w-4" /> Download full CV
            </a>
          </div>
        </div>
      </section>
      <section id="experience" className="relative scroll-mt-32 bg-secondary/40 border-y border-border">
        <SectionArt name="experience" alt="Career timeline illustration" side="right" />
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <div className="eyebrow">Experience</div>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl">Two decades. One discipline.</h2>
            </div>
            <ol className="md:col-span-8 relative border-s border-border ms-2">
              {timeline.map((t) => (
                <li key={t.years} className="ps-8 pb-10 relative">
                  <span className="absolute -start-[7px] top-1.5 h-3.5 w-3.5 rounded-full bg-accent ring-4 ring-background" />
                  <div className="text-xs uppercase tracking-widest text-accent font-semibold">{t.years}</div>
                  <div className="mt-1 font-serif text-2xl">{t.role}</div>
                  <div className="text-muted-foreground">{t.place}</div>
                </li>
              ))}
            </ol>
          </div>
          <div className="grid md:grid-cols-12 gap-12 mt-16 pt-16 border-t border-border">
            <div className="md:col-span-4">
              <div className="eyebrow">Education</div>
              <h2 className="mt-3 font-serif text-4xl">Zagazig University.</h2>
            </div>
            <div className="md:col-span-8 divide-y divide-border">
              {education.map((e) => (
                <div key={e.title} className="py-5 flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <div className="font-serif text-xl">{e.title}</div>
                    <div className="text-sm text-muted-foreground">{e.place}</div>
                  </div>
                  <div className="text-sm flex items-center gap-4">
                    <span className="text-muted-foreground">{e.grade}</span>
                    <span className="font-serif text-2xl text-accent">{e.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section id="expertise" className="relative scroll-mt-32">
        <SectionArt name="expertise" alt="Clinical expertise illustration" side="right" />
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
            <div>
              <div className="eyebrow">Clinical Expertise</div>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl max-w-xl">Subspecialty depth across general surgery.</h2>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {expertise.map((e, i) => (
              <div
                key={e.title}
                className={`bento-card p-8 group ${i === 0 ? "lg:col-span-2 lg:row-span-1" : ""}`}
              >
                <div
                  className="h-11 w-11 rounded-xl flex items-center justify-center text-accent-foreground"
                  style={{ backgroundImage: "var(--gradient-accent)" }}
                >
                  <e.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 font-serif text-xl group-hover:text-accent transition-colors">{e.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{e.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>
      <section id="services" className="relative scroll-mt-32 mx-auto max-w-6xl px-6 py-24">
        <SectionArt name="services" alt="Consultation illustration" side="right" />
        <div className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5 md:sticky md:top-24">
            <div className="eyebrow">What I Offer</div>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl">Care, counsel, and capability.</h2>
            <p className="mt-4 text-muted-foreground">Whether you need a surgical opinion, a CME engagement, or leadership advisory — here is how I can help.</p>
          </div>
          <ul className="md:col-span-7 divide-y divide-border border-y border-border">
            {services.map((s, i) => (
              <li key={s} className="py-5 flex items-start gap-5">
                <span className="font-serif text-2xl text-accent w-10 shrink-0">0{i + 1}</span>
                <span className="text-lg text-foreground/90">{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section id="beyond" className="relative scroll-mt-32 bg-primary text-primary-foreground">
        <SectionArt name="beyond" alt="Capabilities illustration" side="right" />
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="text-xs uppercase tracking-[0.2em] text-primary-foreground font-semibold">Capabilities</div>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl max-w-2xl">Beyond the operating room.</h2>
          <div className="mt-14 grid md:grid-cols-3 gap-10">
            {skillGroups.map((g) => (
              <div key={g.title}>
                <div className="flex items-center gap-3">
                  <g.icon className="h-5 w-5 text-primary-foreground" />
                  <h3 className="font-serif text-2xl">{g.title}</h3>
                </div>
                <ul className="mt-5 space-y-2.5 text-primary-foreground/80">
                  {g.items.map((it) => (
                    <li key={it} className="flex gap-3">
                      <span className="text-primary-foreground mt-1">—</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
</>}
{group === "research" && <>
      <section id="orcid" className="relative scroll-mt-32 mx-auto max-w-6xl px-6 pb-24">
        <SectionArt name="orcid" alt="Researcher identity illustration" side="right" />
        <div className="mb-12">
          <div className="eyebrow">Researcher Identity</div>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl">ORCID profile.</h2>
          <p className="mt-4 text-muted-foreground max-w-xl">Verified researcher identifier linking publications and professional contributions.</p>
        </div>
        <a
          href="https://orcid.org/0000-0003-3769-2445"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex gap-5 p-6 bento-card max-w-2xl"
        >
          <div className="h-12 w-12 shrink-0 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-secondary transition">
            <svg viewBox="0 0 256 256" className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" aria-label="ORCID logo">
              <circle cx="128" cy="128" r="128" fill="#A6CE39"/>
              <path d="M86.5 128c0-4.1 3.4-7.5 7.5-7.5s7.5 3.4 7.5 7.5-3.4 7.5-7.5 7.5-7.5-3.4-7.5-7.5zm15 15h-15v30h15v-30z" fill="white"/>
              <path d="M128 98h28c16.5 0 30 13.5 30 30s-13.5 30-30 30h-28v-60zm15 15v30h13c7.5 0 13.5-6 13.5-13.5s-6-13.5-13.5-13.5h-13z" fill="white"/>
              <circle cx="128" cy="128" r="96" fill="none" stroke="white" strokeWidth="8"/>
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">ORCID iD</div>
            <h3 className="font-serif text-lg leading-snug group-hover:text-accent transition flex items-start gap-2">
              <span>Tamer Elalfy</span>
              <ExternalLink className="h-4 w-4 mt-1 shrink-0 opacity-60" />
            </h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed font-mono">0000-0003-3769-2445</p>
          </div>
        </a>
      </section>
      <section id="research" className="relative scroll-mt-32 mx-auto max-w-6xl px-6 pb-24">
        <SectionArt name="research" alt="Research publications illustration" side="right" />
        <div className="mb-12">
          <div className="eyebrow">Peer-Reviewed Publications</div>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl">Selected research.</h2>
          <p className="mt-4 text-muted-foreground max-w-xl">Original articles, case reports, and reviews in international surgical journals.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {[
            {
              tag: "Obesity Pillars · 2026",
              title: "One-year weight loss and metabolic outcomes after laparoscopic sleeve gastrectomy in adolescents compared with young adults: a propensity score-matched cohort study",
              desc: "Taki-Eldin A, Lotfy A, El-Soudani MSM, Ghaly M, Eltaweel MMM, Ghalwash ET, Elalfy TR, et al. Propensity score-matched TriNetX cohort (318 pairs) showing equivalent 1-year BMI and metabolic outcomes in adolescents vs young adults.",
              href: "https://doi.org/10.1016/j.obpill.2026.100315",
              doi: "10.1016/j.obpill.2026.100315",
            },
            {
              tag: "Tech Coloproctol · 2024",
              title: "Laparoscopic ventral mesh rectopexy vs perineal stapler resection for external full-thickness rectal prolapse in elderly patients",
              desc: "Habeeb TAAM, Podda M, Chiaretti M, Kechagias A, Lledó JB, … Rushdy T, et al. Retrospective cohort study showing enhanced outcomes and reduced recurrence rates.",
              href: "https://doi.org/10.1007/s10151-024-02919-1",
              doi: "10.1007/s10151-024-02919-1",
            },
            {
              tag: "Int J Surg · 2023",
              title: "Intraoperative endomanometric laparoscopic Nissen fundoplication in large sliding hiatus hernia with severe GERD",
              desc: "Habeeb TAAM, Hussain A, Podda M, Aiolfi A, Kryvoruchko IA, … Rushdy T, et al. Retrospective cohort study on improved postoperative outcomes.",
              href: "https://doi.org/10.1097/js9.0000000000000659",
              doi: "10.1097/js9.0000000000000659",
            },
            {
              tag: "IOSR J Dent Med Sci · 2023",
              title: "Laparoscopic port access techniques and port site complications",
              desc: "Shah AB, Tamer, Ala, Rizwan, Wael, Abdullah, Hatim. Review of access techniques and management of port-related complications.",
              href: "https://doi.org/10.9790/0853-2212066369",
              doi: "10.9790/0853-2212066369",
            },
            {
              tag: "Zagazig Univ Med J · 2021",
              title: "Three ports vs conventional five ports laparoscopic sleeve gastrectomy for morbid obesity",
              desc: "Algazar ME, Abdullah WM, Elalfy TR. Retrospective study comparing operative and short-term outcomes.",
              href: "https://zumj.journals.ekb.eg/",
            },
            {
              tag: "Zagazig Univ Med J · 2021",
              title: "Subcutaneous sinusectomy and cystectomy in management of complex pilonidal sinus disease",
              desc: "Algazar ME, Alshazly MN, Elalfy TR. Tissue-sparing surgical approach for complex pilonidal disease.",
              href: "https://zumj.journals.ekb.eg/",
            },
            {
              tag: "World J Lap Surg · 2021",
              title: "Do we still encounter non-appendicitis pathologies during laparoscopic appendectomy?",
              desc: "Orban YA, Algazar ME, Farag AA, Elalfy TR. 14(1), 10–14.",
              href: "https://doi.org/10.5005/jp-journals-10033-1432",
              doi: "10.5005/jp-journals-10033-1432",
            },
            {
              tag: "J Coloproctol · 2021",
              title: "Surgery for complicated stomal prolapse: Is the Altemeier technique an option?",
              desc: "Alalfy TR, Orban YA, Algazar ME, Farag AA. Report of three cases. 41(1), 37–41.",
              href: "https://www.scielo.br/j/jcol/",
            },
            {
              tag: "Egypt J Surg · 2019",
              title: "Cyanoacrylate glue mesh fixation vs suture mesh fixation in Lichtenstein inguinal hernia repair",
              desc: "Arafa AS, Khairy MM, Elalfy TR, Gomaa MS. 38, 471–477.",
              href: "https://journals.lww.com/ejos/",
            },
            {
              tag: "Eur Radiol Exp · 2018",
              title: "Splenectomy for hypersplenism with or without preoperative splenic artery embolisation",
              desc: "Zaitoun MMA, Basha MAA, Raafat A, Rushdy T, Mawla WA. 2:23.",
              href: "https://doi.org/10.1186/s41747-018-0053-6",
              doi: "10.1186/s41747-018-0053-6",
            },
            {
              tag: "Life Sci J · 2018",
              title: "Short-term outcome of laparoscopic sleeve gastrectomy vs laparoscopic gastric plication in morbidly obese patients",
              desc: "Ibrahim IM, Metwalli AM, Elalfy TR. 15(4).",
              href: "http://www.lifesciencesite.com/",
            },
            {
              tag: "J Surg Surg Res · 2016",
              title: "Skin-sparing fistulectomy with primary sphincter repair for high perianal fistula",
              desc: "Lasheen AE, Mahmoud R, Elaziz OA, Alkilany M, Alnaimy T, Rushdy T.",
              href: "https://www.peertechzpublications.com/journals/journal-of-surgery-and-surgical-research",
            },
          ].map((item) => (
            <div
              key={`${item.href}-${item.title}`}
              className="group flex gap-5 p-6 bento-card"
            >
              <div className="h-12 w-12 shrink-0 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-accent/10 transition">
                <BookOpen className="h-5 w-5 text-accent" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">{item.tag}</div>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-serif text-lg leading-snug hover:text-accent transition flex items-start gap-2"
                >
                  <span>{item.title}</span>
                  <ExternalLink className="h-4 w-4 mt-1 shrink-0 opacity-60" />
                </a>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                {item.doi && (
                  <a
                    href={`https://doi.org/${item.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 mt-3 text-xs font-medium text-accent hover:underline"
                  >
                    <span className="uppercase tracking-wider">DOI</span>
                    <span className="text-muted-foreground">{item.doi}</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
</>}
{group === "teaching" && <>
      <section id="teaching" className="relative scroll-mt-32 bg-secondary/40 border-y border-border">
        <SectionArt name="teaching" alt="Teaching illustrations" side="right" />
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="mb-12">
            <div className="eyebrow">Educational Illustrations</div>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl">Visual teaching for doctors and patients.</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl">A curated gallery of surgical explainer visuals used in CME teaching, case-based discussion, clinic counseling, and patient communication.</p>
          </div>
          <div className="space-y-6">
            {illustrationCollections.map((group, gi) => {
              const isOpen = !!openGroups[group.title];
              const panelId = `illustrations-panel-${gi}`;
              const headingId = `illustrations-heading-${gi}`;
              const focusRing = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";
              return (
                <Collapsible key={group.title} open={isOpen} onOpenChange={() => toggleGroup(group.title)}>
                  <div className="bento-card overflow-hidden">
                    <div className="flex items-center justify-between gap-4 p-5 flex-wrap">
                      <div className="min-w-0">
                        <h3 id={headingId} className="inline-flex rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-accent">{group.title}</h3>
                        <p className="mt-2 text-sm text-muted-foreground">{group.subtitle}</p>
                      </div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <Dialog>
                          <DialogTrigger asChild>
                            <button
                              type="button"
                              className={`inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-2 text-sm font-medium hover:bg-secondary/80 transition-colors ${focusRing}`}
                              aria-label={`Preview printable PDF — ${group.title}`}
                            >
                              <Eye className="h-4 w-4" aria-hidden="true" />
                              <span>Preview</span>
                            </button>
                          </DialogTrigger>
                          <DialogContent className="max-w-5xl w-[95vw] h-[85vh] p-0 gap-0 flex flex-col">
                            <DialogHeader className="px-5 py-3 border-b border-border">
                              <DialogTitle className="font-serif text-lg">Preview — {group.title}</DialogTitle>
                            </DialogHeader>
                            <iframe
                              src={`${group.pdf}#view=FitH`}
                              title={`Preview printable PDF — ${group.title}`}
                              className="flex-1 w-full bg-secondary"
                            />
                            <div className="px-5 py-3 border-t border-border flex items-center justify-between gap-3 flex-wrap">
                              <span className="text-xs text-muted-foreground">{group.pdfMeta}</span>
                              <a
                                href={group.pdf}
                                download
                                className={`inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:bg-primary/90 transition-colors ${focusRing}`}
                              >
                                <Download className="h-4 w-4" aria-hidden="true" />
                                Download PDF
                              </a>
                            </div>
                          </DialogContent>
                        </Dialog>
                        <a
                          href={group.pdf}
                          download
                          className={`inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors ${focusRing}`}
                          aria-label={`Download printable PDF — ${group.title}`}
                        >
                          <Download className="h-4 w-4" aria-hidden="true" />
                          <span>Download PDF</span>
                          <span className="text-xs text-muted-foreground hidden sm:inline">· {group.pdfMeta}</span>
                        </a>
                        <CollapsibleTrigger asChild>
                          <button
                            type="button"
                            id={`${panelId}-trigger`}
                            aria-controls={panelId}
                            aria-expanded={isOpen}
                            aria-label={`${isOpen ? "Hide" : "Show"} illustrations — ${group.title}`}
                            className={`inline-flex min-h-11 items-center gap-2 rounded-full border border-border bg-secondary px-4 py-2 text-sm font-medium hover:bg-secondary/80 transition-colors ${focusRing}`}
                          >
                            <span>{isOpen ? "Hide" : "Show"}</span>
                            {isOpen ? <ChevronUp className="h-4 w-4" aria-hidden="true" /> : <ChevronDown className="h-4 w-4" aria-hidden="true" />}
                          </button>
                        </CollapsibleTrigger>
                      </div>
                    </div>
                    <CollapsibleContent id={panelId} role="region" aria-labelledby={headingId}>
                      <div className="border-t border-border px-5">
                        <ul className="divide-y divide-border">
                          {group.items.map((item) => (
                            <li key={item.title} className="py-4">
                              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                                <div className="min-w-0">
                                  <h4 className="font-serif text-base leading-snug">{item.title}</h4>
                                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                                </div>
                                <a
                                  href={item.image}
                                  download
                                  className={`inline-flex items-center gap-1.5 self-start rounded-full border border-border px-3 py-1.5 text-xs font-medium hover:bg-secondary transition-colors shrink-0 ${focusRing}`}
                                  aria-label={`Download illustration — ${item.title}`}
                                >
                                  <Download className="h-3.5 w-3.5" aria-hidden="true" />
                                  PNG
                                </a>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CollapsibleContent>
                  </div>
                </Collapsible>
              );
            })}
          </div>
        </div>
      </section>
      <section id="presentations" className="relative scroll-mt-32 mx-auto max-w-6xl px-6 pb-24 pt-24">
        <SectionArt name="presentations" alt="Presentations illustration" side="right" />

        <div className="mb-12">
          <div className="eyebrow">Lectures & Talks</div>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl">Presentations.</h2>
          <p className="mt-4 text-muted-foreground max-w-xl">CME lectures and academic slide decks authored by Dr. Elalfy. Downloadable for colleagues, residents, and patients.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {[
            {
              tag: "Colorectal · CME Lecture",
              title: "Common Anal Conditions — An Updated Surgical and Nutritional Approach",
              desc: "A practical overview of hemorrhoids, fissures, fistulas, and pruritus ani — covering modern surgical techniques and the role of nutrition in prevention and recovery.",
              href: analConditionsPpt.url,
              file: "PPTX · 5.2 MB",
            },
            {
              tag: "Bariatric Surgery · Lecture",
              title: "Laparoscopic Sleeve Gastrectomy — Technique & Patient Selection",
              desc: "Operative steps, staple-line considerations, leak prevention, and long-term outcomes in sleeve gastrectomy.",
              href: sleevePpt.url,
              file: "PPTX · 1.0 MB",
            },
            {
              tag: "HPB · Case Study",
              title: "Management of CBD Stones — A Clinical Study",
              desc: "Diagnostic algorithm, ERCP vs laparoscopic CBD exploration, and outcomes from a series of patients with choledocholithiasis.",
              href: cbdPpt.url,
              file: "PPT · 1.6 MB",
            },
            {
              tag: "Abdominal Wall · Lecture",
              title: "Hernias of the Abdominal Wall",
              desc: "Comprehensive lecture on inguinal, ventral, umbilical, and incisional hernias — anatomy, classification, and repair techniques.",
              href: herniaPpt.url,
              file: "PPTX · 10.2 MB",
            },
            {
              tag: "Endocrine · Anatomy",
              title: "Introduction to the Neck — Surgical Anatomy",
              desc: "Anatomical foundations for head and neck surgery: fascial layers, triangles, and key neurovascular structures.",
              href: neckIntroPpt.url,
              file: "PPT · 2.2 MB",
            },
            {
              tag: "Endocrine · Lecture",
              title: "Thyroid Gland — Surgical Overview",
              desc: "Anatomy, physiology, evaluation of thyroid nodules, indications for surgery, and operative approach to thyroidectomy.",
              href: thyroidPpt.url,
              file: "PPT · 15.4 MB",
            },
            {
              tag: "Surgical Clerkship · OSCE",
              title: "Surgical History & Examination — Hernia Case",
              desc: "Structured approach to history-taking and clinical examination for a patient presenting with an abdominal wall hernia.",
              href: puhPpt.url,
              file: "PPTX · 0.2 MB",
            },
            {
              tag: "Burns · Seminar (Part 1)",
              title: "Burns — Basic Facts and Management Principles (Part 1)",
              desc: "Epidemiology, pathophysiology, prehospital care, and the four phases of modern burn management.",
              href: burn1Ppt.url,
              file: "PPTX · 5.2 MB",
            },
            {
              tag: "Burns · Seminar (Part 2)",
              title: "Burns — Basic Facts and Management Principles (Part 2)",
              desc: "Burn center admission criteria, escharotomy, wound care, nutrition, infection control, and rehabilitation.",
              href: burn2Ppt.url,
              file: "PPTX · 3.7 MB",
            },
          ].map((item) => (
            <div
              key={item.href}
              className="group flex gap-5 p-6 bento-card"
            >
              <div className="h-12 w-12 shrink-0 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-accent/10 transition">
                <Presentation className="h-5 w-5 text-accent" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">{item.tag}</div>
                <h3 className="font-serif text-lg leading-snug group-hover:text-accent transition">
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    {item.title}
                  </a>
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                <div className="mt-4 flex items-center gap-3 flex-wrap">
                  <span className="text-xs text-accent font-semibold">{item.file}</span>
                  <a
                    href={item.href}
                    download
                    className="inline-flex items-center gap-1.5 rounded-full bg-primary text-primary-foreground px-3 py-1.5 text-xs font-medium hover:bg-primary/90 transition-colors"
                    aria-label={`Download ${item.title}`}
                  >
                    <Download className="h-3.5 w-3.5" />
                    Download PPTX
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
</>}
{group === "updates" && <>
      <section id="updates" className="relative scroll-mt-32 bg-secondary/30 border-y border-border">
        <SectionArt name="updates" alt="Surgical updates illustration" side="right" />
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="max-w-2xl">
            <div className="eyebrow">What's new · 2024–2025</div>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl">Recent updates in general & laparoscopic surgery.</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              A curated snapshot of the last two years — the shifts changing daily practice for surgeons, and the practical changes patients should know before their operation.
            </p>
          </div>

          {(["doctors", "patients"] as const).map((audience) => {
            const items = surgeryUpdates.filter((u) => u.audience === audience);
            const isDoctors = audience === "doctors";
            return (
              <div key={audience} className="mt-14">
                <div className="flex items-baseline gap-3 mb-6">
                  <div className={`h-10 w-10 rounded-xl flex items-center justify-center ${isDoctors ? "bg-primary text-primary-foreground" : "bg-accent text-accent-foreground"}`}>
                    {isDoctors ? <Microscope className="h-5 w-5" /> : <HeartPulse className="h-5 w-5" />}
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">{isDoctors ? "For doctors & trainees" : "For patients & families"}</div>
                    <h3 className="font-serif text-2xl md:text-3xl">{isDoctors ? "Evidence & guideline updates" : "What this means for you"}</h3>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  {items.map((u) => (
                    <article key={u.title.en} className="bento-card p-6 flex flex-col">
                      <div className="flex items-center justify-between text-xs">
                        <span className="uppercase tracking-widest text-accent font-semibold">{u.tag.en}</span>
                        <span className="text-muted-foreground">{u.date}</span>
                      </div>
                      <h4 className="mt-3 font-serif text-lg leading-snug">{u.title.en}</h4>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{u.summary.en}</p>
                      <div className="mt-4 flex items-center justify-between gap-3">
                        <span className="text-xs text-muted-foreground">{u.source.en}</span>
                        <a href={u.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:underline">
                          Read more <ExternalLink className="h-3 w-3" />
                        </a>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            );
          })}

          <p className="mt-10 text-xs text-muted-foreground italic max-w-3xl">
            Educational summary only — not a substitute for individual medical advice. Guidelines evolve; always confirm with your treating team.
          </p>
        </div>
      </section>
</>}
{group === "contact" && <>
      <section id="contact" className="relative scroll-mt-32 mx-auto max-w-6xl px-6 py-24">
        <SectionArt name="contact" alt="Contact illustration" side="right" />

        <div className="py-8 relative overflow-hidden">
          <div className="relative grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="eyebrow">Contact</div>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl">Let's collaborate.</h2>
              <p className="mt-4 text-muted-foreground max-w-md">
                Open to professional collaboration, CME activities, academic exchange, and healthcare leadership initiatives.
              </p>
            </div>
            <div className="space-y-5">
              <a href="mailto:tamerelalfy@hca.med.sa" className="flex items-center gap-4 p-5 rounded-xl border border-border hover:border-accent transition group">
                <div className="h-11 w-11 rounded-lg bg-secondary flex items-center justify-center">
                  <Mail className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Email</div>
                  <div className="font-medium group-hover:text-accent transition">tamerelalfy@hca.med.sa</div>
                </div>
              </a>
              <a href="tel:+966548026853" className="flex items-center gap-4 p-5 rounded-xl border border-border hover:border-accent transition group">
                <div className="h-11 w-11 rounded-lg bg-secondary flex items-center justify-center">
                  <Phone className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Phone</div>
                  <div className="font-medium group-hover:text-accent transition">+966 54 802 6853</div>
                </div>
              </a>
              <a href="https://www.youtube.com/@alfy_surgery" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-5 rounded-xl border border-border hover:border-accent transition group">
                <div className="h-11 w-11 rounded-lg bg-secondary flex items-center justify-center">
                  <Youtube className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">YouTube</div>
                  <div className="font-medium group-hover:text-accent transition">@alfy_surgery</div>
                </div>
              </a>
              <a href="https://www.facebook.com/share/18GMPg3MQw/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-5 rounded-xl border border-border hover:border-accent transition group">
                <div className="h-11 w-11 rounded-lg bg-secondary flex items-center justify-center">
                  <Facebook className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Facebook</div>
                  <div className="font-medium group-hover:text-accent transition">Dr. Tamer Elalfy</div>
                </div>
              </a>
              <a href="https://wa.me/966548026853" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-5 rounded-xl border border-border hover:border-accent transition group">
                <div className="h-11 w-11 rounded-lg bg-secondary flex items-center justify-center">
                  <MessageCircle className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">WhatsApp</div>
                  <div className="font-medium group-hover:text-accent transition">For patients</div>
                </div>
              </a>
              <a href="https://www.linkedin.com/in/alfitamir/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-5 rounded-xl border border-border hover:border-accent transition group">
                <div className="h-11 w-11 rounded-lg bg-secondary flex items-center justify-center">
                  <Linkedin className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">LinkedIn</div>
                  <div className="font-medium group-hover:text-accent transition">in/alfitamir</div>
                </div>
              </a>
              <a href="https://www.researchgate.net/profile/Tamer-Rushdy/unconfirmed" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-5 rounded-xl border border-border hover:border-accent transition group">
                <div className="h-11 w-11 rounded-lg bg-secondary flex items-center justify-center">
                  <ResearchGateIcon className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">ResearchGate</div>
                  <div className="font-medium group-hover:text-accent transition">Tamer Rushdy</div>
                </div>
              </a>
              <a href="tel:+966138011910" className="flex items-start gap-4 p-5 rounded-xl border border-border hover:border-accent transition group">
                <div className="h-11 w-11 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Clinic</div>
                  <div className="font-medium leading-relaxed">
                    4th St, Al Khobar Al Janubiyah<br />
                    Al Khobar 34621, Saudi Arabia
                  </div>
                  <div className="mt-2 text-sm text-accent group-hover:underline" dir="ltr">+966 13 801 1910</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="web" className="relative scroll-mt-32 mx-auto max-w-6xl px-6 py-24">
        <SectionArt name="web" alt="Online presence illustration" side="right" />
        <div className="mb-12">
          <div className="eyebrow">Featured & Published</div>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl">Around the web.</h2>
          <p className="mt-4 text-muted-foreground max-w-xl">Selected profiles, booking platforms, and peer-reviewed publications.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {[
            {
              icon: Building2,
              tag: "Hospital Profile",
              title: "Mohammad Dossary Hospital",
              desc: "Official consultant profile — General & Laparoscopic Surgery.",
              href: "https://mdh.com.sa/doctors/dr-tamer-elalfy/",
            },
            {
              icon: CalendarCheck,
              tag: "Online Booking",
              title: "Okadoc — Khobar",
              desc: "Book appointments online with Dr. Tamer Rushdy Elalfy.",
              href: "https://www.okadoc.com/en-sa/doctor/general-surgery/khobar/tamer-rushdy-elalfy",
            },
            {
              icon: Linkedin,
              tag: "Professional",
              title: "LinkedIn Profile",
              desc: "Connect for professional networking and collaboration.",
              href: "https://linkedin.com/in/tamer-elalfy-a47514151",
            },
            {
              icon: ResearchGateIcon,
              tag: "Research",
              title: "ResearchGate Profile",
              desc: "Follow my publications, citations, and research updates.",
              href: "https://www.researchgate.net/profile/Tamer-Rushdy/unconfirmed",
            },
            {
              icon: BookOpen,
              tag: "Blog",
              title: "My Articles — Read Them Here",
              desc: "41 patient-education articles from my WordPress blog, now readable directly on this site.",
              href: "/articles",
            },
            {
              icon: Youtube,
              tag: "Video",
              title: "YouTube Channel",
              desc: "Surgical explanations and patient-education videos, in Arabic and English.",
              href: "https://www.youtube.com/@alfy_surgery",
            },
            {
              icon: BookOpen,
              tag: "Publication · 2021",
              title: "Surgery for Complicated Stomal Prolapse: Is the Altemeier Technique an Option?",
              desc: "Alalfy TR, Orban YA, Algazar M, Farag A. — J. Coloproctol. 41(1), 2021.",
              href: "https://fi-view.bvsalud.org/lilacs/biblio/?filter=author%3A%22Alalfy%2C+Tamer+R%22",
            },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              {...(item.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="group flex gap-5 p-6 bento-card"
            >
              <div className="h-12 w-12 shrink-0 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-accent/10 transition">
                <item.icon className="h-5 w-5 text-accent" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">{item.tag}</div>
                <h3 className="font-serif text-lg leading-snug group-hover:text-accent transition flex items-start gap-2">
                  <span>{item.title}</span>
                  <ExternalLink className="h-4 w-4 mt-1 shrink-0 opacity-60" />
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </section>
</>}
</div>;
}
