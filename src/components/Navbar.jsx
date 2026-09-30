import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV } from "../data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${scrolled || open ? "border-white/10 bg-[#05070d]/70 backdrop-blur-xl" : "border-transparent"}`}
    >
      <nav
        aria-label="Navigasi utama"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5"
      >
        <a
          href="#home"
          className="font-display text-xl font-bold tracking-tight"
        >
          PORTOFOLIO<span className="text-emerald-400">.</span>
        </a>
        <ul className="hidden items-center gap-8 text-sm text-white/70 md:flex">
          {NAV.map((n) => (
            <li key={n}>
              <a
                href={`#${n.toLowerCase()}`}
                className="transition hover:text-white"
              >
                {n}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="glass hidden rounded-full px-5 py-2 text-sm md:inline-block"
        >
          Let's Talk →
        </a>
        <button
          className="md:hidden"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="flex flex-col gap-1 overflow-hidden px-5 md:hidden"
          >
            {NAV.map((n) => (
              <li key={n}>
                <a
                  onClick={() => setOpen(false)}
                  href={`#${n.toLowerCase()}`}
                  className="block rounded-xl px-3 py-3 text-lg text-white/80 hover:bg-white/5"
                >
                  {n}
                </a>
              </li>
            ))}
            <li className="pb-5">
              <a
                onClick={() => setOpen(false)}
                href="#contact"
                className="mt-2 block rounded-xl bg-gradient-to-r from-emerald-400 to-cyan-400 px-3 py-3 text-center font-medium text-black"
              >
                Let's Talk →
              </a>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
