import Reveal from "./Reveal";

// Classic ornament: hairline – diamond – hairline.
export function Ornament({ light = false, align = "center" }) {
  const line = light ? "bg-gold-400/60" : "bg-gold-500/70";
  return (
    <span className={`flex items-center gap-2 ${align === "center" ? "justify-center" : ""}`} aria-hidden="true">
      <span className={`h-px w-10 ${line}`} />
      <span className={`h-1.5 w-1.5 rotate-45 ${light ? "bg-gold-400" : "bg-gold-500"}`} />
      <span className={`h-px w-10 ${line}`} />
    </span>
  );
}

export default function SectionHeading({ eyebrow, title, highlight, text, light = false, align = "center" }) {
  const center = align === "center";
  return (
    <Reveal className={`mb-14 flex max-w-3xl flex-col ${center ? "mx-auto items-center text-center" : "items-start text-left"}`}>
      {eyebrow && (
        <span className={`mb-4 text-xs font-semibold uppercase tracking-[0.28em] ${light ? "text-gold-400" : "text-gold-500"}`}>
          {eyebrow}
        </span>
      )}
      <h2 className={`text-3xl font-semibold leading-tight sm:text-4xl lg:text-[2.75rem] ${light ? "text-white" : "text-navy-900"}`}>
        {title} {highlight && <span className="text-gradient">{highlight}</span>}
      </h2>
      <div className="mt-5">
        <Ornament light={light} align={align} />
      </div>
      {text && <p className={`mt-5 text-base leading-relaxed sm:text-[17px] ${light ? "text-white/70" : "text-muted"}`}>{text}</p>}
    </Reveal>
  );
}
