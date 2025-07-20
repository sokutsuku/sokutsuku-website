# DEVELOPMENT LOG - SOKUTSUKUプロジェクト

このファイルは開発中に発生した問題と解決策を記録します。

## 2025-07-20: SplitSection改行問題の解決

### 問題
SplitSectionコンポーネントで英語キャッチコピーの改行が正しく表示されない問題が発生。

### 症状
- `"FROM<br />CHALLENGE<br />TO VALUE."` → 正常に3行表示
- `"BEYOND\nAUTOMATION."` → 改行されず1行で表示

### 根本原因
1. **文字列エスケープ問題**: JSXで渡された`\n`が`\\n`（エスケープ文字列）として処理されていた
2. **React Hook Rules違反**: BlurTextコンポーネントで条件付きuseEffectが描画を不安定にしていた
3. **HTML解析の不備**: `<br />`自己完結タグの正規表現マッチングが不完全

### 解決策

#### 1. SplitSection.tsx の修正
```typescript
// 修正前
lines = englishCatchCopy.split('\n').map(line => line.trim()).filter(line => line);

// 修正後
if (englishCatchCopy.includes('<br />')) {
  lines = englishCatchCopy.split('<br />').map(line => line.trim()).filter(line => line);
} else if (englishCatchCopy.includes('\\n')) {
  // Handle escaped \n characters
  lines = englishCatchCopy.split('\\n').map(line => line.trim()).filter(line => line);
} else {
  lines = englishCatchCopy.split('\n').map(line => line.trim()).filter(line => line);
}
```

#### 2. BlurText.tsx の修正
- React Hook Rules違反を修正（useEffectを条件文の前に移動）
- HTML解析の正規表現を改善して`<br />`タグを正しく処理

### 結果
✅ `"BEYOND\nAUTOMATION."` → `BEYOND` / `AUTOMATION.` として正しく2行表示  
✅ `"FROM<br />CHALLENGE<br />TO VALUE."` → 4行表示を維持  
✅ アニメーション遅延も各行ごとに正しく適用

### 学んだ教訓
1. JSXでの文字列リテラルは予期しないエスケープが発生する可能性がある
2. React Hook Rulesの遵守は描画の安定性に重要
3. 複数の改行フォーマット（`\n`, `\\n`, `<br />`）への対応が必要

---

## 開発記録テンプレート

新しい問題を記録する際は以下の形式を使用：

```markdown
## YYYY-MM-DD: [問題のタイトル]

### 問題
[問題の概要]

### 症状
- [具体的な症状1]
- [具体的な症状2]

### 根本原因
1. **[原因1]**: [詳細説明]
2. **[原因2]**: [詳細説明]

### 解決策
[実装した解決策]

### 結果
[修正後の状態]

### 学んだ教訓
[今後に活かせる知見]
```