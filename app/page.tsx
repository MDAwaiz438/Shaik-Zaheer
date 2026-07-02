"use client"
import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Hero from '@/components/home/Hero'
import TrustBadges from '@/components/home/TrustBadges'
import Brands from '@/components/home/Brands'
import FeaturedServices from '@/components/home/FeaturedServices'

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const appRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    // Hero animations
    gsap.from('.hero-text h1', { y: 50, opacity: 0, duration: 1, ease: 'power3.out', delay: 0.2 })
    gsap.from('.hero-text p', { y: 30, opacity: 0, duration: 1, ease: 'power3.out', delay: 0.4 })
    gsap.from('.hero-text .btn', { y: 20, opacity: 0, duration: 0.8, ease: 'power3.out', delay: 0.6, stagger: 0.1 })
    
    // Feature cards scroll animation
    // Feature cards scroll animation
    gsap.fromTo('.feature-card', 
      { y: 50, opacity: 0 },
      {
        scrollTrigger: {
          trigger: '.features',
          start: 'top 85%',
        },
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out'
      }
    )

    // Featured products scroll animation
    gsap.fromTo('.product-card', 
      { y: 50, opacity: 0 },
      {
        scrollTrigger: {
          trigger: '.featured',
          start: 'top 80%',
        },
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out'
      }
    )
  }, { scope: appRef })

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'ZED Computers',
    image: 'https://zedcomputers.in/logo.png', // Update with actual logo URL
    '@id': 'https://zedcomputers.in',
    url: 'https://zedcomputers.in',
    telephone: '+918309909248',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Ahmed apartment Malakpet',
      addressLocality: 'Hyderabad',
      postalCode: '500024',
      addressCountry: 'IN'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 17.3730,
      longitude: 78.4981
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ],
      opens: '10:00',
      closes: '20:00'
    }
  }

  return (
    <div className="app-wrapper" ref={appRef}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="noise-overlay"></div>
      <main>
        <Hero />
        <TrustBadges />
        <Brands />
        <FeaturedServices />
      </main>
    </div>
  )
}