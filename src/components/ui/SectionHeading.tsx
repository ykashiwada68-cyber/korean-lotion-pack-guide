export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "text-center" : ""}>
      {eyebrow ? (
        <p className="text-sm font-semibold tracking-wide text-rose-dark">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-2 text-2xl font-bold text-ink sm:text-3xl">{title}</h2>
      {lead ? (
        <p className={`mt-3 text-ink-soft ${align === "center" ? "mx-auto max-w-2xl" : "max-w-2xl"}`}>
          {lead}
        </p>
      ) : null}
    </div>
  );
}
