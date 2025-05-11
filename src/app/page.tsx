// src/app/sandbox/page.tsx (または page.tsx)
'use client';

import NavigationBar from '@/components/modules/NavigationBar';
import OrbBackground from '@/components/backgrounds/Orb';
import HeroSection from '@/components/sections/Hero';
import ProblemSection from '@/components/sections/Problem'; // ★ ProblemSection をインポート
import SolutionSection from '@/components/sections/Solution';
import WhySokutsukuSection from '@/components/sections/WhySokutsuku';
import TimelineSection from '@/components/sections/Timeline';
import PricingSection from '@/components/sections/Pricing';
import FocusSection from '@/components/sections/Focus';
import FaqSection from '@/components/sections/Faq';
import ContactSection from '@/components/sections/Contact';

export default function SandboxPage() { // または TopPage など
  return (
    <div className="relative w-screen min-h-screen flex flex-col">
    <div className="fixed inset-0 z-[-10] bg-white">
      <OrbBackground
        hoverIntensity={0.5}
        rotateOnHover={true}
        hue={0}
        forceHoverState={false}
      />
    </div>

      {/* ナビゲーションバー */}
      <header className="sticky top-0 z-20">
        <NavigationBar />
      </header>

      {/* メインコンテンツ */}
      <main className="relative z-10 w-full">
        {/* ★★★ ProblemSection コンポーネントを呼び出すだけ ★★★ */}
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <WhySokutsukuSection />
        <TimelineSection />
        <PricingSection />
        <FocusSection />
        <FaqSection />
        <ContactSection />
      </main>

    </div>
  );
}
