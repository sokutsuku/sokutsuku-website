import { Layout } from "@/components/layout/Layout";
import { HeroHeader } from "@/components/sections/HeroHeader";
import { Section } from "@/components/sections/Section";

export default function WorksPage() {
  return (
    <Layout>
      {/* ヒーローセクション */}
      <HeroHeader
        variant="works"
        title={"RESULTS, \nNOT RESUMES."}
        subtitle="語るのは成果だけ。"
        description={"私たちはプロセスではなくもたらされた価値で評価されたい。\n私たちがお客様と共に創り上げたいくつかの物語を紹介します。"}
      />

      {/* 実績内容 */}
      <Section 
        title="🏆 開発実績"
        subtitle="生成AIを活用した革新的なソリューション"
        background="muted"
      >
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-card rounded-lg p-8 shadow-sm border">
            <h3 className="text-xl font-semibold mb-4">
              Coming Soon...
            </h3>
            <p className="text-muted-foreground">
              現在、実績を準備中です。近日中に公開予定です。
            </p>
          </div>
        </div>
      </Section>
    </Layout>
  );
}