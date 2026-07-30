import { useState, type FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, Loader2 } from 'lucide-react'
import { PRODUCTS, submitLead } from '@/lib/utils'
import { Button } from './Button'

type Props = {
  defaultProduct?: string
  sourcePage?: string
  compact?: boolean
}

export function LeadForm({
  defaultProduct = 'Aircon',
  sourcePage = 'website',
  compact = false,
}: Props) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    product: defaultProduct,
    message: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  async function onSubmit(e: FormEvent) {
    e.preventDefault()
    setLoading(true)
    setErrors({})
    try {
      await submitLead({ ...form, source_page: sourcePage })
      setSuccess(true)
      setForm({ name: '', email: '', phone: '', product: defaultProduct, message: '' })
    } catch (err: unknown) {
      const data = err as { errors?: Record<string, string>; error?: string }
      if (data.errors) setErrors(data.errors)
      else setErrors({ form: data.error || 'Something went wrong. Please try again.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="glass relative overflow-hidden rounded-[28px] p-6 sm:p-8">
      <AnimatePresence mode="wait">
        {success ? (
          <motion.div
            key="ok"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center gap-3 py-10 text-center"
          >
            <CheckCircle2 className="h-12 w-12 text-accent" />
            <h3 className="font-display text-2xl font-semibold">Enquiry received</h3>
            <p className="max-w-sm text-muted">
              Thanks! Our team will be in touch shortly to help you find the right solution.
            </p>
            <Button type="button" variant="secondary" onClick={() => setSuccess(false)}>
              Send another enquiry
            </Button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onSubmit={onSubmit}
            className="grid gap-4"
          >
            <div>
              <h3 className="font-display text-2xl font-semibold tracking-tight">
                Get your free quote
              </h3>
              <p className="mt-1 text-sm text-muted">
                Tell us about your home and we&apos;ll guide you to the best fit.
              </p>
            </div>

            <label className="grid gap-1.5 text-sm">
              <span className="text-muted">Product</span>
              <select
                value={form.product}
                onChange={(e) => setForm((f) => ({ ...f, product: e.target.value }))}
                className="h-11 rounded-2xl border border-border-strong bg-bg-elevated px-4 text-text outline-none focus:border-accent"
              >
                {PRODUCTS.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
              {errors.product && <span className="text-xs text-red-500">{errors.product}</span>}
            </label>

            <div className={`grid gap-4 ${compact ? '' : 'sm:grid-cols-2'}`}>
              <label className="grid gap-1.5 text-sm">
                <span className="text-muted">Name</span>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  className="h-11 rounded-2xl border border-border-strong bg-bg-elevated px-4 outline-none focus:border-accent"
                />
                {errors.name && <span className="text-xs text-red-500">{errors.name}</span>}
              </label>
              <label className="grid gap-1.5 text-sm">
                <span className="text-muted">Phone</span>
                <input
                  required
                  value={form.phone}
                  onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                  className="h-11 rounded-2xl border border-border-strong bg-bg-elevated px-4 outline-none focus:border-accent"
                />
                {errors.phone && <span className="text-xs text-red-500">{errors.phone}</span>}
              </label>
            </div>

            <label className="grid gap-1.5 text-sm">
              <span className="text-muted">Email</span>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                className="h-11 rounded-2xl border border-border-strong bg-bg-elevated px-4 outline-none focus:border-accent"
              />
              {errors.email && <span className="text-xs text-red-500">{errors.email}</span>}
            </label>

            {!compact && (
              <label className="grid gap-1.5 text-sm">
                <span className="text-muted">Message (optional)</span>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  className="rounded-2xl border border-border-strong bg-bg-elevated px-4 py-3 outline-none focus:border-accent"
                />
              </label>
            )}

            {errors.form && <p className="text-sm text-red-500">{errors.form}</p>}

            <Button type="submit" size="lg" disabled={loading} className="w-full">
              {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
              {loading ? 'Sending…' : 'Book your assessment'}
            </Button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  )
}
