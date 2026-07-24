import { Team } from "@/sections"
import { Seo } from "@/components/common/Seo"
import React from "react"

const team = () => {
  return (
    <>
      <Seo
        title='Team | CodeMadeBiz'
        description='Meet the CodeMadeBiz team of builders delivering software, AI, and marketing solutions for SMBs and startups.'
        path='/team'
      />
      <Team />
    </>
  )
}

export default team
