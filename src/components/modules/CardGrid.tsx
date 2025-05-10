// src/components/modules/CardGrid.tsx // ← ファイル名と場所を変更推奨
import React from 'react';
import Card, { CardProps } from '@/components/modules/Card';

// CardData の型 (変更なし)
export type CardData = Omit<CardProps, 'isSquare' | 'className'> & { id?: string | number };

// CardGrid が受け取る Props (sectionTitle, sectionDescription を削除)
interface CardGridProps {
  cards: CardData[];
  columns?: string;
  gap?: string;
  isSquareCards?: boolean;
  cardClassName?: string;
  gridClassName?: string; // グリッド div 自体にかけるクラス (任意)
}

// CardGrid コンポーネント: グリッド表示のみ担当
const CardGrid: React.FC<CardGridProps> = ({
  cards,
  columns = 'grid-cols-2 lg:grid-cols-4', // デフォルト値
  gap = 'gap-2',                          // デフォルト値
  isSquareCards = false,
  cardClassName = '',
  gridClassName = '',
}) => {
  // SectionHeading や関連ロジックは削除

  // ★ section や max-width div を削除し、grid div を直接返す
  return (
    <div className={`grid ${columns} ${gap} ${gridClassName}`}>
      {cards.map((card, index) => {
        // カードごとのレスポンシブクラス (変更なし)
        let specialClasses = '';
        if (index === 0 && card.variant === 'accent') { specialClasses += ' hidden lg:block'; }
        if (index === cards.length - 1 && card.variant === 'scroll') { specialClasses += ' col-span-2 lg:col-span-1'; }

        return (
          <Card
            key={card.id ?? `${index}`} // key は card.id があればそれを優先
            {...card}
            isSquare={isSquareCards}
            className={`${cardClassName} ${specialClasses}`}
          />
        );
      })}
    </div>
  );
};

export default CardGrid;