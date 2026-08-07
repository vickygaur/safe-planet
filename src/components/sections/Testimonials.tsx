import { motion } from 'framer-motion'
import { Star, User } from 'lucide-react'
import { FadeIn } from '@/components/ui/SectionHeading'

const testimonials = [
  {
    name: 'Matthew Jayopen',
    place: 'Victoria',
    quote:
      'I Recently had my Gas ducted heater upgraded to energy efficient split systems throughout the home. Could not be more pleased from the process from start to finish. A big thank you to the whole team and would certainly recommend.',
  },
  {
    name: 'Bob Farmer',
    place: 'Victoria',
    quote:
      'Had the team from Safe Planet remove my old heating system and replace it with a heating/cooling system. Done in a day, minor complications but nothing phased the guys and all sorted. Since installing the system it has been a delight, no issues, easy to use and keeps the home cosy warm. Can\'t beat this service, recommended to all our friends.',
  },
  {
    name: 'Sukham Kaur',
    place: 'Victoria',
    quote:
      'Had our old gas ducted heating system replaced with a new Midea system by the Safe Planet team. They did a fantastic job from start to finish. The installation was smooth, professional, and we\'re very happy with the outcome. Highly recommend!',
  },
]

function Stars({ size = 'md' }: { size?: 'sm' | 'md' }) {
  const cls = size === 'sm' ? 'h-3.5 w-3.5' : 'h-5 w-5'
  return (
    <div className="flex items-center gap-0.5 text-amber-400">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`${cls} fill-current`} />
      ))}
    </div>
  )
}

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-sky/40 py-20 sm:py-24">
      {/* Watermark */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 select-none overflow-hidden text-center"
      >
        <span className="font-sans text-[14vw] leading-none font-bold tracking-tight whitespace-nowrap text-accent/[0.06]">
          SAFE PLANET
        </span>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-10 grid items-end gap-8 lg:grid-cols-[1fr_auto] lg:gap-12">
          <FadeIn>
            <p className="mb-4 font-sans text-xs font-semibold tracking-[0.22em] text-accent uppercase">
              // Real customer experiences
            </p>
            <div className="mb-6 flex flex-wrap items-end gap-4">
              <span className="font-sans text-5xl font-bold tracking-tight text-text sm:text-6xl">
                4.9
              </span>
              <div className="pb-1">
                <Stars />
                <p className="mt-1 text-xs font-medium tracking-wide text-muted uppercase">
                  ( 55+ reviews )
                </p>
              </div>
            </div>
            <h2 className="max-w-xl font-sans text-3xl font-bold tracking-tight text-text uppercase sm:text-4xl md:text-5xl">
              Trusted by homeowners{' '}
              <span className="font-display text-[1.05em] font-semibold normal-case italic text-accent">
                across Victoria.
              </span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.1} className="max-w-xs lg:pb-2 lg:text-right">
            <p className="text-sm leading-relaxed text-muted">
              Enhancing Victorian homes with clean, efficient energy solutions since 2016.
            </p>
          </FadeIn>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.08}>
              <motion.article
                whileHover={{ y: -4 }}
                className="flex h-full flex-col rounded-3xl bg-white p-6 shadow-sm ring-1 ring-border sm:p-7"
              >
                <header className="mb-5 flex items-center gap-3">
                  <div
                    aria-hidden
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sky text-accent ring-2 ring-sky"
                  >
                    <User className="h-5 w-5" strokeWidth={2} />
                  </div>
                  <div>
                    <p className="font-sans text-sm font-semibold text-text">{t.name}</p>
                    <p className="text-xs text-muted">{t.place}</p>
                  </div>
                </header>
                <p className="flex-1 text-sm leading-relaxed text-muted">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-6">
                  <Stars size="sm" />
                </div>
              </motion.article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
