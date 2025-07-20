'use client'

import React, { useState } from 'react'
import { cn } from '@/lib/utils'
import { BlurText } from '@/components/common/BlurText'

interface AccordionItemProps {
  question: string
  answer: string
  isOpen?: boolean
  onToggle?: () => void
  delay?: number
}

interface AccordionProps {
  items: {
    question: string
    answer: string
  }[]
  className?: string
}

export function AccordionItem({
  question,
  answer,
  isOpen = false,
  onToggle,
  delay = 0
}: AccordionItemProps) {
  return (
    <div className="border border-neutral-light-300 dark:border-neutral-dark-700 rounded-lg overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full py-6 px-6 text-left flex items-center justify-between hover:bg-neutral-light-50 dark:hover:bg-neutral-dark-850 transition-colors"
      >
        <BlurText
          text={question}
          delay={150}
          animateBy="words"
          direction="top"
          stepDuration={0.4}
          startDelay={delay}
          className="text-base font-bold text-foreground pr-4"
        />
        <div className={cn(
          "flex-shrink-0 w-6 h-6 flex items-center justify-center transition-transform duration-300",
          isOpen && "rotate-180"
        )}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-muted-foreground"
          >
            <path
              d="M4 6L8 10L12 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>
      
      <div className={cn(
        "overflow-hidden transition-all duration-300 ease-in-out",
        isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
      )}>
        <div className="pb-6 px-6">
          <BlurText
            text={answer}
            delay={100}
            animateBy="words"
            direction="top"
            stepDuration={0.3}
            startDelay={isOpen ? 200 : 0}
            className="text-sm md:text-base text-muted-foreground leading-relaxed body-jp"
          />
        </div>
      </div>
    </div>
  )
}

export function Accordion({ items, className }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className={cn("w-full max-w-7xl mx-auto space-y-2", className)}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          onToggle={() => handleToggle(index)}
          delay={index * 100}
        />
      ))}
    </div>
  )
}