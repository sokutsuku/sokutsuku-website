import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface WorkCardProps {
  title: string
  description: string
  category: string
  technologies: string[]
  image: string
  slug: string
  completed: string
  className?: string
}

export function WorkCard({ 
  title, 
  description, 
  category, 
  technologies, 
  image, 
  slug, 
  completed, 
  className 
}: WorkCardProps) {
  return (
    <Link href={`/works/${slug}`}>
      <Card className={`h-full hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer ${className}`}>
        {/* 画像 */}
        <div className="relative aspect-video overflow-hidden rounded-t-lg">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
          <div className="absolute top-4 left-4">
            <Badge variant="secondary">{category}</Badge>
          </div>
        </div>
        
        <CardHeader>
          <div className="flex items-start justify-between">
            <div>
              <CardTitle className="text-xl">{title}</CardTitle>
              <CardDescription className="text-sm text-muted-foreground mt-1">
                {completed}
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground line-clamp-3">
            {description}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}