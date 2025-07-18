import { Service } from '@/types'

export const services: Service[] = [
  {
    id: 'web-development',
    title: 'ウェブサイト & LP制作',
    description: 'AIによるコンテンツ最適化（AIO）と最新のSEO施策を組み合わせた、成果を出すウェブサイト制作',
    features: [
      'AIコンテンツ最適化',
      '最新SEO施策',
      'レスポンシブデザイン',
      'コンバージョン最適化',
      '高速化対応'
    ],
    icon: 'globe'
  },
  {
    id: 'system-development',
    title: 'システム & アプリ開発',
    description: 'AIを用いた知的業務の自動化により、ビジネスを自律的に成長させるシステム開発',
    features: [
      'AI機能統合',
      '業務プロセス自動化',
      'データ分析・予測',
      'API開発',
      'クラウドインフラ構築'
    ],
    icon: 'cpu'
  }
]