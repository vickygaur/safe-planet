import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useRef, type MouseEvent, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

/** 21st.dev-style spotlight / tilt card */
export function SpotlightCard({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const mx = useSpring(x, { stiffness: 200, damping: 28 })
  const my = useSpring(y, { stiffness: 200, damping: 28 })
  const background = useTransform(
    [mx, my],
    ([latestX, latestY]) =>
      `radial-gradient(500px circle at ${latestX}px ${latestY}px, var(--sp-glow), transparent 45%)`,
  )

  function onMove(e: MouseEvent) {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    x.set(e.clientX - rect.left)
    y.set(e.clientY - rect.top)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      whileHover={{ y: -4 }}
      className={cn(
        'group relative overflow-hidden rounded-[28px] border border-border bg-bg-elevated p-6',
        className,
      )}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background }}
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  )
}
