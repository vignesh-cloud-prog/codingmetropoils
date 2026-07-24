import Link from "next/link"
import { Title, TitleSm } from "@/components/common/Title"
import SoftwarePlans from "@/components/SoftwarePlans"
import Banner from "@/components/Banner"
import { Seo } from "@/components/common/Seo"
import ConsultationLink from "@/components/common/ConsultationLink"
import { appointmentHref } from "@/assets/data/offers"

const PricingPage = () => {
  return (
    <>
      <Seo
        title='Pricing & Software Plans | CodeMadeBiz'
        description='Three software development plans from CodeMadeBiz: Launch, Growth (Website + CRM), and Scale (apps & products), plus AI retainers as add-ons.'
        path='/pricing'
        schema={{
          "@context": "https://schema.org",
          "@type": "OfferCatalog",
          name: "CodeMadeBiz Software Plans",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Launch" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Growth — Website + CRM" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Scale — Product / App" } },
          ],
        }}
      />
      <section className='agency bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='PRICING' />
            <br />
            <br />
            <Title title='Three clear software plans — plus AI retainers as add-ons' className='title-bg' as='h1' />
            <p>
              Buy against scope, not ambiguity. Book a consultation for a quote mapped to Launch, Growth, or Scale — then add AI social, sales, or support when you need run-time help.
            </p>
            <div className='offer-actions' style={{ marginTop: 30 }}>
              <ConsultationLink href={appointmentHref("software")} intent='software' location='pricing' className='button-primary'>
                Book a consultation
              </ConsultationLink>
              <Link href='/ai' className='button-primary secondary-cta'>
                See AI retainers
              </Link>
            </div>
          </div>
        </div>
      </section>
      <SoftwarePlans showHeading={false} />
      <Banner intent='software' title='Not sure which plan fits?' cta='Book a consultation' trackLocation='banner' />
    </>
  )
}

export default PricingPage
