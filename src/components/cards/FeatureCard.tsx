'use client'

import Image from 'next/image'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
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
    <div className={`flex flex-col ${className}`}>
      <Card className="aspect-[4/3] hover:shadow-lg transition-all hover:-translate-y-1 flex flex-col">
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
        
        <div className="flex-grow flex flex-col justify-center text-left p-6">
          {variant === 'logo' && logo && (
            <div className="mb-4">
              <div className="w-16 h-16 flex items-center justify-start">
                {logo}
              </div>
            </div>
          )}
          
          <CardHeader className="p-0">
            <CardTitle className="text-xl body-jp mb-2">{title}</CardTitle>
            <CardDescription className="text-sm body-jp whitespace-pre-line">
              {description}
            </CardDescription>
          </CardHeader>
        </div>
      </Card>
      
      {/* CTAボタン - カードの下に配置 */}
      {ctaText && onCtaClick && (
        <div className="mt-4">
          <Button 
            onClick={onCtaClick}
            variant="outline" 
            className="w-full body-jp"
          >
            {ctaText}
          </Button>
        </div>
      )}
    </div>
  )
}