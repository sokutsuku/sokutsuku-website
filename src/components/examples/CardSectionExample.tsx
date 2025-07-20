'use client'

import { FlexibleSection } from '@/components/sections/SplitSection'
import { FeatureCard } from '@/components/cards/FeatureCard'
import { BlurText } from '@/components/common/BlurText'

// ロゴコンポーネントの例
const ExampleLogo = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor" className="text-primary">
    <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z"/>
  </svg>
)

export function CardSectionExample() {
  // カードデータの例
  const imageCards = [
    {
      id: '1',
      variant: 'image' as const,
      image: '/images/example1.jpg',
      title: 'ウェブサイト制作',
      description: '最新のNext.jsとAI技術を活用した高速で美しいウェブサイトを制作します。',
      ctaText: '詳しく見る',
      onCtaClick: () => console.log('ウェブサイト制作クリック')
    },
    {
      id: '2',
      variant: 'image' as const,
      image: '/images/example2.jpg',
      title: 'アプリ開発',
      description: 'ユーザーエクスペリエンスを重視したモバイルアプリケーションを開発します。',
      ctaText: '詳しく見る',
      onCtaClick: () => console.log('アプリ開発クリック')
    }
  ]

  const logoCards = [
    {
      id: '1',
      variant: 'logo' as const,
      logo: <ExampleLogo />,
      title: 'AI統合ソリューション',
      description: '生成AIを活用してビジネスプロセスを自動化し、効率を大幅に向上させます。',
      ctaText: 'お問い合わせ',
      onCtaClick: () => console.log('AI統合ソリューションクリック')
    },
    {
      id: '2',
      variant: 'logo' as const,
      logo: <ExampleLogo />,
      title: 'データ分析',
      description: 'ビッグデータとAIを組み合わせて、ビジネスインサイトを提供します。',
      ctaText: 'お問い合わせ',
      onCtaClick: () => console.log('データ分析クリック')
    }
  ]

  // テキストコンテンツ
  const textContent = (
    <div className="space-y-6">
      <BlurText
        text="AI時代のビジネス変革"
        delay={200}
        animateBy="words"
        direction="top"
        stepDuration={0.4}
        className="text-3xl md:text-4xl font-bold body-jp"
      />
      <BlurText
        text="私たちは最新のAI技術とデザイン思考を組み合わせて、あなたのビジネスを次のレベルに押し上げます。"
        delay={400}
        animateBy="words"
        direction="top"
        stepDuration={0.4}
        className="text-lg text-muted-foreground body-jp"
      />
    </div>
  )

  // 画像カードグリッド
  const imageCardGrid = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {imageCards.map((card) => (
        <FeatureCard
          key={card.id}
          variant={card.variant}
          image={card.image}
          title={card.title}
          description={card.description}
          ctaText={card.ctaText}
          onCtaClick={card.onCtaClick}
        />
      ))}
    </div>
  )

  // ロゴカードグリッド
  const logoCardGrid = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {logoCards.map((card) => (
        <FeatureCard
          key={card.id}
          variant={card.variant}
          logo={card.logo}
          title={card.title}
          description={card.description}
          ctaText={card.ctaText}
          onCtaClick={card.onCtaClick}
        />
      ))}
    </div>
  )

  return (
    <>
      {/* 画像カード付きセクション */}
      <FlexibleSection
        leftContent={textContent}
        rightContent={imageCardGrid}
        gap="lg"
        verticalAlign="center"
      />
      
      {/* ロゴカード付きセクション */}
      <FlexibleSection
        leftContent={logoCardGrid}
        rightContent={textContent}
        reverse={true}
        gap="lg"
        verticalAlign="center"
      />
    </>
  )
}