import Head from "next/head"

const SITE_URL = "https://codemadebiz.com"
const DEFAULT_OG = "/images/brand/og-image.png"

export const Seo = ({
  title = "CodeMadeBiz — Software, AI & Marketing for SMBs and Startups",
  description = "CodeMadeBiz builds websites, apps, AI agents, CRM dashboards, and growth systems for local SMBs and startups — plus custom enterprise tools.",
  path = "/",
  image = DEFAULT_OG,
  type = "website",
  noindex = false,
  schema,
}) => {
  const url = `${SITE_URL}${path === "/" ? "" : path}`
  const ogImage = image.startsWith("http") ? image : `${SITE_URL}${image}`
  const schemas = Array.isArray(schema) ? schema : schema ? [schema] : []

  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content={description} />
      <link rel='canonical' href={url} />
      {noindex && <meta name='robots' content='noindex,nofollow' />}

      <meta property='og:type' content={type} />
      <meta property='og:site_name' content='CodeMadeBiz' />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:url' content={url} />
      <meta property='og:image' content={ogImage} />

      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={ogImage} />

      {schemas.map((item, i) => (
        <script
          key={i}
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </Head>
  )
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "CodeMadeBiz",
  url: SITE_URL,
  logo: `${SITE_URL}/images/brand/logo-full.png`,
  email: "contact@codemadebiz.com",
  telephone: "+918762363186",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bengaluru",
    addressCountry: "IN",
  },
  sameAs: [
    "https://www.facebook.com/codemadebiz",
    "https://www.instagram.com/codemadebiz/",
    "https://www.linkedin.com/company/codemadebiz",
    "https://www.youtube.com/@codemadebiz",
    "https://x.com/codemadebiz",
  ],
}

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "CodeMadeBiz",
  url: SITE_URL,
  publisher: { "@id": `${SITE_URL}/#organization` },
}

export default Seo
