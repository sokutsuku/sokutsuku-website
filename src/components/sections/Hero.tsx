// src/components/sections/HeroSection.tsx
import React from 'react';
import SectionHeading from '@/components/elements/SectionHeading';
import Button from '@/components/elements/Button';
// 背景コンポーネントを使う場合はインポート
// import BalatroBackground from '@/components/backgrounds/BalatroBackground';

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

  // グラスモーフィズムの上で見やすい文字色 (例: 白)
  const heroTextColor = "text-gray-900";
  const descriptionTextColor = "text-gray-900"; // 少しだけ薄い白系

  return (
    // ★★★ section にグラスモーフィズム用のクラスを追加 ★★★
    <section
      id={id}
      // 背景色を削除し、半透明色 + ぼかし + ボーダー を追加
      className={`relative w-[100vw] min-h-[80vh] md:min-h-screen lg:h-[100vh] flex items-center text-center px-6 py-20 md:py-32`}>

      {/* コンテンツラッパー */}
      <div className="relative z-10">

        {/* SectionHeading: 文字色を調整 */}
        <SectionHeading
            id={`${id}-heading`}
            tag="h1"
            title={mainTitle}
            description={description}
            align="left"
            className="!text-[2.5rem] md:!text-[5rem] lg:!text-[7rem] !leading-tight mb-6" // サイズ調整
            // ★ 文字色を指定
            textColor={heroTextColor}
            // ★ 説明文の文字色を指定
            descriptionClassName={`text-[1rem] ${descriptionTextColor}`}
        />

        {/* CTAボタン: グラスモーフィズム上で見やすいスタイル例 */}
        <div className="flex flex-wrap justify-center gap-4 mt-8 md:mt-10">
          <Button
            text="お問い合わせ"
            href="/contact"
            size="lg"
            // 例: 半透明白背景＋白文字 or 別の目立つ色
            className="bg-white/20 hover:bg-white/30 border border-white/30 text-white backdrop-blur-sm"
           />
          <Button
            text="サービス詳細"
            href="#service"
            size="lg"
            variant="secondary" // secondary スタイルがグラス上でどう見えるか確認
            className="bg-transparent hover:bg-white/10 border border-white text-white"
           />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;