"use client";

import { useExperimentExposure } from "@/app/hooks/useExperimentExposure";

type Props = {
  experimentId: string;
  variant: string;
  page: string;
};

export default function ExperimentTracker(props: Props) {
  useExperimentExposure(props);

  return null;
}
