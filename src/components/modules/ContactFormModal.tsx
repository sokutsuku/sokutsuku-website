// components/modules/ContactFormModal.tsx
"use client";

import React, { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  company: string; // ★ 修正点: オプショナル (?) を削除
  phone: string;   // ★ 修正点: オプショナル (?) を削除
  email: string;
  message?: string;
}

const ContactFormModal: React.FC<ContactFormModalProps> = ({ isOpen, onClose }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    mode: 'onChange',
    defaultValues: {
      name: '',
      company: '',
      phone: '',
      email: '',
      message: '',
    },
  });

  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      reset();
      setSubmitStatus(null);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, reset]);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setSubmitStatus(null);
    console.log('Form Data Submitted (with RHF):', data);

    // ダミーの送信処理（デモ用）
    await new Promise(resolve => setTimeout(resolve, 1500));
    if (Math.random() > 0.3) {
      setSubmitStatus('success');
      setTimeout(() => {
        onClose();
      }, 2000);
    } else {
      setSubmitStatus('error');
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-500 flex items-center justify-center bg-black/70 backdrop-blur-md p-4 transition-opacity duration-300 ease-in-out"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
    >
      <div
        className="relative w-full max-w-xl transform rounded-xl bg-white dark:bg-gray-800 p-6 md:p-8 shadow-2xl transition-all duration-300 ease-in-out"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 border-b border-gray-200 dark:border-gray-700">
          <h2 id="contact-modal-title" className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white">
            お問い合わせ
          </h2>
          <button
            onClick={onClose}
            className="p-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
            aria-label="閉じる"
            disabled={isSubmitting}
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>

        {submitStatus === 'success' ? (
          <div className="py-10 text-center">
            <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">送信完了</h3>
            <p className="text-gray-600 dark:text-gray-300">お問い合わせありがとうございます。内容を確認後、担当者よりご連絡いたします。</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-5">
            {/* 氏名 */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                氏名 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                {...register('name', { required: '氏名は必須です。' })}
                className={`mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2.5 ${errors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                placeholder="例：山田 太郎"
                disabled={isSubmitting}
                aria-invalid={errors.name ? "true" : "false"}
              />
              {errors.name && <p className="mt-1 text-xs text-red-500 dark:text-red-400">{errors.name.message}</p>}
            </div>

            {/* 会社・屋号名 */}
            <div>
              {/* ★ 修正点: ラベルに必須マーク (*) を追加 */}
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                会社・屋号名 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="company"
                // ★ 修正点: registerに required バリデーションを追加
                {...register('company', { required: '会社名または屋号名は必須です。' })}
                className={`mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2.5 ${errors.company ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                placeholder="例：株式会社〇〇 / △△商店"
                disabled={isSubmitting}
                aria-invalid={errors.company ? "true" : "false"}
              />
              {errors.company && <p className="mt-1 text-xs text-red-500 dark:text-red-400">{errors.company.message}</p>}
            </div>

            {/* 電話番号 */}
            <div>
              {/* ★ 修正点: ラベルに必須マーク (*) を追加 */}
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                電話番号 <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                // ★ 修正点: registerに required バリデーションを追加
                {...register('phone', {
                  required: '電話番号は必須です。',
                  pattern: {
                    value: /^[0-9\-]+$/,
                    message: '有効な電話番号を入力してください。'
                  }
                })}
                className={`mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2.5 ${errors.phone ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                placeholder="例：090-1234-5678"
                disabled={isSubmitting}
                aria-invalid={errors.phone ? "true" : "false"}
              />
              {errors.phone && <p className="mt-1 text-xs text-red-500 dark:text-red-400">{errors.phone.message}</p>}
            </div>

            {/* メールアドレス */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                メールアドレス <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                {...register('email', {
                  required: 'メールアドレスは必須です。',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: '有効なメールアドレスを入力してください。'
                  }
                })}
                className={`mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2.5 ${errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                placeholder="例：your@email.com"
                disabled={isSubmitting}
                aria-invalid={errors.email ? "true" : "false"}
              />
              {errors.email && <p className="mt-1 text-xs text-red-500 dark:text-red-400">{errors.email.message}</p>}
            </div>

            {/* お問い合わせ内容 (任意項目) */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                お問い合わせ内容
              </label>
              <textarea
                id="message"
                rows={5}
                {...register('message')} // 任意なので required はなし
                className={`mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2.5 ${errors.message ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                placeholder="ご質問、ご相談、お見積もりのご依頼など、お気軽にご記入ください。"
                disabled={isSubmitting}
                aria-invalid={errors.message ? "true" : "false"}
              ></textarea>
              {/* messageが任意になったので、エラーメッセージ表示は不要 (または別のバリデーションを追加する場合に表示) */}
              {/* {errors.message && <p className="mt-1 text-xs text-red-500 dark:text-red-400">{errors.message.message}</p>} */}
            </div>

            {submitStatus === 'error' && (
              <p className="text-sm text-red-600 dark:text-red-400">
                送信に失敗しました。お手数ですが、内容をご確認の上もう一度お試しいただくか、しばらく経ってから再度お試しください。
              </p>
            )}

            <div className="pt-3 text-right">
              <button
                type="submit"
                className="inline-flex justify-center rounded-lg border border-transparent bg-indigo-600 px-6 py-2.5 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 disabled:opacity-50"
                disabled={isSubmitting}
              >
                {isSubmitting ? '送信中...' : '上記内容で送信する'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactFormModal;
