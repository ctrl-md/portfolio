import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="bg-blueprint/[0.03] py-24">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="font-display text-3xl text-ink">Skills</h2>
        <div className="mt-10 space-y-6">
          {skills.map((group) => (
            <div key={group.category} className="grid grid-cols-1 gap-2 sm:grid-cols-[180px_1fr]">
              <span className="font-sans text-sm font-medium text-ink">{group.category}</span>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="border border-ink/15 px-2.5 py-1 font-sans text-xs text-ink/70"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
