// src/data/siteNavigationData.tsx

export interface NavLink {
    href: string;
    label: string;
    isPageLink?: boolean;
  }

  export const commonSiteNavigationLinks: NavLink[] = [
    { href: '/faq', label: 'FAQ', isPageLink: true }, // ラベルをFAQで統一 (または必要なら使い分け)
    { href: '/about', label: 'About', isPageLink: true },
  ];

  export const headerTopPageScrollLinks: NavLink[] = [
    { href: '#problem', label: 'Problem', isPageLink: false },
    { href: '#solution', label: 'Solution', isPageLink: false },
    { href: '#timeline', label: 'Timeline', isPageLink: false },
    { href: '#pricing', label: 'Pricing', isPageLink: false },
    { href: '#contact', label: 'Contact', isPageLink: false }, // トップページのContactセクションへのリンク
  ];
  
  // フッター下部の法的情報リンク
  export const footerLegalLinks: NavLink[] = [
    { href: '/privacy-policy', label: 'プライバシーポリシー', isPageLink: true },
    { href: '/terms-of-service', label: '利用規約', isPageLink: true },
    { href: '/cookie-settings', label: 'クッキー設定', isPageLink: true },
  ];