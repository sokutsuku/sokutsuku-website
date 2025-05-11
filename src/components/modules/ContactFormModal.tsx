// components/modules/ContactFormModal.tsx
"use client";

import React, { useEffect, useState, useRef } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  company: string;
  phone: string;
  email: string;
  message?: string;
}

const TRANSITION_DURATION_MS = 3000; // CSSのduration-300と合わせる (ms)

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
  const [modalBottomPadding, setModalBottomPadding] = useState(0);
  const modalContentRef = useRef<HTMLDivElement>(null);
  const activeInputRef = useRef<HTMLInputElement | HTMLTextAreaElement | null>(null);

  // モーダルのレンダリング状態とアニメーションクラスを管理
  const [shouldRender, setShouldRender] = useState(false);
  const [overlayOpacityClass, setOverlayOpacityClass] = useState('opacity-0');
  // スマホ: 下からスライドアップ。PC: 中央でフェード＆スケール（初期状態は非表示）
  const [contentTransformClass, setContentTransformClass] = useState('translate-y-full sm:translate-y-0 sm:opacity-0 sm:scale-95');

  useEffect(() => {
    let closingTimer: NodeJS.Timeout;

    if (isOpen) {
      setShouldRender(true); // まずレンダリング
      document.body.style.overflow = 'hidden';
      if (isSubmitting === false && submitStatus === null) { // 送信中や結果表示中でなければリセット
        reset();
      }
      setSubmitStatus(null); // 新規オープン時は送信ステータスをリセット

      // 次のフレームでアニメーションクラスを適用
      requestAnimationFrame(() => {
        setOverlayOpacityClass('opacity-100');
        setContentTransformClass('translate-y-0 sm:translate-y-0 sm:opacity-100 sm:scale-100');
      });
    } else {
      // isOpenがfalseになったら、閉じるアニメーションを開始
      setOverlayOpacityClass('opacity-0');
      setContentTransformClass('translate-y-full sm:translate-y-0 sm:opacity-0 sm:scale-95');

      // アニメーション時間後にコンポーネントをアンマウント
      closingTimer = setTimeout(() => {
        setShouldRender(false);
        document.body.style.overflow = 'unset';
        setModalBottomPadding(0);
      }, TRANSITION_DURATION_MS);
    }

    return () => {
      clearTimeout(closingTimer);
      // ページ遷移などでコンポーネントが予期せずアンマウントされた場合も考慮
      if (document.body.style.overflow === 'hidden' && !isOpen) { // isOpenでない場合のみ解除（他のモーダルが開いている可能性）
         // ただし、このコンポーネントがアンマウントされる＝モーダルは閉じているはずなので、基本的には解除してOK
        document.body.style.overflow = 'unset';
      }
    };
  }, [isOpen, reset, isSubmitting, submitStatus]);


  // Visual Viewport API 関連のuseEffect (キーボード対応)
  useEffect(() => {
    const visualViewport = window.visualViewport;
    if (!visualViewport || !isOpen || !shouldRender) { // shouldRenderも条件に追加
      return;
    }
    const handleViewportResize = () => {
      if (modalContentRef.current && visualViewport) {
        const viewportHeight = visualViewport.height;
        const offsetTop = visualViewport.offsetTop;
        const keyboardHeight = window.innerHeight - viewportHeight - offsetTop;
        if (keyboardHeight > 50) {
          setModalBottomPadding(keyboardHeight);
          if (activeInputRef.current && modalContentRef.current) {
            const inputRect = activeInputRef.current.getBoundingClientRect();
            const modalRect = modalContentRef.current.getBoundingClientRect();
            if (inputRect.bottom > viewportHeight + modalRect.top) {
              const scrollAmount = inputRect.bottom - (viewportHeight + modalRect.top) + 20;
              modalContentRef.current.scrollTop += scrollAmount;
            }
          }
        } else {
          setModalBottomPadding(0);
        }
      }
    };
    // 初期表示時にもキーボード状態をチェックするため、少し遅延させて実行
    const initialCheckTimer = setTimeout(handleViewportResize, 100);
    visualViewport.addEventListener('resize', handleViewportResize);

    return () => {
      clearTimeout(initialCheckTimer);
      if (visualViewport) {
        visualViewport.removeEventListener('resize', handleViewportResize);
      }
      // キーボード対応のクリーンアップ時には modalBottomPadding はリセットしない
      // (モーダルがまだ開いている可能性があるため)
    };
  }, [isOpen, shouldRender]); // shouldRender を依存配列に追加

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    activeInputRef.current = e.target;
    // フォーカス時にもキーボードの高さを再計算してパディングを適用
    if (window.visualViewport) {
       const visualViewport = window.visualViewport;
       const keyboardHeight = window.innerHeight - visualViewport.height - visualViewport.offsetTop;
       if (keyboardHeight > 50) {
         setModalBottomPadding(keyboardHeight);
       }
    }
  };

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setSubmitStatus(null);
    console.log('Form Data Submitted (with RHF):', data);
    await new Promise(resolve => setTimeout(resolve, 1500)); // ダミー送信処理
    if (Math.random() > 0.3) {
      setSubmitStatus('success');
      // 成功したら2秒後にモーダルを閉じる (onCloseが呼ばれ、isOpenがfalseになる)
      setTimeout(() => {
        onClose();
      }, 2000);
    } else {
      setSubmitStatus('error');
    }
  };

  if (!shouldRender) {
    return null; // 実際にDOMから取り除く
  }

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-end sm:items-center justify-center bg-black/70 backdrop-blur-md p-0 sm:p-4
                 transition-opacity duration-300 ease-in-out ${overlayOpacityClass} ${
                   isOpen ? "" : "pointer-events-none" // 閉じている間は操作不可に
                 }`}
      onClick={isOpen ? onClose : undefined} // 開いているときだけ背景クリックで閉じる
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
    >
      <div
        ref={modalContentRef}
        className={`relative w-full max-w-xl h-full sm:h-auto sm:max-h-[90vh]
                   bg-white dark:bg-gray-800 shadow-2xl flex flex-col
                   transition-all duration-300 ease-in-out ${contentTransformClass}
                   md:rounded-xl`} // スマホでは角丸なし、md以上で角丸
        style={{ paddingBottom: `${modalBottomPadding}px` }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* ヘッダー */}
        <div className="flex-shrink-0 flex items-center justify-between p-4 md:p-6 border-b border-gray-200 dark:border-gray-700">
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

        {/* フォームまたは成功メッセージ (コンテンツエリア) */}
        <div className="flex-grow overflow-y-auto p-4 md:p-6">
          {submitStatus === 'success' ? (
            <div className="py-10 text-center">
              <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">送信完了</h3>
              <p className="text-gray-600 dark:text-gray-300">お問い合わせありがとうございます。内容を確認後、担当者よりご連絡いたします。</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* 氏名 */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  氏名 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  {...register('name', { required: '氏名は必須です。' })}
                  onFocus={handleFocus}
                  className={`mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2.5 ${errors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                  placeholder="例：山田 太郎"
                  disabled={isSubmitting}
                  aria-invalid={errors.name ? "true" : "false"}
                />
                {errors.name && <p className="mt-1 text-xs text-red-500 dark:text-red-400">{errors.name.message}</p>}
              </div>

              {/* 会社・屋号名 */}
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  会社・屋号名 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="company"
                  {...register('company', { required: '会社名または屋号名は必須です。' })}
                  onFocus={handleFocus}
                  className={`mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2.5 ${errors.company ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                  placeholder="例：株式会社〇〇 / △△商店"
                  disabled={isSubmitting}
                  aria-invalid={errors.company ? "true" : "false"}
                />
                {errors.company && <p className="mt-1 text-xs text-red-500 dark:text-red-400">{errors.company.message}</p>}
              </div>

              {/* 電話番号 */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  電話番号 <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  {...register('phone', {
                    required: '電話番号は必須です。',
                    pattern: { value: /^[0-9\-]+$/, message: '有効な電話番号を入力してください。'}
                  })}
                  onFocus={handleFocus}
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
                    pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: '有効なメールアドレスを入力してください。'}
                  })}
                  onFocus={handleFocus}
                  className={`mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2.5 ${errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                  placeholder="例：your@email.com"
                  disabled={isSubmitting}
                  aria-invalid={errors.email ? "true" : "false"}
                />
                {errors.email && <p className="mt-1 text-xs text-red-500 dark:text-red-400">{errors.email.message}</p>}
              </div>

              {/* お問い合わせ内容 */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  お問い合わせ内容
                </label>
                <textarea
                  id="message"
                  rows={5}
                  {...register('message')}
                  onFocus={handleFocus}
                  className={`mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2.5 ${errors.message ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                  placeholder="ご質問、ご相談、お見積もりのご依頼など、お気軽にご記入ください。"
                  disabled={isSubmitting}
                  aria-invalid={errors.message ? "true" : "false"}
                ></textarea>
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
    </div>
  );
};

export default ContactFormModal;