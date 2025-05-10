import React from 'react';
// topPageData.tsx からデータをインポート
// パスはプロジェクトの構成に合わせて調整してください
import { focusCardItems, topPageTexts, FocusCardItem } from '@/data/topPageData'; // 仮のパス

// Font Awesome アイコンを利用する場合のインポート例
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLightbulb, faFileInvoiceDollar, faChartLine, faUsersCog } from '@fortawesome/free-solid-svg-icons';

// FocusCardコンポーネントのProps型定義
interface FocusCardProps {
  iconPlaceholder: string;
  title: string;
  description: string;
  // icon?: any; // Font Awesomeなどを使用する場合
}

const FocusCard: React.FC<FocusCardProps> = ({ iconPlaceholder, title, description }) => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col">
      <div className="text-4xl mb-4 text-blue-600">
        {/* <FontAwesomeIcon icon={icon} /> */}
        {iconPlaceholder}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600 text-sm flex-grow">{description}</p>
    </div>
  );
};

const FocusCardSection = () => {
  const sectionId = "FocusCard"; // セクションID

  return (
    <section id={sectionId} className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            {topPageTexts.focusCardSectionTitle} {/* データファイルからタイトルを読み込み */}
          </h2>
          {/* サブタイトル内の改行を <br /> に変換して表示 */}
          <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto whitespace-pre-line">
            {topPageTexts.focusCardSectionSubtitle} {/* データファイルからサブタイトルを読み込み */}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {focusCardItems.map((card: FocusCardItem) => ( // 型を指定
            <FocusCard
              key={card.id} // データ内のidをkeyとして使用
              // icon={card.icon} // Font Awesomeなどを使用する場合
              iconPlaceholder={card.iconPlaceholder}
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