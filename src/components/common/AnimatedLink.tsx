'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

interface AnimatedLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export function AnimatedLink({ href, children, className, onClick }: AnimatedLinkProps) {
  const router = useRouter()
  const [isNavigating, setIsNavigating] = useState(false)

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    
    if (onClick) {
      onClick()
    }

    // 現在のページと同じURLの場合は何もしない
    if (window.location.pathname === href) {
      return
    }

    setIsNavigating(true)
    
    // ページ全体をフェードアウト
    document.body.style.opacity = '0'
    document.body.style.transition = 'opacity 200ms ease-out'
    
    // フェードアウト完了後にページ遷移
    setTimeout(() => {
      router.push(href)
    }, 200)
  }

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  )
}