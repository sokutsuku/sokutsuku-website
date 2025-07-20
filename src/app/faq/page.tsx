'use client'

import { Layout } from "@/components/layout/Layout"
import { FAQSection } from "@/components/sections/FAQSection"
import { faqs } from "@/data/faq"
import { FAQ } from "@/types"

export default function FAQPage() {
  const handleContactClick = () => {
    // お問い合わせフォームを開く処理
    console.log('お問い合わせフォームを開く')
  }

  const categories = ['about SERVICE', 'about price', 'about tech', 'other']

  return (
    <Layout>
      {categories.map(category => {
        const items = faqs.filter(faq => faq.category === category)
        return (
          <FAQSection
            key={category}
            title={category}
            description=""
            faqItems={items.map(item => ({ question: item.question, answer: item.answer }))}
            showCta={false}
            layoutStyle="compact"
          />
        )
      })}
    </Layout>
  )
}