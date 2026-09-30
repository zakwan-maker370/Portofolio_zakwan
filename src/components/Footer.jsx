import { SOCIALS } from "../data";

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 py-10 md:flex-row md:items-center">
        <div>
          <p className="font-display text-xl font-bold">
            ZAKWAN<span className="text-emerald-400">.</span>
          </p>
          <p className="mt-1 text-sm text-white/50">
            Designed & Built with curiosity.
          </p>
        </div>
        <ul className="flex gap-5 text-sm text-white/60">
          {SOCIALS.map((s) => (
            <li key={s.name}>
              <a
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="hover:text-emerald-300"
              >
                {s.name}
              </a>
            </li>
          ))}
        </ul>
        <p className="text-xs text-white/40">
          © 2026 Zakwan Diaul Ikhsan. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
