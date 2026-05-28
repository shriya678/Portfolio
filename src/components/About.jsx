import { ShieldCheck, GitBranch, Users } from 'lucide-react'
import { about } from '../data/content'
import Reveal from './Reveal'

const icons = [ShieldCheck, GitBranch, Users]

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-24 py-28 sm:py-32">
      <div className="section">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* left: heading */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <span className="kicker">{about.kicker}</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 text-balance text-3xl font-bold leading-tight tracking-tightest text-ink sm:text-[2.5rem]">
                {about.heading}
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="mt-8 flex items-center gap-3 rounded-xl border border-line bg-base-700/40 p-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-accent/30 bg-accent/10 font-mono text-sm font-bold text-accent">
                  #1
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink">Gold Medalist, MSc CS</p>
                  <p className="font-mono text-[11px] text-ink-dim">highest marks · ABVV University</p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* right: narrative + principles */}
          <div>
            <div className="space-y-5">
              {about.paragraphs.map((p, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <p className="text-pretty text-[15px] leading-relaxed text-ink-soft sm:text-base">
                    {p}
                  </p>
                </Reveal>
              ))}
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-1">
              {about.principles.map((pr, i) => {
                const Icon = icons[i % icons.length]
                return (
                  <Reveal key={i} delay={0.1 + i * 0.08} dir="left">
                    <div className="glass glass-hover flex items-start gap-4 p-5">
                      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-accent/25 bg-accent/[0.08] text-accent">
                        <Icon size={18} />
                      </div>
                      <div>
                        <h3 className="text-[15px] font-semibold text-ink">{pr.title}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-ink-dim">{pr.body}</p>
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
