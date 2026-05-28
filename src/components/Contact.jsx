import { Mail, Phone, Linkedin, ArrowUpRight, Copy, Check } from 'lucide-react'
import { useState } from 'react'
import { profile } from '../data/content'
import Reveal from './Reveal'

function CopyEmail() {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      /* clipboard unavailable */
    }
  }
  return (
    <button
      onClick={copy}
      className="inline-flex items-center gap-1.5 font-mono text-[11px] text-ink-dim transition-colors hover:text-accent"
      aria-label="Copy email"
    >
      {copied ? <Check size={12} /> : <Copy size={12} />}
      {copied ? 'copied' : 'copy'}
    </button>
  )
}

const channels = [
  { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}`, copy: true },
  { icon: Linkedin, label: 'LinkedIn', value: profile.linkedinLabel, href: profile.linkedin },
  { icon: Phone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/[^+\d]/g, '')}` },
]

export default function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-24 py-24 sm:py-28">
      <div className="section">
        <Reveal>
          <div className="glass relative overflow-hidden rounded-3xl p-8 sm:p-12 lg:p-16">
            {/* ambient glow */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(45,212,191,0.16),transparent_70%)] blur-2xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(91,157,255,0.12),transparent_70%)] blur-2xl" />

            <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <span className="kicker">Let’s build</span>
                <h2 className="mt-5 text-balance text-3xl font-bold leading-tight tracking-tightest text-ink sm:text-[2.75rem]">
                  Have a backend that needs to scale —
                  <span className="text-accent-gradient"> or stop breaking?</span>
                </h2>
                <p className="mt-5 max-w-lg text-pretty text-[15px] leading-relaxed text-ink-soft">
                  I’m {profile.status.toLowerCase()}. If you need someone who can own APIs, payments, queues, and the production incidents that come with them — let’s talk.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <a href={`mailto:${profile.email}`} className="btn btn-primary">
                    Start a conversation <ArrowUpRight size={16} />
                  </a>
                  <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn btn-ghost">
                    <Linkedin size={15} /> Connect
                  </a>
                </div>
              </div>

              {/* channels */}
              <div className="space-y-3">
                {channels.map((c) => {
                  const Icon = c.icon
                  return (
                    <div
                      key={c.label}
                      className="group flex items-center gap-4 rounded-xl border border-line bg-base-700/40 p-4 transition-colors duration-300 hover:border-accent/30"
                    >
                      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-line bg-base-800 text-accent">
                        <Icon size={17} />
                      </div>
                      <a href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="min-w-0 flex-1">
                        <p className="font-mono text-[10.5px] uppercase tracking-wider text-ink-faint">{c.label}</p>
                        <p className="truncate text-sm text-ink-soft transition-colors group-hover:text-ink">{c.value}</p>
                      </a>
                      {c.copy ? <CopyEmail /> : <ArrowUpRight size={15} className="text-ink-faint transition-colors group-hover:text-accent" />}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
