import { motion } from 'framer-motion'
import { ArrowUpRight, Mail, Linkedin, Terminal } from 'lucide-react'
import { profile, techMarquee } from '../data/content'
import ArchitectureDiagram from './ArchitectureDiagram'

const ease = [0.21, 0.5, 0.2, 1]

function Headline() {
  const lines = profile.tagline.split('\n')
  return (
    <h1 className="text-balance text-[2.5rem] font-extrabold leading-[1.04] tracking-tightest sm:text-5xl lg:text-[3.65rem]">
      {lines.map((line, i) => (
        <motion.span
          key={i}
          className="block"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 + i * 0.12, ease }}
        >
          {i === 0 ? <span className="text-gradient">{line}</span> : <span className="text-ink-soft">{line}</span>}
        </motion.span>
      ))}
    </h1>
  )
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 sm:pt-36 lg:pt-40">
      <div className="section">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          {/* Left: identity */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
              className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-line bg-base-700/50 px-3.5 py-1.5"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <span className="font-mono text-[12px] text-ink-soft">{profile.status}</span>
            </motion.div>

            <Headline />

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45, ease }}
              className="mt-6 max-w-xl text-pretty text-[15px] leading-relaxed text-ink-soft sm:text-base"
            >
              {profile.subtagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6, ease }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href="#work"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="btn btn-primary"
              >
                View case studies <ArrowUpRight size={16} />
              </a>
              <a href={`mailto:${profile.email}`} className="btn btn-ghost">
                <Mail size={15} /> Email me
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="btn btn-ghost"
              >
                <Linkedin size={15} /> LinkedIn
              </a>
            </motion.div>

            {/* identity meta row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.8, ease }}
              className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[12px] text-ink-dim"
            >
              <span>{profile.location}</span>
              <span className="hidden h-3 w-px bg-line sm:block" />
              <span>{profile.linkedinLabel}</span>
            </motion.div>
          </div>

          {/* Right: systems console */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.35, ease }}
            className="relative"
          >
            {/* glow */}
            <div className="absolute -inset-4 -z-10 rounded-[28px] bg-[radial-gradient(ellipse_at_center,rgba(45,212,191,0.12),transparent_70%)] blur-xl" />
            <div className="glass overflow-hidden rounded-2xl shadow-card">
              {/* terminal bar */}
              <div className="flex items-center gap-2 border-b border-line bg-base-900/60 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]/70" />
                <span className="ml-2 flex items-center gap-1.5 font-mono text-[11px] text-ink-dim">
                  <Terminal size={12} /> architecture.live
                </span>
                <span className="ml-auto flex items-center gap-1.5 font-mono text-[10px] text-accent-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-node" /> streaming
                </span>
              </div>
              {/* diagram */}
              <div className="relative px-4 pb-3 pt-5">
                <ArchitectureDiagram />
                {/* sweeping scan line */}
                <div className="pointer-events-none absolute inset-y-6 left-0 w-24 animate-sweep bg-gradient-to-r from-transparent via-accent/[0.06] to-transparent" />
              </div>
              {/* footer log line */}
              <div className="border-t border-line bg-base-900/40 px-4 py-2.5 font-mono text-[10.5px] text-ink-dim">
                <span className="text-accent-300">›</span> POST /payment → 200 · webhook verified · status reconciled
                <span className="ml-1 inline-block h-3 w-1.5 translate-y-0.5 bg-accent animate-blink" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Tech marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1, ease }}
          className="relative mt-16 sm:mt-20"
        >
          <p className="mb-4 text-center font-mono text-[11px] uppercase tracking-[0.3em] text-ink-faint">
            tooling i reach for
          </p>
          <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)]">
            <div className="flex w-max animate-[marquee_38s_linear_infinite] gap-3">
              {[...techMarquee, ...techMarquee].map((t, i) => (
                <span key={i} className="chip whitespace-nowrap">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent/60" />
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}
