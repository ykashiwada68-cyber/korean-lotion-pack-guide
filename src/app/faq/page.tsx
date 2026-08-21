import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "よくある質問",
  description: "ローションパックについて、はじめての方からよく寄せられる質問にお答えします。",
};

const faqs = [
  {
    q: "毎日使ってもいいですか？",
    a: "商品によって推奨される頻度は異なります。トナーパッドなど毎日のケア向けに作られたタイプもあれば、週2〜3回の集中ケア向けのタイプもあります。各商品ページの「使用頻度の目安」やパッケージの表示をご確認のうえ、肌の様子を見ながらお使いください。",
  },
  {
    q: "敏感肌でも使えますか？",
    a: "低刺激設計や無香料をうたった商品もありますが、肌の状態には個人差があります。はじめて使う際は目立たない部分でパッチテストを行い、肌に異常を感じた場合は使用を中止してください。心配な場合は皮膚科専門医にご相談ください。",
  },
  {
    q: "スキンケアのどの順番で使いますか？",
    a: "一般的には洗顔のあと、化粧水や導入美容液で肌を整えてから使用し、そのあとに乳液やクリームで仕上げる流れが多く紹介されています。詳しくは「正しい使い方」ページをご覧ください。",
  },
  {
    q: "シートマスクとトナーパッド、どちらを選べばいいですか？",
    a: "特別な日にじっくり集中ケアしたい場合はシートマスク、忙しい毎日に手軽に取り入れたい場合はトナーパッドが選ばれる傾向にあります。ライフスタイルや続けやすさで選んでみてください。",
  },
  {
    q: "使用時間の目安はどれくらいですか？",
    a: "商品タイプによって異なります。シートマスクは10〜20分程度を目安とする商品が多い一方、トナーパッドは拭き取ってすぐなじませるタイプが一般的です。詳細は各商品ページをご確認ください。",
  },
  {
    q: "開封後はどれくらいの期間で使い切ればいいですか？",
    a: "商品によって推奨される使用期限が異なります。パッケージに記載の使用期限や開封後の目安期間を確認し、清潔な状態で保管・使用してください。",
  },
  {
    q: "商品の価格や在庫を知りたいです。",
    a: "価格や在庫は販売サイト・時期によって変動するため、本サイトでは目安のみをご案内しています。最新の情報は各商品ページの「購入先へのリンク」から公式サイト等でご確認ください。",
  },
  {
    q: "使うとすぐに肌悩みが解消しますか？",
    a: "本サイトで紹介している商品は化粧品であり、医薬品のような治療効果を保証するものではありません。うるおいを与える、肌を整えるといった一般的なスキンケアの範囲でご案内しています。",
  },
];

export default function FaqPage() {
  return (
    <div>
      <div className="border-b border-line bg-blush-soft py-10">
        <Container>
          <Breadcrumbs items={[{ label: "トップ", href: "/" }, { label: "よくある質問" }]} />
          <h1 className="mt-4 text-3xl font-bold text-ink sm:text-4xl">よくある質問</h1>
          <p className="mt-3 max-w-2xl text-ink-soft">
            ローションパックについて、はじめての方からよく寄せられる質問にお答えします。
          </p>
        </Container>
      </div>

      <Container className="max-w-3xl py-14">
        <div className="flex flex-col gap-3">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="group rounded-2xl border border-line bg-white p-5 open:shadow-sm"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-ink">
                <span className="flex gap-3">
                  <span aria-hidden="true" className="text-rose-dark">Q</span>
                  {item.q}
                </span>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                  className="h-5 w-5 shrink-0 text-ink-soft transition-transform group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m5 7.5 5 5 5-5" />
                </svg>
              </summary>
              <p className="mt-4 flex gap-3 text-sm leading-relaxed text-ink-soft">
                <span aria-hidden="true" className="font-bold text-ink-soft/60">A</span>
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </div>
  );
}
