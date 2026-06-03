import Container from "@/components/container/container";
import ExperimentHero from "@/components/experiment/experimentHero/experiment-hero";
import ExperimentMethodology from "@/components/experiment/experimentMethodology/experiment-methodology";
import ExperimentNextTests from "@/components/experiment/experimentNextTests/experiment-next-tests";
import ExperimentStatus from "@/components/experiment/experimentStatus/experiment-status";
import MetricsDiagram from "@/components/metricsDiagram/metrics-diagram";

import ScrollSequenceDiagram from "@/components/scrollSequenceDiagram/scroll-sequence-diagram";
import Section from "@/components/section/section";
import SectionHeading from "@/components/section/section-heading";

import { getVariant } from "@/lib/ab-testing/getVariant";

export default async function ExperimentsPage() {
    const variant = await getVariant();
    return (
        <main>
            <Section className="min-h-[85vh] flex flex-col justify-center">
                <Container>
                    <ExperimentHero variantValue={variant} />
                </Container>
            </Section>

            <Section>
                <Container>
                    <SectionHeading title="Hypothesis" />
                    <div className="mt-16">
                        <p className="text-xs uppercase tracking-[0.3em] text-foreground/50">
                            I believe
                        </p>

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
                    <ExperimentMethodology />
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
                            "Visitor",
                            "Middleware",
                            "Cookie",
                            `Variant ${variant}`,
                        ]}
                    />
                </Container>
            </Section>

            <Section>
                <Container>
                    <SectionHeading
                        title="Metrics"
                        description="Data collection is currently in progress."
                    />
                    <ExperimentStatus />
                </Container>
            </Section>

            <Section>
                <Container>
                    <MetricsDiagram/>
                </Container>
            </Section>

            <Section>
                <Container>
                    <SectionHeading
                        title="What I'd Test Next"
                        description="Potential follow-up experiments."
                    />

                    <ExperimentNextTests/>
                </Container>
            </Section>
        </main>
    );
}
