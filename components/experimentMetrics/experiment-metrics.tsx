const metrics = [
  {
    metric: "Resume Downloads",
    purpose: "Primary conversion goal",
  },
  {
    metric: "Scroll Depth",
    purpose: "Measures content exploration",
  },
  {
    metric: "Case Study Views",
    purpose: "Interest in research work",
  },
  {
    metric: "Time on Page",
    purpose: "Overall engagement signal",
  },
  {
    metric: "Variant Persistence",
    purpose: "Experiment integrity check",
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