import type { ConcernId } from "@/types/product";

export interface ConcernMeta {
  id: ConcernId;
  name: string;
  description: string;
  detail: string;
}

export const concerns: ConcernMeta[] = [
  {
    id: "dryness",
    name: "乾燥",
    description: "うるおい不足でつっぱりやすい肌に、水分を与えるケアを。",
    detail:
      "空調や季節の変化でうるおいが不足しがちな肌には、化粧水をたっぷり含んだシートマスクや集中保湿タイプで水分を補うケアが取り入れられています。",
  },
  {
    id: "pores",
    name: "毛穴",
    description: "毛穴の目立ちが気になる肌を、すっきりと整えるケアを。",
    detail:
      "皮脂や汚れが気になる部分は、拭き取りタイプのトナーパッドなどで肌表面を整えながらケアする方法が親しまれています。",
  },
  {
    id: "dullness",
    name: "くすみ",
    description: "肌の透明感が気になるときのお手入れに。",
    detail:
      "肌のトーンが沈んで見えると感じるときは、うるおいを与えながら肌をなめらかに整えるケアが取り入れられています。",
  },
  {
    id: "firmness",
    name: "ハリ不足",
    description: "肌にハリが欲しいときのお手入れに。",
    detail:
      "年齢を重ねるとともに気になりやすいハリ不足には、うるおいとともにキメを整える成分を含んだアイテムが選ばれています。",
  },
  {
    id: "sensitive",
    name: "敏感肌",
    description: "揺らぎやすい肌に、やさしく寄り添うケアを。",
    detail:
      "肌が揺らぎやすい方には、低刺激設計や無香料のアイテム、鎮静系の成分を含んだパックが選ばれる傾向があります。使用前のパッチテストもおすすめです。",
  },
  {
    id: "trouble-prevention",
    name: "肌荒れ予防",
    description: "肌が揺らぎがちな時期の、清潔なコンディションづくりに。",
    detail:
      "肌が不安定になりやすい時期には、肌を清潔に保ちながらうるおいを与えるケアが取り入れられています。",
  },
  {
    id: "sebum",
    name: "皮脂・べたつき",
    description: "テカリやべたつきが気になる肌をさっぱりと。",
    detail:
      "皮脂が気になる肌には、さっぱりとした使用感のトナーパッドなどで表面を整えながら水分を補うケアが選ばれています。",
  },
];

export function getConcernById(id: string): ConcernMeta | undefined {
  return concerns.find((c) => c.id === id);
}
