// src/components/sections/TimelineSection.tsx
import React from "react";
import SectionHeading from "@/components/elements/SectionHeading";
import TimelineItemCard from "@/components/modules/TimelineItemCard"; // TimelineItemCardのパス
import { timelineStepsData } from "@/data/topPageData"; // データソースのパス

const TimelineSection: React.FC = () => {
  const sectionId = "timeline";

  return (
    <section
      id={sectionId}
      className="py-24 md:py-32 bg-gray-100 relative" // 背景を白に統一
    >
      <div className="relative z-10">
        <SectionHeading
          id={`${sectionId}-main-heading`}
          title="Timeline"
          align="center"
          textColor="text-gray-300"
          className="mb-6" // マージンは維持
        />
        <p className="text-center text-base md:text-lg text-gray-700 mb-16 md:mb-20 max-w-2xl mx-auto"> {/* 文字色を濃いグレーに */}
          ヒアリングから公開までの過程
        </p>
        {/* グリッドのgapを調整 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-2 gap-y-2 xl:max-w-7xl justify-center align-center mx-auto">
          {timelineStepsData.map((step) => (
            <TimelineItemCard
              key={`${step.number}-card`}
              number={step.number}
              title={step.title}
              description={step.description}
              numberColor={step.numberColor} // データから数字の色を受け取る
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
