type ExperimentCardProps = {
  variantValue: string;
};

export default function ExperimentCard({ variantValue }: ExperimentCardProps) {
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
        Experiment #001
      </p>

      <h3 className="mt-4 text-2xl font-semibold tracking-tight">
        Resume Visibility Test
      </h3>

      <div className="mt-6 h-px w-full bg-foreground/10" />

      <div className="mt-8">
        <p className="text-sm uppercase tracking-wide text-foreground/60">
          Hypothesis
        </p>

        <p className="mt-2 max-w-md text-body">
          Showing the resume immediately will increase downloads.
        </p>
      </div>

      <div className="mt-10 grid gap-8 md:grid-cols-3">
        <div>
          <p className="text-sm uppercase tracking-wide text-foreground/60">
            Variant A
          </p>

          <p className="mt-2">
            Resume visible
            <br />
            Warm visual atmosphere
          </p>
        </div>

        <div>
          <p className="text-sm uppercase tracking-wide text-foreground/60">
            Variant B
          </p>

          <p className="mt-2">
            Resume hidden
            <br />
            Cool visual atmosphere
          </p>
        </div>
      </div>

      <div className="mt-10 h-px w-full bg-foreground/10" />

      <div className="mt-8">
        <p className="text-sm uppercase tracking-wide text-foreground/60">
          Current Assignment
        </p>

        <p className="mt-2">
          You are currently viewing: <strong> Variant {variantValue} </strong>
        </p>
      </div>

      <a
        href="/experiments"
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
        Explore the methodology
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
