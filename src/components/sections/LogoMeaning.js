import Reveal from "@/components/ui/Reveal";
import SmartImage from "@/components/ui/SmartImage";
import { logoMeaning, school } from "@/data/site";

/* The crest, the motto and the four symbols. `full` adds the complete Hindi text. */
export default function LogoMeaning({ full = false }) {
  return (
    <>
      <div className="grid items-center gap-12 lg:grid-cols-[360px_1fr]">
        <Reveal from="right" className="relative mx-auto w-full max-w-xs">
          <div className="absolute -inset-3 rounded-full border border-gold-500/60" />
          <SmartImage src="logo" alt={`${school.name} logo`} className="relative aspect-square rounded-full bg-white shadow-xl" imgClassName="!object-contain" variant="light" />
        </Reveal>
        <Reveal from="left">
          <p className="font-hindi text-5xl leading-tight text-navy-900 sm:text-6xl">{school.motto}</p>
          <p className="mt-3 text-xs font-semibold uppercase tracking-[0.25em] text-gold-500">{school.mottoSource}</p>
          <p className="mt-6 font-hindi text-lg leading-9 text-navy-800">{logoMeaning.meaningHi}</p>
          <p className="mt-3 font-serif text-lg italic leading-8 text-muted">&ldquo;{logoMeaning.meaningEn}&rdquo;</p>
          {full && (
            <>
              <p className="mt-6 font-hindi text-base leading-8 text-muted">{logoMeaning.intro}</p>
              <p className="mt-4 font-hindi text-base leading-8 text-muted"><b className="text-navy-900">समग्र भावार्थ —</b> {logoMeaning.essence}</p>
            </>
          )}
        </Reveal>
      </div>

      {full && (
        <Reveal className="mt-14 rounded-2xl bg-white p-8 shadow-lg shadow-navy-900/5 ring-1 ring-slate-100 sm:p-10">
          {logoMeaning.philosophy.map((p) => (
            <p key={p.slice(0, 24)} className="font-hindi text-base leading-9 text-ink">{p}</p>
          ))}
          <div className="my-8 space-y-2 border-l-2 border-gold-500 pl-6">
            {logoMeaning.verses.map((v) => (
              <p key={v} className="font-hindi text-2xl text-brand-600">&ldquo;{v}&rdquo;</p>
            ))}
          </div>
          <p className="font-hindi text-base leading-9 text-ink">{logoMeaning.resolve}</p>
        </Reveal>
      )}

      <p className="mt-14 text-center font-hindi text-xl text-navy-900">{logoMeaning.symbolsIntro}</p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {logoMeaning.symbols.map((s, i) => {
          return (
            <Reveal key={s.key} delay={i * 0.08} className="h-full">
              <div id={`symbol-${s.key}`} className="group h-full rounded-2xl bg-white p-7 text-center shadow-lg shadow-navy-900/5 ring-1 ring-slate-100 card-lift">
                <SmartImage
                  src={`/images/logo/symbols/${s.key}.webp`}
                  alt={`${s.title} — ${s.titleHi}`}
                  label={s.title}
                  variant="light"
                  className="mx-auto aspect-square w-32 bg-white transition duration-500 group-hover:scale-105"
                  imgClassName="!object-contain"
                />
                <p className="mt-5 font-hindi text-2xl text-brand-600">{s.titleHi}</p>
                <h3 className="text-lg font-semibold text-navy-900">{s.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{s.summary}</p>
              </div>
            </Reveal>
          );
        })}
      </div>

      {full && (
        <div className="mt-12 space-y-6">
          {logoMeaning.symbols.map((s) => (
            <Reveal key={s.key} className="rounded-2xl bg-white p-8 shadow-lg shadow-navy-900/5 ring-1 ring-slate-100 sm:grid sm:grid-cols-[120px_1fr] sm:gap-8 sm:p-10">
              <SmartImage
                src={`/images/logo/symbols/${s.key}.webp`}
                alt={s.title}
                label={s.title}
                variant="light"
                className="mb-5 aspect-square w-24 bg-white sm:mb-0 sm:w-full sm:self-start"
                imgClassName="!object-contain"
              />
              <div>
              <h3 className="flex items-baseline gap-3 text-2xl font-semibold text-navy-900">
                <span className="font-hindi text-3xl font-normal text-brand-600">{s.titleHi}</span>
                <span className="text-base text-muted">{s.title}</span>
              </h3>
              <div className="mt-4 space-y-4">
                {s.text.map((t) => (
                  <p key={t.slice(0, 24)} className="font-hindi text-base leading-9 text-ink">{t}</p>
                ))}
              </div>
              </div>
            </Reveal>
          ))}
        </div>
      )}
    </>
  );
}
