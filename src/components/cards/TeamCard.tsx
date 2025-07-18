import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface TeamCardProps {
  name: string
  role: string
  bio: string
  image: string
  skills: string[]
  className?: string
}

export function TeamCard({ 
  name, 
  role, 
  bio, 
  image, 
  skills, 
  className 
}: TeamCardProps) {
  return (
    <Card className={`h-full hover:shadow-lg transition-shadow ${className}`}>
      <CardHeader className="text-center">
        <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
        <CardTitle className="text-xl">{name}</CardTitle>
        <CardDescription className="text-primary font-semibold">
          {role}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground text-center">
          {bio}
        </p>
        
        <div className="space-y-2">
          <h4 className="font-semibold text-sm">スキル</h4>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}