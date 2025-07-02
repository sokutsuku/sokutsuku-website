// src/app/page.tsx
'use client';

import React from 'react'; // Reactのインポート
import OrbBackground from '@/components/backgrounds/Orb';
import HeroSection from '@/components/sections/Hero';
import ProblemSection from '@/components/sections/Problem';
import SolutionSection from '@/components/sections/Solution';
import WhySokutsukuSection from '@/components/sections/WhySokutsuku';
import TimelineSection from '@/components/sections/Timeline';
import FocusSection from '@/components/sections/Focus';
import FaqSection from '@/components/sections/Faq'; // FaqSection のインポートパスを確認
import ContactSection from '@/components/sections/Contact';
// import Footer from '@/components/layout/Footer'; // Footerはlayout.tsxで管理

// トップページ用のFAQデータとテキストをtopPageDataからインポート
import { faqItems as topPageFaqItems, topPageFaqTexts } from '@/data/topPageData';

export default function HomePage() {
  return (
    <div className="relative w-screen min-h-screen flex flex-col">
      {/* 背景のOrb */}
      <div className="fixed inset-0 z-[-10] bg-white">
        <OrbBackground
          hoverIntensity={0.5}
          rotateOnHover={true}
          hue={0}
          forceHoverState={false}
        />
      </div>
      <main className="relative z-10 w-full">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <WhySokutsukuSection />
        <TimelineSection />
        <FocusSection />
        {/* ★ FaqSection の呼び出しに headingClassName を追加 */}
        <FaqSection
          id="homepage-faq" // トップページ用のID
          title={topPageFaqTexts.faqSectionTitle} // topPageTextsからタイトルを参照
          items={topPageFaqItems} // トップページ用のFAQデータを渡す
          headingClassName="!text-4xl md:!text-6xl lg:!text-8xl !text-gray-300" // 例: 文字色も指定
        />
        <ContactSection />
      </main>
    </div>
  );
}