import Link from "next/link";
import { ArrowRight } from "lucide-react";
import HeroSlider from "@/components/home/HeroSlider";
import AwardsStrip from "@/components/home/AwardsStrip";
import Welcome from "@/components/home/Welcome";
import CampusLife from "@/components/home/CampusLife";
import LeaderMessage from "@/components/sections/LeaderMessage";
import { chairman } from "@/data/site";
import AdmissionBanner from "@/components/home/AdmissionBanner";
import Ticker from "@/components/layout/Ticker";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import BoardResults from "@/components/sections/BoardResults";
import LogoMeaning from "@/components/sections/LogoMeaning";
import StatsBand from "@/components/sections/StatsBand";
import Leadership from "@/components/sections/Leadership";
import Timeline from "@/components/sections/Timeline";
import GalleryGrid from "@/components/sections/GalleryGrid";
import { featuredGallery } from "@/data/images";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <Ticker />
      <AwardsStrip />
      <Welcome />
      <LeaderMessage person={chairman} id="chairman" eyebrow="From the Chairman's Desk" />
      <CampusLife />

      {/* Board results */}
      <section id="results" className="relative overflow-hidden bg-cream py-24">
        <div className="pointer-events-none absolute inset-0 bg-dots-dark" />
        <div className="container-x relative">
          <SectionHeading eyebrow="CBSE Board Examination" title="Our Board" highlight="Results" text="Results of Class X and Class XII for the last three years — 100% in both classes in 2025-26." />
          <BoardResults />
        </div>
      </section>

      {/* Logo & motto */}
      <section className="bg-white py-24">
        <div className="container-x">
          <SectionHeading eyebrow="Our Logo" title="Sun, Conch, Lamp &" highlight="Lotus" />
          <LogoMeaning />
          <div className="mt-12 text-center">
            <Button href="/about#logo" variant="navy">Read the Full Meaning <ArrowRight className="h-4 w-4" /></Button>
          </div>
        </div>
      </section>

      <AdmissionBanner />
      <StatsBand />

      {/* Leadership */}
      <section className="bg-cream py-24">
        <div className="container-x">
          <SectionHeading eyebrow="Guiding Lights" title="Our" highlight="Leadership" />
          <Leadership />
        </div>
      </section>

      {/* History */}
      <section className="relative overflow-hidden bg-navy-950 py-24 text-white">
        <div className="absolute inset-0 bg-dots opacity-30" />
        <div className="container-x relative">
          <SectionHeading light eyebrow="Our History" title="A Legacy Since" highlight="1968" text="From Shri Lajja Ram Sanskrit Mahavidyalaya in the Rishikul tradition to a CBSE Senior Secondary school offering modern education with sanskaras." />
          <Timeline light />
          <div className="mt-12 text-center">
            <Button href="/about#history" variant="gold">View More <ArrowRight className="h-4 w-4" /></Button>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-cream py-24">
        <div className="container-x">
          <SectionHeading eyebrow="Our Gallery" title="Life in" highlight="Pictures" />
          <GalleryGrid items={featuredGallery} limit={10} filters={false} layout="bento" />
          <div className="mt-10 text-center">
            <Link href="/gallery" className="inline-flex items-center gap-2 font-bold text-brand-600 hover:gap-3">
              View Full Gallery <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
