import { CalendarCheck, ClipboardList, FileCheck2, MessagesSquare, Phone, School, Sparkles, FileText, Mail, MapPin } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import SmartImage from "@/components/ui/SmartImage";
import Button from "@/components/ui/Button";
import EnquiryForm from "@/components/sections/EnquiryForm";
import FeeTable from "@/components/sections/FeeTable";
import FaqAccordion from "@/components/pages/FaqAccordion";
import { feeStructure, primaryContact, school } from "@/data/site";
import { WhatsappIcon } from "@/components/ui/SocialIcons";

export const metadata = {
  title: "Admission",
  description: "Admissions open for Session 2027-28 at Gurukul Vidyapeeth, Jind — Nursery to Class XII, Hindi & English medium. Fee structure 2027-28, admission process and enquiry.",
};

const steps = [
  { icon: MessagesSquare, title: "Enquiry", text: "Fill the online enquiry form or call the school office." },
  { icon: School, title: "School Visit", text: "Visit the school at Gohana Road, Pandu Pindara, Jind." },
  { icon: ClipboardList, title: "Registration", text: "Submit the registration form with the required documents and ₹500 registration charges." },
  { icon: CalendarCheck, title: "Admission Confirmation", text: "Complete the fee formalities and join the Gurukul family." },
];

const faqs = [
  { q: "For which session are admissions open?", a: `Admissions are open for Session ${feeStructure.session}, from Nursery to Class XII.` },
  { q: "Which board is the school affiliated to?", a: `The school is affiliated to the Central Board of Secondary Education (CBSE), New Delhi — Affiliation No. ${school.affiliationNo}, School Code ${school.schoolCode}. The affiliation is valid from ${school.affiliationPeriod}.` },
  { q: "What is the medium of instruction?", a: "Education is offered in both Hindi and English medium, as per the CBSE curriculum." },
  { q: "What are the registration charges?", a: `Registration charges are ₹500 for every class. The complete Fee Structure ${feeStructure.session} is given on this page.` },
  { q: "Is transport available?", a: feeStructure.note },
];

export default function AdmissionPage() {
  return (
    <>
      <PageHero image="/images/photos/kids-play-slides.webp" title="Admissions" highlight="Open" subtitle={`Session ${feeStructure.session} • ${school.classes} • ${school.medium}`} crumbs={[{ label: "Admission" }]} />

      <section className="py-20">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal from="right">
            <SectionHeading align="left" eyebrow="Admission Open" title="Session" highlight={feeStructure.session} />
            <p className="-mt-4 font-hindi text-xl text-gold-500">{school.taglineHi}</p>
            <p className="mt-4 text-base leading-8 text-muted">
              Gurukul Vidyapeeth offers quality modern education with the sanskaras of the Rishikul tradition — love for the nation, discipline and a sense of responsibility — following the CBSE, New Delhi curriculum from Nursery to Class XII in Hindi and English medium.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-maroon-900 p-6 text-white shadow-xl">
                <Sparkles className="h-6 w-6 text-gold-400" />
                <p className="mt-3 font-display text-3xl font-bold">{feeStructure.session}</p>
                <p className="text-sm text-white/75">Nursery to Class XII</p>
              </div>
              <div className="rounded-3xl bg-maroon-800 p-6 text-white shadow-xl">
                <Sparkles className="h-6 w-6" />
                <p className="mt-3 font-display text-3xl font-bold">₹500</p>
                <p className="text-sm text-white/90">Registration charges, all classes</p>
              </div>
            </div>
          </Reveal>
          <Reveal from="left" className="relative">
            <a href="#fees" aria-label="See the fee structure">
              <SmartImage src="feeStructure" alt={`Fee Structure ${feeStructure.session}`} label="Fee Structure" className="aspect-[1131/1600] rounded-2xl bg-cream shadow-xl" imgClassName="!object-contain" variant="light" />
            </a>
            <div className="mt-5 rounded-2xl border-l-4 border-gold-500 bg-ivory p-5 shadow-xl">
              <p className="text-xs font-bold uppercase tracking-widest text-saffron-600">Admission Enquiry</p>
              <a href={`tel:${primaryContact.tel}`} className="mt-1 flex items-center gap-2 text-lg font-semibold text-maroon-900"><Phone className="h-4 w-4" /> {primaryContact.phone}</a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Fee structure */}
      <section id="fees" className="scroll-mt-28 bg-cream py-20">
        <div className="container-x max-w-5xl">
          <SectionHeading eyebrow="All amounts in ₹" title="Fee Structure" highlight={feeStructure.session} />
          <FeeTable />
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="container-x">
          <SectionHeading eyebrow="How to apply" title="Admission" highlight="Process" />
          <div className="relative grid gap-6 md:grid-cols-4">
            <div className="absolute left-[12%] right-[12%] top-10 hidden h-0.5 border-t-2 border-dashed border-maroon-700/30 md:block" />
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.12} className="relative text-center">
                <span className="relative mx-auto grid h-20 w-20 place-items-center rounded-full bg-ivory text-maroon-800 shadow-xl ring-4 ring-gold-500">
                  <s.icon className="h-8 w-8" />
                  <span className="absolute -right-1 -top-1 grid h-7 w-7 place-items-center rounded-full bg-saffron-600 text-xs font-bold text-white">{i + 1}</span>
                </span>
                <h3 className="mt-5 text-lg font-semibold text-maroon-900">{s.title}</h3>
                <p className="mt-2 text-sm text-muted">{s.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Documents & contacts */}
      <section className="bg-cream py-20">
        <div className="container-x grid gap-8 lg:grid-cols-2">
          <Reveal className="rounded-2xl bg-ivory p-8 shadow-xl shadow-maroon-900/5 ring-1 ring-line">
            <h3 className="flex items-center gap-3 text-2xl font-semibold text-maroon-900">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-gold-100 text-saffron-600"><FileCheck2 className="h-6 w-6" /></span>
              Useful Documents
            </h3>
            <ul className="mt-6 grid gap-3">
              {[
                { label: `Fee Structure ${feeStructure.session}`, href: "#fees" },
                { label: "CBSE Affiliation Details", href: "/documents/cbse-affiliation.pdf" },
                { label: "Mandatory Public Disclosure", href: "/mandatory-disclosure" },
              ].map((d) => (
                <li key={d.label}>
                  <a href={d.href} className="flex items-center gap-3 rounded-xl bg-cream px-4 py-3 text-sm font-semibold text-maroon-900 transition hover:bg-maroon-800 hover:text-white">
                    <FileText className="h-4 w-4 text-saffron-600" /> {d.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/downloads" variant="maroon">All Downloads</Button>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="rounded-2xl bg-mesh p-8 text-white shadow-xl">
            <h3 className="text-2xl font-semibold">Admission Office</h3>
            <p className="mt-1 text-sm text-white/70">{school.fullName}</p>
            <ul className="mt-6 space-y-4 text-sm">
              <li className="flex gap-3 rounded-2xl glass p-4"><MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" /> {school.address}</li>
              <li className="flex items-center gap-3 rounded-2xl glass p-4">
                <Phone className="h-5 w-5 shrink-0 text-gold-400" />
                <a href={`tel:${primaryContact.tel}`} className="font-bold hover:text-gold-400">{primaryContact.phone}</a>
                <a href={`https://wa.me/${primaryContact.whatsapp}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="ml-auto inline-flex items-center gap-1.5 rounded-md bg-white/10 px-3 py-1.5 hover:bg-saffron-600">
                  <WhatsappIcon className="h-4 w-4 text-leaf-100" /> WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-3 rounded-2xl glass p-4"><Mail className="h-5 w-5 shrink-0 text-gold-400" /><a href={`mailto:${primaryContact.email}`} className="hover:text-gold-400">{primaryContact.email}</a></li>
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Form + FAQ */}
      <section className="py-20">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading align="left" eyebrow="Apply online" title="Admission" highlight="Enquiry" />
            <Reveal className="-mt-4 rounded-2xl bg-ivory p-6 shadow-xl shadow-maroon-900/10 ring-1 ring-line sm:p-8">
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
