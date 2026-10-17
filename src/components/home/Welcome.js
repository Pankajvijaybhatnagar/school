import { CheckCircle2, ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SmartImage from "@/components/ui/SmartImage";
import Button from "@/components/ui/Button";
import { Ornament } from "@/components/ui/SectionHeading";
import { features, school, welcome } from "@/data/site";

export default function Welcome() {
  return (
    <section className="relative overflow-hidden bg-ivory py-28">
      <div className="container-x relative grid items-center gap-16 lg:grid-cols-2">
        <Reveal from="right" className="relative mx-auto w-full max-w-xl">
          <div className="relative aspect-square">
            {/* gold outline — evenly 12px around the main photo */}
            <div className="absolute -left-3 -top-3 h-[calc(70%+1.5rem)] w-[calc(80%+1.5rem)] border border-gold-500/50" />
            {/* main photo */}
            <SmartImage src="welcome" alt="Gurukul Vidyapeeth campus" label="Campus Photo" className="absolute left-0 top-0 h-[70%] w-[80%] rounded-sm shadow-xl" />
            {/* second photo — framed at its own 3:2 ratio so nobody is cut off */}
            <div className="absolute bottom-0 right-0 w-[58%] bg-ivory p-2 shadow-2xl shadow-maroon-900/20 sm:p-2.5">
              <SmartImage src="welcome2" alt="Students in the science laboratory" label="Students" className="aspect-[3/2] w-full rounded-sm" />
            </div>
            {/* logo badge on the corner where the two photos meet */}
            <div className="absolute bottom-[38.7%] right-[58%] hidden h-16 w-16 sm:grid translate-x-1/2 translate-y-1/2 place-items-center rounded-full bg-ivory p-1.5 shadow-xl ring-1 ring-gold-500/40 sm:h-20 sm:w-20">
              <SmartImage src="logo" alt="Gurukul Vidyapeeth logo" className="h-full w-full rounded-full" imgClassName="!object-contain" variant="light" />
            </div>
            <div className="absolute left-2 top-[70%] -translate-y-1/2 border border-gold-500/40 bg-maroon-900 px-4 py-3 text-center text-white shadow-xl outline outline-1 outline-offset-4 outline-maroon-900 sm:left-4 sm:px-6 sm:py-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/70">Since</p>
              <p className="font-display text-3xl font-semibold text-gold-400 sm:text-5xl">{school.founded}</p>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="font-hindi text-lg text-gold-500">{school.taglineHi}</span>
            <h2 className="mt-3 text-4xl font-semibold leading-tight text-maroon-900 sm:text-5xl">
              Welcome to <span className="text-gradient">Gurukul Vidyapeeth</span>
            </h2>
            <div className="mt-5"><Ornament align="left" /></div>
          </Reveal>
          {welcome.text.map((p, i) => (
            <Reveal key={i} delay={0.1 + i * 0.1}>
              <p className="mt-5 leading-8 text-muted">{p}</p>
            </Reveal>
          ))}
          <Reveal delay={0.3}>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-3 border-b border-line pb-3 text-[15px] font-medium text-maroon-900">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-gold-500" /> {f}
                </li>
              ))}
            </ul>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Button href="/about" variant="maroon">Read More <ArrowRight className="h-4 w-4" /></Button>
              <p className="font-hindi text-xl text-maroon-800">&mdash; {school.motto}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
