import { Layout } from "@/components/layout/Layout";
import { HeroHeader } from "@/components/sections/HeroHeader";
import { Section } from "@/components/sections/Section";

export default function ServicesPage() {
  return (
    <Layout>
      {/* ヒーローセクション */}
      <HeroHeader
        variant="services"
        title="BUSINESS, 
ACCELERATED BY AI."
        subtitle="ビジネスをAIで再加速する。"
        description={"美しいウェブサイト、便利なシステム。\nそれだけでは、もう勝てない時代です。\n私たちはあなたのビジネスのあらゆるプロセスにAIを統合し、競合が追いつけないほどの「速度」と「知性」を実装します。"}
      />

      {/* サービス内容 */}
      <Section 
        title="🎯 提供サービス"
        subtitle="生成AIを活用した2つの核心的なソリューション"
        background="muted"
      >
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-card rounded-lg p-8 shadow-sm border">
            <h3 className="text-xl font-semibold mb-4">
              ウェブサイト & LP制作
            </h3>
            <p className="text-muted-foreground">
              AIによるコンテンツ最適化（AIO）と最新のSEO施策を組み合わせた、成果を出すウェブサイト制作
            </p>
          </div>
          <div className="bg-card rounded-lg p-8 shadow-sm border">
            <h3 className="text-xl font-semibold mb-4">
              システム & アプリ開発
            </h3>
            <p className="text-muted-foreground">
              AIを用いた知的業務の自動化により、ビジネスを自律的に成長させるシステム開発
            </p>
          </div>
        </div>
      </Section>
    </Layout>
  );
}