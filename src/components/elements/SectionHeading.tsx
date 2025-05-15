import React from 'react';

// 許容するタグの種類を定義
type HeadingTagType = 'h1' | 'h2' | 'h3';
// 許容する文字揃えの値を定義
type HeadingAlign = 'left' | 'center' | 'right';

// ★ Props を拡張: tag, description, descriptionClassName を追加
interface SectionHeadingProps {
  id: string;
  title: string;
  description?: string | React.ReactNode; // ★ 説明文 (文字列 or React要素、任意)
  tag?: HeadingTagType;                  // ★ 使用する見出しタグ (任意、デフォルト 'h2')
  align?: HeadingAlign;
  textColor?: string;
  className?: string;                     // 見出しタグ (h1/h2/h3) に適用されるクラス
  descriptionClassName?: string;         // ★ 説明文 p タグに適用されるクラス (任意)
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  id,
  title,
  description,                          // ★ description を受け取る
  tag = 'h2',                           // ★ tag を受け取り、デフォルトは 'h2'
  align = 'center',
  textColor,
  className = '',
  descriptionClassName = '',            // ★ descriptionClassName を受け取る
}) => {
  // 文字揃えクラスを決定
  const alignmentClass = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }[align];

  // 見出しの色クラスを決定
  const colorClass = textColor ? textColor : 'text-gray-900 dark:text-white';

  // ★★★ レンダリングするタグを動的に選択 ★★★
  const HeadingTag = tag; // 'h1', 'h2', 'h3' のいずれかが入る

  return (
    <div className={`${alignmentClass}`}>
      <HeadingTag
        id={id}
        className={`text-7xl md:text-9xl lg:text-[12rem] font-extrabold scroll-mt-20 whitespace-pre-line ${colorClass} ${className}`}
      >
        {title}
      </HeadingTag>
      {description && (
        <p className={`mt-4 text-lg text-gray-900 max-w-7xl whitespace-pre-line ${alignmentClass === 'text-center' ? 'mx-auto' : ''} ${descriptionClassName}`}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;