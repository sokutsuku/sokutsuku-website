// src/components/elements/InputField.tsx
"use client";

import React from 'react';
import { UseFormRegisterReturn, FieldError } from 'react-hook-form';
import FormField from './FormField'; // ★ FormFieldをインポート

// InputFieldコンポーネントのProps型定義
// FormFieldに渡すprops (labelClassName, errorClassName, containerClassName) は
// FormField側で受け取るため、ここでは input要素自体に適用する inputClassName のみ残す
interface InputFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'name'> {
  label: string;
  name: string;
  register: UseFormRegisterReturn; // 名前を register に統一 (registerPropsから変更)
  error?: FieldError;
  isRequired?: boolean;
  inputClassName?: string; // input要素に適用する追加クラス
  containerClassName?: string; // FormField全体を囲むdivへの追加クラス
  labelClassName?: string; // FormFieldのlabelに渡すクラス
  errorClassName?: string; // FormFieldのエラーメッセージに渡すクラス
  onFocusCapture?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  type = 'text',
  register: registerProps, // ★ props名を register から registerProps に変更 (展開時に分かりやすくするため)
                           //    または、呼び出し側で register={register("name")} のようにし、
                           //    このコンポーネントでは register として受け取る
                           //    今回は、props名を register のままにし、呼び出し側で {...register("name")} のようにする想定に戻します。
  error,
  isRequired,
  inputClassName = '',
  containerClassName = '',
  labelClassName = '',
  errorClassName = '',
  onFocusCapture,
  ...restInputProps
}) => {
  // 基本のinputスタイル
  const baseInputStyles =
    'mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2.5';
  // エラー時のinputスタイル
  const errorInputStyles = error
    ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
    : 'border-gray-300';

  return (
    <FormField
      label={label}
      htmlFor={name}
      isRequired={isRequired}
      errorMessage={error?.message}
      className={containerClassName} // FormFieldのルートdivに適用
      labelClassName={labelClassName} // FormFieldのlabelに適用
      errorClassName={errorClassName} // FormFieldのエラーpタグに適用
    >
      {/* FormFieldのchildrenとしてinput要素を渡す */}
      <input
        id={name} // labelのhtmlForと一致させる
        type={type}
        {...registerProps} // ★ react-hook-formのregisterを展開
        onFocusCapture={onFocusCapture}
        className={`${baseInputStyles} ${errorInputStyles} ${inputClassName}`} // input自体に適用するクラス
        disabled={restInputProps.disabled}
        aria-invalid={error ? 'true' : 'false'}
        {...restInputProps}
      />
    </FormField>
  );
};

export default InputField;