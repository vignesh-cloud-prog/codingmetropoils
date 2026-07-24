import Link from "next/link"
import { intentFromHref, trackConsultationCta } from "@/lib/analytics"

/**
 * Appointment CTA that fires consultation_cta_clicked once per click.
 */
const ConsultationLink = ({
  href,
  intent,
  location = "other",
  className = "",
  children,
  ...rest
}) => {
  const resolvedIntent = intent || intentFromHref(href)

  const onClick = (event) => {
    trackConsultationCta(location, resolvedIntent)
    if (typeof rest.onClick === "function") rest.onClick(event)
  }

  const { onClick: _ignored, ...linkProps } = rest

  return (
    <Link href={href} className={className} onClick={onClick} {...linkProps}>
      {children}
    </Link>
  )
}

export default ConsultationLink
