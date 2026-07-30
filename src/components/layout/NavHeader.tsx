import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'
import { cn } from '@/lib/utils'

const links = [
  { label: 'About Us', href: '/about' },
  { label: 'Air Conditioning', href: '/services/air-conditioning' },
  { label: 'Hot Water', href: '/services/hot-water' },
  { label: 'Solar Batteries', href: '/services/solar-batteries' },
  { label: 'Contact Us', href: '/contact' },
]

export function NavHeader() {
  const location = useLocation()
  const [hovered, setHovered] = useState<string | null>(null)
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const refs = useRef<Record<string, HTMLAnchorElement | null>>({})
  const [pos, setPos] = useState({ left: 0, width: 0, opacity: 0 })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const key = hovered ?? links.find((l) => location.pathname.startsWith(l.href))?.href
    if (!key || !refs.current[key]) {
      setPos((p) => ({ ...p, opacity: 0 }))
      return
    }
    const el = refs.current[key]!
    setPos({ left: el.offsetLeft, width: el.offsetWidth, opacity: 1 })
  }, [hovered, location.pathname])

  const onHero = location.pathname === '/' && !scrolled

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled || !onHero
          ? 'border-b border-border bg-white/90 py-3 shadow-sm backdrop-blur-xl'
          : 'py-5',
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link to="/" className="group flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent font-display text-sm font-bold text-white">
            SP
          </span>
          <span
            className={cn(
              'font-display text-lg font-semibold tracking-tight',
              onHero ? 'text-white' : 'text-text',
            )}
          >
            Safe Planet
          </span>
        </Link>

        <nav
          className={cn(
            'relative hidden items-center rounded-full px-1 py-1 lg:flex',
            onHero
              ? 'border border-white/25 bg-white/15 backdrop-blur-md'
              : 'border border-border bg-white',
          )}
          onMouseLeave={() => setHovered(null)}
        >
          <motion.span
            className={cn(
              'absolute top-1 bottom-1 rounded-full',
              onHero ? 'bg-white' : 'bg-accent',
            )}
            animate={pos}
            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
          />
          {links.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              ref={(el) => {
                refs.current[link.href] = el
              }}
              onMouseEnter={() => setHovered(link.href)}
              className={cn(
                'relative z-10 px-3.5 py-2 text-sm font-medium transition-colors',
                onHero
                  ? 'text-white mix-blend-difference'
                  : hovered === link.href || location.pathname.startsWith(link.href)
                    ? 'text-white'
                    : 'text-text',
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="tel:0414501851"
            className={cn(
              'hidden items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold sm:inline-flex',
              onHero
                ? 'border border-white/30 bg-white/15 text-white backdrop-blur'
                : 'border border-border bg-white text-text',
            )}
          >
            <Phone className="h-3.5 w-3.5 text-accent" />
            0414 501 851
          </a>
          <Link
            to="/contact"
            className="hidden rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white shadow-md md:inline-flex"
          >
            Book Assessment
          </Link>
          <button
            type="button"
            className={cn(
              'inline-flex h-10 w-10 items-center justify-center rounded-full border lg:hidden',
              onHero
                ? 'border-white/30 bg-white/15 text-white'
                : 'border-border bg-white text-text',
            )}
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-4 mt-3 rounded-3xl border border-border bg-white p-4 shadow-xl lg:hidden"
        >
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-text hover:bg-surface-2"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-2 rounded-full bg-accent px-4 py-3 text-center text-sm font-semibold text-white"
            >
              Book Assessment
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  )
}
