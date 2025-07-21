'use client'

interface ContactSectionProps {
  onContactClick?: () => void
}

export function ContactSection({ onContactClick }: ContactSectionProps) {
  return (
    <section className="w-full min-h-screen flex items-center justify-center px-4 md:px-8 xl:px-0 py-16 md:py-24 overflow-hidden">
      <div className="text-center w-full max-w-content 2xl:max-w-content-wide">
        <button
          onClick={onContactClick}
          className="text-[56px] sm:text-[60px] md:text-[100px] lg:text-[120px] 2xl:text-[160px] leading-none hero-en font-normal text-foreground hover:text-primary transition-colors duration-300 cursor-pointer whitespace-nowrap"
        >
          CONTACT US ...?
        </button>
      </div>
    </section>
  )
}