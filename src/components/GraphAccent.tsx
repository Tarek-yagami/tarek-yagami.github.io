export function GraphAccent() {
  const nodes = [
    { x: 40, y: 30 },
    { x: 140, y: 15 },
    { x: 100, y: 90 },
    { x: 200, y: 70 },
    { x: 170, y: 150 },
    { x: 60, y: 140 },
  ];
  const edges: [number, number][] = [
    [0, 1],
    [0, 2],
    [1, 3],
    [2, 3],
    [2, 5],
    [3, 4],
    [4, 5],
  ];

  return (
    <svg
      aria-hidden
      viewBox="0 0 240 180"
      className="hidden md:block absolute -right-4 top-6 w-56 lg:w-72 opacity-[0.35] pointer-events-none"
      style={{ color: "var(--pin)" }}
    >
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a].x}
          y1={nodes[a].y}
          x2={nodes[b].x}
          y2={nodes[b].y}
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="240"
          strokeDashoffset="240"
          style={{
            animation: `drawLine 1.1s ease-out forwards`,
            animationDelay: `${0.4 + i * 0.12}s`,
          }}
        />
      ))}
      {nodes.map((n, i) => (
        <circle
          key={i}
          cx={n.x}
          cy={n.y}
          r={i === 2 || i === 3 ? 4 : 2.5}
          fill="currentColor"
          opacity={0}
          style={{
            animation: `fadeInNode 0.4s ease-out forwards`,
            animationDelay: `${0.3 + i * 0.1}s`,
          }}
        />
      ))}

      <style>{`
        @keyframes drawLine { to { stroke-dashoffset: 0; } }
        @keyframes fadeInNode { to { opacity: 1; } }
      `}</style>
    </svg>
  );
}
