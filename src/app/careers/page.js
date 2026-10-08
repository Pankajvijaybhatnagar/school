import { Briefcase, GraduationCap, HeartHandshake, Sprout, TrendingUp } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import CareerForm from "@/components/misc/CareerForm";

export const metadata = {
  title: "Career With Us",
  description: "Join the RPS family of Gurus. Apply for teaching (PGT, TGT, PRT), sports and administrative roles.",
};

const perks = [
  { icon: TrendingUp, title: "Grow With a Legacy", text: "Be part of an institution with 28 years of landmark contribution to education." },
  { icon: GraduationCap, title: "Professional Development", text: "Continuous training, workshops and opportunities to upskill." },
  { icon: HeartHandshake, title: "Supportive Culture", text: "A collaborative community of educators who share a passion for teaching." },
  { icon: Sprout, title: "Green Campuses", text: "Work in spacious campuses in the lap of nature with modern facilities." },
];

const roles = [
  { title: "PGT", desc: "Post Graduate Teachers for Classes XI–XII" },
  { title: "TGT", desc: "Trained Graduate Teachers for Classes VI–X" },
  { title: "PRT", desc: "Primary Teachers for Classes I–V" },
  { title: "Sports Coach", desc: "Coaches for athletics, games and swimming" },
  { title: "Administration", desc: "Office, accounts, admissions and transport staff" },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        title="Career"
        highlight="With Us"
        subtitle="Shape the leaders of tomorrow. Join the RPS family of passionate Gurus."
        crumbs={[{ label: "Career With Us" }]}
      />

      <section className="py-20">
        <div className="container-x">
          <SectionHeading eyebrow="Why Work at RPS" title="Teach. Inspire." highlight="Grow." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {perks.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="h-full rounded-3xl bg-white p-7 shadow-lg shadow-navy-900/5 ring-1 ring-slate-100 card-lift">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-navy-800 text-gold-400"><p.icon className="h-7 w-7" /></span>
                  <h3 className="mt-5 text-lg font-semibold text-navy-900">{p.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-muted">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="container-x grid gap-10 lg:grid-cols-5">
          <Reveal from="right" className="lg:col-span-2">
            <SectionHeading eyebrow="Open Positions" title="We Are" highlight="Hiring" align="left" />
            <p className="-mt-6 mb-6 text-sm text-muted">Current openings may vary by campus. Apply with your resume and we&apos;ll match you with the right role.</p>
            <ul className="space-y-3">
              {roles.map((r) => (
                <li key={r.title} className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gold-100 text-brand-600"><Briefcase className="h-5 w-5" /></span>
                  <div>
                    <p className="font-bold text-navy-900">{r.title}</p>
                    <p className="text-xs text-muted">{r.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal from="left" className="lg:col-span-3">
            <div className="rounded-2xl bg-white p-6 shadow-xl shadow-navy-900/10 sm:p-10">
              <h3 className="text-2xl font-semibold text-navy-900">Apply Now</h3>
              <p className="mb-6 mt-1 text-sm text-muted">Fill in your details — fields marked * are required.</p>
              <CareerForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
