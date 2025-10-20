import { FAQ } from '@/types'

export const faqs: FAQ[] = [
  // about SERVICE
  {
    id: 'about-service-1',
    question: '相談だけでも可能ですか？',
    answer: '可能です。また、要件確認やモックアップ作成は無料で行なっています。お客様のご希望を理解するために発生する工数に費用は頂きません。',
    category: 'about SERVICE'
  },
  {
    id: 'about-service-2',
    question: '開発途中の仕様変更は可能ですか？',
    answer: 'はい、アジャイル開発を採用しているため、進捗を週次で共有し、フィードバックを反映します。ただし、大幅な変更には追加費用が発生する場合があります。',
    category: 'about SERVICE'
  },
  {
    id: 'about-service-3',
    question: '納品後のサポート体制は？',
    answer: '納品後1ヶ月間は無償サポートを提供します。その後もお客様のニーズに応じた保守プランをご提案可能です。安心してご利用いただけます。',
    category: 'about SERVICE'
  },
  {
    id: 'about-service-4',
    question: '契約前にNDAは締結できますか？',
    answer: 'はい、契約前にNDAを締結することが可能です。お客様の情報を守ることを最優先に考えていますので、安心してご依頼ください。',
    category: 'about SERVICE'
  },
  // about price
  {
    id: 'about-price-1',
    question: '料金はどのくらい？',
    answer: '料金はプロジェクトの内容によって異なります。<br/>- ウェブサイト・LP制作：6万円~<br/>- システム・アプリ開発：要相談<br/>※ ウェブサイト・LP制作は全て生成AIに任せて開発する場合の価格です。デザイナーをアサインする場合は別途ご相談ください。システム・アプリ開発は案件規模が数百万円から数千万円まで幅広いため、まずはお気軽にご相談ください。',
    category: 'about price'
  },
  {
    id: 'about-price-2',
    question: '著作権はどうなりますか？',
    answer: '契約に基づき、開発費用の支払いが完了した時点で、全ての著作権はお客様に譲渡されます。これにはソースコードやデザインも含まれます。',
    category: 'about price'
  },
  {
    id: 'about-price-3',
    question: '保守・運用の費用は？',
    answer: '保守・運用は月額30万円でお受けしています。追加開発が必要な場合は別途お見積もりをさせて頂きます。',
    category: 'about price'
  },
  // about tech
  {
    id: 'about-tech-1',
    question: 'どのような業種に対応していますか？',
    answer: '業種を問わず、様々な業界でのAI活用をサポートしています。これまでに金融、不動産、メディア、SaaSなど多様な業界での開発実績があります。どのような業種でもお気軽にご相談ください。',
    category: 'about tech'
  },
  {
    id: 'about-tech-2',
    question: 'セキュリティ対策は？',
    answer: '私たちは業界標準のベストプラクティスに従い、インフラ、アプリケーション、データの各層で強固なセキュリティ対策を講じています。具体的な対策については、プロジェクトに応じて詳細をご説明いたします。',
    category: 'about tech'
  },
  {
    id: 'about-tech-3',
    question: '既存システムとの連携は可能ですか？',
    answer: 'はい、既存のシステムとの連携が可能です。APIを利用して、現在お使いのシステムとスムーズに統合できるソリューションをご提案いたします。お気軽にご相談ください。',
    category: 'about tech'
  },
  {
    id: 'about-tech-4',
    question: '開発チームはどのように構成されていますか？',
    answer: 'プロジェクトごとに最適な体制を組み、経験豊富なメンバーが責任を持って担当します。お客様とのコミュニケーションはプロジェクトマネージャーが一貫して行い、円滑な進行をサポートします。',
    category: 'about tech'
  },
  // other
  {
    id: 'other-1',
    question: '地方の企業ですが、依頼は可能ですか？',
    answer: 'はい、全く問題ありません。私たちはフルリモートの体制を整えており、場所を問わず最高のサービスを提供します。どこにいても、私たちのサポートを受けることができます。',
    category: 'other'
  }
]

// ルートページ用の主要なFAQを取得する関数
export function getMainFaqs() {
  return [
    faqs.find(faq => faq.id === 'about-service-1'), // 相談だけでも可能ですか？
    faqs.find(faq => faq.id === 'about-price-1'),   // 料金はどのくらい？
    faqs.find(faq => faq.id === 'about-tech-1'),    // どのような業種に対応していますか？
    faqs.find(faq => faq.id === 'about-service-4'), // 契約前にNDAは締結できますか？
    faqs.find(faq => faq.id === 'other-1')          // 地方の企業ですが、依頼は可能ですか？
  ].filter(Boolean) as FAQ[]
}
