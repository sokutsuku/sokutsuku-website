// src/components/layout/Footer.tsx
import React from 'react';
import Button from '@/components/elements/Button'; // Buttonコンポーネントをインポート

interface FooterLinkItem {
  href: string;
  label: string;
}

// フッター上部のナビゲーションリンク
const mainNavLinks: FooterLinkItem[] = [
  { href: '/service', label: 'Service' },
  { href: '/faq', label: 'Faq' },
  { href: '/contact', label: 'Contact' },
  { href: '/blog', label: 'Blog' },
];

// フッター下部の法的情報リンク
const legalNavLinks: FooterLinkItem[] = [
  { href: '/privacy-policy', label: 'プライバシーポリシー' },
  { href: '/terms-of-service', label: '利用規約' },
  { href: '/cookie-settings', label: 'クッキー設定' },
];

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-300 text-gray-700 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* 上部: ロゴとメインナビゲーション */}
        <div className="text-center mb-8 md:mb-10">
          {/* ロゴ: Buttonコンポーネントを使用し、文字色変更アニメーションのみ */}
          <Button
            text="SOKUTSUKU"
            href="/"
            textSize={24} // text-2xl 相当、ButtonPropsの型に合わせて調整
            size="md"     // パディングは適宜調整
            className="inline-block mb-6 font-bold tracking-tight text-gray-900 dark:text-white hover:text-[#1342F0] dark:hover:text-[#1342F0]"
            noAnimation={true} // 下線アニメーションはなし
          />
          <nav aria-label="フッターメインナビゲーション">
            <ul className="flex flex-wrap justify-center items-center gap-x-4 sm:gap-x-6 gap-y-2"> {/* gapを少し調整 */}
              {mainNavLinks.map((link) => (
                <li key={link.label}>
                  {/* メインナビリンク: Buttonコンポーネントを使用し、下線アニメーションあり */}
                  <Button
                    text={link.label}
                    href={link.href}
                    textSize={14} // text-sm 相当
                    size="sm"     // パディングを小さめに
                    // noAnimation はデフォルトでfalseなので指定不要、または noAnimation={false}
                    className="text-gray-700 dark:text-white dark:hover:text-white"
                    // Buttonのafter:bg-currentがこの文字色を参照して下線の色になる
                  />
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* 水平線 */}
        <hr className="dark:border-gray-700 mb-8 md:mb-10" />

        {/* 下部: コピーライトと法的情報リンク */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs"> {/* text-xsをベースに */}
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <p>&copy; {currentYear} Sokutsuku. 全著作権所有。</p>
          </div>
          <nav aria-label="フッター法的情報ナビゲーション">
            <ul className="flex flex-wrap justify-center md:justify-end items-center gap-x-3 sm:gap-x-4 gap-y-2"> {/* gapを少し調整 */}
              {legalNavLinks.map((link) => (
                <li key={link.label}>
                  {/* 法的情報リンク: Buttonコンポーネントを使用し、下線アニメーションあり */}
                  <Button
                    text={link.label}
                    href={link.href}
                    textSize={12} // text-xs 相当
                    size="sm"     // パディングを小さめに
                    noAnimation={true}
                    className="text-gray-700"
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