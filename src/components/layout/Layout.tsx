'use client'

import { useState } from 'react'
import { NavigationBar } from './NavigationBar'
import { Footer } from './Footer'
import { Container } from './Container'
import { ContactSlidePanel } from '@/components/common/ContactSlidePanel'

interface LayoutProps {
  children: React.ReactNode | ((openContactPanel: () => void) => React.ReactNode)
}

export function Layout({ children }: LayoutProps) {
  const [isContactPanelOpen, setIsContactPanelOpen] = useState(false)

  const closeContactPanel = () => setIsContactPanelOpen(false)
  const toggleContactPanel = () => setIsContactPanelOpen(prev => !prev)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavigationBar onContactClick={toggleContactPanel} />
      <main className="pt-24"> {/* ナビゲーションバーの高さ分のpadding */}
        <Container>
          {typeof children === 'function' ? children(toggleContactPanel) : children}
        </Container>
      </main>
      <Footer />
      <ContactSlidePanel 
        isOpen={isContactPanelOpen} 
        onClose={closeContactPanel} 
      />
    </div>
  )
}