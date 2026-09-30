import { PRINCIPLES } from "../data";
import { Reveal, Section } from "./ui";

export default function Philosophy() {
  return (
    <Section id="philosophy">
      <Reveal>
        <p className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-8xl">
          Code is <span className="grad">Logic.</span>
          <br />
          Design is <span className="grad">Experience.</span>
        </p>
      </Reveal>
      <ul className="mt-14 grid gap-4 md:grid-cols-3">
        {PRINCIPLES.map(([n, t, d], i) => (
          <li key={n}>
            <Reveal delay={i * 0.1} className="h-full">
              <div className="glass h-full rounded-2xl p-7">
                <span className="font-display text-sm tracking-widest text-emerald-300">
                  {n} — {t}
                </span>
                <p className="mt-4 text-lg text-white/70">{d}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
