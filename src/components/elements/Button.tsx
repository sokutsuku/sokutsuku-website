'use client'; // onClick を使うため Client Component

import React from "react";
import Link from "next/link";

// --- 型定義 ---
// Props で受け付ける具体的な値の型
type TextSizeKey = 8 | 10 | 12 | 14 | 16 | 20 | 24;
type SizeKey = 'sm' | 'md' | 'lg';

// Button コンポーネントの Props の型定義
type ButtonProps = {
  text: string;
  textSize?: TextSizeKey;     // 文字サイズ (個別指定用)
  size?: SizeKey;             // パディングサイズ ('sm', 'md', 'lg')
  href?: string;              // リンク先 URL
  onClick?: (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  noAnimation?: boolean;      // アニメーションを無効にするか (デフォルト: false)
  className?: string;         // 外部から追加する CSS クラス (文字色などもここで指定)
};

// --- マッピング定義 ---
// textSize Props の値に対応する Tailwind クラス
const textSizeClasses: Record<TextSizeKey, string> = {
   8: 'text-[8px]', 10: 'text-[10px]', 12: 'text-xs',
  14: 'text-sm', 16: 'text-base', 20: 'text-xl',
  24: 'text-2xl',
};

// size Props の値に対応する Tailwind パディングクラス
const sizePaddingClasses: Record<SizeKey, string> = {
  sm: 'py-1 px-2', // 上下 4px, 左右 8px
  md: 'py-2 px-4', // 上下 8px, 左右 16px
  lg: 'py-3 px-6', // 上下 12px, 左右 24px
};

// --- コンポーネント本体 ---
export default function Button({
  text,
  textSize = 16,
  size = 'md',
  href,
  onClick,
  noAnimation = false,
  className = '',
}: ButtonProps) {

  // アニメーション用のクラス (noAnimationがtrueなら空文字)
  const animationClasses = noAnimation ? '' : `
    after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5
    after:bg-current after:rounded-full
    after:transition-all after:duration-300 after:ease-[cubic-bezier(0.2,1,0.2,1)]
    hover:after:w-full focus:after:w-full disabled:after:w-0
  `;

  // 基本的なレイアウト、状態、フォーカス等のスタイル
  const baseStyles = `
    flex items-center justify-center /* テキスト中央揃え */
    rounded                         /* 角丸 */
    font-semibold                 /* 文字太さ */
    cursor-pointer                /* カーソル */
    transition-colors duration-300 /* 文字色などの変化を滑らかに */
    focus:outline-none            /* フォーカスアウトライン削除 */
    disabled:opacity-50           /* disabled 時の見た目 */
    disabled:cursor-not-allowed /* disabled 時のカーソル */
    relative                      /* アニメーション有無に関わらず relative を基本にする */
  `;

  // スタイルクラスを全て結合
  const buttonClass = `
    ${baseStyles}
    ${textSizeClasses[textSize]}
    ${sizePaddingClasses[size]}     {/* ← size="md" なら py-2 px-4 (上下8px) が適用 */}
    ${animationClasses}           {/* ← アニメーションクラス (pb-1 は含まない) */}
    ${className}
  `.replace(/\s+/g, ' ').trim();

  // href の有無で Link か button かを決定
  if (href) {
    const isExternal = href.startsWith('http');
    return (
      <Link
        href={href}
        className={buttonClass}
        onClick={onClick}
        {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {text}
      </Link>
    );
  } else {
    return (
      <button
        type="button"
        className={buttonClass}
        onClick={onClick}
      >
        {text}
      </button>
    );
  }
}