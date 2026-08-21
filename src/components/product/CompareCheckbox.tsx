"use client";

import { useAppState } from "@/context/AppStateContext";

export function CompareCheckbox({ slug, name }: { slug: string; name: string }) {
  const { isInCompare, toggleCompare, compareList, compareLimit, ready } = useAppState();
  const checked = ready && isInCompare(slug);
  const disabled = ready && !checked && compareList.length >= compareLimit;

  return (
    <label
      className={`flex items-center gap-2 text-sm ${
        disabled ? "cursor-not-allowed text-ink-soft/50" : "cursor-pointer text-ink-soft"
      }`}
      title={disabled ? `比較は最大${compareLimit}件まで選べます` : undefined}
    >
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={() => toggleCompare(slug)}
        aria-label={`${name}を比較リストに追加`}
        className="h-4 w-4 rounded border-line text-rose focus-visible:outline-rose-dark accent-rose"
      />
      比較に追加
    </label>
  );
}
