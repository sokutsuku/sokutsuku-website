import { Work } from '@/types'

export const works: Work[] = [
  {
    id: 'ai-powered-ecommerce',
    slug: 'ai-powered-ecommerce',
    title: 'AI搭載ECサイト',
    description: 'AIレコメンド機能を搭載したECサイトの構築',
    category: 'Eコマース',
    technologies: ['Next.js', 'TypeScript', 'OpenAI API', 'Supabase'],
    image: '/images/works/ecommerce.jpg',
    completed: '2024-12'
  },
  {
    id: 'smart-document-system',
    slug: 'smart-document-system',
    title: 'AIドキュメント管理システム',
    description: 'AIによる文書分類と検索機能を備えた管理システム',
    category: 'システム開発',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'OpenAI API'],
    image: '/images/works/document-system.jpg',
    completed: '2024-11'
  }
]