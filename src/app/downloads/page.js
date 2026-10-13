import PageHero from "@/components/ui/PageHero";
import DownloadsList from "@/components/misc/DownloadsList";

export const metadata = {
  title: "Downloads",
  description: "Download the Fee Structure 2027-28, CBSE affiliation, society registration, NOC, RTE recognition and fire safety documents of Gurukul Vidyapeeth, Jind.",
};

export default function DownloadsPage() {
  return (
    <>
      <PageHero
        title="Downloads &"
        highlight="Documents"
        subtitle="Fee structure, CBSE affiliation and school certificates — all in one place."
        crumbs={[{ label: "Downloads" }]}
      />
      <section className="bg-cream py-20">
        <div className="container-x">
          <DownloadsList />
        </div>
      </section>
    </>
  );
}
