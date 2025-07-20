import * as React from "react"
import { cn } from "@/lib/utils"

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  value?: string
  onValueChange?: (value: string) => void
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, value, onValueChange, children, ...props }, ref) => (
    <select
      ref={ref}
      value={value}
      onChange={(e) => onValueChange?.(e.target.value)}
      className={cn(
        "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      {children}
    </select>
  )
)
Select.displayName = "Select"

// Simplified components for compatibility
const SelectTrigger = Select
const SelectValue = ({ placeholder }: { placeholder?: string }) => (
  <option value="" disabled hidden>{placeholder}</option>
)
const SelectContent = ({ children }: { children: React.ReactNode }) => <>{children}</>
const SelectItem = ({ value, children, className }: { value: string; children: React.ReactNode; className?: string }) => (
  <option value={value} className={className}>{children}</option>
)

export {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
}