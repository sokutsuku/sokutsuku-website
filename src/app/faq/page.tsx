'use client'

import { Layout } from "@/components/layout/Layout"
import { FAQSection } from "@/components/sections/FAQSection"
import { faqs } from "@/data/faq"

export default function FAQPage() {

  const categories = ['about SERVICE', 'about price', 'about tech', 'other']

  return (
    <Layout>
      <>
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
      </>
    </Layout>
  )
}