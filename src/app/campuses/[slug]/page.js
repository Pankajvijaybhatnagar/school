import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight, BadgeCheck, CheckCircle2, ChevronRight, Eye, Images, Mail, MapPin, Phone, School, Sparkles, Trophy, Video,
} from "lucide-react";
import SmartImage from "@/components/ui/SmartImage";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Counter from "@/components/ui/Counter";
import Icon from "@/components/ui/Icon";
import Button from "@/components/ui/Button";
import MapEmbed from "@/components/sections/MapEmbed";
import EnquiryForm from "@/components/sections/EnquiryForm";
import PrincipalMessage from "@/components/sections/PrincipalMessage";
import Testimonials from "@/components/sections/Testimonials";
import CbseResults from "@/components/sections/CbseResults";
import { socialIconMap, WhatsappIcon } from "@/components/ui/SocialIcons";
import { campuses, collaboration, lifeAtRps, neet2026, streams } from "@/data/site";

export function generateStaticParams() {
  return campuses.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const c = campuses.find((x) => x.slug === slug);
  if (!c) return { title: "Campus not found" };
  return {
    title: `${c.name}, ${c.city}`,
    description: `${c.fullName} — ${c.board}. ${c.admissions}. ${c.address}.`,
  };
}

export default async function CampusPage({ params }) {
  const { slug } = await params;
  const c = campuses.find((x) => x.slug === slug);
  if (!c) notFound();

  const campusOption = `${c.name}, ${c.city === "Gurugram" ? "Sector 89, Gurugram" : c.city}`;
  const isMgarh = slug === "mahendergarh";
  const isRewari = slug === "rewari";
  const isGurugram = slug === "gurugram-sector-89";

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-950 text-white">
        <SmartImage src={c.image} alt={c.fullName} className="absolute inset-0 opacity-50" variant="navy" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-950/30" />
        <div className="absolute inset-0 bg-dots opacity-30" />
        <div className="container-x relative py-20 sm:py-28">
          <Reveal>
            <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-1 text-sm text-white/70">
              <Link href="/" className="hover:text-gold-400">Home</Link>
              <ChevronRight className="h-4 w-4" />
              <Link href="/campuses" className="hover:text-gold-400">RPS Campuses</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-white">{c.city}</span>
            </nav>
            <span className="inline-flex items-center gap-2 rounded-md bg-gold-500 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-navy-950">
              <Sparkles className="h-3.5 w-3.5" /> {c.admissions}
            </span>
            <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              {c.name}
              <span className="block text-gradient">{c.area}, {c.city}</span>
            </h1>
            <p className="mt-4 flex items-center gap-2 text-white/80"><BadgeCheck className="h-5 w-5 text-gold-400" /> {c.board}</p>
            <p className="mt-2 font-serif text-xl italic text-gold-400">{c.tagline}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="#enquiry" variant="primary">Admission Enquiry <ArrowRight className="h-4 w-4" /></Button>
              <Button href={`tel:${c.phones[0].number}`} variant="outline"><Phone className="h-4 w-4" /> {c.phones[0].number}</Button>
            </div>
          </Reveal>
        </div>
        <svg className="absolute -bottom-px left-0 h-10 w-full text-white" viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden="true">
          <path fill="currentColor" d="M0,40 C240,80 480,0 720,30 C960,60 1200,10 1440,40 L1440,60 L0,60 Z" />
        </svg>
      </section>

      {/* About */}
      <section className="py-20">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal from="right" className="relative">
            <div className="absolute -bottom-5 -right-5 h-full w-full rounded-2xl border-4 border-dashed border-brand-600/30" />
            <SmartImage src={c.image} alt={c.fullName} label={c.fullName} className="relative aspect-[4/3] rounded-2xl shadow-xl" />
            <div className="absolute -left-4 bottom-8 flex items-center gap-3 rounded-2xl bg-white p-4 shadow-xl">
              <SmartImage src={c.logo} alt={`${c.name} logo`} className="h-14 w-14 rounded-xl" variant="light" />
              <div>
                <p className="text-sm font-semibold text-navy-900">{c.name}</p>
                <p className="text-xs text-muted">{c.city}</p>
              </div>
            </div>
          </Reveal>
          <Reveal from="left">
            <SectionHeading eyebrow={`Welcome to RPS ${c.city}`} title="About the" highlight="Campus" align="left" />
            <p className="-mt-6 text-base leading-8 text-muted">{c.about}</p>
            {isMgarh && (
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-cream p-4 ring-1 ring-gold-500/30">
                  <p className="text-xs font-bold uppercase tracking-wider text-muted">Affiliation No.</p>
                  <p className="font-display text-2xl font-bold text-navy-900">{c.affiliationNo}</p>
                </div>
                <div className="rounded-2xl bg-cream p-4 ring-1 ring-gold-500/30">
                  <p className="text-xs font-bold uppercase tracking-wider text-muted">School Code</p>
                  <p className="font-display text-2xl font-bold text-navy-900">{c.schoolCode}</p>
                </div>
              </div>
            )}
            <div className="mt-6 flex flex-wrap gap-2">
              {c.features.map((f) => (
                <span key={f} className="inline-flex items-center gap-1.5 rounded-sm border border-line bg-cream px-4 py-2 text-sm font-medium text-navy-800">
                  <CheckCircle2 className="h-4 w-4" /> {f}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="relative overflow-hidden bg-mesh py-16 text-white">
        <div className="absolute inset-0 bg-dots opacity-40" />
        <div className="container-x relative grid grid-cols-2 gap-4 lg:grid-cols-4">
          {c.stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1} from="zoom">
              <div className="rounded-3xl glass p-6 text-center transition hover:-translate-y-2">
                <p className="font-display text-4xl font-bold sm:text-5xl"><Counter value={s.value} suffix={s.suffix || ""} /></p>
                <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-white/75">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Mahendergarh specific */}
      {isMgarh && (
        <>
          <section className="py-20">
            <div className="container-x">
              <SectionHeading eyebrow="Beyond the Board" title="Competitive" highlight="Excellence" text="Dedicated preparation for India's most prestigious entrance examinations." />
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
                {streams.map((s, i) => (
                  <Reveal key={s.name} delay={i * 0.06}>
                    <div className="group h-full rounded-3xl bg-white p-6 text-center shadow-lg shadow-navy-900/5 ring-1 ring-slate-100 card-lift">
                      <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-navy-800 text-white transition group-hover:bg-brand-600">
                        <Icon name={s.icon} className="h-7 w-7" />
                      </span>
                      <p className="mt-4 font-display text-xl font-bold text-navy-900">{s.name}</p>
                      <p className="mt-1 text-xs text-muted">{s.full}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          <section className="relative overflow-hidden bg-navy-800 py-20 text-white">
            <div className="absolute inset-0 bg-dots opacity-30" />
            <div className="container-x relative">
              <Reveal className="mx-auto mb-12 max-w-3xl text-center">
                <h2 className="font-serif text-5xl font-bold italic">Life @ RPS</h2>
                <p className="mt-4 text-white/90">{lifeAtRps.text}</p>
              </Reveal>
              <div className="grid gap-6 md:grid-cols-2">
                {lifeAtRps.cards.map((card, i) => (
                  <Reveal key={card.title} delay={i * 0.12}>
                    <div className="h-full overflow-hidden rounded-3xl bg-white text-ink shadow-xl card-lift">
                      <SmartImage src={card.image} alt={card.title} label={card.title} className="aspect-video" />
                      <div className="p-6">
                        <h3 className="text-xl font-semibold text-navy-900">{card.title}</h3>
                        <p className="mt-2 text-sm leading-7 text-muted">{card.text}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-cream py-24">
            <div className="container-x">
              <PrincipalMessage />
            </div>
          </section>
        </>
      )}

      {/* Rewari specific */}
      {isRewari && (
        <>
          <section className="py-20">
            <div className="container-x grid items-center gap-12 lg:grid-cols-2">
              <Reveal from="right">
                <SectionHeading eyebrow="Are You Ready For Join With RPS" title={c.joinTitle} align="left" />
                {c.joinText.map((t) => <p key={t} className="-mt-6 mb-8 leading-8 text-muted">{t}</p>)}
                <Button href="#enquiry">Join RPS Rewari <ArrowRight className="h-4 w-4" /></Button>
              </Reveal>
              <Reveal from="left">
                <div className="grid gap-4 sm:grid-cols-2">
                  {c.features.map((f, i) => (
                    <div key={f} className={`flex items-center gap-3 rounded-2xl p-5 shadow-lg card-lift ${i % 2 ? "bg-navy-900 text-white" : "bg-white text-navy-900 ring-1 ring-slate-100"}`}>
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-600 text-white"><CheckCircle2 className="h-5 w-5" /></span>
                      <span className="font-bold">{f}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </section>

          <section className="bg-cream py-20">
            <div className="container-x">
              <SectionHeading eyebrow="CBSE Board Result 2026" title="Class X Soars to" highlight="New Heights" text="Numbers That Speak Louder Than Words" />
              <CbseResults />
            </div>
          </section>

          <section className="py-20">
            <div className="container-x">
              <SectionHeading eyebrow="Our Students Testimonials" title="Students' say About" highlight="RPS Rewari" />
              <Testimonials />
            </div>
          </section>
        </>
      )}

      {/* Gurugram specific */}
      {isGurugram && (
        <>
          <section className="py-20">
            <div className="container-x">
              <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
                {[
                  { label: "Gallery", href: "/gallery", icon: Images },
                  { label: "Campus Tour", href: "/videos", icon: Video },
                  { label: "Facilities", href: "/facilities", icon: School },
                  { label: "Admission", href: "/admission", icon: Sparkles },
                ].map((t, i) => (
                  <Reveal key={t.label} delay={i * 0.08}>
                    <Link href={t.href} className="group flex flex-col items-center rounded-3xl bg-white p-8 text-center shadow-lg shadow-navy-900/5 ring-1 ring-slate-100 card-lift">
                      <span className={`grid h-20 w-20 place-items-center rounded-full border border-gold-500/50 bg-cream text-navy-800 transition-colors duration-300 group-hover:bg-navy-900 group-hover:text-gold-400`}>
                        <t.icon className="h-9 w-9" />
                      </span>
                      <span className="mt-4 font-bold text-navy-900">{t.label}</span>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          <section className="relative overflow-hidden bg-mesh py-20 text-white">
            <div className="absolute inset-0 bg-dots opacity-40" />
            <div className="container-x relative grid items-center gap-12 lg:grid-cols-2">
              <Reveal from="right">
                <SectionHeading eyebrow="Collaboration" title={collaboration.title} light align="left" />
                <p className="-mt-6 leading-8 text-white/80">{collaboration.text}</p>
                <div className="mt-8 flex flex-wrap gap-4">
                  {[["badgeCambridge", "Cambridge"], ["badgeISA", "ISA"], ["badgeTop5", "Top 5"], ["badge28Years", "28 Years"]].map(([b, label]) => (
                    <SmartImage key={b} src={b} alt={label} label={label} className="h-20 w-20 rounded-2xl bg-white" variant="light" imgClassName="!object-contain p-2" />
                  ))}
                </div>
              </Reveal>
              <Reveal from="left" className="grid gap-4">
                {collaboration.awards.map((a) => (
                  <div key={a} className="flex items-center gap-4 rounded-2xl glass p-5">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gold-500 text-navy-950"><Trophy className="h-6 w-6" /></span>
                    <span className="text-lg font-bold">{a}</span>
                  </div>
                ))}
              </Reveal>
            </div>
          </section>

          <section className="bg-cream py-20">
            <div className="container-x">
              <Reveal className="flex flex-col items-center gap-8 rounded-2xl bg-white p-8 shadow-xl sm:p-12 lg:flex-row">
                <div className="text-center lg:text-left">
                  <p className="text-sm font-bold uppercase tracking-widest text-brand-600">{neet2026.title}</p>
                  <h3 className="mt-2 text-3xl font-semibold text-navy-900 sm:text-4xl">
                    <span className="text-gradient">{neet2026.above500} RPSians</span> scored 500 & above in NEET 2026
                  </h3>
                  <p className="mt-3 text-muted">Top score: {neet2026.achievers[0][0]} — {neet2026.achievers[0][2]}/720</p>
                </div>
                <Button href="/achievements#neet" className="shrink-0">View All Achievers <ArrowRight className="h-4 w-4" /></Button>
              </Reveal>
            </div>
          </section>
        </>
      )}

      {/* Contact + enquiry */}
      <section id="enquiry" className="scroll-mt-24 py-20">
        <div className="container-x grid gap-10 lg:grid-cols-5">
          <Reveal from="right" className="lg:col-span-2">
            <SectionHeading eyebrow="Get in Touch" title="Visit" highlight={c.city} align="left" />
            <ul className="-mt-4 space-y-4">
              <li className="flex gap-3 rounded-2xl bg-cream p-4">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                <span className="text-sm text-navy-900">{c.address}</span>
              </li>
              {c.phones.map((p) => (
                <li key={p.number} className="flex items-center gap-3 rounded-2xl bg-cream p-4">
                  <Phone className="h-5 w-5 shrink-0 text-brand-600" />
                  <span className="text-sm text-navy-900">{p.label}: <a href={`tel:${p.number}`} className="font-bold hover:text-brand-600">{p.number}</a></span>
                  {p.whatsapp && (
                    <a href={`https://wa.me/91${p.number.replace(/\D/g, "").slice(-10)}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="ml-auto grid h-9 w-9 place-items-center rounded-full bg-emerald-500 text-white">
                      <WhatsappIcon className="h-4 w-4" />
                    </a>
                  )}
                </li>
              ))}
              {c.emails.map((m) => (
                <li key={m} className="flex items-center gap-3 rounded-2xl bg-cream p-4">
                  <Mail className="h-5 w-5 shrink-0 text-brand-600" />
                  <a href={`mailto:${m}`} className="text-sm font-semibold text-navy-900 hover:text-brand-600">{m}</a>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap items-center gap-2">
              {Object.entries(c.social).map(([k, href]) => {
                const I = socialIconMap[k];
                return I ? (
                  <a key={k} href={href} aria-label={k} className="grid h-10 w-10 place-items-center rounded-full bg-navy-800 text-white transition hover:-translate-y-1 hover:bg-brand-600">
                    <I className="h-4 w-4" />
                  </a>
                ) : null;
              })}
            </div>
            {c.socialStats && (
              <ul className="mt-4 space-y-1 text-sm text-muted">
                {Object.entries(c.socialStats).map(([k, v]) => (
                  <li key={k}><span className="font-semibold capitalize text-navy-900">{k}:</span> {v}</li>
                ))}
              </ul>
            )}
            <p className="mt-6 flex items-center gap-2 text-sm text-muted">
              <Eye className="h-4 w-4 text-brand-600" /> Number of Visitors:
              <span className="rounded bg-navy-900 px-2 py-0.5 font-mono font-bold tracking-widest text-gold-400">{c.visitors}</span>
            </p>
          </Reveal>
          <Reveal from="left" className="lg:col-span-3">
            <div className="rounded-2xl bg-white p-6 shadow-xl shadow-navy-900/10 ring-1 ring-slate-100 sm:p-10">
              <h3 className="text-2xl font-semibold text-navy-900">Admission Enquiry — {c.city}</h3>
              <p className="mb-6 mt-1 text-sm text-muted">{c.admissions}. Share your details and we&apos;ll call you back.</p>
              <EnquiryForm defaultCampus={campusOption} />
            </div>
          </Reveal>
        </div>
        <div className="container-x mt-12">
          <MapEmbed query={c.mapQuery} title={`${c.fullName} location`} className="h-96" />
        </div>
      </section>
    </>
  );
}
