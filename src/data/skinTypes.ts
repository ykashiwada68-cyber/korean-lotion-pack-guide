import type { SkinTypeId } from "@/types/product";

export const skinTypes: { id: SkinTypeId; name: string }[] = [
  { id: "dry", name: "乾燥肌" },
  { id: "oily", name: "脂性肌" },
  { id: "combination", name: "混合肌" },
  { id: "normal", name: "普通肌" },
  { id: "sensitive", name: "敏感肌" },
];

export function getSkinTypeById(id: string) {
  return skinTypes.find((s) => s.id === id);
}
