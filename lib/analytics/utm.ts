export function getUTMParams() {
  if (typeof window === "undefined") {
    return {};
  }

  const params = new URLSearchParams(window.location.search);

  return {
    utm_source: params.get("utm_source") ?? "(direct)",
    utm_medium: params.get("utm_medium") ?? "(none)",
    utm_campaign: params.get("utm_campaign") ?? "(not set)",
  };
}
