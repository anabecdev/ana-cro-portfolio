type SectionHeadingProps = {
  title: string;
  description?: string;
};

export default function SectionHeading({
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-12 max-w-2xl">
      <h2 className="text-heading font-semibold tracking-tight transition-colors duration-500">
        {title}
      </h2>

      {description && (
        <p className="text-body mt-4 text-foreground">
          {description}
        </p>
      )}
    </div>
  );
}