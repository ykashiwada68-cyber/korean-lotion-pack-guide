"use client";

import { useAppState } from "@/context/AppStateContext";

export function FavoriteButton({
  slug,
  name,
  size = "md",
}: {
  slug: string;
  name: string;
  size?: "sm" | "md";
}) {
  const { isFavorite, toggleFavorite, ready } = useAppState();
  const active = ready && isFavorite(slug);
  const dim = size === "sm" ? "h-9 w-9" : "h-11 w-11";

  return (
    <button
      type="button"
      onClick={() => toggleFavorite(slug)}
      aria-pressed={active}
      aria-label={active ? `${name}をお気に入りから外す` : `${name}をお気に入りに追加`}
      className={`flex ${dim} shrink-0 items-center justify-center rounded-full border transition-colors ${
        active
          ? "border-rose bg-rose text-white"
          : "border-line bg-white text-ink-soft hover:border-rose hover:text-rose-dark"
      }`}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill={active ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 20.4s-7.6-4.6-10-9.2C.6 8 1.8 4.6 5 3.6c2.1-.7 4.2.1 5.6 2 .5.6.9 1.2 1.4 1.9.5-.7.9-1.3 1.4-1.9 1.4-1.9 3.5-2.7 5.6-2 3.2 1 4.4 4.4 3 7.6-2.4 4.6-10 9.2-10 9.2z"
        />
      </svg>
    </button>
  );
}
