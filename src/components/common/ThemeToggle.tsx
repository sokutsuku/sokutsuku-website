'use client'

import { useTheme } from '@/components/ThemeProvider'
import { Button } from '@/components/ui/button'
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
          <span className="text-sm ui-en">LIGHT</span>
        </>
      ) : (
        <>
          <Moon className="w-4 h-4" />
          <span className="text-sm ui-en">DARK</span>
        </>
      )}
    </Button>
  )
}