import Link from "next/link";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <Container className="flex flex-col items-center py-24 text-center">
      <p className="text-sm font-semibold text-rose-dark">404</p>
      <h1 className="mt-3 text-2xl font-bold text-ink sm:text-3xl">
        ページが見つかりませんでした
      </h1>
      <p className="mt-4 max-w-md text-ink-soft">
        お探しのページは移動または削除された可能性があります。下記のリンクから他のページをお探しください。
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/"
          className="rounded-full bg-rose px-7 py-3 text-sm font-bold text-white hover:bg-rose-dark"
        >
          トップページへ戻る
        </Link>
        <Link
          href="/products"
          className="rounded-full border border-ink/20 px-7 py-3 text-sm font-bold text-ink hover:border-rose hover:text-rose-dark"
        >
          商品を探す
        </Link>
      </div>
    </Container>
  );
}
