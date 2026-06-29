const metrics = [
  {
    metric: "experiment_exposure",
    purpose: "Identifies the assigned experiment variant.",
  },
  {
    metric: "download_resume",
    purpose: "Primary conversion event.",
  },
  {
    metric: "contact_click",
    purpose: "Measures hiring intent.",
  },
  {
    metric: "scroll_depth",
    purpose: "Tracks content engagement.",
  },
];

export default function ExperimentMetrics() {
  return (
    <div className="mt-20 max-w-5xl">
      <div
        className="
          grid
          grid-cols-[1.5fr_1fr]
          border-b
          border-foreground/10
          pb-6
        "
      >
        <p className="text-xs uppercase tracking-[0.3em] text-foreground/50">
          Metric
        </p>

        <p className="text-xs uppercase tracking-[0.3em] text-foreground/50">
          Purpose
        </p>
      </div>

      {metrics.map((metric) => (
        <div
          key={metric.metric}
          className="
            grid
            grid-cols-[1.5fr_1fr]
            gap-8
            border-b
            border-foreground/10
            py-8
          "
        >
          <h3
            className="
              text-2xl
              md:text-4xl
              font-medium
              tracking-tight
            "
          >
            {metric.metric}
          </h3>

          <p
            className="
              self-center
              text-foreground/60
            "
          >
            {metric.purpose}
          </p>
        </div>
      ))}
    </div>
  );
}
