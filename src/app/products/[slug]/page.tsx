import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { FieldValue } from "@/components/ui/FieldValue";
import { ProductIllustration } from "@/components/product/ProductIllustration";
import { FavoriteButton } from "@/components/product/FavoriteButton";
import { CompareCheckbox } from "@/components/product/CompareCheckbox";
import { ProductCard } from "@/components/product/ProductCard";
import { products, getProductBySlug } from "@/data/products";
import { getPackTypeById } from "@/data/packTypes";
import { getConcernById } from "@/data/concerns";
import { getSkinTypeById } from "@/data/skinTypes";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  props: PageProps<"/products/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: `${product.name}（${product.brand}）`,
    description: `${product.brand}の${product.name}の特徴・成分・使い方をご紹介。${product.features[0]}`,
  };
}

function InfoRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 gap-1 border-b border-line py-4 sm:grid-cols-[10rem_1fr] sm:gap-4">
      <dt className="text-sm font-bold text-ink-soft">{label}</dt>
      <dd className="text-sm leading-relaxed text-ink">{children}</dd>
    </div>
  );
}

export default async function ProductDetailPage(
  props: PageProps<"/products/[slug]">
) {
  const { slug } = await props.params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const packType = getPackTypeById(product.packType);
  const related = products
    .filter((p) => p.slug !== product.slug && p.packType === product.packType)
    .slice(0, 3);

  return (
    <div>
      <div className="border-b border-line bg-ivory-deep py-8">
        <Container>
          <Breadcrumbs
            items={[
              { label: "トップ", href: "/" },
              { label: "商品を検索する", href: "/products" },
              { label: product.name },
            ]}
          />
        </Container>
      </div>

      <Container className="py-12">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,26rem)_1fr]">
          <div>
            <div className="overflow-hidden rounded-3xl border border-line">
              <ProductIllustration
                packType={product.packType}
                title={product.name}
                className="w-full"
              />
            </div>
            <div className="mt-5 flex items-center gap-3">
              <FavoriteButton slug={product.slug} name={product.name} />
              <CompareCheckbox slug={product.slug} name={product.name} />
            </div>
          </div>

          <div>
            <div className="flex flex-wrap gap-2">
              {product.isNew ? <Badge tone="ink">新着</Badge> : null}
              {packType ? (
                <Link href={`/types/${packType.id}`}>
                  <Badge tone="rose">{packType.shortName}</Badge>
                </Link>
              ) : null}
            </div>

            <p className="mt-4 text-sm font-semibold text-rose-dark">
              {product.brand}
              {product.brandNative ? (
                <span className="ml-2 text-ink-soft">（{product.brandNative}）</span>
              ) : null}
            </p>
            <h1 className="mt-1 text-2xl font-bold leading-snug text-ink sm:text-3xl">
              {product.name}
            </h1>
            {product.nameNative ? (
              <p className="mt-1 text-sm text-ink-soft">{product.nameNative}</p>
            ) : null}

            <p className="mt-5 text-xl font-bold text-ink">
              <FieldValue value={product.priceRange} />
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {product.skinTypes.map((s) => {
                const meta = getSkinTypeById(s);
                return meta ? <Badge key={s} tone="beige">{meta.name}</Badge> : null;
              })}
              {product.concerns.map((c) => {
                const meta = getConcernById(c);
                return meta ? (
                  <Link key={c} href={`/concerns/${c}`}>
                    <Badge tone="rose">{meta.name}</Badge>
                  </Link>
                ) : null;
              })}
            </div>

            <ul className="mt-6 flex flex-col gap-2.5">
              {product.features.map((f, i) => (
                <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-ink-soft">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rose" />
                  {f}
                </li>
              ))}
            </ul>

            <a
              href={product.purchaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-rose px-7 py-3.5 text-sm font-bold text-white shadow-sm transition-colors hover:bg-rose-dark"
            >
              {product.purchaseLabel}
              <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 13 13 7M8 7h5v5" />
              </svg>
            </a>
            <p className="mt-2 text-xs text-ink-soft">
              価格・在庫は販売サイトの状況により変動します。購入前に必ず販売ページでご確認ください。
            </p>
          </div>
        </div>

        {/* 詳細情報 */}
        <section className="mt-16">
          <h2 className="text-xl font-bold text-ink">商品詳細</h2>
          <dl className="mt-4">
            <InfoRow label="注目成分">
              <ul className="flex flex-col gap-1">
                {product.keyIngredients.map((ing, i) => (
                  <li key={i}>・{ing}</li>
                ))}
              </ul>
            </InfoRow>
            <InfoRow label="使用方法">{product.howToUse}</InfoRow>
            <InfoRow label="使用時間の目安">
              <FieldValue value={product.usageTime} />
            </InfoRow>
            <InfoRow label="使用頻度の目安">
              <FieldValue value={product.usageFrequency} />
            </InfoRow>
            <InfoRow label="香り">
              <FieldValue value={product.scent} />
            </InfoRow>
            <InfoRow label="内容量">
              <FieldValue value={product.volume} />
            </InfoRow>
          </dl>
        </section>

        {/* 良い点・注意点 */}
        <section className="mt-12 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-line bg-white p-6">
            <h2 className="flex items-center gap-2 text-base font-bold text-ink">
              <span aria-hidden="true" className="text-rose-dark">◎</span> 良い点
            </h2>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm leading-relaxed text-ink-soft">
              {product.pros.map((p, i) => (
                <li key={i}>・{p}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-line bg-white p-6">
            <h2 className="flex items-center gap-2 text-base font-bold text-ink">
              <span aria-hidden="true" className="text-ink-soft">△</span> 注意点
            </h2>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm leading-relaxed text-ink-soft">
              {product.cautions.map((c, i) => (
                <li key={i}>・{c}</li>
              ))}
            </ul>
          </div>
        </section>

        <p className="mt-8 rounded-xl bg-ivory-deep p-4 text-xs leading-relaxed text-ink-soft">
          本ページの情報は、ブランド公式サイト等をもとに編集部が要約・掲載しています（{product.sourceNote}）。確認できなかった項目は「情報未確認」と表記しています。効果・効能を保証するものではありません。最新情報は購入先の公式ページでご確認ください。
        </p>

        {related.length > 0 ? (
          <section className="mt-16">
            <h2 className="text-xl font-bold text-ink">同じ種類のおすすめ商品</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </section>
        ) : null}
      </Container>
    </div>
  );
}
