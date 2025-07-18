import { cn } from '@/lib/utils'
import { SectionTitle } from '@/components/typography/SectionTitle'

interface SectionProps {
  children: React.ReactNode
  title?: string
  subtitle?: string
  className?: string
  background?: 'default' | 'muted' | 'card'
  padding?: 'sm' | 'md' | 'lg' | 'xl'
}

export function Section({ 
  children, 
  title, 
  subtitle, 
  className, 
  background = 'default',
  padding = 'lg' 
}: SectionProps) {
  const backgroundClasses = {
    default: 'bg-background',
    muted: 'bg-muted/50',
    card: 'bg-card'
  }

  const paddingClasses = {
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-16',
    xl: 'py-20'
  }

  return (
    <section className={cn(
      backgroundClasses[background],
      paddingClasses[padding],
      className
    )}>
      <div className="space-y-8">
        {/* セクションタイトル */}
        {title && (
          <div className="text-center space-y-4">
            <SectionTitle>{title}</SectionTitle>
            {subtitle && (
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {/* セクションコンテンツ */}
        {children}
      </div>
    </section>
  )
}