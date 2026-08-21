# ローションパック図鑑

韓国コスメの「ローションパック」を、種類・特徴・使い方・肌質別の選び方から紹介する情報サイトです。
Next.js（App Router）+ TypeScript + Tailwind CSS で構築しています。

---

## 1. 起動方法

### 必要なもの

- Node.js 20 以降（推奨: 22 / 24 系のLTS）
- npm（Node.jsに同梱）

### セットアップ

プロジェクトフォルダで以下を実行します。

```bash
npm install
```

### 開発サーバーの起動

```bash
npm run dev
```

起動後、ブラウザで [http://localhost:3000](http://localhost:3000) を開くと確認できます。ファイルを保存すると自動的に画面が更新されます。

### 本番用ビルド・確認

```bash
npm run build
npm run start
```

### コードチェック

```bash
npm run lint
```

---

## 2. サイトの構成

```
src/
  app/                     ページ本体（フォルダ＝URL）
    page.tsx               トップページ（/）
    about/                 ローションパックとは（/about）
    types/                 種類から探す（/types, /types/[種類ID]）
    concerns/               肌悩みから探す（/concerns, /concerns/[悩みID]）
    products/               商品検索・商品詳細（/products, /products/[商品ID]）
    compare/                商品比較（/compare）
    favorites/              お気に入り（/favorites）
    how-to-use/             正しい使い方（/how-to-use）
    faq/                    よくある質問（/faq）
    company/                運営者情報（/company）
    privacy/                プライバシーポリシー（/privacy）
  components/              画面パーツ（ヘッダー・商品カードなど）
  data/                    商品データ・種類データ・肌悩みデータ（★編集はここが中心）
  context/                 お気に入り・比較リストの管理（ブラウザのlocalStorageに保存）
  types/                   データの型定義
  lib/                     サイト共通設定・検索/絞り込みロジック
```

---

## 3. 文章・ページ内容の編集方法

トップページの見出しや紹介文、FAQなどの文章は、対応するページファイル（`src/app/**/page.tsx`）内の日本語テキストを直接書き換えるだけで反映されます。プログラムの知識がなくても、`"` で囲まれた文章部分を編集すれば問題ありません。

サイト名やキャッチコピーなど、サイト全体で共通の設定は `src/lib/site.ts` にまとめてあります。

```ts
// src/lib/site.ts
export const siteConfig = {
  name: "ローションパック図鑑",
  description: "……",
  url: "https://example.com", // ← 本番公開時に実際のドメインへ差し替え
  catchCopy: "今日の肌に、ぴったりの1枚を。",
};
```

「種類から探す」「肌悩みから探す」の説明文は、それぞれ `src/data/packTypes.ts` / `src/data/concerns.ts` にあります。

運営者情報（`src/app/company/page.tsx`）とプライバシーポリシー（`src/app/privacy/page.tsx`）には、【　】で囲んだ仮の入力欄があります。公開前に必ず実際の情報に差し替えてください。

---

## 4. 商品の追加・修正方法（最重要）

商品データはすべて **`src/data/products.ts`** の1ファイルに集約されています。ここに1件追加・編集するだけで、トップページ・種類別ページ・肌悩み別ページ・検索・商品比較のすべてに自動的に反映されます。データベースやCMSの知識は不要です。

### 4-1. 商品を追加する手順

1. `src/data/products.ts` を開く
2. 既存の商品オブジェクト（`{ slug: "...", name: "...", ... }`）を1つコピーする
3. 配列 `products` の末尾に貼り付け、内容を書き換える
4. 保存すると開発サーバーに自動反映される

### 4-2. 各項目の意味

| 項目 | 説明 |
|---|---|
| `slug` | URLになる識別子。英数字とハイフンのみ、他の商品と重複しないようにする |
| `name` / `nameNative` | 商品名（日本語表記／原語表記） |
| `brand` / `brandNative` | ブランド名（日本語表記／原語表記） |
| `packType` | パックの種類。`sheet-mask` / `toner-pad` / `spot-pack` / `cotton-soak` / `leave-on` のいずれか |
| `skinTypes` | おすすめの肌質。`dry` `oily` `combination` `normal` `sensitive` から複数選択（配列） |
| `concerns` | おすすめの肌悩み。`dryness` `pores` `dullness` `firmness` `sensitive` `trouble-prevention` `sebum` から複数選択（配列） |
| `features` | 主な特徴（箇条書き用の配列） |
| `keyIngredients` | 注目成分（配列） |
| `howToUse` | 使用方法（文章） |
| `usageTime` / `usageFrequency` / `scent` / `volume` / `priceRange` | 使用時間・頻度・香り・内容量・価格帯 |
| `pros` / `cautions` | 良い点・注意点（配列） |
| `purchaseUrl` / `purchaseLabel` | 購入先リンクとボタンの表示文言 |
| `sourceNote` | 情報をどこで確認したかのメモ（商品詳細ページの下部に表示されます） |
| `isNew` | `true` にすると「新着」バッジが付き、トップページの新着商品にも表示されやすくなる |
| `isFeatured` | `true` にするとトップページの「おすすめ商品」に表示される |

### 4-3. 情報が確認できない項目について（必ず守ってください）

このサイトは化粧品を扱うため、**成分や価格を推測で書かないこと**を徹底しています。

- 商品情報は、必ずブランドの公式サイトなど信頼できる一次情報で確認してください。
- 確認できなかった項目には、値の代わりに `UNCONFIRMED`（ファイル冒頭で `import { UNCONFIRMED } from "@/types/product"` 済み）を入れてください。画面には自動的に「情報未確認」と表示されます。
- 文章中に一部だけ不確かな情報を含める場合は、`"○○（詳細は情報未確認）"` のように**日本語の「情報未確認」という言葉を直接書いてください**（`UNCONFIRMED` という英語をそのまま文章に混ぜないこと）。
- 紹介文（`features` や `howToUse` など）は、公式サイトの文章をそのままコピーせず、自分の言葉で要約してください。
- 「治る」「改善する」「必ず効く」など、効能を断定する表現は使わないでください。「うるおいを与える」「肌を整える」「乾燥を防ぐ」など、化粧品として適切な表現を使ってください。

### 4-4. 入力例

```ts
{
  slug: "example-brand-example-product",
  name: "商品名（日本語）",
  nameNative: "Example Product Name",
  brand: "Example Brand（イグザンプルブランド）",
  brandNative: "예시 브랜드",
  packType: "toner-pad",
  skinTypes: ["dry", "sensitive"],
  concerns: ["dryness", "sensitive"],
  features: [
    "特徴を1文ずつ、自分の言葉で要約",
  ],
  keyIngredients: ["注目成分1", "注目成分2"],
  howToUse: "使用方法を記載",
  usageTime: UNCONFIRMED,
  usageFrequency: "朝晩のデイリーケアの目安",
  scent: UNCONFIRMED,
  volume: "150ml",
  priceRange: UNCONFIRMED,
  pros: ["良い点1"],
  cautions: ["注意点1"],
  purchaseUrl: "https://example-brand.com/products/example",
  purchaseLabel: "Example Brand公式サイトで見る",
  sourceNote: "Example Brand公式サイトで成分・使い方を確認（20XX年X月時点）。",
},
```

### 4-5. 種類・肌悩みのカテゴリ自体を追加したいとき

- パックの種類を増やす場合は `src/types/product.ts` の `PackTypeId` に新しいIDを追加し、`src/data/packTypes.ts` に説明文を追加します。
- 肌悩みを増やす場合は同様に `ConcernId`（`src/types/product.ts`）と `src/data/concerns.ts` を編集します。

---

## 5. お気に入り・商品比較機能について

「お気に入り」「商品比較」は、サーバーやデータベースを使わず、利用者のブラウザ内（localStorage）に保存する仕組みです。そのため：

- ログイン機能は不要です。
- 同じ端末・同じブラウザであれば、次回訪問時も保存内容が残ります。
- 別の端末やブラウザには引き継がれません。
- サーバー側には一切送信されません（プライバシーポリシーにも記載しています）。

---

## 6. 商品画像について

現在、各商品にはパックの種類ごとに自動生成されるシンプルなイラスト（`src/components/product/ProductIllustration.tsx`）を仮の画像として使用しています。実際の商品写真に差し替える場合は、`src/types/product.ts` の `Product` 型に `imageUrl` などの項目を追加し、`ProductCard.tsx` / `products/[slug]/page.tsx` 内の `<ProductIllustration ... />` を `<img>` または `next/image` の `<Image>` に置き換えてください。商品画像の著作権・利用許諾は、掲載前に必ずブランド側の規約をご確認ください。

---

## 7. 公開前チェックリスト

- [ ] `src/lib/site.ts` の `url` を本番ドメインに変更する
- [ ] `src/app/company/page.tsx` の【　】欄を実際の運営者情報に差し替える
- [ ] `src/app/privacy/page.tsx` の【　】欄（アクセス解析ツール名・ASP名・制定日など）を実情に合わせて記入する
- [ ] 全商品の `priceRange` `volume` `scent` 等、`UNCONFIRMED` のままの項目がないか、公式サイトで再確認する
- [ ] `public/favicon.ico` をサイトのロゴに差し替える（現在は雛形のままです）
