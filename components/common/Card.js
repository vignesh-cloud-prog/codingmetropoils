import Link from "next/link"
import { TitleSm } from "./Title"
import { HiOutlineArrowRight } from "react-icons/hi"

export const Card = ({ data, caption, show, path, href: hrefProp, external = false }) => {
  const href = hrefProp || (path ? `/${path}/${data.slug || data.id}` : "/contact")
  const isExternal = external || /^https?:\/\//.test(href)

  const TitleWrap = ({ children, className }) =>
    isExternal ? (
      <a href={href} className={className} target='_blank' rel='noopener noreferrer'>
        {children}
      </a>
    ) : (
      <Link href={href} className={className}>
        {children}
      </Link>
    )

  return (
    <>
      <div className='card'>
        <div className='card-img'>
          <img
            src={data.cover}
            alt={data.title || "CodeMadeBiz project"}
            loading='lazy'
            decoding='async'
            width={640}
            height={400}
          />
        </div>
        <div className='card-details'>
          <TitleWrap className='title-link'>
            <TitleSm title={data.title} as='h3' />
          </TitleWrap>
          {caption && (
            <TitleWrap>
              {caption} <HiOutlineArrowRight className='link-icon' />
            </TitleWrap>
          )}
          <div className='flex'>
            <span> {data.catgeory} </span> {data.date && <span> / {data.date}</span>}
          </div>

          {show && data.desc && (
            <ul>
              {data.desc.map((text, i) => (
                <li key={i}> - {text.text}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  )
}
