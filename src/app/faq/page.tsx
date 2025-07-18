import { Layout } from "@/components/layout/Layout";
import { Section } from "@/components/sections/Section";

export default function FAQPage() {
  return (
    <Layout>
      {/* FAQ内容（HeroHeaderなし） */}
      <Section 
        title="❓ よくあるご質問"
        subtitle="お客様からよくいただくご質問にお答えします"
        background="default"
      >
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-card rounded-lg p-6 shadow-sm border">
            <h3 className="text-lg font-semibold mb-3">
              Q. 開発期間はどのくらいかかりますか？
            </h3>
            <p className="text-muted-foreground">
              A. プロジェクトの規模により異なりますが、生成AIを活用することで従来の半分程度の期間での開発が可能です。
            </p>
          </div>
          
          <div className="bg-card rounded-lg p-6 shadow-sm border">
            <h3 className="text-lg font-semibold mb-3">
              Q. どのような技術を使用していますか？
            </h3>
            <p className="text-muted-foreground">
              A. 最新のAI技術と組み合わせて、Next.js、React、TypeScriptなどのモダンな技術スタックを使用しています。
            </p>
          </div>
          
          <div className="bg-card rounded-lg p-6 shadow-sm border">
            <h3 className="text-lg font-semibold mb-3">
              Q. 料金体系について教えてください。
            </h3>
            <p className="text-muted-foreground">
              A. プロジェクトの規模と要件に応じて、柔軟な料金体系をご提案いたします。まずはお気軽にお問い合わせください。
            </p>
          </div>
        </div>
      </Section>
    </Layout>
  );
}