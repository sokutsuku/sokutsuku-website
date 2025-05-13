// components/sections/FaqSection.tsx
"use client";

import React from 'react';
import SectionHeading from '@/components/elements/SectionHeading';
import Accordion, { type AccordionItemData } from '@/components/modules/Accordion';

interface FaqSectionProps {
  id?: string;
  title: string;
  items: AccordionItemData[];
  className?: string;
  headingClassName?: string; // ★ これで文字サイズや色を制御
  accordionClassName?: string;
  headingAlign?: 'left' | 'center' | 'right';
  // headingTextColor?: string; // headingClassNameで色も指定するため、これは削除してもOK
}

const FaqSection: React.FC<FaqSectionProps> = ({
  id = "faq",
  title,
  items,
  className = "",
  headingClassName = "", // デフォルトは空文字列
  accordionClassName = "",
  headingAlign = "left",
  // headingTextColor, // headingClassNameで色を指定するため削除
}) => {
  return (
    <section id={id} className={`py-24 md:py-32 bg-white ${className}`}> {/* ダークモード削除 */}
      <div className="max-w-7xl mx-auto px-3 lg:px-6">
        <SectionHeading
          id={`${id}-heading`}
          title={title}
          tag="h2"
          align={headingAlign}
          // textColor={headingTextColor} // ★ headingClassName で色も指定するため削除
          // ★ className から固定の文字サイズ指定を削除し、headingClassName に委ねる
          className={`mb-10 ${headingClassName}`}
        />
        <Accordion items={items} className={`mx-auto ${accordionClassName}`} />
      </div>
    </section>
  );
};

export default FaqSection;