type NarrativeAction = {
  label: string;
  href: string;
};

export type NarrativeBodyProps = {
  description: string;
  quote: string;
  keywords?: string[];
  actions?: NarrativeAction[];
};

export default function NarrativeBody({
  actions,
  description,
  quote,
  keywords,
}: NarrativeBodyProps) {
  return (
    <>
      <p className="max-w-2xl text-body">{description}</p>

      <blockquote className="mt-16 max-w-3xl border-l-2 border-[var(--accent)] pl-8">
        <p className="text-[clamp(1.75rem,3vw,2.5rem)] leading-tight tracking-tight">
          {quote}
        </p>
      </blockquote>

      {keywords?.length ? (
        <div className="mt-16 flex flex-wrap gap-8 text-sm">
          {keywords.map((keyword) => (
            <span key={keyword} className="text-foreground/50">
              {keyword}
            </span>
          ))}
        </div>
      ) : null}

      <div className="mt-12 space-y-4 max-w-lg">
        {actions?.map((action) => (
          <a
            key={action.href}
            href={action.href}
            className="
        group
        flex
        items-center
        justify-between
        border-b
        border-foreground/10
        py-4
        transition-colors
        hover:text-[var(--accent)]
      "
          >
            <span>{action.label}</span>

            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
        ))}
      </div>
    </>
  );
}
