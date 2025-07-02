// components/sections/Contact.tsx
"use client";

import React from 'react'; // useState は不要になるので削除
import SectionHeading from '@/components/elements/SectionHeading';
import { useModal } from '@/contexts/ModalContext'; // useModal をインポート

const ContactSection: React.FC = () => {
  // ModalContextから openModal 関数を取得
  const { openModal } = useModal();

  // モーダルを開く処理は useModal の openModal を使う
  const handleOpenModal = () => {
    openModal();
  };

  return (
    <>
      <section id="contact" className="py-24 md:py-32 lg:py-40 h-[100vh] bg-gray-100 flex items-center justify-center">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div
            onClick={handleOpenModal} // ★ 変更: useModal の openModal を呼び出す
            className="inline-block cursor-pointer group"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleOpenModal(); }} // ★ 変更
          >
            <SectionHeading
              id="contact-heading"
              title="Contact us...?"
              tag="h2"
              align="left"
              className="!text-gray-900 group-hover:!text-blue-600 !text-[3.5rem] md:!text-8xl lg:!text-[9rem] xl:!text-[12rem] transition-colors duration-300"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;