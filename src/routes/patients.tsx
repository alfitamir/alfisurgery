import { createFileRoute } from "@tanstack/react-router";
import { PatientEducationSite } from "@/components/PatientEducationSite";

export const Route = createFileRoute("/patients")({
  component: PatientsPage,
  head: () => ({
    meta: [
      { title: "Understand Your Operation | Patient Guide" },
      { name: "description", content: "Illustrated, bilingual guidance for surgical patients: choose your operation, prepare safely, recover confidently, and know urgent warning signs." },
      { property: "og:title", content: "Understand Your Operation | Patient Guide" },
      { property: "og:description", content: "A calm, illustrated journey through surgery preparation, recovery, and operation-specific patient guides." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { property: "og:url", content: "/patients" },
    ],
    links: [{ rel: "canonical", href: "/patients" }, { rel: "alternate", hrefLang: "ar", href: "/ar/patients" } as any],
  }),
});

/* legacy patient-channel copy retained in project history */
const expectations = [
  { icon: HeartPulse, title: "Clear surgical guidance", text: "Plain-language posts on common surgical conditions, treatment options, and recovery." },
  { icon: ShieldCheck, title: "Trusted information", text: "Evidence-based content written and curated by a consultant surgeon." },
  { icon: Clock, title: "Perioperative tips", text: "What to do before and after surgery — diet, wound care, activity, red flags." },
  { icon: Languages, title: "Arabic & English", text: "Content shared in both languages so families can follow along easily." },
];

const preOp = [
  { icon: CheckCircle2, title: "Confirm your appointment", text: "Re-check the date, time, hospital, and which surgeon's team you are with. Arrive 1–2 hours early as advised." },
  { icon: Pill, title: "Review your medications", text: "Tell us about blood thinners (aspirin, warfarin, clopidogrel, NSAIDs), diabetes medicines, and supplements. Some need to be paused — never stop without instruction." },
  { icon: Apple, title: "Fasting", text: "Usually no food for 6–8 hours and no clear fluids for 2 hours before surgery, unless told otherwise." },
  { icon: Bandage, title: "Skin & hygiene", text: "Shower the night before and the morning of surgery. Do not shave the surgical site yourself. Remove nail polish, jewellery, and contact lenses." },
  { icon: ClipboardList, title: "Bring with you", text: "ID, insurance card, list of current medications, eyeglasses, and loose comfortable clothing for going home." },
  { icon: HeartPulse, title: "Optimise your health", text: "Stop smoking as early as possible — even a few weeks helps wound healing. Stay hydrated and walk daily if you can." },
];

const postOp = [
  { icon: Activity, title: "Move early, move often", text: "Short walks every 1–2 hours while awake reduce the risk of blood clots and chest infections. Avoid heavy lifting (>5 kg) for 4–6 weeks." },
  { icon: Bandage, title: "Wound care", text: "Keep dressings clean and dry. You can usually shower after 48 hours unless told otherwise. Pat dry — do not rub or soak." },
  { icon: Pill, title: "Pain & medication", text: "Take painkillers on schedule for the first 48–72 hours rather than waiting for pain. Complete any antibiotic course fully." },
  { icon: Apple, title: "Eating & drinking", text: "Start with sips of water and light food. After bariatric surgery follow the staged diet plan exactly. Drink enough to keep urine pale." },
  { icon: Clock, title: "Rest & sleep", text: "Sleep slightly propped up if you had abdominal or chest surgery. Most patients feel noticeably better by days 3–5." },
  { icon: CheckCircle2, title: "Follow-up", text: "Attend your follow-up appointment even if you feel well — it lets us check healing and remove stitches or clips if needed." },
];

const redFlags = [
  "Fever above 38.5°C",
  "Worsening or sudden severe pain",
  "Heavy bleeding or wound opening",
  "Redness, swelling, or pus from the wound",
  "Shortness of breath or chest pain",
  "Calf pain, swelling, or redness",
  "Persistent vomiting or inability to keep fluids down",
  "No bowel movement or gas for 3+ days after abdominal surgery",
];

const faqs = [
  {
    q: "What is the WhatsApp channel for?",
    a: "It is a one-way educational channel where I share short, practical messages for patients and families: how to prepare for surgery, what recovery looks like, lifestyle advice after bariatric or general surgery, and answers to questions I hear most often in clinic.",
  },
  {
    q: "Will my messages be private if I join?",
    a: "Yes. WhatsApp channels are broadcast-only — other followers cannot see who you are, your phone number, or your profile. Only you see the posts I publish.",
  },
  {
    q: "Can I get a personal medical consultation through the channel?",
    a: "No. The channel is for general education, not personalised medical advice. For your own case, please book a clinic appointment or call the clinic directly on +966 13 801 1910.",
  },
  {
    q: "How often will I receive messages?",
    a: "A few short posts per week — usually a tip, a short video, or a brief explanation of a common surgical topic. I keep volume low so it stays useful, not noisy.",
  },
  {
    q: "What languages are used?",
    a: "Both Arabic and English. Where a topic matters for safety (e.g., warning signs after surgery), I publish the key points in both languages.",
  },
  {
    q: "What kind of topics do you cover?",
    a: "Laparoscopic surgery, bariatric (weight-loss) surgery, hernia, gallbladder, thyroid, colorectal and anal conditions, post-operative care, nutrition after bariatric surgery, and patient safety.",
  },
  {
    q: "Is the channel free?",
    a: "Yes, completely free. There are no products to buy and no sponsored content.",
  },
  {
    q: "How do I leave the channel?",
    a: "Open the channel inside WhatsApp, tap the channel name at the top, and choose 'Unfollow'. You can rejoin any time using the same link.",
  },
];

function PatientsPage() {
  return <PatientEducationSite lang="en" />;
  /* return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-[var(--gradient-accent)] flex items-center justify-center">
              <Stethoscope className="h-4 w-4 text-accent-foreground" />
            </div>
            <span className="font-serif text-lg font-semibold">Dr. Tamer Elalfy</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <Link to="/" hash="about" className="hover:text-foreground transition">About</Link>
            <Link to="/" hash="expertise" className="hover:text-foreground transition">Expertise</Link>
            <Link to="/patients" className="text-foreground font-medium">Patients</Link>
            <Link to="/" hash="contact" className="hover:text-foreground transition">Contact</Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link to="/ar" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition">
              <Globe className="h-4 w-4" /> AR
            </Link>
            <a href="https://whatsapp.com/channel/0029VbDHjNiKAwEkWMqT5C2P" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:opacity-90 transition">
              Join channel <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 -z-10 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, oklch(0.75 0.12 200) 0%, transparent 40%), radial-gradient(circle at 80% 60%, oklch(0.55 0.15 220) 0%, transparent 50%)" }} />
        <div className="mx-auto max-w-4xl px-6 py-24 md:py-32 text-[oklch(0.985_0.005_240)]">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs tracking-wide backdrop-blur">
            <MessageCircle className="h-3.5 w-3.5" /> WhatsApp channel for patients
          </div>
          <h1 className="mt-6 font-serif text-5xl md:text-6xl font-medium leading-[1.05]">
            Information you can <span className="italic text-[oklch(0.85_0.08_200)]">actually use</span>.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl">
            A welcoming, evidence-based space for patients and families — from preparing for surgery to recovery and long-term health. Short messages, honest answers, no noise.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="https://whatsapp.com/channel/0029VbDHjNiKAwEkWMqT5C2P" target="_blank" rel="noopener noreferrer" className="rounded-full bg-white text-primary px-6 py-3 text-sm font-semibold hover:bg-white/90 transition inline-flex items-center gap-2">
              <MessageCircle className="h-4 w-4" /> Follow on WhatsApp
            </a>
            <Link to="/" hash="contact" className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold hover:bg-white/10 transition">
              Book a consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Welcome / what to expect */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <div className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">A note from Dr. Elalfy</div>
            <h2 className="mt-3 font-serif text-4xl">Welcome.</h2>
          </div>
          <div className="md:col-span-8 space-y-5 text-lg text-muted-foreground leading-relaxed">
            <p>
              Most patients I meet have the same questions: <em>What is happening to me? What are my options? What does recovery really feel like?</em> The internet rarely gives clear answers — and clinic time is short.
            </p>
            <p>
              This channel exists to fix that. I share the same plain-language explanations I give my own patients in clinic, so you can come to appointments informed, prepared, and confident.
            </p>
            <p>
              It is not a substitute for personal care — but it should make your care better.
            </p>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden shadow-[var(--shadow-soft)]">
          {expectations.map((e) => (
            <div key={e.title} className="bg-card p-7">
              <div className="h-10 w-10 rounded-lg bg-[var(--gradient-accent)] flex items-center justify-center text-accent-foreground">
                <e.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-serif text-lg">{e.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{e.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pre/Post-Op Education */}
      <section id="education" className="bg-secondary/30 border-y border-border">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">Patient education</div>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl">Before & after your surgery.</h2>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              A practical checklist of what to do in the days leading up to your procedure — and how to recover safely once you are home. These are general guidelines; your surgical team will give you instructions specific to your case.
            </p>
          </div>

          <div className="mt-14 grid lg:grid-cols-2 gap-6">
            {/* Pre-op */}
            <div className="rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-soft)]">
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-xl bg-[var(--gradient-accent)] flex items-center justify-center text-accent-foreground">
                  <ClipboardList className="h-5 w-5" />
                </div>
                <h3 className="font-serif text-2xl">Preoperative</h3>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">In the days and hours before surgery.</p>

              <ul className="mt-6 space-y-4">
                {preOp.map((item) => (
                  <li key={item.title} className="flex gap-3">
                    <item.icon className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium">{item.title}</div>
                      <div className="text-sm text-muted-foreground leading-relaxed mt-1">{item.text}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Post-op */}
            <div className="rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-soft)]">
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-xl bg-[var(--gradient-accent)] flex items-center justify-center text-accent-foreground">
                  <Activity className="h-5 w-5" />
                </div>
                <h3 className="font-serif text-2xl">Postoperative</h3>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">Recovery at home — the first days and weeks.</p>

              <ul className="mt-6 space-y-4">
                {postOp.map((item) => (
                  <li key={item.title} className="flex gap-3">
                    <item.icon className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium">{item.title}</div>
                      <div className="text-sm text-muted-foreground leading-relaxed mt-1">{item.text}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Red flags */}
          <div className="mt-10 rounded-2xl border border-destructive/30 bg-card p-7">
            <div className="flex items-center gap-3">
              <AlertTriangle className="h-5 w-5 text-destructive" />
              <h3 className="font-serif text-xl">When to call us urgently</h3>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">Contact the clinic or go to the nearest emergency department if you experience:</p>
            <ul className="mt-4 grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-muted-foreground">
              {redFlags.map((r) => (
                <li key={r} className="flex gap-2"><span className="text-destructive">•</span>{r}</li>
              ))}
            </ul>
            <a href="tel:+966138011910" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-accent transition">
              Call clinic: +966 13 801 1910 <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </section>



      {/* FAQs */}
      <section className="bg-secondary/40 border-y border-border">
        <div className="mx-auto max-w-4xl px-6 py-24">
          <div className="text-xs uppercase tracking-[0.2em] text-accent font-semibold text-center">Frequently asked</div>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl text-center">Before you join.</h2>

          <div className="mt-14 space-y-3">
            {faqs.map((f, i) => (
              <FaqItem key={f.q} q={f.q} a={f.a} defaultOpen={i === 0} />
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-accent/30 bg-card p-6 flex items-start gap-4">
            <AlertTriangle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              <span className="text-foreground font-medium">Medical emergency?</span> Do not use the WhatsApp channel for urgent symptoms. Go to your nearest emergency department or call your local emergency number immediately.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-6 py-24 text-center">
        <h2 className="font-serif text-4xl md:text-5xl">Join the channel.</h2>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
          One tap to follow. No spam, no obligation. Leave any time.
        </p>
        <a href="https://whatsapp.com/channel/0029VbDHjNiKAwEkWMqT5C2P" target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3.5 text-sm font-semibold hover:opacity-90 transition">
          <MessageCircle className="h-4 w-4" /> Follow on WhatsApp <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-10 flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
          <div>© {new Date().getFullYear()} Dr. Tamer Rushdy Elalfy, MD</div>
          <Link to="/" className="hover:text-foreground transition">← Back home</Link>
        </div>
      </footer>
    </div>
  ); */
}

function FaqItem({ q, a, defaultOpen = false }: { q: string; a: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-secondary/40 transition">
        <span className="font-serif text-lg">{q}</span>
        <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform shrink-0 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="px-5 pb-5 text-muted-foreground leading-relaxed">{a}</div>
      )}
    </div>
  );
}
