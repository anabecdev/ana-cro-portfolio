import Container from "@/components/container/container";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Section from "@/components/section/section";
import SectionHeading from "@/components/section/section-heading";
import ExperimentCard from "@/components/experimentCard/experiment-card";
import CaseStudyCard from "@/components/caseStudyCard/case-study-card";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Section>
          <Container>
            <h1 className="text-display max-w-3xl font-semibold tracking-tight">
              A live CRO portfolio focused on
              <span className="text-accent"> experimentation </span>,
              <span className="text-muted-blue"> behavior </span>,
              and
              <span className="text-soft-gold">
                conversion-focused
              </span>
              experiences.
            </h1>
            <div className="mt-12 flex gap-8 text-sm">
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

            <ExperimentCard variantValue="A" />
          </Container>
        </Section>

        <Section>
          <Container>
            <SectionHeading
              title="Featured Case Study"
              description="How I approached UX analysis, messaging, and storytelling during BigCommerce's transition toward a small-business audience."
            />
            <CaseStudyCard/>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}