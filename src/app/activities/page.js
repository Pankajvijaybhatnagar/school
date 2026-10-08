import { ArrowRight, Brain, Flag, Music, ShieldCheck, Users } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import SmartImage from "@/components/ui/SmartImage";
import Icon from "@/components/ui/Icon";
import Button from "@/components/ui/Button";
import GalleryGrid from "@/components/sections/GalleryGrid";
import { activities, features } from "@/data/site";

export const metadata = {
  title: "Activities & NCC",
  description: "Co-curricular life at RPS — NCC, cultural events, felicitation ceremonies, RPS Olympiad 2025, sports meets, clubs and societies.",
};

const nccValues = [
  { icon: ShieldCheck, label: "Discipline" },
  { icon: Flag, label: "Patriotism" },
  { icon: Users, label: "Leadership" },
];

export default function ActivitiesPage() {
  return (
    <>
      <PageHero
        title="Activities &"
        highlight="Campus Life"
        subtitle="Inspiring creativity and helping every student discover their innate talents and aptitudes."
        crumbs={[{ label: "Campus Life", href: "/facilities" }, { label: "Activities" }]}
      />

      <section className="py-20">
        <div className="container-x">
          <SectionHeading eyebrow="Beyond Classrooms" title="Learning Through" highlight="Doing" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {activities.map((a, i) => (
              <Reveal key={a.title} delay={(i % 3) * 0.1}>
                <div className="group h-full rounded-3xl border-b-4 border-brand-600 bg-white p-8 shadow-lg shadow-navy-900/5 ring-1 ring-slate-100 card-lift">
                  <span className="grid h-16 w-16 place-items-center rounded-full bg-navy-800 text-white transition group-hover:bg-brand-600">
                    <Icon name={a.icon} className="h-8 w-8" />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold text-navy-900">{a.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-muted">{a.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {features.map((f) => (
              <span key={f} className="rounded-md bg-gold-100 px-4 py-2 text-sm font-semibold text-navy-900">{f}</span>
            ))}
          </div>
        </div>
      </section>

      <section id="ncc" className="relative scroll-mt-24 overflow-hidden bg-mesh py-20 text-white">
        <div className="absolute inset-0 bg-dots opacity-40" />
        <div className="container-x relative grid items-center gap-12 lg:grid-cols-[320px_1fr]">
          <Reveal from="zoom" className="mx-auto">
            <div className="relative h-64 w-64">
              <SmartImage src="nccLogo" alt="NCC" label="NCC" className="absolute inset-6 rounded-full bg-white" variant="red" imgClassName="!object-contain p-4" />
            </div>
          </Reveal>
          <Reveal from="left">
            <SectionHeading eyebrow="National Cadet Corps" title="NCC at" highlight="RPS" light align="left" />
            <p className="-mt-6 leading-8 text-white/80">
              The NCC wing at RPS builds discipline, leadership, character and a spirit of selfless service to the nation. Cadets take part in parades, camps, drills and national celebrations, carrying forward the motto of &ldquo;Unity and Discipline&rdquo;.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {nccValues.map((v) => (
                <div key={v.label} className="rounded-2xl glass p-4 text-center">
                  <v.icon className="mx-auto h-8 w-8 text-gold-400" />
                  <p className="mt-2 text-sm font-bold">{v.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="container-x grid gap-6 md:grid-cols-2">
          <Reveal from="right">
            <div className="group h-full overflow-hidden rounded-3xl bg-white shadow-xl card-lift">
              <SmartImage src="videoCulturalBridge" alt="RPS Cultural Bridge India-Japan 2026" label="Cultural Bridge India-Japan 2026" className="aspect-video" variant="red" />
              <div className="p-7">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-brand-600"><Music className="h-4 w-4" /> Cultural Events</span>
                <h3 className="mt-2 text-2xl font-semibold text-navy-900">RPS Cultural Bridge India-Japan 2026</h3>
                <p className="mt-2 leading-7 text-muted">Celebrating cultures on one stage — music, dance and friendship between India and Japan, presented by RPS International School, Sector 89, Gurugram.</p>
              </div>
            </div>
          </Reveal>
          <Reveal from="left">
            <div className="group h-full overflow-hidden rounded-3xl bg-white shadow-xl card-lift">
              <SmartImage src="/images/sections/olympiad.jpg" alt="RPS Olympiad 2025" label="RPS Olympiad 2025" className="aspect-video" variant="gold" />
              <div className="p-7">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-brand-600"><Brain className="h-4 w-4" /> Olympiad</span>
                <h3 className="mt-2 text-2xl font-semibold text-navy-900">RPS Olympiad 2025</h3>
                <p className="mt-2 leading-7 text-muted">A platform for young minds to test their knowledge, reasoning and problem-solving skills and compete with the best.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20">
        <div className="container-x">
          <SectionHeading eyebrow="Moments" title="Activity" highlight="Gallery" />
          <GalleryGrid limit={8} filters={false} />
          <div className="mt-10 text-center">
            <Button href="/gallery" variant="navy">View Full Gallery <ArrowRight className="h-4 w-4" /></Button>
          </div>
        </div>
      </section>
    </>
  );
}
