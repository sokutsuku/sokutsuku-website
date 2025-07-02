// src/components/modules/ContactForm.tsx
"use client";

import React, { useState } from 'react';
// ★ FieldErrors と UseFormReturn をインポート
import { useForm, SubmitHandler, FieldErrors, UseFormReturn } from 'react-hook-form';
import InputField from '@/components/elements/InputField';
import TextareaField from '@/components/elements/TextareaField';
import Button from '@/components/elements/Button';

export interface ContactFormData {
  lastName: string;
  firstName: string;
  company: string;
  phone: string;
  email: string;
  message?: string;
}

interface ContactFormProps {
  onSubmitSuccess?: (data: ContactFormData) => void;
  // ★ onSubmitError の引数の型を FieldErrors<ContactFormData> に修正
  onSubmitError?: (errors: FieldErrors<ContactFormData>) => void;
  className?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({
  onSubmitSuccess,
  onSubmitError, // ★ この onSubmitError はバリデーションエラー時に呼ばれる
  className = '',
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  }: UseFormReturn<ContactFormData> = useForm<ContactFormData>({ // ★ UseFormReturn<ContactFormData> を明示
    mode: 'onChange',
    defaultValues: {
      lastName: '',
      firstName: '',
      company: '',
      phone: '',
      email: '',
      message: '',
    },
  });

  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const processForm: SubmitHandler<ContactFormData> = async (data) => {
    setSubmitStatus(null);
    console.log('Contact Form Submitted Data:', data);

    // ダミーのAPI送信処理
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      if (Math.random() > 0.3) { // 成功したと仮定
        setSubmitStatus('success');
        reset();
        if (onSubmitSuccess) onSubmitSuccess(data);
      } else { // API送信自体が失敗したと仮定
        throw new Error("Simulated API submission failure");
      }
    } catch (error) {
      console.error('Form submission error (API level):', error);
      setSubmitStatus('error');
      if (onSubmitError) {
        onSubmitError({} as FieldErrors<ContactFormData>); // API送信失敗を示す (空のエラーオブジェクトなど)
      }
    }
  };

  const onValidationErrors = (validationErrors: FieldErrors<ContactFormData>) => {
    console.log("Form validation errors:", validationErrors);
    setSubmitStatus(null); // 送信試行はしたがバリデーションで失敗した
    if (onSubmitError) {
      onSubmitError(validationErrors); // ページ側のエラーハンドラにRHFのエラーを渡す
    }
  };


  if (submitStatus === 'success') {
    return (
      <div className="text-center py-8">
        <svg className="w-16 h-16 text-green-500 mx-auto mb-4" /* ... */ >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">送信完了</h3>
        <p className="text-gray-600">お問い合わせありがとうございます。内容を確認後、担当者よりご連絡いたします。</p>
      </div>
    );
  }

  return (
    // ★ handleSubmit の第2引数にバリデーションエラー時のハンドラ onValidationErrors を渡す
    <form onSubmit={handleSubmit(processForm, onValidationErrors)} className={`space-y-0 ${className}`}>
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-4">
        <InputField
          label="姓"
          name="lastName"
          register={register('lastName', { required: '姓は必須です。' })}
          error={errors.lastName}
          isRequired={true}
          placeholder="例：山田"
          disabled={isSubmitting}
          autoComplete="family-name"
          containerClassName="mb-5 sm:mb-0"
        />
        <InputField
          label="名"
          name="firstName"
          register={register('firstName', { required: '名は必須です。' })}
          error={errors.firstName}
          isRequired={true}
          placeholder="例：太郎"
          disabled={isSubmitting}
          autoComplete="given-name"
          containerClassName="mb-5"
        />
      </div>

      <InputField
        label="会社・屋号名"
        name="company"
        register={register('company', { required: '会社・屋号名は必須です。' })}
        error={errors.company}
        isRequired={true}
        placeholder="例：株式会社〇〇"
        disabled={isSubmitting}
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
        autoComplete="email"
      />
      <TextareaField
        label="お問い合わせ内容"
        name="message"
        register={register('message', { maxLength: { value: 1000, message: '1000文字以内でご入力ください。'} })}
        error={errors.message}
        placeholder="ご質問、ご相談などお気軽にご記入ください。"
        disabled={isSubmitting}
        rows={5}
      />

      {submitStatus === 'error' && ( // ★ このエラーは主にAPI送信失敗時のもの
        <p className="mt-4 text-sm text-red-600">
          送信に失敗しました。お手数ですが、内容をご確認の上もう一度お試しいただくか、しばらく経ってから再度お試しください。
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
  );
};

export default ContactForm;