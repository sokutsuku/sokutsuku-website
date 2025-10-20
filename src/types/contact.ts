// お問い合わせフォームのデータ型
export type ContactFormData = {
  name: string
  email: string
  company?: string
  message: string
}

// Supabaseに保存されるお問い合わせデータ
export type Contact = {
  id: string
  created_at: string
  name: string
  email: string
  company: string | null
  message: string
  status: 'new' | 'in_progress' | 'completed'
  updated_at: string
}

// API レスポンス型
export type ContactApiResponse = {
  success: boolean
  message: string
  data?: Contact
  error?: string
}
