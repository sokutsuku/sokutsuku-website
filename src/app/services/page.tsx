'use client'

import { Layout } from "@/components/layout/Layout";
import { HeroHeader } from "@/components/sections/HeroHeader";
import { SplitSection } from "@/components/sections/SplitSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { CardGridSection } from "@/components/sections/CardGridSection";

// サービスアイコンコンポーネント
const WebsiteIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="text-primary">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
    <line x1="8" y1="21" x2="16" y2="21"/>
    <line x1="12" y1="17" x2="12" y2="21"/>
  </svg>
)

const LPIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="text-primary">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14,2 14,8 20,8"/>
    <line x1="16" y1="13" x2="8" y2="13"/>
    <line x1="16" y1="17" x2="8" y2="17"/>
    <polyline points="10,9 9,9 8,9"/>
  </svg>
)

const SystemIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="text-primary">
    <rect x="2" y="2" width="20" height="8" rx="2" ry="2"/>
    <rect x="2" y="14" width="20" height="8" rx="2" ry="2"/>
    <line x1="6" y1="6" x2="6.01" y2="6"/>
    <line x1="6" y1="18" x2="6.01" y2="18"/>
  </svg>
)

const AppIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="text-primary">
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
    <line x1="12" y1="18" x2="12.01" y2="18"/>
  </svg>
)

export default function ServicesPage() {
  // サービスカードデータ
  const serviceCards = [
    {
      id: 'website',
      variant: 'logo' as const,
      logo: <WebsiteIcon />,
      title: 'ウェブサイト制作',
      description: '対話型AIチャットを組み込むことで、ユーザーとのインタラクションを強化します。また、AIO/SEO戦略を駆使し、検索エンジンでの可視性を向上させます。',
      ctaText: 'もっと詳しく見たい！',
      onCtaClick: () => console.log('ウェブサイト制作の詳細')
    },
    {
      id: 'lp',
      variant: 'logo' as const,
      logo: <LPIcon />,
      title: 'LP制作',
      description: '対話型AIチャットを組み込むことで、ユーザーとのインタラクションを強化します。また、AIO/SEO戦略を駆使し、検索エンジンでの可視性を向上させます。',
      ctaText: 'もっと詳しく見たい！',
      onCtaClick: () => console.log('LP制作の詳細')
    },
    {
      id: 'system',
      variant: 'logo' as const,
      logo: <SystemIcon />,
      title: 'システム開発',
      description: '対話型AIチャットを組み込むことで、ユーザーとのインタラクションを強化します。また、AIO/SEO戦略を駆使し、検索エンジンでの可視性を向上させます。',
      ctaText: 'もっと詳しく見たい！',
      onCtaClick: () => console.log('システム開発の詳細')
    },
    {
      id: 'app',
      variant: 'logo' as const,
      logo: <AppIcon />,
      title: 'アプリ開発',
      description: '対話型AIチャットを組み込むことで、ユーザーとのインタラクションを強化します。また、AIO/SEO戦略を駆使し、検索エンジンでの可視性を向上させます。',
      ctaText: 'もっと詳しく見たい！',
      onCtaClick: () => console.log('アプリ開発の詳細')
    }
  ]

  return (
    <Layout>
      {(toggleContactPanel) => (
        <>
      {/* ヒーローセクション */}
      <HeroHeader
        variant="services"
        title="BUSINESS, 
ACCELERATED BY AI."
        subtitle="ビジネスをAIで再加速する。"
        description={"美しいウェブサイト、便利なシステム。\nそれだけでは、もう勝てない時代です。\n私たちはあなたのビジネスのあらゆるプロセスにAIを統合し、競合が追いつけないほどの「速度」と「知性」を実装します。"}
        onContactClick={toggleContactPanel}
      />
      {/* 新しいSplitSection */}
      <SplitSection
        tagline="for future"
        englishCatchCopy="BEYOND\nAUTOMATION."
        japaneseCatchCopy="AI時代に最適化された思考するシステムを。"
        japaneseDescription=""
        visualContent={(
          <div className="w-full h-full flex items-start justify-center p-4">
            <p className="font-noto-jp text-[12px] md:text-base text-muted-foreground text-left"
              dangerouslySetInnerHTML={{
                __html: `当面の目的は「事業をすぐに始めたい」「既存の課題を解決したい」
ということかもしれません。
私たちの最終的なゴールはその先にあります。

ビジネスそのものに「AIという名のエンジン」を組み込み、
自律的に成長し、未来を予測する組織へと変革させること。
RAG（検索拡張生成）などの最新アーキテクチャを前提とした、
未来を見据えたソリューションを設計・開発します。`.replace(/\n/g, '<br />')
              }}
            ></p>
          </div>
        )}
        reverse={false}
      />

      {/* 2つ目のSplitSection */}
      <SplitSection
        englishCatchCopy={`FROM<br />CHALLENGE<br />TO VALUE.`}
        japaneseCatchCopy="課題を価値へ。"
        japaneseCatchCopyFontSizeClass="text-[16px] md:text-[24px] lg:text-[56px]"
        japaneseDescription={`私たちは単なるサービス提供者ではありません。
ビジネスが直面する課題をAIを活用して解決し、持続可能な価値を創造します。`}
        visualContent={(
          <div className="w-full h-96 bg-muted rounded-lg flex items-center justify-center">
            <p className="text-muted-foreground">（ここに画像または動画）</p>
          </div>
        )}
        reverse={true}
      />

      {/* サービス詳細カードセクション */}
      <CardGridSection
        title="OUR 4 CORE SERVICES."
        cards={serviceCards}
        columns={2}
        titleStyle="hero"
      />

      {/* Contact Section */}
      <ContactSection onContactClick={toggleContactPanel} />
        </>
      )}
    </Layout>
  );
}