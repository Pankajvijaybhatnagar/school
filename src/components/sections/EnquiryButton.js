"use client";

import { openEnquiry } from "@/components/layout/EnquiryModal";
import { buttonBase } from "@/components/ui/Button";

export default function EnquiryButton({ children = "Enquire Now", className = "" }) {
  return (
    <button type="button" onClick={openEnquiry} className={`${buttonBase} ${className}`}>
      {children}
    </button>
  );
}
