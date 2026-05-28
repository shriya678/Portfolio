import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'
import { experience } from '../data/content'
import Reveal from './Reveal'

function Entry({ e, i }) {
  return (
    <Reveal amount={0.25} delay={0.05} dir="left">
      <div className="relative pl-10 sm:pl-14">
        {/* node */}
        <span className="absolute left-0 top-1 grid h-8 w-8 -translate-x-[14px] place-items-center rounded-full border border-accent/40 bg-base-800 text-accent shadow-glow sm:-translate-x-[15px]">
          <Briefcase size={14} />
        </span>

        <div className="glass glass-hover p-6 sm:p-7">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-lg font-bold tracking-tight text-ink">{e.role}</h3>
              <p className="mt-0.5 text-sm text-accent-300">{e.company}</p>
            </div>
            <div className="flex items-center gap-3 sm:flex-col sm:items-end">
              <span className="font-mono text-[12px] text-ink-dim">{e.period}</span>
              <span className="font-mono text-[11px] text-ink-faint">{e.location}</span>
            </div>
          </div>

          <p className="mt-4 text-pretty text-sm leading-relaxed text-ink-soft">{e.blurb}</p>

          <ul className="mt-5 grid gap-2 sm:grid-cols-2">
            {e.points.map((p, k) => (
              <li key={k} className="flex items-start gap-2 text-[13px] leading-relaxed text-ink-dim">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent/70" />
                {p}
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-wrap gap-2">
            {e.tags.map((t) => (
              <span key={t} className="chip !py-0.5 !text-[11px]">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="relative scroll-mt-24 py-24 sm:py-28">
      <div className="section">
        <div className="mb-12">
          <Reveal>
            <span className="kicker">Trajectory</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 max-w-2xl text-balance text-3xl font-bold leading-tight tracking-tightest text-ink sm:text-[2.6rem]">
              Where I’ve shipped.
            </h2>
          </Reveal>
        </div>

        <div className="relative">
          {/* timeline rail */}
          <span className="absolute left-0 top-2 hidden h-[calc(100%-1rem)] w-px bg-gradient-to-b from-accent/40 via-line to-transparent sm:block" />
          <div className="space-y-6">
            {experience.map((e, i) => (
              <Entry key={e.company} e={e} i={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
