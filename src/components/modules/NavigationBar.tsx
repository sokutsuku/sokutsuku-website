"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Button from '@/components/elements/Button';
import { useModal } from '@/contexts/ModalContext';
import { usePathname } from 'next/navigation';
import { headerTopPageScrollLinks } from '@/data/siteNavigationData';

const NavigationBar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openModal } = useModal();
  const pathname = usePathname();

  const currentNavLinks = pathname === '/' ? headerTopPageScrollLinks : [];

  const handleFreeConsultationClick = () => {
    openModal();
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

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
      <nav className="fixed w-full z-40 top-0 left-0 transition-colors duration-300 ease-in-out h-20">
        <div className="max-w-screen-xl mx-auto px-4 h-full">
          <div className="flex items-center justify-between h-full">
            <div className="flex-shrink-0">
              <Link href="/" onClick={closeMobileMenu} className="text-lg font-extrabold hover:text-[#1342F0] transition-colors duration-300 text-gray-900">
                SOKUTSUKU
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-1 lg:space-x-0">
              {currentNavLinks.map((link) => (
                <Button
                  key={link.label}
                  text={link.label}
                  href={link.href}
                  onClick={closeMobileMenu}
                  textSize={14}
                  size="sm"
                  className="mx-1 text-gray-900"
                />
              ))}
            </div>

            <div className="hidden md:block">
              <Button
                text="無料相談する"
                onClick={handleFreeConsultationClick}
                textSize={12}
                size="lg"
                className="ml-4 text-white bg-gray-300 hover:bg-[#1342F0]"
                noAnimation={true}
              />
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMobileMenu}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none relative w-8 h-8 text-gray-900"
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

      <div
        className={`md:hidden fixed inset-0 z-30 transition-transform duration-300 ease-in-out transform ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'} bg-white/10 backdrop-filter backdrop-blur-lg shadow-xl border-t border-gray-200/60`}
        id="mobile-menu"
        onClick={closeMobileMenu}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="px-6 pt-24 pb-12 space-y-6 flex flex-col items-center justify-center min-h-full"
        >
          {currentNavLinks.map((link) => (
            <Button
              key={`mobile-${link.label}`}
              text={link.label}
              href={link.href}
              onClick={closeMobileMenu}
              textSize={20}
              size="lg"
              className="block w-auto text-center text-gray-900 hover:text-indigo-600 py-3"
              noAnimation={true}
            />
          ))}
          <div className="mt-10">
            <Button
              text="無料相談する"
              onClick={handleFreeConsultationClick}
              textSize={14}
              size="lg"
              className="w-auto text-center text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg px-8 py-3"
              noAnimation={true}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavigationBar;