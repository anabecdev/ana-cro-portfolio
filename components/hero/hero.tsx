import type { ReactNode } from "react";
import clsx from "clsx";

type ExperimentHeroProps = {
  additionalInfo?: string;
  child?: ReactNode;
  heroType?: string;
  subtitle?: string;
  title?: string;
  titleClassName?: string;
};

export default async function Hero({
  additionalInfo,
  child,
  heroType,
  subtitle,
  title,
  titleClassName,
}: ExperimentHeroProps) {
  return (
    <div>
      <p className="text-sm uppercase tracking-[0.2em] text-foreground/60">
        {heroType}
      </p>
      <h1
        className={clsx(
          "mt-8 text-display max-w-4xl font-semibold tracking-tight",
          titleClassName,
        )}
      >
        {title}
      </h1>
      <p className="mt-8 max-w-2xl text-body text-foreground/70">{subtitle}</p>

      <div className="mt-8 inline-flex items-center gap-2 text-foreground/70">
        {child}
        {additionalInfo}
      </div>
    </div>
  );
}
