import Container from "@/components/container/container";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Section from "@/components/section/section";
import SectionHeading from "@/components/section/section-heading";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Section>
          <Container>
            <h1 className="text-display max-w-3xl font-semibold tracking-tight">
              A live CRO portfolio focused on experimentation,
              behavior, and conversion-focused experiences.
            </h1>
            <div className="mt-6 flex gap-4">
              <button className="border border-black/10 px-4 py-2">
                Download Resume
              </button>
              <button className="border border-black/10 px-4 py-2">
                Contact
              </button>
            </div>
          </Container>
        </Section>

        <Section>
          <Container>
            <SectionHeading
              title="Live Experiment"
              description="This portfolio will run an A/B test using middleware-based variant assignment."
            />
          </Container>
        </Section>

        <Section>
          <Container>
            <SectionHeading
              title="Featured Case Study"
              description="Understanding friction points in a SaaS free trial funnel."
            />
          </Container>
        </Section>
      </main>

      <Footer />
    </>
  );
}