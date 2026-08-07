import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  BadgePercent,
  HandCoins,
  Headset,
  ShieldCheck,
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { SectionHeading, FadeIn } from '@/components/ui/SectionHeading'
import { Counter } from '@/components/ui/Counter'
import { LeadForm } from '@/components/ui/LeadForm'
import { FAQ } from '@/components/ui/FAQ'
import { Testimonials } from '@/components/sections/Testimonials'
import { SiteImage } from '@/components/ui/SiteImage'
import { homeFaqs } from '@/data/faqs'
import { siteImages } from '@/data/images'

const values = [
  {
    icon: ShieldCheck,
    title: 'Trusted advice',
    text: 'We take the time to understand your home, needs, and budget before recommending the right solution.',
  },
  {
    icon: HandCoins,
    title: 'Transparent pricing',
    text: 'No hidden costs. No unexpected surprises. Just honest advice and clear pricing you can trust.',
  },
  {
    icon: BadgePercent,
    title: 'Rebate support',
    text: 'We’ll help you understand available government rebates and guide you through the process.',
  },
  {
    icon: Headset,
    title: 'Support beyond installation',
    text: 'From first consultation to ongoing support, we’re here whenever you need us.',
  },
]

const services = [
  {
    title: 'Air Conditioning',
    text: 'Stay comfortable all year with energy-efficient reverse cycle systems, chosen and installed for your home.',
    href: '/services/air-conditioning',
    image: siteImages.aircon.card,
  },
  {
    title: 'Hot Water Systems',
    text: 'Replace your old system with an energy-efficient heat pump. Reliable hot water, lower running costs.',
    href: '/services/hot-water',
    image: siteImages.hotWater.card,
  },
  {
    title: 'Solar Battery',
    text: 'Store more of your solar energy, lower bills, and take greater control of your home’s power.',
    href: '/services/solar-batteries',
    image: siteImages.solar.card,
  },
]

const reasons = [
  {
    title: 'Expert guidance',
    text: 'Every home is different. We recommend the most suitable option for your lifestyle and budget.',
  },
  {
    title: 'Quality you can trust',
    text: 'Trusted brands and proven installation methods so your system performs reliably for years.',
  },
  {
    title: 'Support beyond installation',
    text: 'From rebates to questions after install, our team is here whenever you need us.',
  },
]

export function HomePage() {
  return (
    <>
      <section className="relative isolate min-h-[100svh] overflow-hidden">
        <SiteImage
          src={siteImages.home.banner}
          alt="Safe Planet home energy upgrades"
          fit="banner"
          loading="eager"
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a2a28]/85 via-[#0a2a28]/55 to-[#0a2a28]/25" />
        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-4 pb-16 pt-28 sm:px-6 lg:justify-center lg:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl text-white"
          >
            <p className="mb-4 font-display text-sm font-semibold tracking-[0.2em] text-white/90 uppercase">
              Safe Planet
            </p>
            <h1 className="font-display text-4xl leading-[1.1] font-semibold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Energy-efficient air conditioning for year-round comfort
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
              Helping Melbourne & Victoria homeowners since 2016 upgrade to smarter cooling,
              heating, heat pump hot water, and solar batteries — with rebate guidance included.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact">
                <Button size="lg">
                  Book your assessment
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <a href="tel:0414501851">
                <Button
                  size="lg"
                  variant="secondary"
                  className="border-white/40 bg-white/15 text-white hover:bg-white/25"
                >
                  Call 0414 501 851
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Energy efficient home upgrades"
              title="Helping you make the right choice, not just the installation"
              description="Upgrading heating, cooling, or hot water is a big decision. We help you choose the best option, install it professionally, and support you every step of the way."
            />
            <div className="mt-8 grid grid-cols-2 gap-4">
              <FadeIn className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-border">
                <Counter to={1000} suffix="+" />
                <p className="mt-2 text-sm text-muted">Happy customers</p>
              </FadeIn>
              <FadeIn delay={0.08} className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-border">
                <Counter to={9} suffix="+" />
                <p className="mt-2 text-sm text-muted">Years of experience</p>
              </FadeIn>
            </div>
          </div>
          <FadeIn>
            <SiteImage
              src={siteImages.home.livingSection}
              alt="Bright, comfortable living room"
              fit="square"
              className="aspect-square rounded-[2rem] shadow-md ring-1 ring-border"
            />
          </FadeIn>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {values.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.05}>
              <div className="h-full rounded-3xl bg-white p-6 shadow-sm ring-1 ring-border">
                <item.icon className="mb-4 h-6 w-6 text-accent" />
                <h3 className="font-display text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Our services"
            title="Heating, cooling & hot water solutions for every home"
            description="Whether you’re replacing an old system or upgrading, we make it easy across Melbourne and Victoria."
            className="mb-12"
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {services.map((s, i) => (
              <FadeIn key={s.title} delay={i * 0.08}>
                <Link
                  to={s.href}
                  className="group block overflow-hidden rounded-[1.75rem] bg-bg shadow-sm ring-1 ring-border transition hover:-translate-y-1 hover:shadow-md"
                >
                  <SiteImage
                    src={s.image}
                    alt={s.title}
                    fit="square"
                    className="aspect-square"
                  />
                  <div className="p-6">
                    <h3 className="font-display text-2xl font-semibold">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{s.text}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent">
                      View service <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="Why homeowners choose Safe Planet"
            title="Trusted advice. Proven results."
            description="Since 2016, we’ve helped thousands of Victorian homeowners upgrade to energy-efficient solutions — easy, honest, and stress-free."
            className="mb-8"
          />
          <div className="space-y-4">
            {reasons.map((r, i) => (
              <FadeIn key={r.title} delay={i * 0.05}>
                <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-border">
                  <h3 className="font-display text-lg font-semibold">{r.title}</h3>
                  <p className="mt-1 text-sm text-muted">{r.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
        <FadeIn>
          <LeadForm sourcePage="home" />
        </FadeIn>
      </section>

      <FAQ items={homeFaqs} />
      <Testimonials />

      <section className="relative overflow-hidden border-t border-border">
        <SiteImage
          src={siteImages.home.ctaBackground}
          alt=""
          fit="banner"
          className="absolute inset-0 opacity-20"
        />
        <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-16 sm:px-6 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Ready to make a smarter energy decision?
            </h2>
            <p className="mt-3 max-w-xl text-muted">
              Explore your options, understand available rebates, and find the right solution
              for your home.
            </p>
          </div>
          <Link to="/contact">
            <Button size="lg">
              Book your services
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  )
}
