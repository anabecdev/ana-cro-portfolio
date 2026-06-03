"use client";

import { useRef } from "react";

import { useGSAP } from "@gsap/react";

import { METRICS } from "./constants/metrics";
import { createMetricsDiagramAnimation } from "./metrics-diagram-animation";

import SectionHeading from "../section/section-heading";

export default function MetricsDiagram() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!sectionRef.current || !trackRef.current) return;

    createMetricsDiagramAnimation(sectionRef.current, trackRef.current);
  }, []);

  return (
    <div ref={sectionRef} className="relative">
      <SectionHeading
        title="What I'm Measuring"
        description="Success criteria for this experiment."
      />
      <div
        className="
          sticky
          top-0
          flex
          h-[70vh]
          items-center
          overflow-hidden
        "
      >
        <div
          ref={trackRef}
          className="
            flex
            items-center
            gap-[10vw]
            px-[10vw]
          "
        >
          {METRICS.map((metric) => (
            <article key={metric.value} className="min-w-[80vw]">
              <p
                className="
                  text-sm
                  uppercase
                  tracking-[0.3em]
                  text-foreground/50
                "
              >
                {metric.label}
              </p>

              <h2
                className="
                  mt-8
                  text-[clamp(4rem,10vw,10rem)]
                  leading-[0.9]
                  font-semibold
                  tracking-tight
                "
              >
                {metric.value}
              </h2>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
