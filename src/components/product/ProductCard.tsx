import Link from "next/link";
import type { Product } from "@/types/product";
import { getPackTypeById } from "@/data/packTypes";
import { ProductIllustration } from "./ProductIllustration";
import { FavoriteButton } from "./FavoriteButton";
import { CompareCheckbox } from "./CompareCheckbox";
import { Badge } from "@/components/ui/Badge";
import { FieldValue } from "@/components/ui/FieldValue";

export function ProductCard({ product }: { product: Product }) {
  const packType = getPackTypeById(product.packType);
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-sm transition-shadow hover:shadow-md">
      <div className="relative aspect-square w-full overflow-hidden">
        <Link href={`/products/${product.slug}`} className="block h-full w-full">
          <ProductIllustration
            packType={product.packType}
            title={product.name}
            className="h-full w-full transition-transform duration-300 group-hover:scale-[1.03]"
          />
        </Link>
        <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
          {product.isNew ? <Badge tone="ink">新着</Badge> : null}
          {packType ? <Badge tone="rose">{packType.shortName}</Badge> : null}
        </div>
        <div className="absolute right-3 top-3">
          <FavoriteButton slug={product.slug} name={product.name} size="sm" />
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-2 p-5">
        <p className="text-xs font-semibold text-rose-dark">{product.brand}</p>
        <h3 className="text-base font-bold leading-snug text-ink">
          <Link href={`/products/${product.slug}`} className="hover:underline">
            {product.name}
          </Link>
        </h3>
        {product.nameNative ? (
          <p className="text-xs text-ink-soft">{product.nameNative}</p>
        ) : null}
        <p className="line-clamp-2 text-sm text-ink-soft">{product.features[0]}</p>

        <div className="mt-auto flex flex-col gap-3 pt-3">
          <p className="text-sm font-semibold text-ink">
            <FieldValue value={product.priceRange} />
          </p>
          <div className="flex items-center justify-between gap-2">
            <Link
              href={`/products/${product.slug}`}
              className="rounded-full bg-ink px-4 py-2 text-sm font-semibold text-ivory transition-colors hover:bg-rose-dark"
            >
              詳しく見る
            </Link>
            <CompareCheckbox slug={product.slug} name={product.name} />
          </div>
        </div>
      </div>
    </div>
  );
}
