import EditorialBlock from "./editorial-block";
import EditorialCode from "./editorial-code";

const code = `export const trackEvent = (
  eventName: string,
  params?: EventParams,
) => {
  if (typeof window === "undefined") return;

  window.gtag?.("event", eventName, {
    ...params,
    experiment_id: getExperimentId(),
    variant: getVariant(),
  });
};`;

export default function ArtifactBody() {
  return (
    <div className="space-y-20">
      <EditorialBlock number="01" title="Purpose">
        <p className="max-w-2xl text-body">
          The analytics layer provides a single entry point for all measurement
          events. By centralizing tracking, every interaction automatically
          inherits the current experiment context before being sent to Google
          Analytics 4.
        </p>
      </EditorialBlock>

      <EditorialCode filename="analytics.ts" code={code} />

      <EditorialBlock number="02" title="Design Principles">
        <ul className="space-y-4 text-body">
          <li>• Reusable across the application</li>
          <li>• Type-safe event payloads</li>
          <li>• Experiment-aware by default</li>
          <li>• Keeps business logic out of UI components</li>
        </ul>
      </EditorialBlock>

      <EditorialBlock number="03" title="Data Flow">
        <div className="font-mono text-sm leading-8 text-foreground/70">
          <p>download_resume</p>
          <p>contact_click</p>
          <p>experiment_exposure</p>
          <p>scroll_depth</p>

          <div className="my-6">↓</div>

          <p>trackEvent()</p>

          <div className="my-6">↓</div>

          <p>Google Analytics 4</p>
        </div>
      </EditorialBlock>
    </div>
  );
}
