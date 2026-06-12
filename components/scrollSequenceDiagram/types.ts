export type ScrollSequenceStep = {
  title: string;
  description?: string;
};

export type ScrollSequenceDiagramProps = {
  steps: ScrollSequenceStep[];
  direction?: "vertical" | "horizontal";
};
