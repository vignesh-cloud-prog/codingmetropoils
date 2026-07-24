import Head from "next/head"
import Link from "next/link"
import { Title, TitleSm } from "@/components/common/Title"
import Banner from "@/components/Banner"
import { mvpPackage, appointmentHref } from "@/assets/data/offers"

const MvpPage = () => {
  return (
    <>
      <Head>
        <title>Startup MVP Package - CodeMadeBiz</title>
        <meta name='description' content={mvpPackage.promise} />
      </Head>
      <section className='agency bg-top solution-page'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='STARTUP MVP' />
            <br />
            <br />
            <Title title={mvpPackage.title} className='title-bg' />
            <p>{mvpPackage.promise}</p>
          </div>

          <div className='solution-panel'>
            <TitleSm title='WHAT’S INCLUDED' />
            <ul className='solution-list'>
              {mvpPackage.includes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className='offer-actions'>
              <Link href={appointmentHref("mvp")} className='button-primary'>
                Build my MVP
              </Link>
              <Link href='/pricing' className='button-primary secondary-cta'>
                Compare software plans
              </Link>
            </div>
          </div>

          <div className='solution-panel'>
            <TitleSm title='HOW IT WORKS' />
            <div className='offer-grid offer-grid-3'>
              <div className='offer-card'>
                <h3>1. Discovery</h3>
                <p>Align on users, goals, and the one journey that must work at launch.</p>
              </div>
              <div className='offer-card'>
                <h3>2. Scope freeze</h3>
                <p>We lock must-haves so the build stays focused and shippable.</p>
              </div>
              <div className='offer-card'>
                <h3>3. Launch & learn</h3>
                <p>Deploy, fix early bugs, then optionally add AI social and a query agent.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Banner intent='mvp' title='Ready to launch your MVP?' cta='Build my MVP' />
    </>
  )
}

export default MvpPage
