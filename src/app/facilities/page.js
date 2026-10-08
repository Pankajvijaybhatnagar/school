import { ArrowRight } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import SmartImage from "@/components/ui/SmartImage";
import Icon from "@/components/ui/Icon";
import Button from "@/components/ui/Button";
import GalleryGrid from "@/components/sections/GalleryGrid";
import { facilities, lifeAtRps, whyChoose } from "@/data/site";

export const metadata = {
  title: "Facilities",
  description: "World class facilities at RPS — smart classrooms, 3 computer labs with 150+ computers, science labs, library, sports complex and three grand swimming pools.",
};

export default function FacilitiesPage() {
  return (
    <>
      <PageHero
        title="World Class"
        highlight="Facilities"
        subtitle="Green, open campuses designed for learning, play and all-round development."
        crumbs={[{ label: "Campus Life", href: "/facilities" }, { label: "Facilities" }]}
      />

      <section className="py-20">
        <div className="container-x">
          <SectionHeading eyebrow="Infrastructure" title="Everything a Learner" highlight="Needs" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {facilities.map((f, i) => (
              <Reveal key={f.title} delay={(i % 3) * 0.1}>
                <div className="group relative h-full overflow-hidden rounded-3xl bg-white p-8 shadow-lg shadow-navy-900/5 ring-1 ring-slate-100 card-lift">
                  <span className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gold-100 transition-all duration-500 group-hover:scale-[5] group-hover:bg-navy-900" />
                  <div className="relative">
                    <span className="grid h-16 w-16 place-items-center rounded-2xl bg-navy-800 text-white shadow-lg transition group-hover:rotate-6">
                      <Icon name={f.icon} className="h-8 w-8" />
                    </span>
                    <h3 className="mt-6 text-xl font-semibold text-navy-900 transition group-hover:text-white">{f.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-muted transition group-hover:text-white/80">{f.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy-800 py-20 text-white">
        <div className="absolute inset-0 bg-dots opacity-30" />
        <div className="container-x relative">
          <Reveal className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="font-serif text-5xl font-bold italic">Life @ RPS</h2>
            <p className="mt-4 text-white/90">{lifeAtRps.text}</p>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {lifeAtRps.cards.map((card, i) => (
              <Reveal key={card.title} delay={i * 0.12}>
                <div className="group h-full overflow-hidden rounded-3xl bg-white text-ink shadow-xl card-lift">
                  <SmartImage src={card.image} alt={card.title} label={card.title} className="aspect-video transition duration-700 group-hover:scale-105" />
                  <div className="p-7">
                    <h3 className="text-2xl font-semibold text-navy-900">{card.title}</h3>
                    <p className="mt-2 leading-7 text-muted">{card.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="container-x">
          <SectionHeading eyebrow="Why Choose RPS?" title="Built for" highlight="Excellence" />
          <div className="grid gap-6 md:grid-cols-3">
            {whyChoose.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.1}>
                <div className="h-full rounded-3xl bg-navy-900 p-8 text-white shadow-xl card-lift">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gold-500 text-navy-950"><Icon name={w.icon} className="h-7 w-7" /></span>
                  <h3 className="mt-5 text-xl font-semibold">{w.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-white/75">{w.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-x">
          <SectionHeading eyebrow="Glimpses" title="Campus" highlight="Gallery" />
          <GalleryGrid limit={8} filters={false} />
          <div className="mt-10 text-center">
            <Button href="/gallery" variant="navy">View Full Gallery <ArrowRight className="h-4 w-4" /></Button>
          </div>
        </div>
      </section>
    </>
  );
}
