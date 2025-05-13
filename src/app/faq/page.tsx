// src/app/faq/page.tsx
"use client";

import React from 'react';
import FaqSection from '@/components/sections/Faq';
// ★ faqPageData.ts から必要なデータをすべてインポート
import {
  pricingFaqItems,
  pricingFaqTitle,
  deliveryFaqItems,
  deliveryFaqTitle,
  contractPaymentFlowFaqItems, // ★ 追加
  contractPaymentFlowFaqTitle, // ★ 追加
  revisionSupportFaqItems,     // ★ 追加
  revisionSupportFaqTitle      // ★ 追加
} from '@/data/faqPageData';

const FAQPage: React.FC = () => {
  return (
    <>
      <main className="pt-36 pb-72 bg-white">
        {/* 価格・お支払い関係のFAQセクション */}
        <FaqSection
          id="pricing-faq"
          title={pricingFaqTitle}
          items={pricingFaqItems}
          headingAlign="left"
          headingClassName="!text-2xl md:!text-4xl !text-gray-300" // 必要に応じて調整
          accordionClassName="text-base"
          className="!pt-12 !pb-16"
        />

        {/* 納期についてのFAQセクション */}
        <FaqSection
          id="delivery-faq"
          title={deliveryFaqTitle}
          items={deliveryFaqItems}
          headingAlign="left"
          headingClassName="!text-2xl md:!text-4xl !text-gray-300"
          accordionClassName="text-base"
          className="!pt-12 !pb-16"
        />

        {/* ★ 契約・支払いの流れについてのFAQセクション (新規追加) ★ */}
        <FaqSection
          id="contract-flow-faq"
          title={contractPaymentFlowFaqTitle}
          items={contractPaymentFlowFaqItems}
          headingAlign="left"
          headingClassName="!text-2xl md:!text-4xl !text-gray-300"
          accordionClassName="text-base"
          className="!pt-12 !pb-16"
        />

        {/* ★ 修正・サポートについてのFAQセクション (新規追加) ★ */}
        <FaqSection
          id="revision-support-faq"
          title={revisionSupportFaqTitle}
          items={revisionSupportFaqItems}
          headingAlign="left"
          headingClassName="!text-2xl md:!text-4xl !text-gray-300"
          accordionClassName="text-base"
          className="!pt-12 !pb-16"
        />
      </main>
    </>
  );
};

export default FAQPage;