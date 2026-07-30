import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const PRODUCTS = [
  'Aircon',
  'Hot Water Heat Pump',
  'Solar Batteries',
] as const

export type Product = (typeof PRODUCTS)[number]

export async function submitLead(payload: {
  name: string
  email: string
  phone: string
  product: string
  message?: string
  source_page?: string
}) {
  const res = await fetch(`${import.meta.env.BASE_URL}api/lead.php`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
  const data = await res.json()
  if (!res.ok || !data.success) {
    throw data
  }
  return data
}
