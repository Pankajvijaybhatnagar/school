import { ArrowRight, Phone } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SmartImage from "@/components/ui/SmartImage";
import EnquiryButton from "@/components/sections/EnquiryButton";
import { admissionOpen, primaryContact } from "@/data/site";

export default function AdmissionBanner() {
  return (
    <section className="bg-white py-24">
      <div className="container-x">
        <div className="relative grid overflow-hidden rounded-2xl bg-navy-800 lg:grid-cols-[1.3fr_1fr]">
          <div className="absolute inset-0 bg-dots opacity-30" />
          <Reveal className="relative p-8 text-white sm:p-14">
            <span className="inline-flex items-center gap-2 rounded-md bg-gold-500 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-navy-950">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-600" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-600" />
              </span>
              Session {admissionOpen.session}
            </span>
            <h2 className="mt-5 text-4xl font-semibold sm:text-5xl">
              {admissionOpen.title}
            </h2>
            <p className="mt-5 max-w-xl leading-8 text-white/80">{admissionOpen.text}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <EnquiryButton className="bg-gold-500 text-navy-950 shadow-xl shadow-navy-900/10 hover:bg-gold-400">
                Admissions Open <ArrowRight className="h-4 w-4" />
              </EnquiryButton>
              <a href={`tel:${primaryContact.admissionPhone}`} className="inline-flex items-center gap-2 rounded-md border-2 border-white/60 px-6 py-3 text-sm font-bold transition hover:bg-white hover:text-navy-900">
                <Phone className="h-4 w-4" /> {primaryContact.admissionPhone}
              </a>
            </div>
          </Reveal>
          <Reveal from="left" className="relative min-h-80">
            <SmartImage src="admissionGirl" alt="Happy RPS student" label="Student Photo" variant="red" className="absolute inset-0 lg:[clip-path:polygon(18%_0,100%_0,100%_100%,0_100%)]" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
