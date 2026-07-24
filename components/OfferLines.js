import Link from "next/link"
import { Title, TitleSm } from "@/components/common/Title"
import { offerLines } from "@/assets/data/offers"

const OfferLines = () => {
  return (
    <section className='offer-section offer-lines'>
      <div className='container'>
        <div className='heading-title'>
          <TitleSm title='WHAT WE SELL' />
          <br />
          <br />
          <Title title='Five clear ways to work with CodeMadeBiz' />
          <p>Complete tech + marketing solutions — not a vague agency menu.</p>
        </div>
        <div className='offer-grid offer-grid-offers'>
          {offerLines.map((item) => (
            <Link href={item.href} className='offer-card offer-card-link' key={item.id}>
              <span className='offer-index'>0{item.id}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OfferLines
