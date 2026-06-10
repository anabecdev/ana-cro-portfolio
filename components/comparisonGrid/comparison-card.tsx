import Image from "next/image";

type ComparisonCardProps = {
  label: string;
  title: string;
  description: string[];
  image: string;
};

export default function ComparisonCard({
  label,
  title,
  description,
  image,
}: ComparisonCardProps) {
  return (
    <article
      className="
        group
        overflow-hidden
        border
        border-foreground/10
        transition-colors
        duration-500
        hover:border-foreground/20
      "
    >
      <div className="overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={1600}
          height={900}
          className="
            w-full
            transition-transform
            duration-700
            group-hover:scale-[1.03]
          "
        />
      </div>

      <div className="p-8">
        <p className="text-xs uppercase tracking-[0.2em] text-foreground/60">
          {label}
        </p>

        <h3 className="mt-3 text-2xl font-semibold">{title}</h3>

        <div className="mt-4 text-foreground/70">
          {description.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </div>
    </article>
  );
}
