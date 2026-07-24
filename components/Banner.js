import React from "react"
import Link from "next/link"
import { appointmentHref } from "@/assets/data/offers"

const Banner = ({ intent, title, subtitle, cta }) => {
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
            <Link href={appointmentHref(intent)} className='banner-cta'>
              {cta || "Book a consultation"}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Banner
