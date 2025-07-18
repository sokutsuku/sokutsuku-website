'use client'

import { Button } from '@/components/ui/button'
import { CTAButton } from '@/components/common/CTAButton'

interface HeroHeaderProps {
  variant: 'home' | 'services' | 'works' | 'about'
  title: string
  subtitle?: string
  description: string
  showActions?: boolean
}

export function HeroHeader({ 
  variant,
  title, 
  subtitle, 
  description, 
  showActions = true 
}: HeroHeaderProps) {
  const handleContactClick = () => {
    console.log("お問い合わせクリック")
    // TODO: ContactSlidePanelを開く処理
  }

  const handleServiceClick = () => {
    console.log("サービス詳細クリック")
    // TODO: サービスページへのナビゲーション
  }

  // variant別のアクションボタン設定
  const getActionButtons = () => {
    switch (variant) {
      case 'home':
        return (
          <>
            <CTAButton onClick={handleContactClick} size="lg" className="body-jp">
              お問い合わせ
            </CTAButton>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={handleServiceClick}
              className="body-jp"
            >
              サービス詳細
            </Button>
          </>
        )
      case 'services':
        return (
          <CTAButton onClick={handleContactClick} size="lg" className="body-jp">
            お問い合わせ
          </CTAButton>
        )
      case 'works':
        return (
          <CTAButton onClick={handleContactClick} size="lg" className="body-jp">
            お問い合わせ
          </CTAButton>
        )
      case 'about':
        return (
          <CTAButton onClick={handleContactClick} size="lg" className="body-jp">
            お問い合わせ
          </CTAButton>
        )
      default:
        return null
    }
  }

  return (
    <section className="pb-8 md:pb-16 flex items-center justify-center min-h-screen px-4 md:px-8">
      <div className="space-y-6 md:space-y-8 text-left w-full max-w-7xl">
        {/* メインタイトル */}
        <div className="space-y-3 md:space-y-4">
          <h1 className="space-y-1 md:space-y-2">
            <div className="text-[56px] sm:text-[100px] md:text-[120px] lg:text-[140px] xl:text-[160px] leading-none hero-en font-normal">
              {title.split('\n').map((line, index) => (
                <div key={index} dangerouslySetInnerHTML={{
                  __html: line
                    .replace('10x', '<span style="color: #14532d;">10x</span>')
                    .replace('ACCELERATED', '<span style="color: #14532d;">ACCELERATED</span>')
                    .replace('RESULTS', '<span style="color: #14532d;">RESULTS</span>')
                }} />
              ))}
            </div>
            {subtitle && (
              <div className="text-[16px] sm:text-[24px] md:text-[28px] lg:text-[32px] leading-tight body-jp font-bold">
                {subtitle}
              </div>
            )}
          </h1>
          
          <div className="text-[12px] sm:text-[15px] md:text-[16px] leading-relaxed text-muted-foreground max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl body-jp">
            {description.split('\n').map((line, index) => (
              <div key={index}>{line}</div>
            ))}
          </div>
        </div>

        {/* アクションボタン */}
        {showActions && (
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
            {getActionButtons()}
          </div>
        )}
      </div>
    </section>
  )
}