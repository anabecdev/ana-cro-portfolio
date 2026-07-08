"use client";

import { useExperimentExposure } from "@/app/hooks/useExperimentExposure";

type Experiment = {
  id: string;
  name: string;
  hypothesis: string;
  variant: string;
  page: string;
};

type Props = {
  experiment: Experiment;
};

export default function ExperimentTracker({ experiment }: Props) {
  useExperimentExposure(experiment);

  return null;
}
