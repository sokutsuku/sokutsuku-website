// src/data/faqPageData.ts
import { AccordionItemData } from '@/components/modules/Accordion';

// FAQページに表示する「価格・お支払い関係」の質問と回答のリスト
export const pricingFaqItems: AccordionItemData[] = [
  {
    id: 'pricing-faq-1',
    title: '支払いのタイミングはいつですか？',
    content: 'ご契約後に契約頂いたプランの50%をお支払い頂きます。\n納品完了後に残りをお支払い頂きます。'
  },
  {
    id: 'pricing-faq-2',
    title: '本当に66,000円でWebサイトを作れますか？',
    content: '可能です。'
  },
  {
    id: 'pricing-faq-3',
    title: '追加費用は発生しますか？',
    content: '本サービスでの追加費用は発生しません。\nただし、WEBサイトを維持するために本サービス以外で発生する費用がございます。\nドメインの取得・維持費は必ず発生します。\nサーバー・ノーコードの利用料はご契約頂くプランにより異なります。'
  },
  {
    id: 'pricing-faq-4',
    title: '月額費用は必要ですか？',
    content: '本サービスでの追加費用は発生しません。\nただし、WEBサイトを維持するために本サービス以外で発生する費用がございます。\nサーバーの維持費はサイトの規模やブログの有無によって発生いたします。\nノーコードの利用料はご契約頂くプランにより異なります。'
  },
  {
    id: 'pricing-faq-5',
    title: '分割払いや月額プランはありますか？',
    content: '分割払いには対応しておりません。\n月額プランは対応予定です。'
  },
  {
    id: 'pricing-faq-6',
    title: 'ドメイン・サーバーの費用は含まれていますか？',
    content: '取得費用は含まれています。\nただし、維持費は御社でご負担頂きます。'
  },
];

// FAQページの「価格・お支払い関係について」セクションのタイトル
export const pricingFaqTitle = "価格・お支払い関係について";