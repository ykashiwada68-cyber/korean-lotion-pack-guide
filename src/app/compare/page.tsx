import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CompareView } from "@/components/product/CompareView";

export const metadata: Metadata = {
  title: "商品比較",
  description: "気になるローションパックを選んで、成分や使い方、価格帯などを並べて比較できます。",
};

export default function ComparePage() {
  return (
    <div>
      <div className="border-b border-line bg-ivory-deep py-10">
        <Container>
          <Breadcrumbs items={[{ label: "トップ", href: "/" }, { label: "商品比較" }]} />
          <h1 className="mt-4 text-3xl font-bold text-ink sm:text-4xl">商品比較</h1>
          <p className="mt-3 max-w-2xl text-ink-soft">
            商品一覧の「比較に追加」で選んだ商品を、成分や使い方、価格帯などの項目で並べて比較できます（最大4件）。
          </p>
        </Container>
      </div>

      <Container className="py-12">
        <CompareView />
      </Container>
    </div>
  );
}
