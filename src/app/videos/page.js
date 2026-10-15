import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import VideoGrid from "@/components/sections/VideoGrid";

export const metadata = {
  title: "Video Gallery",
  description: "Watch the inspection video of Gurukul Vidyapeeth, Jind covering the infrastructure of the school.",
};

export default function VideosPage() {
  return (
    <>
      <PageHero image="/images/photos/stage-welcome.jpg"
        title="Video"
        highlight="Gallery"
        subtitle="A look at our school, its campus and infrastructure."
        crumbs={[{ label: "Campus Life", href: "/facilities" }, { label: "Video Gallery" }]}
      />
      <section className="py-20">
        <div className="container-x">
          <SectionHeading eyebrow="Watch" title="Our School on" highlight="YouTube" />
          <VideoGrid />
        </div>
      </section>
    </>
  );
}
