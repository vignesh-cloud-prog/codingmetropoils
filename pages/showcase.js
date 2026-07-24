import { ShowCase } from "@/sections"
import { Seo } from "@/components/common/Seo"
import React from "react"

const showcase = () => {
  return (
    <>
      <Seo
        title='Showcase | CodeMadeBiz'
        description='Selected CodeMadeBiz work across websites, apps, branding, and digital experiences for SMBs and startups.'
        path='/showcase'
      />
      <ShowCase />
    </>
  )
}

export default showcase
