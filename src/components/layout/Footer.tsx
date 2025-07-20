'use client'

import { AnimatedLink } from '@/components/common/AnimatedLink'

export function Footer() {
  return (
    <footer className="bg-background border-t border-border h-[70vh] flex flex-col justify-center overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 xl:px-0 max-w-7xl w-full">
        {/* ナビゲーションリンク */}
        <div className="flex flex-col md:flex-row items-start md:justify-start gap-4 md:gap-8 mb-12">
          <AnimatedLink 
            href="/" 
            className="text-sm md:text-base text-muted-foreground hover:text-foreground transition-colors body-jp"
          >
            sokutsuku
          </AnimatedLink>
          <AnimatedLink 
            href="/services" 
            className="text-sm md:text-base text-muted-foreground hover:text-foreground transition-colors body-jp"
          >
            service
          </AnimatedLink>
          <AnimatedLink 
            href="/works" 
            className="text-sm md:text-base text-muted-foreground hover:text-foreground transition-colors body-jp"
          >
            works
          </AnimatedLink>
          <AnimatedLink 
            href="/about" 
            className="text-sm md:text-base text-muted-foreground hover:text-foreground transition-colors body-jp"
          >
            about
          </AnimatedLink>
          <AnimatedLink 
            href="/faq" 
            className="text-sm md:text-base text-muted-foreground hover:text-foreground transition-colors body-jp"
          >
            faq
          </AnimatedLink>
        </div>

        {/* SOKUTSUKUロゴ */}
        <div className="text-left mb-12 w-full overflow-hidden">
          <h2 
            className="text-[60px] sm:text-[80px] md:text-[120px] lg:text-[160px] xl:text-[200px] leading-none hero-en font-normal whitespace-nowrap" 
            style={{ letterSpacing: '0.02em', color: '#14532d' }}
          >
            SOKUTSUKU
          </h2>
        </div>

        {/* フッターリンクとコピーライト */}
        <div className="flex flex-col md:flex-row justify-start items-start gap-4 md:gap-8 text-sm text-muted-foreground body-jp">
          <AnimatedLink 
            href="/privacy-policy" 
            className="hover:text-foreground transition-colors"
          >
            プライバシーポリシー
          </AnimatedLink>
          <AnimatedLink 
            href="/terms" 
            className="hover:text-foreground transition-colors"
          >
            利用規約
          </AnimatedLink>
          <button 
            type="button" 
            className="hover:text-foreground transition-colors"
            onClick={() => console.log('クッキー設定')}
          >
            クッキー設定
          </button>
          <span className="text-xs md:text-sm">
            © 2025 Relume. 全著作権所有。
          </span>
        </div>
      </div>
    </footer>
  )
}