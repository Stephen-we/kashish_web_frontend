declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export const trackEvent = (
  eventName: string,
  parameters: Record<string, any> = {}
) => {
  console.log("GA4 Event:", eventName, parameters);

  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, parameters);
  }
};

// Contact Events
export const trackWhatsApp = (location: string) => {
  trackEvent("whatsapp_click", {
    location,
  });
};

export const trackPhoneCall = (location: string) => {
  trackEvent("call_click", {
    location,
  });
};

export const trackQuoteRequest = (location: string) => {
  trackEvent("quote_request", {
    location,
  });
};

export const trackBrochureDownload = () => {
  trackEvent("brochure_download");
};

export const trackProjectView = (project: string) => {
  trackEvent("project_view", {
    project,
  });
};

export const trackServiceView = (service: string) => {
  trackEvent("service_view", {
    service,
  });
};