export function Badge({
  children,
  tone = "rose",
}: {
  children: React.ReactNode;
  tone?: "rose" | "beige" | "ink";
}) {
  const toneClass = {
    rose: "bg-blush text-rose-dark",
    beige: "bg-beige text-ink-soft",
    ink: "bg-ink text-ivory",
  }[tone];
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${toneClass}`}
    >
      {children}
    </span>
  );
}
