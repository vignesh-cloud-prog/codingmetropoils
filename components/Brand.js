import React from "react"
import { brand } from "@/assets/data/dummydata"

const Brand = () => {
  return (
    <>
      <section className='brand'>
        <div className='container'>
          <div className='brand-content grid-6 py'>
            {brand.map((item) => (
              <div className='images' key={item.id}>
                <img
                  src={item.cover}
                  alt={`Partner logo ${item.id}`}
                  width={120}
                  height={60}
                  loading='lazy'
                  decoding='async'
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Brand
