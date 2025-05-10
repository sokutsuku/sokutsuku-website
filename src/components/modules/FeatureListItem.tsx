// src/components/sections/FeatureScrollSection.tsx
"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import React, { useRef } from "react";
import FeatureCard from '@/components/modules/FeatureCard';

export interface FeatureItemData {
    number: string;
    title: string;
    description: string;
    numberColor?: string;
}

interface FeatureScrollSectionProps {
    id?: string;
    features: FeatureItemData[];
    className?: string;
}

// スクロール連動アニメーション用カスタムフック
const useFeatureScrollAnimation = (itemCount: number): {
  ref: React.RefObject<HTMLDivElement | null>;
  y: MotionValue<string>;
} => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // useTransformに渡すための値を準備
  let finalScrollPoints: number[];
  let finalYTransforms: string[];

  if (itemCount > 0) {
    // itemCountが1以上の場合は、提供されたロジックで計算
    finalScrollPoints = [0]; // スクロール開始点 0% (「00」表示用)
    finalYTransforms = ["0%"];  // 開始時のY座標 (「00」表示用)

    const yStep = 100 / itemCount; // 1項目あたりのY移動ステップ (%)

    for (let i = 1; i <= itemCount; i++) {
      // 各項目に対応するスクロール進行度の区切りを追加
      const progressPoint = i / itemCount;
      finalScrollPoints.push(progressPoint);

      // その区切りで表示したい番号に対応するY座標を追加
      // 最初のフィーチャー(i=1)では "00" がまだ表示されているため、Y座標は0%のまま
      // 次のフィーチャー(i=2)から、前の番号分スクロールアップする
      const yPercentage = -((i - 1) * yStep);
      finalYTransforms.push(`${yPercentage}%`);
    }
  } else {
    // itemCountが0の場合のデフォルト値 (useTransformがエラーにならないように)
    finalScrollPoints = [0, 1];
    finalYTransforms = ["0%", "0%"];
  }

  // useTransformを条件分岐の外で一度だけ呼び出す
  const y = useTransform(scrollYProgress, finalScrollPoints, finalYTransforms);

  return { ref, y };
};


// メインのセクションコンポーネント
const FeatureScrollSection: React.FC<FeatureScrollSectionProps> = ({
    id = "features",
    features = [],
    className = "",
}) => {
  const validFeatures = features.filter(f => f); // nullやundefinedを除外 (より堅牢なチェックが望ましい場合あり)
  const { ref: scrollRef, y: scrollY } = useFeatureScrollAnimation(validFeatures.length);

  const animatedNumbers = validFeatures.length > 0 ? ["00", ...validFeatures.map(f => f.number)] : ["00"]; // featuresが空でも "00" は表示

  // validFeaturesが空でもセクション自体は表示する（背景や最小限の構造のため）
  // もし完全に何も表示したくない場合は、ここでnullを返すなどの処理も可能
  // if (validFeatures.length === 0) {
  //   return null;
  // }

  return (
    <section
      id={id}
      className={`relative px-[5%] py-16 md:py-24 lg:py-28 ${className} overflow-hidden`}
      ref={scrollRef}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[max-content_1fr] gap-x-16 lg:gap-x-24 items-start">
          {/* 左: Sticky & Animated Numbers */}
          <div className="sticky top-[30vh] h-[40vh] hidden md:flex md:items-center overflow-hidden">
            <motion.div className="text-left" style={{ y: scrollY }}>
              {animatedNumbers.map((num) => (
                 <h2 key={num} className="text-[10rem] lg:text-[14rem] font-bold leading-none text-gray-200 dark:text-gray-800 tracking-tighter my-2 opacity-50">
                   {num}
                 </h2>
              ))}
            </motion.div>
          </div>

          {/* 右: Scrolling Feature Cards */}
          <div className="flex flex-col divide-y divide-gray-200 dark:divide-gray-700">
            {validFeatures.length > 0 ? (
              validFeatures.map((feature, index) => (
                <FeatureCard
                  key={feature.number || index} // numberがない場合のフォールバックとしてindexを使用
                  title={feature.title}
                  description={feature.description}
                  className={index === 0 ? 'pt-0' : ''} // 最初のカードは上パディングなし
                />
              ))
            ) : (
              // featuresがない場合に表示する内容 (オプション)
              <div className="py-10 text-center text-gray-500">
                フィーチャーがありません。
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureScrollSection;
