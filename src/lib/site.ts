export const siteConfig = {
  name: "ローションパック図鑑",
  shortName: "ローションパック図鑑",
  description:
    "韓国コスメの「ローションパック」を、種類・特徴・使い方・肌質別の選び方から分かりやすく紹介する情報サイトです。",
  // GitHub Pages（プロジェクトページ）の公開URL。
  // 独自ドメインに変更する場合はここを差し替えてください。
  url: "https://ykashiwada68-cyber.github.io/korean-lotion-pack-guide",
  catchCopy: "今日の肌に、ぴったりの1枚を。",
};

export function absoluteUrl(path: string) {
  return `${siteConfig.url}${path}`;
}
