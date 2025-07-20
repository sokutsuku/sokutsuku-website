# DESIGN-RULE.md

このファイルは、SOKUTSUKUサイトのデザインシステムとルールを定義します。
開発時は必ずこのファイルを参照してください。

## 📋 目次
1. [カラーシステム](#カラーシステム)
2. [タイポグラフィ](#タイポグラフィ)
3. [スペーシング](#スペーシング)
4. [コンポーネント](#コンポーネント)
5. [レイアウト](#レイアウト)

---

## 🎨 カラーシステム

### 1. ブランドカラー
サイトの核となる「Deep Intellectual Green」とそのスケール

```yaml
brand:
  main: '#14532d' # Green 800
  scale:
    '50': '#f0fdf4'
    '100': '#dcfce7'
    '200': '#bbf7d0'
    '300': '#86efac'
    '400': '#4ade80'
    '500': '#22c55e'
    '600': '#16a34a'
    '700': '#15803d'
    '800': '#14532d'
    '900': '#064e3b'
    '950': '#052e16'
```

### 2. ニュートラルカラー（ライトモード用）
ブランドカラーを僅かに反映させた、ライトモード用の11段階のスケール

```yaml
neutral-light:
  scale:
    '50': '#FBFDFB'
    '100': '#F8FAF8'
    '200': '#F1F5F2'
    '300': '#E9EFEA'
    '400': '#DDE6DE'
    '500': '#BCCDC1'
    '600': '#99B2A3'
    '700': '#779885'
    '800': '#557D67'
    '900': '#336349'
    '950': '#224F36'
```

### 3. ニュートラルカラー（ダークモード用）
ブランドカラーを僅かに反映させた、ダークモード用の11段階のスケール

```yaml
neutral-dark:
  scale:
    '50': '#E1F6E2'
    '100': '#C2E7C5'
    '200': '#A4C8A8'
    '300': '#86A98C'
    '400': '#678A6F'
    '500': '#496B53'
    '600': '#3A5542'
    '700': '#2B4031'
    '800': '#1C2A20'
    '900': '#131A15'
    '950': '#101411'
```

### 4. テーマカラー実装

#### ダークモード
```yaml
dark-theme:
  background: '#101411'      # neutral-dark-950
  foreground: '#A4C8A8'      # neutral-dark-200
  card: '#131A15'            # neutral-dark-900
  card-foreground: '#86A98C' # neutral-dark-300
  primary: '#f0fdf4'         # brand-50
  primary-foreground: '#14532d' # brand-800
  secondary: '#1C2A20'       # neutral-dark-800
  muted: '#1C2A20'           # neutral-dark-800
  muted-foreground: '#678A6F' # neutral-dark-400
  border: '#1C2A20'          # neutral-dark-800
```

#### ライトモード
```yaml
light-theme:
  background: '#FBFDFB'      # neutral-light-50
  foreground: '#224F36'      # neutral-light-950
  card: '#F8FAF8'            # neutral-light-100
  card-foreground: '#224F36' # neutral-light-950
  primary: '#14532d'         # brand-800
  primary-foreground: '#f0fdf4' # brand-50
  secondary: '#F1F5F2'       # neutral-light-200
  muted: '#F1F5F2'           # neutral-light-200
  muted-foreground: '#99B2A3' # neutral-light-600
  border: '#E9EFEA'          # neutral-light-300
```

---

## 🔤 タイポグラフィ

### フォントファミリー
```yaml
fonts:
  english_heading: 'Bebas Neue'     # 英語見出し用
  english_body: 'DM Sans'           # 英語本文用
  japanese: 'Noto Sans JP'          # 日本語用
  
  # フォント使用ルール
  usage:
    english_all: 'Bebas Neue - 英語のテキスト全般（見出し、ロゴ、キャッチフレーズ）'
    english_ui: 'DM Sans - 英語のUI要素（ナビゲーション、ボタン、小さなテキスト）'
    japanese_all: 'Noto Sans JP - 日本語のテキスト全般（見出し、本文、UI要素）'
    
  # 使用例
  examples:
    - 'SOKUTSUKU: Bebas Neue'
    - 'SERVICES/WORKS/ABOUT: DM Sans'  
    - '（速創）: Noto Sans JP'
    - 'お問い合わせ: Noto Sans JP'
    
  # CSS変数
  css_variables:
    '--font-bebas-neue': 'Bebas Neue'
    '--font-dm-sans': 'DM Sans'  
    '--font-noto-sans-jp': 'Noto Sans JP'
```

### フォント設定
```yaml
font_weights:
  bebas_neue: 400        # 通常の太さのみ
  dm_sans: [400, 500, 600, 700]  # 通常、中、セミボールド、ボールド
  noto_sans_jp: [400, 500, 600, 700]  # 通常、中、セミボールド、ボールド

letter_spacing:
  english_heading: '0.05em'  # Bebas Neue用
  japanese_heading: 'normal' # Noto Sans JP用
  body_text: 'normal'        # DM Sans用
```

### フォントサイズ
```yaml
text-sizes:
  xs: '0.75rem'    # 12px
  sm: '0.875rem'   # 14px
  base: '1rem'     # 16px
  lg: '1.125rem'   # 18px
  xl: '1.25rem'    # 20px
  '2xl': '1.5rem'  # 24px
  '3xl': '1.875rem' # 30px
  '4xl': '2.25rem'  # 36px
```

### 英語キャッチコピー（Bebas Neue）フォントサイズ規則
```yaml
english_catchcopy:
  usage: "英語キャッチコピー（BEYOND AUTOMATION.、OUR 4 CORE SERVICES. など）"
  font_family: "Bebas Neue"
  
  # ヒーローヘッダー専用（最大サイズ）
  hero_header:
    mobile: "text-[56px]"      # 56px
    tablet: "sm:text-[100px]"  # 100px
    desktop: "md:text-[120px] lg:text-[140px] xl:text-[160px]" # 120px → 140px → 160px
    
  # フッター専用（特大サイズ）
  footer:
    mobile: "text-[80px]"      # 80px
    tablet: "sm:text-[120px]"  # 120px
    desktop: "md:text-[160px] lg:text-[180px] xl:text-[200px]" # 160px → 180px → 200px
    
  # 一般セクション（標準サイズ）- ヒーローヘッダー・フッター以外全て
  standard:
    mobile: "text-[56px]"      # 56px
    tablet: "md:text-[80px]"   # 80px
    desktop: "lg:text-[120px]" # 120px
    example: "SplitSection、CardGridSection、SingleSection など"
    
  # 実装例
  implementation:
    standard_class: "text-[56px] md:text-[80px] lg:text-[120px]"
    hero_class: "text-[56px] sm:text-[100px] md:text-[120px] lg:text-[140px] xl:text-[160px]"
    footer_class: "text-[80px] sm:text-[120px] md:text-[160px] lg:text-[180px] xl:text-[200px]"
```

---

## 📐 スペーシング・レイアウト

### ミクロレイアウトシステム
```yaml
micro_layout:
  base_principle: "8ポイントグリッドシステム：全ての余白、サイズ、配置は8pxの倍数で設計する。"
  grid_system:
    pc:
      name: "12カラムグリッド (PCビュー)"
      max_width: "1120px"
      gutter: "24px"
    mobile:
      name: "4カラムグリッド (モバイルビュー)"
      columns: 4
      gutter: "16px"
      margin: "24px" # 画面左右の余白
  spacing_scale:
    description: "8の倍数に基づく共通の余白ルール。"
```

### 基本スペーシング（8pxベース）
```yaml
spacing:
  xs: '0.25rem'    # 4px  (8px × 0.5)
  sm: '0.5rem'     # 8px  (8px × 1)
  base: '1rem'     # 16px (8px × 2)
  lg: '1.5rem'     # 24px (8px × 3)
  xl: '2rem'       # 32px (8px × 4)
  '2xl': '3rem'    # 48px (8px × 6)
  '3xl': '4rem'    # 64px (8px × 8)
  '4xl': '5rem'    # 80px (8px × 10)
  '5xl': '6rem'    # 96px (8px × 12)
```

### グリッドシステム
```yaml
grid:
  pc:
    container_max_width: "1120px"
    columns: 12
    gutter: "24px"
    breakpoint: "768px"
  mobile:
    columns: 4
    gutter: "16px"
    margin: "24px"
```

---

## 🧩 コンポーネント

### ボタン
```yaml
button:
  sizes:
    sm: 'h-9 px-3'
    base: 'h-10 px-4'
    lg: 'h-11 px-8'
  variants:
    default: 'bg-primary text-primary-foreground'
    outline: 'border border-input bg-background'
    ghost: 'hover:bg-accent hover:text-accent-foreground'
```

### カード
```yaml
card:
  base: 'rounded-lg border bg-card text-card-foreground shadow-sm'
  padding: 'p-6'
  header: 'flex flex-col space-y-1.5 p-6'
  content: 'p-6 pt-0'
```

---

## 📱 レイアウト

### コンテナ
```yaml
container:
  max-width: '1400px'
  padding: '2rem'
  center: true
```

### グリッド
```yaml
grid:
  cols-1: 'grid-cols-1'
  cols-2: 'grid-cols-2'
  cols-3: 'grid-cols-3'
  gap: 'gap-6'
```

---

## 🎯 ブランドアイデンティティ

### コンセプト
- **Less is More**: 最小の資源で、最大の価値を
- **10倍速**: 発想を、10倍速でかたちに
- **AI Native**: 生成AIネイティブな開発チーム

### キーワード
- 速創（SOKUTSUKU）
- 生成AI
- 機会損失との戦い
- 本質的価値創造

---

## 📝 使用方法

1. 新しいコンポーネントを作成する際は、このファイルのカラーシステムを参照
2. spacing値は定義されたものを使用
3. ブランドカラーは primary として使用
4. テーマ切り替えは dark/light の2択
5. カスタムカラーが必要な場合は、このファイルを更新してから実装

---

*最終更新: 2025-07-18*