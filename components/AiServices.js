import Link from "next/link"
import { Title, TitleSm } from "@/components/common/Title"
import { aiProducts, appointmentHref } from "@/assets/data/offers"

const AiServices = ({ showCta = true }) => {
  return (
    <section className='offer-section ai-services'>
      <div className='container'>
        <div className='heading-title'>
          <TitleSm title='AI SETUP FOR YOUR BUSINESS' />
          <br />
          <br />
          <Title title='We build and integrate AI for social, sales, support & workflows' />
          <p>We build all the AI — agents, workflows, and integrations — fitted to your business.</p>
        </div>
        <div className='offer-grid offer-grid-ai'>
          {aiProducts.map((item) => (
            <div className='offer-card' key={item.id}>
              <h3>{item.title}</h3>
              <p className='offer-outcome'>{item.outcome}</p>
              <ul>
                {item.gets.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {showCta && (
          <div className='offer-actions'>
            <Link href='/ai' className='button-primary'>
              Explore AI services
            </Link>
            <Link href={appointmentHref("ai")} className='button-primary secondary-cta'>
              Get AI setup
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}

export default AiServices
