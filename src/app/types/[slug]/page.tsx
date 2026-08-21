import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ProductCard } from "@/components/product/ProductCard";
import { ProductIllustration } from "@/components/product/ProductIllustration";
import { packTypes, getPackTypeById } from "@/data/packTypes";
import { getProductsByPackType } from "@/data/products";

export function generateStaticParams() {
  return packTypes.map((t) => ({ slug: t.id }));
}

export async function generateMetadata(
  props: PageProps<"/types/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const type = getPackTypeById(slug);
  if (!type) return {};
  return {
    title: type.name,
    description: `${type.name}の特徴とおすすめの使い方、対応するローションパック商品をご紹介します。`,
  };
}

export default async function TypeDetailPage(props: PageProps<"/types/[slug]">) {
  const { slug } = await props.params;
  const type = getPackTypeById(slug);
  if (!type) notFound();

  const products = getProductsByPackType(type.id);

  return (
    <div>
      <div className="border-b border-line bg-ivory-deep py-10">
        <Container>
          <Breadcrumbs
            items={[
              { label: "トップ", href: "/" },
              { label: "種類から探す", href: "/types" },
              { label: type.name },
            ]}
          />
          <div className="mt-4 flex flex-col gap-6 sm:flex-row sm:items-center">
            <ProductIllustration
              packType={type.id}
              title={type.name}
              className="h-28 w-28 shrink-0 rounded-2xl"
            />
            <div>
              <h1 className="text-3xl font-bold text-ink sm:text-4xl">{type.name}</h1>
              <p className="mt-3 max-w-2xl text-ink-soft">{type.detail}</p>
              <p className="mt-3 text-sm font-semibold text-rose-dark">{type.goodFor}</p>
            </div>
          </div>
        </Container>
      </div>

      <Container className="py-14">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-xl font-bold text-ink">{type.name}の商品一覧（{products.length}件）</h2>
          <Link href="/types" className="text-sm font-semibold text-rose-dark hover:underline">
            他の種類を見る →
          </Link>
        </div>

        {products.length > 0 ? (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        ) : (
          <p className="mt-8 rounded-2xl border border-dashed border-line bg-white p-8 text-center text-sm text-ink-soft">
            現在このタイプに該当する掲載商品はありません。今後追加予定です。
          </p>
        )}
      </Container>
    </div>
  );
}
