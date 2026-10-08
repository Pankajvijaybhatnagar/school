import Reveal from "@/components/ui/Reveal";
import SmartImage from "@/components/ui/SmartImage";
import { lifeAtRps } from "@/data/site";

export default function LifeAtRps() {
  return (
    <section className="relative overflow-hidden">
      <div className="grid lg:grid-cols-[2fr_1fr]">
        <div className="relative bg-navy-800 px-4 py-20 sm:px-10 lg:px-16">
          <div className="absolute inset-0 bg-dots opacity-40" />
          <Reveal className="relative mx-auto max-w-4xl text-center text-white">
            <h2 className="font-serif text-5xl font-bold italic sm:text-6xl">Life @ RPS</h2>
            <p className="mx-auto mt-5 max-w-3xl leading-8 text-white/90">{lifeAtRps.text}</p>
          </Reveal>
          <div className="relative mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
            {lifeAtRps.cards.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.15}>
                <article className="group h-full overflow-hidden rounded-3xl bg-white shadow-xl shadow-navy-900/10 card-lift">
                  <SmartImage src={c.image} alt={c.title} label={c.title} variant={i ? "navy" : "red"} className="aspect-[16/10] transition duration-700 group-hover:scale-105" />
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-semibold text-navy-900">{c.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-muted">{c.text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
        <Reveal from="left" className="relative min-h-96">
          <SmartImage src="lifeSpeaker" alt="RPS student addressing an assembly" label="Life @ RPS" className="absolute inset-0" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 to-transparent" />
          <p className="absolute inset-x-8 bottom-8 font-serif text-2xl italic text-white">
            &ldquo;Inspiring creativity and discovering innate talents.&rdquo;
          </p>
        </Reveal>
      </div>
    </section>
  );
}
