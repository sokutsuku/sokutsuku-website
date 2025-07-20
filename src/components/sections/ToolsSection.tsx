'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import { BlurText } from '@/components/common/BlurText'

interface ToolsSectionProps {
  className?: string
}

export function ToolsSection({
  className
}: ToolsSectionProps) {
  return (
    <section className={cn('w-full min-h-screen flex items-center justify-center px-4 md:px-8 xl:px-0 py-16 md:py-24', className)}>
      <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto space-y-8">
        {/* 英語キャッチコピー */}
        <div className="flex items-center justify-center">
          <BlurText
            text="TOOLS FOR VICTORY."
            delay={200}
            animateBy="words"
            direction="top"
            stepDuration={0.6}
            className="text-[56px] md:text-[80px] lg:text-[160px] leading-none hero-en font-normal text-foreground text-center"
          />
        </div>

        {/* 日本語キャッチコピー */}
        <div className="flex items-center justify-center w-full">
          <BlurText
            text="最高の道具で、最高の結果を。"
            delay={600}
            animateBy="words"
            direction="top"
            stepDuration={0.5}
            className="text-[18px] md:text-[24px] lg:text-[28px] font-semibold body-jp text-foreground text-center"
          />
        </div>

        {/* 説明文 */}
        <div className="flex items-center justify-center w-full max-w-3xl">
          <BlurText
            text="私たちの目標は、あなたのビジネスが成功を収めることです。手段として最先端のAI技術とモダンなスタックを駆使し、最適なソリューションを提供します。"
            delay={1000}
            animateBy="words"
            direction="top"
            stepDuration={0.4}
            className="text-[14px] md:text-[16px] lg:text-[18px] leading-relaxed text-muted-foreground body-jp text-center"
          />
        </div>
      </div>
    </section>
  )
}