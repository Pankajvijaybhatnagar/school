import { Award, Globe2, GraduationCap, Languages, Lightbulb, MapPin } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import SmartImage from "@/components/ui/SmartImage";
import Button from "@/components/ui/Button";
import { collaboration } from "@/data/site";

export const metadata = {
  title: "Collaboration",
  description: "RPS International School, Sector 89, Gurugram is a Cambridge International School — Cambridge International Education alongside CBSE.",
};

const badges = [
  { src: "badgeCambridge", label: "Cambridge International Education" },
  { src: "badgeISA", label: "International School Award 2020-2023" },
  { src: "badgeTop5", label: "Top 5 School of India Award-2025" },
  { src: "badge28Years", label: "28 Years — Excellence in Education" },
];

const benefits = [
  { icon: Globe2, title: "Global Perspective", text: "An internationally benchmarked approach that prepares students for a connected world." },
  { icon: Lightbulb, title: "Inquiry-based Learning", text: "Encourages curiosity, critical thinking and independent research." },
  { icon: Languages, title: "Communication Skills", text: "Strong emphasis on expression, presentation and collaboration." },
  { icon: GraduationCap, title: "Future Ready", text: "Builds the confidence and skills valued by universities worldwide." },
];

export default function CollaborationPage() {
  return (
    <>
      <PageHero title="Global" highlight="Collaboration" subtitle={collaboration.title} crumbs={[{ label: "Academics", href: "/academics" }, { label: "Collaboration" }]} />

      <section className="py-20">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal from="right">
            <SectionHeading align="left" eyebrow="Cambridge International School" title="Cambridge International" highlight="Education" />
            <p className="-mt-4 text-base leading-8 text-muted">{collaboration.text}</p>
            <p className="mt-5 flex items-center gap-2 text-sm font-semibold text-navy-800">
              <MapPin className="h-4 w-4 text-brand-600" /> {collaboration.campus}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/campuses/gurugram-sector-89">Visit Sector 89 Campus</Button>
              <Button href="/admission" variant="ghost">Admissions 2027-28</Button>
            </div>
          </Reveal>
          <Reveal from="left" className="grid grid-cols-2 gap-4">
            {badges.map((b, i) => (
              <div key={b.src} className={`rounded-3xl bg-white p-5 text-center shadow-xl shadow-navy-900/5 ring-1 ring-slate-100 card-lift ${i % 2 ? "mt-8" : ""}`}>
                <SmartImage src={b.src} alt={b.label} label={b.label} variant="light" className="mx-auto aspect-square w-full max-w-36 rounded-2xl" imgClassName="!object-contain" />
                <p className="mt-4 text-sm font-bold text-navy-900">{b.label}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="container-x">
          <SectionHeading eyebrow="Why it matters" title="The Cambridge" highlight="Advantage" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 0.08}>
                <div className="h-full rounded-3xl bg-white p-7 shadow-lg shadow-navy-900/5 card-lift">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-navy-800 text-white"><b.icon className="h-6 w-6" /></span>
                  <h3 className="mt-5 text-lg font-semibold text-navy-900">{b.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-muted">{b.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-mesh py-16 text-white">
        <div className="absolute inset-0 bg-dots opacity-40" />
        <div className="container-x relative grid gap-4 sm:grid-cols-3">
          {collaboration.awards.map((a, i) => (
            <Reveal key={a} delay={i * 0.1} className="flex items-center gap-4 rounded-3xl glass p-6">
              <Award className="h-10 w-10 shrink-0 text-gold-400" />
              <p className="font-bold">{a}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
