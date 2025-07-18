import { cn } from '@/lib/utils'

interface ContainerProps {
  children: React.ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  spacing?: 'sm' | 'md' | 'lg' | 'xl'
}

export function Container({ 
  children, 
  className, 
  size = 'lg',
  spacing = 'lg'
}: ContainerProps) {
  const sizeClasses = {
    sm: 'max-w-2xl',
    md: 'max-w-4xl',
    lg: 'max-w-6xl',      // ~1120px (design rule max-width)
    xl: 'max-w-7xl'
  }

  // 8pxベースのスペーシング
  const spacingClasses = {
    sm: 'py-4',   // 16px (8px × 2)
    md: 'py-6',   // 24px (8px × 3)
    lg: 'py-8',   // 32px (8px × 4)
    xl: 'py-12'   // 48px (8px × 6)
  }

  return (
    <div className={cn(
      'container mx-auto', // tailwind containerクラスを使用
      sizeClasses[size],
      spacingClasses[spacing],
      className
    )}>
      {children}
    </div>
  )
}