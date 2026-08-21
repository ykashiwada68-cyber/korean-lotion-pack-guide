// 商品データの型定義。新しい商品を追加する際はこの型に沿って
// src/data/products.ts に1件追加するだけでサイト全体に反映されます。

/** パックの種類（種類から探す のカテゴリと対応） */
export type PackTypeId =
  | "sheet-mask" // シートマスク
  | "toner-pad" // トナーパッド
  | "spot-pack" // 部分用パック
  | "cotton-soak" // コットンに化粧水を含ませるタイプ
  | "leave-on"; // 洗い流さない集中保湿タイプ

/** 肌悩みの種類（肌悩みから探す のカテゴリと対応） */
export type ConcernId =
  | "dryness" // 乾燥
  | "pores" // 毛穴
  | "dullness" // くすみ
  | "firmness" // ハリ不足
  | "sensitive" // 敏感肌
  | "trouble-prevention" // 肌荒れ予防
  | "sebum"; // 皮脂・べたつき

/** 肌質 */
export type SkinTypeId =
  | "dry"
  | "oily"
  | "combination"
  | "normal"
  | "sensitive";

/**
 * 情報未確認を表す共通の値。
 * ブランド公式サイト等で確認できなかった項目にはこの定数を入れる。
 * 表示側（FieldValueコンポーネント）がこの値を検出すると
 * 「情報未確認」であることが分かるスタイルで表示する。
 */
export const UNCONFIRMED = "情報未確認" as const;
export type MaybeUnconfirmed = string | typeof UNCONFIRMED;

export interface Product {
  /** URLに使うスラッグ（英数字とハイフン） */
  slug: string;
  /** 商品名（日本語表記） */
  name: string;
  /** 商品名の原語表記（韓国語など。無ければ省略可） */
  nameNative?: string;
  /** ブランド名（日本語表記） */
  brand: string;
  /** ブランド名の原語表記 */
  brandNative?: string;
  /** パックの種類 */
  packType: PackTypeId;
  /** おすすめの肌質 */
  skinTypes: SkinTypeId[];
  /** おすすめの肌悩み */
  concerns: ConcernId[];
  /** 主な特徴（簡潔な要約。公式サイトの文章そのままではなく自分の言葉で要約すること） */
  features: string[];
  /** 注目成分 */
  keyIngredients: string[];
  /** 使用方法 */
  howToUse: string;
  /** 使用時間の目安 */
  usageTime: MaybeUnconfirmed;
  /** 使用頻度の目安 */
  usageFrequency: MaybeUnconfirmed;
  /** 香り */
  scent: MaybeUnconfirmed;
  /** 内容量 */
  volume: MaybeUnconfirmed;
  /** 価格帯（為替や販売店により変動するため目安。確認できない場合はUNCONFIRMED） */
  priceRange: MaybeUnconfirmed;
  /** 良い点 */
  pros: string[];
  /** 注意点 */
  cautions: string[];
  /** 購入先へのリンク（ブランド公式サイト等） */
  purchaseUrl: string;
  /** 購入先の表示名 */
  purchaseLabel: string;
  /** 情報の参照元（社内管理用。編集時に「どこで確認したか」を追跡するための項目） */
  sourceNote: string;
  /** 新着フラグ */
  isNew?: boolean;
  /** 人気フラグ（おすすめ商品欄などに表示） */
  isFeatured?: boolean;
}
