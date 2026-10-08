import PageHero from "@/components/ui/PageHero";
import DownloadsList from "@/components/misc/DownloadsList";

export const metadata = {
  title: "Downloads",
  description: "Download the NEET 2026 Paper, General Information, Prospectus, Fee Structure, Transfer Certificate and Mandatory Disclosure documents of RPS.",
};

export default function DownloadsPage() {
  return (
    <>
      <PageHero
        title="Downloads &"
        highlight="Documents"
        subtitle="Prospectus, fee structure, TC, NEET 2026 paper and more — all in one place."
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
