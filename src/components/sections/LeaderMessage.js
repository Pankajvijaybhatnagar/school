import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SmartImage from "@/components/ui/SmartImage";
import { Ornament } from "@/components/ui/SectionHeading";
import { school } from "@/data/site";

/*
  A leader's message — arched portrait beside the text.
  - `person`  chairman / viceChairman from site data
  - `full`    the whole message (About page); otherwise the opening paragraphs
              and a link to read the rest
  - `flip`    portrait on the right, for alternating sections
  - `href`    where "Read Full Message" goes (defaults to the About page)
*/
export default function LeaderMessage({ person, id, eyebrow, full = false, flip = false, tone = "cream", href = `/about#${id}` }) {
  // Preview: everything up to and including the second paragraph (keeps an opening quote).
  const second = person.message.findIndex((b, i) => typeof b === "string" && person.message.slice(0, i).filter((x) => typeof x === "string").length === 1);
  const body = full || second < 0 ? person.message : person.message.slice(0, second + 1);
  const bg = tone === "white" ? "bg-white" : "bg-cream";
  const ring = tone === "white" ? "ring-white" : "ring-cream";
  const sig = person.signature;

  return (
    <section id={id} className={`relative scroll-mt-28 overflow-clip py-24 lg:py-28 ${bg}`}>
      <div className="pointer-events-none absolute inset-0 bg-dots-dark" />
      <div className={`pointer-events-none absolute top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full border border-gold-500/20 ${flip ? "-right-40" : "-left-40"}`} />
      <div className={`pointer-events-none absolute top-1/2 h-[380px] w-[380px] -translate-y-1/2 rounded-full border border-gold-500/15 ${flip ? "-right-24" : "-left-24"}`} />

      <div className={`container-x relative grid gap-16 lg:gap-20 ${flip ? "lg:grid-cols-[7fr_5fr]" : "lg:grid-cols-[5fr_7fr]"} ${full ? "items-start" : "items-center"}`}>
        {/* Portrait — stays in view beside a long message */}
        <Reveal from={flip ? "left" : "right"} className={`relative mx-auto w-full max-w-[360px] px-3 ${flip ? "lg:order-2" : ""} ${full ? "lg:sticky lg:top-32" : ""}`}>
          {/* Frame matches the photo's 3:4 ratio so the portrait is never cropped */}
          <div className="relative aspect-[3/4]">
            {/* gold outline — same arch, evenly 12px outside the frame on every side */}
            <div className="absolute -inset-3 rounded-t-full border border-gold-500/70" />
            {/* white mat with a fine gold edge; the photo sits fully inside it */}
            <div className="absolute inset-0 rounded-t-full bg-white p-2.5 shadow-2xl shadow-navy-900/25 ring-1 ring-gold-500/60">
              <div className="relative h-full w-full overflow-hidden rounded-t-full">
                <SmartImage src={person.portrait} alt={person.name || person.role} label={person.role} variant="light" className="absolute inset-0" imgClassName={person.contain ? "!object-contain p-10" : "object-top"} />
              </div>
            </div>

            {/* Quote badge — centred on the frame's edge */}
            <span className={`absolute top-[22%] grid h-14 w-14 place-items-center rounded-full bg-brand-600 text-white shadow-xl ring-4 ${ring} ${flip ? "left-0 -translate-x-1/2" : "right-0 translate-x-1/2"}`}>
              <Quote className="h-6 w-6 fill-current" />
            </span>
          </div>

          {/* Name plate — below the frame, so nothing overlaps the photo */}
          <div className="mt-6 border-t-2 border-gold-500 bg-navy-900 px-6 py-4 text-center text-white shadow-xl shadow-navy-950/30">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold-400">{person.role}</p>
            {person.nameHi && <p className="mt-2 font-hindi text-lg leading-snug">{person.nameHi}</p>}
            {person.qualification && <p className="mt-1 text-sm font-semibold">{person.qualification}</p>}
            <p className="mt-1 text-xs text-white/60">{school.name}, {school.place}</p>
          </div>
        </Reveal>

        {/* Message */}
        <Reveal from={flip ? "right" : "left"} className={`pt-6 lg:pt-0 ${flip ? "lg:order-1" : ""}`}>
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-gold-500">{eyebrow}</span>
          <h2 className="mt-4 font-hindi text-3xl font-normal leading-snug text-navy-900 sm:text-4xl">{person.messageTitle}</h2>
          <div className="mt-5"><Ornament align="left" /></div>

          <div className="relative mt-8">
            <span className="pointer-events-none absolute -left-2 -top-10 font-display text-[9rem] leading-none text-gold-500/15" aria-hidden="true">&ldquo;</span>
            <div className="relative space-y-5 font-hindi text-[17px] leading-9 text-ink">
              {body.map((b, i) =>
                typeof b === "string" ? (
                  <p key={i} className={i === 0 ? "text-lg text-navy-800" : ""}>{b}</p>
                ) : (
                  <figure key={i} className="border-l-4 border-gold-500 bg-white px-6 py-5 shadow-sm sm:px-8">
                    <blockquote className="space-y-1 text-center">
                      {b.verse.map((v) => (
                        <p key={v} className="text-xl leading-9 text-brand-600 sm:text-2xl">{v}</p>
                      ))}
                    </blockquote>
                    {b.meaning && (
                      <figcaption className="mt-4 border-t border-line pt-4 text-base leading-8">
                        <b className="text-navy-900">भावार्थ:</b> {b.meaning}
                      </figcaption>
                    )}
                  </figure>
                ),
              )}
            </div>
          </div>

          {!full && (
            <Link href={href} className="mt-6 inline-flex items-center gap-2 font-semibold text-brand-600 transition-all hover:gap-3">
              पूरा संदेश पढ़ें — Read Full Message <ArrowRight className="h-4 w-4" />
            </Link>
          )}

          <div className="mt-8 flex items-start gap-4">
            <span className="mt-4 h-px w-12 shrink-0 bg-gold-500" />
            <div className="font-hindi">
              {sig.pre && <p className="text-base text-gold-500">{sig.pre}</p>}
              <p className="text-2xl leading-snug text-navy-900">{sig.name}</p>
              {sig.post && <p className="mt-1 text-sm text-muted">{sig.post}</p>}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
