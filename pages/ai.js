import Link from "next/link"
import { Title, TitleSm } from "@/components/common/Title"
import AiServices from "@/components/AiServices"
import Banner from "@/components/Banner"
import { Seo } from "@/components/common/Seo"
import { appointmentHref } from "@/assets/data/offers"

const AiPage = () => {
  return (
    <>
      <Seo
        title='AI Services for SMBs & Startups | CodeMadeBiz'
        description='AI setup for SMBs and startups: social media management, sales process, support agents, accelerated builds, and custom workflows — built and integrated by CodeMadeBiz.'
        path='/ai'
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "AI Growth Stack",
          provider: { "@type": "Organization", name: "CodeMadeBiz" },
          description: "AI social, sales, support agents, and custom workflows for SMBs and startups.",
          areaServed: "IN",
        }}
      />
      <section className='agency bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='AI GROWTH STACK' />
            <br />
            <br />
            <Title title='We build and integrate AI for your business' className='title-bg' as='h1' />
            <p>
              Social, sales, support agents, and custom workflows — fitted to how local SMBs and startups actually operate. We build all the AI.
            </p>
            <div className='offer-actions' style={{ marginTop: 30 }}>
              <Link href={appointmentHref("ai")} className='button-primary'>
                Get AI setup
              </Link>
            </div>
          </div>
        </div>
      </section>
      <AiServices showCta={false} />
      <Banner intent='ai' title='Ready for an AI setup consultation?' cta='Get AI setup' />
    </>
  )
}

export default AiPage
