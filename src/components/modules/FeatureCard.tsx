// src/components/modules/FeatureCard.tsx
import React from 'react';

// ★ tagline Prop を追加
interface FeatureCardProps {
  tagline?: string;       // カードタイトル/タグライン (任意)
  title?: string;         // メインタイトル (必須)
  description: string;   // 説明文 (必須)
  className?: string;    // 追加のクラス (任意)
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  tagline, // ★ tagline を受け取る
  title,
  description,
  className = '',
}) => {
  return (
    <div className={className}>
      {/* 区切り線 */}
      <div className="mb-4 h-px w-16 bg-gray-300 dark:bg-gray-700"></div>

      {/* ★★★ カードタイトル (Tagline) を追加 ★★★ */}
      {tagline && ( // tagline が指定されている場合のみ表示
        <p className="mb-1 text-sm font-semibold text-gray-500 dark:text-gray-400 tracking-wide uppercase">
          {/* ↑ スタイルはお好みで調整 (例: 小さめ、少し太字、グレー、上ケース、字間広め) */}
          {/* mb-1 で下のメインタイトルとの間隔を少し空ける */}
          {tagline}
        </p>
      )}

      {/* メインタイトル (h3) */}
      {/* ★ 上に tagline が入るので、mb-2 から mb-1 or mb-2 のままか調整 */}
      <h3 className="text-xl md:text-4xl font-semibold text-gray-900 mb-2">
        {title}
      </h3>

      {/* 説明文 (p) */}
      <p className="text-base text-gray-600 dark:text-gray-400">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;