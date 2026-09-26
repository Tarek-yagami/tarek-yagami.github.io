import { Reveal } from "@/components/Reveal";
import { profile } from "@/lib/data";

export function Contact() {
  return (
    <section className="px-6 sm:px-10 py-20 max-w-5xl mx-auto">
      <Reveal rotate={-0.5}>
        <div className="card p-10 sm:p-14 text-center">
          <span className="pin" aria-hidden />
          <p className="label mb-4">04 — Closing statement</p>
          <h2 className="font-display italic text-3xl sm:text-4xl font-semibold mb-6">
            Let&apos;s build something worth citing.
          </h2>
          <p className="max-w-lg mx-auto text-sm text-[color:var(--ink-soft)] mb-8">
            Open to freelance work, collaborations, and full-time roles in AI
            engineering. Reach out directly, or find the rest of the paper
            trail on GitHub.
          </p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm">
            <a className="ink-link" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <a className="ink-link" href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="ink-link" href={profile.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </Reveal>

      <p className="label text-center mt-16 opacity-60">
        {profile.name} — filed {new Date().getFullYear()}
      </p>
    </section>
  );
}
