import Link from "next/link";
import { ChevronsRight, Mail, MapPin, Phone, Eye } from "lucide-react";
import Logo from "./Logo";
import { campuses, group, quickLinks, social, whyChoose } from "@/data/site";
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
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-white/80">Admissions Open 2026-27</p>
            <h3 className="mt-2 text-2xl font-semibold sm:text-3xl">Give your child the RPS advantage.</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <EnquiryButton className="bg-white text-brand-700 hover:bg-navy-950 hover:text-white">Admission Enquiry</EnquiryButton>
            <a href="tel:+919138975373" className="inline-flex items-center gap-2 rounded-md border-2 border-white/80 px-6 py-3 text-sm font-bold transition hover:bg-white hover:text-brand-700">
              <Phone className="h-4 w-4" /> +91-9138975373
            </a>
          </div>
        </div>
      </div>

      {/* Campus contacts */}
      <div className="border-b border-white/10">
        <div className="container-x grid gap-6 py-12 md:grid-cols-3">
          {campuses.map((c) => (
            <div key={c.slug} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-gold-500/40 hover:bg-white/[0.06]">
              <p className="text-xs font-bold uppercase tracking-widest text-gold-400">{c.city}</p>
              <h4 className="mt-1 text-lg font-bold">{c.name}</h4>
              <ul className="mt-4 space-y-2.5 text-sm text-white/70">
                <li className="flex gap-2.5"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" /> {c.address}</li>
                {c.phones.map((p) => (
                  <li key={p.number} className="flex items-center gap-2.5">
                    <Phone className="h-4 w-4 shrink-0 text-gold-500" />
                    <span>{p.label}: <a href={`tel:${p.number}`} className="hover:text-gold-400">{p.number}</a></span>
                    {p.whatsapp && (
                      <a href={`https://wa.me/91${p.number.replace(/\D/g, "").slice(-10)}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-emerald-400">
                        <WhatsappIcon className="h-4 w-4" />
                      </a>
                    )}
                  </li>
                ))}
                {c.emails.map((m) => (
                  <li key={m} className="flex items-center gap-2.5"><Mail className="h-4 w-4 shrink-0 text-gold-500" /><a href={`mailto:${m}`} className="hover:text-gold-400">{m}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Links */}
      <div className="container-x grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Logo light />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/65">
            {group.society} — {group.aegis.replace("Under the aegis of ", "")}. Spreading value-based education to every corner of the country since 1998.
          </p>
          <p className="mt-3 font-serif text-lg italic text-gold-400">&ldquo;{group.motto}&rdquo;</p>
          <div className="mt-6 flex gap-2">
            {Object.entries(social).map(([k, href]) => {
              const I = socialIconMap[k];
              return (
                <a key={k} href={href} aria-label={k} className="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition hover:-translate-y-1 hover:bg-gold-500">
                  <I className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>
        <FooterLinks title="Important Links" links={quickLinks.important} />
        <FooterLinks title="Other Links" links={quickLinks.other} />
        <div>
          <h4 className="mb-5 text-lg font-bold">
            Why Choose RPS?
            <span className="mt-2 block h-0.5 w-12 bg-gold-500" />
          </h4>
          <ul className="space-y-3 text-sm">
            {whyChoose.map((w) => (
              <li key={w.title}>
                <Link href="/why-rps" className="flex items-center gap-1.5 text-white/70 transition hover:translate-x-1 hover:text-gold-400">
                  <ChevronsRight className="h-4 w-4 text-gold-500" /> {w.title}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/campuses" className="flex items-center gap-1.5 text-white/70 transition hover:translate-x-1 hover:text-gold-400">
                <ChevronsRight className="h-4 w-4 text-gold-500" /> RPS Campuses
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-center text-sm text-white/60 md:flex-row">
          <p>© 2026 {group.name}. All Rights Reserved.</p>
          <p className="flex items-center gap-2">
            <Eye className="h-4 w-4 text-gold-400" /> Number of Visitors:
            <span className="rounded bg-white px-2 py-0.5 font-mono font-bold tracking-widest text-navy-900">100723505</span>
          </p>
          <p>{group.aegis}</p>
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
