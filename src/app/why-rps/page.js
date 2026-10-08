import { CheckCircle2, Trophy } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Icon from "@/components/ui/Icon";
import Counter from "@/components/ui/Counter";
import SmartImage from "@/components/ui/SmartImage";
import Button from "@/components/ui/Button";
import Testimonials from "@/components/sections/Testimonials";
import EnquiryButton from "@/components/sections/EnquiryButton";
import { campuses, cbseX2026, features, neet2026, streams, whyChoose } from "@/data/site";

export const metadata = {
  title: "Why Only RPS",
  description: "Why parents choose RPS — world class facilities, sports infrastructure, IIT/NEET/NDA/NTSE/CLAT/CPT preparation and record-breaking NEET and CBSE results.",
};

const rewari = campuses.find((c) => c.slug === "rewari");

export default function WhyRpsPage() {
  const results = [
    { value: neet2026.above500, label: "RPSians scored 500+ in NEET 2026" },
    { value: cbseX2026.bands[0].students, label: "Students scored 99%+ in CBSE X 2026" },
    { value: cbseX2026.bands[5].students, label: "Students scored 90%+ in CBSE X 2026" },
  ];

  return (
    <>
      <PageHero title="Why Only" highlight="RPS?" subtitle="28 years of trust, results that speak louder than words, and campuses built for all-round development." crumbs={[{ label: "About Us", href: "/about" }, { label: "Why Only RPS" }]} />

      <section className="py-20">
        <div className="container-x">
          <SectionHeading eyebrow="The RPS Advantage" title="Why Choose" highlight="RPS" />
          <div className="grid gap-6 md:grid-cols-3">
            {whyChoose.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.1}>
                <div className="group relative h-full overflow-hidden rounded-3xl bg-navy-900 p-8 text-white shadow-xl card-lift">
                  <div className="absolute inset-0 bg-dots opacity-30" />
                  <span className="absolute -bottom-6 -right-4 font-display text-[7rem] font-bold leading-none text-white/5">0{i + 1}</span>
                  <span className="relative grid h-16 w-16 place-items-center rounded-2xl bg-navy-800 shadow-lg transition group-hover:rotate-6">
                    <Icon name={w.icon} className="h-8 w-8" />
                  </span>
                  <h3 className="relative mt-6 text-xl font-semibold">{w.title}</h3>
                  <p className="relative mt-3 text-sm leading-7 text-white/75">{w.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="container-x">
          <SectionHeading eyebrow="Competitive Edge" title="Preparation for" highlight="Every Dream" text="Integrated guidance for India's most competitive examinations, right alongside the school curriculum." />
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {streams.map((s, i) => (
              <Reveal key={s.name} delay={i * 0.06} from="zoom">
                <div className="group h-full rounded-3xl bg-white p-6 text-center shadow-lg shadow-navy-900/5 ring-1 ring-slate-100 card-lift">
                  <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-gold-100 text-brand-600 transition group-hover:bg-brand-600 group-hover:text-white">
                    <Icon name={s.icon} className="h-7 w-7" />
                  </span>
                  <p className="mt-4 font-display text-xl font-bold text-navy-900">{s.name}</p>
                  <p className="mt-1 text-xs text-muted">{s.full}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-mesh py-20 text-white">
        <div className="absolute inset-0 bg-dots opacity-40" />
        <div className="container-x relative grid items-center gap-12 lg:grid-cols-2">
          <Reveal from="right">
            <span className="inline-flex items-center gap-2 rounded-md bg-white/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-gold-400">
              <Trophy className="h-4 w-4" /> Are You Ready For Join With RPS
            </span>
            <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">{rewari.joinTitle}</h2>
            <div className="mt-5 space-y-4 text-white/75">
              {rewari.joinText.map((t) => <p key={t.slice(0, 20)}>{t}</p>)}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/achievements" variant="gold">See All Results</Button>
              <Button href="/achievements#neet" variant="outline">NEET Achievers 2026</Button>
            </div>
          </Reveal>
          <div className="grid gap-4">
            {results.map((r, i) => (
              <Reveal key={r.label} delay={i * 0.12} from="left">
                <div className="flex items-center gap-6 rounded-3xl glass p-6">
                  <p className="min-w-28 font-display text-5xl font-bold text-gold-400"><Counter value={r.value} /></p>
                  <p className="text-lg font-semibold">{r.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal from="right" className="relative">
            <SmartImage src="lifeSpeaker" alt="Life at RPS" label="Life @ RPS" className="aspect-[4/3] rounded-2xl shadow-xl" />
            <div className="absolute -bottom-6 -right-2 rounded-2xl bg-brand-600 px-6 py-4 text-white shadow-xl sm:-right-6">
              <p className="font-display text-3xl font-bold">14+</p>
              <p className="text-xs font-bold uppercase tracking-wider">Acres — Rewari Campus</p>
            </div>
          </Reveal>
          <div>
            <SectionHeading align="left" eyebrow="Holistic Growth" title="More than" highlight="Academics" text="RPS is committed to the holistic development of kids, trying to create the greatest academic and extracurricular skills in them." />
            <ul className="-mt-4 grid gap-3 sm:grid-cols-2">
              {features.map((f, i) => (
                <Reveal key={f} delay={i * 0.05}>
                  <li className="flex items-center gap-3 rounded-2xl bg-white p-4 font-semibold text-navy-900 shadow ring-1 ring-slate-100">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-500" /> {f}
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="container-x">
          <SectionHeading eyebrow="Our Students Testimonials" title="Students' say About" highlight="RPS" />
          <Testimonials />
        </div>
      </section>

      <section className="py-20">
        <div className="container-x">
          <Reveal className="relative overflow-hidden rounded-2xl bg-navy-800 p-10 text-center text-white sm:p-16">
            <div className="absolute inset-0 bg-dots opacity-40" />
            <h2 className="relative text-3xl font-semibold sm:text-4xl">Ready to become an RPSian?</h2>
            <p className="relative mx-auto mt-3 max-w-xl text-white/85">Admissions Open 2026-27 at all RPS campuses.</p>
            <div className="relative mt-8 flex flex-wrap justify-center gap-3">
              <EnquiryButton className="bg-white text-brand-700 hover:bg-navy-950 hover:text-white">Apply Now</EnquiryButton>
              <Button href="/campuses" variant="outline">Explore Campuses</Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
