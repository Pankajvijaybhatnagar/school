import { BadgeCheck, BookOpen, Building2, Languages } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import SmartImage from "@/components/ui/SmartImage";
import Button from "@/components/ui/Button";
import StatsBand from "@/components/sections/StatsBand";
import Timeline from "@/components/sections/Timeline";
import Leadership from "@/components/sections/Leadership";
import LogoMeaning from "@/components/sections/LogoMeaning";
import PhotoStrip from "@/components/sections/PhotoStrip";
import LeaderMessage from "@/components/sections/LeaderMessage";
import { aboutEn, aboutHi, chairman, school, viceChairman } from "@/data/site";

export const metadata = {
  title: "About Us",
  description: "About Shri Lajja Ram Bashesar Dass Gurukul Vidyapeeth, Jind — founded on Vasant Panchami, 2 February 2006, in the Rishikul tradition of Shri Lajja Ram Sanskrit Mahavidyalaya (1968).",
};

const facts = [
  { icon: BadgeCheck, title: "CBSE Affiliated", text: `Affiliation No. ${school.affiliationNo} • School Code ${school.schoolCode} • Valid ${school.affiliationPeriod}` },
  { icon: BookOpen, title: school.classes, text: `${school.level} school for boys and girls` },
  { icon: Languages, title: school.medium, text: "Curriculum as prescribed by CBSE, New Delhi" },
  { icon: Building2, title: "Sigma Vidya Kunj", text: "About 2 acres of land and a large school building at Pandu-Pindara, Gohana Road, Jind" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero image="/images/photos/campus-building.jpg"
        title="About"
        highlight="Gurukul Vidyapeeth"
        subtitle={school.tagline}
        crumbs={[{ label: "About Us" }]}
      />

      {/* Welcome */}
      <section className="py-20">
        <div className="container-x grid items-start gap-14 lg:grid-cols-[2fr_3fr]">
          <Reveal from="right" className="lg:sticky lg:top-28">
            <div className="relative mx-auto max-w-sm">
              <div className="absolute -inset-3 rounded-full border border-gold-500/60" />
              <SmartImage src="logo" alt={`${school.name} logo`} className="relative aspect-square rounded-full bg-white shadow-xl" imgClassName="!object-contain" variant="light" />
            </div>
            <p className="mt-10 text-center font-hindi text-2xl text-navy-900">{school.taglineHi}</p>
            <div className="mt-8 grid gap-3">
              {facts.map((f) => (
                <div key={f.title} className="flex items-start gap-4 rounded-xl bg-cream p-4 ring-1 ring-gold-500/20">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-navy-900 text-gold-400"><f.icon className="h-5 w-5" /></span>
                  <span>
                    <span className="block font-semibold text-navy-900">{f.title}</span>
                    <span className="block text-sm text-muted">{f.text}</span>
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal from="left">
            <SectionHeading align="left" eyebrow="About Us" title="Welcome to" highlight="Gurukul Vidyapeeth" />
            <div className="-mt-6 space-y-5 text-base leading-8 text-muted">
              {aboutEn.map((p) => <p key={p.slice(0, 24)}>{p}</p>)}
            </div>
            <div className="mt-10 rounded-2xl border-l-4 border-gold-500 bg-cream p-6 sm:p-8">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-gold-500">हमारे बारे में</p>
              <div className="space-y-5 font-hindi text-[17px] leading-9 text-ink">
                {aboutHi.map((p) => <p key={p.slice(0, 24)}>{p}</p>)}
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/admission">Admissions 2027-28</Button>
              <Button href="/mandatory-disclosure" variant="ghost">Mandatory Disclosure</Button>
            </div>
          </Reveal>
        </div>
      </section>

      <LeaderMessage person={chairman} id="chairman" eyebrow="From the Chairman's Desk" full />
      <LeaderMessage person={viceChairman} id="vice-chairman" eyebrow="From the Vice Chairman's Desk" full flip tone="white" />

      {/* Life at Gurukul */}
      <section className="py-20">
        <SectionHeading eyebrow="Life at Gurukul" title="Moments That" highlight="Shape Us" />
        <PhotoStrip />
        <div className="mt-10 text-center">
          <Button href="/gallery" variant="navy">View Photo Gallery</Button>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-cream py-20">
        <div className="container-x">
          <SectionHeading eyebrow="Leadership" title="The Visionaries Behind" highlight="Gurukul" text={`${school.fullName} is run by ${school.society}.`} />
          <Leadership />
        </div>
      </section>

      {/* History */}
      <section id="history" className="relative scroll-mt-28 overflow-hidden bg-mesh py-20 text-white">
        <div className="absolute inset-0 bg-dots opacity-40" />
        <div className="container-x relative">
          <SectionHeading light eyebrow="Since 1968" title="Our" highlight="History" text="Rooted in the Rishikul tradition of Shri Lajja Ram Sanskrit Mahavidyalaya, Tirth Pandu-Pindara, Jind." />
          <Timeline light />
        </div>
      </section>

      {/* Logo */}
      <section id="logo" className="scroll-mt-28 bg-cream py-20">
        <div className="container-x">
          <SectionHeading eyebrow="ध्येय चिह्न" title="Our Logo &" highlight="Motto" />
          <LogoMeaning full />
        </div>
      </section>

      <StatsBand />
    </>
  );
}
