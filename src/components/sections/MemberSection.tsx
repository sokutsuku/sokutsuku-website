'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import { BlurText } from '@/components/common/BlurText'
import { MemberCard } from '@/components/cards/MemberCard'

interface Member {
  name: string
  role: string
  description: string
  image: string
  skills: string[]
  experience: string
  facebookUrl?: string
}

interface MemberSectionProps {
  className?: string
}

export function MemberSection({ className }: MemberSectionProps) {
  const members: Member[] = [
    {
      name: "東 直樹",
      role: "エンジニア",
      description: "エンジニア歴16年。ゲーム開発でUI/UXを、Web系では要件定義から運用まで担当。AIボットの個人開発経験も。顧客課題を可視化し、AIを含む最適解を提案・実装。幅広い受託開発に対応可能。",
      image: "/images/placeholder-avatar.png",
      skills: ["AI統合", "システム設計", "プロジェクト管理"],
      experience: "10+ years",
      facebookUrl: "https://www.facebook.com/profile.php?id=61578823615902"
    },
    {
      name: "熊谷 圭司",
      role: "セールス",
      description: "大手事業会社でSaaS営業責任者として大手企業の課題を解消し、年間1億円の取引を拡大。個人では月間230万PVのメディアを統括し、データ解析からコンテンツ企画、PRまで行い成長を牽引。",
      image: "/images/placeholder-avatar.png",
      skills: ["Next.js", "TypeScript", "AI Integration"],
      experience: "8+ years",
      facebookUrl: "https://www.facebook.com/keiji.kumagai"
    },
    {
      name: "森本 拓見",
      role: "プロジェクトマネージャー",
      description: "ブロックチェーン事業のPMとして5年間従事。不動産×AIの事業事業責任者。2025年8月から10年間のトレーダーとしての経験と生成AIの知見を活かし、プライム上場企業でAI実装と金融事業の事業立ち上げ。",
      image: "/images/placeholder-avatar.png",
      skills: ["機械学習", "NLP", "API統合"],
      experience: "6+ years",
      facebookUrl: "https://www.facebook.com/yakumo.takumi.morimoto/"
    }
  ]

  return (
    <section className={cn('w-full min-h-screen py-16 md:py-24 px-4 md:px-8 xl:px-0', className)}>
      <div className="w-full max-w-content 2xl:max-w-content-wide mx-auto">
        {/* セクションタイトル */}
        <div className="text-center mb-16">
          <BlurText
            text="TEAM MEMBER"
            delay={200}
            animateBy="words"
            direction="top"
            stepDuration={0.6}
            className="text-[56px] md:text-[80px] lg:text-[120px] 2xl:text-[160px] leading-none hero-en font-normal text-foreground"
          />
          <BlurText
            text="さまざまな専門性を持つチーム"
            delay={400}
            animateBy="words"
            direction="top"
            stepDuration={0.4}
            className="text-[18px] md:text-2xl font-semibold body-jp text-foreground"
          />
        </div>

        {/* メンバーカード */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <MemberCard
              key={index}
              name={member.name}
              role={member.role}
              description={member.description}
              image={member.image}
              facebookUrl={member.facebookUrl}
              onClick={() => {
                // 将来的にメンバー詳細モーダルを開く処理
                console.log(`Show details for ${member.name}`)
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}