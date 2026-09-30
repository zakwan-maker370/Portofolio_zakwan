import { ArrowUpRight, CodeXml } from "lucide-react";
import { PROJECTS } from "../data";
import { Heading, Reveal, Section, Tilt } from "./ui";

// Layout asimetris: lebar kolom & offset berbeda tiap proyek
const LAYOUT = [
  "md:col-span-7",
  "md:col-span-5 md:mt-24",
  "md:col-span-8 md:col-start-3",
];

export default function Projects() {
  return (
    <Section id="projects">
      <Reveal>
        <Heading>
          Selected <span className="grad">Works</span>
        </Heading>
      </Reveal>
      <div className="mt-14 grid gap-8 md:grid-cols-12">
        {PROJECTS.map((p, i) => (
          <Reveal key={p.title} className={LAYOUT[i]}>
            <Tilt>
              <article className="glass group overflow-hidden rounded-3xl">
                <div
                  className="relative aspect-[16/10] overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg,${p.from}33,${p.to}22)`,
                  }}
                >
                  <span className="absolute left-5 top-4 z-10 rounded-lg bg-black/30 px-2 py-1 font-display text-5xl font-bold text-white/40 backdrop-blur-sm">
                    0{i + 1}
                  </span>
                  <img
                    src={p.image}
                    alt={`Screenshot ${p.title}`}
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="flex items-center justify-between font-display text-2xl font-bold sm:text-3xl">
                    {p.title}
                    <ArrowUpRight
                      className="h-6 w-6 text-emerald-300 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                      aria-hidden
                    />
                  </h3>
                  <p className="mt-3 leading-relaxed text-white/60">{p.desc}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <li
                        key={t}
                        className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/70"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex gap-3">
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-black"
                    >
                      Live Demo
                      <ArrowUpRight className="h-4 w-4" aria-hidden />
                    </a>
                    <a
                      href="https://github.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm"
                    >
                      <CodeXml className="h-4 w-4" aria-hidden />
                      GitHub
                    </a>
                  </div>
                </div>
              </article>
            </Tilt>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}