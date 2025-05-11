// components/sections/Contact.tsx
"use client"; // モーダルの状態管理のためクライアントコンポーネントにする

import React, { useState } from 'react';
import SectionHeading from '@/components/elements/SectionHeading'; // SectionHeadingのパスを確認してください
import ContactFormModal from '@/components/modules/ContactFormModal'; // 作成したモーダルコンポーネントのパス

const ContactSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // モーダルの開閉状態

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <section id="contact" className="py-24 md:py-32 lg:py-40 h-[100vh] bg-gray-100 flex items-center justify-center">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* SectionHeading全体をインタラクティブにするためのラッパー */}
          <div
            onClick={openModal} // このdivをクリックするとモーダルが開く
            className="inline-block cursor-pointer group" // クリック可能であることを示すカーソルと、ホバーエフェクト用のグループ
            role="button" // roleをbuttonに設定してアクセシビリティを向上
            tabIndex={0} // フォーカス可能にする
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') openModal(); }} // Enterキーやスペースキーでも開けるように
          >
            <SectionHeading
              id="contact-heading"
              title="Contact us...?"
              tag="h2" // 見出しのレベル
              align="center" // 中央揃え
              className="!text-gray-900 group-hover:!text-blue-600 transition-colors duration-300" // ホバー時に色が変わるように
              // description と descriptionClassName は不要なので削除
            />
          </div>
        </div>
      </section>

      {/* モーダルコンポーネントの呼び出し */}
      {/* contact_form_modal_rhf の内容が ContactFormModal にあると仮定 */}
      <ContactFormModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default ContactSection;