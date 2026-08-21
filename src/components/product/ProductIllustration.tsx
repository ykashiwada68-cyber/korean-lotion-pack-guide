import type { PackTypeId } from "@/types/product";

/**
 * 商品写真の代わりに使う、パックの種類ごとのシンプルなイラスト。
 * 実商品の写真を掲載する場合は、ProductCard / 商品詳細ページで
 * <img src={product.imageUrl} /> 等に差し替えてください（README参照）。
 */

const palette: Record<PackTypeId, { bg: string; accent: string; accent2: string }> = {
  "sheet-mask": { bg: "#F7E7E5", accent: "#C98A8F", accent2: "#FBF0EF" },
  "toner-pad": { bg: "#ECE1CD", accent: "#A9666C", accent2: "#FDFAF5" },
  "spot-pack": { bg: "#F7E7E5", accent: "#DDCCAE", accent2: "#FDFAF5" },
  "cotton-soak": { bg: "#FDFAF5", accent: "#C98A8F", accent2: "#ECE1CD" },
  "leave-on": { bg: "#ECE1CD", accent: "#8F6B4E", accent2: "#F7E7E5" },
};

function SheetMaskArt({ accent, accent2 }: { accent: string; accent2: string }) {
  return (
    <>
      <path
        d="M100 40c-35 0-58 26-58 62 0 40 26 70 58 70s58-30 58-70c0-36-23-62-58-62z"
        fill={accent2}
        stroke={accent}
        strokeWidth="3"
      />
      <ellipse cx="76" cy="102" rx="9" ry="6" fill={accent} opacity="0.6" />
      <ellipse cx="124" cy="102" rx="9" ry="6" fill={accent} opacity="0.6" />
      <path d="M84 138q16 12 32 0" stroke={accent} strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M60 76q40-18 80 0" stroke={accent} strokeWidth="2" fill="none" opacity="0.5" />
    </>
  );
}

function TonerPadArt({ accent, accent2 }: { accent: string; accent2: string }) {
  return (
    <>
      <circle cx="100" cy="118" r="46" fill={accent2} stroke={accent} strokeWidth="3" />
      <circle cx="92" cy="100" r="46" fill="none" stroke={accent} strokeWidth="3" opacity="0.55" />
      <circle cx="92" cy="100" r="46" fill={accent2} opacity="0.9" />
      <circle cx="92" cy="100" r="20" fill="none" stroke={accent} strokeWidth="1.5" opacity="0.4" />
      <circle cx="92" cy="100" r="32" fill="none" stroke={accent} strokeWidth="1.5" opacity="0.3" />
    </>
  );
}

function SpotPackArt({ accent, accent2 }: { accent: string; accent2: string }) {
  return (
    <>
      <ellipse cx="100" cy="112" rx="42" ry="52" fill={accent2} stroke={accent} strokeWidth="3" />
      <circle cx="100" cy="100" r="14" fill={accent} opacity="0.5" />
      <path d="M70 150q30 20 60 0" stroke={accent} strokeWidth="2" fill="none" opacity="0.4" />
    </>
  );
}

function CottonSoakArt({ accent, accent2 }: { accent: string; accent2: string }) {
  return (
    <>
      <ellipse cx="100" cy="110" rx="52" ry="34" fill={accent2} stroke={accent} strokeWidth="3" />
      <path d="M56 104q10-14 20 0M84 100q10-16 20 0M112 104q10-14 20 0" stroke={accent} strokeWidth="2" fill="none" opacity="0.5" />
      <path d="M130 66c8 4 12 14 8 22" stroke={accent} strokeWidth="3" fill="none" strokeLinecap="round" />
      <circle cx="140" cy="60" r="4" fill={accent} />
    </>
  );
}

function LeaveOnArt({ accent, accent2 }: { accent: string; accent2: string }) {
  return (
    <>
      <rect x="66" y="86" width="68" height="72" rx="14" fill={accent2} stroke={accent} strokeWidth="3" />
      <rect x="80" y="66" width="40" height="24" rx="8" fill={accent2} stroke={accent} strokeWidth="3" />
      <path
        d="M112 108a16 16 0 1 1-14-16 12 12 0 0 0 14 16z"
        fill={accent}
        opacity="0.55"
      />
    </>
  );
}

const artByType: Record<
  PackTypeId,
  (p: { accent: string; accent2: string }) => React.ReactElement
> = {
  "sheet-mask": SheetMaskArt,
  "toner-pad": TonerPadArt,
  "spot-pack": SpotPackArt,
  "cotton-soak": CottonSoakArt,
  "leave-on": LeaveOnArt,
};

export function ProductIllustration({
  packType,
  className,
  title,
}: {
  packType: PackTypeId;
  className?: string;
  title: string;
}) {
  const { bg, accent, accent2 } = palette[packType];
  const Art = artByType[packType];
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      role="img"
      aria-label={`${title}のイメージイラスト`}
    >
      <rect width="200" height="200" fill={bg} />
      <Art accent={accent} accent2={accent2} />
    </svg>
  );
}
