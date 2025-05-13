// src/app/faq/page.tsx
"use client";

import React from 'react';
import FaqSection from '@/components/sections/Faq'; // FaqSectionのパスを確認
import { pricingFaqItems, pricingFaqTitle } from '@/data/faqPageData';

const FAQPage: React.FC = () => {
  return (
    <>
      <main className="pt-20 bg-white"> {/* ヘッダー分の余白など */}
        <FaqSection
          id="pricing-faq" // セクションのID
          title={pricingFaqTitle} // インポートしたタイトルを使用
          items={pricingFaqItems} // インポートしたFAQアイテムを使用
          headingAlign="left" // 例: FAQページではタイトルを中央揃え
          headingClassName="!text-4xl !text-gray-300" // 例: タイトルを大きく、色を指定
          accordionClassName="text-base" // 例: アコーディオン内の基本テキストサイズを 'text-base' (16px) に設定
                                        // もし質問タイトルだけ変えたい場合は、Accordionコンポーネント側の改修が必要な場合があります。
        />
      </main>
    </>
  );
};

export default FAQPage;