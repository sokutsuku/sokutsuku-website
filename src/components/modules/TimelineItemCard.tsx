// src/components/modules/TimelineItemCard.tsx
import React from 'react';

interface TimelineItemCardProps {
  number: string;         // 番号 ("01", "02" など2桁の文字列を想定)
  title: string;
  description: string;
  numberColor?: string;  // ★ numberColor プロパティをオプショナルで追加 (Tailwindのクラス名を想定)
  isActive?: boolean;    // isActiveプロパティも追加（TimelineSectionで使われているため）
  className?: string;
}

const TimelineItemCard: React.FC<TimelineItemCardProps> = ({
  number, // 例: "01"
  title,
  description,
  numberColor, // ★ 受け取った numberColor を使用
  isActive,    // ★ 受け取った isActive を使用 (現在はスタイルに直接影響させていませんが、将来的に利用可能)
  className = '',
}) => {

  // 番号を1桁目と2桁目に分割 (入力が常に2桁であることを期待)
  const firstDigit = number.length > 0 ? number[0] : '';  // "0"
  const secondDigit = number.length > 1 ? number[1] : ''; // "1"

  // 数字の色を決定
  // numberColorが指定されていればそれを使い、なければデフォルトの桁ごとの色分け
  const digitOneColorClass = numberColor ? numberColor : 'text-gray-300';
  const digitTwoColorClass = numberColor ? numberColor : 'text-[#1342F0]';

  return (
    // カード全体: isActive状態に応じてスタイルを変更する例も追加
    <div className={`relative bg-white dark:bg-gray-700 shadow-sm p-4 lg:h-[75vh] flex flex-col transition-all duration-300 ease-in-out ${isActive ? 'ring-2 ring-indigo-500 scale-105' : 'ring-1 ring-gray-200 dark:ring-gray-600'} ${className}`}>

        {/* === 上部: 番号表示エリア === */}
        <div className="flex-shrink-0 mb-4">
           <h2 className="flex text-[6rem] md:text-[8rem] lg:text-[10rem] font-bold leading-none tracking-tighter">
             {/* ★ numberColorが指定されていればそれを適用、なければデフォルト */}
             <span className={digitOneColorClass}>{firstDigit}</span>
             <span className={digitTwoColorClass}>{secondDigit}</span>
           </h2>
        </div>

        {/* === 中央: 可変スペース === */}
        <div className="flex-grow"></div>

        {/* === 下部: タイトル & 説明文 === */}
        {/* classNameが重複していたので修正 */}
        <div className={`relative lg:h-[14rem] flex flex-col`}>
          {/* タイトル */}
          <h3 className={`text-xl font-semibold mb-2 ${isActive ? 'text-indigo-700 dark:text-indigo-400' : 'text-gray-900 dark:text-white'}`}>
            {title}
          </h3>
          {/* 説明文 */}
          <p className={`text-sm ${isActive ? 'text-gray-700 dark:text-gray-300' : 'text-gray-600 dark:text-gray-400'} whitespace-pre-line`}>
            {description}
          </p>
        </div>
    </div>
  );
};

export default TimelineItemCard;
