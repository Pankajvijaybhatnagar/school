import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from "@/components/ui/SocialIcons";
import { social } from "@/data/site";

const feeds = [
  { key: "twitter", Icon: TwitterIcon, name: "Twitter / X", handle: "@RPS__Schools", meta: "Tweets by RPS__Schools" },
  { key: "facebook", Icon: FacebookIcon, name: "Facebook", handle: "RPS Mahendergarh", meta: "21K followers" },
  { key: "instagram", Icon: InstagramIcon, name: "Instagram", handle: "@rpsmahendergarh", meta: "2,508 followers • 865 posts" },
  { key: "youtube", Icon: YoutubeIcon, name: "YouTube", handle: "RPS Mahendergarh", meta: "RPSian Song, results & ceremonies" },
];

export default function SocialFeeds() {
  return (
    <section className="bg-ivory py-24">
      <div className="container-x">
        <SectionHeading eyebrow="Social Links" title="Stay Connected with" highlight="RPS" text="Follow RPS International School Gurugram Sec-89, RPS Mahendergarh and RPS Rewari for daily updates." />
        <Reveal className="grid border-l border-t border-line sm:grid-cols-2 lg:grid-cols-4">
          {feeds.map((f) => (
            <a
              key={f.key}
              href={social[f.key]}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative border-b border-r border-line bg-white p-8 transition-colors duration-300 hover:bg-navy-900"
            >
              <ArrowUpRight className="absolute right-6 top-6 h-5 w-5 text-line transition group-hover:text-gold-400" />
              <f.Icon className="h-7 w-7 text-navy-800 transition-colors group-hover:text-gold-400" />
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-gold-500">{f.name}</p>
              <p className="mt-2 font-display text-xl font-semibold text-navy-900 transition-colors group-hover:text-white">{f.handle}</p>
              <p className="mt-1 text-sm text-muted transition-colors group-hover:text-white/60">{f.meta}</p>
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
