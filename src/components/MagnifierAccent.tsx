export function MagnifierAccent() {
  // A magnifying glass (lens ring + handle) in the same red as the
  // corkboard pins — a recognizable detective prop instead of an
  // unmotivated line between two points.
  const length = 100;

  return (
    <svg
      aria-hidden
      viewBox="0 0 100 100"
      className="hidden md:block absolute -right-2 top-8 w-32 lg:w-40 pointer-events-none"
      style={{ transform: "rotate(8deg)" }}
    >
      <circle
        cx="40"
        cy="40"
        r="24"
        fill="none"
        stroke="var(--pin)"
        strokeWidth="3.5"
        opacity="0"
        style={{
          animation: "popRing 0.5s cubic-bezier(0.16,1,0.3,1) forwards",
          animationDelay: "0.5s",
          transformOrigin: "40px 40px",
        }}
      />
      <line
        x1="58"
        y1="58"
        x2="82"
        y2="82"
        stroke="var(--pin)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeDasharray={length}
        strokeDashoffset={length}
        style={{
          animation: "drawLine 0.4s ease-out forwards",
          animationDelay: "0.85s",
        }}
      />

      <style>{`
        @keyframes drawLine { to { stroke-dashoffset: 0; } }
        @keyframes popRing { from { opacity: 0; transform: scale(0.5); } to { opacity: 0.7; transform: scale(1); } }
      `}</style>
    </svg>
  );
}
