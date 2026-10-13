import { BookOpen, GraduationCap, HeartHandshake, Mail, UserRound, Users } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Counter from "@/components/ui/Counter";
import SmartImage from "@/components/ui/SmartImage";
import Button from "@/components/ui/Button";
import { primaryContact, principal, school, staff } from "@/data/site";

export const metadata = {
  title: "Faculty & Staff",
  description: "Principal Mrs. Seema Vats (M.A., B.Ed.) and 23 teachers — 13 PGT, 5 TGT and 5 PRT — at Gurukul Vidyapeeth, Jind.",
};

const strengths = [
  { value: staff.teachers, label: "Total Teachers" },
  { value: staff.pgt, label: "PGT" },
  { value: staff.tgt, label: "TGT" },
  { value: staff.prt, label: "PRT" },
];

const support = [
  { icon: Users, title: "Teacher Section Ratio", value: staff.ratio, text: "As per the school's Mandatory Public Disclosure." },
  { icon: HeartHandshake, title: "Special Educator", value: staff.specialEducator, text: "For learners who need individual support." },
  { icon: BookOpen, title: "Counsellor & Wellness Teacher", value: staff.counsellor, text: "For students' guidance and well-being." },
];

export default function FacultyPage() {
  return (
    <>
      <PageHero title="Faculty &" highlight="Staff" subtitle={`The teachers of ${school.fullName}.`} crumbs={[{ label: "Academics", href: "/academics" }, { label: "Faculty" }]} />

      <section id="principal" className="scroll-mt-28 bg-cream py-24">
        <div className="container-x grid items-center gap-12 lg:grid-cols-[380px_1fr]">
          <Reveal from="right" className="relative mx-auto w-full max-w-sm">
            <div className="absolute -left-4 -top-4 h-full w-full rounded-2xl bg-navy-800" />
            <SmartImage src={principal.image} alt={principal.name} label={principal.name} variant="light" className="relative aspect-[4/5] rounded-2xl shadow-xl" />
          </Reveal>
          <Reveal from="left">
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-gold-500">{principal.role}</span>
            <h2 className="mt-3 text-4xl font-semibold text-navy-900 sm:text-5xl">{principal.name}</h2>
            <p className="mt-2 flex items-center gap-2 text-lg font-semibold text-brand-600"><GraduationCap className="h-5 w-5" /> {principal.qualification}</p>
            <div className="mt-8 grid max-w-md grid-cols-2 gap-4">
              {principal.experience.map((e) => (
                <div key={e.label} className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
                  <p className="font-display text-4xl font-bold text-navy-900"><Counter value={e.value} /></p>
                  <p className="mt-1 text-sm text-muted">{e.label}</p>
                </div>
              ))}
            </div>
            <a href={`mailto:${primaryContact.email}`} className="mt-8 inline-flex items-center gap-2 font-semibold text-navy-800 hover:text-brand-600">
              <Mail className="h-4 w-4" /> {primaryContact.email}
            </a>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-mesh py-16 text-white">
        <div className="absolute inset-0 bg-dots opacity-40" />
        <div className="container-x relative grid grid-cols-2 gap-5 lg:grid-cols-4">
          {strengths.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1} from="zoom" className="rounded-3xl glass p-8 text-center">
              <p className="font-display text-5xl font-bold text-gold-400"><Counter value={s.value} /></p>
              <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-white/80">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-20">
        <div className="container-x">
          <SectionHeading eyebrow="Student Support" title="Caring for Every" highlight="Learner" />
          <div className="grid gap-6 md:grid-cols-3">
            {support.map((q, i) => (
              <Reveal key={q.title} delay={i * 0.1}>
                <div className="h-full rounded-3xl bg-white p-8 shadow-lg shadow-navy-900/5 ring-1 ring-slate-100 card-lift">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gold-100 text-brand-600"><q.icon className="h-7 w-7" /></span>
                  <p className="mt-5 font-display text-3xl font-bold text-navy-900">{q.value}</p>
                  <h3 className="mt-1 text-lg font-semibold text-navy-900">{q.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-muted">{q.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 flex flex-col items-center gap-4 text-center">
            <UserRound className="h-8 w-8 text-gold-500" />
            <p className="text-muted">Detailed faculty profiles will be published soon.</p>
            <Button href="/careers">Join Our Faculty — Careers</Button>
          </div>
        </div>
      </section>
    </>
  );
}
