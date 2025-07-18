import { Layout } from "@/components/layout/Layout";
import { HeroHeader } from "@/components/sections/HeroHeader";
import { Section } from "@/components/sections/Section";

export default function AboutPage() {
  return (
    <Layout>
      {/* ヒーローセクション */}
      <HeroHeader
        variant="about"
        title="BEYOND HUMAN, 
WITH HUMAN."
        subtitle="創造性を次の次元へ。"
        description={"私たちはAIを人間の「作業」を代替するものから人間の「思考」と「創造」を増幅させるパートナーへ昇華した。\nSOKUTSUKUのミッションは人間とAIの共創によって誰もが最速でかたちにできる世界を創ることです。"}
      />

      {/* ミッション */}
      <Section 
        title="🚀 私たちのミッション"
        subtitle="ビジネスの勝敗が「時間」で決まる現代において、従来の開発プロセスは遅く、複雑で、高コストです。"
        background="default"
      >
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-muted-foreground">
            SOKUTSUKUは、<strong>生成AIネイティブ</strong>な開発チームとして、その「機会損失」というビジネス最大の敵と戦います。
          </p>
        </div>
      </Section>

      {/* コアコンセプト */}
      <Section 
        title="💡 コアコンセプト"
        subtitle="「Less is More（最小の資源で、最大の価値を）」"
        background="card"
      >
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-muted-foreground">
            AIを用いて、従来の開発プロセスに潜むあらゆる「無駄」を削ぎ落とし、お客様のビジネスの本質的な価値創造に集中します。
          </p>
        </div>
      </Section>
    </Layout>
  );
}