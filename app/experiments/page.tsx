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

export default async function ExperimentsPage() {
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
            title="Can resume visibility influence how recruiters explore a portfolio?"
            subtitle="Testing whether immediate resume visibility increases engagement and resume downloads within a CRO portfolio experience."
            child={
              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            }
            additionalInfo={`You are currently assigned to variant ${variant}`}
          />
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading title="Hypothesis" />
          <div className="mt-16">
            <h2
              className="
                mt-8
                max-w-5xl
                text-[clamp(3rem,7vw,7rem)]
                leading-[0.95]
                font-semibold
                tracking-tight
                "
            >
              Showing the resume immediately will increase resume downloads.
            </h2>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading
            title="Methodology"
            description="Two homepage experiences were exposed to visitors."
          />
          <ComparisonGrid items={variants} columns={2} />
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading
            title="Assignment Logic"
            description="How visitors are assigned."
          />
          <ScrollSequenceDiagram
            direction="vertical"
            steps={[
              {
                title: "Visitor",
                description:
                  "A user arrives at the portfolio for the first time.",
              },
              {
                title: "Middleware",
                description:
                  "Next.js Edge Middleware randomly assigns the visitor to Variant A or B before the page is rendered.",
              },
              {
                title: "Cookie",
                description:
                  "The assigned variant is persisted in a cookie to ensure a consistent experience across future visits.",
              },
              {
                title: `Variant ${variant}`,
                description:
                  "The visitor experiences the assigned version of the homepage.",
              },
              {
                title: "GA4",
                description:
                  "A custom experiment_exposure event is sent to Google Analytics, attaching the experiment metadata for later analysis.",
              },
            ]}
          />
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading
            title="Future Experiments"
            description="Potential follow-up experiments."
          />

          <ExperimentNextTests />
        </Container>
      </Section>
    </main>
  );
}
