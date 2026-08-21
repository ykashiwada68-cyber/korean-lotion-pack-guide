import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: `${siteConfig.name}のプライバシーポリシーです。`,
};

export default function PrivacyPage() {
  return (
    <div>
      <div className="border-b border-line bg-ivory-deep py-10">
        <Container>
          <Breadcrumbs items={[{ label: "トップ", href: "/" }, { label: "プライバシーポリシー" }]} />
          <h1 className="mt-4 text-3xl font-bold text-ink sm:text-4xl">プライバシーポリシー</h1>
        </Container>
      </div>

      <Container className="max-w-3xl py-14">
        <p className="text-sm leading-loose text-ink-soft">
          {siteConfig.name}（以下「当サイト」）は、利用者の皆さまに安心してご利用いただけるよう、以下のとおりプライバシーポリシーを定めます。
        </p>

        <section className="mt-10">
          <h2 className="text-lg font-bold text-ink">1. お気に入り・比較機能について</h2>
          <p className="mt-3 text-sm leading-loose text-ink-soft">
            当サイトの「お気に入り」「商品比較」機能は、利用者の端末（ブラウザ）内のローカルストレージに情報を保存する仕組みです。これらの情報は当サイトのサーバーには送信されず、外部に共有されることもありません。ブラウザの設定やデータ削除操作により、保存内容は消去される場合があります。
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-lg font-bold text-ink">2. アクセス解析ツールについて</h2>
          <p className="mt-3 text-sm leading-loose text-ink-soft">
            当サイトでは、サイトの利用状況を把握するためにアクセス解析ツール（【利用するツール名を入力してください。例：Google
            アナリティクス 等】）を利用する場合があります。これらのツールはCookie等を通じてデータを収集しますが、氏名・住所・電話番号など個人を特定する情報は含まれません。収集されたデータは各ツール提供事業者のプライバシーポリシーに基づいて管理されます。
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-lg font-bold text-ink">3. 広告・アフィリエイトプログラムについて</h2>
          <p className="mt-3 text-sm leading-loose text-ink-soft">
            当サイトは、商品の購入先として外部の販売サイトへのリンクを掲載しています。これらのリンクには、成果報酬型広告（アフィリエイトプログラム）が含まれる場合があります。【利用するASP名等があれば入力してください】
            リンク先サイトで発生する取引・個人情報の取り扱いについては、各サイトのポリシーに従います。
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-lg font-bold text-ink">4. 第三者への提供について</h2>
          <p className="mt-3 text-sm leading-loose text-ink-soft">
            当サイトは、法令に基づく場合を除き、利用者の個人情報をご本人の同意なく第三者に提供することはありません。
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-lg font-bold text-ink">5. 免責事項</h2>
          <p className="mt-3 text-sm leading-loose text-ink-soft">
            当サイトに掲載する商品情報は、ブランド公式サイト等の情報をもとに作成していますが、内容の正確性・完全性・最新性を保証するものではありません。掲載内容は予告なく変更・削除される場合があります。当サイトの情報を利用したことにより生じた損害について、当サイトは一切の責任を負いかねます。
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-lg font-bold text-ink">6. プライバシーポリシーの変更</h2>
          <p className="mt-3 text-sm leading-loose text-ink-soft">
            当サイトは、法令の改正やサービス内容の変更等に応じて、本ポリシーの内容を予告なく変更することがあります。変更後のポリシーは、当ページに掲載した時点から効力を生じるものとします。
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-lg font-bold text-ink">7. お問い合わせ</h2>
          <p className="mt-3 text-sm leading-loose text-ink-soft">
            本ポリシーに関するお問い合わせは、
            <Link href="/company" className="text-rose-dark underline">
              運営者情報
            </Link>
            ページに記載の窓口までご連絡ください。
          </p>
        </section>

        <p className="mt-10 text-xs text-ink-soft">制定日：【公開日を入力してください】</p>
      </Container>
    </div>
  );
}
