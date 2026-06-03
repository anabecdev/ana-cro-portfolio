export default function CaseStudyCard() {
  return (
    <div
      className="
            mt-12
            max-w-2xl
            border
            border-foreground/15
            p-8

            transition-all
            duration-500

            hover:-translate-y-1
            hover:border-foreground/30
            hover:shadow-[0_0_40px_rgba(255,255,255,0.03)]
                                    "
    >
      <p className="text-xs uppercase tracking-[0.2em] text-foreground/60">
        Case Study #001
      </p>

      <h3 className="mt-4 text-2xl font-semibold tracking-tight">
        BigCommerce Rebrand Analysis
      </h3>

      <div className="mt-6 h-px w-full bg-foreground/10" />

      <div className="mt-8">
        <p className="text-sm uppercase tracking-wide text-foreground/60">
          Challenge
        </p>

        <p className="mt-2 max-w-md text-body">
          Understanding friction points while repositioning a SaaS brand from
          enterprise-focused to small-business friendly.
        </p>
      </div>

      <div className="mt-10 grid gap-8 md:grid-cols-3">
        <div>
          <p className="text-sm uppercase tracking-wide text-foreground/60">
            Research
          </p>

          <p className="mt-2">UX Audit</p>
        </div>

        <div>
          <p className="text-sm uppercase tracking-wide text-foreground/60">
            Focus
          </p>

          <p className="mt-2">Messaging & Storytelling</p>
        </div>

        <div>
          <p className="text-sm uppercase tracking-wide text-foreground/60">
            Outcome
          </p>

          <p className="mt-2">Strategic & Actionable Insights</p>
        </div>
      </div>

      <div className="mt-10 h-px w-full bg-foreground/10" />

      <div className="mt-8">
        <p className="text-sm uppercase tracking-wide text-foreground/60">
          Key Observation
        </p>

        <p className="mt-2 max-w-md">
          The experience often communicated complexity when the goal was
          approachability and accessibility for smaller businesses.
        </p>
      </div>

      <a
        href="/case-studies/bigcommerce-rebrand"
        className="
          group
          mt-10
          inline-flex
          items-center
          gap-2
          text-sm
          hover:opacity-70
          font-medium
        "
      >
        Read the case study
        <span
          className="
            inline-block
            transition-transform
            duration-300
            group-hover:translate-x-1
          "
        >
          →
        </span>
      </a>
    </div>
  );
}
