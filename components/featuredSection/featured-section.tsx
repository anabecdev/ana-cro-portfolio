type FeaturedSectionProps = {
  experimentNumber?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  quote?: string;
  keywords?: string[];
  cta?: string;
  href?: string;
};

export default function FeaturedSection({
  experimentNumber,
  title,
  subtitle,
  description,
  quote,
  keywords,
  cta,
  href,
}: FeaturedSectionProps) {
  return (
    <section className="mt-24 max-w-4xl">
      <div className="border-t border-foreground/15 pt-8">
        <p className="text-xs uppercase tracking-[0.3em] text-foreground/50">
          {experimentNumber}
        </p>

        <h2 className="mt-4 text-[clamp(3rem,6vw,5rem)] font-semibold tracking-tight leading-[0.95]">
          {title}
        </h2>

        <p className="mt-8 max-w-2xl text-xl leading-relaxed text-foreground/70">
          {subtitle}
        </p>

        <p className="mt-6 max-w-2xl text-body">{description}</p>
        <blockquote className="mt-16 max-w-3xl border-l border-foreground/20 pl-8">
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

        <a
          href={href}
          className="
            group
            mt-12
            inline-flex
            items-center
            gap-2
            text-sm
            font-medium
          "
        >
          {cta}
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>
      </div>
    </section>
  );
}
