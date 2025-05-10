// src/components/sections/PricingSection.tsx
import React from 'react';
import SectionHeading from '@/components/elements/SectionHeading'; // SectionHeading をインポート
import PriceCard from '@/components/modules/PriceCard';           // PriceCard をインポート
import { pricingPlansData } from '@/data/topPageData';         // 料金プランデータをインポート

const PricingSection = () => {
  const sectionId = "pricing"; // ページ内リンク用 ID

  return (
    <section id={sectionId} className="py-24 md:py-32 bg-white"> {/* セクション背景色 */}
      <div className="max-w-7xl mx-auto px-3 lg:px-6">

        {/* セクションタイトル */}
        <SectionHeading
            id={`${sectionId}-heading`}
            title="Pricing"
            align="center"
            textColor="text-gray-200" // 画像に合わせた薄い色
            className="mb-4" // サイズと透明度調整
         />

         {/* サブタイトル */}
         <p className="text-center text-base md:text-lg text-gray-600 dark:text-gray-400 mb-16 md:mb-20">
             柔軟で透明性の高い料金体系
         </p>

         {/* 料金カードグリッド */}
         {/* items-end でカードの下端を揃える (高さが異なる場合) */}
         <div className="grid grid-cols-1 md:grid-cols-3 gap-2 items-end">
            {pricingPlansData.map((plan, index) => (
                // スプレッド構文 {...plan} で plan オブジェクトの全プロパティを渡す
                <PriceCard key={index} {...plan} />
            ))}
         </div>
      </div>
    </section>
  );
};

export default PricingSection;