import { Contact } from "@/sections"
import { Seo } from "@/components/common/Seo"
import React from "react"

const contact = () => {
  return (
    <>
      <Seo
        title='Contact CodeMadeBiz'
        description='Contact CodeMadeBiz in Bengaluru for AI setup, MVP builds, Website + CRM, software development, or enterprise tools. Call +91 8762363186 or email contact@codemadebiz.com.'
        path='/contact'
        schema={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact CodeMadeBiz",
          url: "https://codemadebiz.com/contact",
        }}
      />
      <Contact />
    </>
  )
}

export default contact
