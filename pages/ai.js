import Head from "next/head"
import Link from "next/link"
import { Title, TitleSm } from "@/components/common/Title"
import AiServices from "@/components/AiServices"
import Banner from "@/components/Banner"
import { appointmentHref } from "@/assets/data/offers"

const AiPage = () => {
  return (
    <>
      <Head>
        <title>AI Services - CodeMadeBiz</title>
        <meta
          name='description'
          content='AI setup for SMBs and startups: social media, sales process, support agents, accelerated builds, and custom workflows.'
        />
      </Head>
      <section className='agency bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='AI GROWTH STACK' />
            <br />
            <br />
            <Title title='We build and integrate AI for your business' className='title-bg' />
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
