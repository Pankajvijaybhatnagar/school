import { Award, BadgeCheck, CalendarCheck2, Globe2, Medal } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const items = [
  { icon: CalendarCheck2, title: "Admissions Open", sub: "Session 2026-27 & 2027-28" },
  { icon: Medal, title: "Top 5 School of India", sub: "Award-2025" },
  { icon: Globe2, title: "International School Award", sub: "2020-2023" },
  { icon: BadgeCheck, title: "Cambridge International", sub: "Sector 89, Gurugram" },
  { icon: Award, title: "28 Years", sub: "Excellence in Education" },
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
