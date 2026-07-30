import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { NavHeader } from '@/components/layout/NavHeader'
import { Footer } from '@/components/layout/Footer'

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) return
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
  }, [pathname, hash])
  return null
}

export function Layout() {
  return (
    <div className="min-h-screen bg-bg text-text">
      <ScrollToTop />
      <NavHeader />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
