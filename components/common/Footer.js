import Link from "next/link"
import { BsFacebook } from "react-icons/bs"
import { AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle, AiFillYoutube } from "react-icons/ai"
import { HiOutlineClipboardCopy } from "react-icons/hi"
import { useState, useEffect } from "react"
import { appointmentHref } from "@/assets/data/offers"
import BrandLogo from "./BrandLogo"
import BrandName from "./BrandName"
import ConsultationLink from "./ConsultationLink"
import { trackEmail, trackWhatsApp } from "@/lib/analytics"

const Footer = () => {
  const [phoneCopied, setPhoneCopied] = useState(false)
  const [emailCopied, setEmailCopied] = useState(false)
  const [currentYear, setCurrentYear] = useState("")

  const phoneNumber = "+918762363186"
  const email = "contact@codemadebiz.com"

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString())
  }, [])

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text).then(() => {
      if (type === "phone") {
        setPhoneCopied(true)
        setTimeout(() => setPhoneCopied(false), 2000)
      } else {
        setEmailCopied(true)
        setTimeout(() => setEmailCopied(false), 2000)
      }
    })
  }

  return (
    <>
      <footer>
        <div className='container'>
          <div className='grid-4'>
            <div className='logo'>
              <BrandLogo size='md' withWordmark />
              <br />
              <span>Software, AI & marketing for SMBs and startups</span>
              <br />
              <br />
              <div className='contact-item'>
                <a
                  href={`https://wa.me/${phoneNumber.replace("+", "")}`}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='contact-link'
                  onClick={() => trackWhatsApp("footer")}
                >
                  <h3>{phoneNumber}</h3>
                </a>
                <button onClick={() => copyToClipboard(phoneNumber, "phone")} className='copy-button' aria-label='Copy phone number' title='Copy phone number'>
                  <HiOutlineClipboardCopy size={20} />
                  {phoneCopied && <span className='copied-tooltip'>Copied!</span>}
                </button>
              </div>

              <div className='contact-item'>
                <a href={`mailto:${email}`} className='contact-link' onClick={() => trackEmail("footer")}>
                  <h3>{email}</h3>
                </a>
                <button onClick={() => copyToClipboard(email, "email")} className='copy-button' aria-label='Copy email' title='Copy email'>
                  <HiOutlineClipboardCopy size={20} />
                  {emailCopied && <span className='copied-tooltip'>Copied!</span>}
                </button>
              </div>
              <br />
              <ConsultationLink href={appointmentHref()} intent='default' location='footer' className='button-primary'>
                Book a consultation
              </ConsultationLink>
            </div>

            <ul>
              <h3>COMPANY</h3>
              <li>
                <Link href='/agency'>About</Link>
              </li>
              <li>
                <Link href='/blogs'>Blog</Link>
              </li>
              <li>
                <Link href='/contact'>Contact</Link>
              </li>
              <li>
                <Link href={appointmentHref()}>Consultation</Link>
              </li>
            </ul>
            <ul>
              <h3>SERVICES</h3>
              <li>
                <Link href='/ai'>AI Growth Stack</Link>
              </li>
              <li>
                <Link href='/pricing'>Software Plans</Link>
              </li>
              <li>
                <Link href='/solutions/website-crm'>Website + CRM</Link>
              </li>
              <li>
                <Link href='/solutions/mvp'>Startup MVP</Link>
              </li>
              <li>
                <Link href='/services'>All services</Link>
              </li>
            </ul>
            <ul>
              <h3>CONNECT</h3>
              <div className='connect'>
                <li>
                  <Link href='https://www.facebook.com/codemadebiz'>
                    <BsFacebook size={25} />
                  </Link>
                </li>
                <li>
                  <Link href='https://www.youtube.com/@codemadebiz'>
                    <AiFillYoutube size={25} />
                  </Link>
                </li>
                <li>
                  <Link href='https://www.instagram.com/codemadebiz/'>
                    <AiFillInstagram size={25} />
                  </Link>
                </li>
                <li>
                  <Link href='https://www.linkedin.com/company/codemadebiz'>
                    <AiFillLinkedin size={25} />
                  </Link>
                </li>
                <li>
                  <Link href='https://x.com/codemadebiz'>
                    <AiFillTwitterCircle size={25} />
                  </Link>
                </li>
              </div>
            </ul>
          </div>
          <div className='legal connect py'>
            <div className='text'>
              <span>
                © {currentYear} <BrandName />. ALL RIGHTS RESERVED.
              </span>
            </div>
            <div className='connect'>
              <Link href='/privacy'>PRIVACY POLICY</Link>
              <span> &nbsp; | &nbsp; </span>
              <Link href='/terms'>TERMS & CONDITIONS</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
