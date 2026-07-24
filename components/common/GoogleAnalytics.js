import { useEffect } from "react"
import { useRouter } from "next/router"
import Script from "next/script"
import { GA_MEASUREMENT_ID, isGaEnabled, pageview } from "@/lib/analytics"

const GoogleAnalytics = () => {
  const router = useRouter()

  useEffect(() => {
    if (!isGaEnabled()) return undefined

    const handleRoute = (url) => pageview(url)
    router.events.on("routeChangeComplete", handleRoute)
    return () => router.events.off("routeChangeComplete", handleRoute)
  }, [router.events])

  if (!isGaEnabled()) return null

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} strategy='afterInteractive' />
      <Script id='ga4-init' strategy='afterInteractive'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', { send_page_view: true });
        `}
      </Script>
    </>
  )
}

export default GoogleAnalytics
