import React from "react"
import { Title } from "./common/Title"
import { expertise } from "@/assets/data/dummydata"
import { Card } from "./common/Card"

const expertiseLinks = {
  1: "/solutions/website-crm",
  2: "/ai",
  3: "/solutions/mvp",
  4: "/services",
}

const Expertise = () => {
  return (
    <>
      <section className='expertise'>
        <div className='container'>
          <div className='heading-title'>
            <Title title='Our expertise' />
            <p>
              Complete software, AI, and marketing solutions for local SMBs and startups — plus custom enterprise tools when you need them.
            </p>
          </div>
          <div className='hero-content grid-4'>
            {expertise.map((item) => (
              <Card data={item} key={item.id} caption='learn more' href={expertiseLinks[item.id] || "/services"} show={true} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Expertise
