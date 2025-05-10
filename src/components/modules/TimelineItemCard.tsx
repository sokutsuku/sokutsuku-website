// src/components/modules/TimelineItemCard.tsx
import React from 'react';

interface TimelineItemCardProps {
  number: string;         // 番号 ("01", "02" など2桁の文字列を想定)
  title: string;
  description: string;
  // numberColor Prop は各桁で色が決まるため削除
  className?: string;
}

const TimelineItemCard: React.FC<TimelineItemCardProps> = ({
  number, // 例: "01"
  title,
  description,
  className = '',
}) => {

  // 番号を1桁目と2桁目に分割 (入力が常に2桁であることを期待)
  const firstDigit = number.length > 0 ? number[0] : '';  // "0"
  const secondDigit = number.length > 1 ? number[1] : ''; // "1"

  return (
    // カード全体: 白背景, 角丸なし, PC高70vh, パディング, Flex縦積み
    <div className={`relative bg-white shadow-sm p-4 lg:h-[75vh] flex flex-col ${className}`}>

        {/* === 上部: 番号表示エリア === */}
        <div className="flex-shrink-0 mb-4">
           {/* ★ 数字の背景 div を削除 */}
           {/* ★ h2 を Flex コンテナにして、中に span を 2つ配置 */}
           <h2 className="flex text-[6rem] md:text-[8rem] lg:text-[10rem] font-bold leading-none tracking-tighter">
             {/* 1桁目 (グレー) */}
             <span className="text-gray-300">{firstDigit}</span>
             {/* 2桁目 (青) */}
             <span className="text-[#1342F0]">{secondDigit}</span>
           </h2>
        </div>

        {/* === 中央: 可変スペース === */}
        <div className="flex-grow"></div>

        {/* === 下部: タイトル & 説明文 === */}
        <div className={`relative lg:h-[14rem] flex flex-col ${className}`}>
          {/* タイトル */}
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {title}
          </h3>
          {/* 説明文 */}
          <p className="text-sm text-gray-600 whitespace-pre-line">
            {description}
          </p>
        </div>
    </div>
  );
};

export default TimelineItemCard;