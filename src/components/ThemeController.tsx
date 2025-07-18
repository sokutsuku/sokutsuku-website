'use client'

import { useTheme } from './ThemeProvider'
import { Button } from './ui/button'
import { Sun, Moon } from 'lucide-react'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleTheme}
      className="flex items-center gap-2"
    >
      {theme === 'dark' ? (
        <>
          <Sun className="w-4 h-4" />
          <span className="text-sm">ライトモード</span>
        </>
      ) : (
        <>
          <Moon className="w-4 h-4" />
          <span className="text-sm">ダークモード</span>
        </>
      )}
    </Button>
  )
}