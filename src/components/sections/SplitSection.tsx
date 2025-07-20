
import React from 'react';
import { cn } from '@/lib/utils';
import { BlurText } from '@/components/common/BlurText';

interface FlexibleSectionProps {
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
  reverse?: boolean;
  className?: string;
  gap?: 'sm' | 'md' | 'lg';
  verticalAlign?: 'start' | 'center' | 'end';
}

interface LegacySplitSectionProps {
  sectionTitle?: string;
  sectionTitleAlign?: 'left' | 'center' | 'right';
  tagline?: string;
  englishCatchCopy?: string;
  japaneseCatchCopy?: string;
  japaneseDescription?: string;
  visualContent?: React.ReactNode;
  reverse?: boolean;
  className?: string;
  englishCatchCopyFontSizeClass?: string;
  japaneseCatchCopyFontSizeClass?: string;
}

export function FlexibleSection({
  leftContent,
  rightContent,
  reverse = false,
  className,
  gap = 'lg',
  verticalAlign = 'center',
}: FlexibleSectionProps) {
  const gapClasses = {
    sm: 'gap-4 md:gap-6',
    md: 'gap-6 md:gap-8 lg:gap-12',
    lg: 'gap-8 md:gap-12 lg:gap-16',
  };

  const alignClasses = {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end',
  };

  return (
    <section className={cn('w-full min-h-screen flex items-center justify-center px-4 md:px-8 xl:px-0 py-16 md:py-24', className)}>
      <div className={cn(
        'w-full max-w-7xl grid grid-cols-1 md:grid-cols-2',
        gapClasses[gap],
        alignClasses[verticalAlign]
      )}>
        <div className={cn('flex flex-col justify-center', { 'md:order-last': reverse })}>
          {leftContent}
        </div>
        <div className={cn('flex items-center justify-center', { 'md:order-first': reverse })}>
          {rightContent}
        </div>
      </div>
    </section>
  );
}

export function SplitSection({
  sectionTitle,
  sectionTitleAlign = 'left',
  tagline,
  englishCatchCopy,
  japaneseCatchCopy,
  japaneseDescription,
  visualContent,
  reverse = false,
  className,
  englishCatchCopyFontSizeClass,
  japaneseCatchCopyFontSizeClass,
}: LegacySplitSectionProps) {
  const textContent = (
    <div>
      {tagline && (
        <BlurText
          text={tagline}
          delay={200}
          animateBy="words"
          direction="top"
          stepDuration={0.4}
          className="font-dm-sans text-xs md:text-sm tracking-widest text-muted-foreground"
        />
      )}
      {englishCatchCopy && (
        <div className="space-y-1 md:space-y-2">
          {(() => {
            // Handle both \n and <br /> line breaks
            let lines;
            if (englishCatchCopy.includes('<br />')) {
              lines = englishCatchCopy.split('<br />').map(line => line.trim()).filter(line => line);
            } else if (englishCatchCopy.includes('\\n')) {
              // Handle escaped \n characters
              lines = englishCatchCopy.split('\\n').map(line => line.trim()).filter(line => line);
            } else {
              lines = englishCatchCopy.split('\n').map(line => line.trim()).filter(line => line);
            }
            
            return lines.map((line, index) => {
              const processedLine = line.replace(
                'MORE',
                '<span style="color: #14532d;">MORE</span>'
              );
              
              // Calculate delay based on words in previous lines
              const wordsInPreviousLines = lines.slice(0, index).reduce((total, prevLine) => {
                return total + prevLine.split(' ').length
              }, 0);
              
              return (
                <div key={index} className="mb-2">
                  <BlurText
                    text={processedLine}
                    delay={200}
                    animateBy="words"
                    direction="top"
                    isHTML={true}
                    stepDuration={0.6}
                    startDelay={400 + wordsInPreviousLines * 250}
                    noWrap={true}
                    className={cn("hero-en leading-[0.6] text-foreground", englishCatchCopyFontSizeClass || "text-[56px] md:text-[80px] lg:text-[160px]")}
                  />
                </div>
              );
            });
          })()}
        </div>
      )}
      {japaneseCatchCopy && (
        <BlurText
          text={japaneseCatchCopy}
          delay={200}
          animateBy="words"
          direction="top"
          stepDuration={0.5}
          startDelay={800}
          className={cn("font-noto-jp text-[16px] md:text-2xl font-semibold", japaneseCatchCopyFontSizeClass)}
        />
      )}
      {japaneseDescription && (
        <div className="mt-4">
          {japaneseDescription.split('\n').filter(line => line.trim() !== '').map((line, index) => (
            <div key={index} className="mb-1">
              <BlurText
                text={line}
                delay={200}
                animateBy="words"
                direction="top"
                stepDuration={0.4}
                startDelay={1200 + index * 200}
                className="font-noto-jp text-[12px] md:text-base text-muted-foreground"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };

  return (
    <section className={cn('w-full min-h-screen flex flex-col items-center justify-center px-4 md:px-8 xl:px-0 py-16 md:py-24', className)}>
      {/* セクションタイトル（2分割の影響を受けない独立エリア） */}
      {sectionTitle && (
        <div className={cn('w-full max-w-7xl mb-12 md:mb-16', alignClasses[sectionTitleAlign])}>
          <BlurText
            text={sectionTitle}
            delay={100}
            animateBy="words"
            direction="top"
            stepDuration={0.6}
            className={cn(
              "text-[56px] md:text-[80px] lg:text-[120px] leading-none hero-en font-normal",
              sectionTitleAlign === 'center' && 'justify-center',
              sectionTitleAlign === 'right' && 'justify-end',
              sectionTitleAlign === 'left' && 'justify-start'
            )}
            style={{ color: '#14532d' }}
          />
        </div>
      )}

      {/* 2分割コンテンツエリア */}
      <div className={cn(
        'w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center'
      )}>
        <div className={cn('flex flex-col justify-center', { 'md:order-last': reverse })}>
          {textContent}
        </div>
        <div className={cn('flex items-center justify-center', { 'md:order-first': reverse })}>
          {visualContent}
        </div>
      </div>
    </section>
  );
}
