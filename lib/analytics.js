export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || ""

export const isGaEnabled = () => Boolean(GA_MEASUREMENT_ID)

export function pageview(url) {
  if (!GA_MEASUREMENT_ID || typeof window === "undefined" || typeof window.gtag !== "function") return
  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: url,
  })
}

export function trackEvent(name, params = {}) {
  if (!GA_MEASUREMENT_ID || typeof window === "undefined" || typeof window.gtag !== "function") return
  window.gtag("event", name, params)
}

export function intentFromHref(href = "") {
  try {
    const query = href.includes("?") ? href.split("?")[1] : ""
    const intent = new URLSearchParams(query).get("intent")
    return intent || "default"
  } catch {
    return "default"
  }
}

export function trackConsultationCta(location, intent = "default") {
  trackEvent("consultation_cta_clicked", {
    location: location || "other",
    intent: intent || "default",
  })
}

export function trackWhatsApp(location = "other") {
  trackEvent("contact_whatsapp_clicked", { location })
}

export function trackEmail(location = "other") {
  trackEvent("contact_email_clicked", { location })
}
