import { motion } from 'framer-motion'
import { Cpu, Cloud, Database, Webhook, Wrench, LayoutGrid } from 'lucide-react'
import { skillGroups, languages } from '../data/content'
import Reveal, { stagger, item } from './Reveal'

const groupIcons = [Cpu, Cloud, Database, Webhook, Wrench, LayoutGrid]

export default function Skills() {
  return (
    <section id="skills" className="relative scroll-mt-24 py-24 sm:py-28">
      <div className="section">
        <div className="mb-12">
          <Reveal>
            <span className="kicker">Tech arsenal</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 max-w-2xl text-balance text-3xl font-bold leading-tight tracking-tightest text-ink sm:text-[2.6rem]">
              The stack behind the systems.
            </h2>
          </Reveal>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g, i) => {
            const Icon = groupIcons[i % groupIcons.length]
            return (
              <Reveal key={g.label} delay={(i % 3) * 0.08} amount={0.2}>
                <motion.div
                  variants={stagger(0.05)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  className="glass glass-hover h-full p-6"
                >
                  <div className="mb-5 flex items-center justify-between">
                    <div className="grid h-10 w-10 place-items-center rounded-lg border border-accent/25 bg-accent/[0.08] text-accent">
                      <Icon size={18} />
                    </div>
                    <span className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-ink-faint">
                      {g.mono}
                    </span>
                  </div>
                  <h3 className="mb-4 text-[15px] font-semibold text-ink">{g.label}</h3>
                  <div className="flex flex-wrap gap-2">
                    {g.items.map((s) => (
                      <motion.span variants={item} key={s} className="chip !text-[11.5px]">
                        {s}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </Reveal>
            )
          })}
        </div>

        {/* extra meta strip */}
        <Reveal delay={0.1}>
          <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-3 rounded-2xl border border-line bg-base-700/30 px-6 py-5">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-faint">languages</span>
              <span className="text-sm text-ink-soft">{languages.join(' · ')}</span>
            </div>
            <span className="hidden h-4 w-px bg-line sm:block" />
            <div className="flex items-center gap-2">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-faint">strengths</span>
              <span className="text-sm text-ink-soft">Mentorship · DevOps collaboration · End-to-end ownership</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
