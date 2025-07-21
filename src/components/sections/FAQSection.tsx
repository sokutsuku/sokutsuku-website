'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import { BlurText } from '@/components/common/BlurText'
import { Accordion } from '@/components/common/Accordion'

import { Button } from '@/components/ui/button'

interface FAQSectionProps {
  title?: string
  description?: string
  faqItems: {
    question: string
    answer: string
  }[]
  ctaText?: string
  ctaDescription?: string
  ctaButtonText?: string
  onCtaClick?: () => void
  className?: string
  showCta?: boolean
  ctaButtonVariant?: "default" | "outline"
  layoutStyle?: 'full' | 'compact'
}

export function FAQSection({
  title = "FAQ",
  description = "よくいただくご質問にお答えします。",
  faqItems,
  ctaText = "その他のご質問はお気軽にお問い合わせください。",
  ctaDescription = "専門スタッフが丁寧にお答えいたします。",
  ctaButtonText = "お問い合わせする",
  onCtaClick,
  className,
  showCta = true,
  ctaButtonVariant = "default",
  layoutStyle = 'full'
}: FAQSectionProps) {
  const layoutClasses = {
    full: 'min-h-screen py-16 md:py-24',
    compact: 'pt-16 pb-4'
  };

  return (
    <section className={cn(
      'w-full flex items-center justify-center px-4 md:px-8 xl:px-0',
      layoutClasses[layoutStyle],
      className
    )}>
      <div className="w-full max-w-6xl mx-auto space-y-6">
        {/* セクションタイトル */}
        <div className="text-center space-y-4">
          <BlurText
            text={title}
            delay={150}
            animateBy="words"
            direction="top"
            stepDuration={0.6}
            className="text-[56px] md:text-[80px] lg:text-[120px] 2xl:text-[160px] leading-none hero-en font-normal"
            style={{ color: '#14532d' }}
          />
          
          {description && (
            <BlurText
              text={description}
              delay={200}
              animateBy="words"
              direction="top"
              stepDuration={0.4}
              startDelay={600}
              className="text-base md:text-lg text-muted-foreground body-jp mx-auto"
            />
          )}
        </div>

        {/* FAQ アコーディオン */}
        <div className="w-full">
          <Accordion items={faqItems} />
        </div>

        {/* CTA セクション */}
        {showCta && (
          <div className="text-left pt-4">
            <div>
              <BlurText
                text={ctaText}
                delay={150}
                animateBy="words"
                direction="top"
                stepDuration={0.4}
                startDelay={1000}
                className="text-base font-semibold text-foreground body-jp mb-0"
              />
              
              {ctaDescription && (
                <BlurText
                  text={ctaDescription}
                  delay={150}
                  animateBy="words"
                  direction="top"
                  stepDuration={0.3}
                  startDelay={1200}
                  className="text-sm md:text-base text-muted-foreground body-jp"
                />
              )}
            </div>

            {/* CTAボタン */}
            <div className="flex justify-start pt-4">
              <Button
                onClick={onCtaClick}
                variant={ctaButtonVariant}
                size="lg"
                className="body-jp"
              >
                {ctaButtonText}
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}