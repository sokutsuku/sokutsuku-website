// src/app/contact/page.tsx
"use client";

import React from 'react';
import SectionHeading from '@/components/elements/SectionHeading'; // SectionHeadingをインポート

const ContactPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-gray-100 py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionHeading
          id="contact-page-title"
          tag="h1" // ページタイトルなので h1
          title="About Sokutsuku" // ★ title プロパティに直接文字列を渡す
          align="left"
          className="!text-gray-300"
          description=""
          descriptionClassName="!text-lg text-gray-700" // 説明文のスタイル
        />
      </div>
    </main>
  );
};

export default ContactPage;