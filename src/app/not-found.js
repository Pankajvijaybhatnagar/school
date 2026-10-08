import { ArrowLeft, Phone } from "lucide-react";
import Button from "@/components/ui/Button";
import { primaryContact } from "@/data/site";

export const metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-mesh py-28 text-white">
      <div className="absolute inset-0 bg-dots opacity-40" />
      <div className="container-x relative text-center">
        <p className="font-display text-[8rem] font-bold leading-none text-gradient sm:text-[11rem]">404</p>
        <h1 className="mt-2 text-3xl font-semibold sm:text-4xl">Oops! This page skipped class.</h1>
        <p className="mx-auto mt-4 max-w-xl text-white/75">The page you are looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.</p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Button href="/" variant="gold"><ArrowLeft className="h-4 w-4" /> Back to Home</Button>
          <Button href={`tel:${primaryContact.phone}`} variant="outline"><Phone className="h-4 w-4" /> {primaryContact.phone}</Button>
        </div>
      </div>
    </section>
  );
}
