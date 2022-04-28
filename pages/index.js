import { useState, useEffect } from 'react'
import Head from 'next/head'
import Dropdown from '../components/Dropdown'
import Header from '../components/Header'
import Services from '../components/Services'
import PricingPage from '../components/Pricing'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Hero from '../components/Hero'

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <Head>
        <title>B13Designs.com</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <main>

        <Hero />

        <Services />

        <PricingPage />

        <Contact />
        
      </main>

      <Footer />
    </div>
  )
}
