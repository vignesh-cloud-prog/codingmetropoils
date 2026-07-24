import Link from "next/link"
import { Title, TitleLogo } from "./common/Title"
import { appointmentHref } from "@/assets/data/offers"

const Banner = ({ intent, title, subtitle, cta }) => {
  return (
    <>
      <section className='banner' style={{ marginBottom: 40 }}>
        <div className='container'>
          <div>
            <Title title={title || "Ready to build your software, AI, or growth stack?"} /> <br />
            <TitleLogo title={subtitle || "Book a consultation — tell us your intent and we will map a plan."} />
          </div>
          <div>
            <Link href={appointmentHref(intent)} className='button-primary'>
              {cta || "Book a consultation"}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Banner
