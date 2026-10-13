import { BadgeCheck, BookOpen, CalendarCheck2, Languages, Trophy } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const items = [
  { icon: BadgeCheck, title: "CBSE Affiliated", sub: "Affiliation No. 530999" },
  { icon: CalendarCheck2, title: "Admissions Open", sub: "Session 2027-28" },
  { icon: BookOpen, title: "Nursery to XII", sub: "Senior Secondary School" },
  { icon: Languages, title: "Hindi & English", sub: "Medium of Instruction" },
  { icon: Trophy, title: "100% Results", sub: "Class X & XII, 2025-26" },
];

export default function AwardsStrip() {
  return (
    <section className="border-b border-line bg-white">
      <div className="container-x">
        <Reveal className="grid grid-cols-2 divide-line md:grid-cols-3 lg:grid-cols-5 lg:divide-x">
          {items.map(({ icon: I, title, sub }, i) => (
            <div key={title} className={`group flex items-center gap-4 px-2 py-7 lg:px-6 ${i === 4 ? "col-span-2 md:col-span-1" : ""}`}>
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-gold-500/50 text-gold-500 transition-colors group-hover:bg-navy-900 group-hover:text-gold-400">
                <I className="h-5 w-5" strokeWidth={1.6} />
              </span>
              <span>
                <span className="block font-display text-[15px] font-semibold leading-tight text-navy-900">{title}</span>
                <span className="mt-0.5 block text-xs text-muted">{sub}</span>
              </span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
