import { Hero } from "@/sections"
import Head from "next/head"

export default function Home() {
  return (
    <>
      <Head>
        <title>CodeMadeBiz — Software, AI & Marketing for SMBs and Startups</title>
        <meta
          name='description'
          content='CodeMadeBiz builds websites, apps, AI agents, CRM dashboards, and growth systems for local SMBs and startups — plus custom enterprise tools.'
        />
      </Head>
      <Hero />
    </>
  )
}
