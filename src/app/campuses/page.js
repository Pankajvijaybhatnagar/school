import Link from "next/link";
import { ArrowUpRight, MapPin, Phone } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { MainCampuses, OtherCampuses } from "@/components/sections/CampusCards";
import Timeline from "@/components/sections/Timeline";
import { campuses, historyText } from "@/data/site";

export const metadata = {
  title: "RPS Campuses",
  description: "Explore the RPS Group of Schools campuses — Mahendergarh, Rewari, Gurugram Sector 89, Kosli, Balana, Dharuhera, Gurugram Sector 50 and Narnaul.",
};

export default function CampusesPage() {
  return (
    <>
      <PageHero
        title="Our"
        highlight="Campuses"
        subtitle="One legacy, many campuses — spreading value-based education across Haryana since 1998."
        crumbs={[{ label: "RPS Campuses" }]}
      />

      <section className="py-20">
        <div className="container-x">
          <SectionHeading eyebrow="Flagship Schools" title="Main" highlight="Campuses" text="Choose a campus to explore its story, achievements, facilities and contact details." />
          <MainCampuses />
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="container-x">
          <SectionHeading eyebrow="The RPS Family" title="Other" highlight="Campuses" />
          <OtherCampuses />
        </div>
      </section>

      <section className="relative overflow-hidden bg-mesh py-20 text-white">
        <div className="absolute inset-0 bg-dots opacity-40" />
        <div className="container-x relative">
          <SectionHeading eyebrow="Since 1998" title="History of" highlight="RPS" text={historyText} light />
          <Timeline light />
        </div>
      </section>

      <section className="py-20">
        <div className="container-x">
          <SectionHeading eyebrow="Reach Us" title="Campus" highlight="Directory" />
          <div className="grid gap-6 md:grid-cols-3">
            {campuses.map((c, i) => (
              <Reveal key={c.slug} delay={i * 0.1}>
                <div className="flex h-full flex-col rounded-3xl bg-white p-7 shadow-lg shadow-navy-900/5 ring-1 ring-slate-100 card-lift">
                  <p className="text-xs font-bold uppercase tracking-widest text-brand-600">{c.city}</p>
                  <h3 className="mt-1 text-xl font-semibold text-navy-900">{c.fullName}</h3>
                  <p className="mt-1 text-sm text-muted">{c.board}</p>
                  <p className="mt-4 flex gap-2 text-sm text-muted"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" /> {c.address}</p>
                  {c.phones.map((p) => (
                    <a key={p.number} href={`tel:${p.number}`} className="mt-2 flex items-center gap-2 text-sm text-navy-800 hover:text-brand-600">
                      <Phone className="h-4 w-4 text-brand-600" /> {p.label}: {p.number}
                    </a>
                  ))}
                  <Link href={`/campuses/${c.slug}`} className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-bold text-brand-600">
                    Visit campus page <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
