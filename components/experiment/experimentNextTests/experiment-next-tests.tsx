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
            py-10
          "
        >
          <div className="flex items-start gap-8">
            <span
              className="
                w-10
                shrink-0
                font-mono
                text-sm
                text-[var(--accent)]/80
              "
            >
              {(index + 1).toString().padStart(2, "0")}
            </span>

            <div className="flex-1">
              <h3
                className="
                  text-xl
                  md:text-3xl
                  font-medium
                "
              >
                {test.title}
              </h3>

              <p
                className="
                  mt-6
                  max-w-2xl
                  text-lg
                  leading-relaxed
                  text-foreground/60
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
