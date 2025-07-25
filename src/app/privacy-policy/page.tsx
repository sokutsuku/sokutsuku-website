import { Layout } from "@/components/layout/Layout";
import { ContactSection } from "@/components/sections/ContactSection";

export default function PrivacyPolicyPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">プライバシーポリシー</h1>
        <p>個人情報の取り扱いについて</p>
      </div>
      
      {/* Contact Section */}
      <ContactSection />
    </Layout>
  )
}