'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { CTAButton } from '@/components/common/CTAButton'

interface WorkDetailHeroProps {
  title: string
  description: string
  tags: string[]
  year: string
  client?: string
  showActions?: boolean
}

export function WorkDetailHero({ 
  title, 
  description, 
  tags,
  year,
  client,
  showActions = true 
}: WorkDetailHeroProps) {
  const handleContactClick = () => {
    console.log("お問い合わせクリック")
    // TODO: ContactSlidePanelを開く処理
  }

  const handleBackClick = () => {
    console.log("戻るクリック")
    // TODO: Works一覧へのナビゲーション
  }

  return (
    <section className="py-16">
      <div className="space-y-8">
        {/* 戻るボタン */}
        <div className="flex">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={handleBackClick}
            className="body-jp"
          >
            ← Works一覧に戻る
          </Button>
        </div>

        {/* メイン情報 */}
        <div className="space-y-6">
          {/* タイトル */}
          <h1 className="text-3xl md:text-4xl font-bold text-left">
            <span className="text-en tracking-wider">{title}</span>
          </h1>
          
          {/* 説明文 */}
          <p className="text-lg text-muted-foreground text-left max-w-4xl body-jp">
            {description}
          </p>

          {/* タグ */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <Badge key={index} variant="secondary" className="body-jp">
                {tag}
              </Badge>
            ))}
          </div>

          {/* プロジェクト情報 */}
          <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
            <div className="body-jp">
              <span className="font-medium">年度:</span> {year}
            </div>
            {client && (
              <div className="body-jp">
                <span className="font-medium">クライアント:</span> {client}
              </div>
            )}
          </div>
        </div>

        {/* アクションボタン */}
        {showActions && (
          <div className="flex flex-col sm:flex-row gap-4">
            <CTAButton onClick={handleContactClick} size="lg" className="body-jp">
              お問い合わせ
            </CTAButton>
          </div>
        )}
      </div>
    </section>
  )
}