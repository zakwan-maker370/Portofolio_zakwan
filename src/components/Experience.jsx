import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { JOURNEY } from "../data";
import { Heading, Reveal, Section } from "./ui";

export default function Experience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.6"],
  });
  return (
    <Section id="experience">
      <Reveal>
        <Heading>
          My <span className="grad">Journey</span>
        </Heading>
      </Reveal>
      <ol
        ref={ref}
        className="relative ml-3 mt-14 space-y-14 border-l border-white/10 pl-8 md:ml-6 md:pl-12"
      >
        <motion.span
          aria-hidden
          style={{ scaleY: scrollYProgress }}
          className="absolute -left-px top-0 h-full w-px origin-top bg-gradient-to-b from-emerald-400 to-violet-400"
        />
        {JOURNEY.map(([year, title, desc], i) => (
          <li key={year} className="relative">
            <i
              aria-hidden
              className="absolute -left-[2.45rem] top-3 h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_16px_#34d399] md:-left-[3.45rem]"
            />
            <Reveal delay={i * 0.05}>
              <time className="grad font-display text-5xl font-bold sm:text-6xl">
                {year}
              </time>
              <h3 className="mt-2 font-display text-xl font-medium sm:text-2xl">
                {title}
              </h3>
              <p className="mt-2 max-w-md text-white/55">{desc}</p>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
