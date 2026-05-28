import { ArrowUp } from 'lucide-react'
import { profile, nav } from '../data/content'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="relative border-t border-line py-12">
      <div className="section">
        <div className="flex flex-col items-center justify-between gap-8 sm:flex-row sm:items-start">
          <div>
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-2.5">
              <span className="grid h-8 w-8 place-items-center rounded-lg border border-accent/30 bg-accent/10 font-mono text-sm font-bold text-accent">
                sg
              </span>
              <span className="font-mono text-sm text-ink">shriya<span className="text-accent">.</span>dev</span>
            </button>
            <p className="mt-4 max-w-xs text-[13px] leading-relaxed text-ink-dim">
              {profile.role} · building reliable, event-driven backends.
            </p>
            <p className="mt-3 font-mono text-[11px] text-ink-faint">{profile.location}</p>
          </div>

          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {nav.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                onClick={(e) => { e.preventDefault(); document.getElementById(n.id)?.scrollIntoView({ behavior: 'smooth' }) }}
                className="link-underline text-[13px]"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group flex items-center gap-2 rounded-xl border border-line bg-white/[0.02] px-4 py-2.5 text-[13px] text-ink-soft transition-colors hover:border-accent/40 hover:text-ink"
          >
            Back to top
            <ArrowUp size={14} className="transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-line pt-6 text-center font-mono text-[11px] text-ink-faint sm:flex-row sm:text-left">
          <p>© {year} {profile.name}. Built with React, Tailwind & Framer Motion.</p>
          <p className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-node" />
            designed & engineered end-to-end
          </p>
        </div>
      </div>
    </footer>
  )
}
