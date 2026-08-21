"use client";

import Link from "next/link";
import { useAppState } from "@/context/AppStateContext";
import { products } from "@/data/products";
import { getPackTypeById } from "@/data/packTypes";
import { getConcernById } from "@/data/concerns";
import { getSkinTypeById } from "@/data/skinTypes";
import { ProductIllustration } from "./ProductIllustration";
import { FieldValue } from "@/components/ui/FieldValue";

const rows: {
  label: string;
  render: (p: (typeof products)[number]) => React.ReactNode;
}[] = [
  {
    label: "パックの種類",
    render: (p) => getPackTypeById(p.packType)?.name ?? "-",
  },
  {
    label: "おすすめ肌質",
    render: (p) => p.skinTypes.map((s) => getSkinTypeById(s)?.name).filter(Boolean).join("、"),
  },
  {
    label: "おすすめ肌悩み",
    render: (p) => p.concerns.map((c) => getConcernById(c)?.name).filter(Boolean).join("、"),
  },
  { label: "注目成分", render: (p) => p.keyIngredients.join("、") },
  { label: "使用時間の目安", render: (p) => <FieldValue value={p.usageTime} /> },
  { label: "使用頻度の目安", render: (p) => <FieldValue value={p.usageFrequency} /> },
  { label: "香り", render: (p) => <FieldValue value={p.scent} /> },
  { label: "内容量", render: (p) => <FieldValue value={p.volume} /> },
  { label: "価格帯", render: (p) => <FieldValue value={p.priceRange} /> },
  { label: "良い点", render: (p) => p.pros.join("／") },
  { label: "注意点", render: (p) => p.cautions.join("／") },
];

export function CompareView() {
  const { compareList, removeFromCompare, clearCompare, ready } = useAppState();

  const selected = products.filter((p) => compareList.includes(p.slug));

  if (!ready) {
    return <p className="py-16 text-center text-sm text-ink-soft">読み込み中です…</p>;
  }

  if (selected.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-line bg-white p-10 text-center">
        <p className="text-ink-soft">
          まだ比較リストに商品がありません。商品カードの「比較に追加」から、気になる商品を選んでみましょう。
        </p>
        <Link
          href="/products"
          className="mt-5 inline-block rounded-full bg-rose px-6 py-3 text-sm font-bold text-white hover:bg-rose-dark"
        >
          商品を探す
        </Link>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-5 flex items-center justify-between">
        <p className="text-sm text-ink-soft">{selected.length}件を比較中（最大4件）</p>
        <button
          type="button"
          onClick={clearCompare}
          className="text-sm font-semibold text-ink-soft hover:text-rose-dark"
        >
          すべてクリア
        </button>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-line bg-white">
        <table className="w-full min-w-[640px] border-collapse text-sm">
          <thead>
            <tr>
              <th scope="col" className="w-40 border-b border-line bg-ivory-deep p-4 text-left align-bottom">
                &nbsp;
              </th>
              {selected.map((p) => (
                <th
                  key={p.slug}
                  scope="col"
                  className="min-w-[220px] border-b border-line bg-ivory-deep p-4 text-left align-top"
                >
                  <div className="flex flex-col gap-3">
                    <div className="flex items-start justify-between gap-2">
                      <ProductIllustration
                        packType={p.packType}
                        title={p.name}
                        className="h-20 w-20 rounded-xl"
                      />
                      <button
                        type="button"
                        onClick={() => removeFromCompare(p.slug)}
                        aria-label={`${p.name}を比較から削除`}
                        className="rounded-full p-1 text-ink-soft hover:bg-blush hover:text-rose-dark"
                      >
                        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" d="M6 6l12 12M18 6 6 18" />
                        </svg>
                      </button>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-rose-dark">{p.brand}</p>
                      <Link href={`/products/${p.slug}`} className="font-bold text-ink hover:underline">
                        {p.name}
                      </Link>
                    </div>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.label}>
                <th scope="row" className="border-b border-line bg-ivory-deep/60 p-4 text-left align-top font-bold text-ink-soft">
                  {row.label}
                </th>
                {selected.map((p) => (
                  <td key={p.slug} className="border-b border-line p-4 align-top leading-relaxed text-ink">
                    {row.render(p)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
