import React from "react"
import { Title, TitleSm } from "@/components/common/Title"
import { Card } from "@/components/common/Card"

const products = [
  {
    id: 1,
    title: "FocusStreak",
    desc: [
      {
        text: "A habit and productivity app that helps users build streaks, stay consistent, and earn through focused daily progress — built and launched as a startup product.",
      },
    ],
    post: "Startup Product",
    cover: "/images/s5.jpg",
    url: "https://focusstreak.codemadebiz.com/",
  },
  {
    id: 2,
    title: "Paidr",
    desc: [
      {
        text: "A payments and billing-focused product experience for modern businesses — streamlining how teams collect, track, and manage paid customer workflows.",
      },
    ],
    post: "Fintech Product",
    cover: "/images/s3.jpg",
    url: "https://paidr.codemadebiz.com/",
  },
  {
    id: 3,
    title: "GanaKaveda",
    desc: [
      {
        text: "A structured platform for learning tech skills, designed to enhance knowledge and practical experience in technology. It aims to make tech education accessible and engaging for everyone.",
      },
    ],
    post: "Learning Platform",
    cover: "/images/products/ganakaveda.jpg",
  },
  {
    id: 4,
    title: "ViPease",
    desc: [
      {
        text: "An intuitive doctor appointment booking system that simplifies the process for both patients and healthcare providers. It helps in managing appointments efficiently, reducing wait times, and improving patient care.",
      },
    ],
    post: "Healthcare Solution",
    cover: "/images/products/vipease.jpg",
  },
  {
    id: 5,
    title: "Transporter",
    desc: [
      {
        text: "A logistics management solution that facilitates shipping anything from small items to larger freight. It connects users with transport services and provides real-time tracking for shipments.",
      },
    ],
    post: "Logistics Platform",
    cover: "/images/products/transporter.jpg",
  },
  {
    id: 6,
    title: "Local Guides App",
    desc: [
      {
        text: "A mobile application that connects local guides with tourists. It helps users discover hidden gems and local experiences, enhancing their travel experience through curated recommendations.",
      },
    ],
    post: "Travel App",
    cover: "/images/products/local-guides.jpg",
  },
  {
    id: 7,
    title: "Saloon Booking App",
    desc: [
      {
        text: "A user-friendly platform for booking salon appointments, allowing customers to easily find and reserve services. It enhances customer satisfaction and helps salons manage bookings effectively.",
      },
    ],
    post: "Beauty & Wellness",
    cover: "/images/products/saloon-booking.jpg",
  },
  {
    id: 8,
    title: "Malanad Market",
    desc: [
      {
        text: "An online marketplace that showcases unique Malanad products, promoting local artisans and businesses. It serves as a platform for selling authentic local goods and connecting with customers.",
      },
    ],
    post: "E-commerce Platform",
    cover: "/images/products/malanad-market.jpg",
  },
  {
    id: 9,
    title: "Real Estate SaaS",
    desc: [
      {
        text: "A comprehensive real estate management software that assists agents and brokers in managing listings, client interactions, and transactions seamlessly.",
      },
    ],
    post: "Real Estate Solution",
    cover: "/images/products/real-estate.jpg",
  },
  {
    id: 10,
    title: "Travel Agency Management SaaS",
    desc: [
      {
        text: "A complete management solution for travel agencies, enabling them to streamline operations, manage bookings, and enhance customer engagement effectively.",
      },
    ],
    post: "Travel Management",
    cover: "/images/products/travel-agency.jpg",
  },
  {
    id: 11,
    title: "Hotel Booking Management SaaS",
    desc: [
      {
        text: "A powerful tool for hotels to manage reservations, track occupancy, and communicate with guests, improving overall efficiency and guest experience.",
      },
    ],
    post: "Hotel Management",
    cover: "/images/products/hotel-booking.jpg",
  },
  {
    id: 12,
    title: "Customer Reviews and Contact Collection App",
    desc: [
      {
        text: "An application designed to gather customer feedback and manage contact information. It helps businesses send reminders and promotional offers, enhancing customer retention.",
      },
    ],
    post: "Customer Engagement",
    cover: "/images/products/customer-reviews.jpg",
  },
]

const Products = () => {
  return (
    <>
      <section className='agency bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='CASE STUDIES' /> <br />
            <br />
            <Title title='Proof from SMB, startup, and product builds' className='title-bg' />
            <p>Selected work that maps to Launch, Growth, Scale, and custom product delivery.</p>
          </div>
          <div className='products-grid'>
            {products.map((item) => (
              <Card
                data={item}
                key={item.id}
                caption={item.url ? "View live" : item.post}
                show={true}
                href={item.url || "/appointment?intent=software"}
                external={Boolean(item.url)}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Products
