'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { User } from 'lucide-react'

interface MemberCardProps {
  name: string
  role: string
  image: string
  onClick?: () => void
  className?: string
}

export function MemberCard({ 
  name, 
  role, 
  image, 
  onClick,
  className 
}: MemberCardProps) {
  const [imageError, setImageError] = useState(false)

  return (
    <div 
      className={`text-left cursor-pointer hover:opacity-80 transition-opacity duration-300 ${className}`}
      onClick={onClick}
    >
      {/* 円形画像 */}
      <div className="w-20 h-20 relative mb-4 rounded-full overflow-hidden bg-muted flex items-center justify-center">
        {!imageError ? (
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
            onError={() => setImageError(true)}
          />
        ) : (
          <User className="w-10 h-10 text-muted-foreground" />
        )}
      </div>
      
      {/* 名前 */}
      <h3 className="text-lg font-bold body-jp text-foreground mb-2">
        {name}
      </h3>
      
      {/* 仕事内容 */}
      <p className="text-sm text-muted-foreground ui-en">
        {role}
      </p>
    </div>
  )
}