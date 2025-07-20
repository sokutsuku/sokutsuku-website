'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import { BlurText } from '@/components/common/BlurText'

interface SectionTitleProps {
  title: string
  textAlign?: 'left' | 'center' | 'right'
  className?: string
  color?: string // カスタムカラー指定用
}

export function SectionTitle({
  title,
  textAlign = 'left',
  className,
  color = '#14532d' // デフォルトはメインカラー
}: SectionTitleProps) {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  }

  return (
    <section className={cn('w-full py-16 md:py-24 px-4 md:px-8 xl:px-0', className)}>
      <div className={cn('container mx-auto max-w-7xl', alignClasses[textAlign])}>
        <BlurText
          text={title}
          delay={200}
          animateBy="words"
          direction="top"
          stepDuration={0.6}
          className="text-[56px] md:text-[80px] lg:text-[120px] leading-none hero-en font-normal"
          style={{ color }}
        />
      </div>
    </section>
  )
}