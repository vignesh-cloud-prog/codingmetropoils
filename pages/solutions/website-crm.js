import Link from "next/link"
import { Title, TitleSm } from "@/components/common/Title"
import Banner from "@/components/Banner"
import SoftwarePlans from "@/components/SoftwarePlans"
import { Seo } from "@/components/common/Seo"
import ConsultationLink from "@/components/common/ConsultationLink"
import { websiteCrm, appointmentHref } from "@/assets/data/offers"

const WebsiteCrmPage = () => {
  return (
    <>
      <Seo
        title='Website + CRM Dashboard | CodeMadeBiz'
        description={websiteCrm.promise}
        path='/solutions/website-crm'
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: websiteCrm.title,
          description: websiteCrm.promise,
          provider: { "@type": "Organization", name: "CodeMadeBiz" },
        }}
      />
      <section className='agency bg-top solution-page'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='WEBSITE + CRM' />
            <br />
            <br />
            <Title title={websiteCrm.title} className='title-bg' as='h1' />
            <p>{websiteCrm.promise}</p>
          </div>

          <div className='solution-panel'>
            <TitleSm title='THE PROBLEM' as='h2' />
            <p className='solution-lead'>{websiteCrm.problem}</p>
          </div>

          <div className='solution-panel'>
            <TitleSm title='THE FLOW' as='h2' />
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
            <TitleSm title='FEATURES' as='h2' />
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
            <TitleSm title='WHO IT’S FOR' as='h2' />
            <ul className='solution-list'>
              {websiteCrm.forWho.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className='offer-actions'>
              <ConsultationLink href={appointmentHref("webcrm")} intent='webcrm' location='webcrm' className='button-primary'>
                Get Website + CRM
              </ConsultationLink>
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
