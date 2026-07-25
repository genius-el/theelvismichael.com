type Props = {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeader({ eyebrow, title, description, align = "left" }: Props) {
  return (
    <div
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
        <span aria-hidden className="inline-block h-px w-6 bg-border-strong" />
        {eyebrow}
      </div>
      <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-medium text-balance leading-[1.05]">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base sm:text-lg text-muted-foreground text-pretty">
          {description}
        </p>
      )}
    </div>
  );
}
