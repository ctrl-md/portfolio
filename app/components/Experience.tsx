import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="bg-ink/[0.03] py-24">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="font-display text-3xl text-ink">Experience</h2>
        <div className="mt-10 space-y-10">
          {experience.map((entry) => (
            <div key={entry.org} className="border-t border-ink/10 pt-6">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-sans text-lg font-medium text-ink">
                  {entry.role} &middot; {entry.org}
                </h3>
                <span className="font-sans text-sm text-slate">{entry.period}</span>
              </div>
              <p className="mt-1 font-sans text-sm italic text-slate">{entry.context}</p>
              <ul className="mt-4 space-y-2">
                {entry.bullets.map((b) => (
                  <li
                    key={b}
                    className="max-w-[65ch] font-sans text-[0.95rem] leading-relaxed text-ink/75"
                  >
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
