import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { packTypes } from "@/data/packTypes";

export const metadata: Metadata = {
  title: "正しい使い方",
  description:
    "ローションパックを使うタイミングや時間の目安、頻度、種類別の使い方のポイントをまとめてご紹介します。",
};

const steps = [
  {
    title: "洗顔・クレンジング",
    body: "メイクや汚れをやさしく落とし、肌を清潔な状態に整えます。",
  },
  {
    title: "導入美容液・化粧水（お使いの場合）",
    body: "普段お使いの化粧水や導入美容液で、肌をやわらかく整えておくとパックがなじみやすくなります。",
  },
  {
    title: "ローションパックをのせる",
    body: "商品ごとの目安時間・使い方に沿って、シートやパッドを肌にのせます。目や口のまわりは避け、やさしく密着させましょう。",
  },
  {
    title: "はずして、なじませる",
    body: "目安時間が経ったらシートやパッドをはずし、残った美容液を軽くパッティングしてなじませます。",
  },
  {
    title: "乳液・クリームで仕上げる",
    body: "うるおいを保つために、最後は乳液やクリームでフタをするように仕上げます。",
  },
];

export default function HowToUsePage() {
  return (
    <div>
      <div className="border-b border-line bg-ivory-deep py-10">
        <Container>
          <Breadcrumbs items={[{ label: "トップ", href: "/" }, { label: "正しい使い方" }]} />
          <h1 className="mt-4 text-3xl font-bold text-ink sm:text-4xl">正しい使い方</h1>
          <p className="mt-3 max-w-2xl text-ink-soft">
            ローションパックを取り入れるタイミングや時間の目安、頻度、種類別のポイントをまとめました。
          </p>
        </Container>
      </div>

      <Container className="py-14">
        <section className="max-w-3xl">
          <SectionHeading eyebrow="BASIC STEPS" title="基本のお手入れの流れ" />
          <ol className="mt-8 flex flex-col gap-6">
            {steps.map((s, i) => (
              <li key={s.title} className="flex gap-5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-rose text-sm font-bold text-white">
                  {i + 1}
                </span>
                <div>
                  <p className="font-bold text-ink">{s.title}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-6 text-sm leading-relaxed text-ink-soft">
            商品ごとの正確な使用時間・使用方法は、各商品の詳細ページ、またはパッケージ・公式サイトの表示に従ってください。
          </p>
        </section>

        <section className="mt-16 max-w-3xl">
          <SectionHeading eyebrow="TIPS" title="使うときに気をつけたいポイント" />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-line bg-white p-6">
              <h3 className="font-bold text-ink">目安時間を守る</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                シートマスクなどを長時間つけたままにすると、シートが乾いてかえって水分を奪ってしまう場合があります。商品ごとの目安時間を守りましょう。
              </p>
            </div>
            <div className="rounded-2xl border border-line bg-white p-6">
              <h3 className="font-bold text-ink">はじめては目立たない部分で</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                はじめて使う商品は、腕の内側などの目立たない部分で試してから、顔全体に使うと安心です。
              </p>
            </div>
            <div className="rounded-2xl border border-line bg-white p-6">
              <h3 className="font-bold text-ink">仕上げの保湿を忘れずに</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                パックのあとは乳液やクリームでうるおいにフタをすると、うるおいを保ちやすくなります。
              </p>
            </div>
            <div className="rounded-2xl border border-line bg-white p-6">
              <h3 className="font-bold text-ink">肌に異常を感じたら中止を</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                赤み・かゆみなど肌に異常を感じた場合は使用を中止し、皮膚科専門医にご相談ください。
              </p>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <SectionHeading eyebrow="BY TYPE" title="種類別の使い方のポイント" />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {packTypes.map((t) => (
              <div key={t.id} className="rounded-2xl border border-line bg-white p-6">
                <h3 className="font-bold text-ink">{t.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{t.detail}</p>
                <Link
                  href={`/types/${t.id}`}
                  className="mt-3 inline-block text-sm font-semibold text-rose-dark hover:underline"
                >
                  {t.name}の商品を見る →
                </Link>
              </div>
            ))}
          </div>
        </section>
      </Container>
    </div>
  );
}
