import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductCard } from "@/components/product/ProductCard";
import { ProductIllustration } from "@/components/product/ProductIllustration";
import { concerns } from "@/data/concerns";
import { packTypes } from "@/data/packTypes";
import { getFeaturedProducts, getNewProducts } from "@/data/products";
import { siteConfig } from "@/lib/site";

const popularArticles = [
  {
    href: "/about",
    title: "ローションパックとは？基本をやさしく解説",
    description:
      "シートマスクやトナーパッドとの違い、韓国コスメで親しまれている理由をまとめました。",
  },
  {
    href: "/how-to-use",
    title: "正しい使い方｜順番・時間・頻度の目安",
    description: "スキンケアのどの段階で使うのか、置いておく時間の目安を紹介します。",
  },
  {
    href: "/faq",
    title: "よくある質問｜毎日使ってもいい？敏感肌でも大丈夫？",
    description: "はじめての方が気になりやすい疑問に、Q&A形式でお答えします。",
  },
];

export default function HomePage() {
  const featured = getFeaturedProducts();
  const newProducts = getNewProducts();

  return (
    <div>
      {/* メインビジュアル */}
      <section className="relative overflow-hidden border-b border-line">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-blush-soft via-ivory to-ivory"
        />
        <Container className="relative flex flex-col-reverse items-center gap-10 py-14 sm:py-20 lg:flex-row lg:gap-16">
          <div className="w-full lg:w-1/2">
            <p className="text-sm font-semibold tracking-wide text-rose-dark">
              K-BEAUTY LOTION PACK GUIDE
            </p>
            <h1 className="mt-4 text-3xl font-bold leading-snug text-ink sm:text-4xl lg:text-5xl">
              今日の肌に、
              <br />
              ぴったりの1枚を。
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-ink-soft">
              韓国コスメの「ローションパック」を、種類・特徴・使い方・肌質別の選び方から分かりやすくご紹介します。乾燥、毛穴、くすみ、ハリ不足など、その日の肌悩みに合わせて探せます。
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/concerns"
                className="rounded-full bg-rose px-7 py-3.5 text-center text-sm font-bold text-white shadow-sm transition-colors hover:bg-rose-dark"
              >
                肌悩みから選ぶ
              </Link>
              <Link
                href="/types"
                className="rounded-full border border-ink/20 bg-white px-7 py-3.5 text-center text-sm font-bold text-ink transition-colors hover:border-rose hover:text-rose-dark"
              >
                種類から選ぶ
              </Link>
            </div>
          </div>
          <div className="grid w-full grid-cols-3 gap-3 sm:gap-4 lg:w-1/2">
            {packTypes.slice(0, 3).map((type, i) => (
              <div
                key={type.id}
                className={`overflow-hidden rounded-3xl ${i === 1 ? "translate-y-4" : ""}`}
              >
                <ProductIllustration packType={type.id} title={type.name} className="w-full" />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 肌悩みから選ぶ */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="SKIN CONCERNS"
            title="肌悩みから選ぶ"
            lead="気になっていることを選ぶだけで、ぴったりのローションパックが見つかります。"
          />
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {concerns.map((c) => (
              <Link
                key={c.id}
                href={`/concerns/${c.id}`}
                className="group flex flex-col justify-between rounded-2xl border border-line bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-rose hover:shadow-md"
              >
                <span className="text-lg font-bold text-ink group-hover:text-rose-dark">
                  {c.name}
                </span>
                <span className="mt-3 line-clamp-2 text-xs text-ink-soft">{c.description}</span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* 種類から選ぶ */}
      <section className="bg-ivory-deep py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="TYPES"
            title="パックの種類から選ぶ"
            lead="シートマスクからコットンパックまで、ライフスタイルに合ったタイプを選べます。"
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {packTypes.map((type) => (
              <Link
                key={type.id}
                href={`/types/${type.id}`}
                className="group flex items-center gap-4 rounded-2xl border border-line bg-white p-4 transition-all hover:-translate-y-0.5 hover:border-rose hover:shadow-md"
              >
                <ProductIllustration
                  packType={type.id}
                  title={type.name}
                  className="h-16 w-16 shrink-0 rounded-xl"
                />
                <div>
                  <p className="font-bold text-ink group-hover:text-rose-dark">{type.name}</p>
                  <p className="mt-1 line-clamp-2 text-xs text-ink-soft">{type.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* おすすめ商品 */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading eyebrow="PICK UP" title="おすすめ商品" />
            <Link href="/products" className="text-sm font-semibold text-rose-dark hover:underline">
              すべての商品を見る →
            </Link>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </Container>
      </section>

      {/* 初心者向けローションパックの選び方 */}
      <section className="bg-blush-soft py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading eyebrow="FOR BEGINNERS" title="初心者向け｜ローションパックの選び方" />
            <ol className="mt-6 flex flex-col gap-5">
              <li className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-rose text-sm font-bold text-white">
                  1
                </span>
                <p className="text-sm leading-relaxed text-ink-soft">
                  まずは<strong className="text-ink">気になる肌悩み</strong>を1つ選びましょう。乾燥・毛穴・くすみなど、その日いちばん気になるものでOKです。
                </p>
              </li>
              <li className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-rose text-sm font-bold text-white">
                  2
                </span>
                <p className="text-sm leading-relaxed text-ink-soft">
                  次に<strong className="text-ink">続けやすい種類</strong>を選びます。忙しい日はトナーパッド、特別な日はシートマスクなど、使うシーンをイメージすると選びやすくなります。
                </p>
              </li>
              <li className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-rose text-sm font-bold text-white">
                  3
                </span>
                <p className="text-sm leading-relaxed text-ink-soft">
                  はじめて使う商品は、目立たない部分で試してから顔全体に使うと安心です。詳しい手順は「正しい使い方」ページもご確認ください。
                </p>
              </li>
            </ol>
            <Link
              href="/how-to-use"
              className="mt-8 inline-block rounded-full bg-ink px-6 py-3 text-sm font-bold text-ivory transition-colors hover:bg-rose-dark"
            >
              正しい使い方を見る
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {packTypes.slice(1, 5).map((type) => (
              <ProductIllustration
                key={type.id}
                packType={type.id}
                title={type.name}
                className="w-full rounded-2xl"
              />
            ))}
          </div>
        </Container>
      </section>

      {/* 人気記事 */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="ARTICLES" title="人気記事" />
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {popularArticles.map((a) => (
              <Link
                key={a.href}
                href={a.href}
                className="group flex flex-col rounded-2xl border border-line bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-rose hover:shadow-md"
              >
                <h3 className="font-bold leading-snug text-ink group-hover:text-rose-dark">
                  {a.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{a.description}</p>
                <span className="mt-4 text-sm font-semibold text-rose-dark">続きを読む →</span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* 新着商品 */}
      <section className="bg-ivory-deep py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="NEW ARRIVAL" title="新着商品" />
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {newProducts.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-14">
        <Container className="rounded-3xl bg-rose px-6 py-12 text-center sm:px-12">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            {siteConfig.catchCopy}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-white/90">
            気になる肌悩みや、続けやすいパックの種類から、あなたに合う1枚を見つけてみませんか。
          </p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/concerns"
              className="rounded-full bg-white px-7 py-3 text-sm font-bold text-rose-dark hover:bg-ivory"
            >
              肌悩みから選ぶ
            </Link>
            <Link
              href="/products"
              className="rounded-full border border-white/70 px-7 py-3 text-sm font-bold text-white hover:bg-white/10"
            >
              商品を検索する
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
