"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { campuses, otherCampuses, primaryContact } from "@/data/site";
import { WhatsappIcon } from "@/components/ui/SocialIcons";

const classes = ["Nursery", "LKG", "UKG", ...Array.from({ length: 12 }, (_, i) => `Class ${i + 1}`)];
const campusOptions = [
  ...campuses.map((c) => `${c.name}, ${c.city === "Gurugram" ? "Sector 89, Gurugram" : c.city}`),
  ...otherCampuses.map((c) => c.name),
];

const initial = { student: "", parent: "", phone: "", email: "", campus: "", grade: "", message: "" };

function validate(v) {
  const e = {};
  if (v.student.trim().length < 2) e.student = "Please enter the student's name";
  if (v.parent.trim().length < 2) e.parent = "Please enter the parent's name";
  if (!/^[6-9]\d{9}$/.test(v.phone.replace(/\D/g, "").slice(-10))) e.phone = "Enter a valid 10-digit mobile number";
  if (v.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = "Enter a valid email address";
  if (!v.campus) e.campus = "Please choose a campus";
  if (!v.grade) e.grade = "Please choose a class";
  return e;
}

export default function EnquiryForm({ compact = false, onDone, defaultCampus = "" }) {
  const [values, setValues] = useState({ ...initial, campus: defaultCampus });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | done | error

  const set = (k) => (e) => {
    setValues((v) => ({ ...v, [k]: e.target.value }));
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }));
  };

  async function submit(e) {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("done");
      onDone?.();
    } catch {
      setStatus("error");
    }
  }

  const whatsappText = encodeURIComponent(
    `Admission Enquiry\nStudent: ${values.student}\nParent: ${values.parent}\nPhone: ${values.phone}\nCampus: ${values.campus}\nClass: ${values.grade}\n${values.message}`
  );

  const field = (k) =>
    `w-full rounded-xl border bg-slate-50 px-4 py-3 text-sm text-navy-900 outline-none transition placeholder:text-slate-400 focus:bg-white focus:ring-4 ${
      errors[k] ? "border-brand-500 focus:ring-brand-100" : "border-slate-200 focus:border-navy-600 focus:ring-navy-600/10"
    }`;

  const err = (k) =>
    errors[k] ? <p className="mt-1 text-xs font-medium text-brand-600">{errors[k]}</p> : null;

  return (
    <AnimatePresence mode="wait">
      {status === "done" ? (
        <motion.div
          key="done"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center rounded-2xl bg-emerald-50 p-8 text-center"
        >
          <CheckCircle2 className="h-16 w-16 text-emerald-500" />
          <h4 className="mt-4 text-xl font-bold text-navy-900">Thank you, {values.parent.split(" ")[0]}!</h4>
          <p className="mt-2 text-sm text-muted">
            Your enquiry for <b>{values.student}</b> ({values.grade}) has been received. Our admission team will contact you shortly.
          </p>
          <a
            href={`https://wa.me/${primaryContact.whatsapp}?text=${whatsappText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-md bg-emerald-500 px-5 py-2.5 text-sm font-bold text-white hover:bg-emerald-600"
          >
            <WhatsappIcon className="h-4 w-4" /> Also send on WhatsApp
          </a>
        </motion.div>
      ) : (
        <motion.form key="form" onSubmit={submit} noValidate className="grid gap-4 sm:grid-cols-2" exit={{ opacity: 0 }}>
          <div>
            <input className={field("student")} placeholder="Student's Name *" value={values.student} onChange={set("student")} aria-label="Student's name" />
            {err("student")}
          </div>
          <div>
            <input className={field("parent")} placeholder="Parent's Name *" value={values.parent} onChange={set("parent")} aria-label="Parent's name" />
            {err("parent")}
          </div>
          <div>
            <input className={field("phone")} placeholder="Mobile Number *" inputMode="tel" maxLength={14} value={values.phone} onChange={set("phone")} aria-label="Mobile number" />
            {err("phone")}
          </div>
          <div>
            <input className={field("email")} placeholder="Email (optional)" type="email" value={values.email} onChange={set("email")} aria-label="Email" />
            {err("email")}
          </div>
          <div>
            <select className={field("campus")} value={values.campus} onChange={set("campus")} aria-label="Campus">
              <option value="">Select Campus *</option>
              {campusOptions.map((c) => <option key={c}>{c}</option>)}
            </select>
            {err("campus")}
          </div>
          <div>
            <select className={field("grade")} value={values.grade} onChange={set("grade")} aria-label="Class">
              <option value="">Class Seeking Admission *</option>
              {classes.map((c) => <option key={c}>{c}</option>)}
            </select>
            {err("grade")}
          </div>
          {!compact && (
            <textarea
              className={`${field("message")} sm:col-span-2`}
              rows={4}
              placeholder="Your message / query"
              value={values.message}
              onChange={set("message")}
              aria-label="Message"
            />
          )}
          {status === "error" && (
            <p className="text-sm font-medium text-brand-600 sm:col-span-2">
              Something went wrong. Please call us at {primaryContact.admissionPhone}.
            </p>
          )}
          <button
            type="submit"
            disabled={status === "sending"}
            className="group inline-flex items-center justify-center gap-2 rounded-md bg-navy-800 px-6 py-3.5 font-bold text-white shadow-lg shadow-navy-900/10 transition hover:-translate-y-0.5 disabled:opacity-70 sm:col-span-2"
          >
            {status === "sending" ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-4 w-4 transition group-hover:translate-x-1" />}
            {status === "sending" ? "Submitting..." : "Submit Enquiry"}
          </button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
