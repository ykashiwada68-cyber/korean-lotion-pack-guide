import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { concerns } from "@/data/concerns";
import { getProductsByConcern } from "@/data/products";

export const metadata: Metadata = {
  title: "肌悩みから探す",
  description:
    "乾燥、毛穴、くすみ、ハリ不足、敏感肌など、気になる肌悩みからローションパックを探せます。",
};

export default function ConcernsPage() {
  return (
    <div>
      <div className="border-b border-line bg-blush-soft py-10">
        <Container>
          <Breadcrumbs items={[{ label: "トップ", href: "/" }, { label: "肌悩みから探す" }]} />
          <h1 className="mt-4 text-3xl font-bold text-ink sm:text-4xl">肌悩みから探す</h1>
          <p className="mt-3 max-w-2xl text-ink-soft">
            今いちばん気になる肌悩みを選ぶと、それに合わせたローションパックが見つかります。
          </p>
        </Container>
      </div>

      <Container className="py-14">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {concerns.map((c) => {
            const count = getProductsByConcern(c.id).length;
            return (
              <Link
                key={c.id}
                href={`/concerns/${c.id}`}
                className="group flex flex-col rounded-2xl border border-line bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-rose hover:shadow-md"
              >
                <h2 className="text-lg font-bold text-ink group-hover:text-rose-dark">{c.name}</h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{c.description}</p>
                <p className="mt-4 text-xs font-semibold text-rose-dark">掲載商品 {count}件を見る →</p>
              </Link>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
