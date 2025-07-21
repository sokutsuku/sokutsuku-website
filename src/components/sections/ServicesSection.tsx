'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import { BlurText } from '@/components/common/BlurText'
import { ThemeImage } from '@/components/common/ThemeImage'

interface ServiceItem {
  title: string
  description: string
  lightImageSrc: string
  darkImageSrc: string
  imageAlt: string
}

interface ServicesSectionProps {
  leftService: ServiceItem
  rightService?: ServiceItem
  className?: string
}

export function ServicesSection({
  leftService,
  rightService,
  className
}: ServicesSectionProps) {
  return (
    <section className={cn('w-full py-16 md:py-24 px-4 md:px-8 xl:px-0', className)}>
      <div className="w-full max-w-content 2xl:max-w-content-wide mx-auto">
        <div className={`grid ${rightService ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1'} gap-12 lg:gap-16`}>
          {/* 左側のサービス */}
          <div className="space-y-6">
            <div className="mb-6">
              <ThemeImage
                lightSrc={leftService.lightImageSrc}
                darkSrc={leftService.darkImageSrc}
                alt={leftService.imageAlt}
                width={600}
                height={400}
                className="rounded-lg shadow-lg w-full"
                priority={false}
              />
            </div>
            <BlurText
              text={leftService.title}
              delay={200}
              animateBy="words"
              direction="top"
              stepDuration={0.6}
              className="text-2xl md:text-3xl font-bold body-jp text-foreground"
            />
            <BlurText
              text={leftService.description}
              delay={400}
              animateBy="words"
              direction="top"
              stepDuration={0.4}
              className="text-sm md:text-base text-muted-foreground leading-relaxed body-jp"
            />
          </div>

          {/* 右側のサービス（存在する場合） */}
          {rightService && (
            <div className="space-y-6">
              <div className="mb-6">
                <ThemeImage
                  lightSrc={rightService.lightImageSrc}
                  darkSrc={rightService.darkImageSrc}
                  alt={rightService.imageAlt}
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg w-full"
                  priority={false}
                />
              </div>
              <BlurText
                text={rightService.title}
                delay={600}
                animateBy="words"
                direction="top"
                stepDuration={0.6}
                className="text-2xl md:text-3xl font-bold body-jp text-foreground"
              />
              <BlurText
                text={rightService.description}
                delay={800}
                animateBy="words"
                direction="top"
                stepDuration={0.4}
                className="text-sm md:text-base text-muted-foreground leading-relaxed body-jp"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}