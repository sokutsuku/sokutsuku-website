'use client'

import { Layout } from "@/components/layout/Layout";
import { HeroHeader } from "@/components/sections/HeroHeader";
import { ContactSection } from "@/components/sections/ContactSection";

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

      {/* 実績内容 */}
      <div className="min-h-screen bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">🏆 開発実績</h2>
            <p className="text-muted-foreground text-lg">生成AIを活用した革新的なソリューション</p>
          </div>
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
        </div>
      </div>

      {/* Contact Section */}
      <ContactSection onContactClick={toggleContactPanel} />
        </>
      )}
    </Layout>
  );
}