import { Hero } from "@/sections"
import { Seo, organizationSchema, websiteSchema } from "@/components/common/Seo"

export default function Home() {
  return (
    <>
      <Seo
        title='CodeMadeBiz — Software, AI & Marketing for SMBs and Startups'
        description='Complete software, AI, and marketing solutions for local SMBs and startups — websites, apps, CRM, AI agents, and custom enterprise tools.'
        path='/'
        schema={[
          { ...organizationSchema, "@id": "https://codemadebiz.com/#organization" },
          websiteSchema,
          {
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "CodeMadeBiz",
            url: "https://codemadebiz.com",
            image: "https://codemadebiz.com/images/brand/og-image.png",
            telephone: "+918762363186",
            areaServed: "IN",
            serviceType: ["Web Development", "App Development", "AI Solutions", "Digital Marketing", "CRM"],
          },
        ]}
      />
      <Hero />
    </>
  )
}
