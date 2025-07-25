'use client'

import { useRouter } from "next/navigation";
import { Layout } from "@/components/layout/Layout";
import { HeroHeader } from "@/components/sections/HeroHeader";
import { SplitSection } from "@/components/sections/SplitSection";
import { SingleSection } from "@/components/sections/SingleSection";
import { ToolsSection } from "@/components/sections/ToolsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ThemeImage } from "@/components/common/ThemeImage";
import { getMainFaqs } from "@/data/faq";

export default function Home() {
  const router = useRouter();

  const visualContent = (
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
  );

  // FAQ データ（一元化されたデータから取得）
  const mainFaqs = getMainFaqs();
  const faqItems = mainFaqs.map(faq => ({
    question: faq.question,
    answer: faq.answer
  }));

  

  const handleFaqClick = () => {
    router.push('/faq');
  };

  return (
    <Layout>
      {(toggleContactPanel) => (
        <>
      {/* ヒーローセクション */}
      <HeroHeader
        variant="home"
        title={`VISION TO REALITY,\n10x FASTER.`}
        subtitle="アイデアを10倍速でかたちに。"
        description={`AIで加速する現代、ビジネスの勝敗は「時間」で決まる.\n私たちSOKUTSUKUは生成AIネイティブな開発チームです.\n従来の10倍の速度であなたのアイデアを市場に届け、勝利へと導きます.`}
      />

      {/* SplitSection */}
      <SplitSection
        tagline="OUR PHILOSOPHY"
        englishCatchCopy="LESS IS MORE ."
        japaneseCatchCopy="最小の資源で最大の価値を。"
        japaneseDescription={`あなたのビジネスにとって「本質的でないもの」を全て削ぎ落とします.\n\n誰も使わない機能、成果に繋がらない装飾,\nそして曖昧で心に響かない言葉たち.\n\n私たちは生成AIを用いて、あなたのビジネスの「核」となる価値だけを抽出し,\n最もシンプルで、最もパワフルな形で表現します.\n\nだからこそ、最速で価値を届けることが可能となります.`}
        visualContent={visualContent}
      />

      {/* SingleSection */}
      <SingleSection
        englishCatchCopy="AI,\nTHE\nNEW STANDARD."
        japaneseCatchCopy="AIをビジネスの標準装備に。"
        japaneseDescription={`すでに「AIの時代」は遠い未来の話ではない.\n全てのビジネスがAIを思考のパートナーとして活用し、業務のエンジンとして機能させることが求められている.\nその新しい時代を共に切り開くための手段としてAIを組み込んだシステムを実装する.`}
        textAlign="left"
        maxWidth="full"
      />

      {/* サービス説明セクション */}
      <ServicesSection
        leftService={{
          title: "ウェブサイト & LP制作",
          description: "従来の手作業によるコピーライティングやデザイン構成とは異なり、私たちはAIを用いてターゲットに最も響くメッセージとレイアウトをデータに基づいて導き出します。これにより、公開までの時間を劇的に短縮しコンバージョン率の高い「生きている」サイトを構築します。",
          lightImageSrc: "/images/about/website-lp-light.jpeg",
          darkImageSrc: "/images/about/website-lp-dark.jpeg",
          imageAlt: "ウェブサイト & LP制作のイメージ"
        }}
        rightService={{
          title: "システム & アプリ開発",
          description: "従来の開発は、決められたルールを自動化するだけでした。私たちは、AIを用いて「判断」や「予測」といった知的業務までを自動化します。問い合わせ対応、データ分析、需要予測など、これまで人間にしかできなかった領域をシステムに組み込み、あなたのビジネスを自律的に成長させるエンジンを構築します。",
          lightImageSrc: "/images/about/system-app-light.jpeg",
          darkImageSrc: "/images/about/system-app-dark.jpeg",
          imageAlt: "システム & アプリ開発のイメージ"
        }}
      />

      {/* ToolsSection */}
      <ToolsSection />

      {/* MapPop実績セクション（WORK'Sタイトル込み） */}
      <SplitSection
        sectionTitle="WORK'S"
        sectionTitleAlign="center"
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

      {/* FAQ Section */}
      <FAQSection
        title="FAQ"
        description=""
        faqItems={faqItems}
        ctaText="他の質問も確認しますか？"
        ctaDescription=""
        ctaButtonText="もっと質問を見てみる"
        onCtaClick={handleFaqClick}
        ctaButtonVariant="outline"
      />

      {/* Contact Section */}
      <ContactSection onContactClick={toggleContactPanel} />
        </>
      )}
    </Layout>
  );
}
