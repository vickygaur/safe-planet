declare global {
  interface Window {
    __BASE_PATH__?: string
  }
}

/** App base path: `/safe-planet/` locally, `/` on domain root (AWS). */
export function getBasePath(): string {
  const fromWindow = typeof window !== 'undefined' ? window.__BASE_PATH__ : undefined
  if (fromWindow && fromWindow.length > 0) {
    return fromWindow.endsWith('/') ? fromWindow : `${fromWindow}/`
  }
  const fromVite = import.meta.env.BASE_URL || '/'
  return fromVite.endsWith('/') ? fromVite : `${fromVite}/`
}

/** React Router basename without trailing slash (empty string for root). */
export function getRouterBasename(): string {
  const base = getBasePath().replace(/\/+$/, '')
  return base === '' ? '/' : base
}

export function assetUrl(path: string): string {
  const clean = path.replace(/^\/+/, '')
  return `${getBasePath()}${clean}`
}
