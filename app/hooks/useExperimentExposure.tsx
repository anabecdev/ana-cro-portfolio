"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics/trackEvent";

type ExperimentExposure = {
  id: string;
  name: string;
  hypothesis: string;
  variant: string;
  page: string;
};

export function useExperimentExposure(experiment: ExperimentExposure) {
  console.log("Experiment exposure", experiment);
  
  useEffect(() => {
  const interval = setInterval(() => {
    if (window.gtag) {
      trackEvent("experiment_exposure", {
        experiment_id: experiment.id,
        experiment_name: experiment.name,
        variant: experiment.variant,
        page: experiment.page,
      });

      clearInterval(interval);
    }
  }, 100);

  return () => clearInterval(interval);
}, [
  experiment.id,
  experiment.name,
  experiment.variant,
  experiment.page,
]);
}
