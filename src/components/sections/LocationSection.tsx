'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import { BlurText } from '@/components/common/BlurText'
import { MapPin } from 'lucide-react'

interface LocationSectionProps {
  className?: string
}

export function LocationSection({ className }: LocationSectionProps) {
  const locations = [
    {
      city: "Tokyo",
      address: "東京都渋谷区神宮前6-19-20",
      building: "第15荒井ビル 4階",
      nearestStation: "明治神宮前駅 徒歩3分"
    },
    {
      city: "Osaka", 
      address: "大阪府大阪市中央区本町3-4-5",
      building: "本町ビジネスタワー 10階",
      nearestStation: "本町駅 徒歩2分"
    }
  ]

  return (
    <section className={cn('w-full py-16 md:py-24 px-4 md:px-8 xl:px-0', className)}>
      <div className="w-full max-w-content 2xl:max-w-content-wide mx-auto">
        {/* セクションタイトル */}
        <div className="text-center mb-16">
          <BlurText
            text="LOCATION"
            delay={200}
            animateBy="words"
            direction="top"
            stepDuration={0.6}
            className="text-[56px] md:text-[80px] lg:text-[120px] 2xl:text-[160px] leading-none hero-en font-normal text-foreground text-center"
          />
          <BlurText
            text="私たちのオフィス"
            delay={400}
            animateBy="words"
            direction="top"
            stepDuration={0.4}
            className="text-[18px] md:text-2xl font-semibold body-jp text-foreground"
          />
        </div>

        {/* ロケーションカード */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {locations.map((location, index) => (
            <div key={index} className="space-y-6">
              {/* Google Map */}
              <div className="w-full h-64 bg-muted rounded-lg border-2 border-border flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <MapPin className="w-8 h-8 mx-auto mb-2" />
                  <p className="text-sm font-semibold body-jp">Google Map</p>
                  <p className="text-xs">（{location.city}の地図）</p>
                </div>
              </div>

              {/* 場所名 */}
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-bold hero-en text-foreground mb-2">
                  {location.city}
                </h3>
              </div>

              {/* 住所 */}
              <div className="text-center space-y-2">
                <p className="text-lg body-jp text-foreground font-medium text-center">
                  {location.address}
                </p>
                <p className="text-base body-jp text-foreground text-center">
                  {location.building}
                </p>
                <p className="text-sm text-muted-foreground body-jp text-center">
                  {location.nearestStation}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}