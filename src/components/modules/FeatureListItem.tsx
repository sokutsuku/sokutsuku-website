// src/components/sections/FeatureScrollSection.tsx
"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import React, { useRef } from "react";
import FeatureCard from '@/components/modules/FeatureCard';

export interface FeatureItemData {
    number: string;
    title: string;
    description: string;
    numberColor?: string; // データで使用する場合は型定義に含める
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
    offset: ["start end", "end start"], // このoffsetは必要に応じて調整
  });

  // ★★★ scrollPoints と yTransforms の生成ロジック修正 ★★★
  const scrollPoints: number[] = [0]; // スクロール開始点 0%
  const yTransforms: string[] = ["0%"]; // 開始時のY座標 (00 を表示)

  // itemCount が 0 より大きい場合のみ計算
  if (itemCount > 0) {
    const yStep = 100 / itemCount; // 1項目あたりのY移動ステップ (%)
    for (let i = 1; i <= itemCount; i++) {
      // 各項目に対応するスクロール進行度の区切りを追加 (例: 0.25, 0.5, 0.75, 1.0)
      const progressPoint = i / itemCount;
      scrollPoints.push(progressPoint);

      // その区切りで表示したい番号 (i) に対応するY座標を追加
      // 例: i=1 -> 0%, i=2 -> -25%, i=3 -> -50%, i=4 -> -75%
      const yPercentage = i > 0 ? -((i - 1) * yStep) : 0;
      yTransforms.push(`${yPercentage}%`);
    }
  }
  // これで scrollPoints と yTransforms の要素数は itemCount + 1 で一致する

  // useTransform に渡す前に要素数が一致するか念のため確認 (本番では不要かも)
  // console.log("scrollPoints:", scrollPoints.length, "yTransforms:", yTransforms.length);

  // 安全のため、配列が空でないかつ要素数が一致する場合のみ useTransform を適用
  const y = (scrollPoints.length > 1 && scrollPoints.length === yTransforms.length)
    ? useTransform(scrollYProgress, scrollPoints, yTransforms)
    : useTransform(scrollYProgress, [0, 1], ["0%", "0%"]); // エラー回避用のデフォルト

  return { ref, y };
};


// メインのセクションコンポーネント
const FeatureScrollSection: React.FC<FeatureScrollSectionProps> = ({
    id = "features",
    features = [], // デフォルトを空配列に
    className = "",
}) => {
  // features が空でないことを確認してからフックを呼び出すのがより安全
  const validFeatures = features.filter(f => f); // 簡単なチェック
  const { ref: scrollRef, y: scrollY } = useFeatureScrollAnimation(validFeatures.length);

  // features が空なら animatedNumbers も空にする
  const animatedNumbers = validFeatures.length > 0 ? ["00", ...validFeatures.map(f => f.number)] : [];

  // features が空の場合は何も表示しないか、プレースホルダーを返す
  if (validFeatures.length === 0) {
    // return <div>No features to display.</div>; // 例
    return null; // または何も表示しない
  }

  return (
    <section
      id={id}
      className={`relative px-[5%] py-16 md:py-24 lg:py-28 ${className} overflow-hidden`} // overflow-hidden推奨
      ref={scrollRef}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[max-content_1fr] gap-x-16 lg:gap-x-24 items-start">
          {/* 左: Sticky & Animated Numbers */}
          <div className="sticky top-[30vh] h-[40vh] hidden md:flex md:items-center overflow-hidden">
            <motion.div className="text-left" style={{ y: scrollY }}>
              {animatedNumbers.map((num) => (
                 <h2 key={num} className="text-[10rem] lg:text-[14rem] font-bold leading-none text-gray-200 dark:text-gray-800 tracking-tighter my-2 opacity-50"> {/* スタイル例 */}
                   {num}
                 </h2>
              ))}
            </motion.div>
          </div>

          {/* 右: Scrolling Feature Cards */}
          <div className="flex flex-col divide-y divide-gray-200 dark:divide-gray-700">
            {validFeatures.map((feature, index) => ( // validFeatures を使用
              <FeatureCard
                key={feature.number}
                title={feature.title}
                description={feature.description}
                className={index === 0 ? 'pt-0' : ''}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureScrollSection;