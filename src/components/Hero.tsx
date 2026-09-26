import { profile } from "@/lib/data";
import { GraphAccent } from "@/components/GraphAccent";

export function Hero() {
  return (
    <header className="relative px-6 sm:px-10 pt-20 pb-20 sm:pt-28 sm:pb-28 max-w-5xl mx-auto overflow-hidden">
      <GraphAccent />

      <p
        className="label-on-board mb-6 rise-in"
        style={{ animationDelay: "0.05s" }}
      >
        Case file — AI Engineering &amp; RAG Systems
      </p>

      <h1
        className="font-display italic font-semibold text-[13vw] sm:text-[6.5rem] leading-[0.95] text-[color:var(--on-board)] rise-in"
        style={{ animationDelay: "0.15s" }}
      >
        Tarek
        <br />
        Benameur
      </h1>

      <p
        className="mt-8 max-w-xl text-[color:var(--on-board-soft)] text-base sm:text-lg rise-in"
        style={{ animationDelay: "0.35s" }}
      >
        {profile.tagline}
      </p>

      <div
        className="mt-10 flex flex-wrap gap-3 rise-in"
        style={{ animationDelay: "0.5s" }}
      >
        <span className="stamp" style={{ transform: "rotate(-2deg)" }}>
          {profile.role}
        </span>
        <span className="stamp" style={{ transform: "rotate(1.5deg)" }}>
          Open for freelance
        </span>
        <span className="stamp" style={{ transform: "rotate(-1deg)" }}>
          {profile.location}
        </span>
      </div>

      <div
        className="mt-12 flex flex-wrap gap-x-6 gap-y-3 text-sm rise-in"
        style={{ animationDelay: "0.65s" }}
      >
        <a className="ink-link-inverse" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
        <a className="ink-link-inverse" href={profile.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a className="ink-link-inverse" href={profile.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
    </header>
  );
}
