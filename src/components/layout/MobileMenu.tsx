'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <div 
      className={`
        lg:hidden fixed inset-0 z-[100] 
        bg-[#FBFDFB] dark:bg-[#101411]
        transition-transform duration-300 ease-out
        ${isOpen ? 'translate-y-0' : 'translate-y-full'}
      `}
    >
      <div className="flex flex-col items-center justify-center w-full h-full space-y-8 px-4 py-8">
        <Link 
          href="/services" 
          className="text-base font-bold ui-en hover:text-[#14532d] transition-colors"
          onClick={onClose}
        >
          SERVICES
        </Link>
        <Link 
          href="/works" 
          className="text-base font-bold ui-en hover:text-[#14532d] transition-colors"
          onClick={onClose}
        >
          WORKS
        </Link>
        <Link 
          href="/about" 
          className="text-base font-bold ui-en hover:text-[#14532d] transition-colors"
          onClick={onClose}
        >
          ABOUT
        </Link>
        <Link 
          href="/faq" 
          className="text-base font-bold ui-en hover:text-[#14532d] transition-colors"
          onClick={onClose}
        >
          FAQ
        </Link>
        <Button 
          size="lg" 
          variant="outline" 
          className="ui-en mt-8"
          onClick={onClose}
        >
          CONTACT
        </Button>
      </div>
    </div>
  )
}