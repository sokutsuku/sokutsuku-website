// src/components/modules/PriceCard.tsx
import React from 'react';
import { CheckIcon } from '@heroicons/react/24/solid';

interface PriceCardProps {
  planName: string;
  price: string;
  priceNote?: string;
  featuresHeader?: string;
  features: string[];
  highlight?: boolean; // ★ 強調表示フラグ
  className?: string;
}

// 背景色が暗いかどうかを判定する簡単なヘルパー関数 (Tailwindクラス名で判定)
// 必要に応じて判定条件 (blue, gray-800 など) を追加・調整してください
const isBgDark = (bgColorClass: string): boolean => {
  return bgColorClass.includes('blue') ||
         bgColorClass.includes('black') ||
         bgColorClass.includes('#1342F0') || // カスタムカラーチェック
         bgColorClass.includes('gray-8') || // gray-800, 900 など
         bgColorClass.includes('gray-9') ||
         bgColorClass.includes('indigo') ||
         bgColorClass.includes('purple');
};

const PriceCard: React.FC<PriceCardProps> = ({
  planName,
  price,
  priceNote,
  featuresHeader = "プラン内容",
  features,
  highlight = false,
  className = 'my-6',
}) => {

  // --- スタイル決定 ---
  const cardBaseStyle = "border rounded-lg p-3 lg:p-4 flex flex-col h-full transition-colors duration-200 ease-in-out"; // h-fullで高さを揃える
  const normalBg = "bg-white";
  const normalBorder = "border-gray-200";
  const highlightBg = "bg-[#1342F0]"; // 強調表示の背景色 (青)
  const highlightBorder = "border-transparent"; // 強調表示時は枠線を目立たなくする

  // highlight 状態に基づいて適用するスタイルを選択
  const effectiveBg = highlight ? highlightBg : normalBg;
  const effectiveBorder = highlight ? highlightBorder : normalBorder;

  // ★ 背景色に基づいて文字色などを自動決定
  const isDark = isBgDark(effectiveBg); // 現在の背景が暗いか判定
  const primaryTextColor = isDark ? 'text-Black' : 'text-gray-900';
  const secondaryTextColor = isDark ? 'text-blue-100' : 'text-gray-500 dark:text-gray-400'; // やや薄い色
  const featureTextColor = isDark ? 'text-blue-50' : 'text-gray-600 dark:text-gray-400'; // 機能リストの色
  const checkIconColor = isDark ? 'text-white' : 'text-[#1342F0]'; // チェックマークの色
  const hrColor = isDark ? 'border-white' : 'border-gray-200 dark:border-gray-700'; // 区切り線の色

  return (
    // 決定したスタイルを適用
    <div className={`${cardBaseStyle} ${effectiveBg} ${effectiveBorder} ${primaryTextColor} ${className}`}>

      {/* 上部: プラン名、価格 */}
      <div className="mb-4 text-left">
        <h3 className={`text-base font-semibold ${primaryTextColor}`}>
          {planName}
        </h3>
        <p className={`text-[2.5rem] lg:text-[3.5rem] font-bold ${primaryTextColor}`}>
          {price}
        </p>
        {priceNote && (
          <p className={`text-base ${secondaryTextColor}`}>
            {priceNote}
          </p>
        )}
      </div>

      {/* 区切り線 */}
      <hr className={`${hrColor} my-4`} />

      {/* 中央: 機能リスト */}
      <div className="flex-grow space-y-3">
        <h4 className={`text-sm font-medium mb-3 ${primaryTextColor}`}>
          {featuresHeader}
        </h4>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start space-x-2">
              <CheckIcon className={`w-5 h-5 ${checkIconColor} flex-shrink-0 mt-0.5`} />
              <span className={`text-sm ${featureTextColor}`}>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PriceCard;