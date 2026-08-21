"use client";

import Link from "next/link";
import { useAppState } from "@/context/AppStateContext";
import { products } from "@/data/products";
import { ProductCard } from "./ProductCard";

export function FavoritesView() {
  const { favorites, ready } = useAppState();

  if (!ready) {
    return <p className="py-16 text-center text-sm text-ink-soft">読み込み中です…</p>;
  }

  const selected = products.filter((p) => favorites.includes(p.slug));

  if (selected.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-line bg-white p-10 text-center">
        <p className="text-ink-soft">
          まだお気に入りの商品がありません。商品カードのハートマークから追加できます。
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
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {selected.map((p) => (
        <ProductCard key={p.slug} product={p} />
      ))}
    </div>
  );
}
