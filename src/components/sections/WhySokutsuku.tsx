// src/components/sections/WhySokutsukuSection.tsx
import React from 'react';
import FeatureCard from '@/components/modules/FeatureCard';
import { featureListData } from '@/data/topPageData';
import { FeatureItemData } from '@/components/modules/FeatureListItem';

const WhySokutsukuSection = () => {
  const sectionId = "why-sokutsuku";
  const sectionTitle = "Why Sokutsuku";

  return (
    <section id={sectionId} className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-3 lg:px-6">

        {/* カスタム見出しエリア */}
        <div className="mb-16 md:mb-20 lg:mb-24">
          <h2 className="text-left font-extrabold leading-none text-[4rem] md:text-[8rem] lg:text-[12rem]">
            <span className="block text-gray-200">Why</span>
            <span className="block text-[#1342F0]">Sokutsuku</span>
          </h2>
        </div>

        {/* === コンテンツエリア === */}
        <div className="space-y-24 md:space-y-32 lg:space-y-32">
          {featureListData.map((feature: FeatureItemData) => (
            <div
              key={feature.number}
              className="grid grid-cols-1 md:grid-cols-[max-content_1fr] gap-8 md:gap-12 lg:gap-40 items-start"
            >
              {/* 左カラム: 番号 */}
              <div>
                <h2 className={`text-[8rem] lg:text-[12rem] font-bold leading-none tracking-tighter ${feature.numberColor || 'text-gray-300 dark:text-gray-700'}`}>
                  {feature.number}
                </h2>
              </div>
              {/* 右カラム: FeatureCard */}
              <div>
                <FeatureCard
                  title={feature.title}
                  description={feature.description}
                  className="pt-4 md:pt-6 lg:pt-8"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySokutsukuSection;