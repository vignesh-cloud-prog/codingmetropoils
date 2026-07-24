import Head from "next/head"
import Link from "next/link"
import { Title, TitleSm } from "@/components/common/Title"
import Banner from "@/components/Banner"
import SoftwarePlans from "@/components/SoftwarePlans"
import { websiteCrm, appointmentHref } from "@/assets/data/offers"

const WebsiteCrmPage = () => {
  return (
    <>
      <Head>
        <title>Website + CRM Dashboard - CodeMadeBiz</title>
        <meta name='description' content={websiteCrm.promise} />
      </Head>
      <section className='agency bg-top solution-page'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='WEBSITE + CRM' />
            <br />
            <br />
            <Title title={websiteCrm.title} className='title-bg' />
            <p>{websiteCrm.promise}</p>
          </div>

          <div className='solution-panel'>
            <TitleSm title='THE PROBLEM' />
            <p className='solution-lead'>{websiteCrm.problem}</p>
          </div>

          <div className='solution-panel'>
            <TitleSm title='THE FLOW' />
            <div className='flow-steps'>
              <span>Visitor</span>
              <span>→</span>
              <span>Lead</span>
              <span>→</span>
              <span>Follow-up</span>
              <span>→</span>
              <span>Customer</span>
            </div>
          </div>

          <div className='solution-panel'>
            <TitleSm title='FEATURES' />
            <div className='offer-grid offer-grid-offers'>
              {websiteCrm.features.map((item) => (
                <div className='offer-card' key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className='solution-panel'>
            <TitleSm title='WHO IT’S FOR' />
            <ul className='solution-list'>
              {websiteCrm.forWho.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className='offer-actions'>
              <Link href={appointmentHref("webcrm")} className='button-primary'>
                Get Website + CRM
              </Link>
              <Link href='/pricing' className='button-primary secondary-cta'>
                See Growth plan
              </Link>
            </div>
          </div>
        </div>
      </section>
      <SoftwarePlans />
      <Banner intent='webcrm' title='Stop losing leads in chats and spreadsheets' cta='Get Website + CRM' />
    </>
  )
}

export default WebsiteCrmPage
