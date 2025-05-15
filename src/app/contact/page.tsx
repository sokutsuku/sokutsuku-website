// src/app/contact/page.tsx
"use client";

import React from 'react';
import SectionHeading from '@/components/elements/SectionHeading';
import ContactForm, { ContactFormData } from '@/components/modules/ContactForm'; // ★ ContactForm をインポート

const ContactPage: React.FC = () => {
  const handleFormSubmitSuccess = (data: ContactFormData) => {
    console.log('Form submitted successfully from ContactPage:', data);
    // ここでページ固有の成功処理（例: アラート表示、別ページへの遷移など）を行う
  };

  const handleFormSubmitError = (errors: any) => {
    console.error('Form submission error from ContactPage:', errors);
    // ここでページ固有のエラー処理を行う
  };

  return (
    <main className="min-h-screen bg-gray-100 py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionHeading
          id="contact-page-title"
          tag="h1"
          title="Contact"
          align="left"
          className="mb-8 !font-bold !text-gray-300"
          description="サービスに関するご質問、お見積もりのご依頼、その他お問い合わせ事項がございましたら、下記のフォームよりお気軽にご連絡ください。"
          descriptionClassName="text-lg text-gray-700"
        />

        {/* ★ ContactForm コンポーネントを配置 */}
        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-xl text-left max-w-lg mx-auto mt-12">
          <ContactForm
            onSubmitSuccess={handleFormSubmitSuccess}
            onSubmitError={handleFormSubmitError}
            // className="your-custom-form-wrapper-class" // 必要なら
          />
        </div>
      </div>
    </main>
  );
};

export default ContactPage;