'use client'

import { Layout } from "@/components/layout/Layout";
import { HeroHeader } from "@/components/sections/HeroHeader";
import { SplitSection } from "@/components/sections/SplitSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { CardGridSection } from "@/components/sections/CardGridSection";
import { ThemeImage } from "@/components/common/ThemeImage";

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
      description: `企業の顔となるウェブサイトを、静的な情報発信ツールから、未来の検索エンジンに対応する「戦略的デジタル資産」へと昇華させます。

従来のSEO対策はもちろん、AIO（AI Optimization）を見据えた構造設計とコンテンツ戦略を導入。

AIが情報を理解しやすいサイトを構築することで、将来にわたる検索優位性を確保し、ビジネスの持続的な成長基盤を築きます。`,
      ctaText: 'もっと詳しく見たい！',
      onCtaClick: () => console.log('ウェブサイト制作の詳細')
    },
    {
      id: 'lp',
      variant: 'logo' as const,
      logo: <LPIcon />,
      title: 'LP制作',
      description: `コンバージョンを最大化する「一点突破型」のLPを制作します。

A/Bテストの高速化、ヒートマップ分析、そしてAIによるリアルタイムなコピー最適化で、ターゲットの心に響くメッセージを届けます。

一瞬でユーザーを惹きつけ、最短ルートで成果へと導くLPで、広告効果を最大化させましょう。`,
      ctaText: 'もっと詳しく見たい！',
      onCtaClick: () => console.log('LP制作の詳細')
    },
    {
      id: 'system',
      variant: 'logo' as const,
      logo: <SystemIcon />,
      title: 'システム開発',
      description: `既存の業務フローにAIを統合し、非効率なプロセスを根本から改善するカスタムシステムを開発します。

RAG（検索拡張生成）アーキテクチャを活用し、社内ナレッジを最大限に引き出す「思考する業務システム」を構築。

単純作業の自動化に留まらず、データに基づいた意思決定を支援し、組織全体の生産性を飛躍的に向上させます。`,
      ctaText: 'もっと詳しく見たい！',
      onCtaClick: () => console.log('システム開発の詳細')
    },
    {
      id: 'app',
      variant: 'logo' as const,
      logo: <AppIcon />,
      title: 'アプリ開発',
      description: `アイデアを最速で市場に届ける、AIネイティブなアプリ開発を提供します。

ユーザーの心をつかむ直感的なUI/UX設計はもちろん、画像生成AIや音声認識などの機能を組み込み、これまでにない体験価値を創造。

高速プロトタイピングと反復的な改善サイクルにより、ビジネスの成長を加速させるアプリケーションを共に創り上げます。`,
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
        description={"美しいウェブサイト、便利なシステム.\nそれだけでは、もう勝てない時代です。\n私たちはあなたのビジネスのあらゆるプロセスにAIを統合し、競合が追いつけないほどの「速度」と「知性」を実装します。"}
        onContactClick={toggleContactPanel}
      />
      {/* 新しいSplitSection */}
      <SplitSection
        tagline="for future"
        englishCatchCopy="BEYOND
AUTOMATION."
        japaneseCatchCopy="AI時代に最適化された思考するシステムを。"
        japaneseDescription={`当面の目的は「事業をすぐに始めたい」「既存の課題を解決したい」
ということかもしれません。
私たちの最終的なゴールはその先にあります。

ビジネスそのものに「AIという名のエンジン」を組み込み、
自律的に成長し、未来を予測する組織へと変革させること。
RAG（検索拡張生成）などの最新アーキテクチャを前提とした、
未来を見据えたソリューションを設計・開発します。`}
        visualContent={(
          <div className="w-full">
            <ThemeImage
              lightSrc="/images/about/beyond-automation-light.jpeg"
              darkSrc="/images/about/beyond-automation-dark.jpeg"
              alt="BEYOND AUTOMATION"
              width={600}
              height={400}
              className="rounded-lg shadow-lg w-full"
              priority={false}
            />
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
          <div className="w-full">
            <ThemeImage
              lightSrc="/images/about/challenge-to-value-light.jpg"
              darkSrc="/images/about/challenge-to-value-dark.jpg"
              alt="FROM CHALLENGE TO VALUE"
              width={600}
              height={400}
              className="rounded-lg shadow-lg w-full"
              priority={false}
            />
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