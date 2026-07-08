"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics/trackEvent";

type ExperimentExposure = {
  id: string;
  name: string;
  variant: string;
  page: string;
};

export function useExperimentExposure(experiment: ExperimentExposure) {
  useEffect(() => {
    const storageKey = `experiment_exposure_${experiment.id}`;

    if (sessionStorage.getItem(storageKey)) {
      return;
    }

    const interval = setInterval(() => {
      if (!window.gtag) return;

      trackEvent("experiment_exposure", {
        experiment_id: experiment.id,
        experiment_name: experiment.name,
        variant: experiment.variant,
        page: experiment.page,
      });

      sessionStorage.setItem(storageKey, "true");

      clearInterval(interval);
    }, 100);

    return () => clearInterval(interval);
  }, [experiment.id, experiment.name, experiment.variant, experiment.page]);
}
