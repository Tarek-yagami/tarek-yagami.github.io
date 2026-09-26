export function StringAccent() {
  const a = { x: 25, y: 20 };
  const b = { x: 195, y: 55 };
  // Off-center, exaggerated control point so the thread reads as
  // hanging loosely between two pins, not as a straight graph edge.
  const control = { x: 90, y: 130 };
  const path = `M ${a.x} ${a.y} Q ${control.x} ${control.y} ${b.x} ${b.y}`;
  const length = 260;

  return (
    <svg
      aria-hidden
      viewBox="0 0 220 160"
      className="hidden md:block absolute -right-2 top-10 w-48 lg:w-64 pointer-events-none"
    >
      <path
        d={path}
        fill="none"
        stroke="var(--pin)"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.6"
        strokeDasharray={length}
        strokeDashoffset={length}
        style={{ animation: "drawString 1s ease-out forwards", animationDelay: "0.5s" }}
      />

      {[a, b].map((p, i) => (
        <circle
          key={i}
          cx={p.x}
          cy={p.y}
          r="5.5"
          fill="var(--pin)"
          stroke="var(--pin-dark)"
          strokeWidth="0.75"
          opacity="0"
          style={{
            animation: "popIn 0.35s ease-out forwards",
            animationDelay: `${0.3 + i * 0.15}s`,
            transformOrigin: `${p.x}px ${p.y}px`,
          }}
        />
      ))}

      <style>{`
        @keyframes drawString { to { stroke-dashoffset: 0; } }
        @keyframes popIn { from { opacity: 0; transform: scale(0.4); } to { opacity: 0.9; transform: scale(1); } }
      `}</style>
    </svg>
  );
}
