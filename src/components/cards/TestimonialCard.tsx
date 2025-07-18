import { Card, CardContent, CardDescription, CardHeader } from '@/components/ui/card'
import { Quote } from 'lucide-react'

interface TestimonialCardProps {
  content: string
  author: string
  company: string
  position: string
  className?: string
}

export function TestimonialCard({ 
  content, 
  author, 
  company, 
  position, 
  className 
}: TestimonialCardProps) {
  return (
    <Card className={`h-full hover:shadow-lg transition-shadow ${className}`}>
      <CardHeader>
        <Quote className="w-8 h-8 text-primary mb-2" />
      </CardHeader>
      
      <CardContent className="space-y-4">
        <blockquote className="text-sm leading-relaxed">
          "{content}"
        </blockquote>
        
        <div className="border-t pt-4">
          <div className="text-sm">
            <p className="font-semibold">{author}</p>
            <CardDescription>
              {position} at {company}
            </CardDescription>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}