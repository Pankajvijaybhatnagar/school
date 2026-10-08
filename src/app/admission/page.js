import { CalendarCheck, ClipboardList, FileCheck2, MessagesSquare, Phone, School, Sparkles, UserCheck, FileText } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import SmartImage from "@/components/ui/SmartImage";
import Button from "@/components/ui/Button";
import EnquiryForm from "@/components/sections/EnquiryForm";
import FaqAccordion from "@/components/pages/FaqAccordion";
import { admissionOpen, campuses } from "@/data/site";
import { WhatsappIcon } from "@/components/ui/SocialIcons";

export const metadata = {
  title: "Admission",
  description: "Admissions Open 2026-27 at all RPS campuses and for Session 2027-28 at RPS International School, Sector 89, Gurugram. Admission process, documents and enquiry.",
};

const steps = [
  { icon: MessagesSquare, title: "Enquiry", text: "Fill the online enquiry form or call the campus admission desk." },
  { icon: School, title: "Campus Visit", text: "Visit the campus, meet our team and explore the facilities." },
  { icon: ClipboardList, title: "Registration", text: "Collect and submit the registration form with the required documents." },
  { icon: UserCheck, title: "Interaction / Assessment", text: "An interaction or age-appropriate assessment with the student." },
  { icon: CalendarCheck, title: "Admission Confirmation", text: "Complete the fee formalities and welcome to the RPS family!" },
];

const documents = [
  "Birth Certificate",
  "Previous Class Report Card",
  "Transfer Certificate (TC)",
  "Aadhaar Card (Student & Parents)",
  "Passport-size Photographs",
  "Address Proof",
];

const faqs = [
  { q: "When do admissions open?", a: "Admissions are open for Session 2026-27 at all RPS campuses. RPS International School, Sector 89, Gurugram is also accepting admissions for Session 2027-28." },
  { q: "Which board are RPS schools affiliated to?", a: "RPS schools are affiliated to the Central Board of Secondary Education (CBSE). RPS Sr. Sec. School, Mahendergarh holds Affiliation No. 530286 (School Code 40257). RPS International School, Sector 89, Gurugram is also a Cambridge International School." },
  { q: "Does RPS prepare students for competitive exams?", a: "Yes. Students are guided for IIT, NEET, NDA, NTSE, CLAT and CPT alongside the school curriculum. In NEET 2026, 140 RPSians scored 500 & above." },
  { q: "Where can I find the prospectus and fee structure?", a: "The Prospectus, Fee Structure and General Information can be downloaded from the Downloads page, or collected from the campus admission desk." },
  { q: "Is transport available?", a: "Yes. RPS Public School, Rewari has a dedicated transport office (8222001391). Please contact your preferred campus for route details." },
];

export default function AdmissionPage() {
  return (
    <>
      <PageHero title="Admissions" highlight="Open" subtitle="Session 2026-27 at all RPS campuses • Session 2027-28 at RPS International School, Sector 89, Gurugram." crumbs={[{ label: "Admission" }]} />

      <section className="py-20">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal from="right">
            <SectionHeading align="left" eyebrow="Life @ RPS" title={admissionOpen.title} highlight={admissionOpen.session} />
            <p className="-mt-4 text-base leading-8 text-muted">{admissionOpen.text}</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-navy-900 p-6 text-white shadow-xl">
                <Sparkles className="h-6 w-6 text-gold-400" />
                <p className="mt-3 font-display text-3xl font-bold">2026-27</p>
                <p className="text-sm text-white/75">All RPS Campuses</p>
              </div>
              <div className="rounded-3xl bg-navy-800 p-6 text-white shadow-xl">
                <Sparkles className="h-6 w-6" />
                <p className="mt-3 font-display text-3xl font-bold">2027-28</p>
                <p className="text-sm text-white/90">RPS International School, Sector 89, Gurugram</p>
              </div>
            </div>
          </Reveal>
          <Reveal from="left" className="relative">
            <SmartImage src="admissionGirl" alt="Admissions open at RPS" label="Admission Open" className="aspect-[4/5] rounded-2xl shadow-xl sm:aspect-[4/3] lg:aspect-[4/5]" variant="red" />
            <div className="absolute -bottom-6 -left-2 rounded-2xl bg-white p-5 shadow-xl sm:-left-6">
              <p className="text-xs font-bold uppercase tracking-widest text-brand-600">Admission Enquiry</p>
              <a href="tel:+919138975373" className="mt-1 flex items-center gap-2 text-lg font-semibold text-navy-900"><Phone className="h-4 w-4" /> +91-9138975373</a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Process */}
      <section className="bg-cream py-20">
        <div className="container-x">
          <SectionHeading eyebrow="How to apply" title="Admission" highlight="Process" />
          <div className="relative grid gap-6 md:grid-cols-5">
            <div className="absolute left-[10%] right-[10%] top-10 hidden h-0.5 border-t-2 border-dashed border-navy-700/30 md:block" />
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.12} className="relative text-center">
                <span className="relative mx-auto grid h-20 w-20 place-items-center rounded-full bg-white text-navy-800 shadow-xl ring-4 ring-gold-500">
                  <s.icon className="h-8 w-8" />
                  <span className="absolute -right-1 -top-1 grid h-7 w-7 place-items-center rounded-full bg-brand-600 text-xs font-bold text-white">{i + 1}</span>
                </span>
                <h3 className="mt-5 text-lg font-semibold text-navy-900">{s.title}</h3>
                <p className="mt-2 text-sm text-muted">{s.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Documents & contacts */}
      <section className="py-20">
        <div className="container-x grid gap-8 lg:grid-cols-2">
          <Reveal className="rounded-2xl bg-white p-8 shadow-xl shadow-navy-900/5 ring-1 ring-slate-100">
            <h3 className="flex items-center gap-3 text-2xl font-semibold text-navy-900">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-gold-100 text-brand-600"><FileCheck2 className="h-6 w-6" /></span>
              Documents Required
            </h3>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {documents.map((d) => (
                <li key={d} className="flex items-center gap-3 rounded-xl bg-slate-50 px-4 py-3 text-sm font-semibold text-navy-900">
                  <FileText className="h-4 w-4 text-brand-600" /> {d}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/downloads" variant="navy">Prospectus & Fee Structure</Button>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="rounded-2xl bg-mesh p-8 text-white shadow-xl">
            <h3 className="text-2xl font-semibold">Campus-wise Admission Contacts</h3>
            <div className="mt-6 space-y-4">
              {campuses.map((c) => (
                <div key={c.slug} className="rounded-2xl glass p-5">
                  <p className="text-xs font-bold uppercase tracking-widest text-gold-400">{c.city}</p>
                  <p className="font-bold">{c.name} — <span className="text-white/75">{c.admissions}</span></p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {c.phones.map((p) => (
                      <a key={p.number} href={`tel:${p.number}`} className="inline-flex items-center gap-1.5 rounded-md bg-white/10 px-3 py-1.5 text-sm hover:bg-brand-600">
                        {p.whatsapp ? <WhatsappIcon className="h-3.5 w-3.5 text-emerald-400" /> : <Phone className="h-3.5 w-3.5" />}
                        {p.label}: {p.number}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Form + FAQ */}
      <section className="bg-cream py-20">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading align="left" eyebrow="Apply online" title="Admission" highlight="Enquiry" />
            <Reveal className="-mt-4 rounded-2xl bg-white p-6 shadow-xl shadow-navy-900/10 sm:p-8">
              <EnquiryForm />
            </Reveal>
          </div>
          <div>
            <SectionHeading align="left" eyebrow="FAQ" title="Frequently Asked" highlight="Questions" />
            <div className="-mt-4">
              <FaqAccordion items={faqs} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
