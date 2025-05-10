// src/components/sections/TimelineSection.tsx
import React from "react";
import SectionHeading from "@/components/elements/SectionHeading";
import TimelineItemCard from "@/components/modules/TimelineItemCard"; // TimelineItemCardのパス
import { timelineStepsData } from "@/data/topPageData"; // データソースのパス

const TimelineSection = () => {
  const sectionId = "timeline";
  // activeStepIndex は現在固定値ですが、将来的には動的に変更することも可能です
  const activeStepIndex = 2;

  return (
    <section
      id={sectionId}
      className="py-24 md:py-32 bg-gray-100 dark:bg-gray-800 relative" // ダークモード対応の背景色を追加
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> {/* レスポンシブなパディングを追加 */}
        <SectionHeading
          id={`${sectionId}-main-heading`}
          title="Timeline"
          align="center"
          textColor="text-gray-900 dark:text-gray-100" // ダークモード対応の文字色
          className="mb-6"
        />
        <p className="text-center text-base md:text-lg text-gray-700 dark:text-gray-300 mb-16 md:mb-20 max-w-2xl mx-auto"> {/* 最大幅と中央寄せを追加 */}
          ヒアリングから公開までの過程
        </p>
        {/* グリッドのgapを調整し、アイテムが均等に配置されるように */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 md:gap-8 justify-center">
          {timelineStepsData.map((step, index) => (
            <TimelineItemCard
              key={`${step.number}-card`}
              number={step.number}
              title={step.title}
              description={step.description}
              numberColor={step.numberColor} // このプロパティを TimelineItemCard が受け取れるようにする
              isActive={index === activeStepIndex}
              // className="min-w-[200px]" // 必要に応じてカードの最小幅などを設定
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
