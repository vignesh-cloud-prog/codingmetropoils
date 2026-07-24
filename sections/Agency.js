import Banner from "@/components/Banner"
import Brand from "@/components/Brand"
import Testimonial from "@/components/Testimonial"
import { Title, TitleSm } from "@/components/common/Title"

const Agency = () => {
  return (
    <>
      <section className='agency bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='ABOUT CODEMADEBIZ' /> <br />
            <br />
            <Title title='Complete tech + marketing solutions for SMBs, startups, and enterprise teams' className='title-bg' as='h1' />
          </div>

          <div className='content flex1'>
            <div className='left w-60 py'>
              <TitleSm title='We build and run the software and growth stack local businesses need' />
              <p className='desc-p'>
                CodeMadeBiz helps local SMBs and startups sell, serve, and scale with websites, apps, AI agents, CRM dashboards, and marketing systems. When you outgrow packages, we build custom enterprise tools and AI workflows.
              </p>
              <div className='grid-3'>
                <div className='box'>
                  <h1 className='indigo'>SMB</h1>
                  <h3>Local service businesses</h3>
                </div>
                <div className='box'>
                  <h1 className='indigo'>MVP</h1>
                  <h3>Startup product launches</h3>
                </div>
                <div className='box'>
                  <h1 className='indigo'>AI</h1>
                  <h3>Agents & workflows</h3>
                </div>
              </div>
            </div>
            <div className='right w-40 ml'>
              <img src='/images/s1.jpg' alt='CodeMadeBiz digital product work' className='round' width='640' height='480' loading='lazy' decoding='async' />
            </div>
          </div>

          <div className='content flex'>
            <div className='left w-40 py'>
              <img src='/images/s4.jpg' alt='Custom software and marketing solutions' className='round' width='640' height='480' loading='lazy' decoding='async' />
            </div>
            <div className='right w-60 ml'>
              <TitleSm title='Our mission' />
              <br />
              <p className='misson-p'>
                Sell outcomes — more booked appointments, cleaner lead pipelines, and MVPs that reach real users — through clear plans (Launch, Growth, Scale), AI services we build and operate, and custom tools when standard packages are not enough.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Brand />
      <Testimonial />
      <Banner />
      <br />
      <br />
      <br />
      <br />
    </>
  )
}

export default Agency
