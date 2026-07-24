import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { RiMenu4Line } from "react-icons/ri"
import { AiOutlineClose } from "react-icons/ai"
import { appointmentHref } from "@/assets/data/offers"
import BrandLogo from "./BrandLogo"

const Header = () => {
  const [activeLink, setActiveLink] = useState("")
  const [open, setOpen] = useState(false)

  const router = useRouter()
  useEffect(() => {
    setActiveLink(router.pathname)
  }, [router.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  useEffect(() => {
    const close = () => setOpen(false)
    router.events.on("routeChangeStart", close)
    return () => router.events.off("routeChangeStart", close)
  }, [router.events])

  const isActive = (path) => (activeLink === path || activeLink.startsWith(`${path}/`) ? "activeLink" : "none")

  return (
    <>
      <header>
        <div className='container'>
          <div className='logo'>
            <BrandLogo size='md' withWordmark priority />
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
            <Link href={appointmentHref()} className='button-primary'>
              Book a consultation
            </Link>
          </nav>
          <button className='button-menu' onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"}>
            {open ? <AiOutlineClose size={24} /> : <RiMenu4Line size={24} />}
          </button>
        </div>
      </header>
    </>
  )
}

export default Header
