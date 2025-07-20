'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { X } from 'lucide-react'

interface ContactSlidePanelProps {
  isOpen: boolean
  onClose: () => void
}

interface FormData {
  companyName: string
  name: string
  phone: string
  email: string
  inquiryType: string
  inquiryDetails: string
}

export function ContactSlidePanel({ isOpen, onClose }: ContactSlidePanelProps) {
  const [formData, setFormData] = useState<FormData>({
    companyName: '',
    name: '',
    phone: '',
    email: '',
    inquiryType: '',
    inquiryDetails: ''
  })

  const [errors, setErrors] = useState<Partial<FormData>>({})

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    // エラーをクリア
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  const validateForm = () => {
    const newErrors: Partial<FormData> = {}

    if (!formData.companyName.trim()) newErrors.companyName = '会社名は必須です'
    if (!formData.name.trim()) newErrors.name = '名前は必須です'
    if (!formData.phone.trim()) newErrors.phone = '電話番号は必須です'
    if (!formData.email.trim()) newErrors.email = 'メールアドレスは必須です'
    if (!formData.inquiryType) newErrors.inquiryType = 'お問い合わせ内容を選択してください'

    // メールアドレスの形式チェック
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'メールアドレスの形式が正しくありません'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      console.log('フォームデータ:', formData)
      // TODO: フォーム送信処理
      onClose()
    }
  }

  return (
    <>
      {/* オーバーレイ */}
      <div 
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />
      
      {/* スライドパネル */}
      <div className={`
        fixed bottom-0 left-0 right-0 z-50 
        transition-transform duration-300 ease-out
        ${isOpen ? 'translate-y-0' : 'translate-y-full'}
      `}>
        <Card className="rounded-t-2xl rounded-b-none max-h-[85vh] overflow-y-auto bg-white dark:bg-[#101411] border-0 shadow-2xl">
          <CardHeader className="flex flex-row items-center justify-between pb-6 border-b border-neutral-light-200 dark:border-neutral-dark-700">
            <div>
              <CardTitle className="text-2xl font-bold text-foreground mb-2">
                お問い合わせ
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                お気軽にご相談ください。専門スタッフが迅速にお答えいたします。
              </p>
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={onClose}
              className="text-muted-foreground hover:text-foreground hover:bg-muted rounded-full h-10 w-10"
            >
              <X className="w-5 h-5" />
            </Button>
          </CardHeader>
          
          <CardContent className="pt-8 pb-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* 基本情報セクション */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-foreground flex items-center">
                  <div className="w-2 h-2 bg-[#14532d] rounded-full mr-3"></div>
                  基本情報
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* 会社名 */}
                  <div className="space-y-3">
                    <Label htmlFor="companyName" className="text-sm font-medium text-foreground">
                      会社名 <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="companyName"
                      value={formData.companyName}
                      onChange={(e) => handleInputChange('companyName', e.target.value)}
                      className={`h-12 ${errors.companyName ? 'border-red-500' : 'border-neutral-light-300 dark:border-neutral-dark-600'} focus:ring-2 focus:ring-[#14532d]/20 focus:border-[#14532d] transition-colors`}
                      placeholder="株式会社○○"
                    />
                    {errors.companyName && (
                      <p className="text-sm text-red-500 mt-1">{errors.companyName}</p>
                    )}
                  </div>

                  {/* 名前 */}
                  <div className="space-y-3">
                    <Label htmlFor="name" className="text-sm font-medium text-foreground">
                      お名前 <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className={`h-12 ${errors.name ? 'border-red-500' : 'border-neutral-light-300 dark:border-neutral-dark-600'} focus:ring-2 focus:ring-[#14532d]/20 focus:border-[#14532d] transition-colors`}
                      placeholder="田中 太郎"
                    />
                    {errors.name && (
                      <p className="text-sm text-red-500 mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* 電話番号 */}
                  <div className="space-y-3">
                    <Label htmlFor="phone" className="text-sm font-medium text-foreground">
                      電話番号 <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className={`h-12 ${errors.phone ? 'border-red-500' : 'border-neutral-light-300 dark:border-neutral-dark-600'} focus:ring-2 focus:ring-[#14532d]/20 focus:border-[#14532d] transition-colors`}
                      placeholder="03-1234-5678"
                    />
                    {errors.phone && (
                      <p className="text-sm text-red-500 mt-1">{errors.phone}</p>
                    )}
                  </div>

                  {/* メールアドレス */}
                  <div className="space-y-3">
                    <Label htmlFor="email" className="text-sm font-medium text-foreground">
                      メールアドレス <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className={`h-12 ${errors.email ? 'border-red-500' : 'border-neutral-light-300 dark:border-neutral-dark-600'} focus:ring-2 focus:ring-[#14532d]/20 focus:border-[#14532d] transition-colors`}
                      placeholder="example@company.com"
                    />
                    {errors.email && (
                      <p className="text-sm text-red-500 mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* お問い合わせ内容セクション */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-foreground flex items-center">
                  <div className="w-2 h-2 bg-[#14532d] rounded-full mr-3"></div>
                  お問い合わせ内容
                </h3>
                
                {/* お問い合わせ内容選択 */}
                <div className="space-y-3">
                  <Label className="text-sm font-medium text-foreground">
                    サービス <span className="text-red-500">*</span>
                  </Label>
                  <select
                    value={formData.inquiryType}
                    onChange={(e) => handleInputChange('inquiryType', e.target.value)}
                    className={`h-12 w-full rounded-md border px-3 py-2 text-sm bg-background ${
                      errors.inquiryType ? 'border-red-500' : 'border-neutral-light-300 dark:border-neutral-dark-600'
                    } focus:ring-2 focus:ring-[#14532d]/20 focus:border-[#14532d] transition-colors focus:outline-none`}
                  >
                    <option value="">ご希望のサービスを選択してください</option>
                    <option value="website">ウェブサイト制作</option>
                    <option value="lp">LP制作</option>
                    <option value="system">システム開発</option>
                    <option value="app">アプリ開発</option>
                  </select>
                  {errors.inquiryType && (
                    <p className="text-sm text-red-500 mt-1">{errors.inquiryType}</p>
                  )}
                </div>

                {/* お問い合わせ内容詳細 */}
                <div className="space-y-3">
                  <Label htmlFor="inquiryDetails" className="text-sm font-medium text-foreground">
                    詳細内容 <span className="text-muted-foreground text-xs">(任意)</span>
                  </Label>
                  <Textarea
                    id="inquiryDetails"
                    value={formData.inquiryDetails}
                    onChange={(e) => handleInputChange('inquiryDetails', e.target.value)}
                    placeholder="具体的なご要望やご質問がございましたら、お聞かせください。&#10;例：予算感、希望納期、機能要件など"
                    rows={5}
                    className="resize-none border-neutral-light-300 dark:border-neutral-dark-600 focus:ring-2 focus:ring-[#14532d]/20 focus:border-[#14532d] transition-colors"
                  />
                </div>
              </div>

              {/* 送信ボタン */}
              <div className="pt-6">
                <Button 
                  type="submit" 
                  className="w-full h-14 bg-[#14532d] hover:bg-[#15803d] text-white font-semibold text-base rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                >
                  お問い合わせを送信する
                </Button>
                <p className="text-xs text-muted-foreground text-center mt-3">
                  送信後、2営業日以内にご返信いたします
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  )
}