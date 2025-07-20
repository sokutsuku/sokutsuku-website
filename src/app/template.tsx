'use client'

import { useEffect, useState } from 'react'

export default function Template({ children }: { children: React.ReactNode }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // ページ読み込み時に body の opacity をリセット
    document.body.style.opacity = '1'
    document.body.style.transition = ''
    
    // ページが読み込まれたらフェードインを開始
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100) // 少し遅延を入れてスムーズに

    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      className={`transition-opacity duration-500 ease-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {children}
    </div>
  )
}