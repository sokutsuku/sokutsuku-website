// src/components/sections/TimelineSection.tsx
import React from "react";
import SectionHeading from "@/components/elements/SectionHeading";
import TimelineItemCard from "@/components/modules/TimelineItemCard"; // TimelineItemCardのパス
import { timelineStepsData } from "@/data/topPageData"; // データソースのパス

const TimelineSection: React.FC = () => {
  const sectionId = "timeline";
  // activeStepIndex はデザインに合わせて、現在は特定のステップを強調しないため未使用にします。
  // もし特定のステップを強調したい場合は、この値を調整し、TimelineItemCard側でisActiveに応じたスタイルを適用します。
  // const activeStepIndex = -1; // どのステップもアクティブにしない例

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
          // 修正点: textColorを非常に薄いグレーに (例: text-gray-100 または text-gray-200)
          // ただし、背景が白なので、ある程度の可読性は確保する必要あり。
          // デザインに合わせて調整してください。ここでは text-gray-200 を仮に設定。
          // もし画像のように背景に溶け込ませるなら、より薄い色か、
          // SectionHeadingコンポーネントで背景色とのブレンドを考慮したスタイルが必要になるかもしれません。
          textColor="text-gray-300"
          className="mb-6" // マージンは維持
        />
        <p className="text-center text-base md:text-lg text-gray-700 mb-16 md:mb-20 max-w-2xl mx-auto"> {/* 文字色を濃いグレーに */}
          ヒアリングから公開までの過程
        </p>
        {/* グリッドのgapを調整 */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-x-2 gap-y-2 xl:max-w-7xl justify-center align-center mx-auto">
          {timelineStepsData.map((step, index) => (
            <TimelineItemCard
              key={`${step.number}-card`}
              number={step.number}
              title={step.title}
              description={step.description}
              numberColor={step.numberColor} // データから数字の色を受け取る
              // isActive={index === activeStepIndex} // 現在は特定のステップを強調しない
              // className="min-w-[200px]" // 必要に応じてカードの最小幅などを設定
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
