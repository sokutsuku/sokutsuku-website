'use client'

import { Layout } from "@/components/layout/Layout";
import { HeroHeader } from "@/components/sections/HeroHeader";
import { SplitSection } from "@/components/sections/SplitSection";
import { MemberSection } from "@/components/sections/MemberSection";
import { LocationSection } from "@/components/sections/LocationSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ThemeImage } from "@/components/common/ThemeImage";

export default function AboutPage() {
  return (
    <Layout>
      {(toggleContactPanel) => (
        <>
          {/* ヒーローセクション */}
          <HeroHeader
            variant="about"
            title={`BEYOND HUMAN,\nWITH HUMAN.`}
            subtitle="創造性を次の次元へ。"
            description={"私たちはAIを人間の「作業」を代替するものから人間の「思考」と「創造」を増幅させるパートナーへ昇華した。\nSOKUTSUKUのミッションは人間とAIの共創によって誰もが最速でかたちにできる世界を創ることです。"}
          />
          {/* 新しいSplitSection */}
          <SplitSection
            tagline="OUR PHILOSOPHY"
            englishCatchCopy="LESS IS MORE ."
            japaneseCatchCopy="最小の資源で最大の価値を。"
            japaneseDescription={`あなたのビジネスにとって「本質的でないもの」を全て削ぎ落とします。

誰も使わない機能、成果に繋がらない装飾、
そして曖昧で心に響かない言葉たち。

私たちは生成AIを用いて、あなたのビジネスの「核」となる価値だけを抽出し、
最もシンプルで、最もパワフルな形で表現します。

だからこそ、最速で価値を届けることが可能となります。`}
            visualContent={(
              <div className="w-full">
                <ThemeImage
                  lightSrc="/images/about/less-is-more-light.png"
                  darkSrc="/images/about/less-is-more-dark.png"
                  alt="Less is More - 最小の資源で最大の価値を"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg w-full"
                  priority={false}
                />
              </div>
            )}
            reverse={false}
          />

          {/* Member Section */}
          <MemberSection />

          {/* Location Section */}
          <LocationSection />

          {/* Contact Section */}
          <ContactSection onContactClick={toggleContactPanel} />
        </>
      )}
    </Layout>
  );
}