import Link from "next/link"
import BrandName from "./BrandName"

const sizes = {
  sm: { width: 32, height: 32 },
  md: { width: 40, height: 40 },
  lg: { width: 56, height: 56 },
  xl: { width: 72, height: 72 },
}

export const BrandLogo = ({ size = "md", withWordmark = false, href = "/", className = "", priority = false }) => {
  const dim = sizes[size] || sizes.md
  const content = (
    <span className={`brand-logo brand-logo-${size} ${className}`.trim()}>
      <img
        src='/images/brand/logo-full.png'
        alt='CodeMadeBiz'
        width={dim.width}
        height={dim.height}
        loading={priority ? "eager" : "lazy"}
        decoding='async'
      />
      {withWordmark && <BrandName className='brand-wordmark' />}
    </span>
  )

  if (!href) return content

  return (
    <Link href={href} className='brand-logo-link' aria-label='CodeMadeBiz home'>
      {content}
    </Link>
  )
}

export default BrandLogo
