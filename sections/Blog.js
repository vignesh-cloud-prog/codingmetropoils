import { Title, TitleSm } from "@/components/common/Title"
import { BlogCard } from "@/components/router"
import React from "react"

const Blog = () => {
  return (
    <>
      <section className='agency bg-top latest-articles'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='BLOG' />
            <br />
            <br />
            <Title title='Our views on marketing, design & technology' as='h1' />
          </div>
          <BlogCard />
        </div>
      </section>
    </>
  )
}

export default Blog
