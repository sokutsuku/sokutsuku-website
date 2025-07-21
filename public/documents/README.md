# Documents Directory

このディレクトリには、ダウンロード可能なドキュメントファイルを保管します。

## 対象ファイル

### 会社資料
- 会社概要パンフレット
- サービス紹介資料
- 料金表

### 法的文書
- プライバシーポリシー（PDF版）
- 利用規約（PDF版）
- 特定商取引法に基づく表記

### 技術資料
- API仕様書
- 技術解説資料
- ホワイトペーパー

## 推奨ファイル形式

- **PDF** - 文書の場合
- **ZIP** - 複数ファイルのパッケージ

## 命名規則

```
sokutsuku-company-profile-2025.pdf
service-pricing-202501.pdf
api-specification-v1.0.pdf
```

## 使用例

```tsx
<a 
  href="/documents/sokutsuku-company-profile.pdf"
  download
  className="btn-primary"
>
  会社概要をダウンロード
</a>
```