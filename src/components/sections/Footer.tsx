// src/components/layout/Footer.tsx
import React from 'react';
// import Link from 'next/link'; // ButtonコンポーネントがLinkを内包するため、ここでは不要な場合も
import Button from '@/components/elements/Button'; // Buttonコンポーネントをインポート
// ★ 一元管理されたリンクデータをインポート
import { commonSiteNavigationLinks, footerLegalLinks } from '@/data/siteNavigationData';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    // ★ ダークモード関連のクラスを削除、またはライトモード基準に
    <footer className="bg-white text-gray-700 border-t border-gray-200">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* 上部: ロゴとメインナビゲーション */}
        <div className="text-center mb-8 md:mb-10">
          {/* ロゴ: Buttonコンポーネントを使用し、文字色変更アニメーションのみ */}
          <Button
            text="SOKUTSUKU"
            href="/"
            textSize={24}
            size="md"
            // ★ className で文字色とホバー時の文字色を指定 (ダークモード削除)
            className="inline-block mb-6 font-bold tracking-tight text-gray-900 hover:text-[#1342F0]"
            noAnimation={true} // 下線アニメーションはなし
          />
          <nav aria-label="フッターメインナビゲーション">
            <ul className="flex flex-wrap justify-center items-center gap-x-4 sm:gap-x-6 gap-y-2">
              {/* ★ commonSiteNavigationLinks を使用 */}
              {commonSiteNavigationLinks.map((link) => (
                <li key={link.label}>
                  <Button
                    text={link.label}
                    href={link.href}
                    textSize={14}
                    size="sm"
                    // noAnimation はデフォルトでfalseなので下線アニメーション有効
                    // ★ className で文字色を指定 (ダークモード削除)
                    className="text-gray-700 hover:text-gray-900"
                  />
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* 水平線 */}
        {/* ★ ダークモード関連のクラスを削除 */}
        <hr className="border-gray-200 mb-8 md:mb-10" />

        {/* 下部: コピーライトと法的情報リンク */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <p>&copy; {currentYear} Sokutsuku. 全著作権所有。</p>
          </div>
          <nav aria-label="フッター法的情報ナビゲーション">
            <ul className="flex flex-wrap justify-center md:justify-end items-center gap-x-3 sm:gap-x-4 gap-y-2">
              {/* ★ footerLegalLinks を使用 */}
              {footerLegalLinks.map((link) => (
                <li key={link.label}>
                  <Button
                    text={link.label}
                    href={link.href}
                    textSize={12}
                    size="sm"
                    noAnimation={true} // ★ 法的情報リンクは下線アニメーションなし、シンプルな文字色ホバーのみ
                    // ★ className で文字色とホバー時の文字色を指定 (ダークモード削除)
                    className="text-gray-600 hover:text-gray-800" // 少し薄めのグレーで、ホバーで少し濃く
                  />
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;