// src/components/modules/ProblemCard.tsx
import React from 'react';

interface ProblemCardProps {
  icon?: React.ReactNode;
  title?: string;
  content?: string | React.ReactNode;
  backgroundColor?: string;
  hasAccent?: boolean;
  className?: string;
}

const ProblemCard: React.FC<ProblemCardProps> = ({
  icon,
  title,
  content,
  backgroundColor = 'bg-white',
  hasAccent = false,
  className = '',
}) => {
  return (
    // ★ カード全体に aspect-square を追加して正方形にする
    //    パディング (p-6) は内側の要素に移す
    <div
      className={`relative overflow-hidden rounded-lg shadow-sm transition-shadow hover:shadow-md
                 aspect-square ${/* ← 正方形にする */''}
                 ${backgroundColor} ${className}`}
    >
      {/* アクセント帯 */}
      {hasAccent && (
        <div className="absolute left-0 top-0 bottom-0 w-2 bg-blue-500" />
      )}
      <div className={`h-full flex flex-col space-y-3 p-6 ${hasAccent ? 'ml-4' : ''} overflow-auto`}>

        {/* アイコン (サイズ固定、縮まないように) */}
        {icon && (
          <div className="w-8 h-8 text-gray-500 mb-1 flex-shrink-0">
            {icon}
          </div>
        )}

        {/* タイトル (縮まないように) */}
        {title && (
          <h3 className="text-lg font-semibold text-gray-800 flex-shrink-0">
            {title}
          </h3>
        )}

        {/* 内容 (残りのスペースを埋める & スクロール対象) */}
        {content && (
          <div className="text-sm text-gray-600 flex-grow min-h-0">
            {/* ↑ min-h-0 は flex-grow と overflow を組み合わせる際のTips */}
            {content}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProblemCard;