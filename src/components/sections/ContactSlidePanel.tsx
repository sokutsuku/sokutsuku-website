import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { X, Mail, Phone, MessageCircle } from 'lucide-react'

interface ContactSlidePanelProps {
  isOpen: boolean
  onClose: () => void
}

export function ContactSlidePanel({ isOpen, onClose }: ContactSlidePanelProps) {
  if (!isOpen) return null

  return (
    <>
      {/* オーバーレイ */}
      <div 
        className="fixed inset-0 bg-black/50 z-40 transition-opacity"
        onClick={onClose}
      />
      
      {/* スライドパネル */}
      <div className={`
        fixed bottom-0 left-0 right-0 z-50 
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-y-0' : 'translate-y-full'}
      `}>
        <Card className="rounded-t-lg rounded-b-none max-h-[80vh] overflow-y-auto">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                お問い合わせ
              </CardTitle>
              <CardDescription>
                ご質問やご相談はお気軽にお声がけください
              </CardDescription>
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={onClose}
            >
              <X className="w-4 h-4" />
            </Button>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {/* お問い合わせ方法 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-4">
                <h3 className="font-semibold">お問い合わせ方法</h3>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-muted">
                    <Mail className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">メール</p>
                      <p className="text-sm text-muted-foreground">
                        info@sokutsuku.com
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-muted">
                    <Phone className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">電話</p>
                      <p className="text-sm text-muted-foreground">
                        03-1234-5678
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-semibold">営業時間</h3>
                <div className="space-y-2 text-sm">
                  <p>平日: 9:00 - 18:00</p>
                  <p>土日祝: 休業</p>
                </div>
                
                <div className="space-y-2">
                  <p className="text-sm font-medium">初回相談は無料です</p>
                  <p className="text-sm text-muted-foreground">
                    お気軽にお声がけください
                  </p>
                </div>
              </div>
            </div>
            
            {/* CTAボタン */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button className="flex-1" size="lg">
                <Mail className="w-4 h-4 mr-2" />
                メールで相談
              </Button>
              <Button variant="outline" className="flex-1" size="lg">
                <Phone className="w-4 h-4 mr-2" />
                電話で相談
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}