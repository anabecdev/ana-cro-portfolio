export default async function ExperimentStatus() {
  return (
    <div className="mt-24 max-w-3xl">
      <p className="text-xs uppercase tracking-[0.2em] text-foreground/60">
        Experiment Status
      </p>

      <div className="mt-8 flex items-center gap-3">
        <span className="h-3 w-3 rounded-full bg-green-500 animate-pulse" />

        <p className="text-xl font-medium">Collecting data</p>
      </div>

      <div className="mt-16 space-y-8">
        <div className="flex items-center justify-between border-b border-foreground/10 pb-4">
          <span>Traffic assigned</span>
          <span className="text-green-500">✓</span>
        </div>

        <div className="flex items-center justify-between border-b border-foreground/10 pb-4">
          <span>Variant persistence active</span>
          <span className="text-green-500">✓</span>
        </div>

        <div className="flex items-center justify-between border-b border-foreground/10 pb-4">
          <span>Metrics tracking enabled</span>
          <span className="text-green-500">✓</span>
        </div>

        <div className="flex items-center justify-between border-b border-foreground/10 pb-4">
          <span>Statistical significance</span>
          <span className="text-foreground/50">Pending</span>
        </div>
      </div>
    </div>
  );
}
