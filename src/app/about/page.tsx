import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { packTypes } from "@/data/packTypes";

export const metadata: Metadata = {
  title: "ローションパックとは",
  description:
    "韓国コスメで親しまれている「ローションパック」の基本を解説。シートマスクやトナーパッドとの違い、取り入れられている理由をやさしくご紹介します。",
};

export default function AboutPage() {
  return (
    <div>
      <div className="border-b border-line bg-blush-soft py-10">
        <Container>
          <Breadcrumbs items={[{ label: "トップ", href: "/" }, { label: "ローションパックとは" }]} />
          <h1 className="mt-4 text-3xl font-bold text-ink sm:text-4xl">ローションパックとは</h1>
          <p className="mt-3 max-w-2xl text-ink-soft">
            韓国コスメのスキンケアで広く親しまれている「ローションパック」の基本を、はじめての方にも分かりやすくご紹介します。
          </p>
        </Container>
      </div>

      <Container className="max-w-3xl py-14">
        <section className="prose-section">
          <h2 className="text-xl font-bold text-ink">基本的な考え方</h2>
          <p className="mt-4 leading-loose text-ink-soft">
            「ローションパック」とは、化粧水（ローション）をたっぷり含んだシートやコットン、パッドなどを肌にのせて、うるおいを与えるスキンケアの総称です。韓国では日常のお手入れとして定着しており、シートマスクやトナーパッドなど、さまざまなタイプが販売されています。
          </p>
          <p className="mt-4 leading-loose text-ink-soft">
            決まった1つの商品を指す言葉ではなく、「化粧水を肌にのせて集中的にうるおいを与える」という使い方そのものを指すことが多く、商品タイプによって使い心地や取り入れやすさが異なります。
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-bold text-ink">どうして韓国コスメで親しまれているの？</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-line bg-white p-6">
              <h3 className="font-bold text-ink">手軽に取り入れやすい</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                トナーパッドのように、拭き取りとうるおいケアを同時に行えるタイプもあり、忙しい朝晩のお手入れに取り入れやすいことが理由のひとつとして挙げられます。
              </p>
            </div>
            <div className="rounded-2xl border border-line bg-white p-6">
              <h3 className="font-bold text-ink">タイプが豊富で選びやすい</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                シートマスク、トナーパッド、部分用パックなど種類が豊富なため、その日の肌状態やシーンに合わせて選べる点も親しまれている理由です。
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-bold text-ink">シートマスクとの違い</h2>
          <p className="mt-4 leading-loose text-ink-soft">
            シートマスクは顔全体を覆う形状で、10〜20分程度のせておく集中ケアが基本です。一方でローションパックには、拭き取りタイプのトナーパッドや、気になる部分だけに使う部分用パックなど、より日常使いしやすいタイプも多く含まれます。目的や使うシーンに応じて使い分けるのがポイントです。
          </p>
        </section>

        <section className="mt-12 rounded-2xl bg-ivory-deep p-6">
          <h2 className="text-lg font-bold text-ink">ご注意</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft">
            本サイトの情報は、化粧品としての一般的な使い方や特徴をご紹介するものであり、治療効果や効能を保証するものではありません。肌に異常を感じた場合は使用を中止し、皮膚科専門医などにご相談ください。
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-bold text-ink">タイプ一覧をチェックする</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {packTypes.map((t) => (
              <Link
                key={t.id}
                href={`/types/${t.id}`}
                className="rounded-xl border border-line bg-white p-4 text-sm font-semibold text-ink hover:border-rose hover:text-rose-dark"
              >
                {t.name}
              </Link>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/how-to-use"
              className="rounded-full bg-rose px-6 py-3 text-center text-sm font-bold text-white hover:bg-rose-dark"
            >
              正しい使い方を見る
            </Link>
            <Link
              href="/concerns"
              className="rounded-full border border-ink/20 px-6 py-3 text-center text-sm font-bold text-ink hover:border-rose hover:text-rose-dark"
            >
              肌悩みから探す
            </Link>
          </div>
        </section>
      </Container>
    </div>
  );
}
