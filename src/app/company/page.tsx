import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "運営者情報",
  description: `${siteConfig.name}の運営者情報です。`,
};

const items: { label: string; value: string }[] = [
  { label: "サイト名", value: siteConfig.name },
  { label: "運営者名", value: "【運営者名・運営会社名を入力してください】" },
  { label: "運営開始", value: "【運営開始年月を入力してください】" },
  { label: "お問い合わせ", value: "【お問い合わせ用メールアドレスまたはフォームURLを入力してください】" },
  { label: "所在地", value: "【必要に応じて入力してください】" },
];

export default function CompanyPage() {
  return (
    <div>
      <div className="border-b border-line bg-ivory-deep py-10">
        <Container>
          <Breadcrumbs items={[{ label: "トップ", href: "/" }, { label: "運営者情報" }]} />
          <h1 className="mt-4 text-3xl font-bold text-ink sm:text-4xl">運営者情報</h1>
        </Container>
      </div>

      <Container className="max-w-3xl py-14">
        <section>
          <h2 className="text-lg font-bold text-ink">サイトの目的</h2>
          <p className="mt-3 leading-loose text-ink-soft">
            {siteConfig.name}は、韓国コスメの「ローションパック」について、種類・特徴・使い方・肌質別の選び方を分かりやすくご紹介する情報サイトです。掲載している商品情報は、ブランド公式サイト等の一次情報をもとに編集部で要約・確認しています。確認できなかった項目は「情報未確認」と明記しています。
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-lg font-bold text-ink">運営情報</h2>
          <dl className="mt-4 divide-y divide-line rounded-2xl border border-line bg-white">
            {items.map((item) => (
              <div key={item.label} className="grid grid-cols-1 gap-1 p-5 sm:grid-cols-[9rem_1fr]">
                <dt className="text-sm font-bold text-ink-soft">{item.label}</dt>
                <dd className="text-sm text-ink">{item.value}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-3 text-xs text-ink-soft">
            ※ 上記の【　】内はサンプルの入力欄です。公開前に実際の情報へ差し替えてください（README.mdをご参照ください）。
          </p>
        </section>

        <section className="mt-10 rounded-2xl bg-blush-soft p-6">
          <h2 className="text-base font-bold text-ink">掲載内容について</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft">
            本サイトの内容は、化粧品としての一般的な情報提供を目的としており、医薬品的な効能・効果を保証するものではありません。また、商品の価格・仕様・在庫状況は変動する場合があります。最新情報は各商品の購入先ページにてご確認ください。
          </p>
        </section>
      </Container>
    </div>
  );
}
