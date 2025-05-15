// src/app/contact/page.tsx (またはフォームを含むコンポーネント)
"use client";

import React, { useState } from 'react';
import { useForm, SubmitHandler, FieldError } from 'react-hook-form';
import SectionHeading from '@/components/elements/SectionHeading';
import InputField from '@/components/elements/InputField';
import TextareaField from '@/components/elements/TextareaField';
import Button from '@/components/elements/Button';

// フォームデータの型定義を修正
interface ContactFormData {
  lastName: string;  // ★ 姓
  firstName: string; // ★ 名
  company: string;
  phone: string;
  email: string;
  message?: string;
}

const ContactPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    mode: 'onChange',
    defaultValues: { // ★ defaultValues を修正
      lastName: '',
      firstName: '',
      company: '',
      phone: '',
      email: '',
      message: '',
    },
  });

  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
    setSubmitStatus(null);
    // ★ 送信データには lastName と firstName が含まれる
    console.log('Contact Page Form Data:', data);

    // ... (ダミー送信処理など) ...
    await new Promise(resolve => setTimeout(resolve, 1500));
    if (Math.random() > 0.3) {
      setSubmitStatus('success');
      reset();
    } else {
      setSubmitStatus('error');
    }
  };

  // const handleInputFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => { /* ... */ };

  return (
    <main className="min-h-screen bg-gray-100 py-16 md:py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionHeading
          id="contact-page-title"
          tag="h1"
          title="お問い合わせ"
          align="center"
          className="mb-8 !text-4xl md:!text-5xl !font-bold text-gray-800"
          description="サービスに関するご質問、お見積もりのご依頼、その他お問い合わせ事項がございましたら、下記のフォームよりお気軽にご連絡ください。"
          descriptionClassName="text-lg text-gray-700"
        />

        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-xl text-left max-w-lg mx-auto mt-12">
          {submitStatus === 'success' ? (
            // ... (成功メッセージ) ...
            <div className="text-center py-8">
              <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">送信完了</h3>
              <p className="text-gray-600">お問い合わせありがとうございます。内容を確認後、担当者よりご連絡いたします。</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-0">
              {/* ★★★ 氏名入力部分の変更 ★★★ */}
              {/* 姓と名を横並びにするためのラッパー (オプション) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-4">
                <InputField
                  label="姓"
                  name="lastName" // htmlForとidに使われる
                  register={register('lastName', { required: '姓は必須です。' })}
                  error={errors.lastName}
                  isRequired={true}
                  placeholder="例：山田"
                  disabled={isSubmitting}
                  // onFocusCapture={handleInputFocus}
                  autoComplete="family-name" // autoComplete属性も適切に
                  containerClassName="mb-5 sm:mb-0" // スマホでは下にマージン、sm以上ではなし (親divで制御するため)
                />
                <InputField
                  label="名"
                  name="firstName" // htmlForとidに使われる
                  register={register('firstName', { required: '名は必須です。' })}
                  error={errors.firstName}
                  isRequired={true}
                  placeholder="例：太郎"
                  disabled={isSubmitting}
                  // onFocusCapture={handleInputFocus}
                  autoComplete="given-name" // autoComplete属性も適切に
                  containerClassName="mb-5" // 通常のマージン
                />
              </div>
              {/* ★★★ ここまでが氏名入力部分の変更 ★★★ */}

              <InputField
                label="会社・屋号名"
                name="company"
                register={register('company', { required: '会社・屋号名は必須です。' })}
                error={errors.company}
                isRequired={true}
                placeholder="例：株式会社〇〇"
                disabled={isSubmitting}
                // onFocusCapture={handleInputFocus}
                autoComplete="organization"
              />
              <InputField
                label="電話番号"
                name="phone"
                type="tel"
                register={register('phone', {
                  required: '電話番号は必須です。',
                  pattern: { value: /^[0-9\-+() ]+$/, message: '有効な電話番号を入力してください。'}
                })}
                error={errors.phone}
                isRequired={true}
                placeholder="例：090-1234-5678"
                disabled={isSubmitting}
                // onFocusCapture={handleInputFocus}
                autoComplete="tel"
              />
              <InputField
                label="メールアドレス"
                name="email"
                type="email"
                register={register('email', {
                  required: 'メールアドレスは必須です。',
                  pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: '有効なメールアドレスを入力してください。'}
                })}
                error={errors.email}
                isRequired={true}
                placeholder="例：your@email.com"
                disabled={isSubmitting}
                // onFocusCapture={handleInputFocus}
                autoComplete="email"
              />
              <TextareaField
                label="お問い合わせ内容"
                name="message"
                register={register('message', { maxLength: { value: 1000, message: '1000文字以内でご入力ください。'} })}
                error={errors.message}
                placeholder="ご質問、ご相談などお気軽にご記入ください。"
                disabled={isSubmitting}
                // onFocusCapture={handleInputFocus}
                rows={5}
              />

              {submitStatus === 'error' && (
                <p className="mt-4 text-sm text-red-600">
                  送信に失敗しました。お手数ですが、再度お試しください。
                </p>
              )}

              <div className="pt-5 text-right">
                <Button
                  type="submit"
                  text={isSubmitting ? '送信中...' : '上記内容で送信する'}
                  disabled={isSubmitting}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white"
                  size="lg"
                />
              </div>
            </form>
          )}
        </div>
      </div>
    </main>
  );
};

export default ContactPage;