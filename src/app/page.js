import Link from "next/link";
import { ArrowRight } from "lucide-react";
import HeroSlider from "@/components/home/HeroSlider";
import AwardsStrip from "@/components/home/AwardsStrip";
import Welcome from "@/components/home/Welcome";
import NewsCalendar from "@/components/home/NewsCalendar";
import Streams from "@/components/home/Streams";
import AdmissionBanner from "@/components/home/AdmissionBanner";
import LifeAtRps from "@/components/home/LifeAtRps";
import SocialFeeds from "@/components/home/SocialFeeds";
import Ticker from "@/components/layout/Ticker";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import CbseResults from "@/components/sections/CbseResults";
import NeetTable from "@/components/sections/NeetTable";
import StatsBand from "@/components/sections/StatsBand";
import PrincipalMessage from "@/components/sections/PrincipalMessage";
import { MainCampuses, OtherCampuses } from "@/components/sections/CampusCards";
import Timeline from "@/components/sections/Timeline";
import VideoGrid from "@/components/sections/VideoGrid";
import GalleryGrid from "@/components/sections/GalleryGrid";
import Testimonials from "@/components/sections/Testimonials";
import { historyText } from "@/data/site";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <Ticker />
      <AwardsStrip />
      <Welcome />

      {/* CBSE results */}
      <section id="cbse" className="relative overflow-hidden bg-cream py-24">
        <div className="pointer-events-none absolute inset-0 bg-dots-dark" />
        <div className="container-x relative">
          <SectionHeading eyebrow="CBSE Class X - 2026" title="Class X Soars to" highlight="New Heights" text="Numbers that speak louder than words — the record-breaking CBSE Board Result 2026 of the RPS Group of Schools." />
          <CbseResults />
        </div>
      </section>

      <Streams />

      {/* NEET */}
      <section id="neet" className="bg-white py-24">
        <div className="container-x">
          <SectionHeading eyebrow="RPS Group of Schools" title="NEET Achievers" highlight="2026" text="140 RPSians scored 500 & above. Meet our future doctors." />
          <NeetTable limit={12} />
        </div>
      </section>

      <NewsCalendar />
      <AdmissionBanner />
      <LifeAtRps />
      <StatsBand />

      {/* Mentors */}
      <section className="bg-cream py-24">
        <div className="container-x">
          <SectionHeading eyebrow="Meet Our Mentors" title="Guided by" highlight="Visionaries" />
          <PrincipalMessage />
        </div>
      </section>

      {/* History */}
      <section className="relative overflow-hidden bg-navy-950 py-24 text-white">
        <div className="absolute inset-0 bg-dots opacity-30" />
        <div className="container-x relative">
          <SectionHeading light eyebrow="Our History" title="History of" highlight="RPS" text={historyText} />
          <Timeline light />
          <div className="mt-12 text-center">
            <Button href="/about#history" variant="gold">View More <ArrowRight className="h-4 w-4" /></Button>
          </div>
        </div>
      </section>

      {/* Campuses */}
      <section className="bg-white py-24">
        <div className="container-x">
          <SectionHeading eyebrow="RPS Campuses" title="One Family," highlight="Many Campuses" text="Find the RPS campus nearest to you." />
          <MainCampuses />
          <h3 className="mb-6 mt-16 text-center text-2xl font-semibold text-navy-900">Other Campuses</h3>
          <OtherCampuses />
        </div>
      </section>

      {/* Videos */}
      <section className="bg-cream py-24">
        <div className="container-x">
          <SectionHeading eyebrow="Watch" title="Moments That" highlight="Make Us Proud" />
          <VideoGrid />
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-white py-24">
        <div className="container-x">
          <SectionHeading eyebrow="Our Event Gallery" title="Life in" highlight="Pictures" />
          <GalleryGrid limit={8} filters={false} />
          <div className="mt-10 text-center">
            <Link href="/gallery" className="inline-flex items-center gap-2 font-bold text-brand-600 hover:gap-3">
              View Full Gallery <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative overflow-hidden bg-cream py-24">
        <div className="container-x">
          <SectionHeading eyebrow="Our Students Testimonials" title="Students' Say About" highlight="RPS" />
          <Testimonials />
        </div>
      </section>

      <SocialFeeds />
    </>
  );
}
