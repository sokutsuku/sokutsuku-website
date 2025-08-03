'use client'

import { Layout } from "@/components/layout/Layout";
import { HeroHeader } from "@/components/sections/HeroHeader";
import { SplitSection } from "@/components/sections/SplitSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ThemeImage } from "@/components/common/ThemeImage";

export default function WorksPage() {
  return (
    <Layout>
      {(toggleContactPanel) => (
        <>
      {/* ヒーローセクション */}
      <HeroHeader
        variant="works"
        title={"RESULTS, \nNOT RESUMES."}
        subtitle="語るのは成果だけ。"
        description={"私たちはプロセスではなくもたらされた価値で評価されたい。\n私たちがお客様と共に創り上げたいくつかの物語を紹介します。"}
        onContactClick={toggleContactPanel}
      />
      
      {/* MapPop実績セクション */}
      <SplitSection
        tagline="WEB SYSTEM"
        englishCatchCopy="MapPop"
        japaneseCatchCopy="強力なMEOツール"
        japaneseDescription={`「MapPop」は、AIでお客様の声を魅力的なクチコミ文章に自動変換するWebアプリケーションです.\n\n店舗のQRコードをスキャンするだけで、お客様は簡単に評価を入力できます。高評価の場合は、AIが自然で説得力のあるクチコミを生成し、Googleマップなどへの投稿をサポートします.\n\n飲食店、美容クリニック、ホテルなど多様な業界に対応しており、管理画面から評価項目やAIの応答を柔軟にカスタマイズ可能です.\n店舗のオンライン評価を高め、効果的なマーケティングと集客力強化を支援します.`}
        visualContent={(
          <div className="w-full">
            <ThemeImage
              lightSrc="/images/about/mappop-light.png"
              darkSrc="/images/about/mappop-dark.png"
              alt="MapPop - 強力なMEOツール"
              width={600}
              height={400}
              className="rounded-lg shadow-lg w-full"
              priority={false}
            />
          </div>
        )}
        reverse={false}
        englishCatchCopyFontSizeClass="text-[56px] md:text-[80px] lg:text-[120px]"
      />
      
      {/* Contact Section */}
      <ContactSection onContactClick={toggleContactPanel} />
        </>
      )}
    </Layout>
  );
}