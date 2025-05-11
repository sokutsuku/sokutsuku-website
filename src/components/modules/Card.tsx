// src/components/modules/Card.tsx
import React from 'react';
import { ArrowDownIcon } from '@heroicons/react/24/outline';

type CardVariant = 'default' | 'accent' | 'placeholder' | 'scroll';

export interface CardProps {
  variant?: CardVariant;
  icon?: React.ReactNode;
  title?: string;
  content?: string | React.ReactNode;
  textColor?: string;
  scrollText?: string;
  className?: string;
  isSquare?: boolean;
}

const Card: React.FC<CardProps> = ({
  variant = 'default',
  icon,
  title,
  content,
  textColor,
  scrollText = 'scroll...',
  className = '',
  isSquare = false,
}) => {
  // --- グラスモーフィズム用のスタイルクラスを variant に応じて決定 ---
  let glassmorphismBaseClasses = '';
  switch (variant) {
    case 'accent':
    case 'scroll':
      // accent と scroll の時は #1342F0 ベースのグラスモーフィズム
      // Tailwind JITモードでは任意の値を使えるので、bg-[#1342F0]/30 のように指定
      glassmorphismBaseClasses = 'bg-[#1342F0]/60 backdrop-blur-xl border border-[#1342F0]/30 shadow-lg';
      // 透明度を少し調整 (例: bg-[#1342F0]/20) して、色が強くなりすぎないようにするのも良いでしょう。
      // ボーダーの色もベースカラーに合わせるか、白系のままにするかデザインによります。ここではベースカラーに合わせています。
      break;
    default:
      // それ以外の時は白ベースのグラスモーフィズム
      glassmorphismBaseClasses = 'bg-white/30 backdrop-blur-xl border border-white/30 shadow-lg';
      break;
  }

  // --- 各要素のデフォルト色を定義 ---
  // textColor prop が指定されていればそれを優先する
  // ベースのグラスモーフィズムの色が変わるため、デフォルトのテキスト色もvariantに応じて調整することを検討できます。
  // ここでは、textColor propがなければ、variantに応じて基本的なコントラストを考慮した色を設定します。

  let defaultIconColor = 'text-slate-900';
  let defaultTitleColor = 'text-slate-900';
  let defaultContentColor = 'text-slate-900';
  let defaultScrollPromptColor = 'text-slate-900';

  if (variant === 'accent' || variant === 'scroll') {
    // 青ベースのグラスモーフィズムの場合、明るい色のテキストをデフォルトにする
    defaultIconColor = 'text-white';
    defaultTitleColor = 'text-white';
    defaultContentColor = 'text-white/90'; // 少し透明度を持たせる
    defaultScrollPromptColor = 'text-white';
  }

  const iconColorClass = textColor || defaultIconColor;
  const titleColorClass = textColor || defaultTitleColor;
  const contentColorClass = textColor || defaultContentColor;
  const scrollPromptColorClass = textColor || defaultScrollPromptColor;


  // --- レイアウト関連のスタイル決定 ---
  let contentAlignment = 'flex-col space-y-3';
  let padding = 'p-4';
  const showTextContent = variant === 'default';
  const showScrollPrompt = variant === 'scroll';
  switch (variant) {
    case 'accent':
    case 'placeholder':
      contentAlignment = 'items-center justify-center'; break;
    case 'scroll':
      contentAlignment = 'items-end justify-end'; padding = 'p-4'; break;
  }
  const isIconOnlyCenter = icon && !title && !content && variant !== 'scroll';
  if (isIconOnlyCenter && variant !== 'placeholder') {
      contentAlignment = 'items-center justify-center';
  }


  return (
    <div
      className={`relative overflow-hidden rounded-xl transition-all duration-300 ease-in-out
                 ${isSquare && variant !== 'scroll' ? 'aspect-square' : ''}
                 ${glassmorphismBaseClasses} // ★ 動的に生成されたグラスモーフィズムスタイルを適用
                 ${className}`}
    >
      <div className={`h-full flex ${padding} ${contentAlignment} overflow-auto`}>
        {icon && !showScrollPrompt && (
          <div className={`w-8 h-8 ${isIconOnlyCenter ? '' : 'mb-2'} flex-shrink-0 ${iconColorClass}`}>
             {icon}
          </div>
        )}
        {showTextContent && (
          <>
            {title && (
              <h3 className={`text-xl font-semibold flex-shrink-0 ${icon ? 'mt-1' : ''} ${titleColorClass}`}>
                {title}
              </h3>
            )}
            {content && (
              <div className={`text-sm mt-1 flex-grow min-h-0 ${contentColorClass}`}>
                {content}
              </div>
            )}
          </>
        )}
         {showScrollPrompt && (
           <div className={`flex items-center space-x-2 ${scrollPromptColorClass}`}>
             <span className="text-lg">{scrollText}</span>
             <ArrowDownIcon className="w-6 h-6" />
           </div>
         )}
      </div>
    </div>
  );
};

export default Card;