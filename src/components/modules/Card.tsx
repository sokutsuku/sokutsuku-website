// src/components/modules/Card.tsx
import React from 'react';
import { ArrowDownIcon } from '@heroicons/react/24/outline';

type CardVariant = 'default' | 'accent' | 'placeholder' | 'scroll';

export interface CardProps {
  variant?: CardVariant;
  icon?: React.ReactNode;
  title?: string;
  content?: string | React.ReactNode;
  backgroundColor?: string; // グラスモーフィズム適用時は、この色は直接使われませんが、将来的な拡張のために残します
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
  // --- グラスモーフィズム用のスタイルクラス ---
  // 白をベースにした半透明の背景、背景ぼかし、境界線を設定します。
  // 必要に応じて色味 (例: bg-slate-700/10) やぼかしの強さ (backdrop-blur-sm, backdrop-blur-2xl) を調整してください。
  const glassmorphismClasses = 'bg-white/30 backdrop-blur-xl border border-white/30 shadow-lg';

  // --- 各要素のデフォルト色を定義 (元の状態に戻す) ---
  // グラスモーフィ_ズムの背景では、文字色に一定のコントラストが必要なため、
  // variant による色の変化はtextColor Propで調整することを推奨します。
  // ここでは、可読性を考慮した汎用的な色を設定します。
  let iconColorClass = textColor || 'text-slate-900'; // グラス上のデフォルトアイコン色
  let titleColorClass = textColor || 'text-slate-900';   // グラス上のデフォルトタイトル色
  let contentColorClass = textColor || 'text-slate-900'; // グラス上のデフォルト内容色
  let scrollPromptColorClass = textColor || 'text-slate-900'; // scroll variant の文字/アイコン色

  // --- Variant に応じた色の調整 (グラスモーフィズム用に調整) ---
  // variant による細かい色の変化は、グラスモーフィズムの見た目を損なう可能性があるため、
  // textColor Prop での調整を優先します。
  // ここでは、variant 固有の特別な色の調整は行わず、上記の汎用色を使用します。
  // もし variant ごとにグラスモーフィズムの色調を変えたい場合は、ここや glassmorphismClasses を調整します。

  // --- 4. textColor Prop があれば全て上書き (既存ロジックを尊重) ---
  // 上記のデフォルト色設定で既に textColor を考慮していますが、
  // より明示的に textColor が指定された場合の色を適用します。
  if (textColor) {
    iconColorClass = textColor;
    titleColorClass = textColor;
    contentColorClass = `${textColor} opacity-90`; // 内容は少し透明度を下げてみる例
    scrollPromptColorClass = textColor;
  }


  // --- 5. レイアウト関連のスタイル決定 (変更なし) ---
  let contentAlignment = 'flex-col space-y-3';
  let padding = 'p-6'; // グラスモーフィズムに合わせて少しパディングを増やす例
  const showTextContent = variant === 'default';
  const showScrollPrompt = variant === 'scroll';
  switch (variant) {
    case 'accent':
    case 'placeholder':
      contentAlignment = 'items-center justify-center'; break;
    case 'scroll':
      contentAlignment = 'items-end justify-end'; padding = 'p-4'; break; // scrollは元のpaddingを維持
  }
  const isIconOnlyCenter = icon && !title && !content && variant !== 'scroll';
  if (isIconOnlyCenter && variant !== 'placeholder') {
      contentAlignment = 'items-center justify-center';
  }


  return (
    <div
      className={`relative overflow-hidden rounded-xl transition-all duration-300 ease-in-out
                 ${isSquare && variant !== 'scroll' ? 'aspect-square' : ''}
                 ${glassmorphismClasses} // グラスモーフィズムスタイルを適用
                 ${className}`} // 外部から追加のクラスをマージ
    >
      {/* パディングとレイアウトを適用 */}
      <div className={`h-full flex ${padding} ${contentAlignment} overflow-auto`}>

        {/* アイコン: 指定された色を適用 */}
        {icon && !showScrollPrompt && (
          <div className={`w-8 h-8 ${isIconOnlyCenter ? '' : 'mb-2'} flex-shrink-0 ${iconColorClass}`}>
             {icon}
          </div>
        )}

        {/* タイトルと内容: 指定された色を適用 */}
        {showTextContent && (
          <>
            {title && (
              <h3 className={`text-xl font-semibold flex-shrink-0 ${icon ? 'mt-2' : ''} ${titleColorClass}`}>
                {title}
              </h3>
            )}
            {content && (
              <div className={`text-sm mt-1.5 flex-grow min-h-0 ${contentColorClass}`}>
                {content}
              </div>
            )}
          </>
        )}

         {/* スクロールプロンプト: 指定された色を適用 */}
         {showScrollPrompt && (
           <div className={`flex items-center space-x-2 ${scrollPromptColorClass}`}>
             <span className="text-base">{scrollText}</span>
             <ArrowDownIcon className="w-6 h-6" />
           </div>
         )}
      </div>
    </div>
  );
};

export default Card;
