import Container from "@/components/container/container";
import FeaturedSection from "@/components/featuredSection/featured-section";
import Section from "@/components/section/section";

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
                Frontend engineer,
                <br />
                UX analyst,
                <br />
                and experimentation
                <br />
                practitioner.
              </h1>
            ) : (
              <h1 className="text-display max-w-3xl font-semibold tracking-tight">
                I study how people
                <br />
                make decisions.
                <br />
                <br />
                Then I build,
                <br />
                measure,
                <br />
                and iterate.
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
            <FeaturedSection
              experimentNumber="01"
              title="Live Experiment"
              subtitle="This portfolio is running a real A/B test."
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
          </Container>
        </Section>

        <Section>
          <Container>
            <FeaturedSection
              experimentNumber="02"
              title="Featured Case Study"
              subtitle="Why were Shopify and WooCommerce resonating more strongly with small businesses?"
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
          </Container>
        </Section>
      </main>
    </>
  );
}
