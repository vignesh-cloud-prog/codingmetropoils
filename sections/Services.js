import React from "react"
import Link from "next/link"
import { Card } from "@/components/common/Card"
import { Title, TitleSm } from "@/components/common/Title"
import AiServices from "@/components/AiServices"
import SoftwarePlans from "@/components/SoftwarePlans"
import Banner from "@/components/Banner"
import { serviceCatalog } from "@/assets/data/offers"

const Services = () => {
  return (
    <>
      <section className='agency bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='OUR SERVICES' /> <br />
            <br />
            <Title title='Software, AI, marketing & enterprise tools' className='title-bg' />
            <p>One catalog for SMBs, startups, and enterprise custom work — with clear next steps.</p>
          </div>
          <div className='services-grid py'>
            {serviceCatalog.map((item) => (
              <Card data={item} key={item.id} caption={item.post} show={true} href={item.href} />
            ))}
          </div>
        </div>
      </section>
      <AiServices showCta={false} />
      <SoftwarePlans />
      <div className='container offer-actions py'>
        <Link href='/pricing' className='button-primary'>
          Compare software plans
        </Link>
        <Link href='/ai' className='button-primary secondary-cta'>
          Explore AI setup
        </Link>
      </div>
      <Banner />
    </>
  )
}

export default Services
