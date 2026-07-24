import { Agency } from "@/sections"
import { Seo, organizationSchema } from "@/components/common/Seo"

const AgencyPage = () => {
  return (
    <>
      <Seo
        title='About CodeMadeBiz'
        description='CodeMadeBiz builds software, AI, and marketing solutions for local SMBs and startups — plus custom enterprise tools in Bengaluru and remotely.'
        path='/agency'
        schema={organizationSchema}
      />
      <Agency />
    </>
  )
}

export default AgencyPage
