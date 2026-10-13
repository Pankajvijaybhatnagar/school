import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import GalleryGrid from "@/components/sections/GalleryGrid";

export const metadata = {
  title: "Photo Gallery",
  description: "Photo gallery — celebrations, cultural programmes, sports and campus life at Gurukul Vidyapeeth, Jind.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        title="Our Event"
        highlight="Gallery"
        subtitle="Moments of pride, joy and celebration at Gurukul Vidyapeeth."
        crumbs={[{ label: "Campus Life", href: "/facilities" }, { label: "Photo Gallery" }]}
      />
      <section className="py-20">
        <div className="container-x">
          <SectionHeading eyebrow="Captured Memories" title="Life at" highlight="Gurukul" />
          <GalleryGrid />
        </div>
      </section>
    </>
  );
}
