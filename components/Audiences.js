import { Title, TitleSm } from "@/components/common/Title"
import ConsultationLink from "@/components/common/ConsultationLink"
import { audiences, appointmentHref } from "@/assets/data/offers"

const Audiences = () => {
  return (
    <section className='offer-section audiences'>
      <div className='container'>
        <div className='heading-title'>
          <TitleSm title='WHO WE SERVE' />
          <br />
          <br />
          <Title title='Software, AI & growth for the teams who need it most' />
        </div>
        <div className='offer-grid offer-grid-3'>
          {audiences.map((item) => (
            <div className='offer-card' key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <ConsultationLink
                href={appointmentHref(item.intent)}
                intent={item.intent}
                location='audiences'
                className='button-primary'
              >
                {item.cta}
              </ConsultationLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Audiences
