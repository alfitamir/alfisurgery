import { createFileRoute, Link } from "@tanstack/react-router";
import { Stethoscope, Activity, GraduationCap, ShieldCheck, Users, Microscope, HeartPulse, ClipboardList, Mail, MapPin, Award, ArrowRight, Phone, Download, Globe, Youtube, Facebook, MessageCircle, Linkedin, ExternalLink, BookOpen, Building2, CalendarCheck, Presentation, Eye } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import portrait from "@/assets/dr-elalfy.jpg";
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

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Dr. Tamer Rushdy Elalfy — Consultant General & Laparoscopic Surgeon" },
      { name: "description", content: "Dr. Tamer Rushdy Elalfy, MD — Consultant & Head of General Surgery and OR Unit, MDH Hospital, Al Khobar, KSA. Assistant Professor, Zagazig University, Egypt." },
      { property: "og:title", content: "Dr. Tamer Rushdy Elalfy, MD" },
      { property: "og:description", content: "Consultant General & Laparoscopic Surgeon. Bariatric, colorectal, thyroid, and upper GI surgery." },
      { property: "og:url", content: "/" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" } as any,
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@300;400;500;600;700&display=swap" },
    ],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Physician",
        name: "Dr. Tamer Rushdy Elalfy",
        medicalSpecialty: ["GeneralSurgery", "LaparoscopicSurgery", "BariatricSurgery"],
        worksFor: { "@type": "Hospital", name: "MDH Hospital", address: "Al Khobar, KSA" },
        email: "tamerelalfy@hca.med.sa",
      }),
    }],
  }),
});

const expertise = [
  { icon: Activity, title: "Advanced Laparoscopic Surgery", desc: "Minimally invasive techniques across complex abdominal procedures." },
  { icon: HeartPulse, title: "Bariatric Surgery", desc: "Patient selection, perioperative management & complication prevention." },
  { icon: Microscope, title: "Colorectal & Anal Surgery", desc: "Comprehensive elective and emergency colorectal care." },
  { icon: Stethoscope, title: "Thyroid & Neck Surgery", desc: "Precision endocrine and head & neck surgical procedures." },
  { icon: ClipboardList, title: "Upper GI Surgery", desc: "Esophageal, gastric, and hepatobiliary surgical management." },
  { icon: ShieldCheck, title: "Acute Care & Trauma", desc: "High-pressure emergency surgical decision-making." },
];

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

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-[var(--gradient-accent)] flex items-center justify-center">
              <Stethoscope className="h-4 w-4 text-accent-foreground" />
            </div>
            <span className="font-serif text-lg font-semibold">Dr. Tamer Elalfy</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-foreground transition">About</a>
            <a href="#expertise" className="hover:text-foreground transition">Expertise</a>
            <a href="#services" className="hover:text-foreground transition">Services</a>
            <Link to="/patients" className="hover:text-foreground transition">Patients</Link>
            <a href="#contact" className="hover:text-foreground transition">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <Link to="/ar" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition">
              <Globe className="h-4 w-4" /> AR
            </Link>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:opacity-90 transition">
              Get in touch <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 -z-10 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, oklch(0.75 0.12 200) 0%, transparent 40%), radial-gradient(circle at 80% 60%, oklch(0.55 0.15 220) 0%, transparent 50%)" }} />
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-36 text-[oklch(0.985_0.005_240)]">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs tracking-wide backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-[oklch(0.75_0.15_160)]" />
            Open to professional collaboration
          </div>
          <h1 className="mt-6 font-serif text-5xl md:text-7xl font-medium leading-[1.05] max-w-4xl">
            Dr. Tamer Rushdy <span className="italic text-[oklch(0.85_0.08_200)]">Elalfy</span>, MD
          </h1>
          <p className="mt-6 max-w-2xl text-lg md:text-xl text-white/80 leading-relaxed">
            Consultant General & Laparoscopic Surgeon. Head of Surgery and Operating Room Unit at MDH Hospital, Al Khobar — Assistant Professor of General Surgery, Zagazig University, Egypt.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#expertise" className="rounded-full bg-white text-primary px-6 py-3 text-sm font-semibold hover:bg-white/90 transition">Explore expertise</a>
            <a href="#contact" className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold hover:bg-white/10 transition">Request consultation</a>
          </div>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/15 pt-8">
            {[
              { k: "20+", v: "Years in surgery" },
              { k: "6", v: "Subspecialty areas" },
              { k: "OR", v: "Department head" },
              { k: "MD", v: "Assistant Professor" },
            ].map((s) => (
              <div key={s.v}>
                <div className="font-serif text-3xl md:text-4xl">{s.k}</div>
                <div className="text-xs uppercase tracking-widest text-white/60 mt-1">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-4">
            <div className="relative">
              <div className="absolute -inset-3 rounded-2xl bg-[var(--gradient-accent)] opacity-30 blur-xl" />
              <img src={portrait} alt="Dr. Tamer Rushdy Elalfy" className="relative w-full rounded-2xl object-cover shadow-[var(--shadow-elegant)] aspect-[4/5]" />
            </div>
            <div className="mt-6 text-xs uppercase tracking-[0.2em] text-accent font-semibold">About</div>
            <h2 className="mt-3 font-serif text-4xl">A surgeon's perspective.</h2>
          </div>
          <div className="md:col-span-8 space-y-5 text-lg text-muted-foreground leading-relaxed md:pt-2">
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

      {/* Experience */}
      <section id="experience" className="bg-secondary/40 border-y border-border">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <div className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">Experience</div>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl">Two decades. One discipline.</h2>
            </div>
            <ol className="md:col-span-8 relative border-l border-border ml-2">
              {timeline.map((t) => (
                <li key={t.years} className="pl-8 pb-10 relative">
                  <span className="absolute -left-[7px] top-1.5 h-3.5 w-3.5 rounded-full bg-accent ring-4 ring-background" />
                  <div className="text-xs uppercase tracking-widest text-accent font-semibold">{t.years}</div>
                  <div className="mt-1 font-serif text-2xl">{t.role}</div>
                  <div className="text-muted-foreground">{t.place}</div>
                </li>
              ))}
            </ol>
          </div>
          <div className="grid md:grid-cols-12 gap-12 mt-16 pt-16 border-t border-border">
            <div className="md:col-span-4">
              <div className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">Education</div>
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

      {/* Expertise */}
      <section id="expertise" className="bg-secondary/40 border-y border-border">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">Clinical Expertise</div>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl max-w-xl">Subspecialty depth across general surgery.</h2>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden shadow-[var(--shadow-soft)]">
            {expertise.map((e) => (
              <div key={e.title} className="bg-card p-8 hover:bg-card/70 transition group">
                <div className="h-11 w-11 rounded-lg bg-[var(--gradient-accent)] flex items-center justify-center text-accent-foreground">
                  <e.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 font-serif text-xl">{e.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5 md:sticky md:top-24">
            <div className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">What I Offer</div>
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

      {/* Skills */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="text-xs uppercase tracking-[0.2em] text-[oklch(0.75_0.10_200)] font-semibold">Capabilities</div>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl max-w-2xl">Beyond the operating room.</h2>
          <div className="mt-14 grid md:grid-cols-3 gap-10">
            {skillGroups.map((g) => (
              <div key={g.title}>
                <div className="flex items-center gap-3">
                  <g.icon className="h-5 w-5 text-[oklch(0.75_0.10_200)]" />
                  <h3 className="font-serif text-2xl">{g.title}</h3>
                </div>
                <ul className="mt-5 space-y-2.5 text-white/75">
                  {g.items.map((it) => (
                    <li key={it} className="flex gap-3">
                      <span className="text-[oklch(0.75_0.10_200)] mt-1">—</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* YouTube Videos */}
      <section className="bg-secondary/40 border-y border-border">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="mb-12">
            <div className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">Patient Education</div>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl">Watch & Learn.</h2>
            <p className="mt-4 text-muted-foreground max-w-xl">Short educational videos to help you understand common surgical procedures and what to expect.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <a
              href="https://youtu.be/OM66BEr8pnc"
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl bg-card border border-border overflow-hidden hover:border-accent transition shadow-[var(--shadow-soft)]"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src="https://i.ytimg.com/vi/OM66BEr8pnc/maxresdefault.jpg"
                  alt="Advanced uses of surgical laparoscopy"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition">
                  <div className="h-14 w-14 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition">
                    <Youtube className="h-6 w-6 text-red-600 ml-0.5" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">3 min · Arabic</div>
                <h3 className="font-serif text-xl group-hover:text-accent transition">Advanced Uses of Surgical Laparoscopy</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  An overview of how minimally invasive laparoscopic surgery is applied across gallbladder, hernia, and other abdominal procedures — and why it matters for faster recovery.
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* In the Press / Featured */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-12">
          <div className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">Featured & Published</div>
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
              target="_blank"
              rel="noopener noreferrer"
              className="group flex gap-5 p-6 rounded-2xl bg-card border border-border hover:border-accent transition shadow-[var(--shadow-soft)]"
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

      {/* Publications */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="mb-12">
          <div className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">Peer-Reviewed Publications</div>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl">Selected research.</h2>
          <p className="mt-4 text-muted-foreground max-w-xl">Original articles, case reports, and reviews in international surgical journals.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {[
            {
              tag: "Case Rep Gastrointest Med · 2018",
              title: "Colopancreatic Fistula: An Uncommon Complication of Recurrent Acute Pancreatitis",
              desc: "Case report detailing diagnosis and combined surgical–endoscopic management of colopancreatic fistula.",
              href: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5892304/",
            },
            {
              tag: "HPB (Oxford) · 2020",
              title: "Article in HPB — Hepato-Pancreato-Biliary Surgery",
              desc: "Original article published in HPB, the official journal of the IHPBA and AHPBA.",
              href: "https://www.hpbonline.org/article/S1365-182X(20)30108-8/fulltext",
            },
            {
              tag: "Medicine (Baltimore) · 2016",
              title: "Gastrointestinal Fistulas in Acute Pancreatitis",
              desc: "Clinical study on the incidence, risk factors, and management of GI fistulas complicating acute pancreatitis.",
              href: "https://journals.lww.com/md-journal/fulltext/2016/04050/gastrointestinal_fistulas_in_acute_pancreatitis.84.aspx",
            },
            {
              tag: "Am J Surg · 1989",
              title: "Article in The American Journal of Surgery",
              desc: "Contribution to one of the longest-standing peer-reviewed surgical journals.",
              href: "https://www.americanjournalofsurgery.com/article/0002-9610(89)90198-0/abstract",
            },
            {
              tag: "J. Coloproctol. · 2021",
              title: "Surgery for Complicated Stomal Prolapse: Is the Altemeier Technique an Option?",
              desc: "Alalfy TR, Orban YA, Algazar M, Farag A. — Report of three cases.",
              href: "https://fi-view.bvsalud.org/lilacs/biblio/?filter=author%3A%22Alalfy%2C+Tamer+R%22",
            },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex gap-5 p-6 rounded-2xl bg-card border border-border hover:border-accent transition shadow-[var(--shadow-soft)]"
            >
              <div className="h-12 w-12 shrink-0 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-accent/10 transition">
                <BookOpen className="h-5 w-5 text-accent" />
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

      {/* Educational Illustrations */}
      <section className="bg-secondary/40 border-y border-border">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="mb-12">
            <div className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">Educational Illustrations</div>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl">Visual teaching for doctors and patients.</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl">A curated gallery of surgical explainer visuals used in CME teaching, case-based discussion, clinic counseling, and patient communication.</p>
          </div>
          <div className="space-y-16">
            {illustrationCollections.map((group) => (
              <div key={group.title}>
                <div className="mb-6 flex items-end justify-between gap-4 flex-wrap">
                  <div>
                    <div className="inline-flex rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-accent">{group.title}</div>
                    <p className="mt-3 text-sm text-muted-foreground">{group.subtitle}</p>
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <Dialog>
                      <DialogTrigger asChild>
                        <button
                          type="button"
                          className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium hover:bg-secondary transition-colors"
                          aria-label={`Preview printable PDF — ${group.title}`}
                        >
                          <Eye className="h-4 w-4" />
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
                            className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:bg-primary/90 transition-colors"
                          >
                            <Download className="h-4 w-4" />
                            Download PDF
                          </a>
                        </div>
                      </DialogContent>
                    </Dialog>
                    <a
                      href={group.pdf}
                      download
                      className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
                      aria-label={`Download printable PDF — ${group.title}`}
                    >
                      <Download className="h-4 w-4" />
                      <span>Download PDF</span>
                      <span className="text-xs text-muted-foreground hidden sm:inline">· {group.pdfMeta}</span>
                    </a>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {group.items.map((item) => (
                    <article key={item.title} className="overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-soft)] flex flex-col">
                      <div className="aspect-[16/10] overflow-hidden border-b border-border bg-secondary">
                        <img src={item.image} alt={item.alt} loading="lazy" className="h-full w-full object-cover" />
                      </div>
                      <div className="p-5 flex flex-col flex-1">
                        <h3 className="font-serif text-xl leading-snug">{item.title}</h3>
                        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                        <a
                          href={item.image}
                          download
                          className="mt-4 inline-flex items-center gap-2 self-start rounded-full border border-border px-3 py-1.5 text-xs font-medium hover:bg-secondary transition-colors"
                          aria-label={`Download illustration — ${item.title}`}
                        >
                          <Download className="h-3.5 w-3.5" />
                          Download image (PNG)
                        </a>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Presentations */}
      <section className="mx-auto max-w-6xl px-6 pb-24 pt-24">
        <div className="mb-12">
          <div className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">Lectures & Talks</div>
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
              className="group flex gap-5 p-6 rounded-2xl bg-card border border-border hover:border-accent transition shadow-[var(--shadow-soft)]"
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

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
        <div className="rounded-3xl bg-card border border-border p-10 md:p-16 shadow-[var(--shadow-elegant)] relative overflow-hidden">
          <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full opacity-20" style={{ background: "var(--gradient-accent)" }} />
          <div className="relative grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">Contact</div>
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
              <a href="https://youtube.com/@alfy_surgery" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-5 rounded-xl border border-border hover:border-accent transition group">
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
              <a href="https://whatsapp.com/channel/0029VbDHjNiKAwEkWMqT5C2P" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-5 rounded-xl border border-border hover:border-accent transition group">
                <div className="h-11 w-11 rounded-lg bg-secondary flex items-center justify-center">
                  <MessageCircle className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">WhatsApp Channel</div>
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

      <footer className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-10 flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
          <div>© {new Date().getFullYear()} Dr. Tamer Rushdy Elalfy, MD</div>
          <div>Zagazig University · MDH Hospital, KSA</div>
        </div>
      </footer>
    </div>
  );
}

