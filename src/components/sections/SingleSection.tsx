'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import { BlurText } from '@/components/common/BlurText'

interface SingleSectionProps {
  englishCatchCopy: string
  japaneseCatchCopy: string
  japaneseDescription: string
  className?: string
  textAlign?: 'left' | 'center' | 'right'
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
}

export function SingleSection({
  englishCatchCopy,
  japaneseCatchCopy,
  japaneseDescription,
  className,
  textAlign = 'left',
  maxWidth = 'lg'
}: SingleSectionProps) {
  const textAlignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  }

  return (
    <section className={cn('w-full flex items-center px-4 md:px-8 xl:px-0 py-16 md:py-24', className)}>
      <div className={cn(
        'w-full',
        maxWidth === 'full' ? 'max-w-full' : 'max-w-7xl lg:max-w-none', // ウェブビューで幅制限を解除
        textAlignClasses[textAlign]
      )}>
        {/* 英語キャッチコピー */}
        <div>
          {/* 375px以下の極小モバイル版（3行表示） */}
          <div className="block sm:hidden space-y-1">
            {(() => {
              // Handle both \n and <br /> line breaks for extra small mobile
              let lines;
              if (englishCatchCopy.includes('<br />')) {
                lines = englishCatchCopy.split('<br />').map(line => line.trim()).filter(line => line);
              } else if (englishCatchCopy.includes('\\n')) {
                lines = englishCatchCopy.split('\\n').map(line => line.trim()).filter(line => line);
              } else {
                lines = englishCatchCopy.split('\n').map(line => line.trim()).filter(line => line);
              }
              
              return lines.map((line, index) => {
                const processedLine = line.replace(
                  'NEW STANDARD',
                  '<span style="color: #14532d; white-space: nowrap;">NEW STANDARD</span>'
                );
                
                const wordsInPreviousLines = lines.slice(0, index).reduce((total, prevLine) => {
                  return total + prevLine.split(' ').length
                }, 0);
                
                return (
                  <div key={index} className="mb-2">
                    <BlurText
                      text={processedLine}
                      delay={200}
                      animateBy="words"
                      direction="top"
                      isHTML={true}
                      stepDuration={0.6}
                      startDelay={200 + wordsInPreviousLines * 250}
                      noWrap={true}
                      className="text-[56px] leading-none hero-en font-normal"
                    />
                  </div>
                )
              })
            })()}
          </div>

          {/* 通常モバイル版（2行表示） */}
          <div className="hidden sm:block md:hidden space-y-1">
            {(() => {
              // For normal mobile, combine "THE" and "NEW STANDARD" 
              const combinedText = englishCatchCopy
                .replace(/AI,\nTHE\nNEW STANDARD/g, 'AI,\nTHE NEW STANDARD')
                .replace(/AI,\\nTHE\\nNEW STANDARD/g, 'AI,\\nTHE NEW STANDARD');
              
              let lines;
              if (combinedText.includes('<br />')) {
                lines = combinedText.split('<br />').map(line => line.trim()).filter(line => line);
              } else if (combinedText.includes('\\n')) {
                lines = combinedText.split('\\n').map(line => line.trim()).filter(line => line);
              } else {
                lines = combinedText.split('\n').map(line => line.trim()).filter(line => line);
              }
              
              return lines.map((line, index) => {
                const processedLine = line.replace(
                  'NEW STANDARD',
                  '<span style="color: #14532d; white-space: nowrap;">NEW STANDARD</span>'
                );
                
                const wordsInPreviousLines = lines.slice(0, index).reduce((total, prevLine) => {
                  return total + prevLine.split(' ').length
                }, 0);
                
                return (
                  <div key={index} className="mb-2">
                    <BlurText
                      text={processedLine}
                      delay={200}
                      animateBy="words"
                      direction="top"
                      isHTML={true}
                      stepDuration={0.6}
                      startDelay={200 + wordsInPreviousLines * 250}
                      noWrap={true}
                      className="text-[56px] leading-none hero-en font-normal"
                    />
                  </div>
                )
              })
            })()}
          </div>

          {/* デスクトップ版（改行なし） */}
          <div className="hidden md:block">
            <BlurText
              text={englishCatchCopy
                .replace(/\n/g, ' ')
                .replace(/\\n/g, ' ')
                .replace('NEW STANDARD', '<span style="color: #14532d;">NEW STANDARD</span>')
              }
              delay={200}
              animateBy="words"
              direction="top"
              isHTML={true}
              stepDuration={0.6}
              noWrap={true}
              className="text-[56px] md:text-[80px] lg:text-[100px] xl:text-[160px] leading-none hero-en font-normal"
            />
          </div>
        </div>

        {/* 日本語キャッチコピー */}
        <div>
          <BlurText
            text={japaneseCatchCopy}
            delay={200}
            animateBy="words"
            direction="top"
            stepDuration={0.5}
            startDelay={800}
            className="text-[16px] md:text-2xl font-semibold body-jp"
          />
        </div>

        {/* 日本語説明 */}
        <div className="mt-4 space-y-2">
          {japaneseDescription.split('\n').filter(line => line.trim() !== '').map((line, index) => (
            <BlurText
              key={index}
              text={line}
              delay={200}
              animateBy="words"
              direction="top"
              stepDuration={0.4}
              startDelay={1200 + index * 300}
              className="text-[12px] md:text-base leading-relaxed text-muted-foreground body-jp"
            />
          ))}
        </div>
      </div>
    </section>
  )
}