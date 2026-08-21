import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { FavoritesView } from "@/components/product/FavoritesView";

export const metadata: Metadata = {
  title: "お気に入り",
  description: "お気に入りに追加したローションパックの一覧です。",
  robots: { index: false, follow: true },
};

export default function FavoritesPage() {
  return (
    <div>
      <div className="border-b border-line bg-blush-soft py-10">
        <Container>
          <Breadcrumbs items={[{ label: "トップ", href: "/" }, { label: "お気に入り" }]} />
          <h1 className="mt-4 text-3xl font-bold text-ink sm:text-4xl">お気に入り</h1>
          <p className="mt-3 max-w-2xl text-ink-soft">
            ハートマークで保存した商品は、この端末のブラウザに保存され、いつでも見返せます。
          </p>
        </Container>
      </div>

      <Container className="py-12">
        <FavoritesView />
      </Container>
    </div>
  );
}
