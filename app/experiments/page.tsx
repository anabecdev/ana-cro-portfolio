import Container from "@/components/container/container";
import ComparisonGrid from "@/components/comparisonGrid/comparison-grid";
import Hero from "@/components/hero/hero";
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
          <SectionHeading title="Beyond the Experiment" />

          <div className="mt-16 max-w-5xl">
            <p
              className="
          text-[clamp(1.5rem,2.5vw,2.4rem)]
          leading-[1.35]
          font-light
          text-foreground/80
        "
            >
              Running an A/B test isn't only about changing a UI. Every
              experiment begins with a measurement strategy.
            </p>

            <h2
              className="
          mt-16
          max-w-4xl
          text-[clamp(3rem,6vw,6rem)]
          leading-none
          font-semibold
          tracking-tight
        "
            >
              How do you know an experiment worked?
            </h2>
            <a
              href="/experiments/measurement-strategy"
              className="
                    group
                    flex
                    items-center
                    mt-16
                    justify-between
                    border-y
                    border-foreground/10
                    py-5
                    transition-colors
                    duration-300
                    hover:text-[var(--accent)]
                  "
            >
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-foreground/50">
                  Documentation
                </p>

                <p className="mt-1">Explore the Measurement Strategy</p>

                <p className="mt-2 text-sm text-foreground/60">
                  KPIs, event mapping, GA4 instrumentation and reporting.
                </p>
              </div>

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </Container>
      </Section>
    </main>
  );
}
