import React from 'react';
import FocusCardSection from '@/components/modules/FocusCard'; // 正しいパスに修正

const FocusSection = () => {
  const sectionId = "Focus";

  return (
    <>
      <section id={sectionId} className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-3 lg:px-6">
          {/* カスタム見出しエリア */}
          <div className="mb-16 md:mb-20 lg:mb-24">
            <h2 className="text-center font-extrabold leading-none text-7xl md:text-[8rem] lg:text-[12rem]">
              <span className="text-gray-200">Our</span>
              <span className="text-[#1342F0] ml-2">Focus</span>
            </h2>
          </div>
        </div>
        <FocusCardSection />
      </section>
    </>
  );
};

export default FocusSection;
