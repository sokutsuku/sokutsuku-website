// src/data/faqPageData.ts
import { AccordionItemData } from '@/components/modules/Accordion';

// --- 価格・お支払い関係のFAQデータ ---
export const pricingFaqItems: AccordionItemData[] = [
  // ... (既存の pricingFaqItems の内容) ...
  {
    id: 'pricing-faq-1',
    title: '支払いのタイミングはいつですか？',
    content: 'ご契約後に契約頂いたプランの50%をお支払い頂きます。\n納品完了後に残りをお支払い頂きます。'
  },
  {
    id: 'pricing-faq-2',
    title: '最低価格はいくらですか？',
    content: '99,000円（税込）からのプランをご用意しています。\nただし、オプションを追加することで価格は変動します。'
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
export const pricingFaqTitle = "価格・お支払い関係について";

// --- 納期に関するFAQデータ --- (これは前回作成したもの)
export const deliveryFaqItems: AccordionItemData[] = [
  // ... (前回作成した deliveryFaqItems の内容、もしあれば) ...
  // ご提供いただいたQ&A内容が価格と同一だったため、必要に応じて内容を修正してください。
  // 例:
  {
    id: 'delivery-faq-1',
    title: '最短でどれくらいの期間で納品できますか？',
    content: 'ライトプラン：ヒアリング実施後、最短2週間で納品可能です。（テキスト・画像のご用意が完了している場合）スタンダードプラン：ヒアリング実施後、最短2週間で納品可能です。（テキスト・画像のご用意が完了している場合）プレミアムプラン：ヒアリング実施後、最短1ヶ月で納品可能です。（テキスト・画像のご用意が完了している場合'
  },
  {
    id: 'delivery-faq-2',
    title: '納期はどのように決まりますか？',
    content: '制作するサイトのページ数によって変動いたします。また、クライアントさまからご提供頂く「画像・テキスト」の有無によっても変動いたします。'
  },
  {
    id: 'delivery-faq-3',
    title: '急ぎの依頼にも対応できますか？',
    content: '可能です。'
  },
  {
    id: 'delivery-faq-4',
    title: '制作の進行状況を確認できますか？',
    content: '可能です。'
  },
];
export const deliveryFaqTitle = "納期について";

// ★★★ 契約・支払いの流れに関するFAQデータ (新規追加) ★★★
export const contractPaymentFlowFaqItems: AccordionItemData[] = [
  {
    id: 'contract-flow-faq-1',
    title: '依頼から納品までの流れは？',
    content: '以下のステップで進行します。\n1. 無料相談・ヒアリング（1～3日）\n2. ご契約 & 手付金お支払い（40%）（1日）\n3. デザイン・実装（最短1週間）\n4. 修正対応（2～5日）\n5. 実装完了後、残額60%支払い\n6. お支払い確認後、サイト公開 & 納品',
  },
  {
    id: 'contract-flow-faq-2',
    title: 'どのタイミングで支払いが発生しますか？',
    content: '契約時に40%、実装完了後（公開前）に60%をお支払いいただきます。',
  },
  {
    id: 'contract-flow-faq-3',
    title: 'キャンセルはできますか？',
    content: 'ご契約後のキャンセルはできません。',
  },
  {
    id: 'contract-flow-faq-4',
    title: '追加料金が発生するのはどんな場合ですか？',
    content: 'オプションプランを選択しない限り、追加料金は発生しません。\n追加機能・修正をご希望の場合は、その都度お見積もりいたします。',
  },
  {
    id: 'contract-flow-faq-5',
    title: '法人・個人どちらでも依頼できますか？',
    content: 'どちらでも依頼可能です。',
  },
  {
    id: 'contract-flow-faq-6',
    title: 'どのような契約方法になりますか？',
    content: 'すべてオンラインでの契約となります。\n契約書のやり取りやお支払いもオンラインで完結可能です。',
  },
  {
    id: 'contract-flow-faq-7',
    title: '他社からの乗り換え（リニューアル）も対応可能ですか？',
    content: '対応可能です。既存サイトのデータ移行やリニューアルもご相談ください。',
  },
];
export const contractPaymentFlowFaqTitle = "契約・支払いについて";

// ★★★ 修正・サポートに関するFAQデータ (新規追加) ★★★
export const revisionSupportFaqItems: AccordionItemData[] = [
  {
    id: 'revision-support-faq-1',
    title: '納品後に修正はできますか？',
    content: '納品後、一週間以内であればテキスト・画像の変更など、軽微な修正は無償で対応いたします。\n大幅な修正や追加機能の開発については別途お見積もりとなります。',
  },
  {
    id: 'revision-support-faq-2',
    title: '更新やメンテナンスはどうすればいいですか？',
    content: '基本的な運用（テキスト変更・画像差し替えなど）はご自身で行っていただけますが、必要に応じてサポートも可能です。 ',
  },
  {
    id: 'revision-support-faq-3',
    title: ' Webサイトの運用について相談できますか？',
    content: '可能です。\n更新やメンテナンス、SEO対策、マーケティング施策など運用に関するご相談は、お問い合わせフォームまたはLINEにて受け付けています。',
  },
  // ... 「修正・サポート」に関する他のQ&Aを追加 ...
];
export const revisionSupportFaqTitle = "修正・サポート";