import Container from "@/components/container/container";
import EditorialSection from "@/components/editorialSection/editorial-section";
import ExperimentTracker from "@/components/analytics/experiment-tracker";
import NarrativeBody from "@/components/narrativeBody/narrative-body";
import Section from "@/components/section/section";
import TrackedLink from "@/components/analytics/tracked-link";

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
                <TrackedLink
                  href="/resume/ana-becerril-resume-2026.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  event="file_download"
                  params={{
                    file_name: "ana-becerril-resume-2026.pdf",
                    page: "home",
                    cta_location: "hero",
                    variant,
                  }}
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
                </TrackedLink>
              )}

              <a
                href="/experiments"
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
                    Experiment
                  </p>

                  <p className="mt-1">Explore the live test</p>
                </div>

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

              <TrackedLink
                href="mailto:anabecdev@gmail.com"
                event="contact_click"
                params={{
                  contact_method: "email",
                  page: "home",
                  cta_location: "hero",
                  variant,
                }}
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
              </TrackedLink>
            </div>
          </Container>
        </Section>

        <Section>
          <Container>
            <EditorialSection
              section="Experiment 01"
              title="Resume Visibility Test"
              subtitle="Does showing the resume immediately influence recruiter behavior?"
            >
              <NarrativeBody
                description="A live A/B test comparing two portfolio experiences to understand how resume visibility affects engagement, exploration, and resume downloads."
                quote="Can a small UX decision change how recruiters interact with a portfolio?"
                keywords={[
                  "A/B Testing",
                  "GA4",
                  "Conversion Rate Optimization",
                  "Experimentation",
                ]}
                actions={[
                  {
                    label: "View Experiment Design",
                    href: "/experiments",
                  },
                  {
                    label: "Measurement Strategy",
                    href: "/experiments/measurement-strategy",
                  },
                ]}
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
                actions={[
                  {
                    label: "Read Case Study",
                    href: "/case-studies",
                  },
                ]}
              />
            </EditorialSection>
          </Container>
        </Section>
      </main>
    </>
  );
}
