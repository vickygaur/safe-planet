import { assetUrl } from '@/lib/basePath'

/**
 * ============================================================
 * SAFE PLANET — IMAGE SETTINGS
 * ============================================================
 *
 * Put files in: public/images/
 * Use filename only (example: 'home-banner.jpeg')
 * Then run: npm run build
 *
 * RECOMMENDED UPLOAD SIZES (so images fill boxes with no crop):
 *
 * ┌─────────────────────────────┬──────────────┬────────────┐
 * │ Where                       │ Shape        │ Size (px)  │
 * ├─────────────────────────────┼──────────────┼────────────┤
 * │ Page banners (hero)         │ Landscape    │ 1920×1080  │
 * │ Home service cards          │ Square 1:1   │ 1200×1200  │
 * │ Service detail content img  │ Square 1:1   │ 1200×1200  │
 * │ About “What We Do”          │ Square 1:1   │ 1200×1200  │
 * │ Home living / About process │ Landscape    │ 1600×1000  │
 * │ Contact side image          │ Landscape    │ 1600×1000  │
 * └─────────────────────────────┴──────────────┴────────────┘
 *
 * Tip: export JPG/WebP, quality ~80–85.
 * If image shape matches the box, nothing gets cut.
 * ============================================================
 */

function path(filename: string) {
  return `images/${filename}`
}

export function resolveImage(pathOrUrl: string) {
  if (pathOrUrl.startsWith('http://') || pathOrUrl.startsWith('https://')) {
    return pathOrUrl
  }
  return assetUrl(pathOrUrl)
}

export const siteImages = {
  home: {
    /** Banner 1920×1080 */
    banner: path('home-banner.jpeg'),
    /** Landscape 1600×1000 */
    livingSection: path('living.jpg'),
    /** Banner 1920×1080 */
    ctaBackground: path('contact-banner.jpeg'),
  },
  about: {
    /** Banner 1920×1080 */
    banner: path('about-banner.jpeg'),
    /** Square 1200×1200 */
    whatWeDo: path('what-we-do.jpeg'),
    /** Landscape 1600×1000 */
    process: path('living.jpg'),
  },
  contact: {
    /** Banner 1920×1080 */
    banner: path('contact-banner.jpeg'),
    /** Landscape 1600×1000 */
    side: path('living.jpg'),
  },
  aircon: {
    /** Square 1200×1200 — home card */
    card: path('AC.jpeg'),
    /** Banner 1920×1080 — detail hero */
    banner: path('air-condition-banner.jpeg'),
    /** Square 1200×1200 — detail content */
    content: path('AC.jpeg'),
  },
  hotWater: {
    /** Square 1200×1200 */
    card: path('hot-water.jpeg'),
    /** Banner 1920×1080 */
    banner: path('hot-water-banner.jpeg'),
    /** Square 1200×1200 */
    content: path('hot-water.jpeg'),
  },
  solar: {
    /** Square 1200×1200 */
    card: path('solar-battery.jpeg'),
    /** Banner 1920×1080 */
    banner: path('solar-battery-banner.jpeg'),
    /** Square 1200×1200 */
    content: path('solar-battery.jpeg'),
  },
} as const

export const avatars = {
  sarah: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
  james: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
  priya: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80',
} as const
