import { cn } from '@/lib/utils'

interface PageTitleProps {
  children: React.ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export function PageTitle({ children, className, size = 'lg' }: PageTitleProps) {
  const sizeClasses = {
    sm: 'text-2xl',
    md: 'text-3xl',
    lg: 'text-4xl'
  }

  return (
    <h1 className={cn(
      'font-bold tracking-tight',
      sizeClasses[size],
      className
    )}>
      {children}
    </h1>
  )
}