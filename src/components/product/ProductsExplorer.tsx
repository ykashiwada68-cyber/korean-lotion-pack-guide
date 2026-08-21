"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ProductCard } from "@/components/product/ProductCard";
import { FilterForm } from "@/components/product/FilterForm";
import { products } from "@/data/products";
import { filterProducts } from "@/lib/filterProducts";
import type { ConcernId, PackTypeId, SkinTypeId } from "@/types/product";

export function ProductsExplorer() {
  const searchParams = useSearchParams();
  const q = searchParams.get("q") ?? "";
  const type = searchParams.get("type") ?? "";
  const concern = searchParams.get("concern") ?? "";
  const skin = searchParams.get("skin") ?? "";

  const results = filterProducts(products, {
    q,
    type: type as PackTypeId | "",
    concern: concern as ConcernId | "",
    skin: skin as SkinTypeId | "",
  });

  return (
    <>
      <FilterForm defaultValues={{ q, type, concern, skin }} />

      <p className="mt-6 text-sm font-semibold text-ink-soft">
        {results.length}件の商品が見つかりました
      </p>

      {results.length > 0 ? (
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      ) : (
        <div className="mt-6 rounded-2xl border border-dashed border-line bg-white p-10 text-center">
          <p className="text-ink-soft">条件に合う商品が見つかりませんでした。</p>
          <Link
            href="/products"
            className="mt-4 inline-block text-sm font-semibold text-rose-dark hover:underline"
          >
            条件をクリアしてもう一度探す
          </Link>
        </div>
      )}
    </>
  );
}
