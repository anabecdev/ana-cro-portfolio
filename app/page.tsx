import CaseStudyCard from "@/components/caseStudy/caseStudyCard/case-study-card";
import Container from "@/components/container/container";
import ExperimentCard from "@/components/experiment/experimentCard/experiment-card";
import Section from "@/components/section/section";
import SectionHeading from "@/components/section/section-heading";

import { getVariant } from "@/lib/ab-testing/getVariant";

export default async function Home() {
  const variant = await getVariant();
  return (
    <>
      <main
        className={`
          transition-colors
          duration-1000
          ${variant === "A" ? "variant-a" : "variant-b"}
        `}
      >
        <Section>
          <Container>
            {variant === "A" ? (
              <h1 className="text-display max-w-3xl font-semibold tracking-tight">
                A live CRO portfolio focused on experimentation, behavior, and
                conversion-focused experiences.
              </h1>
            ) : (
              <h1 className="text-display max-w-3xl font-semibold tracking-tight">
                A portfolio exploring experimentation, user behavior, and
                conversion optimization.
              </h1>
            )}
            <div className="mt-12 flex gap-8 text-sm">
              {variant === "A" && (
                <a
                  href="/resume/ana-becerril-resume-2026.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="
                    group
                    inline-flex
                    items-center
                    gap-2
                    font-medium
                    text-accent
                    transition-all
                    duration-300
                    hover:opacity-70
                  "
                >
                  Download Resume PDF
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              )}
              <a
                href="/experiments"
                className="
                group
                inline-flex
                items-center
                gap-2
                text-foreground/80
                transition-all
                duration-300
                hover:text-foreground
                "
              >
                Explore the live experiment
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </Container>
        </Section>

        <Section>
          <Container>
            <SectionHeading
              title="Live Experiment"
              description="You may not be seeing the same version as other visitors."
            />

            <ExperimentCard variantValue={variant} />
          </Container>
        </Section>

        <Section>
          <Container>
            <SectionHeading
              title="Featured Case Study"
              description="How I approached UX analysis, messaging, and storytelling during BigCommerce's transition toward a small-business audience."
            />
            <CaseStudyCard />
          </Container>
        </Section>
      </main>
    </>
  );
}
