// src/app/about/page.tsx
"use client";

import React from 'react';
import SectionHeading from '@/components/elements/SectionHeading';
import ContactForm, { type ContactFormData } from '@/components/modules/ContactForm';
import { type FieldErrors } from 'react-hook-form';
import Image from 'next/image'; // Imageコンポーネントをインポート

// 仮のメンバーデータ
const teamMembers = [
  {
    name: '東 直樹',
    role: '',
    imageUrl: '/path/to/member2.jpg',
    bio: 'エンジニア歴16年のフルスタックエンジニア。専門学校4年間＋ゲーム開発3年間でマルチプラットフォーム3Dゲームなどの開発を手がけ、企画力とUI/UXを磨く。Web系システムエンジニアへ転向後はJava・PHP・TypeScriptなどで販売／工事／人事系Webアプリを要件定義から運用まで一貫して担当し、自走力とコードレビュー体制の整備で品質を向上。フリーランスSESとして販売管理システムとECサイトを5年間フルリモートで保守運用し、システム・ユーザー双方の視点から改善提案を重ね高評価を獲得。個人開発では生成AIを活用したDiscord履歴の検索・要約・データ分析ボットを開発し正式発注を取得。顧客との密なコミュニケーションで課題を可視化し、AIを含む最適解を提案・実装。HP／LP制作、業務効率化ツール、データ分析など幅広い受託開発に対応可能。 ',
  },
  {
    name: '熊谷 圭司',
    role: '',
    imageUrl: '/path/to/member3.jpg',
    bio: '大手事業会社にてSaaS/webメディアの営業責任者を務め、家具業界・ハウスメーカー等の大手企業の営業プロセス非効率や商品販売課題を解消し、成約率の向上に尽力。顧客課題を把握のうえサービス企画・開発にも携わり、現場の成果へ直結させた。年間約1億円の取引を拡大。また個人でも月間230万PVを達成するWebメディアを統括。ユーザー行動データを解析し、エンゲージメントとアクセス数を向上させた。コンテンツ企画から運用まで全工程を実施し、メディア成長を牽引。さらに音楽業界PRを手掛け、戦略を策定・実行してファン層を拡大した。',
  },
  {
    name: '森本 拓見',
    role: '',
    imageUrl: '/path/to/member1.jpg', // あとで実際の画像パスに置き換えてください
    bio: '2019年に始めた投資を機にブロックチェーンの分野へ。大学を中退し、個人事業主としてNFT貸出やDeFi教育事業を主導。SNSマーケティングやリサーチ・分析、レポート作成を通じて事業を成長させました。2020年には株式会社nessを共同創業。リトリート事業、食品EC、国内では黎明期にあったNFT専門メディアなど、複数の新規事業を立ち上げました。事業企画、デザイン、開発、営業、マーケティングまで幅広く担当し、実践的なビジネススキルを習得しました（会社は現在休眠）。2023年からは株式会社アーリーワークスで、NFTプロジェクト運営やコミュニティ企画、他社へのブロックチェーン活用提案に貢献。事業部の縮小と、5年以上携わったブロックチェーン以外の業界へ挑戦したいという思いから退職を決意しました。',
  },
];


const AboutPage: React.FC = () => {
  const handleFormSubmitSuccess = (data: ContactFormData) => {
    console.log('Form submitted successfully:', data);
    alert('お問い合わせありがとうございます。送信が完了しました。');
  };

  const handleFormSubmitError = (errors: FieldErrors<ContactFormData>) => {
    console.error('Form submission error:', errors);
    alert('入力内容にエラーがあります。確認してください。');
  };

  return (
    <main className="min-h-screen bg-white py-20 md:py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* --- About Us Section --- */}
        <section id="about-us" className="mb-20 md:mb-28 min-h-screen flex flex-col">
          <SectionHeading
            id="about-us-heading"
            tag="h1"
            title="About Us"
            align="left"
            className="mb-12 !font-bold !text-gray-800"
            description=""
            descriptionClassName="text-lg text-gray-600"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            {teamMembers.map((member) => (
              <div key={member.name} className="bg-gray-50 rounded-lg shadow-md p-6 text-center hover:shadow-xl transition-shadow duration-300 border border-gray-200">
                <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden relative bg-gray-200">
                  {/* 画像の代わりにプレースホルダーを表示 */}
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-gray-400 text-xs">NO IMAGE</span>
                  </div>
                  {/* <Image src={member.imageUrl} alt={member.name} layout="fill" objectFit="cover" /> */}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-sm text-[#1342F0] font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- Contact Section --- */}
        <section id="contact">
            <SectionHeading
              id="contact-heading"
              tag="h2"
              title="Contact"
              align="right"
              className="mb-12 !font-bold !text-gray-800"
              description="サービスに関するご質問、お見積もりのご依頼など、お気軽にご連絡ください。"
              descriptionClassName="text-lg text-gray-600"
            />
            <div className="bg-gray-50 p-6 sm:p-8 rounded-lg shadow-xl max-w-2xl mx-auto">
              <ContactForm
                onSubmitSuccess={handleFormSubmitSuccess}
                onSubmitError={handleFormSubmitError}
              />
            </div>
        </section>

      </div>
    </main>
  );
};

export default AboutPage;
