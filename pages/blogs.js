import { Blog } from "@/sections"
import { Seo } from "@/components/common/Seo"

const Blogs = () => {
  return (
    <>
      <Seo
        title='Blog — Marketing, Design & Technology | CodeMadeBiz'
        description='Articles from CodeMadeBiz on AI, software development, branding, SEO, and growth for local SMBs and startups.'
        path='/blogs'
        schema={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "CodeMadeBiz Blog",
          url: "https://codemadebiz.com/blogs",
          description: "Views on marketing, design, AI, and technology for SMBs and startups.",
        }}
      />
      <Blog />
    </>
  )
}

export default Blogs
