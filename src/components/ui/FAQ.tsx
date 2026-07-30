import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import { SectionHeading } from './SectionHeading'

type Item = { q: string; a: string }

export function FAQ({ items }: { items: Item[] }) {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <SectionHeading
        eyebrow="FAQ"
        title="Frequently asked questions"
        description="Clear answers to help you upgrade with confidence."
        className="mb-10"
      />
      <div className="mx-auto max-w-3xl divide-y divide-border rounded-[28px] border border-border bg-bg-elevated">
        {items.map((item, i) => {
          const isOpen = open === i
          return (
            <div key={item.q} className="px-5 sm:px-6">
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 py-5 text-left"
                onClick={() => setOpen(isOpen ? null : i)}
              >
                <span className="font-display text-base font-semibold sm:text-lg">{item.q}</span>
                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-border"
                >
                  <Plus className="h-4 w-4" />
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-5 text-sm leading-relaxed text-muted sm:text-base">{item.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>
    </section>
  )
}
