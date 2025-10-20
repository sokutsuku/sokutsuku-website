'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { X, ArrowLeft, ArrowRight, Check, Loader2 } from 'lucide-react'
import { useTheme } from '@/components/ThemeProvider'
import type { ContactApiResponse } from '@/types/contact'

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

type Step = 1 | 2 | 3 | 4

const TOTAL_STEPS = 4

export function ContactSlidePanel({ isOpen, onClose }: ContactSlidePanelProps) {
  const { theme } = useTheme()
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
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  // パネルが閉じた時にステップをリセット
  useEffect(() => {
    if (!isOpen) {
      setCurrentStep(1)
      setErrors({})
      setIsSubmitting(false)
      setSubmitError(null)
    }
  }, [isOpen])

  // ローカルストレージに一時保存
  useEffect(() => {
    if (isOpen) {
      const saved = localStorage.getItem('contactFormData')
      if (saved) {
        try {
          setFormData(JSON.parse(saved))
        } catch (_) {
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

  const handleSubmit = async () => {
    setIsSubmitting(true)
    setSubmitError(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.companyName,
          message: `【サービス】${formData.inquiryType === 'website' ? 'ウェブサイト制作' : formData.inquiryType === 'lp' ? 'LP制作' : formData.inquiryType === 'system' ? 'システム開発' : formData.inquiryType === 'app' ? 'アプリ開発' : formData.inquiryType}\n【電話番号】${formData.phone}\n【詳細】\n${formData.inquiryDetails || '（詳細なし）'}`
        })
      })

      const result: ContactApiResponse = await response.json()

      if (!response.ok || !result.success) {
        throw new Error(result.error || 'お問い合わせの送信に失敗しました')
      }

      // 送信成功
      localStorage.removeItem('contactFormData')

      // フォームをリセット
      setFormData({
        companyName: '',
        name: '',
        phone: '',
        email: '',
        inquiryType: '',
        inquiryDetails: ''
      })

      // 成功メッセージを表示（アラート）
      alert('お問い合わせを受け付けました。\n担当者より1営業日以内にご連絡いたします。')

      onClose()
    } catch (error) {
      console.error('送信エラー:', error)
      setSubmitError(error instanceof Error ? error.message : 'お問い合わせの送信に失敗しました')
    } finally {
      setIsSubmitting(false)
    }
  }

  const getStepTitle = () => {
    switch (currentStep) {
      case 1: return '基本情報'
      case 2: return '連絡先'
      case 3: return 'お問い合わせ内容'
      case 4: return '確認'
      default: return ''
    }
  }

  const getStepDescription = () => {
    switch (currentStep) {
      case 1: return '会社名とお名前を入力してください'
      case 2: return '連絡先を入力してください'
      case 3: return 'ご希望のサービスと詳細をお聞かせください'
      case 4: return '入力内容をご確認ください'
      default: return ''
    }
  }

  // テーマに応じた背景色を取得する関数
  const getBgColor = () => {
    return theme === 'dark' ? '#101411' : '#FBFDFB' // neutral-dark-950 : neutral-light-50
  }

  // テーマに応じたボーダー色を取得する関数
  const getBorderColor = () => {
    return theme === 'dark' ? '#1C2A20' : '#E9EFEA' // neutral-dark-800 : neutral-light-300
  }

  // テーマに応じたテキスト色を取得する関数
  const getTextColor = () => {
    return theme === 'dark' ? '#A4C8A8' : '#224F36' // neutral-dark-200 : neutral-light-950
  }

  // テーマに応じたミューテッドテキスト色を取得する関数
  const getMutedTextColor = () => {
    return theme === 'dark' ? '#678A6F' : '#99B2A3' // neutral-dark-400 : neutral-light-600
  }

  const renderProgressBar = () => (
    <div className="flex items-center justify-center px-2">
      <div className="flex items-center space-x-2">
        {Array.from({ length: TOTAL_STEPS }).map((_, index) => {
          const step = index + 1
          const isActive = step === currentStep
          const isCompleted = step < currentStep
          
          return (
            <div key={step} className="flex items-center">
              <div 
                className={`
                  w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 border-2
                  ${isActive 
                    ? 'bg-[#14532d] text-white border-[#14532d] shadow-lg scale-110 shadow-[#14532d]/20' 
                    : isCompleted 
                      ? 'bg-[#14532d] text-white border-[#14532d] shadow-md' 
                      : `border-[${getMutedTextColor()}]/30`
                  }
                `}
                style={{
                  backgroundColor: isActive || isCompleted ? '#14532d' : getBgColor(),
                  color: isActive || isCompleted ? 'white' : getMutedTextColor(),
                  borderColor: isActive || isCompleted ? '#14532d' : `${getMutedTextColor()}30`
                }}
              >
                {isCompleted ? <Check className="w-4 h-4" /> : step}
              </div>
              {step < TOTAL_STEPS && (
                <div 
                  className={`w-8 h-0.5 mx-2 rounded-full transition-all duration-300`}
                  style={{
                    backgroundColor: step < currentStep ? '#14532d' : `${getMutedTextColor()}30`
                  }}
                />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )

  const renderStep = () => {
    const labelColorClass = theme === 'dark' ? 'text-[#A4C8A8]' : 'text-[#224F36]'
    const inputBorderClass = theme === 'dark' ? 'border-[#2B4031]' : 'border-[#E9EFEA]'
    const inputBgClass = theme === 'dark' ? 'bg-[#101411]' : 'bg-[#F8FAF8]'

    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4 sm:space-y-6">
            <div className="space-y-2 sm:space-y-3">
              <Label htmlFor="companyName" className={`text-sm sm:text-base font-medium ${labelColorClass}`}>
                会社名 <span className="text-red-500">*</span>
              </Label>
              <Input
                id="companyName"
                value={formData.companyName}
                onChange={(e) => handleInputChange('companyName', e.target.value)}
                className={`h-12 text-base sm:text-base text-[16px] ${errors.companyName ? 'border-red-500 focus:ring-red-500/20' : inputBorderClass} focus:ring-2 focus:ring-[#14532d]/20 focus:border-[#14532d] transition-all duration-200 rounded-lg ${inputBgClass}`}
                placeholder="株式会社○○"
                autoFocus
              />
              {errors.companyName && (
                <p className="text-sm text-red-500 mt-1">{errors.companyName}</p>
              )}
            </div>

            <div className="space-y-2 sm:space-y-3">
              <Label htmlFor="name" className={`text-sm sm:text-base font-medium ${labelColorClass}`}>
                お名前 <span className="text-red-500">*</span>
              </Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className={`h-12 text-base sm:text-base text-[16px] ${errors.name ? 'border-red-500 focus:ring-red-500/20' : inputBorderClass} focus:ring-2 focus:ring-[#14532d]/20 focus:border-[#14532d] transition-all duration-200 rounded-lg ${inputBgClass}`}
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
              <Label htmlFor="phone" className={`text-sm sm:text-base font-medium ${labelColorClass}`}>
                電話番号 <span className="text-red-500">*</span>
              </Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className={`h-12 text-base sm:text-base text-[16px] ${errors.phone ? 'border-red-500 focus:ring-red-500/20' : inputBorderClass} focus:ring-2 focus:ring-[#14532d]/20 focus:border-[#14532d] transition-all duration-200 rounded-lg ${inputBgClass}`}
                placeholder="03-1234-5678"
                autoFocus
              />
              {errors.phone && (
                <p className="text-sm text-red-500 mt-1">{errors.phone}</p>
              )}
            </div>

            <div className="space-y-2 sm:space-y-3">
              <Label htmlFor="email" className={`text-sm sm:text-base font-medium ${labelColorClass}`}>
                メールアドレス <span className="text-red-500">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className={`h-12 text-base sm:text-base text-[16px] ${errors.email ? 'border-red-500 focus:ring-red-500/20' : inputBorderClass} focus:ring-2 focus:ring-[#14532d]/20 focus:border-[#14532d] transition-all duration-200 rounded-lg ${inputBgClass}`}
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
          <div className="space-y-6">
            {/* サービス選択 - セレクトボックス風 */}
            <div className="space-y-3">
              <Label className={`text-base font-medium ${labelColorClass}`}>
                ご希望のサービス <span className="text-red-500">*</span>
              </Label>
              <div className="relative">
                <select
                  value={formData.inquiryType}
                  onChange={(e) => handleInputChange('inquiryType', e.target.value)}
                  className={`w-full h-12 text-base text-[16px] ${inputBgClass} border-2 rounded-lg px-4 pr-10 transition-all duration-200 appearance-none cursor-pointer ${
                    errors.inquiryType 
                      ? 'border-red-500 focus:ring-red-500/20' 
                      : inputBorderClass
                  } focus:ring-2 focus:ring-[#14532d]/20 focus:border-[#14532d] focus:outline-none`}
                >
                  <option value="">サービスを選択してください</option>
                  <option value="website">ウェブサイト制作</option>
                  <option value="lp">LP制作</option>
                  <option value="system">システム開発</option>
                  <option value="app">アプリ開発</option>
                </select>
                {/* ドロップダウン矢印 */}
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" style={{ color: getMutedTextColor() }}>
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              {errors.inquiryType && (
                <p className="text-sm text-red-500 mt-1">{errors.inquiryType}</p>
              )}
            </div>

            {/* 詳細内容 */}
            <div className="space-y-3">
              <Label htmlFor="inquiryDetails" className={`text-base font-medium ${labelColorClass}`}>
                詳細内容・ご要望
              </Label>
              <Textarea
                id="inquiryDetails"
                value={formData.inquiryDetails}
                onChange={(e) => handleInputChange('inquiryDetails', e.target.value)}
                placeholder="具体的なご要望やご質問がございましたら、お聞かせください。&#10;例：予算感、希望納期、機能要件など"
                rows={6}
                className={`resize-none text-base text-[16px] ${inputBorderClass} focus:ring-2 focus:ring-[#14532d]/20 focus:border-[#14532d] transition-all duration-200 rounded-lg ${inputBgClass}`}
              />
            </div>
            
            <div 
              className="p-4 rounded-lg"
              style={{ backgroundColor: theme === 'dark' ? '#1C2A20' : '#F1F5F2' }}
            >
              <p className="text-sm" style={{ color: getMutedTextColor() }}>
                💡 より詳細な情報をいただくことで、お客様に最適なご提案をさせていただけます。
              </p>
            </div>
          </div>
        )

      case 4:
        return (
          <div className="space-y-6">
            <div 
              className="p-6 rounded-lg space-y-4"
              style={{ backgroundColor: theme === 'dark' ? '#1C2A20' : '#F1F5F2' }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className={`font-medium ${labelColorClass} mb-1`}>会社名</h4>
                  <p className="text-sm" style={{ color: getMutedTextColor() }}>{formData.companyName}</p>
                </div>
                <div>
                  <h4 className={`font-medium ${labelColorClass} mb-1`}>お名前</h4>
                  <p className="text-sm" style={{ color: getMutedTextColor() }}>{formData.name}</p>
                </div>
                <div>
                  <h4 className={`font-medium ${labelColorClass} mb-1`}>電話番号</h4>
                  <p className="text-sm" style={{ color: getMutedTextColor() }}>{formData.phone}</p>
                </div>
                <div>
                  <h4 className={`font-medium ${labelColorClass} mb-1`}>メールアドレス</h4>
                  <p className="text-sm" style={{ color: getMutedTextColor() }}>{formData.email}</p>
                </div>
              </div>
              <div className="md:col-span-2">
                <h4 className={`font-medium ${labelColorClass} mb-1`}>ご希望のサービス</h4>
                <p className="text-sm" style={{ color: getMutedTextColor() }}>
                  {formData.inquiryType === 'website' && 'ウェブサイト制作'}
                  {formData.inquiryType === 'lp' && 'LP制作'}
                  {formData.inquiryType === 'system' && 'システム開発'}
                  {formData.inquiryType === 'app' && 'アプリ開発'}
                </p>
              </div>
              {formData.inquiryDetails && (
                <div className="md:col-span-2">
                  <h4 className={`font-medium ${labelColorClass} mb-1`}>詳細内容・ご要望</h4>
                  <p className="text-sm whitespace-pre-wrap" style={{ color: getMutedTextColor() }}>{formData.inquiryDetails}</p>
                </div>
              )}
            </div>
            <div className="p-4 rounded-lg border" style={{
              backgroundColor: theme === 'dark' ? 'rgba(20, 83, 45, 0.1)' : 'rgba(20, 83, 45, 0.1)',
              borderColor: theme === 'dark' ? 'rgba(20, 83, 45, 0.2)' : 'rgba(20, 83, 45, 0.2)'
            }}>
              <p className={`text-sm ${labelColorClass}`}>
                📧 送信後、1営業日以内にご返信いたします。お急ぎの場合はお電話でもお気軽にお問い合わせください。
              </p>
            </div>
            {submitError && (
              <div className="p-4 rounded-lg border border-red-500 bg-red-500/10">
                <p className="text-sm text-red-500">{submitError}</p>
              </div>
            )}
          </div>
        )

      default:
        return null
    }
  }

  const renderButtons = () => {
    if (currentStep === 4) {
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
            disabled={isSubmitting}
            className="flex-1 h-12 sm:h-14 bg-[#14532d] hover:bg-[#15803d] text-white font-semibold text-sm sm:text-base rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 animate-spin" />
                送信中...
              </>
            ) : (
              <>
                <Check className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                送信する
              </>
            )}
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
          {currentStep === 3 ? (
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
        fixed right-0 top-0 w-full sm:w-[50vw] lg:w-[40vw] xl:w-[35vw] h-screen z-50 
        transition-transform duration-300 ease-out
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        <div 
          className="h-screen border-l shadow-2xl relative"
          style={{
            backgroundColor: getBgColor(),
            borderLeftColor: getBorderColor()
          }}
        >
          {/* ヘッダー - 閉じるボタンのみ */}
          <div className="absolute top-0 right-0 z-10 p-6">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={onClose}
              className="rounded-full h-10 w-10 shrink-0 transition-all duration-200"
              style={{
                color: getMutedTextColor(),
                backgroundColor: 'transparent'
              }}
              onMouseEnter={(e) => {
                const target = e.currentTarget
                target.style.color = getTextColor()
                target.style.backgroundColor = theme === 'dark' ? 'rgba(16, 20, 17, 0.8)' : 'rgba(248, 250, 248, 0.8)'
              }}
              onMouseLeave={(e) => {
                const target = e.currentTarget
                target.style.color = getMutedTextColor()
                target.style.backgroundColor = 'transparent'
              }}
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
          
          {/* メインコンテンツ - 画面全体の中央配置 */}
          <div className="h-full flex flex-col justify-center items-center p-6">
            <div className="w-full max-w-md">
              <div className="space-y-8">
                {renderProgressBar()}
                
                {/* ステップタイトルと説明 */}
                <div className="text-center space-y-3">
                  <h2 className="text-2xl font-bold" style={{ color: getTextColor() }}>
                    {getStepTitle()}
                  </h2>
                  <p className="text-sm leading-relaxed" style={{ color: getMutedTextColor() }}>
                    {getStepDescription()}
                  </p>
                </div>
                
                <div className="space-y-6">
                  {renderStep()}
                </div>
                
                <div className="pt-6 border-t" style={{ borderTopColor: getBorderColor() }}>
                  {renderButtons()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}