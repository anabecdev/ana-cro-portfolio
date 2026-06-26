"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics/analytics";

type ExperimentExposure = {
  id: string;
  name: string;
  hypothesis: string;
  variant: string;
  page: string;
};

export function useExperimentExposure(experiment: ExperimentExposure) {
  useEffect(() => {
    trackEvent("experiment_exposure", {
      experiment_id: experiment.id,
      experiment_name: experiment.name,
      variant: experiment.variant,
      page: experiment.page,
    });
  }, [experiment.id, experiment.name, experiment.variant, experiment.page]);
}
