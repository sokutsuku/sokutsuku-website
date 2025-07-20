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
}

interface MemberSectionProps {
  className?: string
}

export function MemberSection({ className }: MemberSectionProps) {
  const members: Member[] = [
    {
      name: "東 直樹",
      role: "エンジニア",
      description: "10年以上のシステム開発経験を持ち、生成AI技術の早期採用によりプロジェクトの生産性を劇的に向上させてきました。「速度と品質の両立」をモットーに、チーム全体をリードしています。",
      image: "/images/placeholder-avatar.png",
      skills: ["AI統合", "システム設計", "プロジェクト管理"],
      experience: "10+ years"
    },
    {
      name: "熊谷 圭司",
      role: "セールス",
      description: "フルスタック開発のエキスパートとして、Next.js、TypeScript、AIライブラリの統合において高い技術力を発揮。最新技術の導入と実装において中心的な役割を担っています。",
      image: "/images/placeholder-avatar.png",
      skills: ["Next.js", "TypeScript", "AI Integration"],
      experience: "8+ years"
    },
    {
      name: "森本 拓見",
      role: "プロジェクトマネージャー",
      description: "機械学習とNLP分野での深い専門知識を活かし、OpenAI APIやClaude APIなどの最新生成AIツールの効果的な活用を推進。ビジネス課題をAIで解決するアプローチを得意としています。",
      image: "/images/placeholder-avatar.png",
      skills: ["機械学習", "NLP", "API統合"],
      experience: "6+ years"
    }
  ]

  return (
    <section className={cn('w-full py-16 md:py-24 px-4 md:px-8 xl:px-0', className)}>
      <div className="w-full max-w-7xl mx-auto">
        {/* セクションタイトル */}
        <div className="text-center mb-16">
          <BlurText
            text="TEAM MEMBER"
            delay={200}
            animateBy="words"
            direction="top"
            stepDuration={0.6}
            className="text-[56px] md:text-[80px] lg:text-[160px] leading-none hero-en font-normal"
            style={{ color: '#14532d' }}
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
              image={member.image}
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