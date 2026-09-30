import { motion } from "framer-motion";
import { SKILLS } from "../data";
import { Heading, Reveal, Section, item, stagger } from "./ui";

export default function Skills() {
  return (
    <Section id="skills">
      <Reveal>
        <Heading>
          Tools I <span className="grad">Work With</span>
        </Heading>
      </Reveal>
      <div className="mt-14 space-y-12">
        {SKILLS.map((g) => (
          <div key={g.group}>
            <h3 className="mb-4 font-display text-lg text-white/50">
              {g.group}
            </h3>
            <motion.ul
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5"
            >
              {g.items.map(([name, Icon]) => (
                <motion.li key={name} variants={item}>
                  <motion.div
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.98 }}
                    className="glass group rounded-2xl p-5 hover:shadow-[0_0_30px_-8px_rgba(34,211,238,.6)]"
                  >
                    <motion.span
                      whileHover={{ rotate: 12, y: -4 }}
                      className="mb-4 block w-fit"
                    >
                      <Icon className="h-7 w-7 text-emerald-300" aria-hidden />
                    </motion.span>
                    <span className="font-display text-lg font-medium">
                      {name}
                    </span>
                  </motion.div>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
