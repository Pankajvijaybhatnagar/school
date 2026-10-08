import Link from "next/link";

const styles = {
  primary: "bg-brand-600 text-white hover:bg-brand-700",
  gold: "bg-gold-500 text-white hover:bg-gold-400",
  navy: "bg-navy-800 text-white hover:bg-navy-900",
  outline: "border border-white/60 text-white hover:bg-white hover:text-navy-900",
  ghost: "border border-navy-800 text-navy-800 hover:bg-navy-800 hover:text-white",
};

export const buttonBase =
  "inline-flex items-center justify-center gap-2 rounded-sm px-7 py-3.5 text-[13px] font-semibold uppercase tracking-[0.12em] transition-colors duration-300";

export default function Button({ href, children, variant = "primary", className = "", ...props }) {
  const cls = `${buttonBase} ${styles[variant]} ${className}`;

  if (!href) {
    return (
      <button className={cls} {...props}>
        {children}
      </button>
    );
  }
  if (/^(https?:|tel:|mailto:)/.test(href)) {
    return (
      <a href={href} className={cls} {...props}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} {...props}>
      {children}
    </Link>
  );
}
