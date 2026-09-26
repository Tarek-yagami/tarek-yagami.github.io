import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { education, experience } from "@/lib/data";

const rotations = [-1.5, 1, -1, 1.5, -0.5];

export function Experience() {
  return (
    <section className="px-6 sm:px-10 py-16 max-w-5xl mx-auto">
      <SectionHeading index="01 — Record" title="Experience" />

      <div className="grid gap-8 sm:grid-cols-2">
        {experience.map((job, i) => (
          <Reveal key={job.role + job.org} rotate={rotations[i % rotations.length]} delay={i * 80}>
            <article className="card p-6 pt-8">
              <span className="pin" aria-hidden />
              <p className="label">{job.period}</p>
              <h3 className="font-display text-xl font-semibold mt-1">{job.role}</h3>
              <p className="text-[color:var(--ink-soft)] text-sm mb-4">{job.org}</p>
              <ul className="space-y-2 text-sm leading-relaxed">
                {job.bullets.map((b) => (
                  <li key={b} className="pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-[color:var(--pin)]">
                    {b}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}

        <Reveal rotate={1} delay={experience.length * 80}>
          <article className="card p-6 pt-8">
            <span className="pin" aria-hidden />
            <p className="label">{education.period}</p>
            <h3 className="font-display text-xl font-semibold mt-1">{education.degree}</h3>
            <p className="text-[color:var(--ink-soft)] text-sm">{education.school}</p>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
