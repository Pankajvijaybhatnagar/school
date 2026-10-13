import Link from "next/link";
import { ChevronsRight, Mail, MapPin, Phone } from "lucide-react";
import Logo from "./Logo";
import { activeSocial, primaryContact, quickLinks, school } from "@/data/site";
import { socialIconMap, WhatsappIcon } from "@/components/ui/SocialIcons";
import EnquiryButton from "@/components/sections/EnquiryButton";

export default function Footer() {
  return (
    <footer className="relative mt-auto overflow-hidden bg-navy-950 text-white">
      {/* CTA band */}
      <div className="relative bg-navy-800">
        <div className="absolute inset-0 bg-dots opacity-40" />
        <div className="container-x relative flex flex-col items-center justify-between gap-5 py-10 text-center md:flex-row md:text-left">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-white/80">Admissions Open 2027-28</p>
            <h3 className="mt-2 font-hindi text-2xl sm:text-3xl">{school.taglineHi}</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <EnquiryButton className="bg-white text-brand-700 hover:bg-navy-950 hover:text-white">Admission Enquiry</EnquiryButton>
            <a href={`tel:${primaryContact.tel}`} className="inline-flex items-center gap-2 rounded-md border-2 border-white/80 px-6 py-3 text-sm font-bold transition hover:bg-white hover:text-brand-700">
              <Phone className="h-4 w-4" /> {primaryContact.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Links */}
      <div className="container-x grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Logo light />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/65">
            {school.fullName} — run by {school.society}. Affiliated to {school.board} (Affiliation No. {school.affiliationNo}, School Code {school.schoolCode}).
          </p>
          <p className="mt-3 font-hindi text-xl text-gold-400">&ldquo;{school.motto}&rdquo;</p>
          {activeSocial.length > 0 && (
            <div className="mt-6 flex gap-2">
              {activeSocial.map(([k, href]) => {
                const I = socialIconMap[k];
                return (
                  <a key={k} href={href} aria-label={k} className="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition hover:-translate-y-1 hover:bg-gold-500">
                    <I className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          )}
        </div>
        <FooterLinks title="Important Links" links={quickLinks.important} />
        <FooterLinks title="Other Links" links={quickLinks.other} />
        <div>
          <h4 className="mb-5 text-lg font-bold">
            Contact Us
            <span className="mt-2 block h-0.5 w-12 bg-gold-500" />
          </h4>
          <ul className="space-y-3.5 text-sm text-white/70">
            <li className="flex gap-2.5"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" /> {school.address}</li>
            <li className="flex items-center gap-2.5">
              <Phone className="h-4 w-4 shrink-0 text-gold-500" />
              <a href={`tel:${primaryContact.tel}`} className="hover:text-gold-400">{primaryContact.phone}</a>
              <a href={`https://wa.me/${primaryContact.whatsapp}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-emerald-400">
                <WhatsappIcon className="h-4 w-4" />
              </a>
            </li>
            <li className="flex items-center gap-2.5"><Mail className="h-4 w-4 shrink-0 text-gold-500" /><a href={`mailto:${primaryContact.email}`} className="hover:text-gold-400">{primaryContact.email}</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-center text-sm text-white/60 md:flex-row">
          <p>© {school.fullName}. All Rights Reserved.</p>
          <p>Run by {school.society}</p>
        </div>
      </div>
    </footer>
  );
}

function FooterLinks({ title, links }) {
  return (
    <div>
      <h4 className="mb-5 text-lg font-bold">
        {title}
        <span className="mt-2 block h-0.5 w-12 bg-gold-500" />
      </h4>
      <ul className="space-y-3 text-sm">
        {links.map((l) => (
          <li key={l.label}>
            <Link href={l.href} className="flex items-center gap-1.5 text-white/70 transition hover:translate-x-1 hover:text-gold-400">
              <ChevronsRight className="h-4 w-4 text-gold-500" /> {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
