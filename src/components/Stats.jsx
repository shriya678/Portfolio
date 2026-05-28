import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { stats } from '../data/content'

function useCountUp(target, run, duration = 1400) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!run) return
    const num = parseInt(target, 10)
    if (Number.isNaN(num)) return
    let raf
    const start = performance.now()
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setVal(Math.round(eased * num))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [run, target, duration])
  return val
}

function StatCell({ s, run, i }) {
  const count = useCountUp(s.value, run)
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={run ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: i * 0.08, ease: [0.21, 0.5, 0.2, 1] }}
      className="group relative px-5 py-7 text-center sm:px-7"
    >
      <div className="flex items-baseline justify-center gap-0.5">
        <span className="text-4xl font-extrabold tracking-tightest text-ink sm:text-5xl">{count}</span>
        <span className="text-2xl font-bold text-accent sm:text-3xl">{s.suffix}</span>
      </div>
      <p className="mt-2 text-[13px] font-medium text-ink-soft">{s.label}</p>
      <p className="mt-1 font-mono text-[10.5px] text-ink-faint">{s.mono}</p>
    </motion.div>
  )
}

export default function Stats() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.4 })
  return (
    <section className="relative mt-20 sm:mt-24">
      <div className="section">
        <div ref={ref} className="glass grid grid-cols-2 divide-x divide-y divide-line overflow-hidden rounded-2xl sm:grid-cols-4 sm:divide-y-0">
          {stats.map((s, i) => (
            <StatCell key={i} s={s} run={inView} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
