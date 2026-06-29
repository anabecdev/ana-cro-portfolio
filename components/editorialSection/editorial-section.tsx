type EditorialSectionProps = {
  section?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
};

export default function EditorialSection({
  section,
  title,
  subtitle,
  children,
}: EditorialSectionProps) {
  return (
    <section className="mt-32 max-w-5xl">
      <div className="border-t border-foreground/15 pt-8">
        {section && (
          <p className="text-xs uppercase tracking-[0.3em] text-foreground/50">
            {section}
          </p>
        )}

        <h2 className="mt-4 text-[clamp(3rem,6vw,5rem)] font-semibold tracking-tight leading-[0.95]">
          {title}
        </h2>

        {subtitle && (
          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-foreground/70">
            {subtitle}
          </p>
        )}

        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
