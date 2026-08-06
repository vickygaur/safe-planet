import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { SectionHeading, FadeIn } from '@/components/ui/SectionHeading'
import { LeadForm } from '@/components/ui/LeadForm'
import { SiteImage } from '@/components/ui/SiteImage'
import { siteImages } from '@/data/images'

const MAP_EMBED =
  'https://maps.google.com/maps?q=262%20Mandalay%20Circuit%2C%20Beveridge%20VIC%203753&t=&z=14&ie=UTF8&iwloc=&output=embed'

const FACILITY_MAP =
  'https://maps.google.com/maps?q=12%20Optic%20Way%2C%20Carrum%20Downs%20VIC%203201&t=&z=14&ie=UTF8&iwloc=&output=embed'

export function ContactPage() {
  return (
    <>
      <section className="relative isolate min-h-[70vh] overflow-hidden pt-24 sm:min-h-[75vh]">
        <SiteImage
          src={siteImages.contact.banner}
          alt="Contact Safe Planet"
          fit="banner"
          loading="eager"
          className="absolute inset-0"
          imgClassName="object-[center_25%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a2a28]/85 via-[#0a2a28]/50 to-[#0a2a28]/20" />
        <div className="relative mx-auto flex min-h-[56vh] max-w-7xl flex-col justify-end px-4 pb-14 pt-10 sm:px-6 sm:min-h-[60vh]">
          <SectionHeading
            eyebrow="Contact our experts"
            title="Let’s find the right energy solution for your home"
            description="Whether you’re ready to upgrade or just have questions, we’ll explain your options and help with available rebates."
            className="max-w-3xl [&_h2]:text-white [&_p]:text-white/85 [&_p:first-child]:text-white/75"
          />
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-4">
          <FadeIn>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-border">
              <h3 className="font-display text-xl font-semibold">Speak with a local specialist</h3>
              <p className="mt-2 text-sm text-muted">
                No pressure. Just honest advice you can trust across Victoria.
              </p>
              <ul className="mt-6 space-y-4 text-sm text-muted">
                <li className="flex gap-3">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <a href="tel:0414501851" className="hover:text-text">
                    0414 501 851
                  </a>
                </li>
                <li className="flex gap-3">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <a href="mailto:connect@safeplanet.net.au" className="hover:text-text">
                    connect@safeplanet.net.au
                  </a>
                </li>
                <li className="flex gap-3">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span>Mon–Fri 8:00am – 5:30pm · Sat by appointment</span>
                </li>
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span>
                    Head Office: 262 Mandalay Circuit, Beveridge VIC 3753
                    <br />
                    Facility: 12 Optic Way, Carrum Downs VIC 3201
                  </span>
                </li>
              </ul>
            </div>
          </FadeIn>
          <FadeIn delay={0.08}>
            <SiteImage
              src={siteImages.contact.side}
              alt="Safe Planet service coverage"
              fit="landscape"
              className="aspect-[16/10] rounded-3xl shadow-sm ring-1 ring-border"
            />
          </FadeIn>
        </div>
        <FadeIn delay={0.05}>
          <LeadForm sourcePage="contact" />
        </FadeIn>
      </section>

      {/* Maps */}
      <section className="border-t border-border bg-white py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Our presence"
            title="Serving homeowners across Victoria"
            description="Visit us or get in touch — we’re ready to help with air conditioning, heat pump hot water, and solar battery upgrades."
            className="mb-10"
          />
          <div className="grid gap-6 lg:grid-cols-2">
            <FadeIn>
              <div className="overflow-hidden rounded-[1.75rem] bg-bg shadow-sm ring-1 ring-border">
                <div className="border-b border-border px-5 py-4">
                  <h3 className="font-display text-lg font-semibold">Head Office</h3>
                  <p className="mt-1 text-sm text-muted">
                    262 Mandalay Circuit, Beveridge, Victoria 3753
                  </p>
                </div>
                <iframe
                  title="Safe Planet Head Office map"
                  src={MAP_EMBED}
                  className="h-72 w-full border-0 sm:h-80"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.08}>
              <div className="overflow-hidden rounded-[1.75rem] bg-bg shadow-sm ring-1 ring-border">
                <div className="border-b border-border px-5 py-4">
                  <h3 className="font-display text-lg font-semibold">Facility</h3>
                  <p className="mt-1 text-sm text-muted">
                    12 Optic Way, Carrum Downs, Victoria 3201
                  </p>
                </div>
                <iframe
                  title="Safe Planet Facility map"
                  src={FACILITY_MAP}
                  className="h-72 w-full border-0 sm:h-80"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  )
}
