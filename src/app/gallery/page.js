import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import GalleryGrid from "@/components/sections/GalleryGrid";

export const metadata = {
  title: "Photo Gallery",
  description: "Our Event Gallery — celebrations, cultural programmes, felicitation ceremonies, sports and campus life at RPS Group of Schools.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        title="Our Event"
        highlight="Gallery"
        subtitle="Moments of pride, joy and celebration from across the RPS campuses."
        crumbs={[{ label: "Campus Life", href: "/facilities" }, { label: "Photo Gallery" }]}
      />
      <section className="py-20">
        <div className="container-x">
          <SectionHeading eyebrow="Captured Memories" title="Life at" highlight="RPS" />
          <GalleryGrid />
        </div>
      </section>
    </>
  );
}
