import { ArrowRight, Phone, ReceiptIndianRupee } from "lucide-react";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import SmartImage from "@/components/ui/SmartImage";
import EnquiryButton from "@/components/sections/EnquiryButton";
import { feeStructure, primaryContact, school } from "@/data/site";

export default function AdmissionBanner() {
  return (
    <section className="bg-ivory py-24">
      <div className="container-x">
        <div className="relative grid overflow-hidden rounded-2xl bg-maroon-800 lg:grid-cols-[1.3fr_1fr]">
          <div className="absolute inset-0 bg-dots opacity-30" />
          <Reveal className="relative p-8 text-white sm:p-14">
            <span className="inline-flex items-center gap-2 rounded-md bg-gold-500 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-maroon-950">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-saffron-600" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-saffron-600" />
              </span>
              Session {feeStructure.session}
            </span>
            <h2 className="mt-5 text-4xl font-semibold sm:text-5xl">Admission Open</h2>
            <p className="mt-3 font-hindi text-xl text-gold-400">{school.taglineHi}</p>
            <p className="mt-5 max-w-xl leading-8 text-white/80">
              Admissions are open from Nursery to Class XII in Hindi and English medium, including the Science stream in Classes XI and XII. Registration charges are just ₹500 for every class.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <EnquiryButton className="bg-gold-500 text-maroon-950 shadow-xl shadow-maroon-900/10 hover:bg-gold-400">
                Admission Enquiry <ArrowRight className="h-4 w-4" />
              </EnquiryButton>
              <Link href="/admission#fees" className="inline-flex items-center gap-2 rounded-md border-2 border-white/60 px-6 py-3 text-sm font-bold transition hover:bg-ivory hover:text-maroon-900">
                <ReceiptIndianRupee className="h-4 w-4" /> Fee Structure
              </Link>
              <a href={`tel:${primaryContact.tel}`} className="inline-flex items-center gap-2 rounded-md border-2 border-white/60 px-6 py-3 text-sm font-bold transition hover:bg-ivory hover:text-maroon-900">
                <Phone className="h-4 w-4" /> {primaryContact.phone}
              </a>
            </div>
          </Reveal>
          <Reveal from="left" className="relative min-h-96 bg-cream">
            <Link href="/admission#fees" aria-label="View Fee Structure 2027-28">
              <SmartImage src="feeStructure" alt={`Fee Structure ${feeStructure.session}`} label="Fee Structure" variant="light" className="absolute inset-0" imgClassName="!object-contain p-4" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
