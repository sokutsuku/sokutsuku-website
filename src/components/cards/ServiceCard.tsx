import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { type LucideIcon } from 'lucide-react'

interface ServiceCardProps {
  title: string
  description: string
  features: string[]
  icon: LucideIcon
  className?: string
}

export function ServiceCard({ 
  title, 
  description, 
  features, 
  icon: Icon, 
  className 
}: ServiceCardProps) {
  return (
    <Card className={`h-full hover:shadow-lg transition-shadow ${className}`}>
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          <div>
            <CardTitle className="text-xl">{title}</CardTitle>
          </div>
        </div>
        <CardDescription className="text-base">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <h4 className="font-semibold text-sm">主な特徴</h4>
          <ul className="space-y-1">
            {features.map((feature, index) => (
              <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        
        <Button variant="outline" className="w-full">
          詳しく見る
        </Button>
      </CardContent>
    </Card>
  )
}