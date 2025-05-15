// src/components/elements/FormField.tsx
import React, { ReactNode } from 'react';

interface FormFieldProps {
  label: string;
  htmlFor: string; // input/textareaのidと紐づけるためのもの
  isRequired?: boolean;
  errorMessage?: string;
  children: ReactNode; // ここに <input /> や <textarea /> が入る
  className?: string; // このFormField全体のdivに適用する追加クラス
  labelClassName?: string; // labelタグに適用する追加クラス
  errorClassName?: string; // エラーメッセージのpタグに適用する追加クラス
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  htmlFor,
  isRequired,
  errorMessage,
  children,
  className = '',
  labelClassName = '',
  errorClassName = '',
}) => {
  return (
    <div className={`mb-5 ${className}`}> {/* 各フィールド間のデフォルトマージン */}
      <label
        htmlFor={htmlFor}
        className={`block text-sm font-medium text-gray-700 mb-1 ${labelClassName}`}
      >
        {label}
        {isRequired && <span className="text-red-500 ml-1">*</span>}
      </label>
      {children} {/* inputやtextareaなどの実際入力要素がここに挿入される */}
      {errorMessage && (
        <p className={`mt-1 text-xs text-red-500 ${errorClassName}`}>
          {errorMessage}
        </p>
      )}
    </div>
  );
};

export default FormField;