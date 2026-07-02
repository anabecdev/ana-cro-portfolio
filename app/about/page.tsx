import Container from "@/components/container/container";
import Section from "@/components/section/section";
import ScrollSequenceDiagram from "@/components/scrollSequenceDiagram/scroll-sequence-diagram";
import SectionHeading from "@/components/section/section-heading";

import { getVariant } from "@/lib/ab-testing/getVariant";

import Image from "next/image";

export default async function AboutPage() {
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
          <h1
            className="
                max-w-4xl
                text-[clamp(3rem,7vw,7rem)]
                leading-[0.95]
                font-semibold
                tracking-tight
                "
          >
            From communication
            <br />
            to code,
            <br />
            through curiosity.
          </h1>
        </Container>
      </Section>
      <Section>
        <Container>
          <SectionHeading
            title="The Throughline"
            description="From observation to recommendations."
          />
          <ScrollSequenceDiagram
            direction="vertical"
            steps={[
              {
                title: "Communication",
                description: "Understanding how messages influence behavior.",
              },
              {
                title: "UX Research",
                description: "Discovering what users really need.",
              },
              {
                title: "Product",
                description: "Building experiences people can use.",
              },
              {
                title: "Experimentation",
                description: "Testing ideas instead of guessing.",
              },
              {
                title: "Growth",
                description: "Improving products through continuous learning.",
              },
            ]}
          />
        </Container>
      </Section>
      <Section>
        <Container>
          <SectionHeading
            title="How I Think"
            description="The questions behind my work."
          />

          <div className="mt-16">
            <p className="text-xs uppercase tracking-[0.3em] text-foreground/50">
              What interests me most is rarely what people do.
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
              I'm interested in
              {"\n"}
              why they do it.
            </h2>

            <div className="mt-16 max-w-3xl text-body text-foreground/70 space-y-6">
              <p>
                Whether I'm building a landing page, reviewing analytics,
                conducting research, or designing an experiment, I usually start
                with the same question: what is influencing behavior?
              </p>

              <p>
                My work sits at the intersection of communication, frontend
                engineering, UX analysis, and experimentation. Different
                disciplines, but ultimately the same curiosity.
              </p>
            </div>
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <SectionHeading
            title="This Portfolio"
            description="Why it looks and feels the way it does."
          />

          <div className="mt-16 grid gap-16 lg:grid-cols-2 items-center">
            <div>
              <h3 className="text-3xl font-semibold tracking-tight">
                An experiment disguised as a portfolio.
              </h3>

              <div className="mt-8 space-y-6 text-foreground/70">
                <p>
                  I wanted this project to feel less like a traditional
                  portfolio and more like an editorial publication.
                </p>

                <p>
                  The visual language draws inspiration from printed magazines,
                  long-form storytelling, and the soft, atmospheric color
                  palettes found in Monet's paintings.
                </p>

                <p>
                  Every page was intentionally designed to encourage
                  exploration, reflection, and curiosity.
                </p>
              </div>

              <div className="mt-10 border-t border-foreground/10 pt-6">
                <p className="text-sm text-foreground/60">
                  Built with Next.js, TypeScript and Tailwind CSS.
                  <br />
                  Deployed on Vercel.
                </p>
              </div>
            </div>

            <div className="overflow-hidden border border-foreground/10">
              <Image
                src="/about/monet-inspo.jpg"
                alt="Monet inspiration"
                width={1200}
                height={900}
                className="w-full"
              />
            </div>
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <SectionHeading
            title="Connect"
            description="Ways to learn more about my work."
          />

          <div className="mt-20">
            <a
              href="https://www.linkedin.com/in/anabecbel/"
              target="_blank"
              rel="noopener noreferrer"
              className="
          flex
          items-center
          justify-between
          border-b
          border-foreground/10
          py-8
          group
        "
            >
              <span className="text-foreground/40">01</span>

              <span
                className="
            flex-1
            ml-8
            text-[clamp(1.5rem,3vw,3rem)]
            font-semibold
            tracking-tight
          "
              >
                LinkedIn
              </span>

              <span
                className="
            transition-transform
            duration-300
            group-hover:translate-x-1
          "
              >
                →
              </span>
            </a>

            <a
              href="/resume/ana-becerril-resume-2026.pdf"
              download
              className="
          flex
          items-center
          justify-between
          border-b
          border-foreground/10
          py-8
          group
        "
            >
              <span className="text-foreground/40">02</span>

              <span
                className="
            flex-1
            ml-8
            text-[clamp(1.5rem,3vw,3rem)]
            font-semibold
            tracking-tight
          "
              >
                Download Resume
              </span>

              <span
                className="
            transition-transform
            duration-300
            group-hover:translate-x-1
          "
              >
                →
              </span>
            </a>
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <SectionHeading
            title="Outside of Work"
            description="The things that keep me curious."
          />

          <div className="mt-16 grid gap-16 lg:grid-cols-[1fr_500px] items-center">
            <div>
              <h3 className="text-3xl font-semibold tracking-tight">
                Curiosity doesn't stop at work.
              </h3>

              <div className="mt-8 space-y-6 text-foreground/70">
                <p>
                  When I'm not building products or analyzing user behavior,
                  you'll probably find me upside down somewhere.
                </p>

                <p>
                  Aerial arts taught me patience, discipline, and comfort with
                  uncertainty. Progress rarely looks linear.
                </p>

                <p>
                  I also enjoy reading, discovering new cafés, strength
                  training, museums, and exploring unfamiliar cities.
                </p>
              </div>
            </div>

            <div className="overflow-hidden border border-foreground/10">
              <Image
                src="/about/ana-aerial.jpeg"
                alt="Aerial arts"
                width={900}
                height={1200}
                className="w-full"
              />
            </div>
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <SectionHeading
            title="Currently Exploring"
            description="Ideas I'm spending time with lately."
          />

          <div className="mt-20">
            {[
              "Philosophy & Classical Thought",
              "Experimentation & Decision Making",
              "Product Strategy",
              "AI-Assisted Workflows",
              "Storytelling in Digital Experiences",
            ].map((topic, index) => (
              <div
                key={topic}
                className="
            flex
            items-center
            gap-8
            border-b
            border-foreground/10
            py-8
          "
              >
                <span className="text-[var(--accent)]/80">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p
                  className="
              text-[clamp(1.5rem,3vw,3rem)]
              font-semibold
              tracking-tight
            "
                >
                  {topic}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}
