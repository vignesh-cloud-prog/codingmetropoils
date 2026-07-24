import Link from "next/link"
import { Title, TitleSm } from "@/components/common/Title"
import { softwarePlans, planAddOns, appointmentHref } from "@/assets/data/offers"

const SoftwarePlans = ({ showHeading = true }) => {
  return (
    <section className='offer-section software-plans'>
      <div className='container'>
        {showHeading && (
          <div className='heading-title'>
            <TitleSm title='SOFTWARE DEVELOPMENT PLANS' />
            <br />
            <br />
            <Title title='Three clear plans — Launch, Growth, and Scale' />
            <p>Scope boundaries you can buy against. Change requests become add-ons.</p>
          </div>
        )}
        <div className='plans-grid'>
          {softwarePlans.map((plan) => (
            <div className={`plan-card ${plan.featured ? "featured" : ""}`} key={plan.id}>
              {plan.featured && <span className='plan-badge'>Most popular for SMBs</span>}
              <h3>{plan.name}</h3>
              <p className='plan-tagline'>{plan.tagline}</p>
              <p className='plan-best'>Best for: {plan.bestFor}</p>
              <ul>
                {plan.includes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              {plan.notIncluded?.length > 0 && (
                <div className='plan-not'>
                  <span>Not included</span>
                  <ul>
                    {plan.notIncluded.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
              <Link href={appointmentHref(plan.intent)} className='button-primary'>
                Book {plan.name}
              </Link>
            </div>
          ))}
        </div>
        <div className='plan-addons'>
          <TitleSm title='ADD-ONS' />
          <div className='addon-list'>
            {planAddOns.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SoftwarePlans
