'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { User } from 'lucide-react'
import { Twitter } from 'lucide-react'

interface MemberCardProps {
  name: string
  role: string
  description: string
  image: string
  twitterUrl?: string
  onClick?: () => void
  className?: string
}

export function MemberCard({ 
  name, 
  role, 
  description,
  image,
  twitterUrl,
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
      <p className="text-sm text-muted-foreground ui-en mb-3">
        {role}
      </p>
      
      {/* 自己紹介 */}
      <p className="text-sm text-muted-foreground body-jp leading-relaxed mb-4">
        {description}
      </p>
      
      {/* SNSリンク */}
      {twitterUrl && (
        <div className="flex items-center space-x-2">
          <a 
            href={twitterUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-8 h-8 rounded-full bg-foreground text-background hover:bg-foreground/80 transition-colors duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <Twitter className="w-4 h-4" />
          </a>
        </div>
      )}
    </div>
  )
}