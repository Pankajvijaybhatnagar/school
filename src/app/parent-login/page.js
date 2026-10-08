import { Bell, CalendarCheck, FileBarChart, Wallet } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import ParentLoginCard from "@/components/misc/ParentLoginCard";

export const metadata = {
  title: "Parent Login",
  description: "Parent portal login for RPS Group of Schools — attendance, results, fees and school notices.",
};

const perks = [
  { icon: CalendarCheck, label: "Attendance" },
  { icon: FileBarChart, label: "Results & Report Cards" },
  { icon: Wallet, label: "Fee Payments" },
  { icon: Bell, label: "Notices & Circulars" },
];

export default function ParentLoginPage() {
  return (
    <>
      <PageHero title="Parent" highlight="Login" subtitle="Stay connected with your child's progress at RPS." crumbs={[{ label: "Parent Login" }]} />
      <section className="bg-cream py-20">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal from="right">
            <h2 className="text-3xl font-semibold text-navy-900 sm:text-4xl">
              Everything about your child, <span className="text-gradient">in one place.</span>
            </h2>
            <p className="mt-4 leading-8 text-muted">Log in with the Admission No. / Username and password shared by your campus office.</p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {perks.map((p) => (
                <div key={p.label} className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-navy-800 text-gold-400"><p.icon className="h-5 w-5" /></span>
                  <span className="text-sm font-bold text-navy-900">{p.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal from="left">
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-3 border border-gold-500/40" />
              <div className="relative rounded-2xl bg-white p-8 shadow-xl sm:p-10">
                <h3 className="text-2xl font-semibold text-navy-900">Welcome Back</h3>
                <p className="mb-6 mt-1 text-sm text-muted">Sign in to the RPS parent portal</p>
                <ParentLoginCard />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
