import { CheckCircle2, ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SmartImage from "@/components/ui/SmartImage";
import Button from "@/components/ui/Button";
import { Ornament } from "@/components/ui/SectionHeading";
import { features, group, welcome } from "@/data/site";

export default function Welcome() {
  return (
    <section className="relative overflow-hidden bg-white py-28">
      <div className="container-x relative grid items-center gap-16 lg:grid-cols-2">
        <Reveal from="right" className="relative mx-auto w-full max-w-xl">
          <div className="relative aspect-[5/6]">
            <SmartImage src="welcome" alt="RPS students" label="Campus Photo" className="absolute left-0 top-0 h-[78%] w-[78%] rounded-sm shadow-xl" />
            <SmartImage src="welcome2" alt="RPS students in activity" label="Activity Photo" variant="red" className="absolute bottom-0 right-0 h-[55%] w-[58%] rounded-sm border-[10px] border-white shadow-xl" />
            <div className="absolute -left-4 bottom-10 border border-gold-500/40 bg-navy-900 px-6 py-5 text-center text-white shadow-xl outline outline-1 outline-offset-4 outline-navy-900 sm:-left-8">
              <p className="font-display text-5xl font-semibold text-gold-400">28</p>
              <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.25em]">Years of<br />Excellence</p>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-gold-500">{group.aegis}</span>
            <h2 className="mt-4 text-4xl font-semibold leading-tight text-navy-900 sm:text-5xl">
              Welcome to <span className="text-gradient">Our School</span>
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
                <li key={f} className="flex items-center gap-3 border-b border-line pb-3 text-[15px] font-medium text-navy-900">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-gold-500" /> {f}
                </li>
              ))}
            </ul>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Button href="/about" variant="navy">Read More <ArrowRight className="h-4 w-4" /></Button>
              <p className="font-serif text-lg italic text-navy-800">&mdash; {group.motto}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
