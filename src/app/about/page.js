import { Compass, Eye, HeartHandshake, Sparkles, Target } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import SmartImage from "@/components/ui/SmartImage";
import Button from "@/components/ui/Button";
import StatsBand from "@/components/sections/StatsBand";
import Timeline from "@/components/sections/Timeline";
import { group, historyText, welcome } from "@/data/site";

export const metadata = {
  title: "About Us",
  description: "About RPS Group of Schools — founded by Late Dr. O.P. Yadav under Rao Pahlad Singh Education Society, Mahendergarh. 28 years of excellence in education.",
};

const pillars = [
  { icon: Eye, title: "Our Vision", text: "To spread value-based education to every corner of the country and become a model of quality education throughout the length and breadth of the state." },
  { icon: Target, title: "Our Mission", text: "To adopt the best from our rich and varied heritage and inculcate it into the curriculum, bringing about the all round development of every student." },
  { icon: HeartHandshake, title: "Our Values", text: "Personality development, character-building, moral values and life-skills — so that every RPSian grows into a well rounded personality." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About"
        highlight="RPS"
        subtitle={`${group.yearsBadge}. ${group.aegis}.`}
        crumbs={[{ label: "About Us" }]}
      />

      {/* Welcome */}
      <section className="py-20">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <Reveal from="right" className="relative">
            <div className="grid grid-cols-5 gap-4">
              <SmartImage src="welcome" alt="RPS campus" label="RPS Campus" className="col-span-3 aspect-[3/4] rounded-2xl shadow-xl" />
              <div className="col-span-2 flex flex-col gap-4 pt-12">
                <SmartImage src="welcome2" alt="Students at RPS" label="Students" variant="red" className="aspect-square rounded-2xl shadow-xl" />
                <div className="rounded-2xl bg-navy-900 p-5 text-center text-white shadow-xl">
                  <p className="font-display text-5xl font-bold text-gold-400">28</p>
                  <p className="text-xs font-bold uppercase tracking-widest">Years of Excellence</p>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal from="left">
            <SectionHeading align="left" eyebrow="Welcome" title={welcome.title.replace("RPS", "")} highlight="RPS" />
            <div className="-mt-6 space-y-5 text-base leading-8 text-muted">
              {welcome.text.map((p) => <p key={p.slice(0, 20)}>{p}</p>)}
            </div>
            <p className="mt-8 font-serif text-2xl italic text-navy-800">&ldquo;{group.motto}&rdquo;</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/campuses">Our Campuses</Button>
              <Button href="/why-rps" variant="ghost">Why Only RPS</Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Founder & Chairperson */}
      <section className="bg-cream py-20">
        <div className="container-x">
          <SectionHeading eyebrow="Leadership" title="The Visionaries Behind" highlight="RPS" text={`${group.society} — ${group.aegis.replace("Under the aegis of ", "")}`} />
          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
            {[
              { img: "founder", name: "Late Dr. O.P. Yadav", role: "Founder", text: "An Advocate and Educationist of repute who committed passionately to the cause of quality education and spearheaded the vision of spreading value-based education to every corner of the country." },
              { img: "chairperson", name: group.chairperson, role: "Chairperson", text: "Under her dynamism the vision of the founder takes shape, with RPS growing into a chain of institutions that has been rooting records of its achievements for 28 years." },
            ].map((p, i) => (
              <Reveal key={p.name} delay={i * 0.15}>
                <div className="group h-full overflow-hidden rounded-2xl bg-white shadow-xl shadow-navy-900/10 card-lift">
                  <SmartImage src={p.img} alt={p.name} label={p.name} className="aspect-[4/3] transition duration-700 group-hover:scale-105" variant={i ? "red" : "navy"} />
                  <div className="p-7">
                    <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-500">{p.role}</span>
                    <h3 className="mt-3 text-2xl font-semibold text-navy-900">{p.name}</h3>
                    <p className="mt-3 text-sm leading-7 text-muted">{p.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Vision mission values */}
      <section className="py-20">
        <div className="container-x">
          <SectionHeading eyebrow="What drives us" title="Vision, Mission &" highlight="Values" />
          <div className="grid gap-6 md:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.1}>
                <div className="group relative h-full overflow-hidden rounded-3xl bg-white p-8 shadow-lg shadow-navy-900/5 ring-1 ring-slate-100 card-lift">
                  <span className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gold-100 transition group-hover:scale-150" />
                  <span className="relative grid h-14 w-14 place-items-center rounded-2xl bg-navy-900 text-white shadow-lg">
                    <p.icon className="h-7 w-7" />
                  </span>
                  <h3 className="relative mt-6 text-xl font-semibold text-navy-900">{p.title}</h3>
                  <p className="relative mt-3 text-sm leading-7 text-muted">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* History */}
      <section id="history" className="relative scroll-mt-28 overflow-hidden bg-mesh py-20 text-white">
        <div className="absolute inset-0 bg-dots opacity-40" />
        <div className="container-x relative">
          <SectionHeading light eyebrow="Since 1998" title="History of" highlight="RPS" text={historyText} />
          <Timeline light />
        </div>
      </section>

      <StatsBand />

      {/* Motto band */}
      <section className="py-20">
        <div className="container-x">
          <Reveal className="relative overflow-hidden rounded-2xl bg-cream p-10 text-center ring-1 ring-gold-500/30 sm:p-16">
            <Sparkles className="mx-auto h-10 w-10 text-gold-500" />
            <p className="mt-4 text-sm font-bold uppercase tracking-[0.3em] text-brand-600">{group.yearsBadge}</p>
            <h2 className="mx-auto mt-4 max-w-3xl font-serif text-3xl italic text-navy-900 sm:text-5xl">&ldquo;{group.tagline}&rdquo;</h2>
            <p className="mt-6 flex items-center justify-center gap-2 text-sm font-semibold text-muted">
              <Compass className="h-4 w-4 text-navy-700" /> {group.motto}
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
