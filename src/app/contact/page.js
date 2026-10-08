import { Mail, MessageCircle, PhoneCall } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import ContactTabs from "@/components/misc/ContactTabs";
import EnquiryForm from "@/components/sections/EnquiryForm";
import { primaryContact } from "@/data/site";

export const metadata = {
  title: "Contact Us",
  description: "Contact RPS Group of Schools — Mahendergarh, Rewari and Gurugram Sector 89 campus addresses, phone numbers, emails and maps.",
};

const quick = [
  { icon: PhoneCall, label: "Call Us", value: primaryContact.phone, href: `tel:${primaryContact.phone}` },
  { icon: MessageCircle, label: "Admission Enquiry", value: primaryContact.admissionPhone, href: `https://wa.me/${primaryContact.whatsapp}` },
  { icon: Mail, label: "Email Us", value: primaryContact.email, href: `mailto:${primaryContact.email}` },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact"
        highlight="Us"
        subtitle="We'd love to hear from you. Reach any RPS campus or send us an enquiry."
        crumbs={[{ label: "Contact" }]}
      />

      <section className="py-16">
        <div className="container-x grid gap-5 md:grid-cols-3">
          {quick.map((q, i) => (
            <Reveal key={q.label} delay={i * 0.08}>
              <a href={q.href} className="group flex items-center gap-5 rounded-3xl bg-white p-6 shadow-lg shadow-navy-900/5 ring-1 ring-slate-100 card-lift">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-navy-800 text-white transition group-hover:rotate-6">
                  <q.icon className="h-6 w-6" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-bold uppercase tracking-widest text-muted">{q.label}</span>
                  <span className="block truncate text-lg font-semibold text-navy-900">{q.value}</span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="container-x">
          <SectionHeading eyebrow="Our Campuses" title="Find a" highlight="Campus" />
          <ContactTabs />
        </div>
      </section>

      <section className="py-20">
        <div className="container-x max-w-4xl">
          <Reveal className="rounded-2xl bg-white p-6 shadow-xl shadow-navy-900/10 ring-1 ring-slate-100 sm:p-10">
            <SectionHeading eyebrow="Write to Us" title="Send an" highlight="Enquiry" />
            <EnquiryForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
