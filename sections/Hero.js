import { home } from "@/assets/data/dummydata"
import Banner from "@/components/Banner"
import Expertise from "@/components/Expertise"
import Testimonial from "@/components/Testimonial"
import TrustPilotReview from "@/components/TrustPilotReview"
import Audiences from "@/components/Audiences"
import OfferLines from "@/components/OfferLines"
import AiServices from "@/components/AiServices"
import SoftwarePlans from "@/components/SoftwarePlans"
import { Title, TitleLogo, TitleSm } from "@/components/common/Title"
import { BlogCard } from "@/components/router"
import { Products } from "@/sections"
import Link from "next/link"
import { appointmentHref } from "@/assets/data/offers"
import React from "react"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <TitleLogo title='Biz' caption='CodeMade' className='logobg' />
          <h1 className='hero-title'>SOFTWARE, AI & MARKETING FOR SMBs & STARTUPS</h1>

          <div className='sub-heading'>
            <TitleSm title='WEBSITES' /> <span>.</span>
            <TitleSm title='APPS' /> <span>.</span>
            <TitleSm title='AI AGENTS' /> <span>.</span>
            <TitleSm title='CRM' /> <span>.</span>
            <TitleSm title='GROWTH' />
          </div>

          <div className='hero-cta'>
            <Link href={appointmentHref()} className='button-primary'>
              Book a consultation
            </Link>
            <Link href='/pricing' className='button-primary secondary-cta'>
              View plans
            </Link>
          </div>
        </div>
      </section>
      <section className='hero-sec'>
        <div className='container'>
          <div className='heading-title'>
            <Title title='Complete software, AI, and marketing solutions for local SMBs and startups — plus custom enterprise tools.' />
            <p>
              CodeMadeBiz builds and runs the tech stack you need to sell, serve, and scale: websites, apps, AI agents, CRM, and growth systems — with clear plans instead of vague agency promises.
            </p>
          </div>
          <div className='hero-content grid-4'>
            {home.map((item, i) => (
              <div className='box' key={i}>
                <span className='green'>{item.icon}</span> <br />
                <br />
                <h3>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Audiences />
      <OfferLines />
      <AiServices />
      <SoftwarePlans />
      <Expertise />
      <Banner />
      <Products />
      <Testimonial />
      <TrustPilotReview />
      <div className='text-center'>
        <Title title='Latest news & articles' />
      </div>
      <BlogCard />
      <Banner intent='software' />
    </>
  )
}

export default Hero
