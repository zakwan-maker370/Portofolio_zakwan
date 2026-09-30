import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { STATS } from "../data";
import { Counter, Heading, Reveal, Section } from "./ui";
import foto from "../assets/foto zack.jpeg";

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);
  return (
    <Section id="about">
      <div className="grid items-center gap-14 md:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <div
            ref={ref}
            className="relative mx-auto aspect-[4/5] w-full max-w-sm"
          >
            <div
              aria-hidden
              className="absolute inset-0 translate-x-4 translate-y-4 rounded-3xl border border-emerald-400/30"
            />
            <div
              aria-hidden
              className="absolute -left-2 -top-2 h-10 w-10 rounded-tl-2xl border-l-2 border-t-2 border-cyan-300"
            />
            <div className="glass relative h-full overflow-hidden rounded-3xl">
              <motion.img
                src={foto}
                alt="Foto Zakwan"
                style={{ y, scale: 1.15 }}
                className="h-full w-full object-cover object-top"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-br from-emerald-400/10 via-transparent to-violet-500/20"
              />
            </div>
          </div>
        </Reveal>
        <div>
          <Reveal>
            <Heading>
              About <span className="grad">Me.</span>
            </Heading>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/65">
              Saya adalah seorang mahasiswa dari universitas Ahmad Dahlan dan developer yang tertarik pada
              pengembangan website, aplikasi, UI/UX, dan teknologi digital. Saya
              suka mengubah ide menjadi produk digital yang memiliki tampilan
              menarik dan mudah digunakan.
            </p>
          </Reveal>
          <dl className="mt-10 grid grid-cols-2 gap-4">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08}>
                <div className="glass rounded-2xl p-5">
                  <dd className="grad font-display text-4xl font-bold">
                    {s.text ?? <Counter to={s.to} suffix={s.suffix} />}
                  </dd>
                  <dt className="mt-1 text-sm text-white/55">{s.label}</dt>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  );
}