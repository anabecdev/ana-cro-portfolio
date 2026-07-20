const trackedEvents = [
  {
    event: "page_view",
    trigger: "Landing page visit",
    parameters: "page_title, page_location",
    kpi: "Traffic",
  },
  {
    event: "experiment_exposure",
    trigger: "Page load",
    parameters: "experiment_name, variant",
    kpi: "Exposure",
  },
  {
    event: "scroll_depth",
    trigger: "75% page scroll",
    parameters: "percent_scrolled",
    kpi: "Engagement",
  },
  {
    event: "download_resume",
    trigger: "Resume CTA click",
    parameters: "file_name, variant",
    kpi: "Primary Conversion",
  },
  {
    event: "contact_click",
    trigger: "Contact CTA click",
    parameters: "method",
    kpi: "Hiring Intent",
  },
];

export default function ExperimentMetrics() {
  return (
    <div className="mt-20 overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          <tr className="border-b border-foreground/10">
            <th className="py-4 text-left text-xs uppercase tracking-[0.3em] text-foreground/40">
              Event
            </th>

            <th className="py-4 text-left text-xs uppercase tracking-[0.3em] text-foreground/40">
              Trigger
            </th>

            <th className="py-4 text-left text-xs uppercase tracking-[0.3em] text-foreground/40">
              Parameters
            </th>

            <th className="py-4 text-left text-xs uppercase tracking-[0.3em] text-foreground/40">
              KPI
            </th>
          </tr>
        </thead>

        <tbody>
          {trackedEvents.map((metric) => (
            <tr
              key={metric.event}
              className="
                border-b
                border-foreground/10
                transition-colors
                hover:bg-foreground/[0.02]
              "
            >
              <td className="py-6 pr-8">
                <code
                  className="
                    rounded-md
                    bg-foreground/5
                    px-3
                    py-2
                    font-mono
                    text-sm
                  "
                >
                  {metric.event}
                </code>
              </td>

              <td className="py-6 pr-8 text-foreground/70">
                {metric.trigger}
              </td>

              <td className="py-6 pr-8">
                <code className="font-mono text-sm text-foreground/60">
                  {metric.parameters}
                </code>
              </td>

              <td className="py-6">
                <span
                  className="
                    rounded-full
                    bg-[var(--accent)]/10
                    px-3
                    py-1
                    text-xs
                    font-medium
                    uppercase
                    tracking-wide
                    text-[var(--accent)]
                  "
                >
                  {metric.kpi}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}