import ArtifactBody from "@/components/artifactBody/artifact-body";
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
import { variants } from "@/components/experiment/constants/variants";

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
            heroType="Experiment #001"
            title="Measurement Strategy"
            subtitle="How the Resume Visibility experiment is measured using Google Analytics 4, custom events, KPIs, and reporting."
            child={
              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            }
            additionalInfo={`You are currently assigned to variant ${variant}`}
          />
        </Container>
      </Section>
    </main>
  );
}
