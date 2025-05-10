// components/layout/NavigationBar.tsx
"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Button from '@/components/elements/Button'; // Buttonコンポーネントのパスを確認してください
import { useModal } from '@/contexts/ModalContext'; // ModalContextからフックをインポート

interface NavLinkItem {
  href: string;
  label: string;
}

const navLinks: NavLinkItem[] = [
  { href: '#problem', label: 'Problem' },
  { href: '#solution', label: 'Solution' },
  { href: '#timeline', label: 'timeline' },
  { href: '#pricing', label: 'pricing' },
  { href: '#contact', label: 'contact' },
];

const NavigationBar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openModal } = useModal();
  const menuRef = useRef<HTMLDivElement>(null);

  const handleFreeConsultationClick = () => {
    openModal();
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navbarHeight = 'h-20';

  // グラスモーフィズムスタイル (よりシンプルに、色味をなくす)
  // ナビゲーションバー本体: 透明度を少し上げ、境界線を細く
  const navbarGlassmorphismStyle = 'bg-white/10 backdrop-filter backdrop-blur-md border-b border-white/20';
  // モバイルメニュー: 透明度とぼかしを調整
  const menuGlassmorphismStyle = 'bg-white/30 backdrop-filter backdrop-blur-xl shadow-xl';


  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);


  return (
    <>
      {/* Navigation Bar Area */}
      <nav className={`fixed w-full z-40 top-0 left-0 transition-colors duration-300 ease-in-out ${navbarHeight} ${isMobileMenuOpen ? 'bg-transparent border-transparent' : navbarGlassmorphismStyle}`}>
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="text-xl font-extrabold tracking-tight hover:opacity-80 transition-opacity text-gray-900">
                SOKUTSUKU
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-0">
              {navLinks.map((link) => (
                <Button
                  key={link.label}
                  text={link.label}
                  href={link.href}
                  textSize={14}
                  size="sm"
                  className="mx-1 hover:text-indigo-600 text-gray-900" // 文字色は黒
                  noAnimation={true}
                />
              ))}
            </div>

            {/* Free Consultation Button (Desktop) */}
            <div className="hidden md:block">
              <Button
                text="無料相談"
                onClick={handleFreeConsultationClick}
                textSize={14}
                size="md"
                className="ml-4 text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 shadow-sm" // ボタンのスタイルは維持
                noAnimation={true}
              />
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMobileMenu}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 relative w-8 h-8 text-gray-900 z-50" // 文字色は黒、Xボタンを最前面に
                aria-controls="mobile-menu"
                aria-expanded={isMobileMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                <div className="space-y-1.5">
                  <span
                    className={`block w-6 h-0.5 bg-current transform transition duration-300 ease-in-out ${
                      isMobileMenuOpen ? 'rotate-45 translate-y-1' : ''
                    }`}
                  ></span>
                  <span
                    className={`block w-6 h-0.5 bg-current transform transition duration-300 ease-in-out ${
                      isMobileMenuOpen ? '-rotate-45 -translate-y-1' : ''
                    }`}
                  ></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu (Fullscreen, Slide down from top, Glassmorphism) */}
      <div
        className={`md:hidden fixed inset-0 z-30 transition-transform duration-300 ease-in-out transform ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'} ${menuGlassmorphismStyle}`}
        id="mobile-menu"
        onClick={closeMobileMenu}
      >
        <div
          ref={menuRef}
          onClick={(e) => e.stopPropagation()}
          className={`px-6 pt-24 pb-12 space-y-6 flex flex-col items-center justify-center min-h-full`}
        >
            {navLinks.map((link) => (
              <Button
                key={`mobile-${link.label}`}
                text={link.label}
                href={link.href}
                onClick={closeMobileMenu}
                textSize={20}
                size="lg"
                className="block w-auto text-center text-gray-900 hover:text-indigo-600 py-3" // 文字色は黒
                noAnimation={true}
              />
            ))}
            <div className="mt-10">
              <Button
                text="無料相談"
                onClick={() => {
                  handleFreeConsultationClick();
                  closeMobileMenu();
                }}
                textSize={18}
                size="lg"
                className="w-auto block text-center text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg px-8 py-3" // ボタンのスタイルは維持
                noAnimation={true}
              />
            </div>
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
