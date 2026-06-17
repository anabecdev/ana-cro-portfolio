"use client";

import { Fragment, useRef } from "react";
import { useGSAP } from "@gsap/react";

import { ScrollSequenceDiagramProps } from "./types";
import { createScrollSequenceDiagramAnimation } from "./scroll-sequence-diagram-animation";

export default function ScrollSequenceDiagram({
  steps,
  direction = "vertical",
}: ScrollSequenceDiagramProps) {
  const diagramRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!diagramRef.current) return;

    createScrollSequenceDiagramAnimation(diagramRef.current);
  }, []);

  const arrow = direction === "vertical" ? "↓" : "→";

  return (
    <div
      ref={diagramRef}
      className={`
        mt-24
        flex
        text-center
        ${
          direction === "vertical"
            ? "flex-col items-center"
            : "flex-row items-center justify-center gap-12 flex-wrap"
        }
      `}
    >
      {steps.map((step, index) => (
        <Fragment key={step.title}>
          <div
            data-step
            className="
        flex
        flex-col
        items-center
      "
          >
            <p
              className="
              max-w-[90vw]
              text-center
    break-words
          text-[clamp(2.5rem,14vw,8rem)]
          font-semibold
          tracking-tight
          leading-[0.9]
        "
            >
              {step.title}
            </p>

            {step.description && (
              <p
                className="
            mt-4
            max-w-xl
            text-center
            text-lg
            text-foreground/60
          "
              >
                {step.description}
              </p>
            )}
          </div>

          {index < steps.length - 1 && (
            <p
              data-step
              className={
                direction === "vertical"
                  ? "my-12 text-[clamp(3rem,6vw,5rem)]"
                  : "mx-4 text-[clamp(3rem,6vw,5rem)]"
              }
            >
              {arrow}
            </p>
          )}
        </Fragment>
      ))}
    </div>
  );
}
