import { motion } from 'framer-motion'

// Animated system topology used in the hero.
// Renders a live data flow: Client → API → EventBridge → SQS → Worker → DB,
// with a webhook return arc and external service taps.

const NODE = {
  client: { x: 24, y: 150, w: 92, h: 52, label: 'Client', sub: 'React', tone: 'ink' },
  api: { x: 168, y: 150, w: 104, h: 52, label: 'REST API', sub: 'NestJS', tone: 'accent' },
  bus: { x: 330, y: 60, w: 116, h: 50, label: 'EventBridge', sub: 'events', tone: 'signal' },
  queue: { x: 330, y: 150, w: 116, h: 52, label: 'SQS Queue', sub: 'buffered', tone: 'accent' },
  worker: { x: 330, y: 248, w: 116, h: 50, label: 'Worker', sub: 'retry-safe', tone: 'ink' },
  db: { x: 500, y: 150, w: 100, h: 52, label: 'Database', sub: 'Postgres', tone: 'accent' },
  webhook: { x: 168, y: 60, w: 104, h: 44, label: 'Webhook', sub: 'verified', tone: 'signal' },
}

const tones = {
  accent: { stroke: '#2DD4BF', fill: 'rgba(45,212,191,0.08)', text: '#5EEAD4' },
  signal: { stroke: '#5B9DFF', fill: 'rgba(91,157,255,0.08)', text: '#9DC1FF' },
  ink: { stroke: 'rgba(255,255,255,0.22)', fill: 'rgba(255,255,255,0.03)', text: '#AEB9C6' },
}

function Node({ n, delay = 0 }) {
  const t = tones[n.tone]
  return (
    <motion.g
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.5, 0.2, 1] }}
      style={{ transformOrigin: `${n.x + n.w / 2}px ${n.y + n.h / 2}px` }}
    >
      <rect
        x={n.x}
        y={n.y}
        width={n.w}
        height={n.h}
        rx="10"
        fill={t.fill}
        stroke={t.stroke}
        strokeWidth="1.2"
      />
      <rect
        x={n.x}
        y={n.y}
        width={n.w}
        height={n.h}
        rx="10"
        fill="none"
        stroke={t.stroke}
        strokeOpacity="0.0"
      />
      <circle cx={n.x + 13} cy={n.y + 14} r="3" fill={t.stroke} className="animate-pulse-node" />
      <text
        x={n.x + n.w / 2}
        y={n.y + n.h / 2 + 1}
        textAnchor="middle"
        fontSize="12.5"
        fontWeight="600"
        fontFamily="Inter, sans-serif"
        fill={t.text}
      >
        {n.label}
      </text>
      <text
        x={n.x + n.w / 2}
        y={n.y + n.h / 2 + 15}
        textAnchor="middle"
        fontSize="9"
        fontFamily="'JetBrains Mono', monospace"
        fill="#6B7785"
      >
        {n.sub}
      </text>
    </motion.g>
  )
}

function Edge({ d, color = '#2DD4BF', delay = 0, dashed = true, opacity = 0.5 }) {
  return (
    <g>
      <path d={d} fill="none" stroke={color} strokeOpacity={opacity * 0.4} strokeWidth="1.4" />
      {dashed && (
        <path
          d={d}
          fill="none"
          stroke={color}
          strokeWidth="1.8"
          strokeOpacity={opacity}
          strokeDasharray="4 8"
          strokeLinecap="round"
          className="animate-flow-dash"
          style={{ animationDelay: `${delay}s` }}
        />
      )}
    </g>
  )
}

export default function ArchitectureDiagram({ className = '' }) {
  return (
    <div className={className}>
      <svg
        viewBox="0 0 624 340"
        className="h-auto w-full"
        role="img"
        aria-label="System architecture: client to API to event bus, queue, worker and database"
      >
        <defs>
          <radialGradient id="diagGlow" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="rgba(45,212,191,0.10)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>

        <rect x="0" y="0" width="624" height="340" fill="url(#diagGlow)" />

        {/* Edges (drawn under nodes) */}
        {/* client -> api */}
        <Edge d="M116 176 H168" color="#2DD4BF" delay={0} />
        {/* api -> bus */}
        <Edge d="M272 165 C 300 165, 300 85, 330 85" color="#5B9DFF" delay={0.3} />
        {/* api -> queue */}
        <Edge d="M272 176 H330" color="#2DD4BF" delay={0.15} />
        {/* bus -> worker (curve down) */}
        <Edge d="M388 110 C 388 150, 388 220, 388 248" color="#5B9DFF" delay={0.5} opacity={0.4} />
        {/* queue -> worker */}
        <Edge d="M388 202 V248" color="#2DD4BF" delay={0.25} />
        {/* worker -> db (curve up) */}
        <Edge d="M446 268 C 480 268, 500 210, 520 202" color="#2DD4BF" delay={0.6} />
        {/* queue -> db */}
        <Edge d="M446 176 H500" color="#2DD4BF" delay={0.2} />
        {/* webhook -> api (down) */}
        <Edge d="M220 104 V150" color="#5B9DFF" delay={0.4} opacity={0.45} />
        {/* db -> webhook return arc (reconcile loop) */}
        <Edge
          d="M550 150 C 550 30, 300 18, 220 60"
          color="#5B9DFF"
          delay={0.7}
          opacity={0.32}
        />

        {/* Nodes */}
        <Node n={NODE.webhook} delay={0.45} />
        <Node n={NODE.client} delay={0.1} />
        <Node n={NODE.api} delay={0.2} />
        <Node n={NODE.bus} delay={0.4} />
        <Node n={NODE.queue} delay={0.3} />
        <Node n={NODE.worker} delay={0.5} />
        <Node n={NODE.db} delay={0.35} />

        {/* floating label: reconcile loop */}
        <text
          x="385"
          y="32"
          textAnchor="middle"
          fontSize="9"
          fontFamily="'JetBrains Mono', monospace"
          fill="#5B9DFF"
          opacity="0.8"
        >
          reconcile ⟲
        </text>
      </svg>
    </div>
  )
}
