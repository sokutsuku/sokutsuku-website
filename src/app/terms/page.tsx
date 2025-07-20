import { Layout } from "@/components/layout/Layout";
import { ContactSection } from "@/components/sections/ContactSection";

export default function TermsPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">利用規約</h1>
        <p>サービス利用に関する規約</p>
      </div>
      
      {/* Contact Section */}
      <ContactSection />
    </Layout>
  )
}