import { Mail, MapPin, MessageCircle, PhoneCall } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import EnquiryForm from "@/components/sections/EnquiryForm";
import MapEmbed from "@/components/sections/MapEmbed";
import { primaryContact, school } from "@/data/site";

export const metadata = {
  title: "Contact Us",
  description: "Contact Gurukul Vidyapeeth, Gohana Road, Pandu Pindara, Jind, Haryana 126102 — 90851-78001, jindgurukul@gmail.com.",
};

const quick = [
  { icon: PhoneCall, label: "Call Us", value: primaryContact.phone, href: `tel:${primaryContact.tel}` },
  { icon: MessageCircle, label: "WhatsApp", value: primaryContact.phone, href: `https://wa.me/${primaryContact.whatsapp}` },
  { icon: Mail, label: "Email Us", value: primaryContact.email, href: `mailto:${primaryContact.email}` },
];

export default function ContactPage() {
  return (
    <>
      <PageHero image="/images/photos/campus-entrance.jpg"
        title="Contact"
        highlight="Us"
        subtitle="We'd love to hear from you. Visit us, call us or send an enquiry."
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
          <SectionHeading eyebrow="Visit Us" title="Find" highlight="Our School" />
          <div className="grid gap-6 lg:grid-cols-5">
            <Reveal className="relative overflow-hidden rounded-3xl bg-mesh p-8 text-white lg:col-span-2">
              <div className="absolute inset-0 bg-dots opacity-40" />
              <div className="relative">
                <p className="text-xs font-bold uppercase tracking-widest text-gold-400">{school.place}</p>
                <h3 className="mt-1 text-2xl font-semibold">{school.fullName}</h3>
                <p className="mt-1 text-sm text-white/70">{school.board} • Affiliation No. {school.affiliationNo} • School Code {school.schoolCode}</p>
                <ul className="mt-6 space-y-4 text-sm">
                  <li className="flex gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" />
                    <span>{school.addressLines.map((l) => <span key={l} className="block">{l}</span>)}</span>
                  </li>
                  <li className="flex items-center gap-3"><PhoneCall className="h-5 w-5 shrink-0 text-gold-400" /><a href={`tel:${primaryContact.tel}`} className="font-bold hover:text-gold-400">{primaryContact.phone}</a></li>
                  <li className="flex items-center gap-3"><Mail className="h-5 w-5 shrink-0 text-gold-400" /><a href={`mailto:${primaryContact.email}`} className="hover:text-gold-400">{primaryContact.email}</a></li>
                </ul>
                <span className="mt-6 inline-block rounded-md bg-gold-500 px-4 py-1.5 text-xs font-bold text-navy-950">Admissions Open 2027-28</span>
              </div>
            </Reveal>
            <MapEmbed query={school.mapQuery} title={`${school.fullName} map`} className="h-[420px] lg:col-span-3" />
          </div>
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
