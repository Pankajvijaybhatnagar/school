import { Download, ExternalLink, FileText } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import { boardResults, documents, feeStructure, infrastructure, primaryContact, principal, school, staff } from "@/data/site";
import { images } from "@/data/images";

export const metadata = {
  title: "Mandatory Disclosure",
  description: "CBSE Mandatory Public Disclosure of Shri Lajja Ram Bashesar Dass Gurukul Vidyapeeth, Jind — general information, documents, results, staff and infrastructure.",
};

const NA = "To be uploaded";

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
                <td key={j} className={`px-5 py-3 align-top ${j === 0 ? "w-16 text-muted" : j === 1 ? "font-semibold text-muted" : "text-navy-900"}`}>{cell}</td>
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

function DocLink({ href, label = "View" }) {
  if (!href) return <span className="italic text-slate-400">{NA}</span>;
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-md bg-navy-800 px-3 py-1.5 text-xs font-bold text-white transition hover:bg-brand-600">
      <Download className="h-3.5 w-3.5" /> {label}
    </a>
  );
}

function ResultTable({ cls, rows }) {
  return (
    <div className="min-w-0">
      <h3 className="mb-3 text-lg font-semibold text-navy-900">Result Class {cls}</h3>
      <Table
        head={["S.No.", "Year", "No. of Registered Students", "No. of Students Passed", "Pass Percentage", "Remarks"]}
        rows={rows.map((r, i) => [i + 1, r.year, r.registered, r.passed, r.pct, "—"])}
      />
    </div>
  );
}

export default function MandatoryDisclosurePage() {
  return (
    <>
      <PageHero
        title="Mandatory"
        highlight="Public Disclosure"
        subtitle={`Information as per the CBSE Affiliation Bye-Laws — ${school.fullName}.`}
        crumbs={[{ label: "Mandatory Disclosure" }]}
      />
      <section className="bg-cream py-20">
        <div className="container-x space-y-8">
          <Section letter="A" title="General Information">
            <Table
              head={["Sl. No.", "Information", "Details"]}
              rows={[
                [1, "Name of the School", school.fullName],
                [2, "Affiliation No. (if applicable)", school.affiliationNo],
                [3, "School Code (if applicable)", school.schoolCode],
                [4, "Complete Address with Pin Code", school.address],
                [5, "Principal Name & Qualification", `${principal.name.replace("Mrs. ", "")} — ${principal.qualification}`],
                [6, "School Email ID", <a key="m" href={`mailto:${primaryContact.email}`} className="text-brand-600 hover:underline">{primaryContact.email}</a>],
                [7, "Contact Details (Landline/Mobile)", <a key="t" href={`tel:${primaryContact.tel}`} className="text-brand-600 hover:underline">{primaryContact.phone}</a>],
              ]}
            />
          </Section>

          <Section letter="B" title="Documents and Information">
            <Table
              head={["Sl. No.", "Documents / Information", "Upload Documents"]}
              rows={documents.map((d, i) => [i + 1, d.title, <DocLink key={d.short} href={d.file} />])}
            />
            <p className="mt-4 rounded-xl bg-gold-100 p-4 text-sm leading-relaxed text-navy-900">
              <b>Note:</b> The schools need to upload the self attested copies of above listed documents by Chairman/Manager/Secretary and Principal. In case it is noticed at later stage that uploaded documents are not genuine then school shall be liable for action as per norms.
            </p>
            <a href="/documents/affidavit-non-proprietary.pdf" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:underline">
              <FileText className="h-4 w-4" /> Also available: Affidavit — Non-Proprietary Character of the Society (Appendix IV)
            </a>
          </Section>

          <Section letter="C" title="Result and Academics">
            <Table
              head={["Sl. No.", "Documents / Information", "Upload Documents"]}
              rows={[
                [1, "Fee Structure of the School", <DocLink key="fee" href={images.feeStructure} label={`Fee Structure ${feeStructure.session}`} />],
                [2, "Annual Academic Calendar", <DocLink key="cal" />],
                [3, "List of School Management Committee (SMC)", <DocLink key="smc" />],
                [4, "List of School Parents Teachers Association (PTA) Members", <DocLink key="pta" />],
                [5, "Last Three-Year Result of the Board Examination as per Applicability", "See below"],
              ]}
            />
            <div className="mt-8 grid gap-8">
              <ResultTable cls="X" rows={boardResults.X} />
              <ResultTable cls="XII" rows={boardResults.XII} />
            </div>
          </Section>

          <Section letter="D" title="Staff (Teaching)">
            <Table
              head={["Sl. No.", "Information", "Details"]}
              rows={[
                [1, "Principal", staff.principal],
                [2, "Total No. of Teachers", staff.teachers],
                ["", "PGT", staff.pgt],
                ["", "TGT", staff.tgt],
                ["", "PRT", staff.prt],
                [3, "Teachers Section Ratio", staff.ratio],
                [4, "Details of Special Educator", staff.specialEducator],
                [5, "Details of Counsellor and Wellness Teacher", staff.counsellor],
              ]}
            />
          </Section>

          <Section letter="E" title="School Infrastructure">
            <Table
              head={["Sl. No.", "Information", "Details"]}
              rows={[
                [1, "Total Campus Area of the School (in sq. mtr)", infrastructure.campusArea],
                [2, "No. and Size of the Class Rooms (in sq. mtr)", infrastructure.classrooms],
                [3, "No. and Size of Laboratories including Computer Labs (in sq. mtr)", infrastructure.labs],
                [4, "Internet Facility (Y/N)", infrastructure.internet],
                [5, "No. of Girls Toilets", infrastructure.girlsToilets],
                [6, "No. of Boys Toilets", infrastructure.boysToilets],
                [
                  7,
                  "Link of YouTube Video of the Inspection of School Covering the Infrastructure of the School",
                  <a key="yt" href={infrastructure.inspectionVideo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 break-all text-brand-600 hover:underline">
                    {infrastructure.inspectionVideo} <ExternalLink className="h-3.5 w-3.5 shrink-0" />
                  </a>,
                ],
              ]}
            />
          </Section>
        </div>
      </section>
    </>
  );
}
