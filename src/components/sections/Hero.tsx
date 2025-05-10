// src/components/sections/HeroSection.tsx
import React from 'react';
import SectionHeading from '@/components/elements/SectionHeading';
import Button from '@/components/elements/Button'; // Buttonコンポーネントのパスを確認してください
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

  // グラスモーフィズムの上で見やすい文字色
  const heroTextColor = "text-gray-900"; // 黒色に変更
  const descriptionTextColor = "text-gray-900"; // 黒色に変更

  return (
    // ★★★ section にグラスモーフィズム用のクラスを追加 ★★★
    <section
      id={id}
      // 背景色を削除し、半透明色 + ぼかし + ボーダー を追加
      // シンプルなグラスモーフィズムスタイル
      className={`relative w-full min-h-[80vh] md:min-h-screen lg:h-[100vh] flex items-center justify-center text-center px-6 py-20 md:py-32 bg-white/10 backdrop-filter backdrop-blur-md border border-gray-300/50`}
    >
      {/* コンテンツラッパー */}
      <div className="relative z-10 max-w-3xl mx-auto"> {/* max-w と mx-auto で中央寄せ */}

        {/* SectionHeading: 文字色を調整 */}
        <SectionHeading
            id={`${id}-heading`}
            tag="h1"
            title={mainTitle}
            description={description}
            align="center" // 中央寄せに変更
            className="!text-[2.5rem] sm:!text-[3rem] md:!text-[4rem] lg:!text-[5rem] !leading-tight mb-6 md:mb-8" // サイズ調整とレスポンシブ対応
            textColor={heroTextColor}
            descriptionClassName={`text-base md:text-lg lg:text-xl ${descriptionTextColor} max-w-xl mx-auto`} // サイズ調整と中央寄せ
        />

        {/* CTAボタン: グラスモーフィズム上で見やすいスタイル例 */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 md:mt-10">
          <Button
            text="お問い合わせ"
            // href="/contact" // href を削除し、onClickでモーダルを開くことを想定 (ModalContextを使用)
            // onClick={openModal} // ModalContextから取得したopenModal関数を設定
            size="lg"
            // スタイルを調整: より目立つプライマリボタン風
            className="bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg w-full sm:w-auto"
            // noAnimation={true} // アニメーションはお好みで
           />
          <Button
            text="サービス詳細"
            href="#service" // ページ内リンクの例
            size="lg"
            // 修正点: variantプロパティを削除し、classNameでスタイルを定義
            // セカンダリボタン風のスタイル
            className="bg-white/20 hover:bg-white/30 border border-white/50 text-gray-900 backdrop-blur-sm w-full sm:w-auto"
            // noAnimation={true}
           />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
