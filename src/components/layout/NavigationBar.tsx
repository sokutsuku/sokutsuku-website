'use client'

import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/common/ThemeToggle'
import { MobileMenuButton } from '@/components/layout/MobileMenuButton'
import { MobileMenu } from '@/components/layout/MobileMenu'
import { AnimatedLink } from '@/components/common/AnimatedLink'
import { useTheme } from '@/components/ThemeProvider'
import { useEffect, useState } from 'react'

interface NavigationBarProps {
  onContactClick?: () => void
}

export function NavigationBar({ onContactClick }: NavigationBarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // テーマ別のスタイル定義
  const getNavStyles = () => {
    if (!isScrolled) return 'bg-transparent backdrop-blur-sm'
    
    return theme === 'dark' 
      ? 'bg-[#052e16]/70 backdrop-blur-md border border-white/10' 
      : 'bg-white/90 backdrop-blur-md border border-black/10 shadow-lg'
  }

  const getTextStyles = () => {
    if (!isScrolled) {
      return theme === 'dark' 
        ? 'text-white hover:text-[#14532d] transition-colors' 
        : 'text-foreground hover:text-[#14532d] transition-colors'
    }
    
    return theme === 'dark' 
      ? 'text-white hover:text-[#14532d] transition-colors' 
      : 'text-foreground hover:text-[#14532d] transition-colors'
  }

  const getTextSecondaryStyles = () => {
    if (!isScrolled) {
      return theme === 'dark' 
        ? 'text-white/90 hover:text-[#14532d] font-bold relative after:content-[""] after:absolute after:-bottom-2 after:-left-2 after:-right-2 after:h-0.5 after:bg-[#14532d] after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-300 after:ease-out after:rounded-full' 
        : 'text-muted-foreground hover:text-[#14532d] font-bold relative after:content-[""] after:absolute after:-bottom-2 after:-left-2 after:-right-2 after:h-0.5 after:bg-[#14532d] after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-300 after:ease-out after:rounded-full'
    }
    
    return theme === 'dark' 
      ? 'text-white/90 hover:text-[#14532d] font-bold relative after:content-[""] after:absolute after:-bottom-2 after:-left-2 after:-right-2 after:h-0.5 after:bg-[#14532d] after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-300 after:ease-out after:rounded-full' 
      : 'text-muted-foreground hover:text-[#14532d] font-bold relative after:content-[""] after:absolute after:-bottom-2 after:-left-2 after:-right-2 after:h-0.5 after:bg-[#14532d] after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-300 after:ease-out after:rounded-full'
  }

  const getButtonStyles = () => {
    if (!isScrolled) {
      return theme === 'dark' 
        ? 'bg-white/10 text-white border-white/20 hover:bg-white/20'
        : 'bg-primary/10 text-primary border-primary/20 hover:bg-primary/20'
    }
    
    return theme === 'dark' 
      ? 'bg-white/10 text-white border-white/20 hover:bg-white/20'
      : 'bg-primary/10 text-primary border-primary/20 hover:bg-primary/20'
  }

  return (
    <>
      <nav className={`
        fixed top-2 md:top-4 left-1/2 transform -translate-x-1/2 z-[120] 
        w-[95vw] md:w-[90vw] lg:w-[85vw] max-w-6xl
        transition-all duration-300 ease-in-out
        rounded-full
        ${getNavStyles()}
      `}>
        <div className="px-4 md:px-6 py-4">
          <div className="flex items-center justify-between">
            {/* ロゴ */}
            <AnimatedLink href="/" className={`text-xl md:text-xl font-bold transition-colors ${getTextStyles()}`}>
              <span className="text-en tracking-wider">SOKUTSUKU</span>
            </AnimatedLink>

            {/* ナビゲーションメニュー（デスクトップ） */}
            <div className="hidden lg:flex items-center space-x-8 xl:space-x-12">
              <AnimatedLink href="/services" className={`text-sm transition-colors ui-en ${getTextSecondaryStyles()}`}>
                SERVICES
              </AnimatedLink>
              <AnimatedLink href="/works" className={`text-sm transition-colors ui-en ${getTextSecondaryStyles()}`}>
                WORKS
              </AnimatedLink>
              <AnimatedLink href="/about" className={`text-sm transition-colors ui-en ${getTextSecondaryStyles()}`}>
                ABOUT
              </AnimatedLink>
              <AnimatedLink href="/faq" className={`text-sm transition-colors ui-en ${getTextSecondaryStyles()}`}>
                FAQ
              </AnimatedLink>
            </div>

            {/* 右側のアクション */}
            <div className="flex items-center space-x-4 md:space-x-4">
              <ThemeToggle />
              <Button 
                size="sm" 
                variant="outline" 
                className={`hidden md:flex ui-en ${getButtonStyles()}`}
                onClick={onContactClick}
              >
                CONTACT
              </Button>
              <MobileMenuButton 
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </div>
          </div>
        </div>
      </nav>
      
      <MobileMenu 
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  )
}