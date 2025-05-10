// components/sections/faq.tsx
"use client"; // Accordion.tsx が "use client" のため、こちらもクライアントコンポーネントとします

import React from 'react';
import SectionHeading from '@/components/elements/SectionHeading'; // SectionHeadingのパスを適切に設定してください
import Accordion from '@/components/modules/Accordion'; // Accordionのパスを適切に設定してください
import { faqItems } from '@/data/topPageData'; // FAQデータをインポート

const FaqSection: React.FC = () => {
  return (
    <section id="faq" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-3 lg:px-6">
        {/* セクションヘッダー */}
        <SectionHeading
          id="faq-heading"
          title="Any Question ?"
          tag="h2"
          align="left"
          textColor="text-gray-300"
          className="mb-10 md:mb-16 lg:!text-8xl"
        />

        {/* アコーディオン */}
        <Accordion items={faqItems} className="mx-auto" />
      </div>
    </section>
  );
};

export default FaqSection;