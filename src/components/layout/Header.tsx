"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { useAppState } from "@/context/AppStateContext";
import { siteConfig } from "@/lib/site";

const navItems = [
  { href: "/about", label: "ローションパックとは" },
  { href: "/types", label: "種類から探す" },
  { href: "/concerns", label: "肌悩みから探す" },
  { href: "/compare", label: "商品比較" },
  { href: "/how-to-use", label: "正しい使い方" },
  { href: "/faq", label: "よくある質問" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();
  const { favorites, compareList, ready } = useAppState();

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    setMenuOpen(false);
    const q = query.trim();
    router.push(q ? `/products?q=${encodeURIComponent(q)}` : "/products");
  }

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-ivory/95 backdrop-blur">
      <a href="#main-content" className="skip-link">
        本文へスキップ
      </a>
      <Container className="flex h-20 items-center justify-between gap-3">
        <Link href="/" className="flex shrink-0 items-center gap-2" onClick={() => setMenuOpen(false)}>
          <span
            aria-hidden="true"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-rose text-white"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
              <path d="M12 3c1.8 2.4 4.5 4.7 4.5 8.2A4.5 4.5 0 1 1 7.5 11c0-3.4 2.7-5.9 4.5-8z" />
            </svg>
          </span>
          <span className="text-base font-bold text-ink">{siteConfig.shortName}</span>
        </Link>

        <nav aria-label="メインナビゲーション" className="hidden flex-1 justify-center xl:flex">
          <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[13.5px] font-medium text-ink-soft xl:gap-x-6 xl:text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="whitespace-nowrap transition-colors hover:text-rose-dark">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1.5">
          <Link
            href="/products"
            className="hidden h-10 w-10 items-center justify-center rounded-full text-ink-soft hover:bg-blush hover:text-rose-dark sm:flex"
            aria-label="商品名で検索する"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" strokeLinecap="round" />
            </svg>
          </Link>

          <Link
            href="/favorites"
            className="relative flex h-10 w-10 items-center justify-center rounded-full text-ink-soft hover:bg-blush hover:text-rose-dark"
            aria-label={`お気に入り${ready && favorites.length > 0 ? `（${favorites.length}件）` : ""}`}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 20.4s-7.6-4.6-10-9.2C.6 8 1.8 4.6 5 3.6c2.1-.7 4.2.1 5.6 2 .5.6.9 1.2 1.4 1.9.5-.7.9-1.3 1.4-1.9 1.4-1.9 3.5-2.7 5.6-2 3.2 1 4.4 4.4 3 7.6-2.4 4.6-10 9.2-10 9.2z"
              />
            </svg>
            {ready && favorites.length > 0 ? (
              <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-rose-dark text-[10px] font-bold text-white">
                {favorites.length}
              </span>
            ) : null}
          </Link>

          <Link
            href="/compare"
            className="relative hidden h-10 items-center gap-1.5 rounded-full border border-line px-3 text-sm font-semibold text-ink-soft hover:border-rose hover:text-rose-dark sm:flex"
          >
            比較
            {ready && compareList.length > 0 ? (
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-rose-dark text-[11px] font-bold text-white">
                {compareList.length}
              </span>
            ) : null}
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "メニューを閉じる" : "メニューを開く"}
            className="flex h-10 w-10 items-center justify-center rounded-full text-ink hover:bg-blush xl:hidden"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
              {menuOpen ? (
                <path strokeLinecap="round" d="M6 6l12 12M18 6 6 18" />
              ) : (
                <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </Container>

      {menuOpen ? (
        <div id="mobile-menu" className="border-t border-line bg-ivory xl:hidden">
          <Container className="flex flex-col gap-4 py-5">
            <form onSubmit={handleSearch} role="search" className="flex">
              <label htmlFor="mobile-search" className="sr-only">
                商品名で検索
              </label>
              <input
                id="mobile-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="商品名で検索"
                className="w-full rounded-l-full border border-r-0 border-line bg-white px-4 py-2.5 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-dark"
              />
              <button
                type="submit"
                className="rounded-r-full border border-line bg-white px-4 text-ink-soft"
                aria-label="検索する"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="7" />
                  <path d="m20 20-3.5-3.5" strokeLinecap="round" />
                </svg>
              </button>
            </form>
            <ul className="flex flex-col divide-y divide-line text-base font-medium text-ink">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="block py-3"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/favorites" onClick={() => setMenuOpen(false)} className="block py-3">
                  お気に入り{ready && favorites.length > 0 ? `（${favorites.length}）` : ""}
                </Link>
              </li>
            </ul>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
