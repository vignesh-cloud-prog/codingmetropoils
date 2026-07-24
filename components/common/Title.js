export const TitleLogo = ({ title, caption, className }) => {
  return (
    <p className={`${className || ""} title-logo`.trim()}>
      <span>{caption}</span>
      {title}
    </p>
  )
}

/** Eyebrow / section label — not a document heading by default */
export const TitleSm = ({ title, as: Tag = "p" }) => {
  return <Tag className='titleSm'>{title}</Tag>
}

/** Primary section/page title — h2 by default; pass as="h1" for page heroes */
export const Title = ({ title, className, as: Tag = "h2" }) => {
  return <Tag className={`${className || ""} title`.trim()}>{title}</Tag>
}
