'use client'

import React from 'react'
import Image from 'next/image'
import { useTheme } from '@/components/ThemeProvider'
import { cn } from '@/lib/utils'

interface ThemeImageProps {
  lightSrc: string
  darkSrc: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
}

export function ThemeImage({
  lightSrc,
  darkSrc,
  alt,
  width,
  height,
  className,
  priority = false
}: ThemeImageProps) {
  const { theme } = useTheme()
  
  // テーマに応じて画像を選択
  const imageSrc = theme === 'dark' ? darkSrc : lightSrc

  return (
    <div className={cn('relative overflow-hidden', className)}>
      <Image
        src={imageSrc}
        alt={alt}
        width={width}
        height={height}
        className="transition-opacity duration-300 ease-in-out w-full h-auto relative z-0"
        priority={priority}
      />
    </div>
  )
}