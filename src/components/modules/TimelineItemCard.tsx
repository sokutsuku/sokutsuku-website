// src/components/modules/TimelineItemCard.tsx
import React from 'react';

interface TimelineItemCardProps {
  number: string;         // 番号 ("01", "02" など2桁の文字列を想定)
  title: string;
  description: string;
  numberColor?: string;  // 数字全体の色を指定 (Tailwindのクラス名を想定)
  // isActive?: boolean;    // 現在はスタイルに直接影響させませんが、将来的な拡張のため残します
  className?: string;
}

const TimelineItemCard: React.FC<TimelineItemCardProps> = ({
  number,
  title,
  description,
  numberColor, // データから渡される色
  // isActive,    // 将来的にアクティブなステップを強調する場合に使用
  className = '',
}) => {

  // 数字の色を決定
  // numberColorが指定されていればそれを使い、なければデフォルトのグレー
  const effectiveNumberColor = numberColor || 'text-gray-300';

  return (
    // カード全体: 白背景、影、パディング、Flex縦積み
    <div className={`relative bg-white p-4 flex flex-col lg:h-[80vh] ${className}`}>

        {/* === 上部: 番号表示エリア === */}
        <div className="flex-shrink-0 mb-4">
           {/* 数字全体に effectiveNumberColor を適用 */}
           <h2 className={`text-[6rem] md:text-[7rem] lg:text-[8rem] xl:text-[9rem] font-bold leading-none tracking-tighter ${effectiveNumberColor}`}>
             {number} {/* 数字をそのまま表示 */}
           </h2>
        </div>

        {/* === 中央: 可変スペース (修正点: 再度追加) === */}
        <div className="flex-grow"></div>

        {/* === 下部: タイトル & 説明文 === */}
        <div className="flex flex-col">
          {/* タイトル */}
          <h3 className="lg:text-base xl:text-xl text-gray-900 mb-2">
            {title}
          </h3>
          {/* 説明文 */}
          <p className="text-sm xl:text-base text-gray-600 whitespace-pre-line leading-relaxed">
            {description}
          </p>
        </div>
    </div>
  );
};

export default TimelineItemCard;
