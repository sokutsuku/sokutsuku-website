// src/components/sections/HeroSection.tsx
import React from 'react';
import SectionHeading from '@/components/elements/SectionHeading';

interface HeroSectionProps {
  id?: string;
  mainTitle?: string;
  description?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  mainTitle = "成果にフォーカスした\nウェブサイト制作",
  description = "生成AIをフル活用することで低価格でも戦略性高いウェブサイト構築を実現。",
  id = "hero",
}) => {

  const heroTextColor = "text-gray-900"; // 通常時のテキスト色
  const descriptionTextColor = "text-gray-900"; // 通常時の説明文の色

  // ★ Noto Sans JP を適用するためのTailwindクラス
  const notoFontClass = "font-noto-sans-jp"; // tailwind.config.js または globals.css @theme で定義したクラス名

  return (
    <section
      id={id}
      className={`relative w-full min-h-screen lg:h-[100vh] flex items-center justify-center text-center px-6 py-20 md:py-32`}
    >
      <div className="relative z-10 mx-auto">
        <SectionHeading
            id={`${id}-heading`}
            tag="h1"
            title={mainTitle}
            description={description}
            align="center"
            // ★ className に notoFontClass を追加してタイトルに Noto Sans JP を適用
            className={`!text-[2.5rem] sm:!text-[3rem] md:!text-[4rem] lg:!text-[5rem] !leading-tight mb-6 md:mb-8 ${notoFontClass}`}
            textColor={heroTextColor}
            // ★ descriptionClassName に notoFontClass を追加して説明文に Noto Sans JP を適用
            descriptionClassName={`text-base md:text-lg lg:text-xl ${descriptionTextColor} mx-auto ${notoFontClass}`}
        />
      </div>
    </section>
  );
};

export default HeroSection;