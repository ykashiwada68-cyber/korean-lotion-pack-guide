import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site";

const columns = [
  {
    title: "商品を探す",
    links: [
      { href: "/types", label: "種類から探す" },
      { href: "/concerns", label: "肌悩みから探す" },
      { href: "/products", label: "商品を検索する" },
      { href: "/compare", label: "商品比較" },
    ],
  },
  {
    title: "使い方・ガイド",
    links: [
      { href: "/about", label: "ローションパックとは" },
      { href: "/how-to-use", label: "正しい使い方" },
      { href: "/faq", label: "よくある質問" },
    ],
  },
  {
    title: "サイトについて",
    links: [
      { href: "/company", label: "運営者情報" },
      { href: "/privacy", label: "プライバシーポリシー" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-ivory-deep">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div>
          <Link href="/" className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-rose text-white"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                <path d="M12 3c1.8 2.4 4.5 4.7 4.5 8.2A4.5 4.5 0 1 1 7.5 11c0-3.4 2.7-5.9 4.5-8z" />
              </svg>
            </span>
            <span className="text-base font-bold text-ink">{siteConfig.shortName}</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-soft">
            {siteConfig.description}
          </p>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h3 className="text-sm font-bold text-ink">{col.title}</h3>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-ink-soft">
              {col.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-rose-dark hover:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>

      <div className="border-t border-line py-6">
        <Container className="flex flex-col items-center justify-between gap-3 text-xs text-ink-soft sm:flex-row">
          <p>&copy; {new Date().getFullYear()} {siteConfig.shortName}</p>
          <p>
            本サイトは化粧品の情報提供を目的としています。効果・効能を保証するものではありません。
          </p>
        </Container>
      </div>
    </footer>
  );
}
