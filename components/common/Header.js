import Link from "next/link"
import { TitleLogo } from "./Title"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { RiMenu4Line } from "react-icons/ri"
import { AiOutlineClose } from "react-icons/ai"
import { appointmentHref } from "@/assets/data/offers"

const Header = () => {
  const [activeLink, setActiveLink] = useState("")
  const [open, setOpen] = useState(false)

  const router = useRouter()
  useEffect(() => {
    setActiveLink(router.pathname)
  }, [router.pathname])

  const isActive = (path) => (activeLink === path || activeLink.startsWith(`${path}/`) ? "activeLink" : "none")

  return (
    <>
      <header>
        <div className='container'>
          <div className='logo'>
            <Link href='/'>
              <TitleLogo title='Biz' caption='CodeMade' className='logomin' />
            </Link>
          </div>
          <nav className={open ? "openMenu" : "closeMenu"} onClick={() => setOpen(false)}>
            <Link href='/' className={activeLink == "/" ? "activeLink" : "none"}>
              Home
            </Link>
            <Link href='/services' className={isActive("/services")}>
              Services
            </Link>
            <Link href='/solutions/mvp' className={isActive("/solutions")}>
              Solutions
            </Link>
            <Link href='/pricing' className={isActive("/pricing")}>
              Pricing
            </Link>
            <Link href='/ai' className={isActive("/ai")}>
              AI
            </Link>
            <Link href='/contact' className={isActive("/contact")}>
              Contact
            </Link>
            <Link href={appointmentHref()} className='button-primary' style={{ marginLeft: 30 }}>
              Book a consultation
            </Link>
          </nav>
          <button className='button-menu' onClick={() => setOpen(!open)}>
            {open ? <AiOutlineClose size={25} /> : <RiMenu4Line size={25} />}
          </button>
        </div>
      </header>
    </>
  )
}

export default Header
