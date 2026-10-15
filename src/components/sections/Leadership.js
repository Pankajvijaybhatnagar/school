import { Award, GraduationCap, Landmark } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SmartImage from "@/components/ui/SmartImage";
import { chairman, principal, school, viceChairman } from "@/data/site";

function Card({ image, icon: I, role, name, nameHi, lines, delay, variant, contain }) {
  return (
    <Reveal delay={delay} className="h-full">
      <div className="group h-full overflow-hidden rounded-2xl bg-white shadow-xl shadow-navy-900/10 card-lift">
        <SmartImage src={image} alt={name || role} label={role} variant={variant} className="aspect-[4/3] transition duration-700 group-hover:scale-105" imgClassName={contain ? "!object-contain p-6 bg-white" : "object-top"} />
        <div className="p-7">
          <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-gold-500">
            <I className="h-4 w-4" /> {role}
          </span>
          {nameHi && <p className="mt-3 font-hindi text-xl text-brand-600">{nameHi}</p>}
          {name && <h3 className="mt-2 text-xl font-semibold text-navy-900">{name}</h3>}
          <ul className="mt-3 space-y-1 text-sm leading-6 text-muted">
            {lines.map((l) => <li key={l}>{l}</li>)}
          </ul>
        </div>
      </div>
    </Reveal>
  );
}

export default function Leadership() {
  return (
    <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
      <Card
        image={chairman.image}
        icon={Landmark}
        role={chairman.role}
        nameHi={chairman.nameHi}
        name={chairman.name}
        lines={[chairman.seat, `Founded Gurukul Vidyapeeth on ${school.foundedOn}`]}
      />
      <Card
        image={viceChairman.image}
        icon={Award}
        role={viceChairman.role}
        nameHi={viceChairman.nameHi}
        name={viceChairman.name}
        lines={[school.fullName, `Run by ${school.society}`]}
        delay={0.1}
      />
      <Card
        image={principal.image}
        contain={principal.contain}
        icon={GraduationCap}
        role={principal.role}
        name={principal.name}
        lines={[principal.qualification, ...principal.experience.map((e) => `${e.value} ${e.label}`)]}
        delay={0.2}
        variant="light"
      />
    </div>
  );
}
