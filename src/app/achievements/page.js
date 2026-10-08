import { Medal, Sparkles, Stethoscope, Trophy } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import CbseResults from "@/components/sections/CbseResults";
import NeetTable from "@/components/sections/NeetTable";
import VideoGrid from "@/components/sections/VideoGrid";
import { cbseX2026, neet2026, videos } from "@/data/site";

export const metadata = {
  title: "Achievements",
  description: "NEET 2026: 140 RPSians scored 500 & above. CBSE Class X 2026: 64 students 99%+, 1668 students 90%+, top score 99.6%.",
};

const banners = [
  { icon: Stethoscope, value: `${neet2026.above500}`, label: "RPSians scored 500+ in NEET 2026", href: "#neet" },
  { icon: Trophy, value: `${cbseX2026.topScore}%`, label: "Top marks in CBSE Class X 2026", href: "#cbse" },
  { icon: Medal, value: `${cbseX2026.bands[0].students}`, label: "Students scored 99% & above", href: "#cbse" },
  { icon: Sparkles, value: `${cbseX2026.bands[5].students}`, label: "Students scored 90% & above", href: "#cbse" },
];

const resultVideos = videos.filter((v) => /NEET|CBSE|Felicitation/i.test(v.title));

export default function AchievementsPage() {
  return (
    <>
      <PageHero title="Our" highlight="Achievements" subtitle="Numbers that speak louder than words. Unstoppable. Unbeatable. Unmatched." crumbs={[{ label: "Achievements" }]} />

      <section className="relative -mt-6 pb-10">
        <div className="container-x grid grid-cols-2 gap-4 lg:grid-cols-4">
          {banners.map((b, i) => (
            <Reveal key={b.label} delay={i * 0.08}>
              <a href={b.href} className="group flex h-full flex-col rounded-3xl bg-white p-6 shadow-xl shadow-navy-900/10 ring-1 ring-slate-100 card-lift">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-navy-800 text-white"><b.icon className="h-6 w-6" /></span>
                <p className="mt-4 font-display text-4xl font-bold text-navy-900">{b.value}</p>
                <p className="mt-1 text-sm text-muted">{b.label}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="neet" className="scroll-mt-28 bg-cream py-20">
        <div className="container-x">
          <SectionHeading eyebrow="Powerhouse of Medical Aspirants" title="NEET Achievers" highlight="2026" text={`${neet2026.above500} RPSians scored 500 & above marks. Search the full list of our achievers below.`} />
          <NeetTable />
        </div>
      </section>

      <section id="cbse" className="scroll-mt-28 py-20">
        <div className="container-x">
          <SectionHeading eyebrow={cbseX2026.sub} title="CBSE Class X" highlight="2026" text={cbseX2026.heading} />
          <CbseResults />
        </div>
      </section>

      <section className="relative overflow-hidden bg-mesh py-20 text-white">
        <div className="absolute inset-0 bg-dots opacity-40" />
        <div className="container-x relative">
          <SectionHeading light eyebrow="Watch" title="Celebrating Our" highlight="Champions" />
          <VideoGrid items={resultVideos} featured={false} />
        </div>
      </section>
    </>
  );
}
