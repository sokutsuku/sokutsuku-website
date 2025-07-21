'use client'

import { Button } from '@/components/ui/button'
import { AnimatedLink } from '@/components/common/AnimatedLink'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  onContactClick?: () => void
}

export function MobileMenu({ isOpen, onClose, onContactClick }: MobileMenuProps) {
  return (
    <div 
      className={`
        lg:hidden fixed inset-0 z-[100] 
        bg-[#101411]
        transition-transform duration-300 ease-out
        ${isOpen ? 'translate-y-0' : 'translate-y-full'}
      `}
    >
      <div className="flex flex-col items-center justify-center w-full h-full space-y-8 px-4 py-8">
        <AnimatedLink 
          href="/services" 
          className="text-base font-bold ui-en mobile-menu-text-color hover:text-[#14532d] transition-colors"
          onClick={onClose}
        >
          SERVICES
        </AnimatedLink>
        <AnimatedLink 
          href="/works" 
          className="text-base font-bold ui-en mobile-menu-text-color hover:text-[#14532d] transition-colors"
          onClick={onClose}
        >
          WORKS
        </AnimatedLink>
        <AnimatedLink 
          href="/about" 
          className="text-base font-bold ui-en mobile-menu-text-color hover:text-[#14532d] transition-colors"
          onClick={onClose}
        >
          ABOUT
        </AnimatedLink>
        <AnimatedLink 
          href="/faq" 
          className="text-base font-bold ui-en mobile-menu-text-color hover:text-[#14532d] transition-colors"
          onClick={onClose}
        >
          FAQ
        </AnimatedLink>
        <Button 
          size="lg" 
          variant="outline" 
          className="ui-en mt-8 md:hidden mobile-menu-text-color"
          onClick={() => {
            onContactClick?.()
            onClose()
          }}
        >
          CONTACT
        </Button>
      </div>
    </div>
  )
}