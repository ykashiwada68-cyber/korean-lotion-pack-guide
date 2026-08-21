import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ProductIllustration } from "@/components/product/ProductIllustration";
import { packTypes } from "@/data/packTypes";
import { getProductsByPackType } from "@/data/products";

export const metadata: Metadata = {
  title: "種類から探す",
  description:
    "シートマスク、トナーパッド、部分用パックなど、ローションパックの種類ごとの特徴とおすすめの使い方をご紹介します。",
};

export default function TypesPage() {
  return (
    <div>
      <div className="border-b border-line bg-ivory-deep py-10">
        <Container>
          <Breadcrumbs items={[{ label: "トップ", href: "/" }, { label: "種類から探す" }]} />
          <h1 className="mt-4 text-3xl font-bold text-ink sm:text-4xl">種類から探す</h1>
          <p className="mt-3 max-w-2xl text-ink-soft">
            ローションパックには、シートマスクからコットンパックまでさまざまなタイプがあります。ライフスタイルや目的に合わせて選んでみましょう。
          </p>
        </Container>
      </div>

      <Container className="py-14">
        <div className="grid gap-6 sm:grid-cols-2">
          {packTypes.map((type) => {
            const count = getProductsByPackType(type.id).length;
            return (
              <Link
                key={type.id}
                href={`/types/${type.id}`}
                className="group flex gap-5 rounded-2xl border border-line bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-rose hover:shadow-md"
              >
                <ProductIllustration
                  packType={type.id}
                  title={type.name}
                  className="h-24 w-24 shrink-0 rounded-xl"
                />
                <div>
                  <h2 className="text-lg font-bold text-ink group-hover:text-rose-dark">
                    {type.name}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{type.description}</p>
                  <p className="mt-3 text-xs font-semibold text-rose-dark">
                    掲載商品 {count}件を見る →
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
