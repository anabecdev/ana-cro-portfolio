import Container from "@/components/container/container";
import ComparisonGrid from "@/components/comparisonGrid/comparison-grid";
import EditorialSection from "@/components/editorialSection/editorial-section";
import ExperimentNextTests from "@/components/experiment/experimentNextTests/experiment-next-tests";
import Hero from "@/components/hero/hero";
import ExperimentMetrics from "@/components/experimentMetrics/experiment-metrics";
import ScrollSequenceDiagram from "@/components/scrollSequenceDiagram/scroll-sequence-diagram";
import Section from "@/components/section/section";
import SectionHeading from "@/components/section/section-heading";

import { getVariant } from "@/lib/ab-testing/getVariant";
import { measurementKpis } from "@/components/experiment/constants/measurement-kpis";
import ArtifactBody from "@/components/artifactBody/artifact-body";
import EditorialBlock from "@/components/artifactBody/editorial-block";

export default async function MeasurementStrategyPage() {
  const variant = await getVariant();
  return (
    <main
      className={`
          transition-colors
          duration-1000
          ${variant === "A" ? "variant-a" : "variant-b"}
        `}
    >
      <Section className="min-h-[85vh] flex flex-col justify-center">
        <Container>
          <Hero
            heroType="Analytics Architecture"
            title="Measurement Strategy"
            subtitle="Discover how the Resume Visibility experiment is instrumented using Google Analytics 4, custom events, KPIs, and a structured measurement framework."
            child={
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              </div>
            }
            additionalInfo="Every interaction is tracked to validate experiment performance and support data-driven decisions."
          />
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading title="Why Measure?" />
          <div className="mt-16">
            <div className="max-w-4xl">
              <p
                className="
                        mt-16
                        text-[clamp(3rem,6vw,6rem)]
                        leading-none
                        font-semibold
                        tracking-tight
                        "
              >
                Running experiments without a measurement strategy is equivalent
                to collecting opinions instead of evidence.
              </p>
            </div>
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <SectionHeading
            title="Hypothesis"
            description="Showing the resume immediately will increase downloads without negatively affecting engagement."
          />

          <div className="mt-16 grid gap-8 lg:grid-cols-[1.6fr_1fr]">
            {measurementKpis.map((kpi) => (
              <article
                key={kpi.category}
                className="
        rounded-2xl
        border
        border-foreground/10
        bg-background
        p-10
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-foreground/20
        hover:shadow-lg
      "
              >
                <p className="text-xs font-medium uppercase tracking-[0.25em] text-foreground/50">
                  {kpi.category}
                </p>

                {kpi.title && (
                  <h3 className="mt-6 text-3xl font-semibold tracking-tight">
                    {kpi.title}
                  </h3>
                )}

                <p className="mt-6 max-w-md text-base leading-relaxed text-foreground/60">
                  {kpi.description}
                </p>

                <div className="mt-10 space-y-4">
                  {kpi.metrics.map((metric) => (
                    <div
                      key={metric}
                      className="
              flex
              items-center
              gap-3
              border-t
              border-foreground/10
              pt-4
            "
                    >
                      <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />

                      <span className="text-base font-medium tracking-tight">
                        {metric}
                      </span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          // Cambiar esto por el scrollSequenceDiagram
          <SectionHeading
            title="Conversion Journey"
            description="The expected sequence of interactions used to evaluate experiment success."
          />
          <ExperimentMetrics />
        </Container>
      </Section>

      <Section>
        <Container>
          <EditorialSection
            section="Artifact 02"
            title="Reusable Analytics Layer"
            subtitle="A single entry point for every analytics event."
          >
            <ArtifactBody />
          </EditorialSection>
        </Container>
      </Section>
    </main>
  );
}
