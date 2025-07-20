'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import { FeatureCard } from '@/components/cards/FeatureCard'
import { BlurText } from '@/components/common/BlurText'

interface CardItem {
  id: string
  variant: 'image' | 'logo'
  image?: string
  logo?: React.ReactNode
  title: string
  description: string
  ctaText?: string
  onCtaClick?: () => void
}

interface CardGridSectionProps {
  title?: string
  subtitle?: string
  cards: CardItem[]
  columns?: 1 | 2 | 3 | 4
  className?: string
  titleStyle?: 'normal' | 'hero' // hero styleでBlurTextアニメーションを適用
}

export function CardGridSection({
  title,
  subtitle,
  cards,
  columns = 3,
  className,
  titleStyle = 'normal'
}: CardGridSectionProps) {
  const gridClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
  }

  return (
    <section className={cn('w-full py-16 md:py-24 px-4 md:px-8 xl:px-0', className)}>
      <div className="container mx-auto max-w-7xl">
        {/* ヘッダー */}
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && (
              titleStyle === 'hero' ? (
                <div className="mb-4">
                  <BlurText
                    text={title}
                    delay={200}
                    animateBy="words"
                    direction="top"
                    stepDuration={0.6}
                    className="text-[56px] md:text-[80px] lg:text-[120px] leading-none hero-en font-normal text-foreground"
                  />
                </div>
              ) : (
                <h2 className="text-3xl md:text-4xl font-bold mb-4 body-jp">
                  {title}
                </h2>
              )
            )}
            {subtitle && (
              <BlurText
                text={subtitle}
                delay={600}
                animateBy="words"
                direction="top"
                stepDuration={0.4}
                className="text-lg text-muted-foreground body-jp"
              />
            )}
          </div>
        )}

        {/* カードグリッド */}
        <div className={cn(
          'grid gap-6 md:gap-8',
          gridClasses[columns]
        )}>
          {cards.map((card) => (
            <FeatureCard
              key={card.id}
              variant={card.variant}
              image={card.image}
              logo={card.logo}
              title={card.title}
              description={card.description}
              ctaText={card.ctaText}
              onCtaClick={card.onCtaClick}
            />
          ))}
        </div>
      </div>
    </section>
  )
}