import { UNCONFIRMED, type Product } from "@/types/product";

/**
 * 商品データ一覧
 * ------------------------------------------------------------
 * ここに1件追加するだけで、トップページ・種類別ページ・肌悩み別ページ・
 * 商品比較・検索結果すべてに自動的に反映されます。
 *
 * 【新しい商品を追加する手順】
 * 1. 下記オブジェクトをまるごとコピーして配列に追加する
 * 2. slug はURLになるので、英数字とハイフンのみの一意な値にする
 * 3. 成分・価格・使用感などは必ずブランド公式サイト等の一次情報で確認する
 * 4. 確認できなかった項目は絶対に推測で埋めず、UNCONFIRMED（情報未確認）を入れる
 * 5. sourceNote に「どこで確認したか」を残しておく（後で見直す際の手がかりになる）
 * 6. features・howToUse などは公式サイトの文章をそのまま貼らず、自分の言葉で要約する
 * 7. 「治る」「改善する」「必ず効く」等の断定表現は使わない
 *
 * 詳しくは README.md の「商品の追加方法」を参照してください。
 */
export const products: Product[] = [
  {
    slug: "anua-heartleaf-77-clear-pad",
    name: "ハートリーフ77 クリアパッド",
    nameNative: "Heartleaf 77 Clear Pad",
    brand: "Anua（アヌア）",
    brandNative: "아누아",
    packType: "toner-pad",
    skinTypes: ["oily", "combination"],
    concerns: ["pores", "sebum", "trouble-prevention"],
    features: [
      "ドクダミ由来のハートリーフウォーターを77%配合したトナーパッド",
      "片面はやさしい角質ケア用のエンボス加工、片面はうるおいを与えるスムース面のデュアル構造",
      "直径7cmの大判サイズで、顔全体だけでなく首や背中にも使いやすい",
    ],
    keyIngredients: [
      "ドクダミエキス（ハートリーフウォーター）77%",
      "PHA（グルコノラクトン）",
      "ツボクサ（センテラアシアティカ）エキス／マデカソシド",
    ],
    howToUse:
      "洗顔後、パッドのエンボス面で肌をやさしく拭き取るように角質ケアをしたあと、スムース面を肌に密着させてパッティングし、うるおいをなじませます。",
    usageTime: "パッティングでなじませる程度（数十秒〜1分ほど）",
    usageFrequency: "朝晩のデイリーケアの目安（公式サイト記載の頻度指定は確認できず）",
    scent: UNCONFIRMED,
    volume: "160ml・70枚",
    priceRange: "海外公式サイト参考価格 約22米ドル（為替・購入先により変動するため購入時にご確認ください）",
    pros: [
      "拭き取りケアと保湿ケアが1枚で完結し、時短しやすい",
      "大判サイズで顔全体を覆いやすい",
    ],
    cautions: [
      "PHA配合のため、肌が敏感な時期は様子を見ながら使用を",
      "乾燥が強く気になる場合は、パッド後に別途保湿ケアを重ねる",
    ],
    purchaseUrl: "https://anua.com/products/heartleaf-77-toner-pad-160ml",
    purchaseLabel: "Anua公式サイトで見る",
    sourceNote:
      "Anua公式サイト（anua.com）商品ページ、および複数の販売店ページで内容量・成分を確認（2026年8月時点）。",
    isFeatured: true,
  },
  {
    slug: "numbuzin-no3-radiance-glowing-jumbo-essence-pad",
    name: "No.3 スキンソフトニング ジャンボエッセンスパッド",
    nameNative: "No.3 Radiance Glowing Jumbo Essence Pad",
    brand: "numbuzin（ナンバーズイン）",
    brandNative: "넘버즈인",
    packType: "toner-pad",
    skinTypes: ["dry", "normal"],
    concerns: ["firmness", "dullness", "dryness"],
    features: [
      "発酵成分を50種類配合したエッセンスをたっぷり含んだジャンボサイズのパッド",
      "クチナシとウコン由来の「ゴールデンカーミングコンプレックス」でゆらぎがちな肌にもやさしい処方",
      "ナイアシンアミドとヒアルロン酸Naで、うるおいとキメを整える",
    ],
    keyIngredients: [
      "発酵成分（50種）",
      "ナイアシンアミド",
      "アデノシン／ヒアルロン酸Na",
    ],
    howToUse:
      "洗顔後、パッドで顔の中心から外側に向かってやさしく拭き取り、その後軽くパッティングしてなじませます。",
    usageTime: "パッティングでなじませる程度（1〜2分ほど）",
    usageFrequency: "朝晩のデイリーケアの目安（公式サイト記載の頻度指定は確認できず）",
    scent: "ゼラニウム由来の香り成分を含む（香りの強さ等の詳細は情報未確認）",
    volume: UNCONFIRMED,
    priceRange: "海外公式サイト参考価格 約13〜24米ドル（セール等で変動するため購入時にご確認ください）",
    pros: [
      "ジャンボサイズで顔全体を覆いやすい",
      "発酵成分でなめらかな肌ざわりに整えるサポートをする",
    ],
    cautions: [
      "ナイアシンアミド配合のため、まれに合わない場合は使用前にパッチテストを",
    ],
    purchaseUrl:
      "https://us.numbuzin.com/products/no-3-radiance-glowing-jumbo-essence-pads",
    purchaseLabel: "numbuzin公式サイトで見る",
    sourceNote:
      "numbuzin公式サイト（us.numbuzin.com）商品ページで成分・使い方を確認。内容量（150ml/70枚）は複数の販売店情報と一致するが、公式ページ上での明記は確認できなかったため「情報未確認」とした（2026年8月時点）。",
  },
  {
    slug: "mediheal-nmf-aquaring-ampoule-mask-ex",
    name: "N.M.F アクアリング アンプルマスク EX",
    nameNative: "N.M.F Aquaring Ampoule Mask EX",
    brand: "MEDIHEAL（メディヒール）",
    brandNative: "메디힐",
    packType: "sheet-mask",
    skinTypes: ["dry", "combination"],
    concerns: ["dryness", "pores"],
    features: [
      "皮脂をコントロールしながら毛穴を目立ちにくく整えるシートマスク",
      "うるおいの膜を肌表面につくり、乾燥から肌を守るサポートをする",
      "1回使い切りタイプで、化粧水のあとに手軽に取り入れられる",
    ],
    keyIngredients: [
      "NMF（天然保湿因子／ヒアルロン酸Na）",
      "ウィッチヘーゼル（ハマメリス）水",
      "アラントイン／トレハロース",
    ],
    howToUse:
      "洗顔後、化粧水で肌を整えてからシートを取り出し、額→鼻→頬の順に密着させます。10〜20分ほど置いてシートを外し、残った美容液を軽くパッティングしてなじませます。",
    usageTime: "10〜20分",
    usageFrequency: "週2〜3回程度が目安（公式の頻度指定は確認できず、一般的な使用目安）",
    scent: UNCONFIRMED,
    volume: "25ml（1枚）",
    priceRange: UNCONFIRMED,
    pros: [
      "化粧水のあと1枚プラスするだけで集中ケアができる",
      "価格を抑えつつ取り入れやすい定番シートマスク",
    ],
    cautions: [
      "目元・口元周りにはシートをかけすぎないよう注意する",
      "長時間の放置は乾燥の原因になる場合があるため、目安時間を守る",
    ],
    purchaseUrl: "https://www.qoo10.jp/shop/medihealofficial",
    purchaseLabel: "MEDIHEAL公式ショップ（Qoo10）で見る",
    sourceNote:
      "@cosme公式商品ページおよびMEDIHEAL取扱店ページで成分・使い方・内容量を確認。日本国内の公式オンラインストアは終了しており、現在はQoo10等の公式ショップが販売窓口（2026年8月時点）。価格は店舗により変動するため「情報未確認」とした。",
    isFeatured: true,
  },
  {
    slug: "abib-heartleaf-spot-pad-calming-touch",
    name: "ハートリーフ スポットパッド カーミングタッチ",
    nameNative: "Heartleaf Spot Pad Calming Touch",
    brand: "Abib（アビブ）",
    brandNative: "어비브",
    packType: "spot-pack",
    skinTypes: ["sensitive", "combination"],
    concerns: ["sensitive", "trouble-prevention"],
    features: [
      "ドクダミ（ハートリーフ）エキスを40,000ppm配合し、ゆらぎがちな肌をやさしく整える",
      "無香料設計で、気になる部分にピンポイントで使いやすい",
      "片面はやわらかなガーゼ素材、片面はうるおいケア用と役割が分かれた両面パッド",
    ],
    keyIngredients: [
      "ドクダミ（ハートリーフ）エキス 40,000ppm",
      "ヒアルロン酸Na／アラントイン",
      "カフェイン／ウィンターグリーン葉エキス",
    ],
    howToUse:
      "洗顔後、パッドを取り出し気になる部分（目元を除く）に密着させるか、顔全体をやさしく拭き取るように使用します。",
    usageTime: "部分的に貼って使う場合は数分ほどが目安（公式の時間指定は確認できず）",
    usageFrequency: "朝晩のデイリーケアの目安、肌が揺らいだ時の集中ケアにも",
    scent: "無香料（公式サイト記載）",
    volume: "150ml・80枚",
    priceRange: "海外公式サイト参考価格 約22〜24米ドル（為替・購入先により変動するため購入時にご確認ください）",
    pros: [
      "無香料・低刺激設計で、肌が揺らぎやすい時期でも使いやすい",
      "気になる部分だけにピンポイントで使える",
    ],
    cautions: [
      "エキス濃度が高めのため、はじめて使う際は目立たない部分でパッチテストを行う",
    ],
    purchaseUrl: "https://en.abib.com/products/calming-touch",
    purchaseLabel: "Abib公式サイトで見る",
    sourceNote: "Abib公式サイト（en.abib.com）商品ページで成分・内容量・香りの記載を確認（2026年8月時点）。",
  },
  {
    slug: "klairs-supple-preparation-facial-toner",
    name: "サプル プレパレーション フェイシャルトナー",
    nameNative: "Supple Preparation Facial Toner",
    brand: "Dear, Klairs（クレアス）",
    brandNative: "디어클레어스",
    packType: "cotton-soak",
    skinTypes: ["dry", "sensitive"],
    concerns: ["dryness", "dullness"],
    features: [
      "韓国で「コーティング法」と呼ばれる、コットンに重ねて含ませる使い方で親しまれている化粧水",
      "甘草根エキスやツボクサエキスなど植物由来成分を配合した低刺激設計",
      "乾燥や肌の揺らぎが気になる部分に重ねづけしやすいテクスチャー",
    ],
    keyIngredients: [
      "甘草（カンゾウ）根エキス",
      "ツボクサエキス",
      "ヒアルロン酸Na／パンテノール",
    ],
    howToUse:
      "洗顔後、コットンに適量を含ませて肌全体をやさしくなでるように整えます。乾燥が気になる部分は、コットンで重ねてなじませます。手のひらで温めてパッティングする使い方もあります。",
    usageTime: "コットンで整える工程として数分ほど",
    usageFrequency: "朝晩のデイリーケアの目安",
    scent: "天然精油由来の香り（レモンピール・ラベンダー・オレンジピール等）。無香料タイプも別途あり",
    volume: "180ml（30mlミニサイズもあり）",
    priceRange: UNCONFIRMED,
    pros: [
      "手に取りやすい価格帯で「コーティング法」を試しやすい",
      "低刺激設計で、乾燥や敏感が気になる肌にも使いやすい",
    ],
    cautions: [
      "精油由来の香り成分を含むため、香りに敏感な方は無香料タイプの検討を",
    ],
    purchaseUrl:
      "https://www.klairscosmetics.com/product/supple-preparation-facial-toner/",
    purchaseLabel: "Dear, Klairs公式サイトで見る",
    sourceNote:
      "Dear, Klairs公式サイト（klairscosmetics.com）商品ページで成分・内容量・使い方・香り成分を確認。価格の記載はページ内に無かったため「情報未確認」とした（2026年8月時点）。",
  },
  {
    slug: "laneige-water-sleeping-mask",
    name: "ウォーター スリーピング マスク",
    nameNative: "Water Sleeping Mask",
    brand: "LANEIGE（ラネージュ）",
    brandNative: "라네즈",
    packType: "leave-on",
    skinTypes: ["dry", "normal"],
    concerns: ["dryness", "dullness"],
    features: [
      "就寝中の肌の水分保持をサポートする、洗い流さない集中保湿マスク",
      "独自複合成分「スリープトックス™」と3種のヒアルロン酸を配合",
      "夜のスキンケアの最後にのせて、そのまま眠れる手軽さ",
    ],
    keyIngredients: [
      "スリープトックス™（独自複合成分）",
      "マグネティックヒアルロン酸／ハイパーヒアルロン酸 等3種のヒアルロン酸",
    ],
    howToUse:
      "夜のスキンケアの最後に適量を顔全体になじませ、そのまま洗い流さずに就寝します。公式サイトによると日中クリームとしての使用も可能とされています。",
    usageTime: "一晩（就寝中）",
    usageFrequency: "週2〜3回、または毎晩など肌状態に合わせて調整",
    scent: UNCONFIRMED,
    volume: "70ml",
    priceRange: "3,740円（税込・日本公式価格）",
    pros: [
      "塗って眠るだけの手軽さで、就寝中の集中保湿ケアができる",
      "翌朝のうるおい実感をサポートする",
    ],
    cautions: [
      "就寝用マスクのため、日中に厚く塗るとべたつきの原因になる場合がある",
      "使用量は適量を守る",
    ],
    purchaseUrl: "https://jp.laneige.com/",
    purchaseLabel: "LANEIGE日本公式サイトで見る",
    sourceNote:
      "@cosme公式商品情報ページ（LANEIGE日本公式サイトの内容を反映）で価格・内容量・発売日を確認。香りの記載は確認できず「情報未確認」とした（2026年8月時点）。",
    isNew: true,
    isFeatured: true,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByPackType(packType: string): Product[] {
  return products.filter((p) => p.packType === packType);
}

export function getProductsByConcern(concern: string): Product[] {
  return products.filter((p) => p.concerns.includes(concern as never));
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.isFeatured);
}

export function getNewProducts(): Product[] {
  return [...products]
    .filter((p) => p.isNew)
    .concat(products.filter((p) => !p.isNew))
    .slice(0, 4);
}
