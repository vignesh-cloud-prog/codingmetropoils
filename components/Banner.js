import React from "react"
import { appointmentHref } from "@/assets/data/offers"
import ConsultationLink from "@/components/common/ConsultationLink"

const Banner = ({ intent, title, subtitle, cta, trackLocation = "banner" }) => {
  return (
    <>
      <section className='banner'>
        <div className='container'>
          <div className='banner-copy'>
            <p className='banner-title'>
              {title || "Ready to build your software, AI, or growth stack?"}
            </p>
            <p className='banner-subtitle'>
              {subtitle || "Book a consultation — tell us your intent and we will map a plan."}
            </p>
          </div>
          <div className='banner-action'>
            <ConsultationLink
              href={appointmentHref(intent)}
              intent={intent || "default"}
              location={trackLocation}
              className='banner-cta'
            >
              {cta || "Book a consultation"}
            </ConsultationLink>
          </div>
        </div>
      </section>
    </>
  )
}

export default Banner
