"use client";

import { useEffect, useRef, useState } from "react";
import { ImageIcon } from "lucide-react";
import { images } from "@/data/images";

const tones = {
  navy: "from-navy-800 to-navy-950",
  red: "from-cream to-gold-100",
  gold: "from-[#efe9de] to-[#ddd2bf]",
  light: "from-cream to-gold-100",
};

// Renders an image from the registry (or a direct path). If the file is not
// uploaded yet, a branded gradient placeholder is shown instead.
export default function SmartImage({
  src,
  alt = "",
  className = "",
  imgClassName = "",
  label,
  variant = "navy",
  priority = false,
}) {
  const resolved = images[src] || src;
  const [failed, setFailed] = useState(!resolved);
  const ref = useRef(null);

  useEffect(() => {
    const img = ref.current;
    // The error event can fire before hydration; check the final state.
    if (img && img.complete && img.naturalWidth === 0) setFailed(true);
  }, []);

  const light = variant !== "navy";
  // Callers may position the wrapper themselves (e.g. "absolute inset-0").
  const positioned = /(^|\s)(absolute|fixed|sticky)(\s|$)/.test(className);

  return (
    <div className={`${positioned ? "" : "relative"} overflow-hidden ${className}`}>
      {failed ? (
        <div
          role="img"
          aria-label={alt || label || "Image placeholder"}
          className={`absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gradient-to-br ${tones[variant] || tones.navy}`}
        >
          <div className="absolute inset-0 bg-dots" />
          <span className={`absolute inset-3 border ${light ? "border-gold-500/30" : "border-gold-400/20"}`} />
          {label && (
            <>
              <ImageIcon className={`relative h-7 w-7 ${light ? "text-gold-500/60" : "text-gold-400/60"}`} />
              <span className={`relative max-w-[85%] text-center font-serif text-sm italic ${light ? "text-navy-700/70" : "text-white/70"}`}>
                {label}
              </span>
            </>
          )}
        </div>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          ref={ref}
          src={resolved}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          onError={() => setFailed(true)}
          className={`absolute inset-0 h-full w-full object-cover ${imgClassName}`}
        />
      )}
    </div>
  );
}
