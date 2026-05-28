import { motion } from 'framer-motion'

const variants = {
  up: { hidden: { opacity: 0, y: 26 }, show: { opacity: 1, y: 0 } },
  down: { hidden: { opacity: 0, y: -26 }, show: { opacity: 1, y: 0 } },
  left: { hidden: { opacity: 0, x: 34 }, show: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: -34 }, show: { opacity: 1, x: 0 } },
  fade: { hidden: { opacity: 0 }, show: { opacity: 1 } },
  scale: { hidden: { opacity: 0, scale: 0.96 }, show: { opacity: 1, scale: 1 } },
}

export default function Reveal({
  children,
  as = 'div',
  dir = 'up',
  delay = 0,
  duration = 0.7,
  once = true,
  amount = 0.3,
  className = '',
  ...rest
}) {
  const MotionTag = motion[as] || motion.div
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      variants={variants[dir]}
      transition={{ duration, delay, ease: [0.21, 0.5, 0.2, 1] }}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}

// Staggered container helpers
export const stagger = (staggerChildren = 0.08, delayChildren = 0) => ({
  hidden: {},
  show: { transition: { staggerChildren, delayChildren } },
})

export const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.21, 0.5, 0.2, 1] } },
}
