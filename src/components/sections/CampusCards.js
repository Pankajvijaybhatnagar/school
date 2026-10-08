import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { campuses, otherCampuses } from "@/data/site";
import SmartImage from "@/components/ui/SmartImage";
import Reveal from "@/components/ui/Reveal";

export function MainCampuses() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {campuses.map((c, i) => (
        <Reveal key={c.slug} delay={i * 0.12}>
          <Link href={`/campuses/${c.slug}`} className="group relative block h-[440px] overflow-hidden rounded-2xl shadow-xl shadow-navy-900/15">
            <SmartImage src={c.image} alt={`${c.name}, ${c.city}`} label={`${c.name}, ${c.city}`} className="absolute inset-0 transition duration-700 group-hover:scale-110" variant={["navy", "red", "gold"][i]} />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />
            <span className="absolute right-5 top-5 rounded-md bg-gold-500 px-3 py-1 text-xs font-bold text-navy-950">{c.admissions}</span>
            <div className="absolute inset-x-0 bottom-0 p-7 text-white">
              <p className="flex items-center gap-1.5 text-sm font-semibold text-gold-400"><MapPin className="h-4 w-4" /> {c.area}, {c.city}</p>
              <h3 className="mt-1 text-2xl font-semibold">{c.name}</h3>
              <p className="mt-2 line-clamp-2 text-sm text-white/75">{c.tagline} — {c.board}</p>
              <span className="mt-5 inline-flex items-center gap-2 rounded-md bg-white/15 px-4 py-2 text-sm font-bold backdrop-blur transition group-hover:bg-brand-600">
                Explore Campus <ArrowUpRight className="h-4 w-4 transition group-hover:rotate-45" />
              </span>
            </div>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}

export function OtherCampuses() {
  return (
    <div className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-4 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:grid-cols-5">
      {otherCampuses.map((c, i) => (
        <Reveal key={c.name} delay={i * 0.08} className="w-64 shrink-0 snap-start sm:w-auto">
          <div className="group overflow-hidden rounded-3xl bg-white shadow-lg shadow-navy-900/10 card-lift">
            <SmartImage src={c.image} alt={c.name} label={c.name} className="aspect-[4/3] transition duration-700 group-hover:scale-105" variant={["navy", "red", "gold", "navy", "red"][i]} />
            <div className="bg-navy-800 px-4 py-3 text-center">
              <p className="text-sm font-semibold uppercase tracking-wide text-white">{c.name}</p>
              {c.since && <p className="text-xs text-gold-400">Since {c.since}</p>}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
