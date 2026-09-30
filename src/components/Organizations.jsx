import { ORGANIZATIONS } from "../data";
import { Heading, Reveal, Section } from "./ui";

export default function Organizations() {
  return (
    <Section id="organizations">
      <Reveal>
        <Heading>
          Organization <span className="grad">Experience.</span>
        </Heading>
      </Reveal>
      <div className="mt-14 space-y-10">
        {ORGANIZATIONS.map((o) => (
          <Reveal key={o.org}>
            <div className="glass overflow-hidden rounded-3xl p-6 sm:p-8">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-2xl font-bold sm:text-3xl">
                  {o.org}
                </h3>
                <span className="text-sm text-white/50">{o.period}</span>
              </div>
              <p className="mt-1 text-emerald-300">{o.role}</p>
              <p className="mt-3 max-w-2xl leading-relaxed text-white/60">
                {o.desc}
              </p>
              {o.photos?.length > 0 && (
                <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {o.photos.map((src, i) => (
                    <div
                      key={i}
                      className="aspect-[4/3] overflow-hidden rounded-xl"
                    >
                      <img
                        src={src}
                        alt={`Kegiatan ${o.org} ${i + 1}`}
                        className="h-full w-full object-cover transition duration-500 hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}