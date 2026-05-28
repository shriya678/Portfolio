// ─────────────────────────────────────────────────────────────
//  Single source of truth for portfolio content.
//  Edit the strings below to update the site — no component edits needed.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Shriya Gupta',
  firstName: 'Shriya',
  role: 'Backend Engineer',
  location: 'Bilaspur, India · Remote',
  email: 'guptashriya035@gmail.com',
  phone: '+91 83191-81409',
  linkedin: 'https://www.linkedin.com/in/shriyagupta-',
  linkedinLabel: 'linkedin.com/in/shriyagupta-',
  tagline: 'I build backends that ship to production —\nand stay standing under load.',
  subtagline:
    'Backend engineer with 2 years building scalable, event-driven systems in Node.js, NestJS & AWS. I’ve shipped live payment infrastructure, real-time messaging, and queue-based pipelines that handle real money and real users.',
  status: 'Open to backend & platform roles',
}

export const stats = [
  { value: '2', suffix: 'yrs', label: 'Backend engineering', mono: 'experience' },
  { value: '5', suffix: '+', label: 'Production integrations', mono: 'third-party' },
  { value: '100', suffix: '%', label: 'Live payment flow shipped', mono: 'cashfree.prod' },
  { value: '1', suffix: '', label: 'Gold Medalist, MSc CS', mono: 'rank: #1' },
]

// Marquee of core technologies
export const techMarquee = [
  'Node.js', 'NestJS', 'TypeScript', 'Express.js', 'PostgreSQL', 'MySQL',
  'MongoDB', 'DynamoDB', 'AWS SQS', 'AWS EventBridge', 'TypeORM', 'Sequelize',
  'Docker', 'React.js', 'WebSockets', 'REST APIs',
]

export const about = {
  kicker: 'The story',
  heading: 'From gold-medal fundamentals to production systems.',
  paragraphs: [
    'I started with the fundamentals — and took them seriously. I graduated top of my MSc in Computer Science as a Gold Medalist, then turned that theory into systems that real businesses depend on.',
    'My focus is the backend: the APIs, queues, webhooks, and data flows that have to be correct even when traffic spikes and third parties misbehave. I’ve owned features end-to-end — from gathering business requirements and drawing the flowcharts, to shipping, to debugging the production incident at 2 a.m.',
    'I care most about the unglamorous parts that make software trustworthy: idempotent webhooks, transaction reconciliation, retry-safe queue consumers, and clean integration boundaries. That’s where I do my best work.',
  ],
  principles: [
    { title: 'Correctness over cleverness', body: 'Payments and webhooks don’t forgive shortcuts. I design for the failure case first.' },
    { title: 'Own the whole flow', body: 'Requirements → flowchart → API → deploy → reconcile. I take features end-to-end.' },
    { title: 'Lift the team', body: 'I review intern code and teach backend architecture so quality scales past me.' },
  ],
}

// ─── Case studies (the centerpiece) ───
export const caseStudies = [
  {
    id: 'cashfree',
    index: '01',
    tag: 'Payments · Production',
    title: 'Live payment infrastructure with Cashfree',
    summary:
      'Designed, shipped, and operated a production payment integration handling real transactions — including webhook validation, payment verification, and transaction-status reconciliation.',
    impact: 'Production · live money',
    metrics: [
      { k: 'Status', v: 'Production Live' },
      { k: 'Reliability', v: 'Webhook-validated' },
      { k: 'Integrity', v: 'Reconciled' },
    ],
    highlights: [
      'Verified payments and validated incoming webhooks to prevent spoofed or replayed events.',
      'Reconciled transaction status between gateway and internal records to guarantee a single source of truth.',
      'Operated the integration in production — owning incidents, edge cases, and recovery paths.',
    ],
    stack: ['NestJS', 'TypeScript', 'PostgreSQL', 'Webhooks', 'Cashfree'],
    // diagram type drives the SVG rendered in the card
    diagram: 'payments',
  },
  {
    id: 'event-driven',
    index: '02',
    tag: 'Architecture · AWS',
    title: 'Event-driven, queue-based processing on AWS',
    summary:
      'Built scalable, event-driven architectures using AWS EventBridge, SQS, and DynamoDB — decoupling services and turning spiky workloads into reliable, retry-safe pipelines.',
    impact: 'Decoupled · resilient',
    metrics: [
      { k: 'Pattern', v: 'Event-driven' },
      { k: 'Queueing', v: 'SQS' },
      { k: 'Store', v: 'DynamoDB' },
    ],
    highlights: [
      'Used EventBridge to route domain events between services without tight coupling.',
      'Processed work through SQS queues so spikes degrade gracefully instead of dropping requests.',
      'Persisted high-throughput state in DynamoDB for low-latency, scalable reads and writes.',
    ],
    stack: ['AWS EventBridge', 'AWS SQS', 'DynamoDB', 'Node.js'],
    diagram: 'eventbus',
  },
  {
    id: 'realtime',
    index: '03',
    tag: 'Real-time · Comms',
    title: 'Real-time messaging & telephony layer',
    summary:
      'Engineered real-time customer-support chat over WebSockets and integrated multi-channel comms — Pusher notifications, MessageBird SMS, and Exotel telephony/IVR.',
    impact: 'Multi-channel · live',
    metrics: [
      { k: 'Chat', v: 'WebSockets' },
      { k: 'Push', v: 'Pusher' },
      { k: 'Voice/SMS', v: 'Exotel · MessageBird' },
    ],
    highlights: [
      'Built and maintained socket-based APIs powering live customer-support and chat.',
      'Wired Pusher for real-time notifications and MessageBird for transactional SMS.',
      'Integrated Exotel telephony/IVR to bridge app events with voice workflows.',
    ],
    stack: ['WebSockets', 'Pusher', 'MessageBird', 'Exotel', 'Node.js'],
    diagram: 'realtime',
  },
  {
    id: 'api-platform',
    index: '04',
    tag: 'APIs · Platform',
    title: 'REST API platform for React frontends',
    summary:
      'Designed and maintained RESTful APIs across Node.js, NestJS, and Express — backed by PostgreSQL, MySQL & MongoDB — powering React.js clients with clean, well-tested contracts.',
    impact: 'Frontend-ready · tested',
    metrics: [
      { k: 'Style', v: 'RESTful' },
      { k: 'Data', v: 'SQL + NoSQL' },
      { k: 'Quality', v: 'Unit + Postman' },
    ],
    highlights: [
      'Authored REST contracts that gave React teams predictable, seamless client–server communication.',
      'Modeled data across PostgreSQL, MySQL & MongoDB using TypeORM and Sequelize.',
      'Validated functionality with Postman and unit tests, and optimized services for performance.',
    ],
    stack: ['NestJS', 'Express.js', 'TypeORM', 'Sequelize', 'React.js'],
    diagram: 'api',
  },
]

// ─── Skills grouped by domain ───
export const skillGroups = [
  {
    label: 'Languages & Runtime',
    mono: 'core',
    items: ['Node.js', 'TypeScript', 'JavaScript', 'Express.js', 'NestJS', 'Java', 'Python (Basic)', 'Django (Basic)'],
  },
  {
    label: 'Cloud & Messaging',
    mono: 'infra',
    items: ['AWS EventBridge', 'AWS SQS', 'DynamoDB', 'Pusher', 'Exotel', 'Cashfree', 'MessageBird'],
  },
  {
    label: 'Databases & ORM',
    mono: 'data',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'DynamoDB', 'TypeORM', 'Sequelize'],
  },
  {
    label: 'APIs & Integration',
    mono: 'api',
    items: ['RESTful API Design', 'Third-Party Integration', 'Webhooks', 'WebSockets'],
  },
  {
    label: 'Tools & DevOps',
    mono: 'tooling',
    items: ['Git', 'GitHub', 'Docker', 'Postman', 'CI/CD Collaboration', 'Agile'],
  },
  {
    label: 'Frontend',
    mono: 'client',
    items: ['React.js', 'HTML', 'CSS', 'Bootstrap'],
  },
]

// ─── Experience timeline ───
export const experience = [
  {
    company: 'PearlThoughts',
    role: 'Software Developer',
    period: 'Sep 2024 — Mar 2026',
    current: false,
    location: 'Remote',
    blurb:
      'Designed and maintained scalable backend services, owned features end-to-end, shipped production payments, and mentored interns.',
    points: [
      'Built backend services in Node.js, NestJS, TypeScript, PostgreSQL & MySQL.',
      'Shipped Cashfree payments to production — verification, webhook validation, reconciliation.',
      'Architected event-driven flows with AWS EventBridge, SQS & DynamoDB.',
      'Integrated MessageBird (SMS), Pusher (real-time), and Exotel (IVR/telephony).',
      'Led features from requirements → flowcharts → sub-tasks → delivery.',
      'Mentored interns, reviewed code, and guided backend best practices.',
      'Resolved critical production bugs to keep reliability high and downtime minimal.',
    ],
    tags: ['NestJS', 'AWS', 'PostgreSQL', 'Payments', 'Mentorship'],
  },
  {
    company: 'Helpy Moto Pvt. Ltd.',
    role: 'Backend Developer Intern',
    period: 'May 2024 — Aug 2024',
    current: false,
    location: 'India',
    blurb:
      'Built RESTful APIs and real-time chat for customer support in an Agile, cross-functional team.',
    points: [
      'Developed RESTful APIs with Express and Node.js.',
      'Built customer-support & chat APIs using sockets.',
      'Implemented CRUD and managed data in MongoDB.',
      'Tested and validated APIs with Postman; worked in Agile with Git.',
    ],
    tags: ['Node.js', 'Express', 'MongoDB', 'WebSockets'],
  },
]

// ─── Education & achievements ───
export const education = [
  {
    degree: 'M.Sc. Computer Science',
    school: 'DLS PG College, Bilaspur (C.G)',
    period: '2021 — 2023',
    score: '86.12%',
    honor: 'Gold Medalist',
  },
  {
    degree: 'B.Sc. Computer Science (Hons.)',
    school: 'Guru Ghasidas Vishwavidyalaya, Central University, Bilaspur (C.G)',
    period: '2018 — 2021',
    score: '86.47%',
    honor: null,
  },
]

export const achievements = [
  {
    title: 'Gold Medalist — MSc Computer Science',
    detail: 'Secured the highest marks in MSc Computer Science at Atal Bihari Vajpayee Vishwavidyalaya (ABVV) University.',
  },
  {
    title: 'Letter of Recommendation',
    detail: 'Recognized for backend delivery and mentorship during professional work.',
  },
  {
    title: 'Internship Completion Certificate',
    detail: 'Awarded on successful completion of backend development internship.',
  },
]

export const languages = ['English', 'Hindi']

export const nav = [
  { id: 'work', label: 'Work' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]
