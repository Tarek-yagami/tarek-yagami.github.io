import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { skills } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="px-6 sm:px-10 py-16 max-w-5xl mx-auto scroll-mt-20">
      <SectionHeading index="03 — Inventory" title="Skills" />

      <div className="grid gap-6 sm:grid-cols-2">
        {skills.map((group, i) => (
          <Reveal key={group.category} rotate={i % 2 === 0 ? -0.5 : 0.75} delay={i * 60}>
            <div className="card p-6 pt-8">
              <span className="pin" aria-hidden />
              <h3 className="label mb-4">{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-sm border border-[color:var(--ink-faint)]/40 rounded-full px-3 py-1"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
