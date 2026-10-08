import { BookOpen, HeartHandshake, Lightbulb, UserRound } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Counter from "@/components/ui/Counter";
import PrincipalMessage from "@/components/sections/PrincipalMessage";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "Faculty",
  description: "Meet the mentors of RPS — Principal Dr. Kishor Tiwari and 7000+ Gurus across the RPS Group of Schools.",
};

const strengths = [
  { value: 7000, suffix: "+", label: "Gurus across RPS Group" },
  { value: 200, suffix: "+", label: "Staff Members at RPS Rewari" },
  { value: 28, suffix: "", label: "Years of Teaching Legacy" },
];

const qualities = [
  { icon: Lightbulb, title: "Visionary Leaders", text: "Educational leaders who shape the academic and cultural framework of our schools with innovative approaches and strategic planning." },
  { icon: HeartHandshake, title: "Caring Mentors", text: "Teachers and staff who are caring and supportive, always ready to help with any problem, academic or personal." },
  { icon: BookOpen, title: "Subject Experts", text: "Experienced faculty for school academics and competitive preparation — IIT, NEET, NDA, NTSE, CLAT and CPT." },
];

const departments = ["Science", "Mathematics", "English", "Hindi", "Social Science", "Computer Science", "Commerce", "Physical Education", "Music & Arts"];

export default function FacultyPage() {
  return (
    <>
      <PageHero title="Meet Our" highlight="Mentors" subtitle="Their expertise and passion for education ensure that our students are well-prepared for academic and personal success." crumbs={[{ label: "Academics", href: "/academics" }, { label: "Faculty" }]} />

      <section id="principal" className="scroll-mt-28 bg-cream py-24">
        <div className="container-x">
          <PrincipalMessage full />
        </div>
      </section>

      <section className="relative overflow-hidden bg-mesh py-16 text-white">
        <div className="absolute inset-0 bg-dots opacity-40" />
        <div className="container-x relative grid gap-5 sm:grid-cols-3">
          {strengths.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1} from="zoom" className="rounded-3xl glass p-8 text-center">
              <p className="font-display text-5xl font-bold text-gold-400"><Counter value={s.value} suffix={s.suffix} /></p>
              <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-white/80">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-20">
        <div className="container-x">
          <SectionHeading eyebrow="Our Gurus" title="What Makes Our Faculty" highlight="Special" />
          <div className="grid gap-6 md:grid-cols-3">
            {qualities.map((q, i) => (
              <Reveal key={q.title} delay={i * 0.1}>
                <div className="h-full rounded-3xl bg-white p-8 shadow-lg shadow-navy-900/5 ring-1 ring-slate-100 card-lift">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gold-100 text-brand-600"><q.icon className="h-7 w-7" /></span>
                  <h3 className="mt-5 text-xl font-semibold text-navy-900">{q.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{q.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="container-x">
          <SectionHeading eyebrow="Departments" title="Faculty" highlight="Profiles" text="Detailed faculty profiles will be published soon." />
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
            {departments.map((d, i) => (
              <Reveal key={d} delay={i * 0.04}>
                <div className="group h-full rounded-3xl bg-white p-6 text-center shadow ring-1 ring-slate-100 card-lift">
                  <span className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-navy-900 text-white transition group-hover:scale-105">
                    <UserRound className="h-9 w-9" />
                  </span>
                  <p className="mt-4 font-bold text-navy-900">{d}</p>
                  <p className="text-xs text-muted">Profiles coming soon</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button href="/careers">Join Our Faculty — Careers</Button>
          </div>
        </div>
      </section>
    </>
  );
}
