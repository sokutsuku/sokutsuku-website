
import React from 'react';
import { cn } from '@/lib/utils';

interface SplitSectionProps {
  tagline?: string;
  englishCatchCopy?: string;
  japaneseCatchCopy?: string;
  japaneseDescription?: string;
  visualContent?: React.ReactNode; // 画像や動画などのコンテンツ
  reverse?: boolean;
  className?: string;
}

export function SplitSection({
  tagline,
  englishCatchCopy,
  japaneseCatchCopy,
  japaneseDescription,
  visualContent,
  reverse = false,
  className,
}: SplitSectionProps) {
  const processedEnglishCatchCopy = englishCatchCopy?.replace(
    'MORE',
    '<span class="text-primary">MORE</span>'
  );

  const textContent = (
    <div className="space-y-6">
      {tagline && (
        <p className="font-dm-sans text-xs tracking-widest text-muted-foreground">
          {tagline}
        </p>
      )}
      {englishCatchCopy && (
        <h2 className="hero-en text-[120px] leading-none text-foreground">
          <span dangerouslySetInnerHTML={{ __html: processedEnglishCatchCopy || '' }} />
        </h2>
      )}
      {japaneseCatchCopy && (
        <h3 className="font-noto-jp text-2xl font-semibold">
          {japaneseCatchCopy}
        </h3>
      )}
      {japaneseDescription && (
        <p className="font-noto-jp text-base text-muted-foreground">
          {japaneseDescription}
        </p>
      )}
    </div>
  );

  return (
    <section className={cn('w-full py-16 md:py-24', className)}>
      <div className={cn(
        'container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center'
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
