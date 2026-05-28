// Compact architecture sketches for each case study card.
// type ∈ 'payments' | 'eventbus' | 'realtime' | 'api'

const C = {
  teal: '#2DD4BF',
  blue: '#5B9DFF',
  ink: 'rgba(255,255,255,0.22)',
  dim: '#6B7785',
  txt: '#AEB9C6',
}

function Box({ x, y, w = 64, h = 30, label, sub, color = C.ink, text = C.txt }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx="7" fill={`${color}14`} stroke={color} strokeWidth="1" />
      <text x={x + w / 2} y={sub ? y + h / 2 - 1 : y + h / 2 + 3} textAnchor="middle" fontSize="9" fontWeight="600" fontFamily="Inter, sans-serif" fill={text}>
        {label}
      </text>
      {sub && (
        <text x={x + w / 2} y={y + h / 2 + 9} textAnchor="middle" fontSize="6.5" fontFamily="'JetBrains Mono', monospace" fill={C.dim}>
          {sub}
        </text>
      )}
    </g>
  )
}

function Flow({ d, color = C.teal, delay = 0, op = 0.6 }) {
  return (
    <g>
      <path d={d} fill="none" stroke={color} strokeOpacity={op * 0.35} strokeWidth="1.1" />
      <path
        d={d}
        fill="none"
        stroke={color}
        strokeWidth="1.3"
        strokeOpacity={op}
        strokeDasharray="3 6"
        strokeLinecap="round"
        className="animate-flow-dash"
        style={{ animationDelay: `${delay}s` }}
      />
    </g>
  )
}

function Payments() {
  return (
    <svg viewBox="0 0 320 150" className="h-full w-full">
      <Flow d="M84 45 H120" color={C.teal} />
      <Flow d="M184 45 H224" color={C.teal} delay={0.2} />
      <Flow d="M256 60 C 256 100, 152 110, 152 80" color={C.blue} delay={0.5} op={0.55} />
      <Flow d="M152 60 V96" color={C.blue} delay={0.35} />
      <Box x={20} y={30} label="Checkout" sub="client" color={C.ink} />
      <Box x={120} y={30} label="API" sub="verify" color={C.teal} text="#5EEAD4" />
      <Box x={224} y={30} w={72} label="Cashfree" sub="gateway" color={C.teal} text="#5EEAD4" />
      <Box x={118} y={96} w={72} label="Webhook" sub="validated" color={C.blue} text="#9DC1FF" />
      <text x={235} y={128} textAnchor="middle" fontSize="7" fontFamily="'JetBrains Mono',monospace" fill={C.dim}>reconcile ⟲ status</text>
    </svg>
  )
}

function EventBus() {
  return (
    <svg viewBox="0 0 320 150" className="h-full w-full">
      <Flow d="M84 40 H120" color={C.blue} />
      <Flow d="M184 40 C 214 40, 214 70, 244 70" color={C.blue} delay={0.2} op={0.5} />
      <Flow d="M184 40 C 214 40, 214 110, 244 110" color={C.teal} delay={0.35} />
      <Flow d="M308 70 H308" color={C.teal} />
      <Box x={20} y={25} label="Producer" sub="service" color={C.ink} />
      <Box x={120} y={25} label="EventBridge" sub="route" color={C.blue} text="#9DC1FF" />
      <Box x={244} y={55} w={66} label="SQS" sub="buffer" color={C.teal} text="#5EEAD4" />
      <Box x={244} y={95} w={66} label="DynamoDB" sub="store" color={C.teal} text="#5EEAD4" />
    </svg>
  )
}

function Realtime() {
  return (
    <svg viewBox="0 0 320 150" className="h-full w-full">
      <Flow d="M84 70 H120" color={C.teal} />
      <Flow d="M184 55 C 214 55, 214 28, 244 28" color={C.blue} delay={0.15} op={0.5} />
      <Flow d="M184 70 H244" color={C.teal} delay={0.25} />
      <Flow d="M184 85 C 214 85, 214 112, 244 112" color={C.blue} delay={0.35} op={0.5} />
      <Box x={20} y={55} label="Client" sub="socket" color={C.ink} />
      <Box x={120} y={55} label="Gateway" sub="ws + api" color={C.teal} text="#5EEAD4" />
      <Box x={244} y={15} w={68} h={26} label="Pusher" sub="push" color={C.blue} text="#9DC1FF" />
      <Box x={244} y={57} w={68} h={26} label="MessageBird" sub="sms" color={C.teal} text="#5EEAD4" />
      <Box x={244} y={99} w={68} h={26} label="Exotel" sub="ivr" color={C.blue} text="#9DC1FF" />
    </svg>
  )
}

function Api() {
  return (
    <svg viewBox="0 0 320 150" className="h-full w-full">
      <Flow d="M84 70 H120" color={C.teal} />
      <Flow d="M184 70 H224" color={C.teal} delay={0.2} />
      <Flow d="M256 85 V100" color={C.teal} delay={0.3} />
      <Box x={20} y={55} label="React" sub="client" color={C.ink} />
      <Box x={120} y={55} label="REST API" sub="contracts" color={C.teal} text="#5EEAD4" />
      <Box x={224} y={55} w={72} label="ORM" sub="typeorm" color={C.blue} text="#9DC1FF" />
      <Box x={208} y={100} label="Postgres" sub="sql" color={C.teal} text="#5EEAD4" />
      <Box x={120} y={100} label="Mongo" sub="nosql" color={C.ink} />
      <Flow d="M256 70 C 256 88, 160 92, 160 100" color={C.ink} delay={0.4} op={0.4} />
    </svg>
  )
}

const MAP = { payments: Payments, eventbus: EventBus, realtime: Realtime, api: Api }

export default function MiniDiagram({ type }) {
  const Cmp = MAP[type] || Api
  return <Cmp />
}
