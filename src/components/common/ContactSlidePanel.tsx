'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { X, ArrowLeft, ArrowRight, Check } from 'lucide-react'

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

type Step = 1 | 2 | 3 | 4 | 5

const TOTAL_STEPS = 5

export function ContactSlidePanel({ isOpen, onClose }: ContactSlidePanelProps) {
  const [currentStep, setCurrentStep] = useState<Step>(1)
  const [formData, setFormData] = useState<FormData>({
    companyName: '',
    name: '',
    phone: '',
    email: '',
    inquiryType: '',
    inquiryDetails: ''
  })

  const [errors, setErrors] = useState<Partial<FormData>>({})

  // パネルが閉じた時にステップをリセット
  useEffect(() => {
    if (!isOpen) {
      setCurrentStep(1)
      setErrors({})
    }
  }, [isOpen])

  // ローカルストレージに一時保存
  useEffect(() => {
    if (isOpen) {
      const saved = localStorage.getItem('contactFormData')
      if (saved) {
        try {
          setFormData(JSON.parse(saved))
        } catch (e) {
          console.error('Failed to parse saved form data')
        }
      }
    }
  }, [isOpen])

  const handleInputChange = (field: keyof FormData, value: string) => {
    const newFormData = { ...formData, [field]: value }
    setFormData(newFormData)
    localStorage.setItem('contactFormData', JSON.stringify(newFormData))
    
    // エラーをクリア
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  const validateCurrentStep = () => {
    const newErrors: Partial<FormData> = {}

    switch (currentStep) {
      case 1: // 基本情報
        if (!formData.companyName.trim()) newErrors.companyName = '会社名は必須です'
        if (!formData.name.trim()) newErrors.name = '名前は必須です'
        break
      case 2: // 連絡先
        if (!formData.phone.trim()) newErrors.phone = '電話番号は必須です'
        if (!formData.email.trim()) {
          newErrors.email = 'メールアドレスは必須です'
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
          newErrors.email = 'メールアドレスの形式が正しくありません'
        }
        break
      case 3: // 問い合わせ内容
        if (!formData.inquiryType) newErrors.inquiryType = 'お問い合わせ内容を選択してください'
        break
      case 4: // 詳細（任意なのでバリデーションなし）
        break
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (validateCurrentStep() && currentStep < TOTAL_STEPS) {
      setCurrentStep((prev) => (prev + 1) as Step)
    }
  }

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => (prev - 1) as Step)
    }
  }

  const handleSubmit = () => {
    console.log('フォームデータ:', formData)
    // TODO: フォーム送信処理
    localStorage.removeItem('contactFormData')
    onClose()
  }

  const getStepTitle = () => {
    switch (currentStep) {
      case 1: return '基本情報'
      case 2: return '連絡先'
      case 3: return 'お問い合わせ内容'
      case 4: return '詳細内容'
      case 5: return '確認'
      default: return ''
    }
  }

  const getStepDescription = () => {
    switch (currentStep) {
      case 1: return '会社名とお名前を入力してください'
      case 2: return '連絡先を入力してください'
      case 3: return 'ご希望のサービスを選択してください'
      case 4: return '詳細なご要望があればお聞かせください（任意）'
      case 5: return '入力内容をご確認ください'
      default: return ''
    }
  }

  const renderProgressBar = () => (
    <div className="flex items-center justify-center mb-6 px-2">
      <div className="flex items-center space-x-1 sm:space-x-2">
        {Array.from({ length: TOTAL_STEPS }).map((_, index) => {
          const step = index + 1
          const isActive = step === currentStep
          const isCompleted = step < currentStep
          
          return (
            <div key={step} className="flex items-center">
              <div className={`
                w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-xs sm:text-sm font-semibold transition-all duration-300
                ${isActive 
                  ? 'bg-[#14532d] text-white shadow-lg scale-110' 
                  : isCompleted 
                    ? 'bg-[#14532d] text-white' 
                    : 'bg-muted text-muted-foreground'
                }
              `}>
                {isCompleted ? <Check className="w-3 h-3 sm:w-5 sm:h-5" /> : step}
              </div>
              {step < TOTAL_STEPS && (
                <div className={`
                  w-6 sm:w-12 h-1 mx-1 sm:mx-2 rounded-full transition-all duration-300
                  ${step < currentStep ? 'bg-[#14532d]' : 'bg-muted'}
                `} />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4 sm:space-y-6">
            <div className="space-y-2 sm:space-y-3">
              <Label htmlFor="companyName" className="text-sm sm:text-base font-medium text-foreground">
                会社名 <span className="text-red-500">*</span>
              </Label>
              <Input
                id="companyName"
                value={formData.companyName}
                onChange={(e) => handleInputChange('companyName', e.target.value)}
                className={`h-12 sm:h-14 text-sm sm:text-base ${errors.companyName ? 'border-red-500' : 'border-neutral-light-300 dark:border-neutral-dark-600'} focus:ring-2 focus:ring-[#14532d]/20 focus:border-[#14532d] transition-colors`}
                placeholder="株式会社○○"
                autoFocus
              />
              {errors.companyName && (
                <p className="text-sm text-red-500 mt-1">{errors.companyName}</p>
              )}
            </div>

            <div className="space-y-2 sm:space-y-3">
              <Label htmlFor="name" className="text-sm sm:text-base font-medium text-foreground">
                お名前 <span className="text-red-500">*</span>
              </Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className={`h-12 sm:h-14 text-sm sm:text-base ${errors.name ? 'border-red-500' : 'border-neutral-light-300 dark:border-neutral-dark-600'} focus:ring-2 focus:ring-[#14532d]/20 focus:border-[#14532d] transition-colors`}
                placeholder="田中 太郎"
              />
              {errors.name && (
                <p className="text-sm text-red-500 mt-1">{errors.name}</p>
              )}
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-4 sm:space-y-6">
            <div className="space-y-2 sm:space-y-3">
              <Label htmlFor="phone" className="text-sm sm:text-base font-medium text-foreground">
                電話番号 <span className="text-red-500">*</span>
              </Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className={`h-12 sm:h-14 text-sm sm:text-base ${errors.phone ? 'border-red-500' : 'border-neutral-light-300 dark:border-neutral-dark-600'} focus:ring-2 focus:ring-[#14532d]/20 focus:border-[#14532d] transition-colors`}
                placeholder="03-1234-5678"
                autoFocus
              />
              {errors.phone && (
                <p className="text-sm text-red-500 mt-1">{errors.phone}</p>
              )}
            </div>

            <div className="space-y-2 sm:space-y-3">
              <Label htmlFor="email" className="text-sm sm:text-base font-medium text-foreground">
                メールアドレス <span className="text-red-500">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className={`h-12 sm:h-14 text-sm sm:text-base ${errors.email ? 'border-red-500' : 'border-neutral-light-300 dark:border-neutral-dark-600'} focus:ring-2 focus:ring-[#14532d]/20 focus:border-[#14532d] transition-colors`}
                placeholder="example@company.com"
              />
              {errors.email && (
                <p className="text-sm text-red-500 mt-1">{errors.email}</p>
              )}
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-4 sm:space-y-6">
            <div className="space-y-3 sm:space-y-4">
              <Label className="text-sm sm:text-base font-medium text-foreground">
                ご希望のサービス <span className="text-red-500">*</span>
              </Label>
              <div className="grid grid-cols-1 gap-2 sm:gap-3">
                {[
                  { value: 'website', label: 'ウェブサイト制作', desc: 'コーポレートサイト、ECサイトなど' },
                  { value: 'lp', label: 'LP制作', desc: 'ランディングページの制作' },
                  { value: 'system', label: 'システム開発', desc: '業務システム、Webアプリケーション' },
                  { value: 'app', label: 'アプリ開発', desc: 'スマートフォンアプリの開発' }
                ].map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => handleInputChange('inquiryType', option.value)}
                    className={`
                      text-left p-3 sm:p-4 rounded-lg border-2 transition-all duration-200 hover:border-[#14532d]/50
                      ${formData.inquiryType === option.value 
                        ? 'border-[#14532d] bg-[#14532d]/5 shadow-md' 
                        : 'border-neutral-light-300 dark:border-neutral-dark-600 hover:bg-muted'
                      }
                    `}
                  >
                    <div className="font-medium text-foreground text-sm sm:text-base mb-1">{option.label}</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">{option.desc}</div>
                  </button>
                ))}
              </div>
              {errors.inquiryType && (
                <p className="text-sm text-red-500 mt-1">{errors.inquiryType}</p>
              )}
            </div>
          </div>
        )

      case 4:
        return (
          <div className="space-y-6">
            <div className="space-y-3">
              <Label htmlFor="inquiryDetails" className="text-base font-medium text-foreground">
                詳細内容 <span className="text-muted-foreground text-sm">(任意)</span>
              </Label>
              <Textarea
                id="inquiryDetails"
                value={formData.inquiryDetails}
                onChange={(e) => handleInputChange('inquiryDetails', e.target.value)}
                placeholder="具体的なご要望やご質問がございましたら、お聞かせください。&#10;例：予算感、希望納期、機能要件など"
                rows={8}
                className="resize-none text-base border-neutral-light-300 dark:border-neutral-dark-600 focus:ring-2 focus:ring-[#14532d]/20 focus:border-[#14532d] transition-colors"
                autoFocus
              />
            </div>
            <div className="bg-muted/50 p-4 rounded-lg">
              <p className="text-sm text-muted-foreground">
                💡 より詳細な情報をいただくことで、お客様に最適なご提案をさせていただけます。
              </p>
            </div>
          </div>
        )

      case 5:
        return (
          <div className="space-y-6">
            <div className="bg-muted/30 p-6 rounded-lg space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-foreground mb-1">会社名</h4>
                  <p className="text-sm text-muted-foreground">{formData.companyName}</p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">お名前</h4>
                  <p className="text-sm text-muted-foreground">{formData.name}</p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">電話番号</h4>
                  <p className="text-sm text-muted-foreground">{formData.phone}</p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">メールアドレス</h4>
                  <p className="text-sm text-muted-foreground">{formData.email}</p>
                </div>
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-1">ご希望のサービス</h4>
                <p className="text-sm text-muted-foreground">
                  {formData.inquiryType === 'website' && 'ウェブサイト制作'}
                  {formData.inquiryType === 'lp' && 'LP制作'}
                  {formData.inquiryType === 'system' && 'システム開発'}
                  {formData.inquiryType === 'app' && 'アプリ開発'}
                </p>
              </div>
              {formData.inquiryDetails && (
                <div>
                  <h4 className="font-medium text-foreground mb-1">詳細内容</h4>
                  <p className="text-sm text-muted-foreground whitespace-pre-wrap">{formData.inquiryDetails}</p>
                </div>
              )}
            </div>
            <div className="bg-[#14532d]/10 p-4 rounded-lg border border-[#14532d]/20">
              <p className="text-sm text-foreground">
                📧 送信後、2営業日以内にご返信いたします。お急ぎの場合はお電話でもお気軽にお問い合わせください。
              </p>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  const renderButtons = () => {
    if (currentStep === 5) {
      return (
        <div className="flex gap-2 sm:gap-3">
          <Button 
            type="button"
            variant="outline"
            onClick={handlePrev}
            className="flex-1 h-12 sm:h-14 font-semibold text-sm sm:text-base rounded-xl border-2 hover:bg-muted transition-all duration-200"
          >
            <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
            修正する
          </Button>
          <Button 
            onClick={handleSubmit}
            className="flex-1 h-12 sm:h-14 bg-[#14532d] hover:bg-[#15803d] text-white font-semibold text-sm sm:text-base rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
          >
            <Check className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
            送信する
          </Button>
        </div>
      )
    }

    return (
      <div className="flex gap-2 sm:gap-3">
        <Button 
          type="button"
          variant="outline"
          onClick={currentStep === 1 ? onClose : handlePrev}
          className="flex-1 h-12 sm:h-14 font-semibold text-sm sm:text-base rounded-xl border-2 hover:bg-muted transition-all duration-200"
        >
          {currentStep === 1 ? (
            <>
              <X className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              キャンセル
            </>
          ) : (
            <>
              <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              戻る
            </>
          )}
        </Button>
        <Button 
          onClick={handleNext}
          className="flex-1 h-12 sm:h-14 bg-[#14532d] hover:bg-[#15803d] text-white font-semibold text-sm sm:text-base rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
        >
          {currentStep === 4 ? (
            <>
              確認する
              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2" />
            </>
          ) : (
            <>
              次へ
              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2" />
            </>
          )}
        </Button>
      </div>
    )
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
        fixed inset-0 z-50 
        transition-transform duration-300 ease-out
        ${isOpen ? 'translate-y-0' : 'translate-y-full'}
      `}>
        <Card className="h-screen overflow-y-auto bg-white dark:bg-[#101411] border-0">
          <CardHeader className="flex flex-row items-center justify-between pb-6 border-b border-neutral-light-200 dark:border-neutral-dark-700">
            <div className="flex-1">
              <CardTitle className="text-2xl font-bold text-foreground mb-2">
                {getStepTitle()}
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                {getStepDescription()}
              </p>
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={onClose}
              className="text-muted-foreground hover:text-foreground hover:bg-muted rounded-full h-10 w-10 ml-4"
            >
              <X className="w-5 h-5" />
            </Button>
          </CardHeader>
          
          <CardContent className="pt-4 pb-4 px-4 sm:pt-8 sm:pb-8 sm:px-6 flex-1 flex flex-col min-h-0">
            {renderProgressBar()}
            
            <div className="flex-1 mb-4 sm:mb-8 overflow-y-auto">
              {renderStep()}
            </div>
            
            <div className="mt-auto pt-4 border-t border-neutral-light-200 dark:border-neutral-dark-700">
              {renderButtons()}
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}