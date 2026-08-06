import { Link } from 'react-router-dom'
import { SectionHeading, FadeIn } from '@/components/ui/SectionHeading'
import { LeadForm } from '@/components/ui/LeadForm'
import { FAQ } from '@/components/ui/FAQ'
import { Button } from '@/components/ui/Button'
import { SiteImage } from '@/components/ui/SiteImage'
import { ArrowRight } from 'lucide-react'

type Props = {
  eyebrow: string
  title: string
  intro: string
  paragraphs: string[]
  faqs: { q: string; a: string }[]
  product: string
  ctaTitle: string
  ctaText: string
  heroImage: string
  sideImage: string
}

export function ServicePage({
  eyebrow,
  title,
  intro,
  paragraphs,
  faqs,
  product,
  ctaTitle,
  ctaText,
  heroImage,
  sideImage,
}: Props) {
  return (
    <>
      <section className="relative isolate min-h-[58vh] overflow-hidden pt-24">
        <SiteImage
          src={heroImage}
          alt={eyebrow}
          fit="banner"
          loading="eager"
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a2a28]/82 to-[#0a2a28]/30" />
        <div className="relative mx-auto flex min-h-[46vh] max-w-7xl flex-col justify-end gap-6 px-4 pb-14 sm:px-6">
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            description={intro}
            className="max-w-3xl [&_h2]:text-white [&_p]:text-white/85 [&_p:first-child]:text-white/75"
          />
          <div>
            <Link to="/contact">
              <Button>
                Get a free quote <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid items-start gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <FadeIn>
              <SiteImage
                src={sideImage}
                alt={eyebrow}
                fit="square"
                className="aspect-square rounded-[2rem] shadow-md ring-1 ring-border"
              />
            </FadeIn>
            {paragraphs.map((p, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <p className="text-base leading-relaxed text-muted sm:text-lg">{p}</p>
              </FadeIn>
            ))}
          </div>
          <aside className="lg:sticky lg:top-28">
            <FadeIn>
              <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-accent uppercase">
                Get in Touch
              </p>
              <h2 className="font-display mb-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                {ctaTitle}
              </h2>
              <p className="mb-6 text-sm leading-relaxed text-muted">{ctaText}</p>
              <LeadForm defaultProduct={product} sourcePage={eyebrow} />
            </FadeIn>
          </aside>
        </div>
      </section>

      <FAQ items={faqs} />
    </>
  )
}
