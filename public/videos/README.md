# Videos Directory

このディレクトリには、SOKUTSUKUウェブサイトで使用する動画ファイルを保管します。

## 推奨動画形式

### 主要形式
- **MP4** (H.264/AVC) - 最も幅広いブラウザ対応
- **WebM** (VP9) - 高圧縮率、モダンブラウザ対応

### 画質設定
- **1080p** (1920x1080) - デスクトップ用
- **720p** (1280x720) - モバイル用
- フレームレート: 30fps推奨

## 使用例

```tsx
<video
  autoPlay
  muted
  loop
  playsInline
  className="w-full h-full object-cover"
>
  <source src="/videos/hero-background.mp4" type="video/mp4" />
  <source src="/videos/hero-background.webm" type="video/webm" />
</video>
```

## 注意事項

- ファイルサイズに注意（モバイル回線を考慮）
- 自動再生する場合は必ず`muted`属性を設定
- アクセシビリティのため字幕ファイル（.vtt）も用意推奨