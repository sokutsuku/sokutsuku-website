import { PageTitle } from '@/components/typography/PageTitle'
import { Breadcrumb } from '@/components/typography/Breadcrumb'

interface HeaderProps {
  title: string
  description?: string
  breadcrumbs?: Array<{
    label: string
    href?: string
  }>
}

export function Header({ title, description, breadcrumbs }: HeaderProps) {
  return (
    <header className="py-8 border-b border-border bg-card">
      <div className="space-y-4">
        {breadcrumbs && <Breadcrumb items={breadcrumbs} />}
        
        <div className="space-y-2">
          <PageTitle>{title}</PageTitle>
          {description && (
            <p className="text-muted-foreground text-lg">
              {description}
            </p>
          )}
        </div>
      </div>
    </header>
  )
}