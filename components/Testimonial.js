import React from "react"
import { Title, TitleSm } from "./common/Title"
import Link from "next/link"
import { testimonial } from "@/assets/data/dummydata"
import { HiOutlineArrowRight } from "react-icons/hi"
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"

function SampleNextArrow(props) {
  const { onClick } = props
  return (
    <div className='slick-arrow'>
      <button type='button' className='next' onClick={onClick} aria-label='Next testimonial'>
        <RiArrowRightSLine size={25} />
      </button>
    </div>
  )
}

function SamplePrevArrow(props) {
  const { onClick } = props
  return (
    <div className='slick-arrow'>
      <button type='button' className='prev' onClick={onClick} aria-label='Previous testimonial'>
        <RiArrowLeftSLine size={25} />
      </button>
    </div>
  )
}

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  }

  return (
    <>
      <section className='testimonial'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='CLIENT RESULTS' />
            <br />
            <br />
            <Title title='Results from SMBs and startups we’ve built for' />
            <p>Real outcomes from Launch, Growth, MVP, and Scale engagements — not generic praise.</p>
          </div>
          <div className='cards'>
            <Slider {...settings}>
              {testimonial.map((user) => {
                const isExternal = /^https?:\/\//.test(user.url)
                const CaseLink = isExternal ? "a" : Link
                const caseProps = isExternal
                  ? { href: user.url, target: "_blank", rel: "noopener noreferrer" }
                  : { href: user.url }

                return (
                  <div key={user.id}>
                    <article className='testimonial-item'>
                      <div className='testimonial-meta'>
                        <span className='offer-tag'>{user.offer}</span>
                        <span className='built-tag'>{user.built}</span>
                      </div>

                      <div className='testimonial-client'>
                        <div className='img'>
                          <img src={user.cover} alt={`${user.name} — CodeMadeBiz client`} loading='lazy' decoding='async' width={112} height={112} />
                        </div>
                        <div className='client-text'>
                          <h3>{user.name}</h3>
                          <span>{user.post}</span>
                        </div>
                      </div>

                      <blockquote className='testimonial-quote'>
                        <p>“{user.desc}”</p>
                      </blockquote>

                      {user.url && user.url !== "#" && (
                        <CaseLink {...caseProps} className='case-link'>
                          {isExternal ? "View live project" : "Start a similar project"}{" "}
                          <HiOutlineArrowRight className='link-icon' />
                        </CaseLink>
                      )}
                    </article>
                  </div>
                )
              })}
            </Slider>
          </div>
        </div>
      </section>
    </>
  )
}

export default Testimonial
