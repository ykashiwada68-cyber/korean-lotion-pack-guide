import type { PackTypeId } from "@/types/product";

export interface PackTypeMeta {
  id: PackTypeId;
  name: string;
  shortName: string;
  description: string;
  detail: string;
  goodFor: string;
}

export const packTypes: PackTypeMeta[] = [
  {
    id: "sheet-mask",
    name: "シートマスク",
    shortName: "シートマスク",
    description: "美容液をたっぷり含んだシートを顔全体に密着させるタイプ。",
    detail:
      "顔の形に沿ったシートに美容液がたっぷり含まれており、10〜20分ほどのせておくだけで肌全体に均一にうるおいを与えられます。特別なケアをしたい日や、集中的に保湿したいときに取り入れやすいのが特徴です。",
    goodFor: "週に数回のスペシャルケアや、乾燥が気になる日の集中保湿に。",
  },
  {
    id: "toner-pad",
    name: "トナーパッド",
    shortName: "トナーパッド",
    description: "化粧水を含んだコットンパッドで拭き取りながらケアするタイプ。",
    detail:
      "あらかじめ化粧水がたっぷり染み込んだパッドで、拭き取りケアと保湿を同時に行えるアイテムです。片面がやさしい角質ケア用のエンボス加工になっている商品も多く、日々のスキンケアに手軽に取り入れやすいのが人気の理由です。",
    goodFor: "毎日のお手入れに時短で取り入れたい方や、キメを整えたい方に。",
  },
  {
    id: "spot-pack",
    name: "部分用パック",
    shortName: "部分用パック",
    description: "気になる部分にピンポイントで貼る・のせるタイプ。",
    detail:
      "顔全体ではなく、頬や鼻まわりなど気になる部分に集中してケアできるタイプです。肌が揺らぎやすい時期のスポットケアや、特に乾燥・敏感が気になる部分への集中ケアに向いています。",
    goodFor: "肌が揺らいだときの集中ケアや、部分的な乾燥・敏感が気になる方に。",
  },
  {
    id: "cotton-soak",
    name: "コットンに化粧水を含ませるタイプ",
    shortName: "コットンパック",
    description: "コットンに化粧水をたっぷり含ませて肌にのせる、韓国発の定番ケア。",
    detail:
      "韓国では「コーティング法」とも呼ばれる方法で、コットンに化粧水を重ねて含ませながら肌をやさしく整えていきます。市販のシートマスクを使わずに、普段の化粧水で手軽に集中保湿ができるのが魅力です。",
    goodFor: "手持ちの化粧水で手軽に集中ケアを試したい方に。",
  },
  {
    id: "leave-on",
    name: "洗い流さない集中保湿タイプ",
    shortName: "集中保湿ケア",
    description: "夜のお手入れの最後にのせて、そのまま眠れるタイプ。",
    detail:
      "スキンケアの最後に使い、洗い流さずそのまま就寝できるタイプです。就寝中の乾燥が気になる方や、翌朝のうるおいを重視したい方に取り入れられています。",
    goodFor: "就寝中の乾燥が気になる方や、朝のうるおいを重視したい方に。",
  },
];

export function getPackTypeById(id: string): PackTypeMeta | undefined {
  return packTypes.find((t) => t.id === id);
}
