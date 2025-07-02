
import { CardProps } from '@/components/modules/Card';
// アイコンのインポート
import {
  BeakerIcon,
  UserGroupIcon, // これは元々あったもの
  ChartBarIcon,
  AdjustmentsHorizontalIcon,
  MegaphoneIcon,
  CursorArrowRaysIcon,
  ChatBubbleLeftRightIcon,
  MagnifyingGlassIcon,
  CommandLineIcon,
  CogIcon,
  PaintBrushIcon,
  ScaleIcon,
  // FocusCard 用のアイコン (もし上記リストになければ追加)
  LightBulbIcon,
  CurrencyDollarIcon,
  UsersIcon, // UserGroupIcon とは異なるので注意
} from "@heroicons/react/24/outline";
import { AccordionItemData } from '@/components/modules/Accordion';

// --- CardData 型の再定義 (CardProps を Omit する形が望ましい) ---
export type CardData = Omit<CardProps, 'isSquare' | 'className'> & { /* 他のフィールド */ };


// --- Problem Section Data (既存) ---
export const problemSectionCards: CardData[] = [
  { variant: 'accent' }, // アイコン例追加
  { variant: 'default',icon: <MegaphoneIcon className="w-full h-full" />, title: "マーケティング", content: "ウェブサイトに訪れる人が全く増えず、売上や採用に繋がらない..." },
  { variant: 'default', icon: <CursorArrowRaysIcon className="w-full h-full" /> , title: "セールス", content: "ウェブサイトを作ったけど、問い合わせに繋がらない..." },
  { variant: 'default', icon: <UserGroupIcon className="w-full h-full" />, title: "リクルート", content: "求職者に魅力的なウェブサイトを作りたい..." },
  { variant: 'default', icon: <ChartBarIcon className="w-full h-full" />, title: "ROI", content: "高い制作費を払ったのに売上・集客・採用に全く効果が出なかった..." },
  { variant: 'default', icon: <AdjustmentsHorizontalIcon className="w-full h-full" />, title: "ブランディング", content: "企業イメージを表すウェブサイトを作りたい..." },
  { variant: 'default', icon: <BeakerIcon className="w-full h-full" />, title: "ノウハウ", content: "運用・分析の知識がなく、継続的にウェブサイトを運営することができない.." },
  { variant: 'scroll' },
];

// --- Solution Section Data (Accordion用 - 既存) ---
export const featureAccordionItems: AccordionItemData[] = [
  { id: 'hearing', icon: <ChatBubbleLeftRightIcon className="w-full h-full" />, title: '丁寧なヒアリング', content: '御社の解決したい課題・事業目標について詳しくヒアリングします。' },
  { id: 'research', icon: <MagnifyingGlassIcon className="w-full h-full" />, title: '基盤となるリサーチ＆分析', content: '顧客・競合・市場を徹底的に調査・分析し、客観的なデータに基づき現状と機会を明らかにします。効果的なSTP（セグメンテーション・ターゲティング・ポジショニング）戦略策定の礎となります。' },
  { id: 'strategy', icon: <CommandLineIcon className="w-full h-full" />, title: '成果最大化を目指す戦略共創', content: '御社のビジネス目標とSTP戦略に基づき、成果最大化を目指すウェブ戦略を共に創り上げます。AIによる効率化も取り入れつつ、ターゲットユーザーの行動を促す具体的な計画へと落とし込みます。' },
  { id: 'optimization', icon: <ScaleIcon className="w-full h-full" />, title: '顧客価値の最適化', content: '顧客価値に基づく戦略的なコンテンツ設計で、ターゲットからの共感と行動を引き出します。' },
  { id: 'efficiency', icon: <CogIcon className="w-full h-full" />, title: 'AIによる効率化で高い費用対効果', content: '制作プロセスの全工程にAIを導入し、徹底的に効率化。高品質なウェブサイトを適正価格でご提供し、御社の投資対効果（ROI）最大化に貢献します。' },
  { id: 'design', icon: <PaintBrushIcon className="w-full h-full" />, title: '戦略をカタチにするデザインに注力', content: 'AIが基本設計をサポートすることで、デザイナーはより戦略的な領域に注力。ターゲット顧客に的確にメッセージを届け、目的達成に貢献するデザインを構築します。' },
];

// --- Feature List Section Data (Why Sokutsuku 用 - 既存) ---
// ★ FeatureItemData 型定義 (WhySokutsukuSection / FeatureListSection で使う)
export interface FeatureItemData {
    number: string;
    title: string;
    description: string;
    tagline?: string; // tagline を FeatureCard で使うなら追加
    numberColor?: string;
}
export const featureListData: FeatureItemData[] = [
  { number: "01", title: "事業戦略から逆算して設計", description: "私たちのサービスは、生成AIを駆使して迅速かつ効率的にウェブサイトを構築します。これにより、コストを抑えつつ高い効果を実現します。", numberColor: "text-gray-300" },
  { number: "02", title: "価値にフォーカス", description: "ウェブサイトの公開後も、1ヶ月間の無料マーケティング支援を提供します。これにより、効果的なプロモーションが可能になります。", numberColor: "text-gray-300" },
  { number: "03", title: "効率化と低コスト化", description: "全てのプランでオリジナルデザインを実現し、競合他社と差別化します。これにより、ブランドの個性を際立たせることができます。", numberColor: "text-gray-300" },
  { number: "04", title: "スピード", description: "多くの工程で生成AIを活用することにより、従来よりも早く・正確に実装できるようになりました。", numberColor: "text-gray-300" },
];


// ★★★ Timeline Section Data (ここから追加) ★★★

export interface TimelineStepData {
  number: string;
  title: string;
  description: string;
  numberColor?: string;
}

export const timelineStepsData: TimelineStepData[] = [
  {
    number: "01",
    title: "ヒアリング",
    description: "貴社の事業内容、強み、課題、ウェブサイトで達成したい目標などを丁寧にヒアリングし、理解を深めます。\n現状分析や競合調査の基礎情報となります。",
    numberColor: "text-[#1342F0]",
  },
  {
    number: "02",
    title: "市場・競合分析",
    description: "お伺いした内容と外部環境（顧客・市場・競合など）を分析します。\n貴社の立ち位置やウェブ戦略の方向性を明確にするための土台となる情報を整理します。",
    numberColor: "text-[#1342F0]",
  },
  {
    number: "03",
    title: "ウェブ戦略立案・設計",
    description: "分析結果に基づき、サイトコンセプト、ターゲットに響く構成やテキストコンテンツ、成果目標(KGI/KPI)などを具体的に設計し、ご提案します。",
    numberColor: "text-[#1342F0]",
  },
  {
    number: "04",
    title: "デザイン・構築",
    description: "決定した戦略・設計に基づき、ブランドイメージを反映した最適なデザインを作成します。\n主にノーコードツールを用いて、効率的かつ高品質にウェブサイトを構築します。",
    numberColor: "text-[#1342F0]",
  },
  {
    number: "05",
    title: "公開・サポート",
    description: "最終確認を経てウェブサイトを公開します。必要に応じて操作説明を行います。\n2ヶ月間の運用・分析サポートが無料で付きます。",
    numberColor: "text-[#1342F0]",
  },
];

export interface PricingPlanData {
  planName: string;
  price: string;
  priceNote?: string;
  features: string[];
  highlight?: boolean;
}

export const pricingPlansData: PricingPlanData[] = [];

// src/data/topPageData.tsx (または適切なパス)

export interface FocusCardItem {
  id: number;
  icon: React.ElementType; // 型はこれでOK
  title: string;
  description: string;
}

export const focusCardItems: FocusCardItem[] = [
  {
    id: 1,
    icon: LightBulbIcon, // インポートされていれば、このように名前で指定可能
    title: "ウェブサイトからの成果を改善したい方",
    description: "現状のウェブサイトの課題を分析し、具体的な改善策とともに成果向上に貢献します。",
  },
  {
    id: 2,
    icon: CurrencyDollarIcon,
    title: "費用対効果を重視したい方",
    description: "最新技術の活用と効率的なプロセスで、高品質ながらもコストを抑えたウェブサイトを実現します。",
  },
  {
    id: 3,
    icon: ChartBarIcon, // これは既存のインポートリストにありました
    title: "戦略的なウェブサイトを求めている方",
    description: "ビジネス目標達成のための戦略を策定し、ターゲット顧客に響くウェブサイトを構築します。",
  },
  {
    id: 4,
    // UsersIcon を使うか、既存の UserGroupIcon を使うかによって指定が変わります。
    // ここでは UsersIcon を使う想定で記述します。
    icon: UsersIcon,
    title: "運用に十分な時間や人材を割けない方",
    description: "更新作業の負担を軽減するCMS導入や、運用サポートプランもご用意しています。",
  },
];

// 他のトップページ関連データもこのファイルにまとめることができます
export const topPageFocusTexts = {
  focusCardSectionTitle: "戦略的なウェブサイトで、ビジネスの成長を加速させたい方へ。",
  focusCardSectionSubtitle: "ソクツクでは主要な工程で生成AIを活用し、低価格でも戦略性を持ったウェブサイト構築を可能にしました。",
};

// FAQデータ
export const faqItems: AccordionItemData[] = [
  {
    id: 'faq-1',
    title: 'サービスの価格は？',
    content:"私たちのサービスは、プランに応じて異なる価格設定を行っています。詳細はプラン紹介のセクションをご覧ください。お客様のニーズに合わせた柔軟な料金プランを提供しています。"
  },
  {
    id: 'faq-2',
    title: '納期はどれくらい？',
    content:"プロジェクトの規模によりますが、通常は数週間で納品可能です。お急ぎの場合は、特急プランもご用意しています。具体的な納期については、お問い合わせください。"
  },
  {
    id: 'faq-3',
    title: 'サポートはありますか？',
    content: "はい、私たちはプロジェクト完了後もサポートを提供しています。1ヶ月間の無料マーケティング施策支援が含まれています。お客様の成功を全力でサポートします。"
  },
  {
    id: 'faq-4',
    title: 'カスタマイズは可能？',
    content: "もちろんですが、私たちのサービスはすべてオリジナルデザインで提供されます。お客様の要望に応じて、カスタマイズも可能ですので、お気軽にご相談ください。"
  },
  {
    id: 'faq-5',
    title: 'どのように始める？',
    content: "まずは無料相談をお申し込みください。お客様のニーズをお伺いし、最適なプランをご提案します。お気軽にお問い合わせいただければと思います。"
  },
];

// ★★★ ここからが追加・修正部分です ★★★
// トップページで使用するテキスト情報をまとめたオブジェクト
export const topPageFaqTexts = {
  faqSectionTitle: "Any Questions?",
};