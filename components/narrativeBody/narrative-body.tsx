type NarrativeBodyProps = {
  description: string;
  quote: string;
  keywords?: string[];
  cta?: string;
  href?: string;
};

export default function NarrativeBody({
  description,
  quote,
  keywords,
  cta,
  href,
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

      {cta && (
        <a
          href={href}
          className="group mt-12 inline-flex items-center gap-2 text-sm font-medium hover:text-[var(--accent)]"
        >
          {cta}
          <span className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </a>
      )}
    </>
  );
}
