import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

export function Counter({
  to,
  suffix = '',
  prefix = '',
}: {
  to: number
  suffix?: string
  prefix?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    const start = performance.now()
    const duration = 1400
    let frame = 0
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - p, 3)
      setValue(Math.round(to * eased))
      if (p < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, to])

  return (
    <motion.span ref={ref} className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
      {prefix}
      {value}
      {suffix}
    </motion.span>
  )
}
