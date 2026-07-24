import React, { useEffect, useRef, useState } from "react"
import { useRouter } from "next/router"
import { TitleSm, Title } from "@/components/common/Title"
import { Seo } from "@/components/common/Seo"
import { intentLabels } from "@/assets/data/offers"
import { trackEvent } from "@/lib/analytics"

export default function Appointment() {
  const router = useRouter()
  const [iframeHeight, setIframeHeight] = useState(900)
  const [loadForm, setLoadForm] = useState(false)
  const formRef = useRef(null)
  const viewedRef = useRef(false)
  const formStartedRef = useRef(false)
  const intent = typeof router.query.intent === "string" ? router.query.intent : "default"
  const label = intentLabels[intent] || intentLabels.default

  const formSrc =
    intent && intent !== "default"
      ? `https://form.jotform.com/241935017318455?isIframeEmbed=1&intent=${encodeURIComponent(intent)}`
      : "https://form.jotform.com/241935017318455?isIframeEmbed=1"

  useEffect(() => {
    if (!router.isReady || viewedRef.current) return
    viewedRef.current = true
    trackEvent("appointment_viewed", { intent: intent || "default" })
  }, [router.isReady, intent])

  const startForm = () => {
    setLoadForm(true)
    if (!formStartedRef.current) {
      formStartedRef.current = true
      trackEvent("form_started", { intent: intent || "default" })
    }
  }

  // Load iframe only when the form area is near the viewport
  useEffect(() => {
    if (loadForm || !formRef.current) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          startForm()
          observer.disconnect()
        }
      },
      { rootMargin: "200px" }
    )

    observer.observe(formRef.current)
    return () => observer.disconnect()
  }, [loadForm, intent])

  useEffect(() => {
    if (!loadForm) return undefined

    const onMessage = (event) => {
      if (event.origin !== "https://form.jotform.com") return
      try {
        const data = typeof event.data === "string" ? JSON.parse(event.data) : event.data
        if (data?.frameHeight) {
          setIframeHeight(data.frameHeight + 100)
        }
      } catch (e) {
        // ignore non-JSON messages
      }
    }

    window.addEventListener("message", onMessage)
    return () => window.removeEventListener("message", onMessage)
  }, [loadForm])

  return (
    <>
      <Seo
        title={`${label} | CodeMadeBiz`}
        description='Book a consultation with CodeMadeBiz for AI setup, MVP builds, Website + CRM, software plans, or enterprise custom tools.'
        path={intent && intent !== "default" ? `/appointment?intent=${intent}` : "/appointment"}
      />

      <section className='agency bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='BOOK A CONSULTATION' /> <br />
            <br />
            <Title title={label} className='title-bg' as='h1' />
            <p>
              Tell us what you need — AI setup, MVP, Website + CRM, software plans, or enterprise custom tools — and we will map the right package.
            </p>
            {intent && intent !== "default" && (
              <p className='intent-chip'>
                Selected intent: <strong>{intent}</strong>
              </p>
            )}
          </div>

          <div className='py jotform-shell' style={{ maxWidth: "900px", margin: "0 auto" }} ref={formRef}>
            {!loadForm ? (
              <div className='jotform-placeholder'>
                <p>Consultation form loads when you are ready — keeps this page fast.</p>
                <button type='button' className='button-primary' onClick={startForm}>
                  Load consultation form
                </button>
              </div>
            ) : (
              <div
                style={{
                  width: "100%",
                  height: `${iframeHeight}px`,
                  overflow: "visible",
                  marginBottom: "50px",
                }}
              >
                <iframe
                  id='JotFormIFrame-241935017318455'
                  title='CodeMadeBiz appointment request form'
                  allow='geolocation; microphone; camera'
                  src={formSrc}
                  loading='lazy'
                  referrerPolicy='no-referrer-when-downgrade'
                  style={{
                    width: "100%",
                    height: "100%",
                    border: "none",
                    overflow: "visible",
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
