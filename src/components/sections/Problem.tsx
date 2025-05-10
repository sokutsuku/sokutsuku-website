// src/components/sections/ProblemSection.tsx
import React from 'react';
import SectionHeading from '@/components/elements/SectionHeading'; // 見出しコンポーネント
import CardGrid from '@/components/modules/CardGrid'; // ★ 新しい CardGrid モジュールをインポート
import { problemSectionCards } from '@/data/topPageData'; // データインポート

const ProblemSection = () => {
  const sectionId = "problem";
  const sectionTitle = "Problem"; // このセクション固有のタイトル

  return (
    // ★ セクション全体のラッパー (背景やパディングを設定)
    <section id={sectionId} className="bg-transparent py-24 md:py-32">
      {/* コンテンツの最大幅と中央寄せ */}
      <div className="max-w-7xl mx-auto px-3 lg:px-6">

        {/* ★ 見出しエリア: SectionHeading をここで呼び出す */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <SectionHeading
            id={`${sectionId}-heading`}
            title={sectionTitle}
            align="left" // このセクションでは中央揃え
            textColor="text-gray-900" // 色を指定
          />
          {/* 必要なら説明文 <p> もここに追加 */}
        </div>

        {/* ★ カードグリッドエリア: CardGrid モジュールを呼び出す */}
        <CardGrid
          cards={problemSectionCards} // このセクション用のカードデータを渡す
          // このセクション用のグリッド設定を Props で渡す
          columns="grid-cols-2 lg:grid-cols-4" // Problem セクションは lg で 4列
          gap="gap-2"                         // Problem セクションの溝
          isSquareCards={true}                // Problem セクションは正方形カード
          // cardClassName=""               // カードに共通の追加クラス
          // gridClassName=""               // グリッドに追加するクラス
        />
      </div>
    </section>
  );
};

export default ProblemSection;