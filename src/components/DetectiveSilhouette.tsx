export function DetectiveSilhouette() {
  // A detective bust (deerstalker cap + pipe), drawn as one continuous
  // stroke — like a Whistledown-style silhouette reveal, traced in the
  // same red as the corkboard pins instead of ink.
  const path = `
    M 55 175
    Q 46 150 48 130
    Q 50 105 58 90
    Q 62 72 75 65
    L 70 50
    L 78 45
    L 85 55
    Q 90 60 96 62
    Q 110 70 118 85
    Q 132 98 146 104
    Q 130 108 128 118
    Q 148 126 152 136
    Q 146 144 148 152
    Q 138 158 134 162
    Q 130 168 128 172
    L 150 178
    Q 168 179 176 183
    Q 183 192 178 202
    Q 167 208 155 200
    Q 150 197 150 192
    Q 135 187 122 182
    Q 114 186 110 190
  `;

  return (
    <svg
      aria-hidden
      viewBox="40 38 150 178"
      className="hidden md:block absolute -right-2 top-2 w-56 lg:w-72 pointer-events-none"
    >
      <path
        d={path}
        fill="none"
        stroke="var(--pin)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.75"
        pathLength="1000"
        strokeDasharray="1000"
        strokeDashoffset="1000"
        style={{ animation: "drawSilhouette 2.2s ease-out forwards", animationDelay: "0.4s" }}
      />

      <style>{`
        @keyframes drawSilhouette { to { stroke-dashoffset: 0; } }
      `}</style>
    </svg>
  );
}
