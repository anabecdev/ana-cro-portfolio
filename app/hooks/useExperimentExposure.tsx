"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics/analytics";

type ExperimentExposureProps = {
  experimentId: string;
  variant: string;
  page: string;
};

export function useExperimentExposure({
  experimentId,
  variant,
  page,
}: ExperimentExposureProps) {
  useEffect(() => {
    trackEvent("experiment_exposure", {
      experiment_id: experimentId,
      variant,
      page,
    });
  }, [experimentId, variant, page]);
}
