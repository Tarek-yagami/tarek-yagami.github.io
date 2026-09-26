import { profile } from "@/lib/data";

export function Hero() {
  return (
    <header className="relative px-6 sm:px-10 pt-24 pb-20 sm:pt-32 sm:pb-28 max-w-5xl mx-auto">
      <p className="label text-[color:var(--pin)] mb-6">
        Case file — AI Engineering &amp; RAG Systems
      </p>

      <h1 className="font-display italic font-semibold text-[13vw] sm:text-[6.5rem] leading-[0.95] text-[color:var(--card)]">
        Tarek
        <br />
        Benameur
      </h1>

      <p className="mt-8 max-w-xl text-[color:var(--card)]/80 text-base sm:text-lg">
        {profile.tagline}
      </p>

      <div className="mt-10 flex flex-wrap gap-3">
        <span className="stamp bg-[color:var(--card)]">{profile.role}</span>
        <span className="stamp bg-[color:var(--card)]" style={{ transform: "rotate(1.5deg)" }}>
          Open for freelance
        </span>
        <span className="stamp bg-[color:var(--card)]" style={{ transform: "rotate(-1deg)" }}>
          {profile.location}
        </span>
      </div>

      <div className="mt-12 flex flex-wrap gap-x-6 gap-y-3 text-sm">
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
    </header>
  );
}
