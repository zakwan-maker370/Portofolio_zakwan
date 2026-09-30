import { useEffect, useRef, useState } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useSpring,
} from "framer-motion";

export const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
export const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.2, 0.7, 0.2, 1] },
  },
};

export function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease: [0.2, 0.7, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Section({ id, children, className = "" }) {
  return (
    <section
      id={id}
      className={`relative mx-auto max-w-6xl px-5 py-24 md:py-32 ${className}`}
    >
      {children}
    </section>
  );
}

export function Heading({ children }) {
  return (
    <h2 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
      {children}
    </h2>
  );
}

// Reveal teks per kata
export function SplitText({ text, className = "", delay = 0 }) {
  return (
    <motion.span
      className={className}
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.08, delayChildren: delay } },
      }}
      aria-label={text}
    >
      {text.split(" ").map((w, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden align-bottom"
          aria-hidden
        >
          <motion.span
            className="inline-block"
            variants={{
              hidden: { y: "100%" },
              show: {
                y: 0,
                transition: { duration: 0.7, ease: [0.2, 0.7, 0.2, 1] },
              },
            }}
          >
            {w}&nbsp;
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

export function Counter({ to, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const c = animate(0, to, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (v) => setN(Math.round(v)),
    });
    return () => c.stop();
  }, [inView, to]);
  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

export function Magnetic({ href, children, primary = false }) {
  const x = useMotionValue(0),
    y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15 }),
    sy = useSpring(y, { stiffness: 200, damping: 15 });
  const move = (e) => {
    if (!window.matchMedia("(pointer:fine)").matches) return;
    const r = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - r.left - r.width / 2) * 0.3);
    y.set((e.clientY - r.top - r.height / 2) * 0.4);
  };
  return (
    <motion.a
      href={href}
      style={{ x: sx, y: sy }}
      onMouseMove={move}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium ${primary ? "bg-gradient-to-r from-emerald-400 to-cyan-400 text-black" : "glass text-white"}`}
    >
      {children}
    </motion.a>
  );
}

export function Tilt({ children, className = "" }) {
  const rx = useMotionValue(0),
    ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 150, damping: 15 }),
    sry = useSpring(ry, { stiffness: 150, damping: 15 });
  const move = (e) => {
    if (!window.matchMedia("(pointer:fine)").matches) return;
    const r = e.currentTarget.getBoundingClientRect();
    ry.set(((e.clientX - r.left) / r.width - 0.5) * 8);
    rx.set(-((e.clientY - r.top) / r.height - 0.5) * 8);
  };
  return (
    <motion.div
      className={className}
      style={{ rotateX: srx, rotateY: sry, transformPerspective: 900 }}
      onMouseMove={move}
      onMouseLeave={() => {
        rx.set(0);
        ry.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}
