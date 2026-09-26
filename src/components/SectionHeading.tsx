export function SectionHeading({ index, title }: { index: string; title: string }) {
  return (
    <div className="mb-10 flex items-baseline gap-4">
      <span className="label text-[color:var(--pin)]">{index}</span>
      <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[color:var(--card)]">
        {title}
      </h2>
      <span className="hidden sm:block h-px flex-1 bg-[color:var(--card)]/15" />
    </div>
  );
}
