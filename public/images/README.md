# Images Directory

このディレクトリには、SOKUTSUKUウェブサイトで使用する画像ファイルを保管します。

## ディレクトリ構成

### 📁 `hero/`
- ヒーローセクションで使用する画像
- メインビジュアル、背景画像など

### 📁 `services/`
- サービス紹介ページで使用する画像
- サービス説明用のアイコン、イラスト、スクリーンショットなど

### 📁 `works/`
- 実績紹介で使用する画像
- プロジェクトのスクリーンショット、ケーススタディ画像など

### 📁 `team/`
- チームメンバーの写真
- プロフィール画像、チーム写真など

### 📁 `about/`
- 会社紹介・Aboutページで使用する画像
- オフィス写真、企業文化を表す画像など

### 📁 `icons/`
- アイコン類
- UI要素、機能アイコン、装飾用アイコンなど

### 📁 `logos/`
- ロゴファイル
- SOKUTSUKUロゴ、パートナー企業ロゴなど

## 画像ファイル命名規則

### 基本ルール
- 英数字とハイフンのみ使用
- 小文字で統一
- 拡張子は小文字（.jpg, .png, .svg, .webp）

### 命名例
```
hero-main-visual.jpg
service-ai-integration-icon.svg
work-project-abc-screenshot.png
team-member-john-doe.jpg
about-office-tokyo.jpg
icon-arrow-right.svg
logo-sokutsuku-dark.svg
```

## 推奨画像形式

### 写真・複雑な画像
- **WebP** (第一選択) - 高圧縮率、モダンブラウザ対応
- **JPEG** (フォールバック) - 幅広いブラウザ対応

### アイコン・シンプルな画像
- **SVG** (第一選択) - ベクター、スケーラブル
- **PNG** (透明背景が必要な場合)

### 画像サイズガイドライン

#### ヒーロー画像
- 幅: 1920px以上推奨
- 縦横比: 16:9 または 21:9

#### サービス画像
- 幅: 800px程度
- 縦横比: 16:9 または 4:3

#### チームメンバー写真
- 最小: 300x300px
- 推奨: 500x500px
- 縦横比: 1:1（正方形）

#### アイコン
- SVG: 24px, 32px, 48px対応
- PNG: 24px, 32px, 48px, 64px, 96px

## Next.js Image Optimization

このプロジェクトでは`next/image`コンポーネントを使用します：

```tsx
import Image from 'next/image'

<Image
  src="/images/hero/main-visual.jpg"
  alt="SOKUTSUKUのメインビジュアル"
  width={1920}
  height={1080}
  priority // ヒーロー画像の場合
/>
```

## 注意事項

- 著作権に注意し、適切なライセンスの画像のみ使用
- ファイルサイズは可能な限り最適化
- Retinaディスプレイ対応のため、2倍サイズの画像も用意推奨
- アクセシビリティのため、適切なalt属性を設定