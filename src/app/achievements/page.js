import { GraduationCap, Medal, Trophy, Users } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import BoardResults from "@/components/sections/BoardResults";
import { boardResults } from "@/data/site";

export const metadata = {
  title: "Board Results",
  description: "CBSE Board results of Gurukul Vidyapeeth, Jind — 100% in Class X and Class XII in 2025-26. Last three years' results of Class X and XII.",
};

const sum = (rows, k) => rows.reduce((t, r) => t + r[k], 0);
const latestX = boardResults.X.at(-1);
const latestXII = boardResults.XII.at(-1);

const banners = [
  { icon: Trophy, value: `${latestX.pct}%`, label: `Class X result ${latestX.year}` },
  { icon: Medal, value: `${latestXII.pct}%`, label: `Class XII result ${latestXII.year}` },
  { icon: Users, value: `${sum(boardResults.X, "passed") + sum(boardResults.XII, "passed")}`, label: "Students passed in the last 3 years" },
  { icon: GraduationCap, value: `${sum(boardResults.X, "registered") + sum(boardResults.XII, "registered")}`, label: "Students appeared in the last 3 years" },
];

export default function AchievementsPage() {
  return (
    <>
      <PageHero title="Board" highlight="Results" subtitle="CBSE Board Examination results of Class X and Class XII for the last three years." crumbs={[{ label: "Results" }]} />

      <section className="relative -mt-6 pb-10">
        <div className="container-x grid grid-cols-2 gap-4 lg:grid-cols-4">
          {banners.map((b, i) => (
            <Reveal key={b.label} delay={i * 0.08}>
              <div className="flex h-full flex-col rounded-3xl bg-white p-6 shadow-xl shadow-navy-900/10 ring-1 ring-slate-100">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-navy-800 text-white"><b.icon className="h-6 w-6" /></span>
                <p className="mt-4 font-display text-4xl font-bold text-navy-900">{b.value}</p>
                <p className="mt-1 text-sm text-muted">{b.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="container-x">
          <SectionHeading eyebrow="CBSE Board Examination" title="Class X &" highlight="Class XII" text="Number of registered students, students passed and pass percentage, as published in the school's Mandatory Public Disclosure." />
          <BoardResults />
        </div>
      </section>
    </>
  );
}
