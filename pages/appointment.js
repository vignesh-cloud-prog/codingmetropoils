import React, { useEffect, useState } from "react"
import Head from "next/head"
import { useRouter } from "next/router"
import { TitleSm, Title } from "@/components/common/Title"
import { intentLabels } from "@/assets/data/offers"

export default function Appointment() {
  const router = useRouter()
  const [iframeHeight, setIframeHeight] = useState(1200)
  const intent = typeof router.query.intent === "string" ? router.query.intent : "default"
  const label = intentLabels[intent] || intentLabels.default

  useEffect(() => {
    const existingScript = document.getElementById("jotform-embed-script")
    if (existingScript) {
      existingScript.remove()
    }

    const adjustIframeHeight = () => {
      try {
        const iframe = document.getElementById("JotFormIFrame-241935017318455")
        if (iframe) {
          setIframeHeight(1200)

          window.addEventListener("message", (event) => {
            if (event.origin === "https://form.jotform.com") {
              try {
                const data = JSON.parse(event.data)
                if (data.frameHeight) {
                  setIframeHeight(data.frameHeight + 100)
                }
              } catch (e) {
                // ignore non-JSON messages
              }
            }
          })
        }
      } catch (error) {
        console.error("Error adjusting iframe height:", error)
      }
    }

    setTimeout(adjustIframeHeight, 1000)

    return () => {
      if (existingScript) {
        existingScript.remove()
      }
    }
  }, [])

  const formSrc =
    intent && intent !== "default"
      ? `https://form.jotform.com/241935017318455?isIframeEmbed=1&intent=${encodeURIComponent(intent)}`
      : "https://form.jotform.com/241935017318455?isIframeEmbed=1"

  return (
    <>
      <Head>
        <title>{label} - CodeMadeBiz</title>
        <meta name='description' content='Book a consultation with CodeMadeBiz for software, AI, MVP, or enterprise work.' />
      </Head>

      <section className='agency bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='BOOK A CONSULTATION' /> <br />
            <br />
            <Title title={label} className='title-bg' />
            <p>
              Tell us what you need — AI setup, MVP, Website + CRM, software plans, or enterprise custom tools — and we will map the right package.
            </p>
            {intent && intent !== "default" && (
              <p className='intent-chip'>
                Selected intent: <strong>{intent}</strong>
              </p>
            )}
          </div>

          <div className='py' style={{ maxWidth: "900px", margin: "0 auto" }}>
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
                title='CM Appointment Request Form'
                allowTransparency='true'
                allowFullScreen={true}
                allow='geolocation; microphone; camera'
                src={formSrc}
                frameBorder='0'
                style={{
                  width: "100%",
                  height: "100%",
                  border: "none",
                  overflow: "visible",
                }}
                scrolling='yes'
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
