import Container from "@/components/container/container";
import EditorialSection from "@/components/editorialSection/editorial-section";
import ExperimentTracker from "@/components/analytics/experimentTracker/experiment-tracker";
import NarrativeBody from "@/components/narrativeBody/narrative-body";
import Section from "@/components/section/section";

import { getVariant } from "@/lib/ab-testing/getVariant";

export default async function Home() {
  const variant = await getVariant();
  return (
    <>
      <ExperimentTracker
        experiment={{
          id: "resume_visibility",
          name: "Resume Visibility Test",
          hypothesis: "Showing the resume immediately increases downloads.",
          variant,
          page: "home",
        }}
      />
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
                Understanding people.
                <br />
                Improving products.
              </h1>
            ) : (
              <h1 className="text-display max-w-3xl font-semibold tracking-tight">
                I study how people
                <br />
                make decisions.
                <br />
                <br />
                Then I turn insights
                <br />
                into experiments.
              </h1>
            )}

            <div className="mt-16 max-w-lg border-t border-foreground/10">
              {variant === "A" && (
                <a
                  href="/resume/ana-becerril-resume-2026.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="
            group
            flex
            items-center
            justify-between
            border-b
            border-foreground/10
            py-5

            transition-colors
            duration-300
            hover:text-[var(--accent)]
          "
                >
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-foreground/50">
                      Resume
                    </p>

                    <p className="mt-1">Download PDF</p>
                  </div>

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              )}

              <a
                href="/experiments"
                className="
          group
          flex
          items-center
          justify-between
          py-5

          transition-colors
          duration-300
          hover:text-[var(--accent)]
        "
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-foreground/50">
                    Experiment
                  </p>

                  <p className="mt-1">Explore the live test</p>
                </div>

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
              <a
                href="mailto:anabecdev@gmail.com"
                className="
          group
          flex
          items-center
          justify-between
          py-5

          transition-colors
          duration-300
          hover:text-[var(--accent)]
        "
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-foreground/50">
                    Contact
                  </p>

                  <p className="mt-1">Let's Talk!</p>
                </div>

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </Container>
        </Section>

        <Section>
          <Container>
            <EditorialSection
              section="Experiment 01"
              title="Resume Visibility Test"
              subtitle="Measuring whether..."
            >
              <NarrativeBody
                description="Some visitors see the resume immediately. Others discover it later through the experience."
                quote="What happens when the resume isn't the first thing people see?"
                keywords={[
                  "A/B Testing",
                  "User Behavior",
                  "Conversion",
                  "Experimentation",
                ]}
                cta="Explore methodology"
                href="/experiments"
              />
            </EditorialSection>
          </Container>
        </Section>

        <Section>
          <Container>
            <EditorialSection
              section="Experiment 02"
              title="Featured Case Study"
              subtitle="Why were Shopify and WooCommerce resonating more strongly with small businesses?"
            >
              <NarrativeBody
                description="Through competitor benchmarking, UX analysis, customer research, and messaging evaluation, I explored how perception, storytelling, and product positioning influenced conversion opportunities."
                quote="Competitors sold aspiration and simplicity. BigCommerce often communicated complexity."
                keywords={[
                  "Benchmarking",
                  "UX Research",
                  "Positioning",
                  "Storytelling",
                  "Conversion",
                ]}
                cta="Read case study"
                href="/case-studies"
              />
            </EditorialSection>
          </Container>
        </Section>
      </main>
    </>
  );
}
