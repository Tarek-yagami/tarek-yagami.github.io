import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { projects, type Project } from "@/lib/data";

const rotations = [1, -1.5, 0.5, -1, 1.5, -0.5];

function CardBody({ project }: { project: Project }) {
  return (
    <>
      <p className="label">{project.period}</p>
      <h3 className="font-display text-lg font-semibold mt-1 mb-2">
        {project.title}
        {project.link && <span className="text-[color:var(--pin)]"> ↗</span>}
      </h3>
      <p className="text-sm leading-relaxed flex-1">{project.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="label border border-[color:var(--ink-faint)]/40 rounded-full px-2 py-0.5"
          >
            {tag}
          </span>
        ))}
      </div>
    </>
  );
}

export function Projects() {
  return (
    <section id="projects" className="px-6 sm:px-10 py-16 max-w-5xl mx-auto scroll-mt-20">
      <SectionHeading index="02 · Evidence" title="Projects" />

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal key={project.title} rotate={rotations[i % rotations.length]} delay={i * 70}>
            {project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="card p-6 pt-8 h-full flex flex-col"
              >
                <CardBody project={project} />
              </a>
            ) : (
              <div className="card p-6 pt-8 h-full flex flex-col">
                <CardBody project={project} />
              </div>
            )}
          </Reveal>
        ))}
      </div>
    </section>
  );
}
