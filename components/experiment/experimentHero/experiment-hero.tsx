type ExperimentHeroProps = {
  variantValue: string;
};

export default async function ExperimentHero({
  variantValue,
}: ExperimentHeroProps) {
  return (
    <div>
      <p className="text-sm uppercase tracking-[0.2em] text-foreground/60">
        Experiment #001
      </p>
      <h1 className="mt-8 text-display max-w-4xl font-semibold tracking-tight">
        Does showing a resume immediately increase engagement?
      </h1>

      <p className="mt-8 max-w-2xl text-body text-foreground/70">
        Testing whether immediate resume visibility increases engagement and
        resume downloads within a CRO portfolio experience.
      </p>

      <div className="mt-8 inline-flex items-center gap-2 text-foreground/70">
        <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
        You are currently assigned to <strong> Variant {variantValue} </strong>
      </div>
    </div>
  );
}
