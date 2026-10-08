import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import VideoGrid from "@/components/sections/VideoGrid";
import { social } from "@/data/site";
import { FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from "@/components/ui/SocialIcons";

export const metadata = {
  title: "Media & Video Gallery",
  description: "Watch RPS videos — RPSian Song, NEET 2026 milestone, CBSE Class 10th 2026 record results, felicitation ceremonies and the India-Japan Cultural Bridge 2026.",
};

const channels = [
  { name: "Facebook", handle: "RPS Mahendergarh", stat: "21K followers", href: social.facebook, Icon: FacebookIcon, cta: "Follow Page" },
  { name: "Instagram", handle: "@rpsmahendergarh", stat: "2,508 followers • 865 posts", href: social.instagram, Icon: InstagramIcon, cta: "Follow" },
  { name: "Twitter", handle: "@RPS__Schools", stat: "Tweets by RPS__Schools", href: social.twitter, Icon: TwitterIcon, cta: "Follow" },
  { name: "YouTube", handle: "RPS Mahendergarh", stat: "Videos & live events", href: social.youtube, Icon: YoutubeIcon, cta: "Subscribe" },
];

export default function VideosPage() {
  return (
    <>
      <PageHero
        title="Media &"
        highlight="Video Gallery"
        subtitle="Relive our milestones, celebrations and record-breaking results."
        crumbs={[{ label: "Campus Life", href: "/facilities" }, { label: "Video Gallery" }]}
      />
      <section className="py-20">
        <div className="container-x">
          <SectionHeading eyebrow="Watch" title="RPS on" highlight="YouTube" />
          <VideoGrid />
        </div>
      </section>
      <section className="bg-cream py-20">
        <div className="container-x">
          <SectionHeading eyebrow="Social Links" title="Stay" highlight="Connected" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {channels.map((c, i) => (
              <Reveal key={c.name} delay={i * 0.08}>
                <a href={c.href} target="_blank" rel="noopener noreferrer" className="group block h-full overflow-hidden rounded-3xl bg-white shadow-lg card-lift">
                  <div className={`relative border-b-2 border-gold-500 bg-navy-900 p-8 text-white`}>
                    <c.Icon className="h-10 w-10 transition group-hover:scale-110" />
                    <p className="mt-4 text-2xl font-semibold">{c.name}</p>
                  </div>
                  <div className="p-6">
                    <p className="font-bold text-navy-900">{c.handle}</p>
                    <p className="text-sm text-muted">{c.stat}</p>
                    <span className="mt-4 inline-block rounded-md bg-navy-800 px-4 py-2 text-xs font-bold text-white transition group-hover:bg-brand-600">{c.cta}</span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
