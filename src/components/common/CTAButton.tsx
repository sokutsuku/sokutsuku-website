import { Button } from '@/components/ui/button'
import { type VariantProps } from 'class-variance-authority'
import { type buttonVariants } from '@/components/ui/button'

interface CTAButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  size?: VariantProps<typeof buttonVariants>['size']
  variant?: 'default' | 'secondary'
  className?: string
}

export function CTAButton({ 
  children, 
  size = 'default', 
  variant = 'default',
  className,
  ...props 
}: CTAButtonProps) {
  return (
    <Button
      variant={variant}
      size={size}
      className={`
        font-semibold transition-all duration-200
        hover:scale-105 hover:shadow-lg
        ${className}
      `}
      {...props}
    >
      {children}
    </Button>
  )
}