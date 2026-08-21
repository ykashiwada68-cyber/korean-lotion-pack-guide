import type { Metadata } from "next";
import { Suspense } from "react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ProductsExplorer } from "@/components/product/ProductsExplorer";

export const metadata: Metadata = {
  title: "商品を検索する",
  description:
    "商品名やブランド名での検索、種類・肌悩み・肌質による絞り込みで、ローションパックを探せます。",
};

export default function ProductsPage() {
  return (
    <div>
      <div className="border-b border-line bg-ivory-deep py-10">
        <Container>
          <Breadcrumbs items={[{ label: "トップ", href: "/" }, { label: "商品を検索する" }]} />
          <h1 className="mt-4 text-3xl font-bold text-ink sm:text-4xl">商品を検索する</h1>
          <p className="mt-3 max-w-2xl text-ink-soft">
            商品名やブランド名で検索したり、種類・肌悩み・肌質で絞り込んだりして、あなたに合うローションパックを探せます。
          </p>
        </Container>
      </div>

      <Container className="py-10">
        <Suspense fallback={<p className="text-sm text-ink-soft">読み込み中です…</p>}>
          <ProductsExplorer />
        </Suspense>
      </Container>
    </div>
  );
}
