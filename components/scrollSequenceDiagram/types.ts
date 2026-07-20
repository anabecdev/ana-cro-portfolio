import type { ReactNode } from "react";

export type ScrollSequenceStep = {
  title: string;
  description?: ReactNode;
};

export type ScrollSequenceDiagramProps = {
  steps: ScrollSequenceStep[];
  direction?: "vertical" | "horizontal";
};
