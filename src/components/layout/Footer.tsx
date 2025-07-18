import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 会社情報 */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">SOKUTSUKU</h3>
            <p className="text-sm text-muted-foreground">
              発想を、10倍速でかたちに
            </p>
            <p className="text-sm text-muted-foreground">
              生成AIを活用した次世代の受託開発事業
            </p>
          </div>

          {/* サービス */}
          <div className="space-y-4">
            <h4 className="font-semibold">サービス</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/services" className="hover:text-primary transition-colors">
                  サービス一覧
                </Link>
              </li>
              <li>
                <Link href="/works" className="hover:text-primary transition-colors">
                  実績紹介
                </Link>
              </li>
            </ul>
          </div>

          {/* 会社情報 */}
          <div className="space-y-4">
            <h4 className="font-semibold">会社情報</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  私たちについて
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-primary transition-colors">
                  よくある質問
                </Link>
              </li>
            </ul>
          </div>

          {/* 法的情報 */}
          <div className="space-y-4">
            <h4 className="font-semibold">法的情報</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/privacy-policy" className="hover:text-primary transition-colors">
                  プライバシーポリシー
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-primary transition-colors">
                  利用規約
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* コピーライト */}
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 SOKUTSUKU. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}