import Container from "@/components/container/container";
import ComparisonGrid from "@/components/comparisonGrid/comparison-grid";
import Hero from "@/components/hero/hero";
import ScrollSequenceDiagram from "@/components/scrollSequenceDiagram/scroll-sequence-diagram";
import Section from "@/components/section/section";
import SectionHeading from "@/components/section/section-heading";

import { competitors } from "@/components/caseStudy/constants/competitors";
import { customerThemes } from "@/components/caseStudy/constants/customerThemes";
import { insights } from "@/components/caseStudy/constants/insights";
import { recommendations } from "@/components/caseStudy/constants/recommendations";

import { getVariant } from "@/lib/ab-testing/getVariant";

export default async function CaseStudiesPage() {
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
            heroType="Case Study #001"
            title="What happens when your largest customers aren't your most important customers?"
            subtitle="How competitive research, UX analysis, and customer feedback revealed opportunities during BigCommerce's shift toward small businesses."
          />
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading title="The Context" />
          <div className="mt-16">
            <div className="max-w-4xl">
              <p
                className="
                 mt-8
                 text-[clamp(1.5rem,2.5vw,2.5rem)]
                 leading-[1.3]
                 font-light
                 "
              >
                BigCommerce had historically positioned itself toward larger
                businesses. However, internal business signals suggested a
                significant portion of revenue was coming from small businesses.
              </p>

              <p
                className="
                 mt-16
                 text-[clamp(3rem,6vw,6rem)]
                 leading-none
                 font-semibold
                 tracking-tight
                 "
              >
                Were we speaking to the right audience?
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading
            title="The Approach"
            description="From observation to recommendations."
          />
          <ScrollSequenceDiagram
            direction="vertical"
            steps={[
              {
                title: "Competitors",
                description:
                  "What are competitors communicating that we are not?",
              },
              {
                title: "Customer Reviews",
                description:
                  "What do customers value, criticize, or wish was different?",
              },
              {
                title: "UX Analysis",
                description:
                  "Where are the biggest friction points and missed opportunities?",
              },
              {
                title: "Insights",
                description: "What story do all the signals tell together?",
              },
              {
                title: "Recommendations",
                description: "Which opportunities are worth testing first?",
              },
            ]}
          />
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading
            title="Competitive Landscape"
            description="What do you see when you see them."
          />
          <ComparisonGrid items={competitors} columns={3} />
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading title="What I Found" />

          <div className="mt-16">
            {insights.map((insight) => (
              <div
                key={insight.number}
                className="
            min-h-[70vh]
            flex
            items-center
            border-b
            border-foreground/10
          "
              >
                <div>
                  <p className="text-sm text-foreground/40">{insight.number}</p>

                  <h3
                    className="
                mt-6
                max-w-5xl
                whitespace-pre-line
                text-[clamp(3rem,7vw,7rem)]
                leading-[0.95]
                font-semibold
                tracking-tight
              "
                  >
                    {insight.title}
                  </h3>
                </div>
              </div>
            ))}

            <div
              className="
          min-h-[60vh]
          flex
          items-center
          justify-center
          text-center
        "
            >
              <div className="max-w-3xl">
                <p
                  className="
              text-xs
              uppercase
              tracking-[0.3em]
              text-foreground/40
            "
                >
                  Validation
                </p>

                <h3
                  className="
                  
              mt-8
              text-[clamp(2.5rem,5vw,5rem)]
              leading-[1]
              font-semibold
              tracking-tight
              max-w-[90vw]
            "
                >
                  The research findings aligned with what customers were already
                  saying.
                </h3>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading
            title="Voice of Customer"
            description="Patterns extracted from community discussions, reviews, and merchant feedback."
          />

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {customerThemes.map((theme) => (
              <article
                key={theme.title}
                className="
            border
            border-foreground/10
            p-8
            transition-all
            duration-500
            hover:-translate-y-1
            hover:border-foreground/20
          "
              >
                <p className="text-xs uppercase tracking-[0.2em] text-foreground/50">
                  {theme.category}
                </p>

                <h3 className="mt-8 text-3xl font-semibold leading-tight">
                  {theme.title}
                </h3>

                <p className="mt-12 text-sm text-foreground/40">
                  Source: {theme.source}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading
            title="Growth Opportunities"
            description="Opportunities identified from research and analysis."
          />

          <div className="mb-24 max-w-4xl">
            <p className="text-xs uppercase tracking-[0.3em] text-foreground/50">
              Outcome
            </p>

            <h2
              className="
      mt-8
      text-[clamp(3rem,6vw,6rem)]
      leading-[0.95]
      font-semibold
      tracking-tight
    "
            >
              Research surfaced a set of opportunities that could be validated
              through experimentation.
            </h2>
          </div>

          <div className="mt-16 max-w-5xl mx-auto border-t border-foreground/10">
            {recommendations.map((item) => (
              <div
                key={item.recommendation}
                className="
            grid
            gap-8
            border-b
            border-foreground/10
            py-8
            md:grid-cols-[3fr_1.5fr]
  md:items-center
          "
              >
                <div>
                  <p className="text-2xl font-medium tracking-tight">
                    {item.recommendation}
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-foreground/50">
                    Expected Impact
                  </p>

                  <p className="mt-2 text-foreground/80">{item.impact}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}
