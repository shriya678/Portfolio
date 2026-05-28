import { motion } from 'framer-motion'
import { ArrowUpRight, Check } from 'lucide-react'
import { caseStudies } from '../data/content'
import MiniDiagram from './MiniDiagram'
import Reveal from './Reveal'

function CaseCard({ cs, i }) {
  const flip = i % 2 === 1
  return (
    <Reveal amount={0.2} delay={0.05}>
      <article className="glass glass-hover group relative overflow-hidden rounded-2xl">
        {/* top accent line on hover */}
        <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <div className={`grid gap-0 lg:grid-cols-2 ${flip ? 'lg:[&>*:first-child]:order-2' : ''}`}>
          {/* text side */}
          <div className="p-7 sm:p-9">
            <div className="flex items-center gap-3">
              <span className="font-mono text-sm font-semibold text-accent">{cs.index}</span>
              <span className="chip !text-[11px]">{cs.tag}</span>
            </div>

            <h3 className="mt-4 text-balance text-xl font-bold leading-snug tracking-tight text-ink sm:text-2xl">
              {cs.title}
            </h3>

            <p className="mt-3 text-pretty text-sm leading-relaxed text-ink-soft">{cs.summary}</p>

            {/* metric chips */}
            <div className="mt-6 grid grid-cols-3 gap-2.5">
              {cs.metrics.map((m, k) => (
                <div key={k} className="rounded-lg border border-line bg-base-700/40 px-3 py-2.5">
                  <p className="font-mono text-[9.5px] uppercase tracking-wider text-ink-faint">{m.k}</p>
                  <p className="mt-0.5 text-[12.5px] font-semibold text-ink">{m.v}</p>
                </div>
              ))}
            </div>

            {/* highlights */}
            <ul className="mt-6 space-y-2.5">
              {cs.highlights.map((h, k) => (
                <li key={k} className="flex items-start gap-2.5 text-[13.5px] leading-relaxed text-ink-soft">
                  <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full border border-accent/40 bg-accent/10 text-accent">
                    <Check size={10} strokeWidth={3} />
                  </span>
                  {h}
                </li>
              ))}
            </ul>

            {/* stack */}
            <div className="mt-6 flex flex-wrap gap-2">
              {cs.stack.map((s) => (
                <span key={s} className="chip !py-0.5 !text-[11px]">{s}</span>
              ))}
            </div>
          </div>

          {/* diagram side */}
          <div className="relative flex flex-col border-t border-line bg-base-900/40 lg:border-l lg:border-t-0">
            <div className="flex items-center justify-between border-b border-line px-5 py-3">
              <span className="font-mono text-[11px] text-ink-dim">topology.svg</span>
              <span className="flex items-center gap-1.5 font-mono text-[10px] text-accent-300">
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-node" />
                {cs.impact}
              </span>
            </div>
            <div className="dotted-bg relative flex flex-1 items-center justify-center p-6">
              <div className="h-[150px] w-full max-w-[340px]">
                <MiniDiagram type={cs.diagram} />
              </div>
              <div className="pointer-events-none absolute inset-y-4 left-0 w-20 animate-sweep bg-gradient-to-r from-transparent via-accent/[0.05] to-transparent" />
            </div>
          </div>
        </div>
      </article>
    </Reveal>
  )
}

export default function CaseStudies() {
  return (
    <section id="work" className="relative scroll-mt-24 py-24 sm:py-28">
      <div className="section">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <Reveal>
              <span className="kicker">Selected work</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 max-w-2xl text-balance text-3xl font-bold leading-tight tracking-tightest text-ink sm:text-[2.6rem]">
                Systems I’ve designed, shipped, and operated.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.16}>
            <p className="max-w-xs text-sm leading-relaxed text-ink-dim">
              Four case studies from production work — payments, event-driven pipelines, real-time comms, and the API platform beneath them.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-6">
          {caseStudies.map((cs, i) => (
            <CaseCard key={cs.id} cs={cs} i={i} />
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-10 flex items-center justify-center">
            <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }} className="group inline-flex items-center gap-2 font-mono text-sm text-ink-soft transition-colors hover:text-accent">
              Want the deeper walkthrough? Let’s talk
              <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
