import { useEffect, type ReactNode } from 'react'
import { createContext, useContext } from 'react'

type ThemeContextValue = {
  theme: 'light'
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

export function ThemeProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('sp-theme', 'light')
  }, [])

  return (
    <ThemeContext.Provider value={{ theme: 'light', toggleTheme: () => undefined }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}
