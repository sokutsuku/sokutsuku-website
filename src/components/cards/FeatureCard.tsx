'use client'

import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface FeatureCardProps {
  variant: 'image' | 'logo'
  image?: string
  logo?: React.ReactNode
  title: string
  description: string
  ctaText?: string
  onCtaClick?: () => void
  className?: string
}

export function FeatureCard({ 
  variant,
  image,
  logo,
  title, 
  description, 
  ctaText,
  onCtaClick,
  className 
}: FeatureCardProps) {
  return (
    <Card className={`aspect-square hover:shadow-lg transition-all hover:-translate-y-1 flex flex-col ${className}`}>
      {/* 画像またはロゴ */}
      {variant === 'image' && image && (
        <div className="relative aspect-video overflow-hidden rounded-t-lg">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
      )}
      
      <div className="flex-grow flex flex-col justify-center items-center text-center p-6">
        {variant === 'logo' && logo && (
          <div className="mb-4">
            <div className="w-16 h-16 flex items-center justify-center">
              {logo}
            </div>
          </div>
        )}
        
        <CardHeader className="p-0">
          <CardTitle className="text-xl body-jp mb-2">{title}</CardTitle>
          <CardDescription className="text-sm body-jp">
            {description}
          </CardDescription>
        </CardHeader>
      </div>
      
      {/* CTAボタン */}
      {ctaText && onCtaClick && (
        <CardContent className="p-6 pt-0">
          <Button 
            onClick={onCtaClick}
            variant="outline" 
            className="w-full body-jp"
          >
            {ctaText}
          </Button>
        </CardContent>
      )}
    </Card>
  )
}