// components/elements/Button.tsx
'use client';

import React from "react";
import Link from "next/link";

type TextSizeKey = 8 | 10 | 12 | 14 | 16 | 20 | 24;
type SizeKey = 'sm' | 'md' | 'lg';

type ButtonProps = {
  text?: string;
  children?: React.ReactNode;
  textSize?: TextSizeKey;
  size?: SizeKey;
  href?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  noAnimation?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  role?: string; // ★ role を明示的に追加
  'aria-label'?: string; // ★ aria-label を明示的に追加 (ケバブケースなのでクォートで囲む)
  // 他にもよく使うaria属性などがあればここに追加
  // [key: string]: any; // ESLintエラーを避けるため、より具体的な型を検討するか、一旦コメントアウト
  // もし本当に任意の属性を許可したい場合は、ESLintルールを部分的に無効化するか、unknown を使う
  [key: string]: unknown; // ★ any の代わりに unknown を使用 (より型安全)
};

const textSizeClasses: Record<TextSizeKey, string> = {
   8: 'text-[8px]', 10: 'text-[10px]', 12: 'text-xs',
  14: 'text-sm', 16: 'text-base', 20: 'text-xl',
  24: 'text-2xl',
};

const sizePaddingClasses: Record<SizeKey, string> = {
  sm: 'py-1 px-2',
  md: 'py-2 px-4',
  lg: 'py-3 px-6',
};

export default function Button({
  text,
  children,
  textSize = 16,
  size = 'md',
  href,
  onClick,
  noAnimation = false,
  className = '',
  type = "button",
  disabled,
  ...rest // role, aria-label などがここに入る
}: ButtonProps) {

  const animationClasses = noAnimation ? '' : `
    after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5
    after:bg-current after:rounded-full
    after:transition-all after:duration-300 after:ease-[cubic-bezier(0.2,1,0.2,1)]
    hover:after:w-full focus:after:w-full disabled:after:w-0
  `;

  const baseStyles = `
    flex items-center justify-center
    rounded
    font-semibold
    cursor-pointer
    transition-colors duration-300
    focus:outline-none
    disabled:opacity-50
    disabled:cursor-not-allowed
    relative
  `;

  const buttonClass = `
    ${baseStyles}
    ${textSizeClasses[textSize]}
    ${sizePaddingClasses[size]}
    ${animationClasses}
    ${className}
  `.replace(/\s+/g, ' ').trim();

  const content = children || text;

  if (href) {
    const isExternal = href.startsWith('http');
    return (
      <Link
        href={href}
        className={buttonClass}
        onClick={onClick}
        {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...rest}
      >
        {content}
      </Link>
    );
  } else {
    return (
      <button
        type={type}
        className={buttonClass}
        onClick={onClick}
        disabled={disabled}
        {...rest}
      >
        {content}
      </button>
    );
  }
}