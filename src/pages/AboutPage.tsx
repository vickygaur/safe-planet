import { Link } from 'react-router-dom'
import { ArrowRight, BadgeCheck, Droplets, HeartHandshake, Shield, Snowflake, Wrench } from 'lucide-react'
import { FadeIn, SectionHeading } from '@/components/ui/SectionHeading'
import { Counter } from '@/components/ui/Counter'
import { FAQ } from '@/components/ui/FAQ'
import { Button } from '@/components/ui/Button'
import { Testimonials } from '@/components/sections/Testimonials'
import { aboutFaqs } from '@/data/faqs'
import { images } from '@/data/images'

const pillars = [
  {
    icon: HeartHandshake,
    title: 'Honest Advice',
    text: 'Every home is different, and so is every solution. We take the time to understand your home, your needs, and your budget before recommending the option that’s right for you.',
  },
  {
    icon: Wrench,
    title: 'Specialists in Home Upgrades',
    text: 'We focus on energy-efficient hot water systems and reverse cycle air conditioning, helping homeowners improve comfort, lower energy bills, and make smarter long-term investments.',
  },
  {
    icon: Shield,
    title: 'Licensed Professionals',
    text: 'Our qualified plumbers and electricians complete every installation to the highest standards, giving you confidence that the job is done safely and correctly.',
  },
  {
    icon: BadgeCheck,
    title: 'Support From Start to Finish',
    text: 'From your first enquiry to installation and ongoing support, we’re here to answer your questions and make your home upgrade as simple and stress-free as possible.',
  },
]

const steps = [
  {
    title: 'Get in Touch',
    text: 'Tell us about your home and what you’re looking to upgrade. Whether you’re replacing an old system or exploring your options, we’re here to help.',
  },
  {
    title: 'Receive Expert Advice',
    text: 'We’ll assess your needs and recommend the right heating and cooling or hot water solution for your home and lifestyle.',
  },
  {
    title: 'Confirm Your Upgrade',
    text: 'Once you’re happy with the recommendation, we’ll organize everything, including installation and guidance on any eligible rebates.',
  },
  {
    title: 'Professional Installation',
    text: 'Our licensed team will install your new system safely and professionally, making sure everything is working perfectly before we leave.',
  },
]

export function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate min-h-[62vh] overflow-hidden pt-24">
        <img
          src={images.team}
          alt="Safe Planet installation team"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a2a28]/85 via-[#0a2a28]/55 to-[#0a2a28]/25" />
        <div className="relative mx-auto flex min-h-[50vh] max-w-7xl flex-col justify-end px-4 pb-14 sm:px-6">
          <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-white/80 uppercase">
            About Us
          </p>
          <SectionHeading
            eyebrow="About Safe Planet"
            title="More than installers. We’re here to help you make the right choice."
            className="max-w-3xl [&_h2]:text-white [&_p:first-child]:text-white/75"
          />
          <div className="mt-8 grid max-w-md grid-cols-2 gap-4">
            <div className="rounded-2xl bg-white/15 p-4 backdrop-blur-md ring-1 ring-white/20">
              <Counter to={1000} suffix="+" />
              <p className="mt-1 text-sm text-white/85">Happy Customers</p>
            </div>
            <div className="rounded-2xl bg-white/15 p-4 backdrop-blur-md ring-1 ring-white/20">
              <Counter to={8} suffix="+" />
              <p className="mt-1 text-sm text-white/85">Years Of Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {pillars.map((p, i) => (
            <FadeIn key={p.title} delay={i * 0.06}>
              <div className="h-full rounded-3xl bg-white p-6 shadow-sm ring-1 ring-border">
                <p.icon className="mb-4 h-7 w-7 text-accent" />
                <h3 className="font-display text-xl font-semibold">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{p.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* What We Do */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="What We Do"
              title="Helping homeowners upgrade their homes with confidence"
              description="We specialise in heat pump installation and reverse cycle air conditioning installation, helping homeowners across Melbourne and Victoria make confident home upgrades. From honest advice and professional installation to ongoing support, we make every home upgrade simple, affordable, and designed for long-term comfort and savings."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/services/hot-water">
                <Button variant="secondary">
                  <Droplets className="h-4 w-4 text-accent" />
                  Heat Pump Hot Water
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/services/air-conditioning">
                <Button>
                  <Snowflake className="h-4 w-4" />
                  Air Conditioning
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
          <FadeIn>
            <div className="overflow-hidden rounded-[2rem] shadow-md ring-1 ring-border">
              <img
                src={images.airconInstall}
                alt="Professional home upgrade installation"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </FadeIn>
        </div>

        <div className="mx-auto mt-14 grid max-w-7xl grid-cols-2 gap-4 px-4 sm:px-6 md:grid-cols-4">
          {[
            { to: 8, suffix: '+', label: 'Years of Industry Experience' },
            { to: 500, suffix: '+', label: 'Heat Pump Installations' },
            { to: 800, suffix: '+', label: 'Air Conditioning Installations' },
            { to: 5, suffix: 'k+', label: 'Rebates Processed' },
          ].map((s, i) => (
            <FadeIn key={s.label} delay={i * 0.05}>
              <div className="rounded-3xl bg-bg p-5 ring-1 ring-border">
                <Counter to={s.to} suffix={s.suffix} />
                <p className="mt-2 text-sm text-muted">{s.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid items-end gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <SectionHeading
              eyebrow="Our Process"
              title="Your home upgrade journey"
              description="From your first enquiry to the final installation, we’ll guide you through every step. You’ll always know what to expect, with honest advice, clear communication, and support throughout the process."
            />
            <FadeIn>
              <img
                src={images.living}
                alt="Comfortable upgraded home"
                className="aspect-[16/10] w-full rounded-[1.75rem] object-cover shadow-sm ring-1 ring-border"
              />
            </FadeIn>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {steps.map((step, i) => (
              <FadeIn key={step.title} delay={i * 0.06}>
                <div className="h-full rounded-3xl bg-white p-6 shadow-sm ring-1 ring-border">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-accent/10 font-display text-sm font-semibold text-accent">
                    0{i + 1}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{step.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <div className="mt-10">
            <Link to="/contact">
              <Button size="lg">
                Get in Touch
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <FAQ items={aboutFaqs} />
      <Testimonials />
    </>
  )
}
