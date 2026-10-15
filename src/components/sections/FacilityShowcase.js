import { CheckCircle2 } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SmartImage from "@/components/ui/SmartImage";
import { photo, thumb } from "@/data/photos";

const rows = [
  {
    id: "labs",
    eyebrow: "Practical Learning",
    title: "Science Laboratories",
    text: "Well-equipped laboratories where students of the senior classes observe, experiment and learn — from anatomy models in biology to titrations in chemistry and circuits in physics.",
    points: ["Physics, Chemistry & Biology", "Models, charts & apparatus", "Guided practical sessions"],
    main: "science-lab-3",
    small: ["science-practical", "physics-practical"],
  },
  {
    id: "computers",
    eyebrow: "Digital Skills",
    title: "Computer Lab",
    text: "Individual workstations let every student practise hands-on — from first mouse clicks in the junior classes to programming and applications in the senior classes.",
    points: ["Individual workstations", "Internet-enabled campus", "Junior & senior batches"],
    main: "computer-lab-6",
    small: ["computer-lab-2", "computer-lab-3"],
  },
  {
    id: "classrooms",
    eyebrow: "Smart Learning",
    title: "Classrooms & AV Room",
    text: "Bright, airy classrooms and an audio-visual room with a projector screen bring lessons to life with maps, videos and presentations.",
    points: ["20 classrooms", "Audio-visual / smart room", "Learning walls & murals"],
    main: "smart-classroom",
    small: ["class-senior-3", "mural-human-heart"],
  },
  {
    id: "library",
    eyebrow: "Reading Culture",
    title: "School Library",
    text: "Tall shelves of books, reference volumes and magazines, with long reading tables where students study and research in quiet.",
    points: ["Reference & story books", "Reading tables", "Group study space"],
    main: "library-2",
    small: ["library-study", "library"],
  },
  {
    id: "pre-primary",
    eyebrow: "Nursery • LKG • UKG",
    title: "Pre-Primary Play Zone",
    text: "A cheerful, colourful wing with painted walls, slides, rockers and ride-on toys — where our youngest learners grow through play, rhyme and activity.",
    points: ["Activity & toy rooms", "Slides, rockers & ride-ons", "Caring teachers"],
    main: "kids-play-slides",
    small: ["kids-rocker", "kids-ride"],
  },
  {
    id: "sports",
    eyebrow: "Fitness & Discipline",
    title: "Sports, Games & Yoga",
    text: "A large playground and green lawns host kabaddi, kho-kho, races and fun games, while regular yoga builds focus, flexibility and calm.",
    points: ["Kabaddi & kho-kho", "Athletics & outdoor games", "Yoga sessions"],
    main: "sports-match-2",
    small: ["yoga", "games-hoops-2"],
  },
];

export default function FacilityShowcase() {
  return (
    <div className="space-y-24 lg:space-y-32">
      {rows.map((r, i) => {
        const flip = i % 2 === 1;
        return (
          <div key={r.id} id={r.id} className="grid scroll-mt-28 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal from={flip ? "left" : "right"} className={`relative ${flip ? "lg:order-2" : ""}`}>
              <div className="relative pb-16 sm:pb-20">
                <div className={`relative w-[88%] ${flip ? "ml-auto" : ""}`}>
                  {/* gold outline — evenly 12px around the main photo */}
                  <div className="absolute -inset-3 rounded-[1.1rem] border border-gold-500/50" />
                  <SmartImage
                    src={photo(r.main)}
                    alt={r.title}
                    label={r.title}
                    className="relative aspect-[4/3] w-full rounded-2xl shadow-2xl shadow-navy-900/20"
                  />
                </div>
                <div className={`absolute bottom-0 flex gap-3 ${flip ? "left-0" : "right-0"}`}>
                  {r.small.map((s) => (
                    <SmartImage key={s} src={thumb(s)} alt="" className="aspect-square w-28 rounded-xl border-4 border-white shadow-xl sm:w-36" />
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal from={flip ? "right" : "left"} className={flip ? "lg:order-1" : ""}>
              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-gold-500">{r.eyebrow}</span>
              <h3 className="mt-3 text-3xl font-semibold leading-tight text-navy-900 sm:text-4xl">{r.title}</h3>
              <span className="mt-5 block h-px w-14 bg-gold-500" />
              <p className="mt-5 leading-8 text-muted">{r.text}</p>
              <ul className="mt-6 space-y-3">
                {r.points.map((p) => (
                  <li key={p} className="flex items-center gap-3 font-medium text-navy-900">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-gold-500" /> {p}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        );
      })}
    </div>
  );
}
