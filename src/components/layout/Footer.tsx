import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone, ArrowRight } from 'lucide-react'
import { Logo } from '@/components/ui/Logo'

export function Footer() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  function onNewsletter(e: FormEvent) {
    e.preventDefault()
    if (!email.trim()) return
    setDone(true)
    setEmail('')
  }

  return (
    <footer className="relative overflow-hidden border-t border-border bg-[#0a2a28] text-white">
      <div className="pointer-events-none absolute -top-24 right-0 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-48 w-48 rounded-full bg-sky/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 pt-16 pb-8 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
          <div>
            <Link to="/" className="mb-4 inline-block">
              <Logo className="h-12 sm:h-14" />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
              Helping Victorian homeowners create more comfortable, energy-efficient homes
              through trusted advice, quality installations, and long-term support.
            </p>
            <a
              href="tel:0414501851"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/15 transition hover:bg-white/15"
            >
              <Phone className="h-4 w-4 text-accent-2" />
              0414 501 851
            </a>
          </div>

          <div>
            <h3 className="mb-4 font-display text-sm font-semibold tracking-[0.14em] text-accent-2 uppercase">
              Services
            </h3>
            <div className="flex flex-col gap-2.5 text-sm text-white/70">
              <Link to="/services/air-conditioning" className="hover:text-white">
                Air Conditioning
              </Link>
              <Link to="/services/hot-water" className="hover:text-white">
                Hot Water Heat Pump
              </Link>
              <Link to="/services/solar-batteries" className="hover:text-white">
                Solar Batteries
              </Link>
              <Link to="/about" className="hover:text-white">
                About Us
              </Link>
              <Link to="/contact" className="hover:text-white">
                Contact Us
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-display text-sm font-semibold tracking-[0.14em] text-accent-2 uppercase">
              Let&apos;s Connect
            </h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-2" />
                <span>
                  262 Mandalay Circuit
                  <br />
                  Beveridge VIC 3753
                </span>
              </li>
              <li className="flex gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-2" />
                <span>
                  12 Optic Way
                  <br />
                  Carrum Downs VIC 3201
                </span>
              </li>
              <li className="flex gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent-2" />
                <a href="mailto:connect@safeplanet.net.au" className="hover:text-white">
                  connect@safeplanet.net.au
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-display text-sm font-semibold tracking-[0.14em] text-accent-2 uppercase">
              Newsletter
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-white/70">
              Get practical tips on reducing energy costs, improving home comfort, and
              understanding rebates.
            </p>
            {done ? (
              <p className="rounded-2xl bg-white/10 px-4 py-3 text-sm text-accent-2 ring-1 ring-white/10">
                Thanks — you’re on the list.
              </p>
            ) : (
              <form onSubmit={onNewsletter} className="flex flex-col gap-2 sm:flex-row">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="h-11 flex-1 rounded-full border-0 bg-white/10 px-4 text-sm text-white outline-none ring-1 ring-white/15 placeholder:text-white/45 focus:ring-accent-2"
                />
                <button
                  type="submit"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-accent px-5 text-sm font-semibold text-white transition hover:brightness-110"
                >
                  Join <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            )}
            <p className="mt-3 text-xs text-white/45">No spam. Just helpful updates.</p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/45 sm:flex-row sm:items-center">
          <p>{new Date().getFullYear()} © Safe Planet. All rights reserved.</p>
          <div className="flex gap-4">
            <span>Privacy Policy</span>
            <span>Terms & Conditions</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
