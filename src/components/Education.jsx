import { GraduationCap, Award, Medal, FileCheck } from 'lucide-react'
import { education, achievements } from '../data/content'
import Reveal from './Reveal'

const achIcons = [Medal, FileCheck, Award]

export default function Education() {
  return (
    <section className="relative py-24 sm:py-28">
      <div className="section">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Education */}
          <div>
            <Reveal>
              <span className="kicker">Education</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 text-balance text-2xl font-bold tracking-tightest text-ink sm:text-3xl">
                Strong roots, top of the class.
              </h2>
            </Reveal>

            <div className="mt-8 space-y-4">
              {education.map((ed, i) => (
                <Reveal key={i} delay={0.1 + i * 0.08}>
                  <div className="glass glass-hover relative p-6">
                    <div className="flex items-start gap-4">
                      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-accent/25 bg-accent/[0.08] text-accent">
                        <GraduationCap size={19} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-[15px] font-semibold text-ink">{ed.degree}</h3>
                          {ed.honor && (
                            <span className="inline-flex items-center gap-1 rounded-full border border-accent/30 bg-accent/10 px-2 py-0.5 font-mono text-[10px] font-semibold text-accent">
                              <Medal size={10} /> {ed.honor}
                            </span>
                          )}
                        </div>
                        <p className="mt-1 text-[13px] leading-snug text-ink-dim">{ed.school}</p>
                        <div className="mt-3 flex items-center gap-4 font-mono text-[12px]">
                          <span className="text-ink-soft">{ed.period}</span>
                          <span className="text-accent-300">{ed.score}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <Reveal>
              <span className="kicker">Recognition</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 text-balance text-2xl font-bold tracking-tightest text-ink sm:text-3xl">
                Awards & credentials.
              </h2>
            </Reveal>

            <div className="mt-8 space-y-4">
              {achievements.map((a, i) => {
                const Icon = achIcons[i % achIcons.length]
                return (
                  <Reveal key={i} delay={0.1 + i * 0.08} dir="left">
                    <div className="glass glass-hover flex items-start gap-4 p-6">
                      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-signal/25 bg-signal/[0.08] text-signal-400">
                        <Icon size={19} />
                      </div>
                      <div>
                        <h3 className="text-[15px] font-semibold text-ink">{a.title}</h3>
                        <p className="mt-1 text-[13px] leading-relaxed text-ink-dim">{a.detail}</p>
                      </div>
                    </div>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
