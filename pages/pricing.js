import Head from "next/head"
import Link from "next/link"
import { Title, TitleSm } from "@/components/common/Title"
import SoftwarePlans from "@/components/SoftwarePlans"
import Banner from "@/components/Banner"
import { appointmentHref } from "@/assets/data/offers"

const PricingPage = () => {
  return (
    <>
      <Head>
        <title>Pricing & Plans - CodeMadeBiz</title>
        <meta
          name='description'
          content='Three software development plans from CodeMadeBiz: Launch, Growth (Website + CRM), and Scale (apps & products).'
        />
      </Head>
      <section className='agency bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='PRICING' />
            <br />
            <br />
            <Title title='Three clear software plans — plus AI retainers as add-ons' className='title-bg' />
            <p>
              Buy against scope, not ambiguity. Book a consultation for a quote mapped to Launch, Growth, or Scale — then add AI social, sales, or support when you need run-time help.
            </p>
            <div className='offer-actions' style={{ marginTop: 30 }}>
              <Link href={appointmentHref("software")} className='button-primary'>
                Book a consultation
              </Link>
              <Link href='/ai' className='button-primary secondary-cta'>
                See AI retainers
              </Link>
            </div>
          </div>
        </div>
      </section>
      <SoftwarePlans showHeading={false} />
      <Banner intent='software' title='Not sure which plan fits?' cta='Book a consultation' />
    </>
  )
}

export default PricingPage
