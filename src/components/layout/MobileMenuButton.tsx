'use client'

import { Button } from '@/components/ui/button'

interface MobileMenuButtonProps {
  isOpen: boolean
  onClick: () => void
}

export function MobileMenuButton({ isOpen, onClick }: MobileMenuButtonProps) {
  return (
    <Button 
      size="sm" 
      variant="ghost" 
      className="lg:hidden w-8 h-8 p-0 z-[110]"
      onClick={onClick}
    >
      <div className="w-5 h-5 flex flex-col justify-center items-center relative">
        <div className={`w-5 h-0.5 bg-current transition-all duration-300 absolute ${
          isOpen 
            ? 'rotate-45' 
            : 'rotate-0 -translate-y-1.5'
        }`} />
        <div className={`w-5 h-0.5 bg-current transition-all duration-300 absolute ${
          isOpen 
            ? '-rotate-45' 
            : 'rotate-0 translate-y-1.5'
        }`} />
      </div>
    </Button>
  )
}