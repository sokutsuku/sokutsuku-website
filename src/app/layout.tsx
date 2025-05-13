// src/app/layout.tsx
import type { Metadata } from "next";
import {Noto_Sans_JP, Roboto } from "next/font/google"; // ★ Noto_Sans_JP をインポート
import { ModalProvider } from '@/contexts/ModalContext';
import NavigationBar from '@/components/modules/NavigationBar';
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  weight: ['400', '500', '700', '900'],
  subsets: ["latin"],
  display: 'swap',
});

const roboto = Roboto({ // Roboto の設定
  variable: "--font-roboto",
  weight: ['400', '500', '700', '900'], // Robotoで使いたいウェイト
  subsets: ["latin"], // 英数字のみなのでlatinで十分
  display: 'swap',
});

export const metadata: Metadata = {
  title: "SOKUTSUKU",
  description: "生成AIをフル活用して早く高品質なウェブサイトを構築するサービスです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="scroll-smooth">
      <head>
        {/* <link rel="stylesheet" href="https://use.typekit.net/xxxxxxx.css" /> */}
        {/* Adobe FontsとGoogle Fontsを併用する場合、フォントの読み込み順や競合に注意 */}
        {/* 一般的にはどちらか一方に統一するか、明確な使い分けが必要です */}
      </head>
      <body
       className={`${notoSansJP.variable} ${roboto.variable} antialiased`} // ★ Noto Sans JPの変数を追加
      >
        <ModalProvider>
          <NavigationBar />
          <main>{children}</main>
        </ModalProvider>
      </body>
    </html>
  );
}