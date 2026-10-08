"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Mail, MapPin, Menu, PhoneCall, X } from "lucide-react";
import Logo from "./Logo";
import { navigation, primaryContact, social } from "@/data/site";
import { socialIconMap } from "@/components/ui/SocialIcons";
import { openEnquiry } from "./EnquiryModal";

const topLinks = [
  { label: "C.E.O Window", href: "/ceo-window" },
  { label: "Parent Login", href: "/parent-login" },
  { label: "Mandatory Disclosure", href: "/mandatory-disclosure" },
];

/* Row 0 — slim utility bar (desktop only). */
function TopBar() {
  return (
    <div className="hidden bg-navy-950 text-[12px] text-white/70 lg:block">
      <div className="container-x flex h-9 items-center justify-between gap-6">
        <ul className="flex items-center divide-x divide-white/15">
          {topLinks.map((l) => (
            <li key={l.href} className="px-4 first:pl-0">
              <Link href={l.href} className="whitespace-nowrap tracking-wide transition hover:text-gold-400">{l.label}</Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-6">
          <span className="hidden items-center gap-2 whitespace-nowrap xl:flex">
            <MapPin className="h-3.5 w-3.5 text-gold-500" /> Satnali Road, Mahendergarh (HR)
          </span>
          <span className="flex items-center gap-3.5 border-white/15 xl:border-l xl:pl-6">
            {Object.entries(social).map(([k, href]) => {
              const I = socialIconMap[k];
              return (
                <a key={k} href={href} aria-label={k} className="transition hover:text-gold-400">
                  <I className="h-3.5 w-3.5" />
                </a>
              );
            })}
          </span>
        </div>
      </div>
    </div>
  );
}

/* Contact block shown in the brand row. */
function ContactItem({ icon: Icon, label, value, href }) {
  return (
    <a href={href} className="group flex items-center gap-3">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-gold-500/50 text-gold-500 transition-colors group-hover:bg-navy-900 group-hover:text-gold-400">
        <Icon className="h-4 w-4" strokeWidth={1.6} />
      </span>
      <span className="leading-tight">
        <span className="block text-[10.5px] font-semibold uppercase tracking-[0.18em] text-muted">{label}</span>
        <span className="mt-0.5 block whitespace-nowrap text-sm font-semibold text-navy-900 transition-colors group-hover:text-brand-600">{value}</span>
      </span>
    </a>
  );
}

/* Row 2 — full-width navigation bar (desktop only, sticky). */
function DesktopNav({ pathname, scrolled }) {
  const [open, setOpen] = useState(null);
  return (
    <div className={`sticky top-0 z-50 hidden bg-navy-900 xl:block ${scrolled ? "shadow-lg shadow-navy-950/20" : ""}`}>
      <nav className="container-x" aria-label="Main">
        <ul className="flex items-center justify-center">
          {navigation.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <li
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpen(item.label)}
                onMouseLeave={() => setOpen(null)}
              >
                <Link
                  href={item.href}
                  className={`group relative flex items-center gap-1.5 whitespace-nowrap px-3.5 py-4 text-[12.5px] font-semibold uppercase tracking-[0.1em] transition-colors 2xl:px-4 ${
                    active ? "text-gold-400" : "text-white/90 hover:text-gold-400"
                  }`}
                  aria-haspopup={item.children ? "true" : undefined}
                  aria-expanded={item.children ? open === item.label : undefined}
                  onFocus={() => setOpen(item.label)}
                >
                  {item.label}
                  {item.children && <ChevronDown className={`h-3 w-3 opacity-70 transition ${open === item.label ? "rotate-180" : ""}`} />}
                  <span
                    className={`absolute inset-x-3.5 bottom-0 h-0.5 origin-center bg-gold-500 transition-transform duration-300 2xl:inset-x-4 ${
                      active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
                <AnimatePresence>
                  {item.children && open === item.label && (
                    <motion.ul
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.18 }}
                      className="absolute left-0 top-full z-50 min-w-60 border-t-2 border-gold-500 bg-white py-2 shadow-xl shadow-navy-900/15"
                    >
                      {item.children.map((c) => (
                        <li key={c.label}>
                          <Link
                            href={c.href}
                            onClick={() => setOpen(null)}
                            className="block border-l-2 border-transparent px-5 py-2.5 text-sm text-navy-800 transition hover:border-brand-600 hover:bg-cream hover:text-brand-600"
                          >
                            {c.label}
                          </Link>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

function MobileNav({ open, onClose }) {
  const [expanded, setExpanded] = useState(null);
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-[60] bg-navy-950/60 xl:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.aside
            className="fixed inset-y-0 right-0 z-[70] flex w-[86%] max-w-sm flex-col bg-ivory shadow-xl xl:hidden"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            aria-label="Mobile menu"
          >
            <div className="flex items-center justify-between border-b border-line p-4">
              <Logo compact />
              <button onClick={onClose} aria-label="Close menu" className="grid h-10 w-10 place-items-center border border-line text-navy-900">
                <X className="h-5 w-5" />
              </button>
            </div>
            <ul className="flex-1 overflow-y-auto px-4 py-2">
              {navigation.map((item) => (
                <li key={item.label} className="border-b border-line">
                  {item.children ? (
                    <>
                      <button
                        className="flex w-full items-center justify-between py-4 text-left text-sm font-semibold uppercase tracking-wider text-navy-900"
                        onClick={() => setExpanded(expanded === item.label ? null : item.label)}
                        aria-expanded={expanded === item.label}
                      >
                        {item.label}
                        <ChevronDown className={`h-4 w-4 transition ${expanded === item.label ? "rotate-180 text-gold-500" : ""}`} />
                      </button>
                      <AnimatePresence initial={false}>
                        {expanded === item.label && (
                          <motion.ul
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden border-l border-gold-500/50 pb-3 pl-4"
                          >
                            {item.children.map((c) => (
                              <li key={c.label}>
                                <Link href={c.href} onClick={onClose} className="block py-2 text-sm text-muted hover:text-brand-600">
                                  {c.label}
                                </Link>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link href={item.href} onClick={onClose} className="block py-4 text-sm font-semibold uppercase tracking-wider text-navy-900">
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <div className="grid gap-2 border-t border-line p-4">
              <a href={`tel:${primaryContact.admissionPhone}`} className="flex items-center justify-center gap-2 py-2 text-sm font-semibold text-navy-900">
                <PhoneCall className="h-4 w-4 text-gold-500" /> {primaryContact.admissionPhone}
              </a>
              <button
                onClick={() => { onClose(); openEnquiry(); }}
                className="bg-brand-600 py-3.5 text-[13px] font-semibold uppercase tracking-[0.12em] text-white"
              >
                Apply Now — 2026-27
              </button>
              <div className="grid grid-cols-2 gap-2 text-[12px] font-semibold uppercase tracking-wider">
                <Link href="/ceo-window" onClick={onClose} className="bg-navy-800 py-3 text-center text-white">CEO Window</Link>
                <Link href="/parent-login" onClick={onClose} className="border border-navy-800 py-3 text-center text-navy-800">Parent Login</Link>
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 140);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  return (
    <>
      <TopBar />
      {/* Row 1 — brand row. Sticky on small screens; static on desktop where the nav bar sticks instead. */}
      <header className={`sticky top-0 z-50 border-b border-line bg-white xl:static ${scrolled ? "shadow-md shadow-navy-900/5 xl:shadow-none" : ""}`}>
        <div className="container-x flex h-[76px] items-center justify-between gap-6 lg:h-24">
          <Logo />
          <div className="flex items-center gap-7">
            <div className="hidden items-center gap-7 lg:flex">
              <ContactItem icon={PhoneCall} label="Admission Enquiry" value={primaryContact.admissionPhone} href={`tel:${primaryContact.admissionPhone}`} />
              <span className="hidden h-10 w-px bg-line xl:block" />
              <div className="hidden xl:block">
                <ContactItem icon={Mail} label="Write to Us" value={primaryContact.email} href={`mailto:${primaryContact.email}`} />
              </div>
            </div>
            <button
              onClick={openEnquiry}
              className="hidden whitespace-nowrap bg-brand-600 px-6 py-3.5 text-[12px] font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-brand-700 sm:inline-flex"
            >
              Apply Now
            </button>
            <button
              onClick={() => setMobileOpen(true)}
              className="grid h-11 w-11 shrink-0 place-items-center border border-navy-800 text-navy-800 xl:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>
      <DesktopNav pathname={pathname} scrolled={scrolled} />
      <div className="hidden h-[3px] bg-gold-500 xl:block" />
      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
