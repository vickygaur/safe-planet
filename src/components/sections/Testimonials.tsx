import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star, User } from 'lucide-react'
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
  {
    name: 'John Abela',
    place: 'Victoria',
    quote:
      'It was a complicated installation of the new central heating, tradies overcame all problems, unit and installation are all going very well.',
  },
  {
    name: 'Sam',
    place: 'Victoria',
    quote:
      'We contacted Safe Planet via Facebook after trying several other companies. What an amazing company to deal with. I had Matt come to the property to assess I was eligible for the rebate and he worked out the correct layout and sizing for 5 split systems to be installed. Literally could not be happier with the dealings from start to finish. Kudos Safe Planet. I will be recommending you without a doubt!',
  },
  {
    name: 'Ranjith Gamage',
    place: 'Victoria',
    quote:
      'We recently had a new ducted heating and cooling system installed by Safe Planet, and they did a fantastic job. The support, efficiency, and workmanship of the Safe Planet team, led by Matt and Michael, were outstanding. Matt and Michael were incredibly helpful, professional, and always approachable, taking the time to answer all of our questions throughout the installation. I have no hesitation in recommending the Safe Planet team to anyone looking to install a heating and cooling system. We are extremely happy with the quality of their work and the excellent customer service they provided.',
  },
  {
    name: 'Bobby B',
    place: 'Victoria',
    quote:
      'I had many quotes to upgrade my gas ducted heating and hot water system to electric and decided to go with Safe Planet as they came out on site and discussed our options and gave us a solution to meet our budget and needs. From start to finish they were very professional, knowledgeable and you could see the installers dedication to workmanship. I have recommended my family and friends and happy to use them for future upgrades.',
  },
  {
    name: 'Linda Hill',
    place: 'Victoria',
    quote:
      'Rachel is amazing, very patient, warm and listens to what you want or need. The whole team of Safe Planet have been great. I will recommend Safe Planet to all my friends. 5 stars amazing....',
  },
  {
    name: 'Manjot Sandhu',
    place: 'Victoria',
    quote:
      'Got new Electric heating and cooling system and got off the old gas ducted heating system, Sam did a great job.',
  },
  {
    name: 'Sahariar Kathon Kat',
    place: 'Victoria',
    quote:
      'Really happy with our new aircon install. The guys were on time, explained everything clearly, and helped us get the VEU rebate sorted which knocked a good bit off the price. Clean job, no mess left behind, and the unit\'s been running great since. Would recommend them with my eyes closed.',
  },
  {
    name: 'Neal Guo',
    place: 'Victoria',
    quote:
      'Thank you for the AC installation. I\'d like to thank the team — Riben, Jay and Anita? — for their hard work, and I especially appreciate Riben and Michael coming back on the second day to carry out the pressure and micron testing. Thank you again for your service and for the team\'s efforts.',
  },
]

const GAP_PX = 20

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

function usePerView() {
  const [perView, setPerView] = useState(1)

  useEffect(() => {
    const update = () => {
      if (window.matchMedia('(min-width: 1024px)').matches) setPerView(3)
      else if (window.matchMedia('(min-width: 640px)').matches) setPerView(2)
      else setPerView(1)
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  return perView
}

function TestimonialCard({
  name,
  place,
  quote,
}: {
  name: string
  place: string
  quote: string
}) {
  return (
    <article className="flex h-full min-h-[280px] flex-col rounded-3xl bg-white p-6 shadow-sm ring-1 ring-border sm:p-7">
      <header className="mb-5 flex items-center gap-3">
        <div
          aria-hidden
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sky text-accent ring-2 ring-sky"
        >
          <User className="h-5 w-5" strokeWidth={2} />
        </div>
        <div>
          <p className="font-sans text-sm font-semibold text-text">{name}</p>
          <p className="text-xs text-muted">{place}</p>
        </div>
      </header>
      <p className="flex-1 text-sm leading-relaxed text-muted line-clamp-8">&ldquo;{quote}&rdquo;</p>
      <div className="mt-6">
        <Stars size="sm" />
      </div>
    </article>
  )
}

export function Testimonials() {
  const perView = usePerView()
  const maxIndex = Math.max(0, testimonials.length - perView)
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [slideWidth, setSlideWidth] = useState(0)
  const viewportRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = viewportRef.current
    if (!el) return

    const measure = () => {
      const w = el.clientWidth
      setSlideWidth((w - GAP_PX * (perView - 1)) / perView)
    }

    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(el)
    return () => ro.disconnect()
  }, [perView])

  useEffect(() => {
    setIndex((i) => Math.min(i, maxIndex))
  }, [maxIndex])

  useEffect(() => {
    if (paused || maxIndex === 0) return
    const id = window.setInterval(() => {
      setIndex((i) => (i >= maxIndex ? 0 : i + 1))
    }, 4500)
    return () => window.clearInterval(id)
  }, [paused, maxIndex])

  const go = (next: number) => {
    if (maxIndex === 0) return
    if (next < 0) setIndex(maxIndex)
    else if (next > maxIndex) setIndex(0)
    else setIndex(next)
  }

  const offset = slideWidth > 0 ? index * (slideWidth + GAP_PX) : 0

  return (
    <section className="relative overflow-hidden bg-sky/40 py-20 sm:py-24">
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

        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget as Node)) setPaused(false)
          }}
        >
          <div ref={viewportRef} className="overflow-hidden">
            <motion.div
              className="flex"
              style={{ gap: GAP_PX }}
              animate={{ x: -offset }}
              transition={{ type: 'spring', stiffness: 120, damping: 22, mass: 0.85 }}
            >
              {testimonials.map((t, i) => (
                <div
                  key={`${t.name}-${i}`}
                  className="shrink-0"
                  style={{ width: slideWidth || undefined, flexBasis: slideWidth || undefined }}
                >
                  <TestimonialCard {...t} />
                </div>
              ))}
            </motion.div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              aria-label="Previous review"
              onClick={() => go(index - 1)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-text shadow-sm transition hover:border-accent hover:text-accent"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex max-w-[min(100%,18rem)] flex-wrap items-center justify-center gap-2">
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to review ${i + 1}`}
                  aria-current={i === index ? 'true' : undefined}
                  onClick={() => go(i)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    i === index ? 'w-7 bg-accent' : 'w-2.5 bg-accent/25 hover:bg-accent/50'
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              aria-label="Next review"
              onClick={() => go(index + 1)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-text shadow-sm transition hover:border-accent hover:text-accent"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
