import { Layout } from "@/components/layout/Layout";
import { HeroHeader } from "@/components/sections/HeroHeader";
import { Section } from "@/components/sections/Section";
import { SplitSection } from "@/components/sections/SplitSection";
import { ThemeToggle } from "@/components/common/ThemeToggle";

export default function Home() {
  const textContent = (
    <div className="space-y-4">
      <p className="text-xs tracking-widest text-muted-foreground" style={{ fontFamily: 'DM Sans, sans-serif' }}>
        OUR PHILOSOPHY
      </p>
      <div className="space-y-0">
        <h2 className="hero-en text-[120px] leading-none text-primary">
        LESS IS MORE .
      </h2>
        <h3 className="text-2xl font-semibold" style={{ fontFamily: 'Noto Sans JP, sans-serif' }}>
          最小の資源で最大の価値を。
        </h3>
      </div>
      <p className="text-base text-muted-foreground" style={{ fontFamily: 'Noto Sans JP, sans-serif' }}>
        あなたのビジネスにとって「本質的でないもの」を全て削ぎ落とします。
        <br /><br />
        誰も使わない機能、成果に繋がらない装飾、<br />
        そして曖昧で心に響かない言葉たち。
        <br /><br />
        私たちは生成AIを用いて、あなたのビジネスの「核」となる価値だけを抽出し、<br />
        最もシンプルで、最もパワフルな形で表現します。
        <br /><br />
        だからこそ、最速で価値を届けることが可能となります。
      </p>
    </div>
  );

  const visualContent = (
    <div className="w-full h-96 bg-muted rounded-lg flex items-center justify-center">
      <p className="text-muted-foreground">（ここに画像または動画）</p>
    </div>
  );

  return (
    <Layout>
      {/* ヒーローセクション */}
      <HeroHeader
        variant="home"
        title="VISION TO REALITY,
10x FASTER."
        subtitle="アイデアを10倍速でかたちに。"
        description={"AIで加速する現代、ビジネスの勝敗は「時間」で決まる。\n私たちSOKUTSUKUは生成AIネイティブな開発チームです。\n従来の10倍の速度であなたのアイデアを市場に届け、勝利へと導きます。"}
      />

      {/* 新しいSplitSection */}
      <SplitSection
        tagline="OUR PHILOSOPHY"
        englishCatchCopy="LESS IS MORE ."
        japaneseCatchCopy="最小の資源で最大の価値を。"
        japaneseDescription={
          "あなたのビジネスにとって「本質的でないもの」を全て削ぎ落とします。\n" +
          "誰も使わない機能、成果に繋がらない装飾、\n" +
          "そして曖昧で心に響かない言葉たち。\n\n" +
          "私たちは生成AIを用いて、あなたのビジネスの「核」となる価値だけを抽出し、\n" +
          "最もシンプルで、最もパワフルな形で表現します。\n" +
          "だからこそ、最速で価値を届けることが可能となります。"
        }
        visualContent={visualContent}
      />
    </Layout>
  );
}
