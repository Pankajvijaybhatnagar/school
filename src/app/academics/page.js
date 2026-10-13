import { BookOpenCheck, FlaskConical, Languages, Monitor, Presentation, Sprout } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import BoardResults from "@/components/sections/BoardResults";
import { infrastructure, logoMeaning, school, staff } from "@/data/site";

export const metadata = {
  title: "Academics",
  description: "CBSE curriculum from Nursery to Class XII in Hindi & English medium at Gurukul Vidyapeeth, Jind — with the Science stream in Classes XI and XII.",
};

const curriculum = [
  { icon: BookOpenCheck, title: "CBSE Curriculum", text: `Education as per the curriculum prescribed by the Central Board of Secondary Education (CBSE), New Delhi. Affiliation No. ${school.affiliationNo}.` },
  { icon: Languages, title: "Hindi & English Medium", text: "Boys and girls study in both Hindi and English medium, from Nursery to Class XII." },
  { icon: Sprout, title: "Rishikul Sanskaras", text: "Love for the nation, sanskaras, discipline and a sense of responsibility are nurtured from early childhood alongside modern education." },
];

const stages = [
  { title: "Pre-Primary", classes: "Nursery • L.K.G. • U.K.G." },
  { title: "Primary", classes: "Classes 1st – 5th" },
  { title: "Middle", classes: "Classes 6th – 8th" },
  { title: "Secondary", classes: "Classes 9th – 10th" },
  { title: "Senior Secondary", classes: "Classes 11th – 12th, incl. Science" },
];

const infra = [
  { icon: Presentation, title: `${infrastructure.classrooms} Classrooms`, text: "Classrooms for every stage from Nursery to Class XII." },
  { icon: FlaskConical, title: `${infrastructure.labs} Laboratories`, text: "Laboratories, including the computer lab, for practical learning." },
  { icon: Monitor, title: "Internet Facility", text: "Internet available on campus for teaching and learning." },
];

export default function AcademicsPage() {
  return (
    <>
      <PageHero title="Academics at" highlight="Gurukul" subtitle={`${school.board} • ${school.classes} • ${school.medium}`} crumbs={[{ label: "Academics" }]} />

      <section className="py-20">
        <div className="container-x">
          <SectionHeading eyebrow="Curriculum" title="Modern Education," highlight="Timeless Values" />
          <div className="grid gap-6 md:grid-cols-3">
            {curriculum.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.1}>
                <div className="group flex h-full flex-col rounded-3xl bg-white p-8 shadow-lg shadow-navy-900/5 ring-1 ring-slate-100 card-lift">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-navy-800 text-white shadow-lg transition group-hover:rotate-6">
                    <c.icon className="h-7 w-7" />
                  </span>
                  <h3 className="mt-6 text-xl font-semibold text-navy-900">{c.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-7 text-muted">{c.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-mesh py-20 text-white">
        <div className="absolute inset-0 bg-dots opacity-40" />
        <div className="container-x relative">
          <SectionHeading light eyebrow="Classes Offered" title="Nursery to" highlight="Class XII" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {stages.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.07} from="zoom">
                <div className="h-full rounded-3xl glass p-6 text-center transition hover:-translate-y-1 hover:bg-white/15">
                  <p className="font-display text-4xl font-semibold text-gold-400">0{i + 1}</p>
                  <p className="mt-3 text-lg font-bold">{s.title}</p>
                  <p className="mt-1 text-sm text-white/75">{s.classes}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12 grid gap-4 rounded-3xl bg-white/10 p-6 text-center sm:grid-cols-4">
            {[
              [staff.teachers, "Teachers"],
              [staff.pgt, "PGT"],
              [staff.tgt, "TGT"],
              [staff.prt, "PRT"],
            ].map(([v, l]) => (
              <div key={l}>
                <p className="font-display text-3xl font-bold text-gold-400">{v}</p>
                <p className="text-xs font-semibold uppercase tracking-widest text-white/70">{l}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="py-20">
        <div className="container-x">
          <SectionHeading eyebrow="Infrastructure" title="Spaces Designed for" highlight="Learning" />
          <div className="grid gap-6 md:grid-cols-3">
            {infra.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.1}>
                <div className="h-full rounded-3xl bg-cream p-8 ring-1 ring-gold-500/20 card-lift">
                  <c.icon className="h-10 w-10 text-navy-700" />
                  <h3 className="mt-5 text-xl font-semibold text-navy-900">{c.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{c.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="container-x">
          <SectionHeading eyebrow="Board Results" title="Consistent" highlight="Results" />
          <BoardResults />
        </div>
      </section>

      <section className="py-20">
        <div className="container-x max-w-4xl">
          <Reveal className="rounded-2xl border-l-4 border-gold-500 bg-cream p-8 sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-500">Our Educational Philosophy</p>
            <p className="mt-4 font-hindi text-lg leading-9 text-ink">{logoMeaning.philosophy[0]}</p>
            <div className="mt-6">
              <Button href="/about#logo" variant="ghost">Read More</Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
