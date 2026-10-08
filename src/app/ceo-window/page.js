import { Mail, MessageSquareQuote, Quote } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import SmartImage from "@/components/ui/SmartImage";
import CeoContactForm from "@/components/pages/CeoContactForm";
import { group, historyText } from "@/data/site";

export const metadata = {
  title: "CEO Window",
  description: "CEO Window — a direct line between parents, students and the leadership of RPS Group of Schools.",
};

export default function CeoWindowPage() {
  return (
    <>
      <PageHero title="C.E.O" highlight="Window" subtitle="A direct window between our parents, students and the leadership of RPS Group of Schools." crumbs={[{ label: "About Us", href: "/about" }, { label: "CEO Window" }]} />

      <section className="py-20">
        <div className="container-x grid items-start gap-12 lg:grid-cols-[360px_1fr]">
          <Reveal from="right" className="relative mx-auto w-full max-w-sm">
            <div className="absolute -right-4 -top-4 h-full w-full rounded-2xl bg-navy-900" />
            <SmartImage src="ceo" alt="CEO, RPS Group of Schools" label="CEO Photo" className="relative aspect-[4/5] rounded-2xl shadow-xl" />
            <div className="absolute -bottom-6 left-1/2 w-[85%] -translate-x-1/2 rounded-2xl bg-white p-4 text-center shadow-xl">
              <p className="text-lg font-semibold text-navy-900">Chief Executive Officer</p>
              <p className="text-xs font-bold uppercase tracking-widest text-brand-600">{group.name}</p>
            </div>
          </Reveal>
          <Reveal from="left" className="pt-8 lg:pt-0">
            <Quote className="h-14 w-14 text-brand-600/20" />
            <h2 className="mt-2 text-3xl font-semibold text-navy-900 sm:text-4xl">
              Message from the <span className="text-gradient">CEO</span>
            </h2>
            <div className="mt-6 rounded-2xl border-2 border-dashed border-gold-500/60 bg-gold-100/50 p-5 text-sm font-medium text-navy-800">
              <MessageSquareQuote className="mb-2 h-5 w-5 text-gold-500" />
              The CEO&apos;s message will be updated soon.
            </div>
            <div className="mt-6 space-y-5 leading-8 text-muted">
              <p>
                RPS was founded by {group.founder}, {group.founderTitle}, on the vision of spreading value-based education to every corner of the country. That vision takes shape under the dynamism of our Chairperson {group.chairperson}.
              </p>
              <p>{historyText}</p>
            </div>
            <p className="mt-8 font-serif text-2xl italic text-navy-800">&ldquo;{group.tagline}&rdquo;</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading align="left" eyebrow="Write to the CEO" title="Your Voice" highlight="Matters" text="Share your suggestions, feedback or concerns directly with the CEO's office. Every message is read and responded to." />
            <Reveal className="-mt-4 flex items-center gap-4 rounded-2xl bg-white p-5 shadow ring-1 ring-slate-100">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-navy-800 text-white"><Mail className="h-5 w-5" /></span>
              <p className="text-sm text-muted">Messages are treated confidentially and forwarded to the CEO&apos;s office.</p>
            </Reveal>
          </div>
          <Reveal from="left" className="rounded-2xl bg-white p-6 shadow-xl shadow-navy-900/10 sm:p-10">
            <CeoContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
