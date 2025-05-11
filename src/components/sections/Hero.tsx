// src/components/sections/HeroSection.tsx
import React from 'react';
import SectionHeading from '@/components/elements/SectionHeading';

interface HeroSectionProps {
  id?: string;
  mainTitle?: string;
  description?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  mainTitle = "売るための\nウェブサイト制作",
  description = "伝えたいことにフォーカスした戦略性の高いウェブサイト構築を生成AIと共に実現。",
  id = "hero",
}) => {

  // グラスモーフィズムの上で見やすい文字色
  const heroTextColor = "text-gray-900";
  const descriptionTextColor = "text-gray-900";

  return (
    // ★★★ section にグラスモーフィズム用のクラスを追加 ★★★
    <section
      id={id}
      // 背景色を削除し、半透明色 + ぼかし + ボーダー を追加
      // シンプルなグラスモーフィズムスタイル
      className={`relative w-full min-h-screen lg:h-[100vh] flex items-center justify-center text-center px-6 py-20 md:py-32`}
    >
      {/* コンテンツラッパー */}
      <div className="relative z-10 mx-auto"> {/* max-w と mx-auto で中央寄せ */}

        {/* SectionHeading: 文字色を調整 */}
        <SectionHeading
            id={`${id}-heading`}
            tag="h1"
            title={mainTitle}
            description={description}
            align="center" // 中央寄せに変更
            className="!text-[2.5rem] sm:!text-[3rem] md:!text-[4rem] lg:!text-[5rem] !leading-tight mb-6 md:mb-8" // サイズ調整とレスポンシブ対応
            textColor={heroTextColor}
            descriptionClassName={`text-base md:text-lg lg:text-xl ${descriptionTextColor} mx-auto`} // サイズ調整と中央寄せ
        />
      </div>
    </section>
  );
};

export default HeroSection;
