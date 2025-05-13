// src/components/elements/RotatingText.tsx
import React, {
    forwardRef,
    useCallback,
    useEffect,
    useImperativeHandle,
    useMemo,
    useState,
  } from "react";
  import {
    motion,
    AnimatePresence,
    Transition,
    type VariantLabels,
    type Target,
    type AnimationControls,
    type TargetAndTransition,
  } from "framer-motion";

  function cn(...classes: (string | undefined | null | boolean)[]): string {
    return classes.filter(Boolean).join(" ");
  }

  export interface RotatingTextRef {
    next: () => void;
    previous: () => void;
    jumpTo: (index: number) => void;
    reset: () => void;
  }

  export interface RotatingTextProps
    extends Omit<
      React.ComponentPropsWithoutRef<typeof motion.span>,
      "children" | "transition" | "initial" | "animate" | "exit"
    > {
    texts: string[];
    transition?: Transition; // ★ このトランジション設定がレイアウトアニメーションにも影響
    initial?: boolean | Target | VariantLabels;
    animate?: boolean | VariantLabels | AnimationControls | TargetAndTransition;
    exit?: Target | VariantLabels;
    animatePresenceMode?: "sync" | "wait";
    animatePresenceInitial?: boolean;
    rotationInterval?: number;
    staggerDuration?: number;
    staggerFrom?: "first" | "last" | "center" | "random" | number;
    loop?: boolean;
    auto?: boolean;
    splitBy?: string;
    onNext?: (index: number) => void;
    mainClassName?: string;
    splitLevelClassName?: string;
    elementLevelClassName?: string;
  }

  const RotatingText = forwardRef<RotatingTextRef, RotatingTextProps>(
    (
      {
        texts,
        // ★ デフォルトのトランジション。これが layout アニメーションにも使われる
        transition = { type: "spring", damping: 25, stiffness: 300, mass: 1 },
        initial = { y: "100%", opacity: 0 },
        animate = { y: 0, opacity: 1 },
        exit = { y: "-120%", opacity: 0 },
        animatePresenceMode = "wait",
        animatePresenceInitial = false,
        rotationInterval = 4000, // 前回のtest.tsxに合わせて変更
        staggerDuration = 0,
        staggerFrom = "first",
        loop = true,
        auto = true,
        splitBy = "characters",
        onNext,
        mainClassName,
        splitLevelClassName,
        elementLevelClassName,
        ...rest
      },
      ref
    ) => {
      const [currentTextIndex, setCurrentTextIndex] = useState<number>(0);

      const splitIntoCharacters = (text: string): string[] => {
        if (typeof Intl !== "undefined" && Intl.Segmenter) {
          const segmenter = new Intl.Segmenter("en", { granularity: "grapheme" });
          return Array.from(
            segmenter.segment(text),
            (segment) => segment.segment
          );
        }
        return Array.from(text);
      };

      const elements = useMemo(() => {
        const currentText: string = texts[currentTextIndex];
        if (splitBy === "characters") {
          const words = currentText.split(" ");
          return words.map((word, i) => ({
            characters: splitIntoCharacters(word),
            needsSpace: i !== words.length - 1,
          }));
        }
        if (splitBy === "words") {
          return currentText.split(" ").map((word, i, arr) => ({
            characters: [word],
            needsSpace: i !== arr.length - 1,
          }));
        }
        if (splitBy === "lines") {
          return currentText.split("\n").map((line, i, arr) => ({
            characters: [line],
            needsSpace: i !== arr.length - 1,
          }));
        }

        return currentText.split(splitBy).map((part, i, arr) => ({
          characters: [part],
          needsSpace: i !== arr.length - 1,
        }));
      }, [texts, currentTextIndex, splitBy]);

      const getStaggerDelay = useCallback(
        // ... (変更なし)
        (index: number, totalChars: number): number => {
          const total = totalChars;
          if (staggerFrom === "first") return index * staggerDuration;
          if (staggerFrom === "last")
            return (total - 1 - index) * staggerDuration;
          if (staggerFrom === "center") {
            const center = Math.floor(total / 2);
            return Math.abs(center - index) * staggerDuration;
          }
          if (staggerFrom === "random") {
            const randomIndex = Math.floor(Math.random() * total);
            return Math.abs(randomIndex - index) * staggerDuration;
          }
          return Math.abs((staggerFrom as number) - index) * staggerDuration;
        },
        [staggerFrom, staggerDuration]
      );

      const handleIndexChange = useCallback(
        // ... (変更なし)
        (newIndex: number) => {
          setCurrentTextIndex(newIndex);
          if (onNext) onNext(newIndex);
        },
        [onNext]
      );

      const next = useCallback(
        // ... (変更なし)
        () => {
          const nextIndex =
            currentTextIndex === texts.length - 1
              ? loop
                ? 0
                : currentTextIndex
              : currentTextIndex + 1;
          if (nextIndex !== currentTextIndex) {
            handleIndexChange(nextIndex);
          }
        },
        [currentTextIndex, texts.length, loop, handleIndexChange]
      );

      const previous = useCallback(
        // ... (変更なし)
         () => {
          const prevIndex =
            currentTextIndex === 0
              ? loop
                ? texts.length - 1
                : currentTextIndex
              : currentTextIndex - 1;
          if (prevIndex !== currentTextIndex) {
            handleIndexChange(prevIndex);
          }
        },
        [currentTextIndex, texts.length, loop, handleIndexChange]
      );

      const jumpTo = useCallback(
        // ... (変更なし)
        (index: number) => {
          const validIndex = Math.max(0, Math.min(index, texts.length - 1));
          if (validIndex !== currentTextIndex) {
            handleIndexChange(validIndex);
          }
        },
        [texts.length, currentTextIndex, handleIndexChange]
      );

      const reset = useCallback(
        // ... (変更なし)
        () => {
          if (currentTextIndex !== 0) {
            handleIndexChange(0);
          }
        },
        [currentTextIndex, handleIndexChange]
      );

      useImperativeHandle(
        // ... (変更なし)
        ref,
        () => ({
          next,
          previous,
          jumpTo,
          reset,
        }),
        [next, previous, jumpTo, reset]
      );

      useEffect(() => {
        // ... (変更なし)
        if (!auto) return;
        const intervalId = setInterval(next, rotationInterval);
        return () => clearInterval(intervalId);
      }, [next, rotationInterval, auto]);

      return (
        <motion.span
          className={cn(
            "inline-flex flex-wrap whitespace-pre-wrap relative", // ★ inline-flex を確認
            mainClassName
          )}
          {...rest}
          layout // ★ layout プロパティがキー
          transition={transition} // ★ このトランジションがレイアウト変更にも適用される
        >
          <span className="sr-only">{texts[currentTextIndex]}</span>
          <AnimatePresence
            mode={animatePresenceMode}
            initial={animatePresenceInitial}
            // onExitComplete など、必要に応じて AnimatePresence のコールバックも利用可能
          >
            <motion.div
              key={currentTextIndex} // このキーが変わることで AnimatePresence がアニメーションをトリガー
              className={cn(
                splitBy === "lines"
                  ? "flex flex-col w-full" // "lines" の場合は幅が固定されるので注意
                  : "flex flex-wrap whitespace-pre-wrap relative"
              )}
              // layout // (オプション) この div 自体のレイアウト変更もアニメーションさせたい場合。通常は親の layout で十分。
              aria-hidden="true"
            >
              {elements.map((wordObj, wordIndex, array) => {
                const previousCharsCount = array
                  .slice(0, wordIndex)
                  .reduce((sum, word) => sum + word.characters.length, 0);
                return (
                  <span
                    key={wordIndex}
                    className={cn("inline-flex", splitLevelClassName)}
                  >
                    {wordObj.characters.map((char, charIndex) => (
                      <motion.span
                        key={charIndex}
                        initial={initial}
                        animate={animate}
                        exit={exit}
                        transition={{
                          ...transition, // ★ 各文字の出現アニメーションにも同じ系統のトランジションを適用
                          delay: getStaggerDelay(
                            previousCharsCount + charIndex,
                            array.reduce(
                              (sum, word) => sum + word.characters.length,
                              0
                            )
                          ),
                        }}
                        className={cn("inline-block", elementLevelClassName)}
                      >
                        {char}
                      </motion.span>
                    ))}
                    {wordObj.needsSpace && (
                      <span className="whitespace-pre"> </span>
                    )}
                  </span>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </motion.span>
      );
    }
  );

RotatingText.displayName = "RotatingText";

export default RotatingText;