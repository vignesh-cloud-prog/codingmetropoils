import Services from "@/sections/Services"
import { Seo, organizationSchema } from "@/components/common/Seo"
import React from "react"

const services = () => {
  return (
    <>
      <Seo
        title='Services — Software, AI & Marketing | CodeMadeBiz'
        description='Explore CodeMadeBiz services: AI growth stack, websites, Website + CRM, apps & MVP, SEO, paid ads, and enterprise custom tools.'
        path='/services'
        schema={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "CodeMadeBiz Services",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "AI Growth Stack" },
            { "@type": "ListItem", position: 2, name: "Websites & Landing Pages" },
            { "@type": "ListItem", position: 3, name: "Website + CRM Dashboard" },
            { "@type": "ListItem", position: 4, name: "Apps & Startup MVP" },
            { "@type": "ListItem", position: 5, name: "SEO, Content & Paid Ads" },
            { "@type": "ListItem", position: 6, name: "Enterprise & Custom Tools" },
          ],
          provider: organizationSchema,
        }}
      />
      <Services />
    </>
  )
}

export default services
