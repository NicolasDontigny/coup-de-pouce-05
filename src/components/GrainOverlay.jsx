const VARIANTS = {
  // Cernes centrés bas-droite, ellipses larges et aplaties
  accueil: {
    cx: 1350, cy: 520,
    rings: [
      { rx: 260, ry: 90,  op: 0.10 },
      { rx: 420, ry: 150, op: 0.09 },
      { rx: 580, ry: 210, op: 0.08 },
      { rx: 740, ry: 270, op: 0.07 },
      { rx: 900, ry: 330, op: 0.07 },
      { rx: 1060, ry: 390, op: 0.06 },
      { rx: 1220, ry: 450, op: 0.05 },
      { rx: 1380, ry: 510, op: 0.04 },
    ],
    rotate: -8,
    viewBox: '0 0 1400 700',
    ratio: 'xMaxYMax slice',
  },
  // Cernes centrés haut-droite, plus ronds
  realisations: {
    cx: 1300, cy: 80,
    rings: [
      { rx: 180, ry: 130, op: 0.09 },
      { rx: 310, ry: 220, op: 0.08 },
      { rx: 450, ry: 320, op: 0.08 },
      { rx: 600, ry: 420, op: 0.07 },
      { rx: 760, ry: 520, op: 0.06 },
      { rx: 930, ry: 620, op: 0.05 },
      { rx: 1110, ry: 720, op: 0.05 },
      { rx: 1300, ry: 820, op: 0.04 },
    ],
    rotate: 12,
    viewBox: '0 0 1400 600',
    ratio: 'xMaxYMin slice',
  },
  // Cernes centrés milieu-gauche, très étirés horizontalement
  zone: {
    cx: -80, cy: 280,
    rings: [
      { rx: 300, ry: 80,  op: 0.08 },
      { rx: 480, ry: 140, op: 0.08 },
      { rx: 660, ry: 200, op: 0.07 },
      { rx: 840, ry: 260, op: 0.07 },
      { rx: 1020, ry: 320, op: 0.06 },
      { rx: 1200, ry: 380, op: 0.05 },
      { rx: 1380, ry: 440, op: 0.05 },
      { rx: 1560, ry: 500, op: 0.04 },
    ],
    rotate: 5,
    viewBox: '0 0 1400 600',
    ratio: 'xMinYMid slice',
  },
  // Cernes centrés centre-bas, plus resserrés
  footer: {
    cx: 700, cy: 480,
    rings: [
      { rx: 140, ry: 60,  op: 0.10 },
      { rx: 280, ry: 120, op: 0.09 },
      { rx: 430, ry: 185, op: 0.08 },
      { rx: 590, ry: 255, op: 0.07 },
      { rx: 760, ry: 330, op: 0.06 },
      { rx: 940, ry: 410, op: 0.06 },
      { rx: 1130, ry: 495, op: 0.05 },
      { rx: 1330, ry: 585, op: 0.04 },
    ],
    rotate: -15,
    viewBox: '0 0 1400 500',
    ratio: 'xMidYMax slice',
  },
}

export default function GrainOverlay({ variant = 'accueil' }) {
  const { cx, cy, rings, rotate, viewBox, ratio } = VARIANTS[variant]

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
      }}
      viewBox={viewBox}
      preserveAspectRatio={ratio}
      aria-hidden="true"
    >
      <g transform={`rotate(${rotate}, ${cx}, ${cy})`}>
        {rings.map(({ rx, ry, op }, i) => (
          <ellipse
            key={i}
            cx={cx}
            cy={cy}
            rx={rx}
            ry={ry}
            fill="none"
            stroke="white"
            strokeWidth="1.2"
            opacity={op}
          />
        ))}
      </g>
    </svg>
  )
}
