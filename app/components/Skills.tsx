import { skills } from "@/lib/data";

const categoryColors: Record<string, string> = {
  "AI & ML Engineering": "#6366F1",
  "Languages": "#F59E0B",
  "Frontend": "#EC4899",
  "Backend": "#10B981",
  "Infrastructure": "#0EA5E9",
};

export default function Skills() {
  return (
    <section id="skills" className="bg-ink/[0.03] py-24">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="font-display text-3xl text-ink">Skills</h2>
        <div className="mt-10 space-y-6">
          {skills.map((group) => {
            const color = categoryColors[group.category] ?? "#6B7280";
            return (
              <div
                key={group.category}
                className="grid grid-cols-1 gap-2 sm:grid-cols-[180px_1fr]"
              >
                <span
                  style={{ color }}
                  className="font-sans text-sm font-semibold"
                >
                  {group.category}
                </span>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      style={{ borderColor: color, color }}
                      className="rounded-full border bg-surface px-2.5 py-1 font-sans text-xs"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
