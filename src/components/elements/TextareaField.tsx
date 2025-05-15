// src/components/elements/TextareaField.tsx
"use client";

import React from 'react';
import { UseFormRegisterReturn, FieldError } from 'react-hook-form';
import FormField from './FormField'; // ★ FormFieldをインポート

// TextareaFieldコンポーネントのProps型定義
interface TextareaFieldProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'name'> {
  label: string;
  name: string; // textarea要素のid, labelのhtmlFor, registerのnameの一部として利用
  register: UseFormRegisterReturn; // react-hook-formのregister("name", options) の結果
  error?: FieldError;
  isRequired?: boolean;
  textareaClassName?: string; // textarea要素に適用する追加クラス
  containerClassName?: string; // FormField全体を囲むdivへの追加クラス
  labelClassName?: string; // FormFieldのlabelに渡すクラス
  errorClassName?: string; // FormFieldのエラーメッセージに渡すクラス
  onFocusCapture?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
}

const TextareaField: React.FC<TextareaFieldProps> = ({
  label,
  name, // このnameをhtmlForとidに使用
  register: registerProps, // 呼び出し側: registerProps={register("実際のname", options)}
  error,
  isRequired,
  rows = 5, // デフォルトの行数
  textareaClassName = '',
  containerClassName = '',
  labelClassName = '',
  errorClassName = '',
  onFocusCapture,
  ...restTextareaProps // placeholder, disabled など
}) => {
  // 基本のtextareaスタイル
  const baseTextareaStyles =
    'mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2.5 resize-y';
  // エラー時のtextareaスタイル
  const errorTextareaStyles = error
    ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
    : 'border-gray-300';

  return (
    <FormField
      label={label}
      htmlFor={name} // ★ propsのnameを使用
      isRequired={isRequired}
      errorMessage={error?.message}
      className={containerClassName} // FormFieldのルートdivに適用
      labelClassName={labelClassName} // FormFieldのlabelに適用
      errorClassName={errorClassName} // FormFieldのエラーpタグに適用
    >
      {/* FormFieldのchildrenとしてtextarea要素を渡す */}
      <textarea
        id={name} // ★ propsのnameを使用
        rows={rows}
        {...registerProps} // ★ react-hook-formのregisterの結果を展開 (これにname属性が含まれる)
        onFocusCapture={onFocusCapture}
        className={`${baseTextareaStyles} ${errorTextareaStyles} ${textareaClassName}`} // textarea自体に適用するクラス
        disabled={restTextareaProps.disabled}
        aria-invalid={error ? 'true' : 'false'}
        {...restTextareaProps}
      />
    </FormField>
  );
};

export default TextareaField;