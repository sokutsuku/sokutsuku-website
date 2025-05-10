import React from "react";
import SectionHeading from "@/components/elements/SectionHeading";
import TimelineItemCard from "@/components/modules/TimelineItemCard";
import { timelineStepsData, TimelineStepData } from "@/data/topPageData";

const TimelineSection = () => {
  const sectionId = "timeline";
  const activeStepIndex = 2;

  return (
    <section
      id={sectionId}
      className="py-24 md:py-32 bg-gray-100 relative"
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionHeading
          id={`${sectionId}-main-heading`}
          title="Timeline"
          align="center"
          textColor="text-gray-200"
          className="mb-6"
        />
        <p className="text-center text-base md:text-lg text-gray-600 dark:text-gray-400 mb-16 md:mb-20">
          ヒアリングから公開までの過程
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
          {timelineStepsData.map((step, index) => (
            <TimelineItemCard
              key={`${step.number}-card`}
              number={step.number}
              title={step.title}
              description={step.description}
              numberColor={step.numberColor}
              isActive={index === activeStepIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;