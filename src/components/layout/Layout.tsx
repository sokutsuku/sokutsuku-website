import { NavigationBar } from './NavigationBar'
import { Footer } from './Footer'
import { Container } from './Container'

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavigationBar />
      <main className="pt-24"> {/* ナビゲーションバーの高さ分のpadding */}
        <Container>
          {children}
        </Container>
      </main>
      <Footer />
    </div>
  )
}