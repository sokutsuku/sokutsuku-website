'use client'

import { CTAButton } from '@/components/common/CTAButton'
import { BlurText } from '@/components/common/BlurText'
import { AnimatedLink } from '@/components/common/AnimatedLink'

interface HeroHeaderProps {
  variant: 'home' | 'services' | 'works' | 'about'
  title: string
  subtitle?: string
  description: string
  showActions?: boolean
  onContactClick?: () => void
}

export function HeroHeader({ 
  variant,
  title, 
  subtitle, 
  description, 
  showActions = true,
  onContactClick
}: HeroHeaderProps) {

  // variant別のアクションボタン設定
  const getActionButtons = () => {
    switch (variant) {
      case 'home':
        return (
          <AnimatedLink href="/services">
            <CTAButton
              variant="outline" 
              size="lg"
              className="body-jp"
            >
              サービス詳細
            </CTAButton>
          </AnimatedLink>
        )
      case 'services':
        return (
          <CTAButton onClick={onContactClick} size="lg" variant="outline" className="body-jp">
            お問い合わせ
          </CTAButton>
        )
      case 'works':
        return (
          <CTAButton onClick={onContactClick} size="lg" variant="outline" className="body-jp">
            お問い合わせ
          </CTAButton>
        )
      case 'about':
        return (
          <CTAButton onClick={onContactClick} size="lg" variant="outline" className="body-jp">
            お問い合わせ
          </CTAButton>
        )
      default:
        return null
    }
  }

  return (
    <section className="pb-8 md:pb-16 flex items-center justify-center min-h-screen px-4 md:px-8 xl:px-0">
      <div className="space-y-6 md:space-y-8 text-left w-full max-w-content 2xl:max-w-content-wide">
        {/* メインタイトル */}
        <div className="space-y-3 md:space-y-4">
          <h1 className="space-y-1 md:space-y-2">
            <div className="text-[56px] sm:text-[100px] md:text-[120px] lg:text-[140px] xl:text-[160px] leading-none hero-en font-normal">
              {title.split('\n').map((line, index) => {
                // 各行の開始遅延を計算（前の行の単語数を考慮）
                const wordsInPreviousLines = title.split('\n').slice(0, index).reduce((total, prevLine) => {
                  return total + prevLine.split(' ').length
                }, 0)
                
                return (
                  <div key={index} className="mb-2">
                    <BlurText
                      text={line
                        .replace('10x', '<span style="color: #14532d;">10x</span>')
                        .replace('ACCELERATED', '<span style="color: #14532d;">ACCELERATED</span>')
                        .replace('RESULTS', '<span style="color: #14532d;">RESULTS</span>')
                      }
                      delay={250}
                      animateBy="words"
                      direction="top"
                      isHTML={true}
                      stepDuration={0.6}
                      startDelay={wordsInPreviousLines * 250}
                    />
                  </div>
                )
              })}
            </div>
            {subtitle && (
              <div className="text-[16px] sm:text-[24px] md:text-[28px] lg:text-[32px] leading-tight body-jp font-bold">
                <BlurText 
                  text={subtitle} 
                  delay={800}
                  animateBy="words"
                  direction="top"
                  stepDuration={0.5}
                />
              </div>
            )}
          </h1>
          
          <div className="text-[12px] sm:text-[15px] md:text-[16px] leading-relaxed text-muted-foreground max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl body-jp">
            {description.split('\n').map((line, index) => (
              <div key={index} className="mb-1">
                <BlurText
                  text={line}
                  delay={1200 + index * 200}
                  animateBy="words"
                  direction="top"
                  stepDuration={0.4}
                />
              </div>
            ))}
          </div>
        </div>

        {/* アクションボタン */}
        {showActions && (
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
            <div className="transition-all duration-1000 ease-out blur-sm opacity-0 animate-[fadeInBlur_1s_ease-out_1.2s_forwards]">
              {getActionButtons()}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}