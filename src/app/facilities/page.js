import { ArrowRight } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Icon from "@/components/ui/Icon";
import Button from "@/components/ui/Button";
import GalleryGrid from "@/components/sections/GalleryGrid";
import VideoGrid from "@/components/sections/VideoGrid";
import StatsBand from "@/components/sections/StatsBand";
import FacilityShowcase from "@/components/sections/FacilityShowcase";
import { campusGallery } from "@/data/images";
import { facilities } from "@/data/site";

export const metadata = {
  title: "Facilities",
  description: "Facilities at Gurukul Vidyapeeth, Jind — 20 classrooms, 6 laboratories including computer lab, internet facility, transport and a 20,088 sq. m campus.",
};

export default function FacilitiesPage() {
  return (
    <>
      <PageHero image="/images/photos/campus-front.webp"
        title="Our"
        highlight="Facilities"
        subtitle="The campus ‘Sigma Vidya Kunj’ at Pandu Pindara, Gohana Road, Jind."
        crumbs={[{ label: "Campus Life", href: "/facilities" }, { label: "Facilities" }]}
      />

      <section className="py-20">
        <div className="container-x">
          <SectionHeading eyebrow="Infrastructure" title="Everything a Learner" highlight="Needs" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {facilities.map((f, i) => (
              <Reveal key={f.title} delay={(i % 4) * 0.1}>
                <div className="group relative h-full overflow-hidden rounded-3xl bg-ivory p-8 shadow-lg shadow-maroon-900/5 ring-1 ring-line card-lift">
                  <span className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gold-100 transition-all duration-500 group-hover:scale-[5] group-hover:bg-maroon-900" />
                  <div className="relative">
                    <span className="grid h-16 w-16 place-items-center rounded-2xl bg-maroon-800 text-white shadow-lg transition group-hover:rotate-6">
                      <Icon name={f.icon} className="h-8 w-8" />
                    </span>
                    <h3 className="mt-6 text-xl font-semibold text-maroon-900 transition group-hover:text-white">{f.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-muted transition group-hover:text-white/80">{f.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-24">
        <div className="container-x">
          <SectionHeading eyebrow="Inside Our Campus" title="A Closer" highlight="Look" text="Real moments from our labs, library, classrooms and playgrounds." />
          <FacilityShowcase />
        </div>
      </section>

      <StatsBand />

      <section className="py-20">
        <div className="container-x">
          <SectionHeading eyebrow="Campus Tour" title="See Our" highlight="Infrastructure" text="The inspection video of the school covering its infrastructure." />
          <VideoGrid />
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="container-x">
          <SectionHeading eyebrow="Glimpses" title="Campus" highlight="Gallery" />
          <GalleryGrid items={campusGallery} limit={10} filters={false} layout="bento" />
          <div className="mt-10 text-center">
            <Button href="/gallery" variant="maroon">View Full Gallery <ArrowRight className="h-4 w-4" /></Button>
          </div>
        </div>
      </section>
    </>
  );
}
