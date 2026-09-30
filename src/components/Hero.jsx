import { motion } from "framer-motion";
import { SOCIALS } from "../data";
import { Magnetic, SplitText, item, stagger } from "./ui";

// Partikel melayang (posisi tetap agar ringan & stabil)
const DOTS = Array.from({ length: 14 }, (_, i) => ({
  l: (i * 37) % 100,
  t: (i * 53) % 100,
  s: 2 + (i % 3),
  d: 5 + (i % 5),
}));

export default function Hero() {
  return (
    <section
      id="home"
      className="relative mx-auto grid min-h-screen max-w-[1600px] items-center gap-14 px-5 pb-16 pt-32 sm:px-8 lg:grid-cols-[1.15fr_1fr] lg:px-12 xl:px-16"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-emerald-500/20 blur-[120px]" />
        <div className="absolute right-0 top-40 h-96 w-96 rounded-full bg-violet-500/20 blur-[120px]" />
        {DOTS.map((d, i) => (
          <motion.i
            key={i}
            className={`absolute rounded-full bg-cyan-300/60 ${i > 6 ? "hidden sm:block" : ""}`}
            style={{ left: `${d.l}%`, top: `${d.t}%`, width: d.s, height: d.s }}
            animate={{ y: [0, -24, 0], opacity: [0.2, 0.8, 0.2] }}
            transition={{ duration: d.d, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>
      <motion.div variants={stagger} initial="hidden" animate="show">
        <motion.span
          variants={item}
          className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1.5 text-xs tracking-widest text-emerald-300"
        >
          <i className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
          AVAILABLE FOR CREATIVE PROJECTS
        </motion.span>
        <h1 className="mt-7 font-display text-5xl font-bold leading-[1.02] tracking-tight sm:text-7xl xl:text-8xl">
          <SplitText text="Hi, Saya" delay={0.2} />
          <br />
          <SplitText text="Zakwan." className="grad" delay={0.2} />
        </h1>
        <motion.p
          variants={item}
          className="mt-6 font-display text-2xl font-medium leading-snug text-white/85 sm:text-4xl"
        >
          Full Stack <span className="grad">Developer</span>
          <br />
          UI/UX <span className="grad">Enthusiast</span>
        </motion.p>
        <motion.p
          variants={item}
          className="mt-6 max-w-lg text-base leading-relaxed text-white/60 sm:text-lg"
        >
          Saya membangun website dan aplikasi digital yang tidak hanya berfungsi
          dengan baik, tetapi juga memiliki pengalaman pengguna yang menarik.
        </motion.p>
        <motion.div variants={item} className="mt-9 flex flex-wrap gap-3">
          <Magnetic primary href="#projects">
            View My Work →
          </Magnetic>
          <Magnetic href="#contact">Let's Connect</Magnetic>
        </motion.div>
        <motion.ul
          variants={item}
          className="mt-9 flex gap-6 text-sm text-white/55"
        >
          {SOCIALS.map((s) => (
            <li key={s.name}>
              <a
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="underline-offset-4 transition hover:text-emerald-300 hover:underline"
              >
                {s.name}
              </a>
            </li>
          ))}
        </motion.ul>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.5 }}
        className="mx-auto w-full max-w-md"
      >
        <motion.div
          animate={{ y: [0, -16, 0], rotate: [0, -1, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.03 }}
          className="relative"
        >
          <div
            aria-hidden
            className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-tr from-emerald-400/25 via-cyan-400/10 to-violet-500/25 blur-2xl"
          />
          <div className="glass overflow-hidden rounded-2xl font-mono text-[13px] leading-7 shadow-2xl">
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
              <i className="h-3 w-3 rounded-full bg-red-400/80" />
              <i className="h-3 w-3 rounded-full bg-yellow-400/80" />
              <i className="h-3 w-3 rounded-full bg-emerald-400/80" />
              <span className="ml-3 text-xs text-white/40">zakwan.dev</span>
            </div>
            <pre
              className="overflow-x-auto p-5 text-white/70"
              aria-label="Kartu developer: nama Zakwan, role Full Stack Developer"
            >
              <code>
                <span className="text-violet-300">const</span>{" "}
                <span className="text-cyan-300">developer</span> = {"{"}
                {"\n"}
                {"  "}name: <span className="text-emerald-300">"Zakwan"</span>,
                {"\n"}
                {"  "}role:{" "}
                <span className="text-emerald-300">"Full Stack Developer"</span>
                ,{"\n"}
                {"  "}passion:{" "}
                <span className="text-emerald-300">
                  "Building Digital{"\n"}
                  {"            "}Experiences"
                </span>
                {"\n"}
                {"}"}
                <span className="ml-1 inline-block h-4 w-2 translate-y-0.5 animate-pulse bg-emerald-300" />
              </code>
            </pre>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
