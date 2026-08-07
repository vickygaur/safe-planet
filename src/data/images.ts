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
  const clean = pathOrUrl.replace(/^\/+/, '')
  // Files live in public/images locally. After build they are in dist/images.
  // On AWS nginx, /images/* falls through to PHP (HTML). /dist/images/* works.
  if (import.meta.env.PROD && clean.startsWith('images/')) {
    return assetUrl(`dist/${clean}`)
  }
  return assetUrl(clean)
}

export const siteImages = {
  home: {
    /** Banner 1920×1080 */
    banner: path('HOME-PAGE-BANNER.webp'),
    /** Landscape 1600×1000 */
    livingSection: path('living3.webp'),
    /** Banner 1920×1080 */
    ctaBackground: path('contact-banner.jpeg'),
  },
  about: {
    /** Banner 1920×1080 */
    banner: path('about-banner.jpeg'),
    /** Square 1200×1200 */
    whatWeDo: path('living2.webp'),
    /** Landscape 1600×1000 */
    process: path('living.jpg'),
  },
  contact: {
    /** Banner 1920×1080 */
    banner: path('contact-banner.jpeg'),
    /** Landscape 1600×1000 */
    side: path('CONTACT.webp'),
  },
  aircon: {
    /** Square 1200×1200 — home card */
    card: path('Aircon.webp'),
    /** Banner 1920×1080 — detail hero */
    banner: path('AIRCON-BANNER-IMAGE.webp'),
    /** Square 1200×1200 — detail content */
    content: path('Aircon.webp'),
  },
  hotWater: {
    /** Square 1200×1200 */
    card: path('Heat-Pump.webp'),
    /** Banner 1920×1080 */
    banner: path('HEAT-PUMP-BANNER.webp'),
    /** Square 1200×1200 */
    content: path('Heat-Pump.webp'),
  },
  solar: {
    /** Square 1200×1200 */
    card: path('solar-battery.jpeg'),
    /** Banner 1920×1080 */
    banner: path('SOLAR-BATTERIES-BANNER.webp'),
    /** Square 1200×1200 */
    content: path('solar-battery.jpeg'),
  },
} as const
