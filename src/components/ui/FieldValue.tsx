import { UNCONFIRMED } from "@/types/product";

/**
 * 商品情報の1項目を表示する。値が「情報未確認」の場合は
 * 断定的に見えないよう、控えめなスタイルとアイコンで表示する。
 */
export function FieldValue({ value }: { value: string }) {
  const isUnconfirmed = value === UNCONFIRMED || value.startsWith(UNCONFIRMED);
  if (isUnconfirmed) {
    return (
      <span className="inline-flex items-center gap-1.5 text-ink-soft/80">
        <svg
          aria-hidden="true"
          viewBox="0 0 20 20"
          className="h-4 w-4 shrink-0"
          fill="none"
        >
          <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M10 9v4.2M10 6.8v.1"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
        {value}
      </span>
    );
  }
  return <span>{value}</span>;
}
