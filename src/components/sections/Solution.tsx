// src/components/sections/SolutionSection.tsx
import React from 'react';
import SectionHeading from '@/components/elements/SectionHeading';
import Accordion from '@/components/modules/Accordion';
import { featureAccordionItems } from '@/data/topPageData';
import LetterGlitch from '@/components/backgrounds/LetterGlitch';

const SolutionSection = () => {
  const sectionId = "solution";
  const sectionTitle = "Solution";
  const sectionDescription = "課題に対して最適なアプローチを設計し、価値あるウェブサイトを制作する。";
  const headingTextColor = "text-[#1342F0]";

  return (
    // ★★★ section タグの className を変更 ★★★
    <section id={sectionId} className="py-24 md:py-32 bg-white/30 backdrop-blur-xl border border-white/30">
      <div className="max-w-7xl mx-auto px-3 lg:px-6">

        {/* 見出しと説明文エリア */}
        <div className="text-center mb-16 md:mb-20 lg:mb-24">
           <SectionHeading
              id={`${sectionId}-heading`}
              title={sectionTitle}
              align="right"
              textColor={headingTextColor}
           />
           {sectionDescription && (
             // ★ 白背景になるので dark: の指定を削除
             <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
               {sectionDescription}
             </p>
           )}
        </div>

        {/* 左右2カラムレイアウト */}
        <div className="flex flex-col md:flex-row md:items-start gap-12 lg:gap-16">

          {/* 左カラム: Canvas */}
          <div className="w-full md:w-1/2 aspect-square rounded-lg overflow-hidden">
             <LetterGlitch /* ... 必要なら Props を指定 ... */ />
          </div>

          {/* 右カラム: アコーディオン */}
          <div className="w-full md:w-1/2">
             {/* アコーディオン内部の文字色も白背景で見えるか確認 */}
             <Accordion
               items={featureAccordionItems}
             />
          </div>

        </div>
      </div>
    </section>
  );
};

export default SolutionSection;