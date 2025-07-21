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
      {/* Contact Section */}
      <ContactSection onContactClick={toggleContactPanel} />
        </>
      )}
    </Layout>
  );
}