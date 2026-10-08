import { BookOpenCheck, Download, FlaskConical, Globe2, Monitor, Presentation, Target } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Icon from "@/components/ui/Icon";
import SmartImage from "@/components/ui/SmartImage";
import Button from "@/components/ui/Button";
import { lifeAtRps, streams } from "@/data/site";

export const metadata = {
  title: "Academics",
  description: "CBSE curriculum, Cambridge International Education at Sector 89 Gurugram, smart classrooms, labs and integrated IIT, NEET, NDA, NTSE, CLAT and CPT preparation at RPS.",
};

const curriculum = [
  { icon: BookOpenCheck, title: "CBSE Curriculum", text: "All RPS schools follow the Central Board of Secondary Education curriculum, with a strong focus on concepts, values and life-skills." },
  { icon: Globe2, title: "Cambridge International", text: "RPS International School, Sector 89, Gurugram is a Cambridge International School offering globally recognised Cambridge International Education.", href: "/collaboration" },
  { icon: Target, title: "Competitive Coaching", text: "Integrated preparation for IIT, NEET, NDA, NTSE, CLAT and CPT — so students never have to choose between school and their dreams." },
];

const infra = [
  { icon: Presentation, title: "Smart Classrooms", text: "Technology-enabled classrooms that make learning interactive and engaging." },
  { icon: Monitor, title: "Computer Labs", text: "3 internet-connected computer labs with over 150 computers of the latest version and software." },
  { icon: FlaskConical, title: "Well-furnished Labs", text: "Well-equipped science laboratories for hands-on experiments and discovery." },
];

export default function AcademicsPage() {
  return (
    <>
      <PageHero title="Academics at" highlight="RPS" subtitle="A strong CBSE foundation, global Cambridge exposure and integrated competitive-exam preparation." crumbs={[{ label: "Academics" }]} />

      <section className="py-20">
        <div className="container-x">
          <SectionHeading eyebrow="Curriculum" title="Learning that" highlight="Builds Leaders" />
          <div className="grid gap-6 md:grid-cols-3">
            {curriculum.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.1}>
                <div className="group flex h-full flex-col rounded-3xl bg-white p-8 shadow-lg shadow-navy-900/5 ring-1 ring-slate-100 card-lift">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-navy-800 text-white shadow-lg transition group-hover:rotate-6">
                    <c.icon className="h-7 w-7" />
                  </span>
                  <h3 className="mt-6 text-xl font-semibold text-navy-900">{c.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-7 text-muted">{c.text}</p>
                  {c.href && <Button href={c.href} variant="ghost" className="mt-6 self-start">Learn More</Button>}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-mesh py-20 text-white">
        <div className="absolute inset-0 bg-dots opacity-40" />
        <div className="container-x relative">
          <SectionHeading light eyebrow="Streams & Coaching" title="Preparing for" highlight="Every Dream" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {streams.map((s, i) => (
              <Reveal key={s.name} delay={i * 0.07} from="zoom">
                <div className="group flex items-center gap-5 rounded-3xl glass p-6 transition hover:-translate-y-1 hover:bg-white/15">
                  <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-white text-brand-600 shadow-lg transition group-hover:bg-gold-500 group-hover:text-navy-950">
                    <Icon name={s.icon} className="h-8 w-8" />
                  </span>
                  <div>
                    <p className="font-display text-2xl font-bold">{s.name}</p>
                    <p className="text-sm text-white/75">{s.full}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12 flex flex-col items-center justify-between gap-5 rounded-3xl bg-white/10 p-6 sm:flex-row">
            <div>
              <p className="text-lg font-bold">NEET 2026 Question Paper</p>
              <p className="text-sm text-white/70">Download the NEET 2026 paper for practice and analysis.</p>
            </div>
            <Button href="/downloads" variant="gold"><Download className="h-4 w-4" /> Download Paper</Button>
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

      <section className="relative overflow-hidden bg-navy-800 py-20 text-white">
        <div className="absolute inset-0 bg-dots opacity-30" />
        <div className="container-x relative">
          <Reveal className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="font-serif text-5xl italic">Life @ RPS</h2>
            <p className="mt-4 text-white/90">{lifeAtRps.text}</p>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {lifeAtRps.cards.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.12}>
                <div className="group h-full overflow-hidden rounded-2xl bg-white text-ink shadow-xl">
                  <SmartImage src={c.image} alt={c.title} label={c.title} className="aspect-[16/9] transition duration-700 group-hover:scale-105" />
                  <div className="p-7">
                    <h3 className="text-xl font-semibold text-navy-900">{c.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-muted">{c.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
