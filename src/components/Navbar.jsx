import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { nav, profile } from '../data/content'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ids = nav.map((n) => n.id)
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  const go = (id) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.21, 0.5, 0.2, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-line bg-base-900/70 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-[1180px] items-center justify-between px-6 sm:px-8">
        {/* Brand */}
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="group flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-lg border border-accent/30 bg-accent/10 font-mono text-sm font-bold text-accent shadow-glow transition-transform duration-300 group-hover:scale-105">
            sg
          </span>
          <span className="font-mono text-sm tracking-tight text-ink">
            shriya<span className="text-accent">.</span>dev
          </span>
        </button>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 md:flex">
          {nav.map((n) => (
            <button
              key={n.id}
              onClick={() => go(n.id)}
              className={`relative rounded-lg px-3.5 py-2 text-sm transition-colors duration-300 ${
                active === n.id ? 'text-ink' : 'text-ink-dim hover:text-ink'
              }`}
            >
              {active === n.id && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute inset-0 rounded-lg border border-accent/25 bg-accent/[0.07]"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative">{n.label}</span>
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden items-center gap-3 md:flex">
          <span className="flex items-center gap-2 font-mono text-[11px] text-ink-dim">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            available
          </span>
          <a href={`mailto:${profile.email}`} className="btn btn-primary !px-4 !py-2 text-[13px]">
            Get in touch <ArrowUpRight size={15} />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((o) => !o)}
          className="grid h-10 w-10 place-items-center rounded-lg border border-line text-ink md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.21, 0.5, 0.2, 1] }}
            className="overflow-hidden border-t border-line bg-base-900/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {nav.map((n) => (
                <button
                  key={n.id}
                  onClick={() => go(n.id)}
                  className="flex items-center justify-between rounded-lg px-3 py-3 text-left text-sm text-ink-soft hover:bg-white/[0.03] hover:text-ink"
                >
                  {n.label}
                  <ArrowUpRight size={15} className="text-ink-dim" />
                </button>
              ))}
              <a href={`mailto:${profile.email}`} className="btn btn-primary mt-2">
                Get in touch <ArrowUpRight size={15} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
