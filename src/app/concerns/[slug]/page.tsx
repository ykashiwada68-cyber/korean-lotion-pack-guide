import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ProductCard } from "@/components/product/ProductCard";
import { concerns, getConcernById } from "@/data/concerns";
import { getProductsByConcern } from "@/data/products";

export function generateStaticParams() {
  return concerns.map((c) => ({ slug: c.id }));
}

export async function generateMetadata(
  props: PageProps<"/concerns/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const concern = getConcernById(slug);
  if (!concern) return {};
  return {
    title: `${concern.name}の悩みにおすすめのローションパック`,
    description: `${concern.name}が気になる方向けのローションパックと、ケアのポイントをご紹介します。`,
  };
}

export default async function ConcernDetailPage(
  props: PageProps<"/concerns/[slug]">
) {
  const { slug } = await props.params;
  const concern = getConcernById(slug);
  if (!concern) notFound();

  const products = getProductsByConcern(concern.id);

  return (
    <div>
      <div className="border-b border-line bg-blush-soft py-10">
        <Container>
          <Breadcrumbs
            items={[
              { label: "トップ", href: "/" },
              { label: "肌悩みから探す", href: "/concerns" },
              { label: concern.name },
            ]}
          />
          <h1 className="mt-4 text-3xl font-bold text-ink sm:text-4xl">{concern.name}</h1>
          <p className="mt-3 max-w-2xl text-ink-soft">{concern.detail}</p>
        </Container>
      </div>

      <Container className="py-14">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-xl font-bold text-ink">
            {concern.name}におすすめの商品（{products.length}件）
          </h2>
          <Link href="/concerns" className="text-sm font-semibold text-rose-dark hover:underline">
            他の悩みを見る →
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
            現在この悩みに該当する掲載商品はありません。今後追加予定です。
          </p>
        )}

        <div className="mt-12 rounded-2xl bg-ivory-deep p-6 text-sm leading-relaxed text-ink-soft">
          肌の状態には個人差があります。心配な場合は、皮膚科専門医やかかりつけ医にご相談のうえお試しください。
        </div>
      </Container>
    </div>
  );
}
