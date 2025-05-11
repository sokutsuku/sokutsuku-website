// src/components/sections/FocusCardSection.tsx (仮のパス)
import React from 'react';
// topPageData.tsx からデータをインポート
import { focusCardItems, topPageTexts, FocusCardItem } from '@/data/topPageData';

// FocusCardコンポーネントのProps型定義
interface FocusCardProps {
  icon: React.ElementType; // ★ iconPlaceholder から icon に変更し、型も更新
  title: string;
  description: string;
}

const FocusCard: React.FC<FocusCardProps> = ({ icon: IconComponent, title, description }) => { // ★ props名を IconComponent に変更して明確化
  return (
    <div className="bg-gray-100 p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col">
      <div className="mb-4 text-[#1342F0]">
        {/* Heroiconコンポーネントをレンダリング。サイズとスタイルはここで調整可能 */}
        <IconComponent className="h-10 w-10" aria-hidden="true" /> {/* ★ サイズを調整 (例: h-10 w-10) */}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600 text-sm flex-grow">{description}</p>
    </div>
  );
};

const FocusCardSection = () => {
  const sectionId = "FocusCard";

  return (
    <section id={sectionId} className="bg-white py-16 md:py-24"> {/* 背景色とパディング調整 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-12 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900">
            {topPageTexts.focusCardSectionTitle}
          </h2>
          <p className="mt-4 text-base md:text-xl text-gray-900 mx-auto whitespace-pre-line">
            {topPageTexts.focusCardSectionSubtitle}
          </p>
        </div>

        {/* gap を調整 (例: gap-6 や gap-8) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {focusCardItems.map((card: FocusCardItem) => (
            <FocusCard
              key={card.id}
              icon={card.icon} // ★ iconプロパティとして渡す
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FocusCardSection;