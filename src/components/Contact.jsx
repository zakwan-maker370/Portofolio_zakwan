import { useState } from "react";
import { Mail, Send } from "lucide-react";
import { EMAIL, SOCIALS } from "../data";
import { Heading, Reveal, Section } from "./ui";

const field =
  "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 outline-none transition focus:border-emerald-400/60";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const submit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const f = new FormData(form);
    const body = `${f.get("message")}\n\n— ${f.get("name")} (${f.get("email")})`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent("Pesan dari " + f.get("name"))}&body=${encodeURIComponent(body)}`;
    setSent(true);
    form.reset();
  };
  return (
    <Section id="contact">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[28rem] w-[44rem] max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-emerald-500/20 via-cyan-500/15 to-violet-500/20 blur-[120px]"
      />
      <Reveal>
        <Heading>
          Have an <span className="grad">Idea?</span>
        </Heading>
        <p className="mt-4 text-lg text-white/60">
          Let's turn your idea into something real.
        </p>
      </Reveal>
      <div className="mt-12 grid gap-10 md:grid-cols-[1.3fr_1fr]">
        <Reveal>
          <form
            onSubmit={submit}
            className="glass space-y-4 rounded-3xl p-6 sm:p-8"
          >
            <label className="block">
              <span className="mb-1.5 block text-sm text-white/60">Nama</span>
              <input
                name="name"
                required
                autoComplete="name"
                placeholder="Nama kamu"
                className={field}
              />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-sm text-white/60">Email</span>
              <input
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="email@contoh.com"
                className={field}
              />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-sm text-white/60">Pesan</span>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Ceritakan idemu..."
                className={field}
              />
            </label>
            <button className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 px-6 py-3 font-medium text-black transition hover:brightness-110">
              Send Message →<Send className="h-4 w-4" aria-hidden />
            </button>
            <p role="status" className="text-sm text-emerald-300">
              {sent
                ? "Aplikasi email kamu akan terbuka untuk mengirim pesan."
                : ""}
            </p>
          </form>
        </Reveal>
        <Reveal delay={0.12}>
          <ul className="space-y-3">
            <li>
              <a
                href={`mailto:${EMAIL}`}
                className="glass flex items-center gap-3 rounded-xl px-4 py-3"
              >
                <Mail className="h-4 w-4 text-emerald-300" aria-hidden />
                {EMAIL}
              </a>
            </li>
            {SOCIALS.map((s) => (
              <li key={s.name}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="glass block rounded-xl px-4 py-3"
                >
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
