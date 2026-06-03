const tests = [
  {
    title: "Hero Copy Test",
    hypothesis:
      "Would a stronger value proposition increase experiment participation?",
  },
  {
    title: "CTA Placement Test",
    hypothesis:
      "Does moving the primary CTA higher increase interaction rates?",
  },
  {
    title: "Case Study Positioning",
    hypothesis: "Will exposing case studies earlier improve exploration depth?",
  },
  {
    title: "Theme Preference",
    hypothesis:
      "Do visual themes influence engagement and perceived credibility?",
  },
];

export default function ExperimentNextTests() {
  return (
    <div className="mt-20">
      {tests.map((test, index) => (
        <article
          key={test.title}
          className="
            group
            border-t
            border-foreground/10
            py-8
          "
        >
          <div className="flex items-center gap-8">
            <span
              className="
                w-10
                shrink-0
                font-mono
                text-sm
                text-foreground/40
              "
            >
              {(index + 1).toString().padStart(2, "0")}
            </span>

            <h3
              className="
                text-xl
                md:text-3xl
                font-medium
                transition-all
                duration-700
                ease-[cubic-bezier(0.22,1,0.36,1)]
                group-hover:translate-x-2
              "
            >
              {test.title}
            </h3>

            <div className="flex-1 border-t border-foreground/10" />
          </div>

          <div
            className="
    overflow-hidden
    grid
    grid-rows-[0fr]
    transition-all
    duration-700
    ease-[cubic-bezier(0.22,1,0.36,1)]
    group-hover:grid-rows-[1fr]
  "
          >
            <div className=" overflow-hidden">
              <p
                className="
                ml-[4.5rem]
                mt-6
                max-w-xl
                text-lg
                text-foreground/60

                opacity-0
                transalate-y-3

                transition-all
                duration-700
                delay-75

                ease-[cubic-bezier(0.22,1,0.36,1)]

                group-hover:opacity-100
                group-hover:translate-y-0
              "
              >
                {test.hypothesis}
              </p>
            </div>
          </div>
        </article>
      ))}

      <div className="border-t border-foreground/10" />
    </div>
  );
}
