import { cn } from '@/lib/utils'

interface SectionTitleProps {
  children: React.ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg'
  align?: 'left' | 'center' | 'right'
}

export function SectionTitle({ 
  children, 
  className, 
  size = 'md',
  align = 'center' 
}: SectionTitleProps) {
  const sizeClasses = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl'
  }

  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  }

  return (
    <h2 className={cn(
      'font-semibold tracking-tight',
      sizeClasses[size],
      alignClasses[align],
      className
    )}>
      {children}
    </h2>
  )
}