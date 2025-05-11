// src/components/modules/TimelineItemCard.tsx
import React from 'react';

interface TimelineItemCardProps {
  number: string;
  title: string;
  description: string;
  numberColor?: string;
  className?: string;
}

const TimelineItemCard: React.FC<TimelineItemCardProps> = ({
  number,
  title,
  description,
  className = '',
}) => {
  const firstDigit = number.length > 0 ? number[0] : '';
  const remainingDigits = number.length > 1 ? number.substring(1) : '';

  return (
    <div className={`relative bg-white p-4 flex flex-col lg:h-[80vh] ${className}`}>
      <div className="flex-shrink-0 mb-4">
        <h2 className="text-[6rem] md:text-[7rem] lg:text-[8rem] xl:text-[9rem] font-bold leading-none grid grid-flow-col auto-cols-auto items-center justify-start gap-x-1">
          {/* 1文字目をクリップし、左にずらす */}
          <span
            className="text-gray-300 [clip-path:inset(0_0_0_45%)] -translate-x-[45%]" // JITモードでtranslateXも指定
            // style={{ transform: 'translateX(-45%)' }} // style属性でもOK
          >
            {firstDigit}
          </span>
          {/* 2文字目以降を指定の色で表示 */}
          <span className="text-[#1342F0] -translate-x-[45%]">{remainingDigits}</span>
        </h2>
      </div>
      <div className="flex-grow"></div>
      <div className="flex flex-col lg:h-[25vh]">
        <h3 className="lg:text-base xl:text-xl text-gray-900 mb-2">
          {title}
        </h3>
        <p className="text-sm xl:text-base text-gray-600 whitespace-pre-line leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default TimelineItemCard;