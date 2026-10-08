import Link from "next/link";
import { Download, FileText } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import { campuses, downloads } from "@/data/site";

export const metadata = {
  title: "Mandatory Disclosure",
  description: "CBSE Mandatory Public Disclosure of RPS Group of Schools — general information, documents, results, staff and infrastructure.",
};

const TBU = "To be updated";

function Table({ head, rows }) {
  return (
    <div className="overflow-x-auto rounded-2xl ring-1 ring-slate-200">
      <table className="w-full min-w-[560px] text-left text-sm">
        <thead className="bg-navy-800 text-white">
          <tr>{head.map((h) => <th key={h} className="px-5 py-3.5 font-semibold">{h}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-b border-slate-100 odd:bg-slate-50">
              {r.map((cell, j) => (
                <td key={j} className={`px-5 py-3 ${j === 0 ? "font-semibold text-muted" : "text-navy-900"} ${cell === TBU ? "italic text-slate-400" : ""}`}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Section({ letter, title, children }) {
  return (
    <Reveal className="rounded-3xl bg-white p-6 shadow-lg shadow-navy-900/5 ring-1 ring-slate-100 sm:p-8">
      <h2 className="mb-6 flex items-center gap-4 text-2xl font-semibold text-navy-900">
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-navy-800 font-display text-xl font-bold text-white">{letter}</span>
        {title}
      </h2>
      {children}
    </Reveal>
  );
}

export default function MandatoryDisclosurePage() {
  const campusCols = campuses.map((c) => `${c.name}, ${c.city}`);
  return (
    <>
      <PageHero
        title="Mandatory"
        highlight="Public Disclosure"
        subtitle="Information as per the CBSE Affiliation Bye-Laws, presented for each RPS campus."
        crumbs={[{ label: "Mandatory Disclosure" }]}
      />
      <section className="bg-cream py-20">
        <div className="container-x space-y-8">
          <Section letter="A" title="General Information">
            <Table
              head={["Information", ...campusCols]}
              rows={[
                ["Name of the School", ...campuses.map((c) => c.fullName)],
                ["Affiliation No.", ...campuses.map((c) => c.affiliationNo || TBU)],
                ["School Code", ...campuses.map((c) => c.schoolCode || TBU)],
                ["Complete Address", ...campuses.map((c) => c.address)],
                ["Principal Name", ...campuses.map((c) => (c.slug === "mahendergarh" ? "Dr. Kishor Tiwari" : TBU))],
                ["School Email ID", ...campuses.map((c) => c.emails.join(", ") || TBU)],
                ["Contact Details", ...campuses.map((c) => c.phones.map((p) => p.number).join(", "))],
              ]}
            />
          </Section>

          <Section letter="B" title="Documents and Information">
            <div className="grid gap-3 sm:grid-cols-2">
              {downloads.map((d) => (
                <a key={d.title} href={d.file} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 rounded-2xl bg-slate-50 p-4 transition hover:bg-navy-800 hover:text-white">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gold-100 text-brand-600"><FileText className="h-5 w-5" /></span>
                  <span className="flex-1 font-semibold">{d.title}</span>
                  <Download className="h-5 w-5 text-brand-600 group-hover:text-gold-400" />
                </a>
              ))}
            </div>
            <p className="mt-4 text-sm text-muted">
              Copies of affiliation letter, society registration, NOC, recognition, building safety, fire safety, DEO and water/health/sanitation certificates will be uploaded here. See <Link href="/downloads" className="font-semibold text-brand-600 underline">Downloads</Link>.
            </p>
          </Section>

          <Section letter="C" title="Result and Academics">
            <Table
              head={["Information", "Details"]}
              rows={[
                ["Fee Structure of the School", "See Downloads → Fee Structure"],
                ["Annual Academic Calendar", TBU],
                ["List of School Management Committee (SMC)", TBU],
                ["List of Parents Teachers Association (PTA) Members", TBU],
                ["Last Three-Year Result of the Board Examination", TBU],
                ["CBSE Class X 2026 (RPS Group)", "64 students 99%+, 198 students 98%+, 354 students 97%+, 546 students 96%+, 757 students 95%+, 1668 students 90%+"],
              ]}
            />
          </Section>

          <Section letter="D" title="Staff (Teaching)">
            <Table
              head={["Information", ...campusCols]}
              rows={[
                ["Principal", ...campuses.map((c) => (c.slug === "mahendergarh" ? "Dr. Kishor Tiwari" : TBU))],
                ["Total No. of Teachers", ...campuses.map(() => TBU)],
                ["PGT / TGT / PRT", ...campuses.map(() => TBU)],
                ["Teachers Section Ratio", ...campuses.map(() => TBU)],
                ["Details of Special Educator", ...campuses.map(() => TBU)],
                ["Details of Counsellor and Wellness Teacher", ...campuses.map(() => TBU)],
              ]}
            />
          </Section>

          <Section letter="E" title="School Infrastructure">
            <Table
              head={["Information", ...campusCols]}
              rows={[
                ["Total Campus Area", TBU, "10 acres", "14+ acres"],
                ["No. and Size of Classrooms", ...campuses.map(() => TBU)],
                ["No. and Size of Laboratories (incl. Computer Labs)", TBU, "3 computer labs (150+ computers)", TBU],
                ["Internet Facility", TBU, "Yes", TBU],
                ["No. of Girls Toilets", ...campuses.map(() => TBU)],
                ["No. of Boys Toilets", ...campuses.map(() => TBU)],
                ["Link to YouTube Video of Inspection of School", ...campuses.map(() => TBU)],
              ]}
            />
          </Section>
        </div>
      </section>
    </>
  );
}
