'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { ThemeMode, applyTheme } from '@/lib/theme'

interface ThemeContextType {
  theme: ThemeMode
  setTheme: (mode: ThemeMode) => void
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

interface ThemeProviderProps {
  children: React.ReactNode
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<ThemeMode>('dark')

  useEffect(() => {
    // localStorageから設定を読み込み
    const savedTheme = localStorage.getItem('theme-mode') as ThemeMode | null
    if (savedTheme) {
      setTheme(savedTheme)
      applyTheme(savedTheme)
    } else {
      // デフォルトテーマを適用
      applyTheme('dark')
    }
  }, [])

  const handleSetTheme = (mode: ThemeMode) => {
    setTheme(mode)
    applyTheme(mode)
    localStorage.setItem('theme-mode', mode)
  }

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    handleSetTheme(newTheme)
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme: handleSetTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}