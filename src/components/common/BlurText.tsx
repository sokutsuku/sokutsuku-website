'use client'

import { useEffect, useRef, useState, useMemo } from 'react'
import { cn } from '@/lib/utils'

interface BlurTextProps {
  text: string
  delay?: number
  className?: string
  animateBy?: 'words' | 'characters'
  direction?: 'top' | 'bottom'
  threshold?: number
  rootMargin?: string
  onAnimationComplete?: () => void
  stepDuration?: number
  isHTML?: boolean
  startDelay?: number  // 全体の開始遅延
  noWrap?: boolean  // 改行を禁止するオプション
  style?: React.CSSProperties
}

export function BlurText({ 
  text, 
  delay = 150,
  className = '',
  animateBy = 'words',
  direction = 'top',
  threshold = 0.1,
  rootMargin = '0px',
  onAnimationComplete,
  stepDuration = 0.35,
  isHTML = false,
  startDelay = 0,
  noWrap = false,
  style
}: BlurTextProps) {
  const [inView, setInView] = useState(false)
  const [mounted, setMounted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!ref.current || !mounted) return
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.unobserve(ref.current!)
        }
      },
      { threshold, rootMargin }
    )
    
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold, rootMargin, mounted])

  const animationClass = useMemo(() => {
    return direction === 'top' ? 'blur-fade-in-top' : 'blur-fade-in-bottom'
  }, [direction])

  // 通常のテキストの場合は単語/文字分割（HTMLでない場合のみ）
  const elements = !isHTML ? (animateBy === 'words' ? text.split(' ') : text.split('')) : []

  // onAnimationComplete効果を全ケースに対して設定
  useEffect(() => {
    if (inView && onAnimationComplete && mounted && !isHTML) {
      const totalDelay = (elements.length - 1) * delay + stepDuration * 1000
      const timer = setTimeout(onAnimationComplete, totalDelay)
      return () => clearTimeout(timer)
    }
  }, [inView, elements.length, delay, stepDuration, onAnimationComplete, mounted, isHTML])

  // HTMLの場合は特別な処理で単語分割
  if (isHTML && mounted) {
    // シンプルな正規表現で単語分割（HTMLタグも考慮）
    const parseHTMLWords = (htmlText: string) => {
      // HTMLタグ（自閉じタグを含む）と通常のテキストを分離
      const parts = htmlText.split(/(<[^>]+\/?>[^<]*(?:<\/[^>]+>)?|<[^>]+\/>)/g).filter(part => part.trim())
      const words: string[] = []
      
      parts.forEach(part => {
        if (part.startsWith('<')) {
          // HTMLタグ（自閉じタグを含む）の場合はそのまま追加
          words.push(part)
        } else {
          // 通常テキストの場合は単語分割
          const textWords = part.split(' ').filter(word => word.trim())
          words.push(...textWords)
        }
      })
      
      return words
    }
    
    const htmlWords = parseHTMLWords(text)
    
    return (
      <div
        ref={ref}
        className={cn(noWrap ? 'flex flex-nowrap' : 'flex flex-wrap', className)}
        style={style}
      >
        {htmlWords.map((word, index) => (
          <span
            key={index}
            className={cn(
              'inline-block will-change-transform',
              inView ? `${animationClass} opacity-100` : 'opacity-0'
            )}
            style={{
              animationDelay: `${startDelay + index * delay}ms`,
              animationDuration: `${stepDuration}s`,
              animationFillMode: 'forwards',
              marginRight: '0.15em'  // より狭いスペース
            }}
            dangerouslySetInnerHTML={{ __html: word }}
          />
        ))}
      </div>
    )
  }

  // HTMLの場合（未マウント時）
  if (isHTML) {
    return (
      <div className={cn('inline-block', className)} style={{ opacity: 0, visibility: 'hidden', ...style }}>
        <span dangerouslySetInnerHTML={{ __html: text }} />
      </div>
    )
  }


  if (!mounted) {
    return (
      <div className={cn('flex flex-wrap', className)} style={{ opacity: 0, visibility: 'hidden', ...style }}>
        {elements.map((segment, index) => (
          <span key={index} className="inline-block">
            {segment === ' ' ? '\u00A0' : segment}
            {animateBy === 'words' && index < elements.length - 1 && '\u00A0'}
          </span>
        ))}
      </div>
    )
  }

  return (
    <div
      ref={ref}
      className={cn(noWrap ? 'flex flex-nowrap' : 'flex flex-wrap', className)}
      style={style}
    >
      {elements.map((segment, index) => (
        <span
          key={index}
          className={cn(
            'inline-block will-change-transform',
            inView ? `${animationClass} opacity-100` : 'opacity-0'
          )}
          style={{
            animationDelay: `${startDelay + index * delay}ms`,
            animationDuration: `${stepDuration}s`,
            animationFillMode: 'forwards',
            marginRight: animateBy === 'words' ? '0.15em' : '0'
          }}
        >
          {segment === ' ' ? '\u00A0' : segment}
        </span>
      ))}
    </div>
  )
}